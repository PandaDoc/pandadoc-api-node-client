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


import { CreateNotarizationRequest } from '../models/CreateNotarizationRequest';
import { CreateNotarizationResponse } from '../models/CreateNotarizationResponse';
import { DeleteNotarizationRequest404Response } from '../models/DeleteNotarizationRequest404Response';
import { ListNotaries400Response } from '../models/ListNotaries400Response';
import { ListNotaries403Response } from '../models/ListNotaries403Response';
import { ListNotaries429Response } from '../models/ListNotaries429Response';
import { ListNotariesResponse } from '../models/ListNotariesResponse';
import { NotarizationRequestDetailsResponse } from '../models/NotarizationRequestDetailsResponse';

/**
 * no description
 */
export class NotaryApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a notarization request to connect with a notary and complete online notarizations for your signers within minutes.  > 🚧 **Important:** This endpoint supports only documents in draft status.  ## Prerequisites  > 🚧 Before you start >  > Ensure the following before creating a notarization request: >  > - Install the Notary On-Demand or Notary add-on > - Create a document for notarization and get its `document_id`. To create a document, use the [Create Document from Template](https://developers.pandadoc.com/reference/create-document-from-pandadoc-template) or [Create Document from File Upload](https://developers.pandadoc.com/reference/create-document-from-pdf) endpoint.  ## Request Details  For the notarization request, include in the request body:  - `document_id` - At least one `invitees`, specifying their `email`, `first_name`, and `last_name` - Optionally, include a `message` for your signers - Optionally, using `disable_invitees_notifications` you can disable all notifications for invitees including email with invitation for notarization. This is useful when you are using alternative delivery methods. - If in-house notary must be assigned to this request, include the `notary` object with the notary\'s `id`, `scheduled_at` timestamp, and an optional `message` for the notary  After the API call is executed, your signers will receive an email invitation for notarization. Alternatively, you can directly share the `notarization_link` with your signers, which is available in the 201 response body.  Upon successful notarization, you will receive an email with a link to the notarized document.  ## Usage Tips  > 📘 Best Practices >  > - Ensure that signers are added as both invitees in the request body and recipients in the document to avoid inconveniences during notary sessions > - Signers will receive an email with a notary link upon a successful API call; this link is also in the 201 response > - In case if notary is not specified in the request, signers will use the link to connect with commissioned online notaries, available Mon-Fri, 9 AM - 9 PM Central Time, typically responding within 2 minutes > - If notary is specified, signers will use the link to connect with your in-house notary at the scheduled time  ## Limits  A maximum of 100 API calls per minute is permitted. Exceeding this limit triggers a 429 Too Many Requests error.  ## Troubleshooting  **Solutions for 4xx Response Codes:**  - **403 Forbidden (Inactive Add-on)**: Ensure the Notary On-Demand or Notary add-on is installed - **403 Forbidden (Transactions Limit)**: Purchase additional transactions either through the Notary UI or by contacting the Sales team - **429 Too Many Requests**: If you hit the limit, hold your API calls, then send them after waiting for the retry time  > 📘 To learn more about PandaDoc Notary On-Demand, visit our [website](https://notary.pandadoc.com/notary-on-demand/). 
     * Create Notarization Request
     * @param createNotarizationRequest 
     */
    public async createNotarizationRequest(createNotarizationRequest: CreateNotarizationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createNotarizationRequest' is not null or undefined
        if (createNotarizationRequest === null || createNotarizationRequest === undefined) {
            throw new RequiredError("NotaryApi", "createNotarizationRequest", "createNotarizationRequest");
        }


        // Path Params
        const localVarPath = '/public/v2/notary/notarization-requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createNotarizationRequest, "CreateNotarizationRequest", ""),
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
     * Use this method to delete a notarization request. Once notarization request is deleted it cannot be restored.  > 🚧 Notarization Request status >  > You can only delete a notarization request in status \'SENT\', \'WAITING_FOR_NOTARY\' or \'INCOMPLETE\'.  > If the notarization request is in any other status, the request will return a 400 Bad Request error.  By default all invitees will receive email notification about deletion of the notarization request.  If you want to disable this notification, you can use the `disable_invitees_notifications` parameter when creating request (see [Create Notarization Request](https://developers.pandadoc.com/reference/create-notarization-request)). 
     * Delete Notarization Request
     * @param sessionRequestId Notarization Request ID.
     */
    public async deleteNotarizationRequest(sessionRequestId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'sessionRequestId' is not null or undefined
        if (sessionRequestId === null || sessionRequestId === undefined) {
            throw new RequiredError("NotaryApi", "deleteNotarizationRequest", "sessionRequestId");
        }


        // Path Params
        const localVarPath = '/public/v2/notary/notarization-requests/{session_request_id}'
            .replace('{' + 'session_request_id' + '}', encodeURIComponent(String(sessionRequestId)));

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
     * Retrieve a list of notaries associated with your organization.  ## Important Notes  - At the moment, notaries can be added to organization only manually through the PandaDoc Notary UI.  - Organization must have Notary addon enabled to use this endpoint 
     * List Notaries
     * @param status Filter by status (comma-separated values supported). Valid values are INVITED, UNDER_REVIEW, ACTIVE, REJECTED, INACTIVE
     * @param commissionState Filter by commission state (comma-separated values supported)
     * @param offset Number of results to skip
     * @param limit Maximum number of results to return
     * @param orderBy Sort by name, email, or status (default is email). Use a - prefix for descending order (e.g., -email)
     */
    public async listNotaries(status?: Array<'INVITED' | 'UNDER_REVIEW' | 'ACTIVE' | 'REJECTED' | 'INACTIVE'>, commissionState?: Array<string>, offset?: number, limit?: number, orderBy?: 'email' | '-email' | 'status' | '-status' | 'name' | '-name', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/public/v2/notary/notaries';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (status !== undefined) {
            const serializedParams = ObjectSerializer.serialize(status, "Array<'INVITED' | 'UNDER_REVIEW' | 'ACTIVE' | 'REJECTED' | 'INACTIVE'>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("status", serializedParam);
            }
        }

        // Query Params
        if (commissionState !== undefined) {
            const serializedParams = ObjectSerializer.serialize(commissionState, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("commission_state", serializedParam);
            }
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "'email' | '-email' | 'status' | '-status' | 'name' | '-name'", ""));
        }


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
     * Get details about a notarization request by its `id`.  Details include:  - Basic notarization request information (status, creator, invitees). - Signed documents information with links for downloading. - Notarization session recording information with link for downloading. - Timestamps associated with a notarization request.  ## Available Notarization Request Statuses  The following is a complete list of all possible notarization request statuses returned:  | Notarization Request Status | Status Description                                                                                                 | | :-------------------------- | :----------------------------------------------------------------------------------------------------------------- | | SENT                        | Notarization request has been created. Invitees are notified and can start the process of finding a notary.        | | WAITING_FOR_NOTARY          | One of the invitees initialised the process of finding a notary.                                                   | | ACCEPTED                    | Notarization request has been accepted by the notary. At this time nobody has joined the notarization session yet. | | LIVE                        | Notarization session has started.                                                                                  | | COMPLETED                   | Notarization session is finished. Documents have been successfully signed and ready for downloading.               | | INCOMPLETE                  | Notarization session has started but was not completed successfully.                                               |  ## Signed documents  Signed documents are the documents that were successfully signed during the notarization session. The signed document\'s info is available only if the notarization request has `COMPLETED` status, otherwise the returned list will be empty.    In case you uploaded several documents for notarization then the `signed_documents` list will contain links for downloading for each document separately (with `SINGLE` document type) and link for the combined document (with `COMBINED` document type accordingly).  ## Recording  Recording is the video of the notarization session. The recording info is available only if the notarization request has `COMPLETED` status and recording is available, otherwise the returned object will be empty.  > 📘 Links expire in 1 hour >  > **Note**: The signed document and recording links expire in 1 hour. After this time it will be not possible to download files using the returned urls. In this case you need to call endpoint again since each request generates a new link.  ## Limits  A maximum of 100 API calls per minute is permitted. Exceeding this limit triggers a 429 Too Many Requests error. 
     * Notarization Request Details
     * @param sessionRequestId Notarization Request ID.
     */
    public async notarizationRequestDetails(sessionRequestId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'sessionRequestId' is not null or undefined
        if (sessionRequestId === null || sessionRequestId === undefined) {
            throw new RequiredError("NotaryApi", "notarizationRequestDetails", "sessionRequestId");
        }


        // Path Params
        const localVarPath = '/public/v2/notary/notarization-requests/{session_request_id}'
            .replace('{' + 'session_request_id' + '}', encodeURIComponent(String(sessionRequestId)));

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

}

export class NotaryApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNotarizationRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNotarizationRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateNotarizationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateNotarizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateNotarizationResponse", ""
            ) as CreateNotarizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListNotaries403Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListNotaries403Response", ""
            ) as ListNotaries403Response;
            throw new ApiException<ListNotaries403Response>(response.httpStatusCode, "Permission error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListNotaries429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListNotaries429Response", ""
            ) as ListNotaries429Response;
            throw new ApiException<ListNotaries429Response>(response.httpStatusCode, "Too many requests error", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateNotarizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateNotarizationResponse", ""
            ) as CreateNotarizationResponse;
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
     * @params response Response returned by the server for a request to deleteNotarizationRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteNotarizationRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListNotaries400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListNotaries400Response", ""
            ) as ListNotaries400Response;
            throw new ApiException<ListNotaries400Response>(response.httpStatusCode, "Bad Request error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListNotaries403Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListNotaries403Response", ""
            ) as ListNotaries403Response;
            throw new ApiException<ListNotaries403Response>(response.httpStatusCode, "Permission error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: DeleteNotarizationRequest404Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "DeleteNotarizationRequest404Response", ""
            ) as DeleteNotarizationRequest404Response;
            throw new ApiException<DeleteNotarizationRequest404Response>(response.httpStatusCode, "Not found error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListNotaries429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListNotaries429Response", ""
            ) as ListNotaries429Response;
            throw new ApiException<ListNotaries429Response>(response.httpStatusCode, "Too many requests error", body, response.headers, rawBody, rawBodyParsed);
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
     * @params response Response returned by the server for a request to listNotaries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listNotariesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListNotariesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListNotariesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListNotariesResponse", ""
            ) as ListNotariesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListNotaries400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListNotaries400Response", ""
            ) as ListNotaries400Response;
            throw new ApiException<ListNotaries400Response>(response.httpStatusCode, "Bad Request error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListNotaries403Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListNotaries403Response", ""
            ) as ListNotaries403Response;
            throw new ApiException<ListNotaries403Response>(response.httpStatusCode, "Permission error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListNotaries429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListNotaries429Response", ""
            ) as ListNotaries429Response;
            throw new ApiException<ListNotaries429Response>(response.httpStatusCode, "Too many requests error", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListNotariesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListNotariesResponse", ""
            ) as ListNotariesResponse;
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
     * @params response Response returned by the server for a request to notarizationRequestDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async notarizationRequestDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NotarizationRequestDetailsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NotarizationRequestDetailsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotarizationRequestDetailsResponse", ""
            ) as NotarizationRequestDetailsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NotarizationRequestDetailsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotarizationRequestDetailsResponse", ""
            ) as NotarizationRequestDetailsResponse;
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

