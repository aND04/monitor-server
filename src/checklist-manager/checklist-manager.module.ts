import {Module} from "@nestjs/common";
import {PageSyncService} from "./page-sync/page-sync.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Evaluation} from "../evaluation/evaluation.entity";
import {Page} from "../page/page.entity";
import {EvaluationModule} from "../evaluation/evaluation.module";
import {PageSyncController} from "./page-sync/page-sync.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Evaluation, Page]), EvaluationModule],
    controllers: [PageSyncController],
    providers: [PageSyncService],
})
export class ChecklistManagerModule {}
