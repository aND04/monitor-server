import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Evaluation} from "../../evaluation/evaluation.entity";
import {Repository} from "typeorm";
import {IPage} from "./page.model";

@Injectable()
export class PageSyncService {

	constructor(
		@InjectRepository(Evaluation)
		private readonly evaluationRepository: Repository<Evaluation>
	) {
	}

	public async findAll(): Promise<Array<IPage>> {
		const items = new Array<IPage>();
		const evaluations = await this.findAllEvaluations();
		evaluations.forEach((evaluation) => items.push({
			pageId: evaluation.PageId,
			evaluationId: evaluation.EvaluationId,
			htmlBase64: evaluation.Pagecode
		}));
		return items;
	}

	private async findAllEvaluations(): Promise<Array<Evaluation>> {
		return this.evaluationRepository.find({take: 10});
	}
}
