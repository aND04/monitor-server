import { WebsiteService } from './website.service';
export declare class WebsiteController {
    private readonly websiteService;
    constructor(websiteService: WebsiteService);
    reEvaluateWebsitePages(req: any): Promise<any>;
    createWebsite(req: any): Promise<any>;
    updateWebsite(req: any): Promise<any>;
    updateWebsitePagesObservatory(req: any): Promise<any>;
    deleteWebsite(req: any): Promise<any>;
    importWebsiteFromMyMonitor(req: any): Promise<any>;
    getAllWebsites(): Promise<any>;
    getWebsiteInfo(websiteId: number): Promise<any>;
    getWebsiteCurrentDomain(websiteId: number): Promise<any>;
    getAllWebsiteDomains(website: string, user: string): Promise<any>;
    getAllWebsitePages(websiteId: number): Promise<any>;
    getAllOfficialWebsites(): Promise<any>;
    getWebsitesWithoutUser(): Promise<any>;
    getWebsitesWithoutEntity(): Promise<any>;
    getNumberOfStudyMonitorUsers(): Promise<any>;
    getNumberOfMyMonitorUsers(): Promise<any>;
    getNumberOfObservatoryTags(): Promise<any>;
    checkIfWebsiteExists(name: string): Promise<any>;
    getMyMonitorUserWebsites(req: any): Promise<any>;
    reEvaluateMyMonitorUserWebsitePages(req: any): Promise<any>;
    reEvaluateStudyMonitorUserTagWebsitePages(req: any): Promise<any>;
    getStudyMonitorUserTagWebsites(req: any, tag: string): Promise<any>;
    getStudyMonitorUserOtherTagsWebsites(req: any, tag: string): Promise<any>;
    checkIfStudyMonitorUserTagWebsiteNameExists(req: any, tag: string, website: string): Promise<any>;
    checkIfStudyMonitorUserTagWebsiteDomainExists(req: any, tag: string, domain: string): Promise<any>;
    linkStudyMonitorUserTagWebsite(req: any): Promise<any>;
    createStudyMonitorUserTagWebsite(req: any): Promise<any>;
    removeStudyMonitorUserTagWebsite(req: any): Promise<any>;
}
