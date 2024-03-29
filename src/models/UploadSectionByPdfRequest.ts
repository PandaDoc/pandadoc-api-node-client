/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DocumentCreateByTemplateRequestRecipients } from './DocumentCreateByTemplateRequestRecipients';
import { HttpFile } from '../http/http';

export class UploadSectionByPdfRequest {
    /**
    * Use a URL to specify the PDF. We support only URLs starting with https.
    */
    'url': string;
    /**
    * The list of recipients you're sending the document to. Every object must contain the email parameter. The `role`, `first_name` and `last_name` parameters are optional. If the `role` parameter passed, a person is assigned all fields matching their corresponding role. If not passed, a person will receive a read-only link to view the document. If the `first_name` and `last_name` not passed the system 1. creates a new contact, if none exists with the given `email`; or 2. gets the existing contact with the given `email` that already exists.
    */
    'recipients': Array<DocumentCreateByTemplateRequestRecipients>;
    /**
    * Set this parameter as `true` if you create a document from a PDF with form fields and as `false` if you upload a PDF with field tags.
    */
    'parseFormFields'?: boolean;
    'name'?: string;
    /**
    * Mark your document with one or several tags.
    */
    'tags'?: Array<string>;
    /**
    * If you are upload a section from a PDF with field tags, you can pass a list of the fields you'd like to pre-fill in the document. If you are upload a section from a PDF with form fields, list all the fields and provide the `role` parameter so that the fields are assigned to document recipients. You can provide empty value for the field so that it's not pre-filled: \"value\": \"\". 
    */
    'fields'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "Array<DocumentCreateByTemplateRequestRecipients>",
            "format": ""
        },
        {
            "name": "parseFormFields",
            "baseName": "parse_form_fields",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UploadSectionByPdfRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

