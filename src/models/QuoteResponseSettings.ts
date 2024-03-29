/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class QuoteResponseSettings {
    'selectionType'?: QuoteResponseSettingsSelectionTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "selectionType",
            "baseName": "selection_type",
            "type": "QuoteResponseSettingsSelectionTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return QuoteResponseSettings.attributeTypeMap;
    }

    public constructor() {
    }
}


export type QuoteResponseSettingsSelectionTypeEnum = "custom" | "single" | "multiple" ;

