import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { APILogDetailsResponse } from '../models/APILogDetailsResponse';
import { APILogListResponse } from '../models/APILogListResponse';
import { APILogListResponseResults } from '../models/APILogListResponseResults';
import { ContactCreateRequest } from '../models/ContactCreateRequest';
import { ContactDetailsResponse } from '../models/ContactDetailsResponse';
import { ContactListResponse } from '../models/ContactListResponse';
import { ContactUpdateRequest } from '../models/ContactUpdateRequest';
import { ContentLibraryItemListResponse } from '../models/ContentLibraryItemListResponse';
import { ContentLibraryItemListResponseResults } from '../models/ContentLibraryItemListResponseResults';
import { ContentLibraryItemResponse } from '../models/ContentLibraryItemResponse';
import { ContentLibraryItemResponseCreatedBy } from '../models/ContentLibraryItemResponseCreatedBy';
import { DocumentAttachmentResponse } from '../models/DocumentAttachmentResponse';
import { DocumentAttachmentResponseCreatedBy } from '../models/DocumentAttachmentResponseCreatedBy';
import { DocumentCreateByPdfRequest } from '../models/DocumentCreateByPdfRequest';
import { DocumentCreateByTemplateRequest } from '../models/DocumentCreateByTemplateRequest';
import { DocumentCreateByTemplateRequestContentLibraryItems } from '../models/DocumentCreateByTemplateRequestContentLibraryItems';
import { DocumentCreateByTemplateRequestContentPlaceholders } from '../models/DocumentCreateByTemplateRequestContentPlaceholders';
import { DocumentCreateByTemplateRequestImages } from '../models/DocumentCreateByTemplateRequestImages';
import { DocumentCreateByTemplateRequestRecipients } from '../models/DocumentCreateByTemplateRequestRecipients';
import { DocumentCreateByTemplateRequestTokens } from '../models/DocumentCreateByTemplateRequestTokens';
import { DocumentCreateLinkRequest } from '../models/DocumentCreateLinkRequest';
import { DocumentCreateLinkResponse } from '../models/DocumentCreateLinkResponse';
import { DocumentCreateRequest } from '../models/DocumentCreateRequest';
import { DocumentCreateRequestContentLibraryItems } from '../models/DocumentCreateRequestContentLibraryItems';
import { DocumentCreateRequestContentPlaceholders } from '../models/DocumentCreateRequestContentPlaceholders';
import { DocumentCreateRequestImages } from '../models/DocumentCreateRequestImages';
import { DocumentCreateRequestRecipients } from '../models/DocumentCreateRequestRecipients';
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
import { DocumentStatusChangeRequest } from '../models/DocumentStatusChangeRequest';
import { DocumentStatusEnum } from '../models/DocumentStatusEnum';
import { DocumentStatusResponse } from '../models/DocumentStatusResponse';
import { DocumentTransferAllOwnershipRequest } from '../models/DocumentTransferAllOwnershipRequest';
import { DocumentTransferOwnershipRequest } from '../models/DocumentTransferOwnershipRequest';
import { DocumentsFolderCreateRequest } from '../models/DocumentsFolderCreateRequest';
import { DocumentsFolderCreateResponse } from '../models/DocumentsFolderCreateResponse';
import { DocumentsFolderListResponse } from '../models/DocumentsFolderListResponse';
import { DocumentsFolderListResponseResults } from '../models/DocumentsFolderListResponseResults';
import { DocumentsFolderRenameRequest } from '../models/DocumentsFolderRenameRequest';
import { DocumentsFolderRenameResponse } from '../models/DocumentsFolderRenameResponse';
import { FormListResponse } from '../models/FormListResponse';
import { FormListResponseResults } from '../models/FormListResponseResults';
import { LinkedObjectCreateRequest } from '../models/LinkedObjectCreateRequest';
import { LinkedObjectCreateResponse } from '../models/LinkedObjectCreateResponse';
import { LinkedObjectListResponse } from '../models/LinkedObjectListResponse';
import { MemberDetailsResponse } from '../models/MemberDetailsResponse';
import { MemberListResponse } from '../models/MemberListResponse';
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
import { ObservableAPILogsApi } from './ObservableAPI';

import { APILogsApiRequestFactory, APILogsApiResponseProcessor} from "../apis/APILogsApi";
export class PromiseAPILogsApi {
    private api: ObservableAPILogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: APILogsApiRequestFactory,
        responseProcessor?: APILogsApiResponseProcessor
    ) {
        this.api = new ObservableAPILogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns details of the specific API log event.
     * Details API Log
     * @param id Log event id.
     */
    public detailsLog(id: string, _options?: Configuration): Promise<APILogDetailsResponse> {
        const result = this.api.detailsLog(id, _options);
        return result.toPromise();
    }

    /**
     * Get the list of all logs within the selected workspace. Optionally filter by date, page, and `#` of items per page.
     * List API Log
     * @param since Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-90d\&quot; (for past 90 days).
     * @param to Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-10d\&quot; (for past 10 days) or a special \&quot;now\&quot; value.
     * @param count The amount of items on each page.
     * @param page Page number of the results returned.
     * @param statuses Returns only the predefined status codes. Allows 1xx, 2xx, 3xx, 4xx, and 5xx.
     * @param methods Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE.
     * @param search Returns the results containing a string.
     * @param environmentType Returns logs for production/sandbox.
     */
    public listLogs(since?: string, to?: string, count?: number, page?: number, statuses?: Array<100 | 200 | 300 | 400 | 500>, methods?: Array<'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'>, search?: string, environmentType?: 'PRODUCTION' | 'SANDBOX', _options?: Configuration): Promise<APILogListResponse> {
        const result = this.api.listLogs(since, to, count, page, statuses, methods, search, environmentType, _options);
        return result.toPromise();
    }


}



import { ObservableContactsApi } from './ObservableAPI';

import { ContactsApiRequestFactory, ContactsApiResponseProcessor} from "../apis/ContactsApi";
export class PromiseContactsApi {
    private api: ObservableContactsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactsApiRequestFactory,
        responseProcessor?: ContactsApiResponseProcessor
    ) {
        this.api = new ObservableContactsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create contact
     * @param contactCreateRequest 
     */
    public createContact(contactCreateRequest: ContactCreateRequest, _options?: Configuration): Promise<ContactDetailsResponse> {
        const result = this.api.createContact(contactCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete contact by id
     * @param id Contact id.
     */
    public deleteContact(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteContact(id, _options);
        return result.toPromise();
    }

    /**
     * Get contact details by id
     * @param id Contact id.
     */
    public detailsContact(id: string, _options?: Configuration): Promise<ContactDetailsResponse> {
        const result = this.api.detailsContact(id, _options);
        return result.toPromise();
    }

    /**
     * List contacts
     */
    public listContacts(_options?: Configuration): Promise<ContactListResponse> {
        const result = this.api.listContacts(_options);
        return result.toPromise();
    }

    /**
     * Update contact by id
     * @param id Contact id.
     * @param contactUpdateRequest 
     */
    public updateContact(id: string, contactUpdateRequest: ContactUpdateRequest, _options?: Configuration): Promise<ContactDetailsResponse> {
        const result = this.api.updateContact(id, contactUpdateRequest, _options);
        return result.toPromise();
    }


}



import { ObservableContentLibraryItemsApi } from './ObservableAPI';

import { ContentLibraryItemsApiRequestFactory, ContentLibraryItemsApiResponseProcessor} from "../apis/ContentLibraryItemsApi";
export class PromiseContentLibraryItemsApi {
    private api: ObservableContentLibraryItemsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContentLibraryItemsApiRequestFactory,
        responseProcessor?: ContentLibraryItemsApiResponseProcessor
    ) {
        this.api = new ObservableContentLibraryItemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return detailed data about a content library item.
     * Details Content Library Item
     * @param id Content Library Item ID
     */
    public detailsContentLibraryItem(id: string, _options?: Configuration): Promise<ContentLibraryItemResponse> {
        const result = this.api.detailsContentLibraryItem(id, _options);
        return result.toPromise();
    }

    /**
     * Optionally filter by a search query or tags.
     * List Content Library Item
     * @param q Search query. Filter by content library item name.
     * @param id Specify content library item ID.
     * @param deleted Returns only the deleted content library items.
     * @param folderUuid The UUID of the folder where the content library items are stored.
     * @param count Specify how many content library items to return. Default is 50 content library items, maximum is 100 content library items.
     * @param page Specify which page of the dataset to return.
     * @param tag Search tag. Filter by content library item tag.
     */
    public listContentLibraryItems(q?: string, id?: string, deleted?: boolean, folderUuid?: string, count?: number, page?: number, tag?: string, _options?: Configuration): Promise<ContentLibraryItemListResponse> {
        const result = this.api.listContentLibraryItems(q, id, deleted, folderUuid, count, page, tag, _options);
        return result.toPromise();
    }


}



import { ObservableDocumentAttachmentsApi } from './ObservableAPI';

import { DocumentAttachmentsApiRequestFactory, DocumentAttachmentsApiResponseProcessor} from "../apis/DocumentAttachmentsApi";
export class PromiseDocumentAttachmentsApi {
    private api: ObservableDocumentAttachmentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentAttachmentsApiRequestFactory,
        responseProcessor?: DocumentAttachmentsApiResponseProcessor
    ) {
        this.api = new ObservableDocumentAttachmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an attachment for a particular document
     * Document Attachment Create
     * @param id Document UUID
     * @param file Binary file to be attached to a document
     * @param source URL link to the file to be attached to a document
     * @param name Optional name to set for uploaded file
     */
    public createDocumentAttachment(id: string, file?: HttpFile, source?: string, name?: string, _options?: Configuration): Promise<DocumentAttachmentResponse> {
        const result = this.api.createDocumentAttachment(id, file, source, name, _options);
        return result.toPromise();
    }

    /**
     * Deletes specific document's attachment
     * Document Attachment Delete
     * @param id Document UUID
     * @param attachmentId Attachment UUID
     */
    public deleteDocumentAttachment(id: string, attachmentId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDocumentAttachment(id, attachmentId, _options);
        return result.toPromise();
    }

    /**
     * Returns details of the specific document's attachment
     * Document Attachment Details
     * @param id Document UUID
     * @param attachmentId Attachment UUID
     */
    public detailsDocumentAttachment(id: string, attachmentId: string, _options?: Configuration): Promise<DocumentAttachmentResponse> {
        const result = this.api.detailsDocumentAttachment(id, attachmentId, _options);
        return result.toPromise();
    }

    /**
     * Returns document attachment file for download
     * Document Attachment Download
     * @param id Document UUID
     * @param attachmentId Attachment UUID
     */
    public downloadDocumentAttachment(id: string, attachmentId: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.downloadDocumentAttachment(id, attachmentId, _options);
        return result.toPromise();
    }

    /**
     * Return list of objects attached to particular document
     * Document Attachment List
     * @param id Document UUID
     */
    public listDocumentAttachments(id: string, _options?: Configuration): Promise<Array<DocumentAttachmentResponse>> {
        const result = this.api.listDocumentAttachments(id, _options);
        return result.toPromise();
    }


}



import { ObservableDocumentsApi } from './ObservableAPI';

import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";
export class PromiseDocumentsApi {
    private api: ObservableDocumentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentsApiRequestFactory,
        responseProcessor?: DocumentsApiResponseProcessor
    ) {
        this.api = new ObservableDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Document status change
     * @param id Specify document ID.
     * @param documentStatusChangeRequest 
     */
    public changeDocumentStatus(id: string, documentStatusChangeRequest: DocumentStatusChangeRequest, _options?: Configuration): Promise<void> {
        const result = this.api.changeDocumentStatus(id, documentStatusChangeRequest, _options);
        return result.toPromise();
    }

    /**
     * Create document
     * @param documentCreateRequest Use a PandaDoc template or an existing PDF to create a document. See the creation request examples [by template](#/schemas/DocumentCreateByTemplateRequest) and [by pdf](#/schemas/DocumentCreateByPdfRequest) 
     * @param editorVer Set this parameter as &#x60;ev1&#x60; if you want to create a document from PDF with Classic Editor when both editors are enabled for the workspace.
     */
    public createDocument(documentCreateRequest: DocumentCreateRequest, editorVer?: string, _options?: Configuration): Promise<DocumentCreateResponse> {
        const result = this.api.createDocument(documentCreateRequest, editorVer, _options);
        return result.toPromise();
    }

    /**
     * Create a Document Link
     * @param id Document ID
     * @param documentCreateLinkRequest 
     */
    public createDocumentLink(id: string, documentCreateLinkRequest: DocumentCreateLinkRequest, _options?: Configuration): Promise<DocumentCreateLinkResponse> {
        const result = this.api.createDocumentLink(id, documentCreateLinkRequest, _options);
        return result.toPromise();
    }

    /**
     * Create Linked Object
     * @param id Specify document ID.
     * @param linkedObjectCreateRequest 
     */
    public createLinkedObject(id: string, linkedObjectCreateRequest: LinkedObjectCreateRequest, _options?: Configuration): Promise<LinkedObjectCreateResponse> {
        const result = this.api.createLinkedObject(id, linkedObjectCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete document by id
     * @param id Document ID
     */
    public deleteDocument(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDocument(id, _options);
        return result.toPromise();
    }

    /**
     * Delete Linked Object
     * @param id Specify document ID.
     * @param linkedObjectId Specify linked object ID.
     */
    public deleteLinkedObject(id: string, linkedObjectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteLinkedObject(id, linkedObjectId, _options);
        return result.toPromise();
    }

    /**
     * Document details
     * @param id Document ID
     */
    public detailsDocument(id: string, _options?: Configuration): Promise<DocumentDetailsResponse> {
        const result = this.api.detailsDocument(id, _options);
        return result.toPromise();
    }

    /**
     * Document download
     * @param id Specify document ID.
     * @param watermarkColor HEX code (for example &#x60;#FF5733&#x60;).
     * @param watermarkFontSize Font size of the watermark.
     * @param watermarkOpacity In range 0.0-1.0
     * @param watermarkText Specify watermark text.
     */
    public downloadDocument(id: string, watermarkColor?: string, watermarkFontSize?: number, watermarkOpacity?: number, watermarkText?: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.downloadDocument(id, watermarkColor, watermarkFontSize, watermarkOpacity, watermarkText, _options);
        return result.toPromise();
    }

    /**
     * Download a signed PDF of a completed document
     * Download document protected
     * @param id Specify document ID.
     */
    public downloadProtectedDocument(id: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.downloadProtectedDocument(id, _options);
        return result.toPromise();
    }

    /**
     * List documents
     * @param completedFrom Return results where the &#x60;date_completed&#x60; field (ISO 8601) is greater than or equal to this value.
     * @param completedTo Return results where the &#x60;date_completed&#x60; field (ISO 8601) is less than or equal to this value.
     * @param contactId Returns results where &#39;contact_id&#39; is present in document as recipient or approver
     * @param count Specify how many document results to return. Default is 50 documents, maximum is 100 documents.
     * @param createdFrom Return results where the &#x60;date_created&#x60; field (ISO 8601) is greater than or equal to this value.
     * @param createdTo Return results where the &#x60;date_created&#x60; field (ISO 8601) is less than this value.
     * @param deleted Returns only the deleted documents.
     * @param id 
     * @param folderUuid The UUID of the folder where the documents are stored.
     * @param formId Specify the form used for documents creation. This parameter can&#39;t be used with template_id.
     * @param membershipId Returns results where &#39;membership_id&#39; is present in document as owner (should be member uuid)
     * @param metadata Specify metadata to filter by in the format of &#x60;metadata_{metadata-key}&#x3D;{metadata-value}&#x60; such as &#x60;metadata_opportunity_id&#x3D;2181432&#x60;. The &#x60;metadata_&#x60; prefix is always required.
     * @param modifiedFrom Return results where the &#x60;date_modified&#x60; field (iso-8601) is greater than or equal to this value.
     * @param modifiedTo Return results where the &#x60;date_modified&#x60; field (iso-8601) is less than this value.
     * @param orderBy Specify the order of documents to return. Use &#x60;value&#x60; (for example, &#x60;date_created&#x60;) for ASC and &#x60;-value&#x60; (for example, &#x60;-date_created&#x60;) for DESC.
     * @param page Specify which page of the dataset to return.
     * @param q Search query. Filter by document reference number (this token is stored on the template level) or name.
     * @param status Specify the status of documents to return.   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined 
     * @param statusNe Specify the status of documents to return (exclude).   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined 
     * @param tag Search tag. Filter by document tag.
     * @param templateId Specify the template used for documents creation. Parameter can&#39;t be used with form_id.
     */
    public listDocuments(completedFrom?: string, completedTo?: string, contactId?: string, count?: number, createdFrom?: string, createdTo?: string, deleted?: boolean, id?: string, folderUuid?: string, formId?: string, membershipId?: string, metadata?: string, modifiedFrom?: string, modifiedTo?: string, orderBy?: DocumentOrderingFieldsEnum, page?: number, q?: string, status?: DocumentStatusEnum, statusNe?: DocumentStatusEnum, tag?: string, templateId?: string, _options?: Configuration): Promise<DocumentListResponse> {
        const result = this.api.listDocuments(completedFrom, completedTo, contactId, count, createdFrom, createdTo, deleted, id, folderUuid, formId, membershipId, metadata, modifiedFrom, modifiedTo, orderBy, page, q, status, statusNe, tag, templateId, _options);
        return result.toPromise();
    }

    /**
     * List Linked Objects
     * @param id Specify document ID.
     */
    public listLinkedObjects(id: string, _options?: Configuration): Promise<LinkedObjectListResponse> {
        const result = this.api.listLinkedObjects(id, _options);
        return result.toPromise();
    }

    /**
     * Send Document
     * @param id Document ID
     * @param documentSendRequest 
     */
    public sendDocument(id: string, documentSendRequest: DocumentSendRequest, _options?: Configuration): Promise<DocumentSendResponse> {
        const result = this.api.sendDocument(id, documentSendRequest, _options);
        return result.toPromise();
    }

    /**
     * Document status
     * @param id Specify document ID.
     */
    public statusDocument(id: string, _options?: Configuration): Promise<DocumentStatusResponse> {
        const result = this.api.statusDocument(id, _options);
        return result.toPromise();
    }

    /**
     * Transfer all documents ownership
     * @param documentTransferAllOwnershipRequest 
     */
    public transferAllDocumentsOwnership(documentTransferAllOwnershipRequest: DocumentTransferAllOwnershipRequest, _options?: Configuration): Promise<void> {
        const result = this.api.transferAllDocumentsOwnership(documentTransferAllOwnershipRequest, _options);
        return result.toPromise();
    }

    /**
     * Update document ownership
     * @param id Specify document ID.
     * @param documentTransferOwnershipRequest 
     */
    public transferDocumentOwnership(id: string, documentTransferOwnershipRequest: DocumentTransferOwnershipRequest, _options?: Configuration): Promise<void> {
        const result = this.api.transferDocumentOwnership(id, documentTransferOwnershipRequest, _options);
        return result.toPromise();
    }


}



import { ObservableFoldersAPIApi } from './ObservableAPI';

import { FoldersAPIApiRequestFactory, FoldersAPIApiResponseProcessor} from "../apis/FoldersAPIApi";
export class PromiseFoldersAPIApi {
    private api: ObservableFoldersAPIApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FoldersAPIApiRequestFactory,
        responseProcessor?: FoldersAPIApiResponseProcessor
    ) {
        this.api = new ObservableFoldersAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new folder to store your documents.
     * Create Documents Folder
     * @param documentsFolderCreateRequest 
     */
    public createDocumentFolder(documentsFolderCreateRequest: DocumentsFolderCreateRequest, _options?: Configuration): Promise<DocumentsFolderCreateResponse> {
        const result = this.api.createDocumentFolder(documentsFolderCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new folder to store your templates.
     * Create Templates Folder
     * @param templatesFolderCreateRequest 
     */
    public createTemplateFolder(templatesFolderCreateRequest: TemplatesFolderCreateRequest, _options?: Configuration): Promise<TemplatesFolderCreateResponse> {
        const result = this.api.createTemplateFolder(templatesFolderCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Get the list of folders that contain Documents in your account.
     * List Documents Folders
     * @param parentUuid The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request.
     * @param count Optionally, specify how many folders to return. Default is 50 folders, maximum is 100 folders.
     * @param page Optionally, specify which page of the dataset to return.
     */
    public listDocumentFolders(parentUuid?: string, count?: number, page?: number, _options?: Configuration): Promise<DocumentsFolderListResponse> {
        const result = this.api.listDocumentFolders(parentUuid, count, page, _options);
        return result.toPromise();
    }

    /**
     * Get the list of folders that contain Templates in your account.
     * List Templates Folders
     * @param parentUuid The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request.
     * @param count Optionally, specify how many folders to return. Default is 50 folders, maximum is 100 folders.
     * @param page Optionally, specify which page of the dataset to return.
     */
    public listTemplateFolders(parentUuid?: string, count?: number, page?: number, _options?: Configuration): Promise<TemplatesFolderListResponse> {
        const result = this.api.listTemplateFolders(parentUuid, count, page, _options);
        return result.toPromise();
    }

    /**
     * Rename Documents Folder.
     * Rename Documents Folder
     * @param id The UUID of the folder that you are renaming.
     * @param documentsFolderRenameRequest 
     */
    public renameDocumentFolder(id: string, documentsFolderRenameRequest: DocumentsFolderRenameRequest, _options?: Configuration): Promise<DocumentsFolderRenameResponse> {
        const result = this.api.renameDocumentFolder(id, documentsFolderRenameRequest, _options);
        return result.toPromise();
    }

    /**
     * Rename a templates folder.
     * Rename Templates Folder
     * @param id The UUID of the folder which you are renaming.
     * @param templatesFolderRenameRequest 
     */
    public renameTemplateFolder(id: string, templatesFolderRenameRequest: TemplatesFolderRenameRequest, _options?: Configuration): Promise<TemplatesFolderRenameResponse> {
        const result = this.api.renameTemplateFolder(id, templatesFolderRenameRequest, _options);
        return result.toPromise();
    }


}



import { ObservableFormsApi } from './ObservableAPI';

import { FormsApiRequestFactory, FormsApiResponseProcessor} from "../apis/FormsApi";
export class PromiseFormsApi {
    private api: ObservableFormsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FormsApiRequestFactory,
        responseProcessor?: FormsApiResponseProcessor
    ) {
        this.api = new ObservableFormsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List forms.
     * Forms
     * @param count Optionally, specify how many forms to return. Default is 50 forms, maximum is 100 forms.
     * @param page Optionally, specify which page of the dataset to return.
     * @param status Optionally, specify which status of the forms dataset to return.
     * @param orderBy Optionally, specify the form dataset order to return.
     * @param asc Optionally, specify sorting the result-set in ascending or descending order.
     * @param name Specify the form name.
     */
    public listForm(count?: number, page?: number, status?: Array<'draft' | 'active' | 'disabled'>, orderBy?: 'name' | 'responses' | 'status' | 'created_date' | 'modified_date', asc?: boolean, name?: string, _options?: Configuration): Promise<FormListResponse> {
        const result = this.api.listForm(count, page, status, orderBy, asc, name, _options);
        return result.toPromise();
    }


}



import { ObservableMembersApi } from './ObservableAPI';

import { MembersApiRequestFactory, MembersApiResponseProcessor} from "../apis/MembersApi";
export class PromiseMembersApi {
    private api: ObservableMembersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MembersApiRequestFactory,
        responseProcessor?: MembersApiResponseProcessor
    ) {
        this.api = new ObservableMembersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * A method to define to whom credentials belong
     * Current member details
     */
    public detailsCurrentMember(_options?: Configuration): Promise<MemberDetailsResponse> {
        const result = this.api.detailsCurrentMember(_options);
        return result.toPromise();
    }

    /**
     * A method to retrieve a member's details by id
     * Member details
     * @param id Membership id
     */
    public detailsMember(id: string, _options?: Configuration): Promise<MemberDetailsResponse> {
        const result = this.api.detailsMember(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieve all members details of the workspace
     * List members
     */
    public listMembers(_options?: Configuration): Promise<MemberListResponse> {
        const result = this.api.listMembers(_options);
        return result.toPromise();
    }


}



import { ObservableOAuth20AuthenticationApi } from './ObservableAPI';

import { OAuth20AuthenticationApiRequestFactory, OAuth20AuthenticationApiResponseProcessor} from "../apis/OAuth20AuthenticationApi";
export class PromiseOAuth20AuthenticationApi {
    private api: ObservableOAuth20AuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OAuth20AuthenticationApiRequestFactory,
        responseProcessor?: OAuth20AuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableOAuth20AuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create/Refresh Access Token
     * @param grantType This value must be set to &#x60;refresh_token&#x60;.
     * @param clientId Client ID that is automatically generated after application creation in the Developer Dashboard.
     * @param clientSecret Client secret that is automatically generated after application creation in the Developer Dashboard.
     * @param code &#x60;auth_code&#x60; from the server on the previous step (Authorize a PandaDoc User). 
     * @param scope Requested permissions. Use &#x60;read+write&#x60; as our default value to send documents.
     * @param refreshToken &#x60;refresh_token&#x60; you received and stored from the server when initially creating an &#x60;access_token&#x60;. 
     */
    public accessToken(grantType?: string, clientId?: string, clientSecret?: string, code?: string, scope?: string, refreshToken?: string, _options?: Configuration): Promise<OAuth2AccessTokenResponse> {
        const result = this.api.accessToken(grantType, clientId, clientSecret, code, scope, refreshToken, _options);
        return result.toPromise();
    }


}



import { ObservableTemplatesApi } from './ObservableAPI';

import { TemplatesApiRequestFactory, TemplatesApiResponseProcessor} from "../apis/TemplatesApi";
export class PromiseTemplatesApi {
    private api: ObservableTemplatesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TemplatesApiRequestFactory,
        responseProcessor?: TemplatesApiResponseProcessor
    ) {
        this.api = new ObservableTemplatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a template
     * Delete Template
     * @param id Template ID
     */
    public deleteTemplate(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTemplate(id, _options);
        return result.toPromise();
    }

    /**
     * Return detailed data about a template.
     * Details Template
     * @param id Template ID
     */
    public detailsTemplate(id: string, _options?: Configuration): Promise<TemplateDetailsResponse> {
        const result = this.api.detailsTemplate(id, _options);
        return result.toPromise();
    }

    /**
     * Optionally, filter by a search query or tags.
     * List Templates
     * @param q Optional search query. Filter by template name.
     * @param shared Returns only the shared templates.
     * @param deleted Optional. Returns only the deleted templates.
     * @param count Optionally, specify how many templates to return. Default is 50 templates, maximum is 100 templates.
     * @param page Optionally, specify which page of the dataset to return.
     * @param id Optionally, specify template ID.
     * @param folderUuid UUID of the folder where the templates are stored.
     * @param tag Optional search tag. Filter by template tag.
     */
    public listTemplates(q?: string, shared?: boolean, deleted?: boolean, count?: number, page?: number, id?: string, folderUuid?: string, tag?: Array<string>, _options?: Configuration): Promise<TemplateListResponse> {
        const result = this.api.listTemplates(q, shared, deleted, count, page, id, folderUuid, tag, _options);
        return result.toPromise();
    }


}



