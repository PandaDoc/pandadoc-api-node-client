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


import { ListCatalogItemsSearchResponse } from '../models/ListCatalogItemsSearchResponse';
import { ListNotaries400Response } from '../models/ListNotaries400Response';
import { ListNotaries403Response } from '../models/ListNotaries403Response';
import { ListNotaries429Response } from '../models/ListNotaries429Response';
import { ProductCatalogItemPatchRequest } from '../models/ProductCatalogItemPatchRequest';
import { ProductCatalogItemRequest } from '../models/ProductCatalogItemRequest';
import { ProductCatalogItemResponse } from '../models/ProductCatalogItemResponse';
import { ProductCatalogTypeEnum } from '../models/ProductCatalogTypeEnum';
import { SearchCatalogItems401Response } from '../models/SearchCatalogItems401Response';

/**
 * no description
 */
export class ProductCatalogApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new catalog item.
     * Create Catalog Item
     * @param productCatalogItemRequest 
     */
    public async createCatalogItem(productCatalogItemRequest: ProductCatalogItemRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'productCatalogItemRequest' is not null or undefined
        if (productCatalogItemRequest === null || productCatalogItemRequest === undefined) {
            throw new RequiredError("ProductCatalogApi", "createCatalogItem", "productCatalogItemRequest");
        }


        // Path Params
        const localVarPath = '/public/v2/product-catalog/items';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productCatalogItemRequest, "ProductCatalogItemRequest", ""),
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
     * Delete catalog item.
     * Delete Catalog Item
     * @param itemUuid Catalog item UUID
     */
    public async deleteCatalogItem(itemUuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemUuid' is not null or undefined
        if (itemUuid === null || itemUuid === undefined) {
            throw new RequiredError("ProductCatalogApi", "deleteCatalogItem", "itemUuid");
        }


        // Path Params
        const localVarPath = '/public/v2/product-catalog/items/{item_uuid}'
            .replace('{' + 'item_uuid' + '}', encodeURIComponent(String(itemUuid)));

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
     * Get catalog item.
     * Catalog Item Details
     * @param itemUuid Catalog item UUID
     */
    public async getCatalogItem(itemUuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemUuid' is not null or undefined
        if (itemUuid === null || itemUuid === undefined) {
            throw new RequiredError("ProductCatalogApi", "getCatalogItem", "itemUuid");
        }


        // Path Params
        const localVarPath = '/public/v2/product-catalog/items/{item_uuid}'
            .replace('{' + 'item_uuid' + '}', encodeURIComponent(String(itemUuid)));

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
     * This method searches for items in your [product catalog](https://support.pandadoc.com/en/articles/9714691-product-catalog).  Use the `query` parameter to search in title, SKU, description, category name, custom fields name and value. You can also search for items by their type, billing type, and category id.  Order search results, in both ascending and descending order, by these item properties:  - SKU - Name - Price - Modification date  Use the `exclude_uuids` parameter to exclude particular uuids from the search request. 
     * List Catalog Items Search
     * @param page Page number.
     * @param perPage Items per page.
     * @param query Search query. Searches the following fields: Title, SKU, description, category name, custom fields name and value. 
     * @param orderBy Ordering principle for displaying search results.
     * @param types Filter by catalog item types.
     * @param billingTypes Filter by billing types.
     * @param excludeUuids A list of item uuids to be excluded from search.
     * @param categoryId Category id.
     * @param noCategory 
     */
    public async searchCatalogItems(page?: number, perPage?: number, query?: string, orderBy?: 'sku' | '-sku' | 'title' | '-title' | 'price' | '-price' | 'date_modified' | '-date_modified', types?: Array<ProductCatalogTypeEnum>, billingTypes?: Array<'one_time' | 'recurring'>, excludeUuids?: Array<string>, categoryId?: string, noCategory?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;










        // Path Params
        const localVarPath = '/public/v2/product-catalog/items/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", ""));
        }

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "'sku' | '-sku' | 'title' | '-title' | 'price' | '-price' | 'date_modified' | '-date_modified'", ""));
        }

        // Query Params
        if (types !== undefined) {
            const serializedParams = ObjectSerializer.serialize(types, "Array<ProductCatalogTypeEnum>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("types", serializedParam);
            }
        }

        // Query Params
        if (billingTypes !== undefined) {
            const serializedParams = ObjectSerializer.serialize(billingTypes, "Array<'one_time' | 'recurring'>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("billing_types", serializedParam);
            }
        }

        // Query Params
        if (excludeUuids !== undefined) {
            const serializedParams = ObjectSerializer.serialize(excludeUuids, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("exclude_uuids", serializedParam);
            }
        }

        // Query Params
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category_id", ObjectSerializer.serialize(categoryId, "string", ""));
        }

        // Query Params
        if (noCategory !== undefined) {
            requestContext.setQueryParam("no_category", ObjectSerializer.serialize(noCategory, "boolean", ""));
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
     * Update catalog item.
     * Update Catalog Item
     * @param itemUuid Catalog item UUID
     * @param productCatalogItemPatchRequest 
     */
    public async updateCatalogItem(itemUuid: string, productCatalogItemPatchRequest: ProductCatalogItemPatchRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemUuid' is not null or undefined
        if (itemUuid === null || itemUuid === undefined) {
            throw new RequiredError("ProductCatalogApi", "updateCatalogItem", "itemUuid");
        }


        // verify required parameter 'productCatalogItemPatchRequest' is not null or undefined
        if (productCatalogItemPatchRequest === null || productCatalogItemPatchRequest === undefined) {
            throw new RequiredError("ProductCatalogApi", "updateCatalogItem", "productCatalogItemPatchRequest");
        }


        // Path Params
        const localVarPath = '/public/v2/product-catalog/items/{item_uuid}'
            .replace('{' + 'item_uuid' + '}', encodeURIComponent(String(itemUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productCatalogItemPatchRequest, "ProductCatalogItemPatchRequest", ""),
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

export class ProductCatalogApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCatalogItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createCatalogItemWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductCatalogItemResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductCatalogItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductCatalogItemResponse", ""
            ) as ProductCatalogItemResponse;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductCatalogItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductCatalogItemResponse", ""
            ) as ProductCatalogItemResponse;
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
     * @params response Response returned by the server for a request to deleteCatalogItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCatalogItemWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListNotaries403Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListNotaries403Response", ""
            ) as ListNotaries403Response;
            throw new ApiException<ListNotaries403Response>(response.httpStatusCode, "Permission error", body, response.headers, rawBody, rawBodyParsed);
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
     * @params response Response returned by the server for a request to getCatalogItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCatalogItemWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductCatalogItemResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductCatalogItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductCatalogItemResponse", ""
            ) as ProductCatalogItemResponse;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductCatalogItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductCatalogItemResponse", ""
            ) as ProductCatalogItemResponse;
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
     * @params response Response returned by the server for a request to searchCatalogItems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchCatalogItemsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListCatalogItemsSearchResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListCatalogItemsSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListCatalogItemsSearchResponse", ""
            ) as ListCatalogItemsSearchResponse;
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
        if (isCodeInRange("401", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: SearchCatalogItems401Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "SearchCatalogItems401Response", ""
            ) as SearchCatalogItems401Response;
            throw new ApiException<SearchCatalogItems401Response>(response.httpStatusCode, "Authentication error", body, response.headers, rawBody, rawBodyParsed);
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
            const body: ListCatalogItemsSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListCatalogItemsSearchResponse", ""
            ) as ListCatalogItemsSearchResponse;
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
     * @params response Response returned by the server for a request to updateCatalogItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCatalogItemWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductCatalogItemResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductCatalogItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductCatalogItemResponse", ""
            ) as ProductCatalogItemResponse;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductCatalogItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductCatalogItemResponse", ""
            ) as ProductCatalogItemResponse;
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

