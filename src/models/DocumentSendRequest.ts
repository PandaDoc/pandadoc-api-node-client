/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DocumentSendRequestForwardingSettings } from './DocumentSendRequestForwardingSettings';
import { DocumentSendRequestSelectedApprovers } from './DocumentSendRequestSelectedApprovers';
import { HttpFile } from '../http/http';

export class DocumentSendRequest {
    /**
    * A message that will be sent by email with a link to a document to sign.
    */
    'message'?: string;
    /**
    * Value that will be used as the email subject.
    */
    'subject'?: string;
    /**
    * Disables sent, viewed, comment, and completed email notifications for document recipients and the document sender. By default, notifications emails are sent for specific actions. If set as true, it won't affect the \"Approve document\" email notification sent to the Approver.
    */
    'silent'?: boolean;
    /**
    * You can set a sender of a document as an `email` or `membership_id`
    */
    'sender'?: { [key: string]: string; };
    'forwardingSettings'?: DocumentSendRequestForwardingSettings;
    'selectedApprovers'?: DocumentSendRequestSelectedApprovers;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "silent",
            "baseName": "silent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sender",
            "baseName": "sender",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "forwardingSettings",
            "baseName": "forwarding_settings",
            "type": "DocumentSendRequestForwardingSettings",
            "format": ""
        },
        {
            "name": "selectedApprovers",
            "baseName": "selected_approvers",
            "type": "DocumentSendRequestSelectedApprovers",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocumentSendRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

