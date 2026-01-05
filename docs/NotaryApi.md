# .NotaryApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNotarizationRequest**](NotaryApi.md#createNotarizationRequest) | **POST** /public/v2/notary/notarization-requests | Create Notarization Request
[**deleteNotarizationRequest**](NotaryApi.md#deleteNotarizationRequest) | **DELETE** /public/v2/notary/notarization-requests/{session_request_id} | Delete Notarization Request
[**listNotaries**](NotaryApi.md#listNotaries) | **GET** /public/v2/notary/notaries | List Notaries
[**notarizationRequestDetails**](NotaryApi.md#notarizationRequestDetails) | **GET** /public/v2/notary/notarization-requests/{session_request_id} | Notarization Request Details


# **createNotarizationRequest**
> CreateNotarizationResponse createNotarizationRequest(createNotarizationRequest)

Create a notarization request to connect with a notary and complete online notarizations for your signers within minutes.  > 🚧 **Important:** This endpoint supports only documents in draft status.  ## Prerequisites  > 🚧 Before you start >  > Ensure the following before creating a notarization request: >  > - Install the Notary On-Demand or Notary add-on > - Create a document for notarization and get its `document_id`. To create a document, use the [Create Document from Template](https://developers.pandadoc.com/reference/create-document-from-pandadoc-template) or [Create Document from File Upload](https://developers.pandadoc.com/reference/create-document-from-pdf) endpoint.  ## Request Details  For the notarization request, include in the request body:  - `document_id` - At least one `invitees`, specifying their `email`, `first_name`, and `last_name` - Optionally, include a `message` for your signers - Optionally, using `disable_invitees_notifications` you can disable all notifications for invitees including email with invitation for notarization. This is useful when you are using alternative delivery methods. - If in-house notary must be assigned to this request, include the `notary` object with the notary\'s `id`, `scheduled_at` timestamp, and an optional `message` for the notary  After the API call is executed, your signers will receive an email invitation for notarization. Alternatively, you can directly share the `notarization_link` with your signers, which is available in the 201 response body.  Upon successful notarization, you will receive an email with a link to the notarized document.  ## Usage Tips  > 📘 Best Practices >  > - Ensure that signers are added as both invitees in the request body and recipients in the document to avoid inconveniences during notary sessions > - Signers will receive an email with a notary link upon a successful API call; this link is also in the 201 response > - In case if notary is not specified in the request, signers will use the link to connect with commissioned online notaries, available Mon-Fri, 9 AM - 9 PM Central Time, typically responding within 2 minutes > - If notary is specified, signers will use the link to connect with your in-house notary at the scheduled time  ## Limits  A maximum of 100 API calls per minute is permitted. Exceeding this limit triggers a 429 Too Many Requests error.  ## Troubleshooting  **Solutions for 4xx Response Codes:**  - **403 Forbidden (Inactive Add-on)**: Ensure the Notary On-Demand or Notary add-on is installed - **403 Forbidden (Transactions Limit)**: Purchase additional transactions either through the Notary UI or by contacting the Sales team - **429 Too Many Requests**: If you hit the limit, hold your API calls, then send them after waiting for the retry time  > 📘 To learn more about PandaDoc Notary On-Demand, visit our [website](https://notary.pandadoc.com/notary-on-demand/). 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.NotaryApi(configuration);

const body:pd_api.NotaryApiCreateNotarizationRequestRequest = {
  // CreateNotarizationRequest
  createNotarizationRequest: {
    documentId: "8DstGmLJDBXBKrh3wnqzpe",
    disableInviteesNotifications: true,
    invitation: {
      message: "Some message",
      invitees: [
        {
          email: "email@gmail.com",
          firstName: "John",
          lastName: "Smith",
        },
      ],
    },
    notary: {
      id: "nyAnVpY7pZ23FBve8s9xgk",
      scheduledAt: new Date('2025-09-01T11:00:00Z'),
      message: "Please review the document before the scheduled session",
    },
  },
};

apiInstance.createNotarizationRequest(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNotarizationRequest** | **CreateNotarizationRequest**|  |


### Return type

**CreateNotarizationResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Notarization request has been created successfully |  -  |
**403** | Permission error |  -  |
**429** | Too many requests error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **deleteNotarizationRequest**
> void deleteNotarizationRequest()

Use this method to delete a notarization request. Once notarization request is deleted it cannot be restored.  > 🚧 Notarization Request status >  > You can only delete a notarization request in status \'SENT\', \'WAITING_FOR_NOTARY\' or \'INCOMPLETE\'.  > If the notarization request is in any other status, the request will return a 400 Bad Request error.  By default all invitees will receive email notification about deletion of the notarization request.  If you want to disable this notification, you can use the `disable_invitees_notifications` parameter when creating request (see [Create Notarization Request](https://developers.pandadoc.com/reference/create-notarization-request)). 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.NotaryApi(configuration);

const body:pd_api.NotaryApiDeleteNotarizationRequestRequest = {
  // string | Notarization Request ID.
  sessionRequestId: "0b2256a2-5803-4ae9-b1b8-595f48e37173",
};

apiInstance.deleteNotarizationRequest(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionRequestId** | [**string**] | Notarization Request ID. | defaults to undefined


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
**204** | No content |  -  |
**400** | Bad Request error |  -  |
**403** | Permission error |  -  |
**404** | Not found error |  -  |
**429** | Too many requests error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **listNotaries**
> ListNotariesResponse listNotaries()

Retrieve a list of notaries associated with your organization.  ## Important Notes  - At the moment, notaries can be added to organization only manually through the PandaDoc Notary UI.  - Organization must have Notary addon enabled to use this endpoint 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.NotaryApi(configuration);

const body:pd_api.NotaryApiListNotariesRequest = {
  // Array<'INVITED' | 'UNDER_REVIEW' | 'ACTIVE' | 'REJECTED' | 'INACTIVE'> | Filter by status (comma-separated values supported). Valid values are INVITED, UNDER_REVIEW, ACTIVE, REJECTED, INACTIVE (optional)
  status: ["ACTIVE","UNDER_REVIEW"],
  // Array<string> | Filter by commission state (comma-separated values supported) (optional)
  commissionState: ["California","Arizona"],
  // number | Number of results to skip (optional)
  offset: 0,
  // number | Maximum number of results to return (optional)
  limit: 50,
  // 'email' | '-email' | 'status' | '-status' | 'name' | '-name' | Sort by name, email, or status (default is email). Use a - prefix for descending order (e.g., -email) (optional)
  orderBy: "email",
};

apiInstance.listNotaries(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **Array<&#39;INVITED&#39; &#124; &#39;UNDER_REVIEW&#39; &#124; &#39;ACTIVE&#39; &#124; &#39;REJECTED&#39; &#124; &#39;INACTIVE&#39;>** | Filter by status (comma-separated values supported). Valid values are INVITED, UNDER_REVIEW, ACTIVE, REJECTED, INACTIVE | (optional) defaults to undefined
 **commissionState** | **Array&lt;string&gt;** | Filter by commission state (comma-separated values supported) | (optional) defaults to undefined
 **offset** | [**number**] | Number of results to skip | (optional) defaults to 0
 **limit** | [**number**] | Maximum number of results to return | (optional) defaults to 50
 **orderBy** | [**&#39;email&#39; | &#39;-email&#39; | &#39;status&#39; | &#39;-status&#39; | &#39;name&#39; | &#39;-name&#39;**]**Array<&#39;email&#39; &#124; &#39;-email&#39; &#124; &#39;status&#39; &#124; &#39;-status&#39; &#124; &#39;name&#39; &#124; &#39;-name&#39;>** | Sort by name, email, or status (default is email). Use a - prefix for descending order (e.g., -email) | (optional) defaults to 'email'


### Return type

**ListNotariesResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of notaries retrieved successfully |  -  |
**400** | Bad Request error |  -  |
**403** | Permission error |  -  |
**429** | Too many requests error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **notarizationRequestDetails**
> NotarizationRequestDetailsResponse notarizationRequestDetails()

Get details about a notarization request by its `id`.  Details include:  - Basic notarization request information (status, creator, invitees). - Signed documents information with links for downloading. - Notarization session recording information with link for downloading. - Timestamps associated with a notarization request.  ## Available Notarization Request Statuses  The following is a complete list of all possible notarization request statuses returned:  | Notarization Request Status | Status Description                                                                                                 | | :-------------------------- | :----------------------------------------------------------------------------------------------------------------- | | SENT                        | Notarization request has been created. Invitees are notified and can start the process of finding a notary.        | | WAITING_FOR_NOTARY          | One of the invitees initialised the process of finding a notary.                                                   | | ACCEPTED                    | Notarization request has been accepted by the notary. At this time nobody has joined the notarization session yet. | | LIVE                        | Notarization session has started.                                                                                  | | COMPLETED                   | Notarization session is finished. Documents have been successfully signed and ready for downloading.               | | INCOMPLETE                  | Notarization session has started but was not completed successfully.                                               |  ## Signed documents  Signed documents are the documents that were successfully signed during the notarization session. The signed document\'s info is available only if the notarization request has `COMPLETED` status, otherwise the returned list will be empty.    In case you uploaded several documents for notarization then the `signed_documents` list will contain links for downloading for each document separately (with `SINGLE` document type) and link for the combined document (with `COMBINED` document type accordingly).  ## Recording  Recording is the video of the notarization session. The recording info is available only if the notarization request has `COMPLETED` status and recording is available, otherwise the returned object will be empty.  > 📘 Links expire in 1 hour >  > **Note**: The signed document and recording links expire in 1 hour. After this time it will be not possible to download files using the returned urls. In this case you need to call endpoint again since each request generates a new link.  ## Limits  A maximum of 100 API calls per minute is permitted. Exceeding this limit triggers a 429 Too Many Requests error. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.NotaryApi(configuration);

const body:pd_api.NotaryApiNotarizationRequestDetailsRequest = {
  // string | Notarization Request ID.
  sessionRequestId: "0b2256a2-5803-4ae9-b1b8-595f48e37173",
};

apiInstance.notarizationRequestDetails(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionRequestId** | [**string**] | Notarization Request ID. | defaults to undefined


### Return type

**NotarizationRequestDetailsResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details about notarization request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

