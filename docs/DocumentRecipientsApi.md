# .DocumentRecipientsApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDocumentRecipient**](DocumentRecipientsApi.md#addDocumentRecipient) | **POST** /public/v1/documents/{id}/recipients | Add Document Recipient
[**deleteDocumentRecipient**](DocumentRecipientsApi.md#deleteDocumentRecipient) | **DELETE** /public/v1/documents/{id}/recipients/{recipient_id} | Delete Document Recipient
[**editDocumentRecipient**](DocumentRecipientsApi.md#editDocumentRecipient) | **PATCH** /public/v1/documents/{id}/recipients/recipient/{recipient_id} | Update Document Recipient
[**reassignDocumentRecipient**](DocumentRecipientsApi.md#reassignDocumentRecipient) | **POST** /public/v1/documents/{id}/recipients/{recipient_id}/reassign | Change Signer (Reassign Document Recipient)


# **addDocumentRecipient**
> DocumentRecipientResponse addDocumentRecipient(documentRecipientCreateRequest)

Add a CC recipient to a document.  > 🚧 Before you start >  > To add a CC recipient, please ensure that: >  > - You have the \'Can Manage Recipients\' permission. > - This recipient is already created in your contacts. If not, add them using the [Create Contact](https://developers.pandadoc.com/reference/create-contact) endpoint.  To add a new CC recipient to a document, two parameters must be included in the request body:  - `kind`: Set this parameter to `contact` to specify an individual contact. - `id`:  Input the ID of the desired contact.  To retrieve the contact\'s ID, use the [List Contacts](https://developers.pandadoc.com/reference/list-contacts) endpoint to access a list of all contacts, and then locate the desired contact by searching using the name or email address within the returned list.  ### Document status  You can add CC recipients in any document status except for the \'Expired\' (`document.voided`) and \'Declined\' (`document.declined`).  > 📘 Email notification to access the document >  > **Note**: When a document is in one of the following statuses: \'Sent\' (`document.sent`), \'Viewed\' (`document.viewed`), \'Completed\' (`document.completed`), \'Waiting for Payment\' (`document.waiting_pay`), or \'Paid\' (`document.paid`), any added CC recipient will receive an instant notification at their email address, allowing them access to the document. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentRecipientsApi(configuration);

const body:pd_api.DocumentRecipientsApiAddDocumentRecipientRequest = {
  // string | Document UUID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // DocumentRecipientCreateRequest
  documentRecipientCreateRequest: {
    id: "2eWSKSvVqmuVCnuUK3iWwD",
    kind: "contact",
  },
};

apiInstance.addDocumentRecipient(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentRecipientCreateRequest** | **DocumentRecipientCreateRequest**|  |
 **id** | [**string**] | Document UUID | defaults to undefined


### Return type

**DocumentRecipientResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **deleteDocumentRecipient**
> void deleteDocumentRecipient()

Remove a recipient from a document.  > 🚧 Before you start >  > Please ensure that you have the \'Can Manage Recipients\' permission.  To remove a recipient from a document, you must specify their ID in the path parameter (note that this is different from their contact\'s ID). The recipient\'s ID can be retrieved via the [Document Details](https://developers.pandadoc.com/reference/document-details) endpoint.  ### Document status  - Removing a signer is only possible when the document is in the \'Draft\' (`document.draft`) status and this action will unassign all fields associated with that signer. - Removing a CC recipient is allowed in any document status except for the \'Expired\' (`document.voided`) and \'Declined\' (`document.declined`). If a CC recipient is removed, their access will be revoked. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentRecipientsApi(configuration);

const body:pd_api.DocumentRecipientsApiDeleteDocumentRecipientRequest = {
  // string | Document UUID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Recipient UUID
  recipientId: "tf5dGS3Tmu3cj228ao6fnc",
};

apiInstance.deleteDocumentRecipient(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Document UUID | defaults to undefined
 **recipientId** | [**string**] | Recipient UUID | defaults to undefined


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
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **editDocumentRecipient**
> void editDocumentRecipient(documentRecipientEditRequest)

Modify recipient\'s personal details.  > 🚧 Before you start >  > To edit a recipient, please ensure that you have the \'Can Edit Document\' permission.  Use this endpoint to easily fix typos in a recipient\'s name or email, or to change any other recipient information in a sent document.   > 📘 Please note that changes made to a recipient within a document will also update their `Contact` information. However, these changes will not update information about this recipient in other documents where they have already been added.  ### Document status  - You can edit a signer in the following document statuses:   - \'Draft\' (`document.draft`),   - \'Waiting Approval\' (`document.waiting_approval`),   - \'Approved\' (`document.approved`),   - \'Rejected\' (`document.rejected`),   - \'Sent\' (`document.sent`),   - \'Viewed\' (`document.viewed`), but only until they have signed the document. - You can edit a CC recipient in any document status **except**:   - \'Expired\' (`document.voided`),   - \'Declined\' (`document.declined`).  > 📘 Updating a recipient\'s email after sending a document >  > **Note**: If you update a recipient\'s email address after sending a document, they will receive an instant notification at the new email address, allowing them access to the document. Access via the previous email will be revoked.  ### Restrictions for updating a recipient\'s email  - You cannot change emails of PandaDoc users. - You cannot use the email addresses of existing contacts. If you need to use an email from an existing contact, use the [Change Signer](https://developers.pandadoc.com/reference/change-signer) endpoint to replace a signer with this contact. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentRecipientsApi(configuration);

const body:pd_api.DocumentRecipientsApiEditDocumentRecipientRequest = {
  // string | Document UUID.
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Recipient UUID.
  recipientId: "tf5dGS3Tmu3cj228ao6fnc",
  // DocumentRecipientEditRequest
  documentRecipientEditRequest: {
    email: "user01@pandadoc.com",
    phone: "+14842634627",
    deliveryMethods: {
      email: true,
      sms: true,
    },
    firstName: "John",
    lastName: "Doe",
    company: "John Doe Inc.",
    jobTitle: "CTO",
    state: "Texas",
    streetAddress: "1313 Mockingbird Lane",
    city: "Austin",
    postalCode: "75001",
    verificationSettings: {
      verificationPlace: "before_open",
      passcodeVerification: {
        passcode: "SimpleCode1",
      },
      phoneVerification: {
        phoneNumber: "+1234567890",
      },
      kbaVerification: {
        timeLimitSec: 120,
        scoreThreshold: 80,
        maxAttemptsCount: 2,
      },
      idVerification: {
        enabled: true,
      },
    },
    redirect: {
      isEnabled: false,
      url: "https://example.com",
    },
  },
};

apiInstance.editDocumentRecipient(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentRecipientEditRequest** | **DocumentRecipientEditRequest**|  |
 **id** | [**string**] | Document UUID. | defaults to undefined
 **recipientId** | [**string**] | Recipient UUID. | defaults to undefined


### Return type

**void**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **reassignDocumentRecipient**
> DocumentRecipientResponse reassignDocumentRecipient(documentRecipientCreateRequest)

Reassign fields to another signer.  > 🚧 Before you start >  > To change a signer in a document, please ensure that: >  > - You have the \'Can Manage Recipients\' permission. > - New signer is already created in your contacts. If not, add them using the [Create Contact](https://developers.pandadoc.com/reference/create-contact) endpoint.  You can reassign fields to another signer before the original signer has signed the document. You can choose any person except those recipients who have already signed the document.  The endpoint path includes the `recipient_id` of the original signer and the request body must include the following two parameters:  - `kind`: Set this parameter to `contact` to specify an individual contact. - `id`: Input the ID of the contact you want to use as a replacement for the original signer.  To retrieve the contact\'s ID, use the [List Contacts](https://developers.pandadoc.com/reference/list-contacts) endpoint to access a list of all contacts, and then locate the desired contact by searching using the name or email address within the returned list.  Once you execute the call to change the signer, the original signer will be entirely removed from the document. If you wish to retain the original signer as a CC recipient, you can re-add them using the [Add CC Recipient](https://developers.pandadoc.com/reference/add-new-recipient-cc) endpoint.  > 🚧 Pre-filled fields >  > If you change the signer in a document that has already been sent, the signer\'s pre-filled fields will be completely reset. In the \'Draft\' (`document.draft`) status, pre-filled fields will remain. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentRecipientsApi(configuration);

const body:pd_api.DocumentRecipientsApiReassignDocumentRecipientRequest = {
  // string | Document UUID
  id: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Recipient UUID
  recipientId: "tf5dGS3Tmu3cj228ao6fnc",
  // DocumentRecipientCreateRequest
  documentRecipientCreateRequest: {
    id: "2eWSKSvVqmuVCnuUK3iWwD",
    kind: "contact",
  },
};

apiInstance.reassignDocumentRecipient(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentRecipientCreateRequest** | **DocumentRecipientCreateRequest**|  |
 **id** | [**string**] | Document UUID | defaults to undefined
 **recipientId** | [**string**] | Recipient UUID | defaults to undefined


### Return type

**DocumentRecipientResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**403** | Permission error |  -  |
**404** | Not found |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

