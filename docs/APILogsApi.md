# .APILogsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**detailsLog**](APILogsApi.md#detailsLog) | **GET** /public/v1/logs/{id} | [Deprecated] API Log Details
[**detailsLogV2**](APILogsApi.md#detailsLogV2) | **GET** /public/v2/logs/{id} | API Log Details
[**listLogs**](APILogsApi.md#listLogs) | **GET** /public/v1/logs | [Deprecated] List API Log
[**listLogsV2**](APILogsApi.md#listLogsV2) | **GET** /public/v2/logs | List API Log


# **detailsLog**
> APILogDetailsResponse detailsLog()

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

const body:pd_api.APILogsApiDetailsLogRequest = {
  // string | Log event id.
  id: "AZC86i5PYKMjQjMMMw9e",
};

apiInstance.detailsLog(body).then((data) => {
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

# **detailsLogV2**
> APILogDetailsResponse detailsLogV2()

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

const body:pd_api.APILogsApiDetailsLogV2Request = {
  // string | Log event id.
  id: "AZC86i5PYKMjQjMMMw9e",
};

apiInstance.detailsLogV2(body).then((data) => {
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
**400** | Bad Request error |  -  |
**401** | Authentication error |  -  |
**404** | Not found error |  -  |
**429** | Too many requests error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listLogs**
> APILogListResponse listLogs()

Get the list of all logs within the selected workspace.\\ Optionally filter by date, page, and `#` of items per page.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.APILogsApi(configuration);

const body:pd_api.APILogsApiListLogsRequest = {
  // string | Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \"-90d\" (for past 90 days). (optional)
  since: "-7d",
  // string | Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \"-10d\" (for past 10 days) or a special \"now\" value. (optional)
  to: "now",
  // number | The amount of items on each page. (optional)
  count: 10,
  // number | Returns page of the results by number. (optional)
  page: 1,
  // Array<ApiLogStatusEnum> | Returns only the predefined status codes. (optional)
  statuses: [
    [400,500],
  ],
  // Array<ApiLogMethodEnum> | Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE. (optional)
  methods: [
    "["GET","POST"]",
  ],
  // string | Returns the results containing a string. (optional)
  search: "documents/hryJY9mqYZHjQCYQuSjRQg/send",
  // ApiLogEnvironmentTypeEnum | Returns logs for production/sandbox. (optional)
  environmentType: "PRODUCTION",
};

apiInstance.listLogs(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | [**string**] | Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-90d\&quot; (for past 90 days). | (optional) defaults to '-90d'
 **to** | [**string**] | Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-10d\&quot; (for past 10 days) or a special \&quot;now\&quot; value. | (optional) defaults to undefined
 **count** | [**number**] | The amount of items on each page. | (optional) defaults to 100
 **page** | [**number**] | Returns page of the results by number. | (optional) defaults to 1
 **statuses** | **Array&lt;ApiLogStatusEnum&gt;** | Returns only the predefined status codes. | (optional) defaults to undefined
 **methods** | **Array&lt;ApiLogMethodEnum&gt;** | Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE. | (optional) defaults to undefined
 **search** | [**string**] | Returns the results containing a string. | (optional) defaults to undefined
 **environmentType** | **ApiLogEnvironmentTypeEnum** | Returns logs for production/sandbox. | (optional) defaults to undefined


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

# **listLogsV2**
> APILogListResponse listLogsV2()

Get the list of all logs within the selected workspace.\\ Optionally filter by date, page, and `#` of items per page.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.APILogsApi(configuration);

const body:pd_api.APILogsApiListLogsV2Request = {
  // string | Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \"-90d\" (for past 90 days). (optional)
  since: "-7d",
  // string | Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \"-10d\" (for past 10 days) or a special \"now\" value. (optional)
  to: "now",
  // number | The amount of items on each page. (optional)
  count: 10,
  // number | Returns page of the results by number. (optional)
  page: 1,
  // Array<ApiLogStatusEnum> | Returns only the predefined status codes. (optional)
  statuses: [
    [400,500],
  ],
  // Array<ApiLogMethodEnum> | Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE. (optional)
  methods: [
    "["GET","POST"]",
  ],
  // string | Returns the results containing a string. (optional)
  search: "documents/hryJY9mqYZHjQCYQuSjRQg/send",
  // ApiLogEnvironmentTypeEnum | Returns logs for production/sandbox. (optional)
  environmentType: "PRODUCTION",
};

apiInstance.listLogsV2(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | [**string**] | Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-90d\&quot; (for past 90 days). | (optional) defaults to '-90d'
 **to** | [**string**] | Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-10d\&quot; (for past 10 days) or a special \&quot;now\&quot; value. | (optional) defaults to undefined
 **count** | [**number**] | The amount of items on each page. | (optional) defaults to 100
 **page** | [**number**] | Returns page of the results by number. | (optional) defaults to 1
 **statuses** | **Array&lt;ApiLogStatusEnum&gt;** | Returns only the predefined status codes. | (optional) defaults to undefined
 **methods** | **Array&lt;ApiLogMethodEnum&gt;** | Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE. | (optional) defaults to undefined
 **search** | [**string**] | Returns the results containing a string. | (optional) defaults to undefined
 **environmentType** | **ApiLogEnvironmentTypeEnum** | Returns logs for production/sandbox. | (optional) defaults to undefined


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
**400** | Bad Request error |  -  |
**401** | Authentication error |  -  |
**429** | Too many requests error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

