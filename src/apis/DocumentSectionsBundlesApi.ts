// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import { readRawBodyAndParse, tryParseRawBody } from '../pandadoc/httpErrorBody';
import {SecurityAuthentication} from '../auth/auth';


import { ChangeDocumentStatus409Response } from '../models/ChangeDocumentStatus409Response';
import { CreateDocument400Response } from '../models/CreateDocument400Response';
import { ListDocuments401Response } from '../models/ListDocuments401Response';
import { ListDocuments403Response } from '../models/ListDocuments403Response';
import { ListDocuments429Response } from '../models/ListDocuments429Response';
import { SectionInfoResponse } from '../models/SectionInfoResponse';
import { StatusDocument404Response } from '../models/StatusDocument404Response';
import { UpdateDocument400Response } from '../models/UpdateDocument400Response';
import { UploadSectionListResponse } from '../models/UploadSectionListResponse';
import { UploadSectionRequest } from '../models/UploadSectionRequest';
import { UploadSectionResponse } from '../models/UploadSectionResponse';
import { UploadSectionStatusResponse } from '../models/UploadSectionStatusResponse';

/**
 * no description
 */
export class DocumentSectionsBundlesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Removes selected section from the document.
     * Delete Document Section
     * @param documentId Specify document ID.
     * @param sectionId Specify section ID.
     */
    public async deleteSection(documentId: string, sectionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'documentId' is not null or undefined
        if (documentId === null || documentId === undefined) {
            throw new RequiredError("DocumentSectionsBundlesApi", "deleteSection", "documentId");
        }


        // verify required parameter 'sectionId' is not null or undefined
        if (sectionId === null || sectionId === undefined) {
            throw new RequiredError("DocumentSectionsBundlesApi", "deleteSection", "sectionId");
        }


        // Path Params
        const localVarPath = '/public/v1/documents/{document_id}/sections/{section_id}'
            .replace('{' + 'document_id' + '}', encodeURIComponent(String(documentId)))
            .replace('{' + 'section_id' + '}', encodeURIComponent(String(sectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve information about the sections within a document. 
     * List Document Sections
     * @param documentId Document ID
     */
    public async listSections(documentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'documentId' is not null or undefined
        if (documentId === null || documentId === undefined) {
            throw new RequiredError("DocumentSectionsBundlesApi", "listSections", "documentId");
        }


        // Path Params
        const localVarPath = '/public/v1/documents/{document_id}/sections'
            .replace('{' + 'document_id' + '}', encodeURIComponent(String(documentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Receive the upload status of the document and sections by their `upload_id`.  Requesting document section upload status is useful to ensure a document section upload is in the expected state before calling additional API methods.  In response, you receive an array with `sections_uuid`. You can receive information about each section using the [Document Section Info](https://developers.pandadoc.com/reference/document-section-info) endpoint.  ```json     \"section_uuids\": [         \"H8T8CJofGY6JwTsWsPuDEF\",         \"8MwLaU4SaZywqLiDk26mDF\"     ] ```  ## Available Document Section Upload Statuses  The following is a complete list of all possible document statuses returned:  | Document Status                      | Status Description                                                                                                                                                | | :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | | `document_sections_upload.UPLOADED`  | The document section upload process has just been created. It is in processing and will be in `document_sections_upload.PROCESSED` state momentarily.             | | `document_sections_upload.PROCESSED` | The document sections upload is processed and the sections are already created in the document. All aspects of the document sections can be edited in this state. | | `document_sections_upload.ERROR`     | Document section upload procces has been failed. For more information check error details in the response.                                                        | 
     * Document Section Upload Status
     * @param documentId Document ID.
     * @param uploadId Upload ID.
     */
    public async sectionDetails(documentId: string, uploadId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'documentId' is not null or undefined
        if (documentId === null || documentId === undefined) {
            throw new RequiredError("DocumentSectionsBundlesApi", "sectionDetails", "documentId");
        }


        // verify required parameter 'uploadId' is not null or undefined
        if (uploadId === null || uploadId === undefined) {
            throw new RequiredError("DocumentSectionsBundlesApi", "sectionDetails", "uploadId");
        }


        // Path Params
        const localVarPath = '/public/v1/documents/{document_id}/sections/uploads/{upload_id}'
            .replace('{' + 'document_id' + '}', encodeURIComponent(String(documentId)))
            .replace('{' + 'upload_id' + '}', encodeURIComponent(String(uploadId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Receive information about each section.
     * Document Section Details
     * @param documentId Document ID.
     * @param sectionId Section ID.
     */
    public async sectionInfo(documentId: string, sectionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'documentId' is not null or undefined
        if (documentId === null || documentId === undefined) {
            throw new RequiredError("DocumentSectionsBundlesApi", "sectionInfo", "documentId");
        }


        // verify required parameter 'sectionId' is not null or undefined
        if (sectionId === null || sectionId === undefined) {
            throw new RequiredError("DocumentSectionsBundlesApi", "sectionInfo", "sectionId");
        }


        // Path Params
        const localVarPath = '/public/v1/documents/{document_id}/sections/{section_id}'
            .replace('{' + 'document_id' + '}', encodeURIComponent(String(documentId)))
            .replace('{' + 'section_id' + '}', encodeURIComponent(String(sectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * With this endpoint, you can add a new section to an existing PandaDoc document (create a bundle).  You can upload a section to the document using a PandaDoc template or a file by URL.  > ⏱️ Document Section creation is a non-blocking (asynchronous) operation >  > The document creation process may take some time. >  > With a successful request, you receive a response with the created upload ID and status `document_sections_upload.uploaded`. After processing completes on our servers, usually a few seconds, the document moves to the `document_sections_upload.PROCESSED` status.  ## Using a PandaDoc template  <details>    > 🚧 Current Version Limitations   >    > Images in sections are currently not supported.    > 📘 Pricing tables note   >    > Each pricing table must have a unique name to populate it with data correctly.    A PandaDoc template is a document template created and edited in the PandaDoc web application. Our [help center](https://support.pandadoc.com/en/articles/9714616-save-time-with-a-reusable-template) has further information on PandaDoc templates.     If you don\'t have any PandaDoc Template yet, you can easily create one by clicking [Copy a Sample PandaDoc template](https://app.pandadoc.com/get-this-template/?pt=public_template&pub=eiC3a6qBVfEfbw7VCYgaeN). This will open the PandaDoc application in a new tab, copy the sample template into your account, and create a new document from the template. </details>  ## Using a File by URL  <details>      Using this endpoint you can add a section to the existing document. The section is created from a file you upload. The file can be a PDF, DocX, or RTF.    > 📘 We\'ve prepared two samples that you can use to test the request.   > Download them here:   >   > - [Download a Sample PDF with Form Fields](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)    > - [Download a Sample PDF with Field Tags](https://5132871.fs1.hubspotusercontent-na1.net/hubfs/5132871/SamplePandaDocPdf_FieldTags_updated.pdf)    > ❗️ Limitations   >    > * This method does not support multiple documents.   > * The maximum supported file size is 50 MB. API returns \"413 Request entity too large\" in case of bigger files.   > * PandaDoc does not support creating document from a PDF with encrypted files (to check whether a file is encrypted or not, try Get info -> Secure: Password Encrypted).    ### PDF Form Fields    PandaDoc recognizes PDF form fields. To enable this feature, pass the optional `parse_form_fields` value as `true` when making a create document section API call. We support Text fields, Dropdowns, and Signature fields.    If you would like to pass additional parameters to configure PDF form fields, use the PDF field name as an optId. You can use a PDF editor such as Adobe Acrobat, Foxit to get and edit field names in your PDF.    [**Download a Sample PDF with Form Fields**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)    ### PDF/DocX/RTF Field Tags    This parsing format allows a word processor such as [Microsoft Word](https://support.office.com/en-us/article/Save-as-PDF-d85416c5-7d77-4fd6-a216-6f4bf7c7c110?ui=en-US&rs=en-US&ad=US) or [Google Docs](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en) to prepare a document and save it in PDF, DocX or RTF format.    Within the text, PandaDoc parses field tags. A field tag starts and ends with brackets. The field tag includes basic information on how to create a form field in the PandaDoc document. The request JSON object `optId` can also extend this information for even greater control.    Here is an example of how the field tag in a PDF/DocX/RTF  is converted to a text field in the PandaDoc document:    ![](https://files.readme.io/38afedf-ex3.png \"ex3.png\")    [**Download a Sample PDF with Field Tags**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf)    #### PDF Field Tag Key    ![](https://files.readme.io/a81fbf1-field-tag-structure.png \"field-tag-structure.png\")    | Number | Key         | Description                                                                                                                                                                                                                                                                               | Example                           |   | :----- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |   | 1      | `fieldType` | Field type from the table documented below                                                                                                                                                                                                                                                | `signature`, or `s` for shorthand |   | 2      | `*`         | Optional `*` denotes the field is not required                                                                                                                                                                                                                                            | `*`                               |   | 3      | `role`      | Role name. Associate the field tag with a recipient role. Roles must be assigned to recipients in the request body. In this case we are using role `s1` to keep the length short and denote the concept of \"signer 1\". `s1` would be the value passed as role in a recipient JSON object. | `s1`                              |   | 4      | `optId`     | Optional field Id. Specify more information about the field tag within the post request by using this id.                                                                                                                                                                                 | `sigBox17`                        |   | 5      | `_____`     | Use underscores to widen the field if desired. The form fields in PandaDoc will scale to the length and size of your field tag.                                                                                                                                                           | `_____`                           |    > 🚧 Role names restrictions   >    > Underscores are not supported in role names for a file with a Field Tag.    #### PDF/DocX/RTF Field Tag Supported Types    | Field Type  | Short Notation | Is PandaDoc Field |   | :---------- | :------------- | :---------------- |   | `textfield` | `t`            | Field             |   | `checkbox`  | `c`            | Field             |   | `signature` | `s`            | Field             |   | `date`      | `d`            | Field             |   | `initials`  | `i`            | Field             |   | `dropdown`  | `dd`           | Field             |    ```json Field Tags Example   \"fields\": {       \"textfield\": {           \"value\": \"Jane\",         \"role\": \"user\"     },     \"dropdown\": {         \"value\": \"opt1\",         \"role\": \"user\",         \"options\":[           \"opt1\",           \"opt2\",           \"opt3\"         ]     },     \"checkbox\": {           \"value\": true,         \"role\": \"user\"     },     \"date\":{         \"value\": \"2022-05-20\",         \"role\": \"user\"     },     \"signature\": {           \"value\": \"\",         \"role\": \"user\"     }   }   ```    > 📘 Fields in PandaDoc   >    > The following article explains how to use Fields: [Everything you need to know about Fields](https://support.pandadoc.com/en/articles/9714583-fields)    ### Signing order    Set a signing order for document section sections created from a file.    ```json   \"recipients\": [       {         \"email\": \"josh@example.com\",       \"first_name\": \"Josh\",       \"last_name\": \"Ron\",       \"role\": \"user\",       \"signing_order\": 1     }   ]   ```    > 📘 Signing order in PandaDoc   >   > The following article explains how to use signing order: [How to use signing order](https://support.pandadoc.com/en/articles/9714771-signing-order)    ### Error handling    | Error description | Type | Root cause |   |---|---|---|   | Document version 1 is not supported. | Validation errors: Form fields | The creation document section is supported only for document version 2 |   | PDF content hasn\'t been processed: document is broken or locked | Processing errors: Failed to process document content | Document converter service can’t process PDF. This may be caused by locked PDF or if it’s broken. |   | Error occurred while parsing PDF field tags. Please try PDF flattening or reach out to support | Processing errors: Field tag / Form field validation error | Doc converter managed to parse PDF and extract tags, but at least 1 of them is invalid (having negative position, for example). Usually we recommend PDF flattening and it helps |   | No role=\'{role}\' for field tag specified in `recipients` found, roles passed were {roles} | Validation errors: Field tags | Role is invalid. When the role specified in field tag is empty or wasn’t provided in a payload for any recipient |   | All field tags within PDF must be declared within `fields`  object of the JSON Payload. No field with optId=\'{optid}\' found in fields object, fields passed were {optids} | Validation errors: Field tags | Label is invalid. Occurs when **optId** specified in field tag is empty or no field with **name = optId** was provided in a payload |   | One of field tags in PDF with type=\'{field}\' doesn\'t have a role | Validation errors: Field tags | Field tag in PDF has no role. One of field tags in PDF with type=% doesn\'t have a role. |   | Role for form field with name=\'{role}\' is not provided in payload | Validation errors: Form fields | Role for form field with ‘name’ is not provided. Occurs when `role` for form field with name=%s  is not provided in payload |   | Field for form field with name=\'{name}\' is not specified in payload, available names are {names} | Validation errors: Form fields | Field ‘name’ is not specified in payload. Occurs when no field with name = form field name was provided in a payload |   | No role=\'{role}\' for form field specified in \'recipients\' found, roles passed were {roles}\" | Validation errors: Form fields | Failed to resolve field actor for `role` in form field with ‘name’.   Occurs when role from the form field is not found in recipient’s from payload |   | Failed to download file from link {url}. | Source errors | Error on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload |   | Failed to download file from link {url} (status code: {status code}) | Source errors | Error with HTTP status code on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload - remote server responded with the HTTP status code |   | Content type=\'{type}\' is not supported, available types are {types} | Source errors | Content type is not supported.   Content type should be one of the following: PDF, ZIP, doc, docx, RTF |   | The maximum file size is exceeded, limit is {limit} MB | Source errors | The file size has exceeded the allowed limits. An error occurred while trying to download a file that is too large (limit is 50M) |        </details> 
     * Create Document Section
     * @param documentId Document ID
     * @param uploadSectionRequest 
     * @param mergeFieldScope Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID. 
     */
    public async uploadSection(documentId: string, uploadSectionRequest: UploadSectionRequest, mergeFieldScope?: 'document' | 'upload', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'documentId' is not null or undefined
        if (documentId === null || documentId === undefined) {
            throw new RequiredError("DocumentSectionsBundlesApi", "uploadSection", "documentId");
        }


        // verify required parameter 'uploadSectionRequest' is not null or undefined
        if (uploadSectionRequest === null || uploadSectionRequest === undefined) {
            throw new RequiredError("DocumentSectionsBundlesApi", "uploadSection", "uploadSectionRequest");
        }



        // Path Params
        const localVarPath = '/public/v1/documents/{document_id}/sections/uploads'
            .replace('{' + 'document_id' + '}', encodeURIComponent(String(documentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (mergeFieldScope !== undefined) {
            requestContext.setQueryParam("merge_field_scope", ObjectSerializer.serialize(mergeFieldScope, "'document' | 'upload'", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(uploadSectionRequest, "UploadSectionRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * With this endpoint, you can add a new section to an existing PandaDoc document (create a bundle). The section is created from a file you upload. The file can be a PDF, DocX, or RTF.  > 📘 We\'ve prepared two samples that you can use to test the request. > Download them here: > > - [Download a Sample PDF with Form Fields](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)  > - [Download a Sample PDF with Field Tags](https://5132871.fs1.hubspotusercontent-na1.net/hubfs/5132871/SamplePandaDocPdf_FieldTags_updated.pdf)   > 🚧 Usage specifics >  > 1. This method uses a `multipart/form-data` request type instead of the `application/json` typically found in the PandaDoc API. This is to accommodate the upload of the included document. > 2. You can send a URL instead of a file in the document creation request.   >    In this case, you need to use the `application/json` content type and add the URL parameter in the body request. As an example, see [Create from public PDF](https://developers.pandadoc.com/docs/create-and-send-a-document-from-a-publicly-available-pdf) guide for more details. > 3. A file you upload is not stored in your PandaDoc account, so you have to upload it with every request.  > ❗️ Limitations >  > 1. This method does not support multiple documents. > 2. The maximum supported file size is 50 MB. API returns \"413 Request entity too large\" in case of bigger files. > 3. PandaDoc does not support creating document from a PDF with encrypted files (to check whether a file is encrypted or not, try Get info -> Secure: Password Encrypted).  > ⏱️ Document Section creation is a non-blocking (asynchronous) operation >  > The document creation process may take some time. >  > With a successful request, you receive a response with the created upload ID and status `document_sections_upload.uploaded`. After processing completes on our servers, usually a few seconds, the document moves to the `document_sections_upload.PROCESSED` status.  ## PDF Form Fields  PandaDoc recognizes PDF form fields. To enable this feature, pass the optional `parse_form_fields` value as `true` when making a create document section API call. We support Text fields, Dropdowns, and Signature fields.  If you would like to pass additional parameters to configure PDF form fields, use the PDF field name as an optId. You can use a PDF editor such as Adobe Acrobat, Foxit to get and edit field names in your PDF.  [**Download a Sample PDF with Form Fields**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)  ## PDF/DocX/RTF Field Tags  This parsing format allows a word processor such as [Microsoft Word](https://support.office.com/en-us/article/Save-as-PDF-d85416c5-7d77-4fd6-a216-6f4bf7c7c110?ui=en-US&rs=en-US&ad=US) or [Google Docs](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en) to prepare a document and save it in PDF, DocX or RTF format.  Within the text, PandaDoc parses field tags. A field tag starts and ends with brackets. The field tag includes basic information on how to create a form field in the PandaDoc document. The request JSON object `optId` can also extend this information for even greater control.  Here is an example of how the field tag in a PDF/DocX/RTF  is converted to a text field in the PandaDoc document:  ![](https://files.readme.io/38afedf-ex3.png \"ex3.png\")  [**Download a Sample PDF with Field Tags**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf)  <details>    ### PDF Field Tag Key    ![](https://files.readme.io/a81fbf1-field-tag-structure.png \"field-tag-structure.png\")    | Number | Key         | Description                                                                                                                                                                                                                                                                               | Example                           |   | :----- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |   | 1      | `fieldType` | Field type from the table documented below                                                                                                                                                                                                                                                | `signature`, or `s` for shorthand |   | 2      | `*`         | Optional `*` denotes the field is not required                                                                                                                                                                                                                                            | `*`                               |   | 3      | `role`      | Role name. Associate the field tag with a recipient role. Roles must be assigned to recipients in the request body. In this case we are using role `s1` to keep the length short and denote the concept of \"signer 1\". `s1` would be the value passed as role in a recipient JSON object. | `s1`                              |   | 4      | `optId`     | Optional field Id. Specify more information about the field tag within the post request by using this id.                                                                                                                                                                                 | `sigBox17`                        |   | 5      | `_____`     | Use underscores to widen the field if desired. The form fields in PandaDoc will scale to the length and size of your field tag.                                                                                                                                                           | `_____`                           |    > 🚧 Role names restrictions   >    > Underscores are not supported in role names for a file with a Field Tag.    ### PDF/DocX/RTF Field Tag Supported Types    | Field Type  | Short Notation | Is PandaDoc Field |   | :---------- | :------------- | :---------------- |   | `textfield` | `t`            | Field             |   | `checkbox`  | `c`            | Field             |   | `signature` | `s`            | Field             |   | `date`      | `d`            | Field             |   | `initials`  | `i`            | Field             |   | `dropdown`  | `dd`           | Field             |    > 📘 Fields in PandaDoc   >    > The following article explains how to use Fields: [Everything you need to know about Fields](https://support.pandadoc.com/en/articles/9714583-fields)    ```json Field Tags Example   \"fields\": {             \"textfield\": {                 \"value\": \"Jane\",               \"role\": \"user\"           },           \"dropdown\": {               \"value\": \"opt1\",               \"role\": \"user\",               \"options\":[                 \"opt1\",                 \"opt2\",                 \"opt3\"               ]           },           \"checkbox\": {                 \"value\": true,               \"role\": \"user\"           },           \"date\":{               \"value\": \"2022-05-20\",               \"role\": \"user\"           },           \"signature\": {                 \"value\": \"\",               \"role\": \"user\"           }       }   ```  </details>  ## Signing order  Set a signing order for document section sections created from a file.  ```json \"recipients\": [     {       \"email\": \"josh@example.com\",     \"first_name\": \"Josh\",     \"last_name\": \"Ron\",     \"role\": \"user\",     \"signing_order\": 1   } ] ```  ## Error handling  | Error description | Type | Root cause | |---|---|---| | Document version 1 is not supported. | Validation errors: Form fields | The creation document section is supported only for document version 2 | | PDF content hasn\'t been processed: document is broken or locked | Processing errors: Failed to process document content | Document converter service can’t process PDF. This may be caused by locked PDF or if it’s broken. | | Error occurred while parsing PDF field tags. Please try PDF flattening or reach out to support | Processing errors: Field tag / Form field validation error | Doc converter managed to parse PDF and extract tags, but at least 1 of them is invalid (having negative position, for example). Usually we recommend PDF flattening and it helps | | No role=\'{role}\' for field tag specified in `recipients` found, roles passed were {roles} | Validation errors: Field tags | Role is invalid. When the role specified in field tag is empty or wasn’t provided in a payload for any recipient | | All field tags within PDF must be declared within `fields`  object of the JSON Payload. No field with optId=\'{optid}\' found in fields object, fields passed were {optids} | Validation errors: Field tags | Label is invalid. Occurs when **optId** specified in field tag is empty or no field with **name = optId** was provided in a payload | | One of field tags in PDF with type=\'{field}\' doesn\'t have a role | Validation errors: Field tags | Field tag in PDF has no role. One of field tags in PDF with type=% doesn\'t have a role. | | Role for form field with name=\'{role}\' is not provided in payload | Validation errors: Form fields | Role for form field with ‘name’ is not provided. Occurs when `role` for form field with name=%s  is not provided in payload | | Field for form field with name=\'{name}\' is not specified in payload, available names are {names} | Validation errors: Form fields | Field ‘name’ is not specified in payload. Occurs when no field with name = form field name was provided in a payload | | No role=\'{role}\' for form field specified in \'recipients\' found, roles passed were {roles}\" | Validation errors: Form fields | Failed to resolve field actor for `role` in form field with ‘name’.   Occurs when role from the form field is not found in recipient’s from payload | | Failed to download file from link {url}. | Source errors | Error on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload | | Failed to download file from link {url} (status code: {status code}) | Source errors | Error with HTTP status code on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload - remote server responded with the HTTP status code | | Content type=\'{type}\' is not supported, available types are {types} | Source errors | Content type is not supported.   Content type should be one of the following: PDF, ZIP, doc, docx, RTF | | The maximum file size is exceeded, limit is {limit} MB | Source errors | The file size has exceeded the allowed limits. An error occurred while trying to download a file that is too large (limit is 50M) | 
     * Create Document Section from File Upload
     * @param documentId Document ID
     * @param mergeFieldScope Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID. 
     * @param file Binary PDF/DocX/RTF File.
     * @param data JSON as a multipart/form-data string.
     */
    public async uploadSectionWithUpload(documentId: string, mergeFieldScope?: 'document' | 'upload', file?: HttpFile, data?: UploadSectionRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'documentId' is not null or undefined
        if (documentId === null || documentId === undefined) {
            throw new RequiredError("DocumentSectionsBundlesApi", "uploadSectionWithUpload", "documentId");
        }





        // Path Params
        const localVarPath = '/public/v1/documents/{document_id}/sections/uploads?upload'
            .replace('{' + 'document_id' + '}', encodeURIComponent(String(documentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (mergeFieldScope !== undefined) {
            requestContext.setQueryParam("merge_field_scope", ObjectSerializer.serialize(mergeFieldScope, "'document' | 'upload'", ""));
        }

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (file !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('file', file.data, file.name);
             }
        }
        if (data !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('data', data as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["apiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DocumentSectionsBundlesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments401Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments401Response", ""
            ) as ListDocuments401Response;
            throw new ApiException<ListDocuments401Response>(response.httpStatusCode, "Authentication error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments403Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments403Response", ""
            ) as ListDocuments403Response;
            throw new ApiException<ListDocuments403Response>(response.httpStatusCode, "Permission error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: StatusDocument404Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "StatusDocument404Response", ""
            ) as StatusDocument404Response;
            throw new ApiException<StatusDocument404Response>(response.httpStatusCode, "Not found", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments429Response", ""
            ) as ListDocuments429Response;
            throw new ApiException<ListDocuments429Response>(response.httpStatusCode, "Too Many Requests", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        const rawBodyAny: string | Buffer | undefined = await response.getBodyAsAny();
        let rawBody: string | undefined = undefined;
        let rawBodyParsed: any = rawBodyAny;
        if (typeof rawBodyAny === "string") {
            rawBody = rawBodyAny;
            rawBodyParsed = tryParseRawBody(rawBodyAny, contentType);
        }
        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", rawBodyAny, response.headers, rawBody, rawBodyParsed);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSections
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listSectionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UploadSectionListResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UploadSectionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UploadSectionListResponse", ""
            ) as UploadSectionListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: UpdateDocument400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "UpdateDocument400Response", ""
            ) as UpdateDocument400Response;
            throw new ApiException<UpdateDocument400Response>(response.httpStatusCode, "Bad Request", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments401Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments401Response", ""
            ) as ListDocuments401Response;
            throw new ApiException<ListDocuments401Response>(response.httpStatusCode, "Authentication error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments403Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments403Response", ""
            ) as ListDocuments403Response;
            throw new ApiException<ListDocuments403Response>(response.httpStatusCode, "Permission error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments429Response", ""
            ) as ListDocuments429Response;
            throw new ApiException<ListDocuments429Response>(response.httpStatusCode, "Too Many Requests", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UploadSectionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UploadSectionListResponse", ""
            ) as UploadSectionListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        const rawBodyAny: string | Buffer | undefined = await response.getBodyAsAny();
        let rawBody: string | undefined = undefined;
        let rawBodyParsed: any = rawBodyAny;
        if (typeof rawBodyAny === "string") {
            rawBody = rawBodyAny;
            rawBodyParsed = tryParseRawBody(rawBodyAny, contentType);
        }
        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", rawBodyAny, response.headers, rawBody, rawBodyParsed);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sectionDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sectionDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UploadSectionStatusResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UploadSectionStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UploadSectionStatusResponse", ""
            ) as UploadSectionStatusResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments401Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments401Response", ""
            ) as ListDocuments401Response;
            throw new ApiException<ListDocuments401Response>(response.httpStatusCode, "Authentication error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments403Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments403Response", ""
            ) as ListDocuments403Response;
            throw new ApiException<ListDocuments403Response>(response.httpStatusCode, "Permission error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: StatusDocument404Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "StatusDocument404Response", ""
            ) as StatusDocument404Response;
            throw new ApiException<StatusDocument404Response>(response.httpStatusCode, "Not found", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ChangeDocumentStatus409Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ChangeDocumentStatus409Response", ""
            ) as ChangeDocumentStatus409Response;
            throw new ApiException<ChangeDocumentStatus409Response>(response.httpStatusCode, "Conflict", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments429Response", ""
            ) as ListDocuments429Response;
            throw new ApiException<ListDocuments429Response>(response.httpStatusCode, "Too Many Requests", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UploadSectionStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UploadSectionStatusResponse", ""
            ) as UploadSectionStatusResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        const rawBodyAny: string | Buffer | undefined = await response.getBodyAsAny();
        let rawBody: string | undefined = undefined;
        let rawBodyParsed: any = rawBodyAny;
        if (typeof rawBodyAny === "string") {
            rawBody = rawBodyAny;
            rawBodyParsed = tryParseRawBody(rawBodyAny, contentType);
        }
        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", rawBodyAny, response.headers, rawBody, rawBodyParsed);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sectionInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sectionInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SectionInfoResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SectionInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SectionInfoResponse", ""
            ) as SectionInfoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments401Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments401Response", ""
            ) as ListDocuments401Response;
            throw new ApiException<ListDocuments401Response>(response.httpStatusCode, "Authentication error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments403Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments403Response", ""
            ) as ListDocuments403Response;
            throw new ApiException<ListDocuments403Response>(response.httpStatusCode, "Permission error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: StatusDocument404Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "StatusDocument404Response", ""
            ) as StatusDocument404Response;
            throw new ApiException<StatusDocument404Response>(response.httpStatusCode, "Not found", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ChangeDocumentStatus409Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ChangeDocumentStatus409Response", ""
            ) as ChangeDocumentStatus409Response;
            throw new ApiException<ChangeDocumentStatus409Response>(response.httpStatusCode, "Conflict", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments429Response", ""
            ) as ListDocuments429Response;
            throw new ApiException<ListDocuments429Response>(response.httpStatusCode, "Too Many Requests", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SectionInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SectionInfoResponse", ""
            ) as SectionInfoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        const rawBodyAny: string | Buffer | undefined = await response.getBodyAsAny();
        let rawBody: string | undefined = undefined;
        let rawBodyParsed: any = rawBodyAny;
        if (typeof rawBodyAny === "string") {
            rawBody = rawBodyAny;
            rawBodyParsed = tryParseRawBody(rawBodyAny, contentType);
        }
        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", rawBodyAny, response.headers, rawBody, rawBodyParsed);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadSection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadSectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UploadSectionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: UploadSectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UploadSectionResponse", ""
            ) as UploadSectionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: CreateDocument400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "CreateDocument400Response", ""
            ) as CreateDocument400Response;
            throw new ApiException<CreateDocument400Response>(response.httpStatusCode, "Bad Request", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments401Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments401Response", ""
            ) as ListDocuments401Response;
            throw new ApiException<ListDocuments401Response>(response.httpStatusCode, "Authentication error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments429Response", ""
            ) as ListDocuments429Response;
            throw new ApiException<ListDocuments429Response>(response.httpStatusCode, "Too Many Requests", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UploadSectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UploadSectionResponse", ""
            ) as UploadSectionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        const rawBodyAny: string | Buffer | undefined = await response.getBodyAsAny();
        let rawBody: string | undefined = undefined;
        let rawBodyParsed: any = rawBodyAny;
        if (typeof rawBodyAny === "string") {
            rawBody = rawBodyAny;
            rawBodyParsed = tryParseRawBody(rawBodyAny, contentType);
        }
        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", rawBodyAny, response.headers, rawBody, rawBodyParsed);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadSectionWithUpload
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadSectionWithUploadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UploadSectionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: UploadSectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UploadSectionResponse", ""
            ) as UploadSectionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: CreateDocument400Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "CreateDocument400Response", ""
            ) as CreateDocument400Response;
            throw new ApiException<CreateDocument400Response>(response.httpStatusCode, "Bad Request", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments401Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments401Response", ""
            ) as ListDocuments401Response;
            throw new ApiException<ListDocuments401Response>(response.httpStatusCode, "Authentication error", body, response.headers, rawBody, rawBodyParsed);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const { rawBody, rawBodyParsed } = await readRawBodyAndParse(response, contentType);
            const body: ListDocuments429Response = ObjectSerializer.deserialize(
                rawBodyParsed,
                "ListDocuments429Response", ""
            ) as ListDocuments429Response;
            throw new ApiException<ListDocuments429Response>(response.httpStatusCode, "Too Many Requests", body, response.headers, rawBody, rawBodyParsed);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UploadSectionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UploadSectionResponse", ""
            ) as UploadSectionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        const rawBodyAny: string | Buffer | undefined = await response.getBodyAsAny();
        let rawBody: string | undefined = undefined;
        let rawBodyParsed: any = rawBodyAny;
        if (typeof rawBodyAny === "string") {
            rawBody = rawBodyAny;
            rawBodyParsed = tryParseRawBody(rawBodyAny, contentType);
        }
        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", rawBodyAny, response.headers, rawBody, rawBodyParsed);
    }

}

