/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TemplatesFolderListResponseResults } from './TemplatesFolderListResponseResults';
import { HttpFile } from '../http/http';

export class TemplatesFolderListResponse {
    'results'?: Array<TemplatesFolderListResponseResults>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<TemplatesFolderListResponseResults>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TemplatesFolderListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

