# .WebhookSubscriptionsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhookSubscription**](WebhookSubscriptionsApi.md#createWebhookSubscription) | **POST** /public/v1/webhook-subscriptions | Create webhook subscription
[**deleteWebhookSubscription**](WebhookSubscriptionsApi.md#deleteWebhookSubscription) | **DELETE** /public/v1/webhook-subscriptions/{id} | Delete webhook subscription
[**detailsWebhookSubscription**](WebhookSubscriptionsApi.md#detailsWebhookSubscription) | **GET** /public/v1/webhook-subscriptions/{id} | Get webhook subscription by uuid
[**listWebhookSubscriptions**](WebhookSubscriptionsApi.md#listWebhookSubscriptions) | **GET** /public/v1/webhook-subscriptions | Get all webhook subscriptions
[**updateWebhookSubscription**](WebhookSubscriptionsApi.md#updateWebhookSubscription) | **PATCH** /public/v1/webhook-subscriptions/{id} | Update webhook subscription
[**updateWebhookSubscriptionSharedKey**](WebhookSubscriptionsApi.md#updateWebhookSubscriptionSharedKey) | **PATCH** /public/v1/webhook-subscriptions/{id}/shared-key | Regenerate webhook subscription shared key


# **createWebhookSubscription**
> WebhookSubscriptionItemResponse createWebhookSubscription(webhookSubscriptionCreateRequest)


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
  // string | Webhook subscription uuid
  id: "id_example",
};

apiInstance.deleteWebhookSubscription(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Webhook subscription uuid | defaults to undefined


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
  id: "id_example",
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
  id: "id_example",
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
  id: "id_example",
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

