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


import { APILogDetailsResponse } from '../models/APILogDetailsResponse';
import { APILogListResponse } from '../models/APILogListResponse';
import { ApiLogEnvironmentTypeEnum } from '../models/ApiLogEnvironmentTypeEnum';
import { ApiLogMethodEnum } from '../models/ApiLogMethodEnum';
import { ApiLogStatusEnum } from '../models/ApiLogStatusEnum';
import { DetailsLogV2404Response } from '../models/DetailsLogV2404Response';
import { ListDocuments401Response } from '../models/ListDocuments401Response';
import { ListDocuments429Response } from '../models/ListDocuments429Response';
import { ListLogsV2400Response } from '../models/ListLogsV2400Response';
import { ListLogsV2401Response } from '../models/ListLogsV2401Response';
import { ListLogsV2429Response } from '../models/ListLogsV2429Response';
import { StatusDocument404Response } from '../models/StatusDocument404Response';
import { UpdateDocument400Response } from '../models/UpdateDocument400Response';

/**
 * no description
 */
export class APILogsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @deprecated
     *
     * Returns details of the specific API log event.
     * API Log Details
     * @param id Log event id.
     */
    public async detailsLog(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("APILogsApi", "detailsLog", "id");
        }


        // Path Params
        const localVarPath = '/public/v1/logs/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Returns details of the specific API log event.
     * API Log Details
     * @param id Log event id.
     */
    public async detailsLogV2(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("APILogsApi", "detailsLogV2", "id");
        }


        // Path Params
        const localVarPath = '/public/v2/logs/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * @deprecated
     *
     * Get the list of all logs within the selected workspace.\\ Optionally filter by date, page, and `#` of items per page.
     * List API Log
     * @param since Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-90d\&quot; (for past 90 days).
     * @param to Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-10d\&quot; (for past 10 days) or a special \&quot;now\&quot; value.
     * @param count The amount of items on each page.
     * @param page Returns page of the results by number.
     * @param statuses Returns only the predefined status codes.
     * @param methods Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE.
     * @param search Returns the results containing a string.
     * @param environmentType Returns logs for production/sandbox.
     */
    public async listLogs(since?: string, to?: string, count?: number, page?: number, statuses?: Array<ApiLogStatusEnum>, methods?: Array<ApiLogMethodEnum>, search?: string, environmentType?: ApiLogEnvironmentTypeEnum, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/public/v1/logs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "string", ""));
        }

        // Query Params
        if (to !== undefined) {
            requestContext.setQueryParam("to", ObjectSerializer.serialize(to, "string", ""));
        }

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (statuses !== undefined) {
            const serializedParams = ObjectSerializer.serialize(statuses, "Array<ApiLogStatusEnum>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("statuses", serializedParam);
            }
        }

        // Query Params
        if (methods !== undefined) {
            const serializedParams = ObjectSerializer.serialize(methods, "Array<ApiLogMethodEnum>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("methods", serializedParam);
            }
        }

        // Query Params
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }

        // Query Params
        if (environmentType !== undefined) {
            requestContext.setQueryParam("environment_type", ObjectSerializer.serialize(environmentType, "ApiLogEnvironmentTypeEnum", ""));
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
     * Get the list of all logs within the selected workspace.\\ Optionally filter by date, page, and `#` of items per page.
     * List API Log
     * @param since Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-90d\&quot; (for past 90 days).
     * @param to Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-10d\&quot; (for past 10 days) or a special \&quot;now\&quot; value.
     * @param count The amount of items on each page.
     * @param page Returns page of the results by number.
     * @param statuses Returns only the predefined status codes.
     * @param methods Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE.
     * @param search Returns the results containing a string.
     * @param environmentType Returns logs for production/sandbox.
     */
    public async listLogsV2(since?: string, to?: string, count?: number, page?: number, statuses?: Array<ApiLogStatusEnum>, methods?: Array<ApiLogMethodEnum>, search?: string, environmentType?: ApiLogEnvironmentTypeEnum, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/public/v2/logs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "string", ""));
        }

        // Query Params
        if (to !== undefined) {
            requestContext.setQueryParam("to", ObjectSerializer.serialize(to, "string", ""));
        }

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (statuses !== undefined) {
            const serializedParams = ObjectSerializer.serialize(statuses, "Array<ApiLogStatusEnum>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("statuses", serializedParam);
            }
        }

        // Query Params
        if (methods !== undefined) {
            const serializedParams = ObjectSerializer.serialize(methods, "Array<ApiLogMethodEnum>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("methods", serializedParam);
            }
        }

        // Query Params
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }

        // Query Params
        if (environmentType !== undefined) {
            requestContext.setQueryParam("environment_type", ObjectSerializer.serialize(environmentType, "ApiLogEnvironmentTypeEnum", ""));
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

}

export class APILogsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to detailsLog
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async detailsLogWithHttpInfo(response: ResponseContext): Promise<HttpInfo<APILogDetailsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: APILogDetailsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APILogDetailsResponse", ""
            ) as APILogDetailsResponse;
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
            const body: APILogDetailsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APILogDetailsResponse", ""
            ) as APILogDetailsResponse;
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
     * @params response Response returned by the server for a request to detailsLogV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async detailsLogV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<APILogDetailsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: APILogDetailsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APILogDetailsResponse", ""
            ) as APILogDetailsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListLogsV2400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListLogsV2400Response", ""
            ) as ListLogsV2400Response;
            throw new ApiException<ListLogsV2400Response>(response.httpStatusCode, "Bad Request error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListLogsV2401Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListLogsV2401Response", ""
            ) as ListLogsV2401Response;
            throw new ApiException<ListLogsV2401Response>(response.httpStatusCode, "Authentication error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: DetailsLogV2404Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "DetailsLogV2404Response", ""
            ) as DetailsLogV2404Response;
            throw new ApiException<DetailsLogV2404Response>(response.httpStatusCode, "Not found error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListLogsV2429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListLogsV2429Response", ""
            ) as ListLogsV2429Response;
            throw new ApiException<ListLogsV2429Response>(response.httpStatusCode, "Too many requests error", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: APILogDetailsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APILogDetailsResponse", ""
            ) as APILogDetailsResponse;
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
     * @params response Response returned by the server for a request to listLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLogsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<APILogListResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: APILogListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APILogListResponse", ""
            ) as APILogListResponse;
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
            const body: APILogListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APILogListResponse", ""
            ) as APILogListResponse;
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
     * @params response Response returned by the server for a request to listLogsV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listLogsV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<APILogListResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: APILogListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APILogListResponse", ""
            ) as APILogListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListLogsV2400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListLogsV2400Response", ""
            ) as ListLogsV2400Response;
            throw new ApiException<ListLogsV2400Response>(response.httpStatusCode, "Bad Request error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListLogsV2401Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListLogsV2401Response", ""
            ) as ListLogsV2401Response;
            throw new ApiException<ListLogsV2401Response>(response.httpStatusCode, "Authentication error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListLogsV2429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListLogsV2429Response", ""
            ) as ListLogsV2429Response;
            throw new ApiException<ListLogsV2429Response>(response.httpStatusCode, "Too many requests error", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: APILogListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APILogListResponse", ""
            ) as APILogListResponse;
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

