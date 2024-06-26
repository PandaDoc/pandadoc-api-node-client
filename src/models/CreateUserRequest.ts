/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CreateUserRequestUser } from './CreateUserRequestUser';
import { CreateUserRequestWorkspaces } from './CreateUserRequestWorkspaces';
import { HttpFile } from '../http/http';

export class CreateUserRequest {
    'user': CreateUserRequestUser;
    /**
    * Info for adding a user to a workspace(s)
    */
    'workspaces': Array<CreateUserRequestWorkspaces>;
    'license': CreateUserRequestLicenseEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "CreateUserRequestUser",
            "format": ""
        },
        {
            "name": "workspaces",
            "baseName": "workspaces",
            "type": "Array<CreateUserRequestWorkspaces>",
            "format": ""
        },
        {
            "name": "license",
            "baseName": "license",
            "type": "CreateUserRequestLicenseEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateUserRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CreateUserRequestLicenseEnum = "Full" | "eSign" | "Read-only" | "Creator" | "Guest" ;

