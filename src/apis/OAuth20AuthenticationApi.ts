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


import { AccessToken400Response } from '../models/AccessToken400Response';
import { OAuth2AccessTokenResponse } from '../models/OAuth2AccessTokenResponse';

/**
 * no description
 */
export class OAuth20AuthenticationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create or refresh an access token to make requests on behalf of a user. This endpoint is used to obtain an `access_token` and `refresh_token` for the first time, and to refresh the `access_token` when it expires. This endpoint is part of OAuth 2.0 implementation. You need to configure OAuth App to obtain `client_id` and `client_secret`. Read more about [OAuth 2.0 implementation](https://developers.pandadoc.com/reference/authentication-process). Make sure you\'re sending the header `Content-Type: application/x-www-form-urlencoded`.   ## Create Access Token As a result of the OAuth 2.0 user authentication process, you should get a `code` that can be exchanged for an `access_token`. Use this endpoint to do this exchange, and to refresh the token later.  > 🚧 Invalid Grant? >  > If you receive an `invalid grant` response it is likely because you used the same `code` more than once from the [Authorize a PandaDoc User](ref:authorize-a-user) step above. The `code` parameter is generated for one-time use. A new `code` value must be generated if you wish to change API users, permissions, or simply generate a new `code` value for the same PandaDoc user.  > 📘 expires_in >  > `expires_in` is based in seconds. Currently, a token expires in 31535999 seconds = 1 year.  ## Refresh Access Token Eventually, `access_token` expires and accessing an API method returns **401 unauthorized**. Your application needs to refresh the OAuth2 token with the stored `refresh_token` returned when initially creating an access token.  Once refreshed, calls on behalf of the originally authorized user can resume immediately. Use the newly returned `access_token` for all future API requests.  > 🚧 Invalid Grant? >  > If you receive an `invalid grant` response, it is likely because your `refresh_token` is invalid. 
     * Create/Refresh Access Token
     * @param grantType This value must be set to &#x60;refresh_token&#x60;.
     * @param clientId Client ID that is automatically generated after application creation in the Developer Dashboard.
     * @param clientSecret Client secret that is automatically generated after application creation in the Developer Dashboard.
     * @param code &#x60;auth_code&#x60; from the server on the previous step (Authorize a PandaDoc User). 
     * @param scope Requested permissions. Use &#x60;read+write&#x60; as our default value to send documents.
     * @param refreshToken &#x60;refresh_token&#x60; you received and stored from the server when initially creating an &#x60;access_token&#x60;. 
     */
    public async accessToken(grantType?: string, clientId?: string, clientSecret?: string, code?: string, scope?: string, refreshToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/oauth2/access_token';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'application/x-www-form-urlencoded',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (grantType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('grant_type', grantType as any);
        }
        if (clientId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_id', clientId as any);
        }
        if (clientSecret !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_secret', clientSecret as any);
        }
        if (code !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('code', code as any);
        }
        if (scope !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('scope', scope as any);
        }
        if (refreshToken !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('refresh_token', refreshToken as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "application/x-www-form-urlencoded"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class OAuth20AuthenticationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accessToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accessTokenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OAuth2AccessTokenResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OAuth2AccessTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2AccessTokenResponse", ""
            ) as OAuth2AccessTokenResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: AccessToken400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "AccessToken400Response", ""
            ) as AccessToken400Response;
            throw new ApiException<AccessToken400Response>(response.httpStatusCode, "Bad Request", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OAuth2AccessTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OAuth2AccessTokenResponse", ""
            ) as OAuth2AccessTokenResponse;
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

