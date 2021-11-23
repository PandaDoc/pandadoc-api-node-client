# .OAuth20AuthenticationApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accessToken**](OAuth20AuthenticationApi.md#accessToken) | **POST** /oauth2/access_token | Create/Refresh Access Token


# **accessToken**
> OAuth2AccessTokenResponse accessToken()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.OAuth20AuthenticationApi(configuration);

const body:pd_api.OAuth20AuthenticationApiAccessTokenRequest = {
  // string | This value must be set to `refresh_token`. (optional)
  grantType: "refresh_token",
  // string | Client ID that is automatically generated after application creation in the Developer Dashboard. (optional)
  clientId: "479a3c7ba4a8d3cf28702",
  // string | Client secret that is automatically generated after application creation in the Developer Dashboard. (optional)
  clientSecret: "a66515d3caf9183b8cad3eee546bcba892b45b01",
  // string | `auth_code` from the server on the previous step (Authorize a PandaDoc User).  (optional)
  code: "a9a60d4dabb61ade665c712d2b41766e7bb9a2f9",
  // string | Requested permissions. Use `read+write` as our default value to send documents. (optional)
  scope: "read+write",
  // string | `refresh_token` you received and stored from the server when initially creating an `access_token`.  (optional)
  refreshToken: "f61cc0cffd437c9a596f0acc8eb6f502a7a429d7",
};

apiInstance.accessToken(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | [**string**] | This value must be set to &#x60;refresh_token&#x60;. | (optional) defaults to 'refresh_token'
 **clientId** | [**string**] | Client ID that is automatically generated after application creation in the Developer Dashboard. | (optional) defaults to undefined
 **clientSecret** | [**string**] | Client secret that is automatically generated after application creation in the Developer Dashboard. | (optional) defaults to undefined
 **code** | [**string**] | &#x60;auth_code&#x60; from the server on the previous step (Authorize a PandaDoc User).  | (optional) defaults to undefined
 **scope** | [**string**] | Requested permissions. Use &#x60;read+write&#x60; as our default value to send documents. | (optional) defaults to undefined
 **refreshToken** | [**string**] | &#x60;refresh_token&#x60; you received and stored from the server when initially creating an &#x60;access_token&#x60;.  | (optional) defaults to undefined


### Return type

**OAuth2AccessTokenResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

