import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { APILogDetailsResponse } from '../models/APILogDetailsResponse';
import { APILogListResponse } from '../models/APILogListResponse';
import { APILogListResponseResults } from '../models/APILogListResponseResults';
import { ContentLibraryItemListResponse } from '../models/ContentLibraryItemListResponse';
import { ContentLibraryItemListResponseResults } from '../models/ContentLibraryItemListResponseResults';
import { ContentLibraryItemResponse } from '../models/ContentLibraryItemResponse';
import { ContentLibraryItemResponseCreatedBy } from '../models/ContentLibraryItemResponseCreatedBy';
import { DocumentCreateByPdfRequest } from '../models/DocumentCreateByPdfRequest';
import { DocumentCreateByPdfRequestRecipients } from '../models/DocumentCreateByPdfRequestRecipients';
import { DocumentCreateByTemplateRequest } from '../models/DocumentCreateByTemplateRequest';
import { DocumentCreateByTemplateRequestContentLibraryItems } from '../models/DocumentCreateByTemplateRequestContentLibraryItems';
import { DocumentCreateByTemplateRequestContentPlaceholders } from '../models/DocumentCreateByTemplateRequestContentPlaceholders';
import { DocumentCreateByTemplateRequestImages } from '../models/DocumentCreateByTemplateRequestImages';
import { DocumentCreateByTemplateRequestRecipients } from '../models/DocumentCreateByTemplateRequestRecipients';
import { DocumentCreateLinkRequest } from '../models/DocumentCreateLinkRequest';
import { DocumentCreateLinkResponse } from '../models/DocumentCreateLinkResponse';
import { DocumentCreateResponse } from '../models/DocumentCreateResponse';
import { DocumentDetailsResponse } from '../models/DocumentDetailsResponse';
import { DocumentDetailsResponseCreatedBy } from '../models/DocumentDetailsResponseCreatedBy';
import { DocumentDetailsResponseGrandTotal } from '../models/DocumentDetailsResponseGrandTotal';
import { DocumentDetailsResponseLinkedObjects } from '../models/DocumentDetailsResponseLinkedObjects';
import { DocumentDetailsResponseRecipients } from '../models/DocumentDetailsResponseRecipients';
import { DocumentDetailsResponseTemplate } from '../models/DocumentDetailsResponseTemplate';
import { DocumentListResponse } from '../models/DocumentListResponse';
import { DocumentListResponseResults } from '../models/DocumentListResponseResults';
import { DocumentOrderingFieldsEnum } from '../models/DocumentOrderingFieldsEnum';
import { DocumentSendRequest } from '../models/DocumentSendRequest';
import { DocumentSendResponse } from '../models/DocumentSendResponse';
import { DocumentStatusEnum } from '../models/DocumentStatusEnum';
import { DocumentStatusResponse } from '../models/DocumentStatusResponse';
import { DocumentsFolderCreateRequest } from '../models/DocumentsFolderCreateRequest';
import { DocumentsFolderCreateResponse } from '../models/DocumentsFolderCreateResponse';
import { DocumentsFolderListResponse } from '../models/DocumentsFolderListResponse';
import { DocumentsFolderListResponseResults } from '../models/DocumentsFolderListResponseResults';
import { DocumentsFolderRenameRequest } from '../models/DocumentsFolderRenameRequest';
import { DocumentsFolderRenameResponse } from '../models/DocumentsFolderRenameResponse';
import { FormListResponse } from '../models/FormListResponse';
import { FormListResponseResults } from '../models/FormListResponseResults';
import { InlineObject } from '../models/InlineObject';
import { LinkedObjectCreateRequest } from '../models/LinkedObjectCreateRequest';
import { LinkedObjectCreateResponse } from '../models/LinkedObjectCreateResponse';
import { LinkedObjectListResponse } from '../models/LinkedObjectListResponse';
import { OAuth2AccessTokenResponse } from '../models/OAuth2AccessTokenResponse';
import { PricingTableRequest } from '../models/PricingTableRequest';
import { PricingTableRequestData } from '../models/PricingTableRequestData';
import { PricingTableRequestDataDiscount } from '../models/PricingTableRequestDataDiscount';
import { PricingTableRequestOptions } from '../models/PricingTableRequestOptions';
import { PricingTableRequestOptions1 } from '../models/PricingTableRequestOptions1';
import { PricingTableRequestOptionsDiscount } from '../models/PricingTableRequestOptionsDiscount';
import { PricingTableRequestOptionsTaxFirst } from '../models/PricingTableRequestOptionsTaxFirst';
import { PricingTableRequestOptionsTaxSecond } from '../models/PricingTableRequestOptionsTaxSecond';
import { PricingTableRequestRows } from '../models/PricingTableRequestRows';
import { PricingTableRequestSections } from '../models/PricingTableRequestSections';
import { PricingTablesResponse } from '../models/PricingTablesResponse';
import { PricingTablesResponseDiscount } from '../models/PricingTablesResponseDiscount';
import { PricingTablesResponseItems } from '../models/PricingTablesResponseItems';
import { PricingTablesResponseOptions } from '../models/PricingTablesResponseOptions';
import { PricingTablesResponseSummary } from '../models/PricingTablesResponseSummary';
import { PricingTablesResponseTables } from '../models/PricingTablesResponseTables';
import { PublicV1DocumentsContentLibraryItems } from '../models/PublicV1DocumentsContentLibraryItems';
import { PublicV1DocumentsContentPlaceholders } from '../models/PublicV1DocumentsContentPlaceholders';
import { PublicV1DocumentsImages } from '../models/PublicV1DocumentsImages';
import { PublicV1DocumentsRecipients } from '../models/PublicV1DocumentsRecipients';
import { PublicV1DocumentsTokens } from '../models/PublicV1DocumentsTokens';
import { TemplateDetailsResponse } from '../models/TemplateDetailsResponse';
import { TemplateDetailsResponseAssignedTo } from '../models/TemplateDetailsResponseAssignedTo';
import { TemplateDetailsResponseContentPlaceholders } from '../models/TemplateDetailsResponseContentPlaceholders';
import { TemplateDetailsResponseFields } from '../models/TemplateDetailsResponseFields';
import { TemplateDetailsResponseImages } from '../models/TemplateDetailsResponseImages';
import { TemplateDetailsResponsePreassignedPerson } from '../models/TemplateDetailsResponsePreassignedPerson';
import { TemplateDetailsResponseRoles } from '../models/TemplateDetailsResponseRoles';
import { TemplateDetailsResponseTokens } from '../models/TemplateDetailsResponseTokens';
import { TemplateListResponse } from '../models/TemplateListResponse';
import { TemplateListResponseResults } from '../models/TemplateListResponseResults';
import { TemplatesFolderCreateRequest } from '../models/TemplatesFolderCreateRequest';
import { TemplatesFolderCreateResponse } from '../models/TemplatesFolderCreateResponse';
import { TemplatesFolderListResponse } from '../models/TemplatesFolderListResponse';
import { TemplatesFolderListResponseResults } from '../models/TemplatesFolderListResponseResults';
import { TemplatesFolderRenameRequest } from '../models/TemplatesFolderRenameRequest';
import { TemplatesFolderRenameResponse } from '../models/TemplatesFolderRenameResponse';

import { ObservableAPILogsApi } from "./ObservableAPI";
import { APILogsApiRequestFactory, APILogsApiResponseProcessor} from "../apis/APILogsApi";

export interface APILogsApiDetailsApiLogRequest {
    /**
     * Log event id.
     * @type string
     * @memberof APILogsApidetailsApiLog
     */
    id: string
}

export interface APILogsApiListApiLogsRequest {
    /**
     * Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-90d\&quot; (for past 90 days).
     * @type string
     * @memberof APILogsApilistApiLogs
     */
    since?: string
    /**
     * Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-10d\&quot; (for past 10 days) or a special \&quot;now\&quot; value.
     * @type string
     * @memberof APILogsApilistApiLogs
     */
    to?: string
    /**
     * The amount of items on each page.
     * @type number
     * @memberof APILogsApilistApiLogs
     */
    count?: number
    /**
     * Page number of the results returned.
     * @type number
     * @memberof APILogsApilistApiLogs
     */
    page?: number
    /**
     * Returns only the predefined status codes. Allows 1xx, 2xx, 3xx, 4xx, and 5xx.
     * @type Array&lt;100 | 200 | 300 | 400 | 500&gt;
     * @memberof APILogsApilistApiLogs
     */
    statuses?: Array<100 | 200 | 300 | 400 | 500>
    /**
     * Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE.
     * @type Array&lt;&#39;GET&#39; | &#39;POST&#39; | &#39;PUT&#39; | &#39;PATCH&#39; | &#39;DELETE&#39;&gt;
     * @memberof APILogsApilistApiLogs
     */
    methods?: Array<'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'>
    /**
     * Returns the results containing a string.
     * @type string
     * @memberof APILogsApilistApiLogs
     */
    search?: string
    /**
     * Returns logs for production/sandbox.
     * @type &#39;PRODUCTION&#39; | &#39;SANDBOX&#39;
     * @memberof APILogsApilistApiLogs
     */
    environmentType?: 'PRODUCTION' | 'SANDBOX'
}

export class ObjectAPILogsApi {
    private api: ObservableAPILogsApi

    public constructor(configuration: Configuration, requestFactory?: APILogsApiRequestFactory, responseProcessor?: APILogsApiResponseProcessor) {
        this.api = new ObservableAPILogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns details of the specific API log event.
     * Details API Log
     * @param param the request object
     */
    public detailsApiLog(param: APILogsApiDetailsApiLogRequest, options?: Configuration): Promise<APILogDetailsResponse> {
        return this.api.detailsApiLog(param.id,  options).toPromise();
    }

    /**
     * Get the list of all logs within the selected workspace. Optionally filter by date, page, and `#` of items per page.
     * List API Log
     * @param param the request object
     */
    public listApiLogs(param: APILogsApiListApiLogsRequest, options?: Configuration): Promise<APILogListResponse> {
        return this.api.listApiLogs(param.since, param.to, param.count, param.page, param.statuses, param.methods, param.search, param.environmentType,  options).toPromise();
    }

}

import { ObservableContentLibraryItemsApi } from "./ObservableAPI";
import { ContentLibraryItemsApiRequestFactory, ContentLibraryItemsApiResponseProcessor} from "../apis/ContentLibraryItemsApi";

export interface ContentLibraryItemsApiDetailsContentLibraryItemRequest {
    /**
     * Content Library Item ID
     * @type string
     * @memberof ContentLibraryItemsApidetailsContentLibraryItem
     */
    id: string
}

export interface ContentLibraryItemsApiListContentLibraryItemsRequest {
    /**
     * Search query. Filter by content library item name.
     * @type string
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    q?: string
    /**
     * Specify content library item ID.
     * @type string
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    id?: string
    /**
     * Returns only the deleted content library items.
     * @type boolean
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    deleted?: boolean
    /**
     * The UUID of the folder where the content library items are stored.
     * @type string
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    folderUuid?: string
    /**
     * Specify how many content library items to return. Default is 50 content library items, maximum is 100 content library items.
     * @type number
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    count?: number
    /**
     * Specify which page of the dataset to return.
     * @type number
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    page?: number
    /**
     * Search tag. Filter by content library item tag.
     * @type string
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    tag?: string
}

export class ObjectContentLibraryItemsApi {
    private api: ObservableContentLibraryItemsApi

    public constructor(configuration: Configuration, requestFactory?: ContentLibraryItemsApiRequestFactory, responseProcessor?: ContentLibraryItemsApiResponseProcessor) {
        this.api = new ObservableContentLibraryItemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return detailed data about a content library item.
     * Details Content Library Item
     * @param param the request object
     */
    public detailsContentLibraryItem(param: ContentLibraryItemsApiDetailsContentLibraryItemRequest, options?: Configuration): Promise<ContentLibraryItemResponse> {
        return this.api.detailsContentLibraryItem(param.id,  options).toPromise();
    }

    /**
     * Optionally filter by a search query or tags.
     * List Content Library Item
     * @param param the request object
     */
    public listContentLibraryItems(param: ContentLibraryItemsApiListContentLibraryItemsRequest, options?: Configuration): Promise<ContentLibraryItemListResponse> {
        return this.api.listContentLibraryItems(param.q, param.id, param.deleted, param.folderUuid, param.count, param.page, param.tag,  options).toPromise();
    }

}

import { ObservableDocumentsApi } from "./ObservableAPI";
import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";

export interface DocumentsApiDeleteDocumentRequest {
    /**
     * Document ID
     * @type string
     * @memberof DocumentsApideleteDocument
     */
    id: string
}

export interface DocumentsApiDocumentCreateRequest {
    /**
     * Set this parameter as &#x60;ev1&#x60; if you want to create a document from PDF with Classic Editor when both editors are enabled for the workspace.
     * @type string
     * @memberof DocumentsApidocumentCreate
     */
    editorVer?: string
    /**
     * 
     * @type InlineObject
     * @memberof DocumentsApidocumentCreate
     */
    inlineObject?: InlineObject
}

export interface DocumentsApiDocumentCreateLinkRequest {
    /**
     * Document ID
     * @type string
     * @memberof DocumentsApidocumentCreateLink
     */
    id: string
    /**
     * 
     * @type DocumentCreateLinkRequest
     * @memberof DocumentsApidocumentCreateLink
     */
    documentCreateLinkRequest: DocumentCreateLinkRequest
}

export interface DocumentsApiDocumentDetailsRequest {
    /**
     * Document ID
     * @type string
     * @memberof DocumentsApidocumentDetails
     */
    id: string
}

export interface DocumentsApiDocumentListRequest {
    /**
     * Return results where the &#x60;date_completed&#x60; field (ISO 8601) is greater than or equal to this value.
     * @type string
     * @memberof DocumentsApidocumentList
     */
    completedFrom?: string
    /**
     * Return results where the &#x60;date_completed&#x60; field (ISO 8601) is less than or equal to this value.
     * @type string
     * @memberof DocumentsApidocumentList
     */
    completedTo?: string
    /**
     * Specify how many document results to return. Default is 50 documents, maximum is 100 documents.
     * @type number
     * @memberof DocumentsApidocumentList
     */
    count?: number
    /**
     * Return results where the &#x60;date_created&#x60; field (ISO 8601) is greater than or equal to this value.
     * @type string
     * @memberof DocumentsApidocumentList
     */
    createdFrom?: string
    /**
     * Return results where the &#x60;date_created&#x60; field (ISO 8601) is less than this value.
     * @type string
     * @memberof DocumentsApidocumentList
     */
    createdTo?: string
    /**
     * Returns only the deleted documents.
     * @type boolean
     * @memberof DocumentsApidocumentList
     */
    deleted?: boolean
    /**
     * 
     * @type string
     * @memberof DocumentsApidocumentList
     */
    id?: string
    /**
     * The UUID of the folder where the documents are stored.
     * @type string
     * @memberof DocumentsApidocumentList
     */
    folderUuid?: string
    /**
     * Specify the form used for documents creation. This parameter can&#39;t be used with template_id.
     * @type string
     * @memberof DocumentsApidocumentList
     */
    formId?: string
    /**
     * Specify metadata to filter by in the format of &#x60;metadata_{metadata-key}&#x3D;{metadata-value}&#x60; such as &#x60;metadata_opportunity_id&#x3D;2181432&#x60;. The &#x60;metadata_&#x60; prefix is always required.
     * @type string
     * @memberof DocumentsApidocumentList
     */
    metadata?: string
    /**
     * Return results where the &#x60;date_modified&#x60; field (iso-8601) is greater than or equal to this value.
     * @type string
     * @memberof DocumentsApidocumentList
     */
    modifiedFrom?: string
    /**
     * Return results where the &#x60;date_modified&#x60; field (iso-8601) is less than this value.
     * @type string
     * @memberof DocumentsApidocumentList
     */
    modifiedTo?: string
    /**
     * Specify the order of documents to return. Use &#x60;value&#x60; (for example, &#x60;date_created&#x60;) for ASC and &#x60;-value&#x60; (for example, &#x60;-date_created&#x60;) for DESC.
     * @type DocumentOrderingFieldsEnum
     * @memberof DocumentsApidocumentList
     */
    orderBy?: DocumentOrderingFieldsEnum
    /**
     * Specify which page of the dataset to return.
     * @type number
     * @memberof DocumentsApidocumentList
     */
    page?: number
    /**
     * Search query. Filter by document reference number (this token is stored on the template level) or name.
     * @type string
     * @memberof DocumentsApidocumentList
     */
    q?: string
    /**
     * Specify the status of documents to return.   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined 
     * @type DocumentStatusEnum
     * @memberof DocumentsApidocumentList
     */
    status?: DocumentStatusEnum
    /**
     * Specify the status of documents to return (exclude).   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined 
     * @type DocumentStatusEnum
     * @memberof DocumentsApidocumentList
     */
    statusNe?: DocumentStatusEnum
    /**
     * Search tag. Filter by document tag.
     * @type string
     * @memberof DocumentsApidocumentList
     */
    tag?: string
    /**
     * Specify the template used for documents creation. Parameter can&#39;t be used with form_id.
     * @type string
     * @memberof DocumentsApidocumentList
     */
    templateId?: string
}

export interface DocumentsApiDocumentStatusRequest {
    /**
     * Specify document ID.
     * @type string
     * @memberof DocumentsApidocumentStatus
     */
    id: string
}

export interface DocumentsApiDownloadDocumentRequest {
    /**
     * Specify document ID.
     * @type string
     * @memberof DocumentsApidownloadDocument
     */
    id: string
    /**
     * HEX code (for example &#x60;#RRGGBB&#x60;).
     * @type string
     * @memberof DocumentsApidownloadDocument
     */
    watermarkColor?: string
    /**
     * Font size of the watermark.
     * @type number
     * @memberof DocumentsApidownloadDocument
     */
    watermarkFontSize?: number
    /**
     * In range 0.0-1.0
     * @type number
     * @memberof DocumentsApidownloadDocument
     */
    watermarkOpacity?: number
    /**
     * Specify watermark text.
     * @type string
     * @memberof DocumentsApidownloadDocument
     */
    watermarkText?: string
}

export interface DocumentsApiDownloadProtectedDocumentRequest {
    /**
     * Specify document ID.
     * @type string
     * @memberof DocumentsApidownloadProtectedDocument
     */
    id: string
}

export interface DocumentsApiLinkedObjectDeleteRequest {
    /**
     * Specify document ID.
     * @type string
     * @memberof DocumentsApilinkedObjectDelete
     */
    id: string
    /**
     * Specify linked object ID.
     * @type string
     * @memberof DocumentsApilinkedObjectDelete
     */
    linkedObjectId: string
}

export interface DocumentsApiLinkedObjectListRequest {
    /**
     * Specify document ID.
     * @type string
     * @memberof DocumentsApilinkedObjectList
     */
    id: string
}

export interface DocumentsApiLinkedObjectsCreateRequest {
    /**
     * Specify document ID.
     * @type string
     * @memberof DocumentsApilinkedObjectsCreate
     */
    id: string
    /**
     * 
     * @type LinkedObjectCreateRequest
     * @memberof DocumentsApilinkedObjectsCreate
     */
    linkedObjectCreateRequest: LinkedObjectCreateRequest
}

export interface DocumentsApiSendDocumentRequest {
    /**
     * Document ID
     * @type string
     * @memberof DocumentsApisendDocument
     */
    id: string
    /**
     * 
     * @type DocumentSendRequest
     * @memberof DocumentsApisendDocument
     */
    documentSendRequest?: DocumentSendRequest
}

export class ObjectDocumentsApi {
    private api: ObservableDocumentsApi

    public constructor(configuration: Configuration, requestFactory?: DocumentsApiRequestFactory, responseProcessor?: DocumentsApiResponseProcessor) {
        this.api = new ObservableDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete document by id
     * @param param the request object
     */
    public deleteDocument(param: DocumentsApiDeleteDocumentRequest, options?: Configuration): Promise<void> {
        return this.api.deleteDocument(param.id,  options).toPromise();
    }

    /**
     * Create document
     * @param param the request object
     */
    public documentCreate(param: DocumentsApiDocumentCreateRequest, options?: Configuration): Promise<DocumentCreateResponse> {
        return this.api.documentCreate(param.editorVer, param.inlineObject,  options).toPromise();
    }

    /**
     * Create a Document Link
     * @param param the request object
     */
    public documentCreateLink(param: DocumentsApiDocumentCreateLinkRequest, options?: Configuration): Promise<DocumentCreateLinkResponse> {
        return this.api.documentCreateLink(param.id, param.documentCreateLinkRequest,  options).toPromise();
    }

    /**
     * Document details
     * @param param the request object
     */
    public documentDetails(param: DocumentsApiDocumentDetailsRequest, options?: Configuration): Promise<DocumentDetailsResponse> {
        return this.api.documentDetails(param.id,  options).toPromise();
    }

    /**
     * List documents
     * @param param the request object
     */
    public documentList(param: DocumentsApiDocumentListRequest, options?: Configuration): Promise<DocumentListResponse> {
        return this.api.documentList(param.completedFrom, param.completedTo, param.count, param.createdFrom, param.createdTo, param.deleted, param.id, param.folderUuid, param.formId, param.metadata, param.modifiedFrom, param.modifiedTo, param.orderBy, param.page, param.q, param.status, param.statusNe, param.tag, param.templateId,  options).toPromise();
    }

    /**
     * Document status
     * @param param the request object
     */
    public documentStatus(param: DocumentsApiDocumentStatusRequest, options?: Configuration): Promise<DocumentStatusResponse> {
        return this.api.documentStatus(param.id,  options).toPromise();
    }

    /**
     * Document download
     * @param param the request object
     */
    public downloadDocument(param: DocumentsApiDownloadDocumentRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.downloadDocument(param.id, param.watermarkColor, param.watermarkFontSize, param.watermarkOpacity, param.watermarkText,  options).toPromise();
    }

    /**
     * Download a signed PDF of a completed document
     * Download document protected
     * @param param the request object
     */
    public downloadProtectedDocument(param: DocumentsApiDownloadProtectedDocumentRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.downloadProtectedDocument(param.id,  options).toPromise();
    }

    /**
     * Delete Linked Object
     * @param param the request object
     */
    public linkedObjectDelete(param: DocumentsApiLinkedObjectDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.linkedObjectDelete(param.id, param.linkedObjectId,  options).toPromise();
    }

    /**
     * List Linked Objects
     * @param param the request object
     */
    public linkedObjectList(param: DocumentsApiLinkedObjectListRequest, options?: Configuration): Promise<LinkedObjectListResponse> {
        return this.api.linkedObjectList(param.id,  options).toPromise();
    }

    /**
     * Create Linked Object
     * @param param the request object
     */
    public linkedObjectsCreate(param: DocumentsApiLinkedObjectsCreateRequest, options?: Configuration): Promise<LinkedObjectCreateResponse> {
        return this.api.linkedObjectsCreate(param.id, param.linkedObjectCreateRequest,  options).toPromise();
    }

    /**
     * Send Document
     * @param param the request object
     */
    public sendDocument(param: DocumentsApiSendDocumentRequest, options?: Configuration): Promise<DocumentSendResponse> {
        return this.api.sendDocument(param.id, param.documentSendRequest,  options).toPromise();
    }

}

import { ObservableFoldersAPIApi } from "./ObservableAPI";
import { FoldersAPIApiRequestFactory, FoldersAPIApiResponseProcessor} from "../apis/FoldersAPIApi";

export interface FoldersAPIApiCreateDocumentFolderRequest {
    /**
     * 
     * @type DocumentsFolderCreateRequest
     * @memberof FoldersAPIApicreateDocumentFolder
     */
    documentsFolderCreateRequest?: DocumentsFolderCreateRequest
}

export interface FoldersAPIApiCreateTemplateFolderRequest {
    /**
     * 
     * @type TemplatesFolderCreateRequest
     * @memberof FoldersAPIApicreateTemplateFolder
     */
    templatesFolderCreateRequest?: TemplatesFolderCreateRequest
}

export interface FoldersAPIApiListDocumentFoldersRequest {
    /**
     * The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request.
     * @type string
     * @memberof FoldersAPIApilistDocumentFolders
     */
    parentUuid?: string
    /**
     * Optionally, specify how many folders to return. Default is 50 folders, maximum is 100 folders.
     * @type number
     * @memberof FoldersAPIApilistDocumentFolders
     */
    count?: number
    /**
     * Optionally, specify which page of the dataset to return.
     * @type number
     * @memberof FoldersAPIApilistDocumentFolders
     */
    page?: number
}

export interface FoldersAPIApiListTemplateFoldersRequest {
    /**
     * The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request.
     * @type string
     * @memberof FoldersAPIApilistTemplateFolders
     */
    parentUuid?: string
    /**
     * Optionally, specify how many folders to return. Default is 50 folders, maximum is 100 folders.
     * @type number
     * @memberof FoldersAPIApilistTemplateFolders
     */
    count?: number
    /**
     * Optionally, specify which page of the dataset to return.
     * @type number
     * @memberof FoldersAPIApilistTemplateFolders
     */
    page?: number
}

export interface FoldersAPIApiRenameDocumentFolderRequest {
    /**
     * The UUID of the folder that you are renaming.
     * @type string
     * @memberof FoldersAPIApirenameDocumentFolder
     */
    id: string
    /**
     * 
     * @type DocumentsFolderRenameRequest
     * @memberof FoldersAPIApirenameDocumentFolder
     */
    documentsFolderRenameRequest?: DocumentsFolderRenameRequest
}

export interface FoldersAPIApiRenameTemplateFolderRequest {
    /**
     * The UUID of the folder which you are renaming.
     * @type string
     * @memberof FoldersAPIApirenameTemplateFolder
     */
    id: string
    /**
     * 
     * @type TemplatesFolderRenameRequest
     * @memberof FoldersAPIApirenameTemplateFolder
     */
    templatesFolderRenameRequest?: TemplatesFolderRenameRequest
}

export class ObjectFoldersAPIApi {
    private api: ObservableFoldersAPIApi

    public constructor(configuration: Configuration, requestFactory?: FoldersAPIApiRequestFactory, responseProcessor?: FoldersAPIApiResponseProcessor) {
        this.api = new ObservableFoldersAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new folder to store your documents.
     * Create Documents Folder
     * @param param the request object
     */
    public createDocumentFolder(param: FoldersAPIApiCreateDocumentFolderRequest, options?: Configuration): Promise<DocumentsFolderCreateResponse> {
        return this.api.createDocumentFolder(param.documentsFolderCreateRequest,  options).toPromise();
    }

    /**
     * Create a new folder to store your templates.
     * Create Templates Folder
     * @param param the request object
     */
    public createTemplateFolder(param: FoldersAPIApiCreateTemplateFolderRequest, options?: Configuration): Promise<TemplatesFolderCreateResponse> {
        return this.api.createTemplateFolder(param.templatesFolderCreateRequest,  options).toPromise();
    }

    /**
     * Get the list of folders that contain Documents in your account.
     * List Documents Folders
     * @param param the request object
     */
    public listDocumentFolders(param: FoldersAPIApiListDocumentFoldersRequest, options?: Configuration): Promise<DocumentsFolderListResponse> {
        return this.api.listDocumentFolders(param.parentUuid, param.count, param.page,  options).toPromise();
    }

    /**
     * Get the list of folders that contain Templates in your account.
     * List Templates Folders
     * @param param the request object
     */
    public listTemplateFolders(param: FoldersAPIApiListTemplateFoldersRequest, options?: Configuration): Promise<TemplatesFolderListResponse> {
        return this.api.listTemplateFolders(param.parentUuid, param.count, param.page,  options).toPromise();
    }

    /**
     * Rename Documents Folder.
     * Rename Documents Folder
     * @param param the request object
     */
    public renameDocumentFolder(param: FoldersAPIApiRenameDocumentFolderRequest, options?: Configuration): Promise<DocumentsFolderRenameResponse> {
        return this.api.renameDocumentFolder(param.id, param.documentsFolderRenameRequest,  options).toPromise();
    }

    /**
     * Rename a templates folder.
     * Rename Templates Folder
     * @param param the request object
     */
    public renameTemplateFolder(param: FoldersAPIApiRenameTemplateFolderRequest, options?: Configuration): Promise<TemplatesFolderRenameResponse> {
        return this.api.renameTemplateFolder(param.id, param.templatesFolderRenameRequest,  options).toPromise();
    }

}

import { ObservableFormsApi } from "./ObservableAPI";
import { FormsApiRequestFactory, FormsApiResponseProcessor} from "../apis/FormsApi";

export interface FormsApiListFormRequest {
    /**
     * Optionally, specify how many forms to return. Default is 50 forms, maximum is 100 forms.
     * @type number
     * @memberof FormsApilistForm
     */
    count?: number
    /**
     * Optionally, specify which page of the dataset to return.
     * @type number
     * @memberof FormsApilistForm
     */
    page?: number
    /**
     * Optionally, specify which status of the forms dataset to return.
     * @type Array&lt;&#39;draft&#39; | &#39;active&#39; | &#39;disabled&#39;&gt;
     * @memberof FormsApilistForm
     */
    status?: Array<'draft' | 'active' | 'disabled'>
    /**
     * Optionally, specify the form dataset order to return.
     * @type &#39;name&#39; | &#39;responses&#39; | &#39;status&#39; | &#39;created_date&#39; | &#39;modified_date&#39;
     * @memberof FormsApilistForm
     */
    orderBy?: 'name' | 'responses' | 'status' | 'created_date' | 'modified_date'
    /**
     * Optionally, specify sorting the result-set in ascending or descending order.
     * @type boolean
     * @memberof FormsApilistForm
     */
    asc?: boolean
    /**
     * Specify the form name.
     * @type string
     * @memberof FormsApilistForm
     */
    name?: string
}

export class ObjectFormsApi {
    private api: ObservableFormsApi

    public constructor(configuration: Configuration, requestFactory?: FormsApiRequestFactory, responseProcessor?: FormsApiResponseProcessor) {
        this.api = new ObservableFormsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List forms.
     * Forms
     * @param param the request object
     */
    public listForm(param: FormsApiListFormRequest, options?: Configuration): Promise<FormListResponse> {
        return this.api.listForm(param.count, param.page, param.status, param.orderBy, param.asc, param.name,  options).toPromise();
    }

}

import { ObservableOAuth20AuthenticationApi } from "./ObservableAPI";
import { OAuth20AuthenticationApiRequestFactory, OAuth20AuthenticationApiResponseProcessor} from "../apis/OAuth20AuthenticationApi";

export interface OAuth20AuthenticationApiAccessTokenRequest {
    /**
     * This value must be set to &#x60;refresh_token&#x60;.
     * @type string
     * @memberof OAuth20AuthenticationApiaccessToken
     */
    grantType?: string
    /**
     * Client ID that is automatically generated after application creation in the Developer Dashboard.
     * @type string
     * @memberof OAuth20AuthenticationApiaccessToken
     */
    clientId?: string
    /**
     * Client secret that is automatically generated after application creation in the Developer Dashboard.
     * @type string
     * @memberof OAuth20AuthenticationApiaccessToken
     */
    clientSecret?: string
    /**
     * &#x60;auth_code&#x60; from the server on the previous step (Authorize a PandaDoc User). 
     * @type string
     * @memberof OAuth20AuthenticationApiaccessToken
     */
    code?: string
    /**
     * Requested permissions. Use &#x60;read+write&#x60; as our default value to send documents.
     * @type string
     * @memberof OAuth20AuthenticationApiaccessToken
     */
    scope?: string
    /**
     * &#x60;refresh_token&#x60; you received and stored from the server when initially creating an &#x60;access_token&#x60;. 
     * @type string
     * @memberof OAuth20AuthenticationApiaccessToken
     */
    refreshToken?: string
}

export class ObjectOAuth20AuthenticationApi {
    private api: ObservableOAuth20AuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: OAuth20AuthenticationApiRequestFactory, responseProcessor?: OAuth20AuthenticationApiResponseProcessor) {
        this.api = new ObservableOAuth20AuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create/Refresh Access Token
     * @param param the request object
     */
    public accessToken(param: OAuth20AuthenticationApiAccessTokenRequest, options?: Configuration): Promise<OAuth2AccessTokenResponse> {
        return this.api.accessToken(param.grantType, param.clientId, param.clientSecret, param.code, param.scope, param.refreshToken,  options).toPromise();
    }

}

import { ObservableTemplatesApi } from "./ObservableAPI";
import { TemplatesApiRequestFactory, TemplatesApiResponseProcessor} from "../apis/TemplatesApi";

export interface TemplatesApiDeleteTemplateRequest {
    /**
     * Template ID
     * @type string
     * @memberof TemplatesApideleteTemplate
     */
    id: string
}

export interface TemplatesApiDetailsTemaplateRequest {
    /**
     * Template ID
     * @type string
     * @memberof TemplatesApidetailsTemaplate
     */
    id: string
}

export interface TemplatesApiListTemplatesRequest {
    /**
     * Optional search query. Filter by template name.
     * @type string
     * @memberof TemplatesApilistTemplates
     */
    q?: string
    /**
     * Returns only the shared templates.
     * @type boolean
     * @memberof TemplatesApilistTemplates
     */
    shared?: boolean
    /**
     * Optional. Returns only the deleted templates.
     * @type boolean
     * @memberof TemplatesApilistTemplates
     */
    deleted?: boolean
    /**
     * Optionally, specify how many templates to return. Default is 50 templates, maximum is 100 templates.
     * @type number
     * @memberof TemplatesApilistTemplates
     */
    count?: number
    /**
     * Optionally, specify which page of the dataset to return.
     * @type number
     * @memberof TemplatesApilistTemplates
     */
    page?: number
    /**
     * Optionally, specify template ID.
     * @type string
     * @memberof TemplatesApilistTemplates
     */
    id?: string
    /**
     * UUID of the folder where the templates are stored.
     * @type string
     * @memberof TemplatesApilistTemplates
     */
    folderUuid?: string
    /**
     * Optional search tag. Filter by template tag.
     * @type Array&lt;string&gt;
     * @memberof TemplatesApilistTemplates
     */
    tag?: Array<string>
}

export class ObjectTemplatesApi {
    private api: ObservableTemplatesApi

    public constructor(configuration: Configuration, requestFactory?: TemplatesApiRequestFactory, responseProcessor?: TemplatesApiResponseProcessor) {
        this.api = new ObservableTemplatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a template
     * Delete Template
     * @param param the request object
     */
    public deleteTemplate(param: TemplatesApiDeleteTemplateRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTemplate(param.id,  options).toPromise();
    }

    /**
     * Return detailed data about a template.
     * Details Template
     * @param param the request object
     */
    public detailsTemaplate(param: TemplatesApiDetailsTemaplateRequest, options?: Configuration): Promise<TemplateDetailsResponse> {
        return this.api.detailsTemaplate(param.id,  options).toPromise();
    }

    /**
     * Optionally, filter by a search query or tags.
     * List Templates
     * @param param the request object
     */
    public listTemplates(param: TemplatesApiListTemplatesRequest, options?: Configuration): Promise<TemplateListResponse> {
        return this.api.listTemplates(param.q, param.shared, param.deleted, param.count, param.page, param.id, param.folderUuid, param.tag,  options).toPromise();
    }

}
