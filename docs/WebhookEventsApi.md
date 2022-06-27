# .WebhookEventsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**detailsWebhookEvent**](WebhookEventsApi.md#detailsWebhookEvent) | **GET** /public/v1/webhook-events/{id} | Get webhook event by uuid
[**listWebhookEvent**](WebhookEventsApi.md#listWebhookEvent) | **GET** /public/v1/webhook-events | Get webhook event page


# **detailsWebhookEvent**
> WebhookEventDetailsResponse detailsWebhookEvent()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.WebhookEventsApi(configuration);

const body:pd_api.WebhookEventsApiDetailsWebhookEventRequest = {
  // string | Webhook event uuid
  id: "id_example",
};

apiInstance.detailsWebhookEvent(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Webhook event uuid | defaults to undefined


### Return type

**WebhookEventDetailsResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get webhook event by uuid |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listWebhookEvent**
> WebhookEventPageResponse listWebhookEvent()


### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.WebhookEventsApi(configuration);

const body:pd_api.WebhookEventsApiListWebhookEventRequest = {
  // number | Number of element in page
  count: 0,
  // number | Page number
  page: 0,
  // Date | Filter option: all events from specified timestamp (optional)
  since: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Filter option: all events up to specified timestamp (optional)
  to: new Date('1970-01-01T00:00:00.00Z'),
  // Array<WebhookEventTriggerEnum> | Filter option: all events of type (optional)
  type: [
    "document_state_changed",
  ],
  // Array<WebhookEventHttpStatusCodeGroupEnum> | Filter option: all events of http status code (optional)
  httpStatusCode: [
    400,
  ],
  // Array<WebhookEventErrorEnum> | Filter option: all events with following error (optional)
  error: [
    "TIMEOUT_ERROR",
  ],
};

apiInstance.listWebhookEvent(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | [**number**] | Number of element in page | defaults to undefined
 **page** | [**number**] | Page number | defaults to undefined
 **since** | [**Date**] | Filter option: all events from specified timestamp | (optional) defaults to undefined
 **to** | [**Date**] | Filter option: all events up to specified timestamp | (optional) defaults to undefined
 **type** | **Array&lt;WebhookEventTriggerEnum&gt;** | Filter option: all events of type | (optional) defaults to undefined
 **httpStatusCode** | **Array&lt;WebhookEventHttpStatusCodeGroupEnum&gt;** | Filter option: all events of http status code | (optional) defaults to undefined
 **error** | **Array&lt;WebhookEventErrorEnum&gt;** | Filter option: all events with following error | (optional) defaults to undefined


### Return type

**WebhookEventPageResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page of webhook events |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

