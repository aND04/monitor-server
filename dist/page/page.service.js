"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const website_entity_1 = require("../website/website.entity");
const page_entity_1 = require("./page.entity");
const evaluation_entity_1 = require("../evaluation/evaluation.entity");
const evaluation_service_1 = require("../evaluation/evaluation.service");
let PageService = class PageService {
    constructor(websiteRepository, pageRepository, connection, evaluationService) {
        this.websiteRepository = websiteRepository;
        this.pageRepository = pageRepository;
        this.connection = connection;
        this.evaluationService = evaluationService;
    }
    async findAll() {
        const manager = typeorm_2.getManager();
        const pages = await manager.query(`SELECT p.*, e.Score, e.Evaluation_Date 
      FROM 
        Page as p
        LEFT OUTER JOIN Evaluation e ON e.PageId = p.PageId AND e.Evaluation_Date = (
          SELECT Evaluation_Date FROM Evaluation 
          WHERE PageId = p.PageId
          ORDER BY Evaluation_Date DESC LIMIT 1
        ) 
      WHERE
        LOWER(p.Show_In) LIKE '1%'
      GROUP BY p.PageId, e.Score, e.Evaluation_Date`);
        return pages;
    }
    getObservatoryData() {
        const manager = typeorm_2.getManager();
        return manager.query(`
      SELECT
        e.EvaluationId,
        e.Title,
        e.Score,
        e.Errors,
        e.A,
        e.AA,
        e.AAA,
        e.Evaluation_Date,
        p.PageId,
        p.Uri,
        p.Creation_Date as Page_Creation_Date,
        d.Url,
        w.WebsiteId,
        w.Name as Website_Name,
        w.Creation_Date as Website_Creation_Date,
        en.Long_Name as Entity_Name,
        t.TagId,
        t.Name as Tag_Name,
        t.Show_in_Observatorio,
        t.Creation_Date as Tag_Creation_Date
      FROM
        Evaluation as e,
        Page as p,
        DomainPage as dp,
        Domain as d,
        Website as w
        LEFT OUTER JOIN Entity as en ON en.EntityId = w.EntityId,
        TagWebsite as tw,
        Tag as t
      WHERE
        t.Show_in_Observatorio = 1 AND
        tw.TagId = t.TagId AND
        w.WebsiteId = tw.WebsiteId AND
        d.WebsiteId = w.WebsiteId AND
        d.Active = 1 AND
        dp.DomainId = d.DomainId AND
        p.PageId = dp.PageId AND
        p.Show_In LIKE '%1' AND
        e.PageId = p.PageId AND e.Evaluation_Date = (
          SELECT Evaluation_Date FROM Evaluation 
          WHERE PageId = p.PageId AND Show_To LIKE "1_" 
          ORDER BY Evaluation_Date DESC LIMIT 1
        )
    `);
    }
    async findAllFromMyMonitorUserWebsite(userId, websiteName) {
        const website = await this.websiteRepository.findOne({ where: { UserId: userId, Name: websiteName } });
        if (!website) {
            throw new common_1.InternalServerErrorException();
        }
        const manager = typeorm_2.getManager();
        const pages = await manager.query(`SELECT 
      distinct p.*,
      e.Score,
      e.A,
      e.AA,
      e.AAA,
      e.Errors,
      e.Evaluation_Date
    FROM 
      Page as p,
      Website as w,
      Domain as d,
      DomainPage as dp,
      Evaluation as e
    WHERE
      w.Name = ? AND
      w.UserId = ? AND
      d.WebsiteId = w.WebsiteId AND
      dp.DomainId = d.DomainId AND
      p.PageId = dp.PageId AND
      e.PageId = p.PageId AND
      p.Show_In LIKE '_1_' AND
      e.Evaluation_Date IN (SELECT max(Evaluation_Date) FROM Evaluation WHERE PageId = p.PageId)`, [website.Name, website.UserId]);
        return pages;
    }
    async createMyMonitorUserWebsitePages(userId, website, domain, uris) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        let hasError = false;
        try {
            for (const uri of uris || []) {
                const page = await queryRunner.manager.findOne(page_entity_1.Page, { where: { Uri: decodeURIComponent(uri) } });
                if (page) {
                    const showIn = page.Show_In[0] + '1' + page.Show_In[2];
                    await queryRunner.manager.update(page_entity_1.Page, { PageId: page.PageId }, { Show_In: showIn });
                    await queryRunner.manager.update(evaluation_entity_1.Evaluation, { PageId: page.PageId, Show_To: typeorm_2.Like('1_') }, { Show_To: '11' });
                }
                else {
                    const evaluation = await this.evaluationService.evaluateUrl(uri);
                    const newPage = new page_entity_1.Page();
                    newPage.Uri = uri;
                    newPage.Show_In = '010';
                    newPage.Creation_Date = new Date();
                    const insertPage = await queryRunner.manager.save(newPage);
                    const webpage = Buffer.from(evaluation.pagecode).toString('base64');
                    const data = evaluation.data;
                    data.title = data.title.replace(/"/g, '');
                    const conform = data.conform.split('@');
                    const tot = Buffer.from(JSON.stringify(data.tot)).toString('base64');
                    const nodes = Buffer.from(JSON.stringify(data.nodes)).toString('base64');
                    const elems = Buffer.from(JSON.stringify(data.elems)).toString('base64');
                    const newEvaluation = new evaluation_entity_1.Evaluation();
                    newEvaluation.PageId = insertPage.PageId;
                    newEvaluation.Title = data.title;
                    newEvaluation.Score = data.score;
                    newEvaluation.Pagecode = webpage;
                    newEvaluation.Tot = tot;
                    newEvaluation.Nodes = nodes;
                    newEvaluation.Errors = elems;
                    newEvaluation.A = conform[0];
                    newEvaluation.AA = conform[1];
                    newEvaluation.AAA = conform[2];
                    newEvaluation.Evaluation_Date = data.date;
                    newEvaluation.Show_To = '01';
                    await queryRunner.manager.save(newEvaluation);
                    await queryRunner.manager.query(`INSERT INTO DomainPage (DomainId, PageId) 
            SELECT 
              d.DomainId, 
              ?
            FROM
              Website as w,
              Domain as d
            WHERE 
              w.Name = ? AND
              w.UserId = ? AND
              d.WebsiteId = w.WebsiteId AND
              d.Url = ? AND
              d.Active = 1`, [insertPage.PageId, website, userId, domain]);
                }
            }
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            hasError = true;
            console.log(err);
        }
        finally {
            await queryRunner.release();
        }
        return await this.findAllFromMyMonitorUserWebsite(userId, website);
    }
    async removeMyMonitorUserWebsitePages(userId, website, pagesIds) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        let hasError = false;
        try {
            for (const pageId of pagesIds || []) {
                const page = await this.pageRepository.findOne({ select: ['Show_In'], where: { PageId: pageId } });
                if (page) {
                    const showIn = page.Show_In[0] + '0' + page.Show_In[2];
                    await queryRunner.manager.update(page_entity_1.Page, { PageId: pageId }, { Show_In: showIn });
                    await queryRunner.manager.update(evaluation_entity_1.Evaluation, { PageId: pageId, Show_To: typeorm_2.Like('11') }, { Show_To: '10' });
                }
            }
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            hasError = true;
            console.log(err);
        }
        finally {
            await queryRunner.release();
        }
        return await this.findAllFromMyMonitorUserWebsite(userId, website);
    }
};
PageService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(website_entity_1.Website)),
    __param(1, typeorm_1.InjectRepository(page_entity_1.Page)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Connection,
        evaluation_service_1.EvaluationService])
], PageService);
exports.PageService = PageService;
//# sourceMappingURL=page.service.js.map