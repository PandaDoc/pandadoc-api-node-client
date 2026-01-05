# .DocumentRemindersApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createManualReminder**](DocumentRemindersApi.md#createManualReminder) | **POST** /public/v1/documents/{document_id}/send-reminder | Send Manual Reminder
[**getDocumentAutoReminderSettings**](DocumentRemindersApi.md#getDocumentAutoReminderSettings) | **GET** /public/v1/documents/{document_id}/auto-reminders | Document Auto Reminder Settings
[**statusDocumentAutoReminder**](DocumentRemindersApi.md#statusDocumentAutoReminder) | **GET** /public/v1/documents/{document_id}/auto-reminders/status | Document Auto Reminder Status
[**updateDocumentAutoReminderSettings**](DocumentRemindersApi.md#updateDocumentAutoReminderSettings) | **PATCH** /public/v1/documents/{document_id}/auto-reminders | Update Document Auto Reminder Settings


# **createManualReminder**
> DocumentSendManualReminder200Response createManualReminder(documentSendManualReminderRequest)

Sends manual reminders to one or more recipients of a specified document. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentRemindersApi(configuration);

const body:pd_api.DocumentRemindersApiCreateManualReminderRequest = {
  // string | The UUID of the document.
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // DocumentSendManualReminderRequest
  documentSendManualReminderRequest: {
    reminders: [
      {
        recipientId: "2eWSKSvVqmuVCnuUK3iWwD",
        deliveryMethods: {
          email: true,
          sms: true,
        },
        emailCustomization: {
          subject: "Reminder: Please sign the document "Service Agreement"",
          message: `**Reminder:** Please review and sign the document *"Service Agreement"*.

Thank you,  
**The Tech Solutions Team**
`,
        },
      },
    ],
  },
};

apiInstance.createManualReminder(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentSendManualReminderRequest** | **DocumentSendManualReminderRequest**|  |
 **documentId** | [**string**] | The UUID of the document. | defaults to undefined


### Return type

**DocumentSendManualReminder200Response**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully processed reminder requests. Returns an array of objects, where each object details the outcome of the reminder delivery attempt for a specific recipient.  |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**409** | Returned when a manual reminder cannot be sent due to the document\&#39;s current status. This occurs when:   - The document has not been sent yet.   - The document is in a final state (e.g., completed, paid, declined, or expired).   - The document is in \&quot;suggesting mode,\&quot; during which reminders are disabled.  |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **getDocumentAutoReminderSettings**
> AutoReminders getDocumentAutoReminderSettings()

Retrieves the current auto reminder configuration for a specified document. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentRemindersApi(configuration);

const body:pd_api.DocumentRemindersApiGetDocumentAutoReminderSettingsRequest = {
  // string | The UUID of the document.
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.getDocumentAutoReminderSettings(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] | The UUID of the document. | defaults to undefined


### Return type

**AutoReminders**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Auto reminder settings retrieved successfully. |  -  |
**400** | Returned when auto reminder settings could not be retrieved from the document. This occurs when document is in a final state (e.g., completed, paid, declined, or expired).  |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **statusDocumentAutoReminder**
> DocumentAutoRemindersResponse statusDocumentAutoReminder()

Retrieves the current auto reminder status per recipient for a specified document. Recipients who could not receive reminders due to validations (recipient groups, non-signers, etc.) will be skipped and not included in the response. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentRemindersApi(configuration);

const body:pd_api.DocumentRemindersApiStatusDocumentAutoReminderRequest = {
  // string | The UUID of the document.
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.statusDocumentAutoReminder(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] | The UUID of the document. | defaults to undefined


### Return type

**DocumentAutoRemindersResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Auto reminder status retrieved successfully. |  -  |
**400** | Returned when auto reminder status could not be retrieved due to the document\&#39;s current status or  reminders configuration. This occurs when:   - The document has not been sent yet.   - The document is in a final state (e.g., completed, paid, declined, or expired).   - The auto reminders are disabled in the document settings.  |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **updateDocumentAutoReminderSettings**
> UpdateDocumentAutoRemindersResponse updateDocumentAutoReminderSettings(updateDocumentAutoRemindersRequest)

Configures automatic reminders for document recipients.  These reminders are sent after the document\'s initial dispatch.  Settings include enabling reminders, delivery method (email/SMS), initial delay,  and recurrence frequency. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentRemindersApi(configuration);

const body:pd_api.DocumentRemindersApiUpdateDocumentAutoReminderSettingsRequest = {
  // string | The UUID of the document.
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // UpdateDocumentAutoRemindersRequest
  updateDocumentAutoRemindersRequest: {
    enabled: true,
    deliveryMethod: "email",
    initialDelayDays: 1,
    isRecurring: true,
    recurrenceFrequencyDays: 1,
  },
};

apiInstance.updateDocumentAutoReminderSettings(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDocumentAutoRemindersRequest** | **UpdateDocumentAutoRemindersRequest**|  |
 **documentId** | [**string**] | The UUID of the document. | defaults to undefined


### Return type

**UpdateDocumentAutoRemindersResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Auto reminder settings updated successfully. |  -  |
**400** | Returned when auto reminder settings could not be retrieved from the document. This occurs when document is in a final state (e.g., completed, paid, declined, or expired).  |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

