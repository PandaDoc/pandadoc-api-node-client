/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DocumentCreateByTemplateRequestContentPlaceholders } from './DocumentCreateByTemplateRequestContentPlaceholders';
import { DocumentCreateByTemplateRequestRecipients } from './DocumentCreateByTemplateRequestRecipients';
import { DocumentCreateByTemplateRequestTokens } from './DocumentCreateByTemplateRequestTokens';
import { PricingTableRequest } from './PricingTableRequest';
import { HttpFile } from '../http/http';

export class UploadSectionByTemplateRequest {
    /**
    * The ID of a template you want to use. You can copy it from an in app template url such as `https://app.pandadoc.com/a/#/templates/{ID}/content`. A template ID is also obtained by listing templates.
    */
    'templateUuid': string;
    /**
    * The list of recipients you're sending the document to. Every object must contain the email parameter. The `role`, `first_name` and `last_name` parameters are optional. If the `role` parameter passed, a person is assigned all fields matching their corresponding role. If not passed, a person will receive a read-only link to view the document. If the `first_name` and `last_name` not passed the system 1. creates a new contact, if none exists with the given `email`; or 2. gets the existing contact with the given `email` that already exists.
    */
    'recipients': Array<DocumentCreateByTemplateRequestRecipients>;
    /**
    * You can pass a list of tokens/values to pre-fill tokens used in a template. Name is a token name in a template. Value is a real value you would like to replace a token with.
    */
    'tokens'?: Array<DocumentCreateByTemplateRequestTokens>;
    /**
    * You can pass a list of fields/values to pre-fill fields used in a template. Note that the Signature field can't be pre-filled.
    */
    'fields'?: any;
    /**
    * Information to construct or populate a pricing table can be passed when creating a document. All product information must be passed when creating a new document. Products stored in PandaDoc cannot be used to populate table rows at this time. Keep in mind that this is an array, so multiple table objects can be passed to a document. Make sure that \"Automatically add products to this table\" is enabled in the PandaDoc template pricing tables you wish to populate via API.
    */
    'pricingTables'?: Array<PricingTableRequest>;
    /**
    * You may replace Content Library Item Placeholders with a few content library items each and pre-fill fields/variables values, pricing table items, and assign recipients to roles from there.
    */
    'contentPlaceholders'?: Array<DocumentCreateByTemplateRequestContentPlaceholders>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "templateUuid",
            "baseName": "template_uuid",
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
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<DocumentCreateByTemplateRequestTokens>",
            "format": ""
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "any",
            "format": ""
        },
        {
            "name": "pricingTables",
            "baseName": "pricing_tables",
            "type": "Array<PricingTableRequest>",
            "format": ""
        },
        {
            "name": "contentPlaceholders",
            "baseName": "content_placeholders",
            "type": "Array<DocumentCreateByTemplateRequestContentPlaceholders>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UploadSectionByTemplateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

