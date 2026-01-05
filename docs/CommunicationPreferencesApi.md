# .CommunicationPreferencesApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listRecentSmsOptOuts**](CommunicationPreferencesApi.md#listRecentSmsOptOuts) | **GET** /public/v1/sms-opt-outs | Recent SMS Opt-out


# **listRecentSmsOptOuts**
> ListSmsOptOutChangelogResponse listRecentSmsOptOuts()

Retrieves a list of the most recent SMS opt-out changes for each phone numbers used in your workspace.  > 📘 You can filter results by time range using `timestamp_from` and `timestamp_to`. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.CommunicationPreferencesApi(configuration);

const body:pd_api.CommunicationPreferencesApiListRecentSmsOptOutsRequest = {
  // Date | The start of the timestamp.   If no timestamp is provided, 1 hour before the current time will be used.  (optional)
  timestampFrom: new Date('2025-01-28T00:00:00Z'),
  // Date | The end of the timestamp range.   If no timestamp is provided the current time will be used.  (optional)
  timestampTo: new Date('2025-01-28T23:59:59Z'),
};

apiInstance.listRecentSmsOptOuts(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timestampFrom** | [**Date**] | The start of the timestamp.   If no timestamp is provided, 1 hour before the current time will be used.  | (optional) defaults to undefined
 **timestampTo** | [**Date**] | The end of the timestamp range.   If no timestamp is provided the current time will be used.  | (optional) defaults to undefined


### Return type

**ListSmsOptOutChangelogResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of phone numbers, their SMS current opt-out statuses and timestamp of the last change. |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

