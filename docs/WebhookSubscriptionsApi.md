# .WebhookSubscriptionsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhookSubscription**](WebhookSubscriptionsApi.md#createWebhookSubscription) | **POST** /public/v1/webhook-subscriptions | Create Webhook Subscription
[**deleteWebhookSubscription**](WebhookSubscriptionsApi.md#deleteWebhookSubscription) | **DELETE** /public/v1/webhook-subscriptions/{id} | Delete Webhook Subscription
[**detailsWebhookSubscription**](WebhookSubscriptionsApi.md#detailsWebhookSubscription) | **GET** /public/v1/webhook-subscriptions/{id} | Webhook Subscription Details
[**listWebhookSubscriptions**](WebhookSubscriptionsApi.md#listWebhookSubscriptions) | **GET** /public/v1/webhook-subscriptions | List Webhook Subscriptions
[**updateWebhookSubscription**](WebhookSubscriptionsApi.md#updateWebhookSubscription) | **PATCH** /public/v1/webhook-subscriptions/{id} | Update Webhook Subscription
[**updateWebhookSubscriptionSharedKey**](WebhookSubscriptionsApi.md#updateWebhookSubscriptionSharedKey) | **PATCH** /public/v1/webhook-subscriptions/{id}/shared-key | Update Webhook Subscription Shared Key


# **createWebhookSubscription**
> WebhookSubscriptionItemResponse createWebhookSubscription(webhookSubscriptionCreateRequest)

This operation creates a new webhook subscription by specifying its details.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.WebhookSubscriptionsApi(configuration);

const body:pd_api.WebhookSubscriptionsApiCreateWebhookSubscriptionRequest = {
  // WebhookSubscriptionCreateRequest
  webhookSubscriptionCreateRequest: {
    name: "My Subscription",
    url: "https://example.com",
    active: true,
    payload: [
      "pricing",
    ],
    triggers: [
      "document_state_changed",
    ],
  },
};

apiInstance.createWebhookSubscription(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookSubscriptionCreateRequest** | **WebhookSubscriptionCreateRequest**|  |


### Return type

**WebhookSubscriptionItemResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Webhook subscription created |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **deleteWebhookSubscription**
> void deleteWebhookSubscription()

This operation deletes a specific webhook subscription identified by its UUID.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.WebhookSubscriptionsApi(configuration);

const body:pd_api.WebhookSubscriptionsApiDeleteWebhookSubscriptionRequest = {
  // string | Webhook subscription uuid.
  id: "d173751d-0057-4d5c-ab75-49a670a4ca68",
};

apiInstance.deleteWebhookSubscription(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Webhook subscription uuid. | defaults to undefined


### Return type

**void**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Webhook subscription removed |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **detailsWebhookSubscription**
> WebhookSubscriptionItemResponse detailsWebhookSubscription()

Get webhook subscription by uuid 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.WebhookSubscriptionsApi(configuration);

const body:pd_api.WebhookSubscriptionsApiDetailsWebhookSubscriptionRequest = {
  // string | Webhook subscription uuid
  id: "4fb6506c-02a0-427e-b445-b9e9ff0c822f",
};

apiInstance.detailsWebhookSubscription(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Webhook subscription uuid | defaults to undefined


### Return type

**WebhookSubscriptionItemResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get webhook subscription by uuid |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listWebhookSubscriptions**
> WebhookSubscriptionListResponse listWebhookSubscriptions()

This operation fetches a paginated list of webhook subscriptions.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.WebhookSubscriptionsApi(configuration);

let body:any = {};

apiInstance.listWebhookSubscriptions(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**WebhookSubscriptionListResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List webhook subscriptions |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **updateWebhookSubscription**
> WebhookSubscriptionItemResponse updateWebhookSubscription(webhookSubscriptionPatchRequest)

This operation updates the details of a webhook subscription.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.WebhookSubscriptionsApi(configuration);

const body:pd_api.WebhookSubscriptionsApiUpdateWebhookSubscriptionRequest = {
  // string | Webhook subscription uuid
  id: "d173751d-0057-4d5c-ab75-49a670a4ca68",
  // WebhookSubscriptionPatchRequest
  webhookSubscriptionPatchRequest: {
    name: "My Subscription",
    url: "https://example.com",
    active: true,
    payload: [
      "pricing",
    ],
    triggers: [
      "document_state_changed",
    ],
  },
};

apiInstance.updateWebhookSubscription(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookSubscriptionPatchRequest** | **WebhookSubscriptionPatchRequest**|  |
 **id** | [**string**] | Webhook subscription uuid | defaults to undefined


### Return type

**WebhookSubscriptionItemResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook subscription updated |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **updateWebhookSubscriptionSharedKey**
> WebhookSubscriptionSharedKeyResponse updateWebhookSubscriptionSharedKey()

This operation regenerates the shared key for a specific webhook subscription identified by its UUID.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.WebhookSubscriptionsApi(configuration);

const body:pd_api.WebhookSubscriptionsApiUpdateWebhookSubscriptionSharedKeyRequest = {
  // string | Webhook subscription uuid
  id: "d173751d-0057-4d5c-ab75-49a670a4ca68",
};

apiInstance.updateWebhookSubscriptionSharedKey(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Webhook subscription uuid | defaults to undefined


### Return type

**WebhookSubscriptionSharedKeyResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook subscription shared key regenerated |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

