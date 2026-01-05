// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import { readRawBodyAndParse, tryParseRawBody } from '../pandadoc/httpErrorBody';
import {SecurityAuthentication} from '../auth/auth';


import { DocumentRecipientCreateRequest } from '../models/DocumentRecipientCreateRequest';
import { DocumentRecipientEditRequest } from '../models/DocumentRecipientEditRequest';
import { DocumentRecipientResponse } from '../models/DocumentRecipientResponse';
import { ListDocuments401Response } from '../models/ListDocuments401Response';
import { ListDocuments403Response } from '../models/ListDocuments403Response';
import { ListDocuments429Response } from '../models/ListDocuments429Response';
import { StatusDocument404Response } from '../models/StatusDocument404Response';
import { UpdateDocument400Response } from '../models/UpdateDocument400Response';

/**
 * no description
 */
export class DocumentRecipientsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add a CC recipient to a document.  > 🚧 Before you start >  > To add a CC recipient, please ensure that: >  > - You have the \'Can Manage Recipients\' permission. > - This recipient is already created in your contacts. If not, add them using the [Create Contact](https://developers.pandadoc.com/reference/create-contact) endpoint.  To add a new CC recipient to a document, two parameters must be included in the request body:  - `kind`: Set this parameter to `contact` to specify an individual contact. - `id`:  Input the ID of the desired contact.  To retrieve the contact\'s ID, use the [List Contacts](https://developers.pandadoc.com/reference/list-contacts) endpoint to access a list of all contacts, and then locate the desired contact by searching using the name or email address within the returned list.  ### Document status  You can add CC recipients in any document status except for the \'Expired\' (`document.voided`) and \'Declined\' (`document.declined`).  > 📘 Email notification to access the document >  > **Note**: When a document is in one of the following statuses: \'Sent\' (`document.sent`), \'Viewed\' (`document.viewed`), \'Completed\' (`document.completed`), \'Waiting for Payment\' (`document.waiting_pay`), or \'Paid\' (`document.paid`), any added CC recipient will receive an instant notification at their email address, allowing them access to the document. 
     * Add Document Recipient
     * @param id Document UUID
     * @param documentRecipientCreateRequest 
     */
    public async addDocumentRecipient(id: string, documentRecipientCreateRequest: DocumentRecipientCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DocumentRecipientsApi", "addDocumentRecipient", "id");
        }


        // verify required parameter 'documentRecipientCreateRequest' is not null or undefined
        if (documentRecipientCreateRequest === null || documentRecipientCreateRequest === undefined) {
            throw new RequiredError("DocumentRecipientsApi", "addDocumentRecipient", "documentRecipientCreateRequest");
        }


        // Path Params
        const localVarPath = '/public/v1/documents/{id}/recipients'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(documentRecipientCreateRequest, "DocumentRecipientCreateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove a recipient from a document.  > 🚧 Before you start >  > Please ensure that you have the \'Can Manage Recipients\' permission.  To remove a recipient from a document, you must specify their ID in the path parameter (note that this is different from their contact\'s ID). The recipient\'s ID can be retrieved via the [Document Details](https://developers.pandadoc.com/reference/document-details) endpoint.  ### Document status  - Removing a signer is only possible when the document is in the \'Draft\' (`document.draft`) status and this action will unassign all fields associated with that signer. - Removing a CC recipient is allowed in any document status except for the \'Expired\' (`document.voided`) and \'Declined\' (`document.declined`). If a CC recipient is removed, their access will be revoked. 
     * Delete Document Recipient
     * @param id Document UUID
     * @param recipientId Recipient UUID
     */
    public async deleteDocumentRecipient(id: string, recipientId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DocumentRecipientsApi", "deleteDocumentRecipient", "id");
        }


        // verify required parameter 'recipientId' is not null or undefined
        if (recipientId === null || recipientId === undefined) {
            throw new RequiredError("DocumentRecipientsApi", "deleteDocumentRecipient", "recipientId");
        }


        // Path Params
        const localVarPath = '/public/v1/documents/{id}/recipients/{recipient_id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'recipient_id' + '}', encodeURIComponent(String(recipientId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Modify recipient\'s personal details.  > 🚧 Before you start >  > To edit a recipient, please ensure that you have the \'Can Edit Document\' permission.  Use this endpoint to easily fix typos in a recipient\'s name or email, or to change any other recipient information in a sent document.   > 📘 Please note that changes made to a recipient within a document will also update their `Contact` information. However, these changes will not update information about this recipient in other documents where they have already been added.  ### Document status  - You can edit a signer in the following document statuses:   - \'Draft\' (`document.draft`),   - \'Waiting Approval\' (`document.waiting_approval`),   - \'Approved\' (`document.approved`),   - \'Rejected\' (`document.rejected`),   - \'Sent\' (`document.sent`),   - \'Viewed\' (`document.viewed`), but only until they have signed the document. - You can edit a CC recipient in any document status **except**:   - \'Expired\' (`document.voided`),   - \'Declined\' (`document.declined`).  > 📘 Updating a recipient\'s email after sending a document >  > **Note**: If you update a recipient\'s email address after sending a document, they will receive an instant notification at the new email address, allowing them access to the document. Access via the previous email will be revoked.  ### Restrictions for updating a recipient\'s email  - You cannot change emails of PandaDoc users. - You cannot use the email addresses of existing contacts. If you need to use an email from an existing contact, use the [Change Signer](https://developers.pandadoc.com/reference/change-signer) endpoint to replace a signer with this contact. 
     * Update Document Recipient
     * @param id Document UUID.
     * @param recipientId Recipient UUID.
     * @param documentRecipientEditRequest 
     */
    public async editDocumentRecipient(id: string, recipientId: string, documentRecipientEditRequest: DocumentRecipientEditRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DocumentRecipientsApi", "editDocumentRecipient", "id");
        }


        // verify required parameter 'recipientId' is not null or undefined
        if (recipientId === null || recipientId === undefined) {
            throw new RequiredError("DocumentRecipientsApi", "editDocumentRecipient", "recipientId");
        }


        // verify required parameter 'documentRecipientEditRequest' is not null or undefined
        if (documentRecipientEditRequest === null || documentRecipientEditRequest === undefined) {
            throw new RequiredError("DocumentRecipientsApi", "editDocumentRecipient", "documentRecipientEditRequest");
        }


        // Path Params
        const localVarPath = '/public/v1/documents/{id}/recipients/recipient/{recipient_id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'recipient_id' + '}', encodeURIComponent(String(recipientId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(documentRecipientEditRequest, "DocumentRecipientEditRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Reassign fields to another signer.  > 🚧 Before you start >  > To change a signer in a document, please ensure that: >  > - You have the \'Can Manage Recipients\' permission. > - New signer is already created in your contacts. If not, add them using the [Create Contact](https://developers.pandadoc.com/reference/create-contact) endpoint.  You can reassign fields to another signer before the original signer has signed the document. You can choose any person except those recipients who have already signed the document.  The endpoint path includes the `recipient_id` of the original signer and the request body must include the following two parameters:  - `kind`: Set this parameter to `contact` to specify an individual contact. - `id`: Input the ID of the contact you want to use as a replacement for the original signer.  To retrieve the contact\'s ID, use the [List Contacts](https://developers.pandadoc.com/reference/list-contacts) endpoint to access a list of all contacts, and then locate the desired contact by searching using the name or email address within the returned list.  Once you execute the call to change the signer, the original signer will be entirely removed from the document. If you wish to retain the original signer as a CC recipient, you can re-add them using the [Add CC Recipient](https://developers.pandadoc.com/reference/add-new-recipient-cc) endpoint.  > 🚧 Pre-filled fields >  > If you change the signer in a document that has already been sent, the signer\'s pre-filled fields will be completely reset. In the \'Draft\' (`document.draft`) status, pre-filled fields will remain. 
     * Change Signer (Reassign Document Recipient)
     * @param id Document UUID
     * @param recipientId Recipient UUID
     * @param documentRecipientCreateRequest 
     */
    public async reassignDocumentRecipient(id: string, recipientId: string, documentRecipientCreateRequest: DocumentRecipientCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DocumentRecipientsApi", "reassignDocumentRecipient", "id");
        }


        // verify required parameter 'recipientId' is not null or undefined
        if (recipientId === null || recipientId === undefined) {
            throw new RequiredError("DocumentRecipientsApi", "reassignDocumentRecipient", "recipientId");
        }


        // verify required parameter 'documentRecipientCreateRequest' is not null or undefined
        if (documentRecipientCreateRequest === null || documentRecipientCreateRequest === undefined) {
            throw new RequiredError("DocumentRecipientsApi", "reassignDocumentRecipient", "documentRecipientCreateRequest");
        }


        // Path Params
        const localVarPath = '/public/v1/documents/{id}/recipients/{recipient_id}/reassign'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'recipient_id' + '}', encodeURIComponent(String(recipientId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(documentRecipientCreateRequest, "DocumentRecipientCreateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DocumentRecipientsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addDocumentRecipient
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addDocumentRecipientWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DocumentRecipientResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DocumentRecipientResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentRecipientResponse", ""
            ) as DocumentRecipientResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: UpdateDocument400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "UpdateDocument400Response", ""
            ) as UpdateDocument400Response;
            throw new ApiException<UpdateDocument400Response>(response.httpStatusCode, "Bad Request", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments401Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments401Response", ""
            ) as ListDocuments401Response;
            throw new ApiException<ListDocuments401Response>(response.httpStatusCode, "Authentication error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments403Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments403Response", ""
            ) as ListDocuments403Response;
            throw new ApiException<ListDocuments403Response>(response.httpStatusCode, "Permission error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: StatusDocument404Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "StatusDocument404Response", ""
            ) as StatusDocument404Response;
            throw new ApiException<StatusDocument404Response>(response.httpStatusCode, "Not found", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments429Response", ""
            ) as ListDocuments429Response;
            throw new ApiException<ListDocuments429Response>(response.httpStatusCode, "Too Many Requests", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DocumentRecipientResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentRecipientResponse", ""
            ) as DocumentRecipientResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        const rawBodyAny: string | Buffer | undefined = await response.getBodyAsAny();
        let rawBody: string | undefined = undefined;
        let rawBodyParsed: any = rawBodyAny;
        if (typeof rawBodyAny === "string") {
            rawBody = rawBodyAny;
            rawBodyParsed = tryParseRawBody(rawBodyAny, contentType);
        }
        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", rawBodyAny, response.headers, rawBody, rawBodyParsed);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDocumentRecipient
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDocumentRecipientWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments401Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments401Response", ""
            ) as ListDocuments401Response;
            throw new ApiException<ListDocuments401Response>(response.httpStatusCode, "Authentication error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments403Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments403Response", ""
            ) as ListDocuments403Response;
            throw new ApiException<ListDocuments403Response>(response.httpStatusCode, "Permission error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: StatusDocument404Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "StatusDocument404Response", ""
            ) as StatusDocument404Response;
            throw new ApiException<StatusDocument404Response>(response.httpStatusCode, "Not found", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments429Response", ""
            ) as ListDocuments429Response;
            throw new ApiException<ListDocuments429Response>(response.httpStatusCode, "Too Many Requests", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        const rawBodyAny: string | Buffer | undefined = await response.getBodyAsAny();
        let rawBody: string | undefined = undefined;
        let rawBodyParsed: any = rawBodyAny;
        if (typeof rawBodyAny === "string") {
            rawBody = rawBodyAny;
            rawBodyParsed = tryParseRawBody(rawBodyAny, contentType);
        }
        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", rawBodyAny, response.headers, rawBody, rawBodyParsed);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to editDocumentRecipient
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async editDocumentRecipientWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: UpdateDocument400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "UpdateDocument400Response", ""
            ) as UpdateDocument400Response;
            throw new ApiException<UpdateDocument400Response>(response.httpStatusCode, "Bad Request", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments401Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments401Response", ""
            ) as ListDocuments401Response;
            throw new ApiException<ListDocuments401Response>(response.httpStatusCode, "Authentication error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments403Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments403Response", ""
            ) as ListDocuments403Response;
            throw new ApiException<ListDocuments403Response>(response.httpStatusCode, "Permission error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: StatusDocument404Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "StatusDocument404Response", ""
            ) as StatusDocument404Response;
            throw new ApiException<StatusDocument404Response>(response.httpStatusCode, "Not found", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments429Response", ""
            ) as ListDocuments429Response;
            throw new ApiException<ListDocuments429Response>(response.httpStatusCode, "Too Many Requests", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        const rawBodyAny: string | Buffer | undefined = await response.getBodyAsAny();
        let rawBody: string | undefined = undefined;
        let rawBodyParsed: any = rawBodyAny;
        if (typeof rawBodyAny === "string") {
            rawBody = rawBodyAny;
            rawBodyParsed = tryParseRawBody(rawBodyAny, contentType);
        }
        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", rawBodyAny, response.headers, rawBody, rawBodyParsed);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reassignDocumentRecipient
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reassignDocumentRecipientWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DocumentRecipientResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DocumentRecipientResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentRecipientResponse", ""
            ) as DocumentRecipientResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: UpdateDocument400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "UpdateDocument400Response", ""
            ) as UpdateDocument400Response;
            throw new ApiException<UpdateDocument400Response>(response.httpStatusCode, "Bad Request", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments401Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments401Response", ""
            ) as ListDocuments401Response;
            throw new ApiException<ListDocuments401Response>(response.httpStatusCode, "Authentication error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments403Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments403Response", ""
            ) as ListDocuments403Response;
            throw new ApiException<ListDocuments403Response>(response.httpStatusCode, "Permission error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: StatusDocument404Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "StatusDocument404Response", ""
            ) as StatusDocument404Response;
            throw new ApiException<StatusDocument404Response>(response.httpStatusCode, "Not found", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments429Response", ""
            ) as ListDocuments429Response;
            throw new ApiException<ListDocuments429Response>(response.httpStatusCode, "Too Many Requests", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DocumentRecipientResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentRecipientResponse", ""
            ) as DocumentRecipientResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        const rawBodyAny: string | Buffer | undefined = await response.getBodyAsAny();
        let rawBody: string | undefined = undefined;
        let rawBodyParsed: any = rawBodyAny;
        if (typeof rawBodyAny === "string") {
            rawBody = rawBodyAny;
            rawBodyParsed = tryParseRawBody(rawBodyAny, contentType);
        }
        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", rawBodyAny, response.headers, rawBody, rawBodyParsed);
    }

}

