# .WebhookEventsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**detailsWebhookEvent**](WebhookEventsApi.md#detailsWebhookEvent) | **GET** /public/v1/webhook-events/{id} | Webhook Event Details
[**listWebhookEvent**](WebhookEventsApi.md#listWebhookEvent) | **GET** /public/v1/webhook-events | List Webhook Events


# **detailsWebhookEvent**
> WebhookEventDetailsResponse detailsWebhookEvent()

This operation fetches detailed information about a specific webhook event using its unique identifier.

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
  // string | Webhook event uuid.
  id: "8b61d111-5e0b-406d-a150-e8305fc7e97a",
};

apiInstance.detailsWebhookEvent(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Webhook event uuid. | defaults to undefined


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
**200** | Get webhook event by uuid. |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listWebhookEvent**
> WebhookEventPageResponse listWebhookEvent()

This operation retrieves a paginated list of all webhook events.

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
  // number | Specify how many event results to return.
  count: 10,
  // number | Specify which page of the dataset to return.
  page: 1,
  // Date | Return results where the event creation time is greater than or equal to this value. (optional)
  since: new Date('2022-06-01T00:00:00Z'),
  // Date | Return results where the event creation time is less than this value. (optional)
  to: new Date('2022-06-30T23:59:59Z'),
  // Array<WebhookEventTriggerEnum> | Returns results by the specified event types. (optional)
  type: [
    "["recipient_completed"]",
  ],
  // Array<WebhookEventHttpStatusCodeGroupEnum> | Returns results with the specified HTTP status codes. (optional)
  httpStatusCode: [
    [400],
  ],
  // Array<WebhookEventErrorEnum> | Returns results with the following errors. (optional)
  error: [
    "["INTERNAL_ERROR","NOT_VALID_URL"]",
  ],
};

apiInstance.listWebhookEvent(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | [**number**] | Specify how many event results to return. | defaults to undefined
 **page** | [**number**] | Specify which page of the dataset to return. | defaults to undefined
 **since** | [**Date**] | Return results where the event creation time is greater than or equal to this value. | (optional) defaults to undefined
 **to** | [**Date**] | Return results where the event creation time is less than this value. | (optional) defaults to undefined
 **type** | **Array&lt;WebhookEventTriggerEnum&gt;** | Returns results by the specified event types. | (optional) defaults to undefined
 **httpStatusCode** | **Array&lt;WebhookEventHttpStatusCodeGroupEnum&gt;** | Returns results with the specified HTTP status codes. | (optional) defaults to undefined
 **error** | **Array&lt;WebhookEventErrorEnum&gt;** | Returns results with the following errors. | (optional) defaults to undefined


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
**200** | Page of webhook events. |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

