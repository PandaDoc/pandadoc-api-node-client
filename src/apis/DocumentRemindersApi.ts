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


import { AutoReminders } from '../models/AutoReminders';
import { DocumentAutoRemindersResponse } from '../models/DocumentAutoRemindersResponse';
import { DocumentAutoRemindersResponse400 } from '../models/DocumentAutoRemindersResponse400';
import { DocumentSendManualReminder200Response } from '../models/DocumentSendManualReminder200Response';
import { DocumentSendManualReminder409Response } from '../models/DocumentSendManualReminder409Response';
import { DocumentSendManualReminderRequest } from '../models/DocumentSendManualReminderRequest';
import { ListDocuments401Response } from '../models/ListDocuments401Response';
import { ListDocuments403Response } from '../models/ListDocuments403Response';
import { ListDocuments429Response } from '../models/ListDocuments429Response';
import { StatusDocument404Response } from '../models/StatusDocument404Response';
import { StatusDocumentAutoReminder400Response } from '../models/StatusDocumentAutoReminder400Response';
import { UpdateDocumentAutoRemindersRequest } from '../models/UpdateDocumentAutoRemindersRequest';
import { UpdateDocumentAutoRemindersResponse } from '../models/UpdateDocumentAutoRemindersResponse';

/**
 * no description
 */
export class DocumentRemindersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Sends manual reminders to one or more recipients of a specified document. 
     * Send Manual Reminder
     * @param documentId The UUID of the document.
     * @param documentSendManualReminderRequest 
     */
    public async createManualReminder(documentId: string, documentSendManualReminderRequest: DocumentSendManualReminderRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'documentId' is not null or undefined
        if (documentId === null || documentId === undefined) {
            throw new RequiredError("DocumentRemindersApi", "createManualReminder", "documentId");
        }


        // verify required parameter 'documentSendManualReminderRequest' is not null or undefined
        if (documentSendManualReminderRequest === null || documentSendManualReminderRequest === undefined) {
            throw new RequiredError("DocumentRemindersApi", "createManualReminder", "documentSendManualReminderRequest");
        }


        // Path Params
        const localVarPath = '/public/v1/documents/{document_id}/send-reminder'
            .replace('{' + 'document_id' + '}', encodeURIComponent(String(documentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(documentSendManualReminderRequest, "DocumentSendManualReminderRequest", ""),
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
     * Retrieves the current auto reminder configuration for a specified document. 
     * Document Auto Reminder Settings
     * @param documentId The UUID of the document.
     */
    public async getDocumentAutoReminderSettings(documentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'documentId' is not null or undefined
        if (documentId === null || documentId === undefined) {
            throw new RequiredError("DocumentRemindersApi", "getDocumentAutoReminderSettings", "documentId");
        }


        // Path Params
        const localVarPath = '/public/v1/documents/{document_id}/auto-reminders'
            .replace('{' + 'document_id' + '}', encodeURIComponent(String(documentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * Retrieves the current auto reminder status per recipient for a specified document. Recipients who could not receive reminders due to validations (recipient groups, non-signers, etc.) will be skipped and not included in the response. 
     * Document Auto Reminder Status
     * @param documentId The UUID of the document.
     */
    public async statusDocumentAutoReminder(documentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'documentId' is not null or undefined
        if (documentId === null || documentId === undefined) {
            throw new RequiredError("DocumentRemindersApi", "statusDocumentAutoReminder", "documentId");
        }


        // Path Params
        const localVarPath = '/public/v1/documents/{document_id}/auto-reminders/status'
            .replace('{' + 'document_id' + '}', encodeURIComponent(String(documentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * Configures automatic reminders for document recipients.  These reminders are sent after the document\'s initial dispatch.  Settings include enabling reminders, delivery method (email/SMS), initial delay,  and recurrence frequency. 
     * Update Document Auto Reminder Settings
     * @param documentId The UUID of the document.
     * @param updateDocumentAutoRemindersRequest 
     */
    public async updateDocumentAutoReminderSettings(documentId: string, updateDocumentAutoRemindersRequest: UpdateDocumentAutoRemindersRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'documentId' is not null or undefined
        if (documentId === null || documentId === undefined) {
            throw new RequiredError("DocumentRemindersApi", "updateDocumentAutoReminderSettings", "documentId");
        }


        // verify required parameter 'updateDocumentAutoRemindersRequest' is not null or undefined
        if (updateDocumentAutoRemindersRequest === null || updateDocumentAutoRemindersRequest === undefined) {
            throw new RequiredError("DocumentRemindersApi", "updateDocumentAutoReminderSettings", "updateDocumentAutoRemindersRequest");
        }


        // Path Params
        const localVarPath = '/public/v1/documents/{document_id}/auto-reminders'
            .replace('{' + 'document_id' + '}', encodeURIComponent(String(documentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateDocumentAutoRemindersRequest, "UpdateDocumentAutoRemindersRequest", ""),
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

export class DocumentRemindersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createManualReminder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createManualReminderWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DocumentSendManualReminder200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DocumentSendManualReminder200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentSendManualReminder200Response", ""
            ) as DocumentSendManualReminder200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: DocumentSendManualReminder409Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "DocumentSendManualReminder409Response", ""
            ) as DocumentSendManualReminder409Response;
            throw new ApiException<DocumentSendManualReminder409Response>(response.httpStatusCode, "Returned when a manual reminder cannot be sent due to the document\&#39;s current status. This occurs when:   - The document has not been sent yet.   - The document is in a final state (e.g., completed, paid, declined, or expired).   - The document is in \&quot;suggesting mode,\&quot; during which reminders are disabled. ", body, response.headers, rawBody, rawBodyParsed);
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
            const body: DocumentSendManualReminder200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentSendManualReminder200Response", ""
            ) as DocumentSendManualReminder200Response;
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
     * @params response Response returned by the server for a request to getDocumentAutoReminderSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDocumentAutoReminderSettingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AutoReminders >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutoReminders = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutoReminders", ""
            ) as AutoReminders;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: DocumentAutoRemindersResponse400 = ObjectSerializer.deserialize(
                rawBodyParsed,
                "DocumentAutoRemindersResponse400", ""
            ) as DocumentAutoRemindersResponse400;
            throw new ApiException<DocumentAutoRemindersResponse400>(response.httpStatusCode, "Returned when auto reminder settings could not be retrieved from the document. This occurs when document is in a final state (e.g., completed, paid, declined, or expired). ", body, response.headers, rawBody, rawBodyParsed);
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
            const body: AutoReminders = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutoReminders", ""
            ) as AutoReminders;
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
     * @params response Response returned by the server for a request to statusDocumentAutoReminder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statusDocumentAutoReminderWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DocumentAutoRemindersResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DocumentAutoRemindersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentAutoRemindersResponse", ""
            ) as DocumentAutoRemindersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: StatusDocumentAutoReminder400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "StatusDocumentAutoReminder400Response", ""
            ) as StatusDocumentAutoReminder400Response;
            throw new ApiException<StatusDocumentAutoReminder400Response>(response.httpStatusCode, "Returned when auto reminder status could not be retrieved due to the document\&#39;s current status or  reminders configuration. This occurs when:   - The document has not been sent yet.   - The document is in a final state (e.g., completed, paid, declined, or expired).   - The auto reminders are disabled in the document settings. ", body, response.headers, rawBody, rawBodyParsed);
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
            const body: DocumentAutoRemindersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentAutoRemindersResponse", ""
            ) as DocumentAutoRemindersResponse;
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
     * @params response Response returned by the server for a request to updateDocumentAutoReminderSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDocumentAutoReminderSettingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateDocumentAutoRemindersResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateDocumentAutoRemindersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateDocumentAutoRemindersResponse", ""
            ) as UpdateDocumentAutoRemindersResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: DocumentAutoRemindersResponse400 = ObjectSerializer.deserialize(
                rawBodyParsed,
                "DocumentAutoRemindersResponse400", ""
            ) as DocumentAutoRemindersResponse400;
            throw new ApiException<DocumentAutoRemindersResponse400>(response.httpStatusCode, "Returned when auto reminder settings could not be retrieved from the document. This occurs when document is in a final state (e.g., completed, paid, declined, or expired). ", body, response.headers, rawBody, rawBodyParsed);
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
            const body: UpdateDocumentAutoRemindersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateDocumentAutoRemindersResponse", ""
            ) as UpdateDocumentAutoRemindersResponse;
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

