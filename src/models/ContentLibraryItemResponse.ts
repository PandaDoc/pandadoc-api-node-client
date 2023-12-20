/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ContentLibraryItemResponseCreatedBy } from './ContentLibraryItemResponseCreatedBy';
import { PricingResponse } from './PricingResponse';
import { HttpFile } from '../http/http';

export class ContentLibraryItemResponse {
    'id'?: string;
    'name'?: string;
    'dateCreated'?: string;
    'dateModified'?: string;
    'contentDateModified'?: string;
    'createdBy'?: ContentLibraryItemResponseCreatedBy;
    'metadata'?: any;
    'tokens'?: Array<any>;
    'fields'?: Array<any>;
    'pricing'?: PricingResponse;
    'tags'?: Array<string>;
    'roles'?: Array<any>;
    'version'?: string;
    'contentPlaceholders'?: Array<any>;
    'images'?: Array<any>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateModified",
            "baseName": "date_modified",
            "type": "string",
            "format": ""
        },
        {
            "name": "contentDateModified",
            "baseName": "content_date_modified",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdBy",
            "baseName": "created_by",
            "type": "ContentLibraryItemResponseCreatedBy",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "pricing",
            "baseName": "pricing",
            "type": "PricingResponse",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "contentPlaceholders",
            "baseName": "content_placeholders",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<any>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ContentLibraryItemResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

