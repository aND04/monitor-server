import { Controller, Post, Get, Request, UseGuards, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PageService } from './page.service';
import { success } from '../lib/response';

@Controller('page')
export class PageController {

  constructor(private readonly pageService: PageService) { }

  @UseGuards(AuthGuard('jwt-admin'))
  @Get('all')
  async getAllPages(): Promise<any> {
    return success(await this.pageService.findAll());
  }

  @UseGuards(AuthGuard('jwt-monitor'))
  @Get('myMonitor/website/:website')
  async getAllMyMonitorUserWebsitePages(@Request() req: any, @Param('website') website: string): Promise<any> {
    return success(await this.pageService.findAllFromMyMonitorUserWebsite(req.user.userId, website));
  }

  @UseGuards(AuthGuard('jwt-monitor'))
  @Post('myMonitor/create')
  async createMyMonitorUserWebsitePages(@Request() req: any): Promise<any> {
    const website = req.body.website;
    const domain = req.body.domain;
    const uris = JSON.parse(req.body.pages);
    return success(await this.pageService.createMyMonitorUserWebsitePages(req.user.userId, website, domain, uris));
  }

  @UseGuards(AuthGuard('jwt-monitor'))
  @Post('myMonitor/remove')
  async removeMyMonitorUserWebsitePages(@Request() req: any): Promise<any> {
    const website = req.body.website;
    const ids = JSON.parse(req.body.pagesId);
    return success(await this.pageService.removeMyMonitorUserWebsitePages(req.user.userId, website, ids));
  }
}