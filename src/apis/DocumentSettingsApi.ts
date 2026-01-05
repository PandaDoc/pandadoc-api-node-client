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


import { DocumentSettingsResponse } from '../models/DocumentSettingsResponse';
import { UpdateDocumentSettingsRequest } from '../models/UpdateDocumentSettingsRequest';

/**
 * no description
 */
export class DocumentSettingsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieves the settings for a specified document. Supported fields: language, qualified_electronic_signature, expires_in (in days). 
     * Get document settings
     * @param documentId Unique identifier of the document to retrieve settings for.
     */
    public async documentSettingsGet(documentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'documentId' is not null or undefined
        if (documentId === null || documentId === undefined) {
            throw new RequiredError("DocumentSettingsApi", "documentSettingsGet", "documentId");
        }


        // Path Params
        const localVarPath = '/public/v2/documents/{document_id}/settings'
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
     * Updates the settings for a specified document. Supported fields: language, qualified_electronic_signature, expires_in (in days). 
     * Update document settings
     * @param documentId Unique identifier of the document to update settings for.
     * @param updateDocumentSettingsRequest 
     */
    public async documentSettingsUpdate(documentId: string, updateDocumentSettingsRequest: UpdateDocumentSettingsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'documentId' is not null or undefined
        if (documentId === null || documentId === undefined) {
            throw new RequiredError("DocumentSettingsApi", "documentSettingsUpdate", "documentId");
        }


        // verify required parameter 'updateDocumentSettingsRequest' is not null or undefined
        if (updateDocumentSettingsRequest === null || updateDocumentSettingsRequest === undefined) {
            throw new RequiredError("DocumentSettingsApi", "documentSettingsUpdate", "updateDocumentSettingsRequest");
        }


        // Path Params
        const localVarPath = '/public/v2/documents/{document_id}/settings'
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
            ObjectSerializer.serialize(updateDocumentSettingsRequest, "UpdateDocumentSettingsRequest", ""),
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

export class DocumentSettingsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to documentSettingsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async documentSettingsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DocumentSettingsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DocumentSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentSettingsResponse", ""
            ) as DocumentSettingsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DocumentSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentSettingsResponse", ""
            ) as DocumentSettingsResponse;
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
     * @params response Response returned by the server for a request to documentSettingsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async documentSettingsUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DocumentSettingsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DocumentSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentSettingsResponse", ""
            ) as DocumentSettingsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DocumentSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentSettingsResponse", ""
            ) as DocumentSettingsResponse;
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

