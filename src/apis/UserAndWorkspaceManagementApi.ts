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


import { AddMember400Response } from '../models/AddMember400Response';
import { AddMemberRequest } from '../models/AddMemberRequest';
import { AddMemberResponse } from '../models/AddMemberResponse';
import { CreateApiKeyRequest } from '../models/CreateApiKeyRequest';
import { CreateApiKeyResponse } from '../models/CreateApiKeyResponse';
import { CreateUser400Response } from '../models/CreateUser400Response';
import { CreateUserRequest } from '../models/CreateUserRequest';
import { CreateUserResponse } from '../models/CreateUserResponse';
import { CreateWorkspaceRequest } from '../models/CreateWorkspaceRequest';
import { CreateWorkspaceResponse } from '../models/CreateWorkspaceResponse';
import { ListDocuments401Response } from '../models/ListDocuments401Response';
import { ListDocuments403Response } from '../models/ListDocuments403Response';
import { ListDocuments429Response } from '../models/ListDocuments429Response';
import { ListUsersResponse } from '../models/ListUsersResponse';
import { ListWorkspacesResponse } from '../models/ListWorkspacesResponse';
import { RemoveMember400Response } from '../models/RemoveMember400Response';
import { RemoveMember404Response } from '../models/RemoveMember404Response';
import { StatusDocument404Response } from '../models/StatusDocument404Response';
import { UpdateDocument400Response } from '../models/UpdateDocument400Response';

/**
 * no description
 */
export class UserAndWorkspaceManagementApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add an existing user to a workspace. - You must be an organization admin or a workspace admin to add members. 
     * Add Member to Workspace
     * @param workspaceId 
     * @param addMemberRequest 
     * @param notifyUser Send a confirmation email to the user that was added to workspace(s).
     * @param notifyWsAdmins Send a confirmation email to all workspace admins indicating that the user has been added to the workspace.
     */
    public async addMember(workspaceId: string, addMemberRequest: AddMemberRequest, notifyUser?: boolean, notifyWsAdmins?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspaceId' is not null or undefined
        if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError("UserAndWorkspaceManagementApi", "addMember", "workspaceId");
        }


        // verify required parameter 'addMemberRequest' is not null or undefined
        if (addMemberRequest === null || addMemberRequest === undefined) {
            throw new RequiredError("UserAndWorkspaceManagementApi", "addMember", "addMemberRequest");
        }




        // Path Params
        const localVarPath = '/public/v1/workspaces/{workspace_id}/members'
            .replace('{' + 'workspace_id' + '}', encodeURIComponent(String(workspaceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (notifyUser !== undefined) {
            requestContext.setQueryParam("notify_user", ObjectSerializer.serialize(notifyUser, "boolean", ""));
        }

        // Query Params
        if (notifyWsAdmins !== undefined) {
            requestContext.setQueryParam("notify_ws_admins", ObjectSerializer.serialize(notifyWsAdmins, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(addMemberRequest, "AddMemberRequest", ""),
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
     * Generate a new API key for the workspace. Check out [API Key Authentication article](https://developers.pandadoc.com/reference/api-key-authentication-process) for detailed API Keys description.  > 📘  > - Only an **Org Admin** can generate an API keys. > - To make another user a key\'s owner, pass `user_id` of this user. The user should has an **Admin** role in the workspace. > - Generating a new key invalidates existing key with the same type. Using this request, you can deactivate the key you\'re using for the request. 
     * Create API Key
     * @param workspaceId Workspace id.
     * @param createApiKeyRequest 
     */
    public async createApiKey(workspaceId: string, createApiKeyRequest: CreateApiKeyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspaceId' is not null or undefined
        if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError("UserAndWorkspaceManagementApi", "createApiKey", "workspaceId");
        }


        // verify required parameter 'createApiKeyRequest' is not null or undefined
        if (createApiKeyRequest === null || createApiKeyRequest === undefined) {
            throw new RequiredError("UserAndWorkspaceManagementApi", "createApiKey", "createApiKeyRequest");
        }


        // Path Params
        const localVarPath = '/public/v1/workspaces/{workspace_id}/api-keys'
            .replace('{' + 'workspace_id' + '}', encodeURIComponent(String(workspaceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createApiKeyRequest, "CreateApiKeyRequest", ""),
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
     * Create users, and assign them roles, licenses, and workspaces.  - You must be an organization admin to create users. - We check that the user email domain matches your organization domain. - We check that the user email and phone number have a valid format. 
     * Create User
     * @param createUserRequest 
     * @param notifyUser Send a confirmation email to the user that was added to workspace(s).
     * @param notifyWsAdmins Send a confirmation email to all workspace admins indicating that the user has been added to the workspace.
     */
    public async createUser(createUserRequest: CreateUserRequest, notifyUser?: boolean, notifyWsAdmins?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createUserRequest' is not null or undefined
        if (createUserRequest === null || createUserRequest === undefined) {
            throw new RequiredError("UserAndWorkspaceManagementApi", "createUser", "createUserRequest");
        }




        // Path Params
        const localVarPath = '/public/v1/users';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (notifyUser !== undefined) {
            requestContext.setQueryParam("notify_user", ObjectSerializer.serialize(notifyUser, "boolean", ""));
        }

        // Query Params
        if (notifyWsAdmins !== undefined) {
            requestContext.setQueryParam("notify_ws_admins", ObjectSerializer.serialize(notifyWsAdmins, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createUserRequest, "CreateUserRequest", ""),
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
     * Create a workspace in your organization.  - You need to be an Org Admin to create a workspace. - You will be added to the new workspace with an Admin role. 
     * Create Workspace
     * @param createWorkspaceRequest 
     */
    public async createWorkspace(createWorkspaceRequest: CreateWorkspaceRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createWorkspaceRequest' is not null or undefined
        if (createWorkspaceRequest === null || createWorkspaceRequest === undefined) {
            throw new RequiredError("UserAndWorkspaceManagementApi", "createWorkspace", "createWorkspaceRequest");
        }


        // Path Params
        const localVarPath = '/public/v1/workspaces';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createWorkspaceRequest, "CreateWorkspaceRequest", ""),
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
     * Deactivate the workspace, remove all the members from it and make it  unavailable. 
     * Deactivate Workspace
     * @param workspaceId 
     * @param body 
     */
    public async deactivateWorkspace(workspaceId: string, body?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspaceId' is not null or undefined
        if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError("UserAndWorkspaceManagementApi", "deactivateWorkspace", "workspaceId");
        }



        // Path Params
        const localVarPath = '/public/v1/workspaces/{workspace_id}/deactivate'
            .replace('{' + 'workspace_id' + '}', encodeURIComponent(String(workspaceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
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
     * Get a list of all the active workspaces in the organization. 
     * List Workspaces
     * @param count Number of elements in page.
     * @param page Page number.
     */
    public async getWorkspacesList(count?: number, page?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/public/v1/workspaces';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
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
     * Get a list of all users with membership in your organization, with their contact information, license type, and workspace roles.  You must be an organization admin to list users. 
     * List Users
     * @param count Number of elements in page.
     * @param page Page number.
     * @param showRemoved Filter option - show users with removed memberships.
     */
    public async listUsers(count?: number, page?: number, showRemoved?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/public/v1/users';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (showRemoved !== undefined) {
            requestContext.setQueryParam("show_removed", ObjectSerializer.serialize(showRemoved, "boolean", ""));
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
     * This operation removes a specified member from a workspace by providing the workspace ID and member ID.
     * Remove Member from Workspace
     * @param workspaceId Workspace id
     * @param memberId Member id
     */
    public async removeMember(workspaceId: string, memberId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspaceId' is not null or undefined
        if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError("UserAndWorkspaceManagementApi", "removeMember", "workspaceId");
        }


        // verify required parameter 'memberId' is not null or undefined
        if (memberId === null || memberId === undefined) {
            throw new RequiredError("UserAndWorkspaceManagementApi", "removeMember", "memberId");
        }


        // Path Params
        const localVarPath = '/public/v1/workspaces/{workspace_id}/members/{member_id}'
            .replace('{' + 'workspace_id' + '}', encodeURIComponent(String(workspaceId)))
            .replace('{' + 'member_id' + '}', encodeURIComponent(String(memberId)));

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

}

export class UserAndWorkspaceManagementApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addMember
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addMemberWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AddMemberResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AddMemberResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddMemberResponse", ""
            ) as AddMemberResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: AddMember400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "AddMember400Response", ""
            ) as AddMember400Response;
            throw new ApiException<AddMember400Response>(response.httpStatusCode, "Bad Request", body, response.headers, rawBody, rawBodyParsed);
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
            const body: AddMemberResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddMemberResponse", ""
            ) as AddMemberResponse;
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
     * @params response Response returned by the server for a request to createApiKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createApiKeyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateApiKeyResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateApiKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateApiKeyResponse", ""
            ) as CreateApiKeyResponse;
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
            const body: CreateApiKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateApiKeyResponse", ""
            ) as CreateApiKeyResponse;
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
     * @params response Response returned by the server for a request to createUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateUserResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateUserResponse", ""
            ) as CreateUserResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: CreateUser400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "CreateUser400Response", ""
            ) as CreateUser400Response;
            throw new ApiException<CreateUser400Response>(response.httpStatusCode, "Bad Request", body, response.headers, rawBody, rawBodyParsed);
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
            const body: CreateUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateUserResponse", ""
            ) as CreateUserResponse;
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
     * @params response Response returned by the server for a request to createWorkspace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createWorkspaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateWorkspaceResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateWorkspaceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateWorkspaceResponse", ""
            ) as CreateWorkspaceResponse;
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
            const body: CreateWorkspaceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateWorkspaceResponse", ""
            ) as CreateWorkspaceResponse;
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
     * @params response Response returned by the server for a request to deactivateWorkspace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deactivateWorkspaceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
     * @params response Response returned by the server for a request to getWorkspacesList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWorkspacesListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListWorkspacesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListWorkspacesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListWorkspacesResponse", ""
            ) as ListWorkspacesResponse;
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
            const body: ListWorkspacesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListWorkspacesResponse", ""
            ) as ListWorkspacesResponse;
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
     * @params response Response returned by the server for a request to listUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listUsersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListUsersResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListUsersResponse", ""
            ) as ListUsersResponse;
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
            const body: ListUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListUsersResponse", ""
            ) as ListUsersResponse;
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
     * @params response Response returned by the server for a request to removeMember
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeMemberWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: RemoveMember400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "RemoveMember400Response", ""
            ) as RemoveMember400Response;
            throw new ApiException<RemoveMember400Response>(response.httpStatusCode, "Bad Request", body, response.headers, rawBody, rawBodyParsed);
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
            const body: RemoveMember404Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "RemoveMember404Response", ""
            ) as RemoveMember404Response;
            throw new ApiException<RemoveMember404Response>(response.httpStatusCode, "Bad Request", body, response.headers, rawBody, rawBodyParsed);
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

}

