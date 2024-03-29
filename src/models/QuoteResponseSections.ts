/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { QuoteResponseSectionColumn } from './QuoteResponseSectionColumn';
import { QuoteResponseSectionItem } from './QuoteResponseSectionItem';
import { QuoteResponseSectionSummary } from './QuoteResponseSectionSummary';
import { QuoteSectionSettings } from './QuoteSectionSettings';
import { HttpFile } from '../http/http';

export class QuoteResponseSections {
    'id'?: string;
    'name'?: string;
    'summary'?: QuoteResponseSectionSummary;
    'columns'?: Array<QuoteResponseSectionColumn>;
    'items'?: Array<QuoteResponseSectionItem>;
    'total'?: string;
    'settings'?: QuoteSectionSettings;

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
            "name": "summary",
            "baseName": "summary",
            "type": "QuoteResponseSectionSummary",
            "format": ""
        },
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<QuoteResponseSectionColumn>",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<QuoteResponseSectionItem>",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "string",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "QuoteSectionSettings",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return QuoteResponseSections.attributeTypeMap;
    }

    public constructor() {
    }
}

