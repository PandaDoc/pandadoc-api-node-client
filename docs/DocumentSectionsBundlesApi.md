# .DocumentSectionsBundlesApi

All URIs are relative to *https://api.pandadoc.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSection**](DocumentSectionsBundlesApi.md#deleteSection) | **DELETE** /public/v1/documents/{document_id}/sections/{section_id} | Delete Document Section
[**listSections**](DocumentSectionsBundlesApi.md#listSections) | **GET** /public/v1/documents/{document_id}/sections | List Document Sections
[**sectionDetails**](DocumentSectionsBundlesApi.md#sectionDetails) | **GET** /public/v1/documents/{document_id}/sections/uploads/{upload_id} | Document Section Upload Status
[**sectionInfo**](DocumentSectionsBundlesApi.md#sectionInfo) | **GET** /public/v1/documents/{document_id}/sections/{section_id} | Document Section Details
[**uploadSection**](DocumentSectionsBundlesApi.md#uploadSection) | **POST** /public/v1/documents/{document_id}/sections/uploads | Create Document Section
[**uploadSectionWithUpload**](DocumentSectionsBundlesApi.md#uploadSectionWithUpload) | **POST** /public/v1/documents/{document_id}/sections/uploads?upload | Create Document Section from File Upload


# **deleteSection**
> void deleteSection()

Removes selected section from the document.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentSectionsBundlesApi(configuration);

const body:pd_api.DocumentSectionsBundlesApiDeleteSectionRequest = {
  // string | Specify document ID.
  documentId: "ZPeAfcpzr9aiVs5vqUf6jg",
  // string | Specify section ID.
  sectionId: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.deleteSection(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] | Specify document ID. | defaults to undefined
 **sectionId** | [**string**] | Specify section ID. | defaults to undefined


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

# **listSections**
> UploadSectionListResponse listSections()

Retrieve information about the sections within a document. 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentSectionsBundlesApi(configuration);

const body:pd_api.DocumentSectionsBundlesApiListSectionsRequest = {
  // string | Document ID
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
};

apiInstance.listSections(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] | Document ID | defaults to undefined


### Return type

**UploadSectionListResponse**

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
**403** | Permission error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **sectionDetails**
> UploadSectionStatusResponse sectionDetails()

Receive the upload status of the document and sections by their `upload_id`.  Requesting document section upload status is useful to ensure a document section upload is in the expected state before calling additional API methods.  In response, you receive an array with `sections_uuid`. You can receive information about each section using the [Document Section Info](https://developers.pandadoc.com/reference/document-section-info) endpoint.  ```json     \"section_uuids\": [         \"H8T8CJofGY6JwTsWsPuDEF\",         \"8MwLaU4SaZywqLiDk26mDF\"     ] ```  ## Available Document Section Upload Statuses  The following is a complete list of all possible document statuses returned:  | Document Status                      | Status Description                                                                                                                                                | | :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | | `document_sections_upload.UPLOADED`  | The document section upload process has just been created. It is in processing and will be in `document_sections_upload.PROCESSED` state momentarily.             | | `document_sections_upload.PROCESSED` | The document sections upload is processed and the sections are already created in the document. All aspects of the document sections can be edited in this state. | | `document_sections_upload.ERROR`     | Document section upload procces has been failed. For more information check error details in the response.                                                        | 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentSectionsBundlesApi(configuration);

const body:pd_api.DocumentSectionsBundlesApiSectionDetailsRequest = {
  // string | Document ID.
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Upload ID.
  uploadId: "LQ6cUT7xevPLUEgJeF8Zrm",
};

apiInstance.sectionDetails(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] | Document ID. | defaults to undefined
 **uploadId** | [**string**] | Upload ID. | defaults to undefined


### Return type

**UploadSectionStatusResponse**

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
**403** | Permission error |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **sectionInfo**
> SectionInfoResponse sectionInfo()

Receive information about each section.

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentSectionsBundlesApi(configuration);

const body:pd_api.DocumentSectionsBundlesApiSectionInfoRequest = {
  // string | Document ID.
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // string | Section ID.
  sectionId: "LQ6cUT7xevPLUEgJeF8Zrm",
};

apiInstance.sectionInfo(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] | Document ID. | defaults to undefined
 **sectionId** | [**string**] | Section ID. | defaults to undefined


### Return type

**SectionInfoResponse**

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
**403** | Permission error |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **uploadSection**
> UploadSectionResponse uploadSection(uploadSectionRequest)

With this endpoint, you can add a new section to an existing PandaDoc document (create a bundle).  You can upload a section to the document using a PandaDoc template or a file by URL.  > ⏱️ Document Section creation is a non-blocking (asynchronous) operation >  > The document creation process may take some time. >  > With a successful request, you receive a response with the created upload ID and status `document_sections_upload.uploaded`. After processing completes on our servers, usually a few seconds, the document moves to the `document_sections_upload.PROCESSED` status.  ## Using a PandaDoc template  <details>    > 🚧 Current Version Limitations   >    > Images in sections are currently not supported.    > 📘 Pricing tables note   >    > Each pricing table must have a unique name to populate it with data correctly.    A PandaDoc template is a document template created and edited in the PandaDoc web application. Our [help center](https://support.pandadoc.com/en/articles/9714616-save-time-with-a-reusable-template) has further information on PandaDoc templates.     If you don\'t have any PandaDoc Template yet, you can easily create one by clicking [Copy a Sample PandaDoc template](https://app.pandadoc.com/get-this-template/?pt=public_template&pub=eiC3a6qBVfEfbw7VCYgaeN). This will open the PandaDoc application in a new tab, copy the sample template into your account, and create a new document from the template. </details>  ## Using a File by URL  <details>      Using this endpoint you can add a section to the existing document. The section is created from a file you upload. The file can be a PDF, DocX, or RTF.    > 📘 We\'ve prepared two samples that you can use to test the request.   > Download them here:   >   > - [Download a Sample PDF with Form Fields](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)    > - [Download a Sample PDF with Field Tags](https://5132871.fs1.hubspotusercontent-na1.net/hubfs/5132871/SamplePandaDocPdf_FieldTags_updated.pdf)    > ❗️ Limitations   >    > * This method does not support multiple documents.   > * The maximum supported file size is 50 MB. API returns \"413 Request entity too large\" in case of bigger files.   > * PandaDoc does not support creating document from a PDF with encrypted files (to check whether a file is encrypted or not, try Get info -> Secure: Password Encrypted).    ### PDF Form Fields    PandaDoc recognizes PDF form fields. To enable this feature, pass the optional `parse_form_fields` value as `true` when making a create document section API call. We support Text fields, Dropdowns, and Signature fields.    If you would like to pass additional parameters to configure PDF form fields, use the PDF field name as an optId. You can use a PDF editor such as Adobe Acrobat, Foxit to get and edit field names in your PDF.    [**Download a Sample PDF with Form Fields**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)    ### PDF/DocX/RTF Field Tags    This parsing format allows a word processor such as [Microsoft Word](https://support.office.com/en-us/article/Save-as-PDF-d85416c5-7d77-4fd6-a216-6f4bf7c7c110?ui=en-US&rs=en-US&ad=US) or [Google Docs](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en) to prepare a document and save it in PDF, DocX or RTF format.    Within the text, PandaDoc parses field tags. A field tag starts and ends with brackets. The field tag includes basic information on how to create a form field in the PandaDoc document. The request JSON object `optId` can also extend this information for even greater control.    Here is an example of how the field tag in a PDF/DocX/RTF  is converted to a text field in the PandaDoc document:    ![](https://files.readme.io/38afedf-ex3.png \"ex3.png\")    [**Download a Sample PDF with Field Tags**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf)    #### PDF Field Tag Key    ![](https://files.readme.io/a81fbf1-field-tag-structure.png \"field-tag-structure.png\")    | Number | Key         | Description                                                                                                                                                                                                                                                                               | Example                           |   | :----- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |   | 1      | `fieldType` | Field type from the table documented below                                                                                                                                                                                                                                                | `signature`, or `s` for shorthand |   | 2      | `*`         | Optional `*` denotes the field is not required                                                                                                                                                                                                                                            | `*`                               |   | 3      | `role`      | Role name. Associate the field tag with a recipient role. Roles must be assigned to recipients in the request body. In this case we are using role `s1` to keep the length short and denote the concept of \"signer 1\". `s1` would be the value passed as role in a recipient JSON object. | `s1`                              |   | 4      | `optId`     | Optional field Id. Specify more information about the field tag within the post request by using this id.                                                                                                                                                                                 | `sigBox17`                        |   | 5      | `_____`     | Use underscores to widen the field if desired. The form fields in PandaDoc will scale to the length and size of your field tag.                                                                                                                                                           | `_____`                           |    > 🚧 Role names restrictions   >    > Underscores are not supported in role names for a file with a Field Tag.    #### PDF/DocX/RTF Field Tag Supported Types    | Field Type  | Short Notation | Is PandaDoc Field |   | :---------- | :------------- | :---------------- |   | `textfield` | `t`            | Field             |   | `checkbox`  | `c`            | Field             |   | `signature` | `s`            | Field             |   | `date`      | `d`            | Field             |   | `initials`  | `i`            | Field             |   | `dropdown`  | `dd`           | Field             |    ```json Field Tags Example   \"fields\": {       \"textfield\": {           \"value\": \"Jane\",         \"role\": \"user\"     },     \"dropdown\": {         \"value\": \"opt1\",         \"role\": \"user\",         \"options\":[           \"opt1\",           \"opt2\",           \"opt3\"         ]     },     \"checkbox\": {           \"value\": true,         \"role\": \"user\"     },     \"date\":{         \"value\": \"2022-05-20\",         \"role\": \"user\"     },     \"signature\": {           \"value\": \"\",         \"role\": \"user\"     }   }   ```    > 📘 Fields in PandaDoc   >    > The following article explains how to use Fields: [Everything you need to know about Fields](https://support.pandadoc.com/en/articles/9714583-fields)    ### Signing order    Set a signing order for document section sections created from a file.    ```json   \"recipients\": [       {         \"email\": \"josh@example.com\",       \"first_name\": \"Josh\",       \"last_name\": \"Ron\",       \"role\": \"user\",       \"signing_order\": 1     }   ]   ```    > 📘 Signing order in PandaDoc   >   > The following article explains how to use signing order: [How to use signing order](https://support.pandadoc.com/en/articles/9714771-signing-order)    ### Error handling    | Error description | Type | Root cause |   |---|---|---|   | Document version 1 is not supported. | Validation errors: Form fields | The creation document section is supported only for document version 2 |   | PDF content hasn\'t been processed: document is broken or locked | Processing errors: Failed to process document content | Document converter service can’t process PDF. This may be caused by locked PDF or if it’s broken. |   | Error occurred while parsing PDF field tags. Please try PDF flattening or reach out to support | Processing errors: Field tag / Form field validation error | Doc converter managed to parse PDF and extract tags, but at least 1 of them is invalid (having negative position, for example). Usually we recommend PDF flattening and it helps |   | No role=\'{role}\' for field tag specified in `recipients` found, roles passed were {roles} | Validation errors: Field tags | Role is invalid. When the role specified in field tag is empty or wasn’t provided in a payload for any recipient |   | All field tags within PDF must be declared within `fields`  object of the JSON Payload. No field with optId=\'{optid}\' found in fields object, fields passed were {optids} | Validation errors: Field tags | Label is invalid. Occurs when **optId** specified in field tag is empty or no field with **name = optId** was provided in a payload |   | One of field tags in PDF with type=\'{field}\' doesn\'t have a role | Validation errors: Field tags | Field tag in PDF has no role. One of field tags in PDF with type=% doesn\'t have a role. |   | Role for form field with name=\'{role}\' is not provided in payload | Validation errors: Form fields | Role for form field with ‘name’ is not provided. Occurs when `role` for form field with name=%s  is not provided in payload |   | Field for form field with name=\'{name}\' is not specified in payload, available names are {names} | Validation errors: Form fields | Field ‘name’ is not specified in payload. Occurs when no field with name = form field name was provided in a payload |   | No role=\'{role}\' for form field specified in \'recipients\' found, roles passed were {roles}\" | Validation errors: Form fields | Failed to resolve field actor for `role` in form field with ‘name’.   Occurs when role from the form field is not found in recipient’s from payload |   | Failed to download file from link {url}. | Source errors | Error on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload |   | Failed to download file from link {url} (status code: {status code}) | Source errors | Error with HTTP status code on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload - remote server responded with the HTTP status code |   | Content type=\'{type}\' is not supported, available types are {types} | Source errors | Content type is not supported.   Content type should be one of the following: PDF, ZIP, doc, docx, RTF |   | The maximum file size is exceeded, limit is {limit} MB | Source errors | The file size has exceeded the allowed limits. An error occurred while trying to download a file that is too large (limit is 50M) |        </details> 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentSectionsBundlesApi(configuration);

const body:pd_api.DocumentSectionsBundlesApiUploadSectionRequest = {
  // string | Document ID
  documentId: "CFz2UnLXDck3UJkeGGEuB3",
  // UploadSectionRequest
  uploadSectionRequest: null,
  // 'document' | 'upload' | Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID.  (optional)
  mergeFieldScope: "document",
};

apiInstance.uploadSection(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadSectionRequest** | **UploadSectionRequest**|  |
 **documentId** | [**string**] | Document ID | defaults to undefined
 **mergeFieldScope** | [**&#39;document&#39; | &#39;upload&#39;**]**Array<&#39;document&#39; &#124; &#39;upload&#39;>** | Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID.  | (optional) defaults to undefined


### Return type

**UploadSectionResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **uploadSectionWithUpload**
> UploadSectionResponse uploadSectionWithUpload()

With this endpoint, you can add a new section to an existing PandaDoc document (create a bundle). The section is created from a file you upload. The file can be a PDF, DocX, or RTF.  > 📘 We\'ve prepared two samples that you can use to test the request. > Download them here: > > - [Download a Sample PDF with Form Fields](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)  > - [Download a Sample PDF with Field Tags](https://5132871.fs1.hubspotusercontent-na1.net/hubfs/5132871/SamplePandaDocPdf_FieldTags_updated.pdf)   > 🚧 Usage specifics >  > 1. This method uses a `multipart/form-data` request type instead of the `application/json` typically found in the PandaDoc API. This is to accommodate the upload of the included document. > 2. You can send a URL instead of a file in the document creation request.   >    In this case, you need to use the `application/json` content type and add the URL parameter in the body request. As an example, see [Create from public PDF](https://developers.pandadoc.com/docs/create-and-send-a-document-from-a-publicly-available-pdf) guide for more details. > 3. A file you upload is not stored in your PandaDoc account, so you have to upload it with every request.  > ❗️ Limitations >  > 1. This method does not support multiple documents. > 2. The maximum supported file size is 50 MB. API returns \"413 Request entity too large\" in case of bigger files. > 3. PandaDoc does not support creating document from a PDF with encrypted files (to check whether a file is encrypted or not, try Get info -> Secure: Password Encrypted).  > ⏱️ Document Section creation is a non-blocking (asynchronous) operation >  > The document creation process may take some time. >  > With a successful request, you receive a response with the created upload ID and status `document_sections_upload.uploaded`. After processing completes on our servers, usually a few seconds, the document moves to the `document_sections_upload.PROCESSED` status.  ## PDF Form Fields  PandaDoc recognizes PDF form fields. To enable this feature, pass the optional `parse_form_fields` value as `true` when making a create document section API call. We support Text fields, Dropdowns, and Signature fields.  If you would like to pass additional parameters to configure PDF form fields, use the PDF field name as an optId. You can use a PDF editor such as Adobe Acrobat, Foxit to get and edit field names in your PDF.  [**Download a Sample PDF with Form Fields**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)  ## PDF/DocX/RTF Field Tags  This parsing format allows a word processor such as [Microsoft Word](https://support.office.com/en-us/article/Save-as-PDF-d85416c5-7d77-4fd6-a216-6f4bf7c7c110?ui=en-US&rs=en-US&ad=US) or [Google Docs](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en) to prepare a document and save it in PDF, DocX or RTF format.  Within the text, PandaDoc parses field tags. A field tag starts and ends with brackets. The field tag includes basic information on how to create a form field in the PandaDoc document. The request JSON object `optId` can also extend this information for even greater control.  Here is an example of how the field tag in a PDF/DocX/RTF  is converted to a text field in the PandaDoc document:  ![](https://files.readme.io/38afedf-ex3.png \"ex3.png\")  [**Download a Sample PDF with Field Tags**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf)  <details>    ### PDF Field Tag Key    ![](https://files.readme.io/a81fbf1-field-tag-structure.png \"field-tag-structure.png\")    | Number | Key         | Description                                                                                                                                                                                                                                                                               | Example                           |   | :----- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |   | 1      | `fieldType` | Field type from the table documented below                                                                                                                                                                                                                                                | `signature`, or `s` for shorthand |   | 2      | `*`         | Optional `*` denotes the field is not required                                                                                                                                                                                                                                            | `*`                               |   | 3      | `role`      | Role name. Associate the field tag with a recipient role. Roles must be assigned to recipients in the request body. In this case we are using role `s1` to keep the length short and denote the concept of \"signer 1\". `s1` would be the value passed as role in a recipient JSON object. | `s1`                              |   | 4      | `optId`     | Optional field Id. Specify more information about the field tag within the post request by using this id.                                                                                                                                                                                 | `sigBox17`                        |   | 5      | `_____`     | Use underscores to widen the field if desired. The form fields in PandaDoc will scale to the length and size of your field tag.                                                                                                                                                           | `_____`                           |    > 🚧 Role names restrictions   >    > Underscores are not supported in role names for a file with a Field Tag.    ### PDF/DocX/RTF Field Tag Supported Types    | Field Type  | Short Notation | Is PandaDoc Field |   | :---------- | :------------- | :---------------- |   | `textfield` | `t`            | Field             |   | `checkbox`  | `c`            | Field             |   | `signature` | `s`            | Field             |   | `date`      | `d`            | Field             |   | `initials`  | `i`            | Field             |   | `dropdown`  | `dd`           | Field             |    > 📘 Fields in PandaDoc   >    > The following article explains how to use Fields: [Everything you need to know about Fields](https://support.pandadoc.com/en/articles/9714583-fields)    ```json Field Tags Example   \"fields\": {             \"textfield\": {                 \"value\": \"Jane\",               \"role\": \"user\"           },           \"dropdown\": {               \"value\": \"opt1\",               \"role\": \"user\",               \"options\":[                 \"opt1\",                 \"opt2\",                 \"opt3\"               ]           },           \"checkbox\": {                 \"value\": true,               \"role\": \"user\"           },           \"date\":{               \"value\": \"2022-05-20\",               \"role\": \"user\"           },           \"signature\": {                 \"value\": \"\",               \"role\": \"user\"           }       }   ```  </details>  ## Signing order  Set a signing order for document section sections created from a file.  ```json \"recipients\": [     {       \"email\": \"josh@example.com\",     \"first_name\": \"Josh\",     \"last_name\": \"Ron\",     \"role\": \"user\",     \"signing_order\": 1   } ] ```  ## Error handling  | Error description | Type | Root cause | |---|---|---| | Document version 1 is not supported. | Validation errors: Form fields | The creation document section is supported only for document version 2 | | PDF content hasn\'t been processed: document is broken or locked | Processing errors: Failed to process document content | Document converter service can’t process PDF. This may be caused by locked PDF or if it’s broken. | | Error occurred while parsing PDF field tags. Please try PDF flattening or reach out to support | Processing errors: Field tag / Form field validation error | Doc converter managed to parse PDF and extract tags, but at least 1 of them is invalid (having negative position, for example). Usually we recommend PDF flattening and it helps | | No role=\'{role}\' for field tag specified in `recipients` found, roles passed were {roles} | Validation errors: Field tags | Role is invalid. When the role specified in field tag is empty or wasn’t provided in a payload for any recipient | | All field tags within PDF must be declared within `fields`  object of the JSON Payload. No field with optId=\'{optid}\' found in fields object, fields passed were {optids} | Validation errors: Field tags | Label is invalid. Occurs when **optId** specified in field tag is empty or no field with **name = optId** was provided in a payload | | One of field tags in PDF with type=\'{field}\' doesn\'t have a role | Validation errors: Field tags | Field tag in PDF has no role. One of field tags in PDF with type=% doesn\'t have a role. | | Role for form field with name=\'{role}\' is not provided in payload | Validation errors: Form fields | Role for form field with ‘name’ is not provided. Occurs when `role` for form field with name=%s  is not provided in payload | | Field for form field with name=\'{name}\' is not specified in payload, available names are {names} | Validation errors: Form fields | Field ‘name’ is not specified in payload. Occurs when no field with name = form field name was provided in a payload | | No role=\'{role}\' for form field specified in \'recipients\' found, roles passed were {roles}\" | Validation errors: Form fields | Failed to resolve field actor for `role` in form field with ‘name’.   Occurs when role from the form field is not found in recipient’s from payload | | Failed to download file from link {url}. | Source errors | Error on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload | | Failed to download file from link {url} (status code: {status code}) | Source errors | Error with HTTP status code on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload - remote server responded with the HTTP status code | | Content type=\'{type}\' is not supported, available types are {types} | Source errors | Content type is not supported.   Content type should be one of the following: PDF, ZIP, doc, docx, RTF | | The maximum file size is exceeded, limit is {limit} MB | Source errors | The file size has exceeded the allowed limits. An error occurred while trying to download a file that is too large (limit is 50M) | 

### Example


```typescript
import * as pd_api from 'pandadoc-node-client';

// replace it with your API key
const API_KEY = "YOUR_API_KEY";
const configuration = pd_api.createConfiguration(
    { authMethods: {apiKey: `API-Key ${API_KEY}`} }
);
const apiInstance = new pd_api.DocumentSectionsBundlesApi(configuration);

const body:pd_api.DocumentSectionsBundlesApiUploadSectionWithUploadRequest = {
  // string | Document ID
  documentId: "BhVzRcxH9Z2LgfPPGXFUBa",
  // 'document' | 'upload' | Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID.  (optional)
  mergeFieldScope: "document",
  // HttpFile | Binary PDF/DocX/RTF File. (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // UploadSectionRequest | JSON as a multipart/form-data string. (optional)
  data: null,
};

apiInstance.uploadSectionWithUpload(body).then((data) => {
  console.log('API called successfully. Returned data: %o', data);
}).catch((error) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**string**] | Document ID | defaults to undefined
 **mergeFieldScope** | [**&#39;document&#39; | &#39;upload&#39;**]**Array<&#39;document&#39; &#124; &#39;upload&#39;>** | Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID.  | (optional) defaults to undefined
 **file** | [**HttpFile**] | Binary PDF/DocX/RTF File. | (optional) defaults to undefined
 **data** | **UploadSectionRequest** | JSON as a multipart/form-data string. | (optional) defaults to undefined


### Return type

**UploadSectionResponse**

### Authorization

[apiKey](../README.md#apiKey), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: multipart/form-data, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Authentication error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

