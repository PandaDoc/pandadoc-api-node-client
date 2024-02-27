/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { QuoteUpdateRequestSettings } from './QuoteUpdateRequestSettings';
import { UpdateIntegrationQuoteSectionItem } from './UpdateIntegrationQuoteSectionItem';
import { HttpFile } from '../http/http';

export class UpdateIntegrationQuoteSection {
    /**
    * Section ID to update. Invalid (or missing) ID causes creating a new section.
    */
    'id'?: string;
    /**
    * Name of the quotes section. If you create a section without providing a value, it will have the default value.
    */
    'name'?: string;
    /**
    * Section items - this property overrides the existing items in the order specified. If you want to change only one item, you must still pass other items IDs. Otherwise these items will be removed.
    */
    'items'?: Array<UpdateIntegrationQuoteSectionItem>;
    'settings'?: QuoteUpdateRequestSettings;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<UpdateIntegrationQuoteSectionItem>",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "QuoteUpdateRequestSettings",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateIntegrationQuoteSection.attributeTypeMap;
    }

    public constructor() {
    }
}

