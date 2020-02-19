import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository, getManager } from 'typeorm';
import { Tag } from './tag.entity';

@Injectable()
export class TagService {

  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
    private readonly connection: Connection
  ) {}

  findByTagName(tagName: string): Promise<Tag | undefined> {
    return this.tagRepository.findOne({ where: { Name: tagName } });
  }

  async findAll(): Promise<any> {
    const manager = getManager();
    const tags = await manager.query(`SELECT 
        t.*,
        COUNT(distinct tw.WebsiteId) as Websites 
      FROM 
        Tag as t
        LEFT OUTER JOIN TagWebsite as tw ON tw.TagId = t.TagId
      WHERE
        t.UserId IS NULL
      GROUP BY t.TagId`);
    
    return tags;
  }

  async createOne(tag: Tag): Promise<boolean> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    let hasError = false;
    try {
      await queryRunner.manager.save(tag);

      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
      hasError = true;
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }

    return !hasError;
  }
}
