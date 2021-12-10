# .APILogsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**detailsApiLog**](APILogsApi.md#detailsApiLog) | **GET** /public/v1/logs/{id} | Details API Log
[**listApiLogs**](APILogsApi.md#listApiLogs) | **GET** /public/v1/logs | List API Log


# **detailsApiLog**
> APILogDetailsResponse detailsApiLog()

Returns details of the specific API log event.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.APILogsApi(configuration);

const body:pd_api.APILogsApiDetailsApiLogRequest = {
  // string | Log event id.
  id: "AXp2jrHMK2MKv_lRqmQ",
};

apiInstance.detailsApiLog(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Log event id. | defaults to undefined


### Return type

**APILogDetailsResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listApiLogs**
> APILogListResponse listApiLogs()

Get the list of all logs within the selected workspace. Optionally filter by date, page, and `#` of items per page.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.APILogsApi(configuration);

const body:pd_api.APILogsApiListApiLogsRequest = {
  // string | Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \"-90d\" (for past 90 days). (optional)
  since: "-7d",
  // string | Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \"-10d\" (for past 10 days) or a special \"now\" value. (optional)
  to: "now",
  // number | The amount of items on each page. (optional)
  count: 10,
  // number | Page number of the results returned. (optional)
  page: 1,
  // Array<100 | 200 | 300 | 400 | 500> | Returns only the predefined status codes. Allows 1xx, 2xx, 3xx, 4xx, and 5xx. (optional)
  statuses: [400,500],
  // Array<'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'> | Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE. (optional)
  methods: ["GET","POST"],
  // string | Returns the results containing a string. (optional)
  search: "documents/hryJY9mqYZHjQCYQuSjRQg/send",
  // 'PRODUCTION' | 'SANDBOX' | Returns logs for production/sandbox. (optional)
  environmentType: "PRODUCTION",
};

apiInstance.listApiLogs(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | [**string**] | Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-90d\&quot; (for past 90 days). | (optional) defaults to undefined
 **to** | [**string**] | Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-10d\&quot; (for past 10 days) or a special \&quot;now\&quot; value. | (optional) defaults to undefined
 **count** | [**number**] | The amount of items on each page. | (optional) defaults to undefined
 **page** | [**number**] | Page number of the results returned. | (optional) defaults to undefined
 **statuses** | **Array<100 &#124; 200 &#124; 300 &#124; 400 &#124; 500>** | Returns only the predefined status codes. Allows 1xx, 2xx, 3xx, 4xx, and 5xx. | (optional) defaults to undefined
 **methods** | **Array<&#39;GET&#39; &#124; &#39;POST&#39; &#124; &#39;PUT&#39; &#124; &#39;PATCH&#39; &#124; &#39;DELETE&#39;>** | Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE. | (optional) defaults to undefined
 **search** | [**string**] | Returns the results containing a string. | (optional) defaults to undefined
 **environmentType** | [**&#39;PRODUCTION&#39; | &#39;SANDBOX&#39;**]**Array<&#39;PRODUCTION&#39; &#124; &#39;SANDBOX&#39;>** | Returns logs for production/sandbox. | (optional) defaults to undefined


### Return type

**APILogListResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

