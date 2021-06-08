import {Controller, Get} from "@nestjs/common";
import {PageSyncService} from "./page-sync.service";
import {success} from "../../lib/response";

@Controller('page-sync')
export class PageSyncController {
	constructor(private readonly pageSyncService: PageSyncService) {
	}

	@Get()
	async findAll() {
		return success(await this.pageSyncService.findAll());
	}
}
