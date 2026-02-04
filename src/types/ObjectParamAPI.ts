import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { APILogDetailsResponse } from '../models/APILogDetailsResponse';
import { APILogListResponse } from '../models/APILogListResponse';
import { APILogListResponseResultsInner } from '../models/APILogListResponseResultsInner';
import { AccessToken400Response } from '../models/AccessToken400Response';
import { AddDsvNamedItemsRequest } from '../models/AddDsvNamedItemsRequest';
import { AddDsvNamedItemsRequestItemsInner } from '../models/AddDsvNamedItemsRequestItemsInner';
import { AddDsvNamedItemsResponse } from '../models/AddDsvNamedItemsResponse';
import { AddDsvNamedItemsResponseResultsInner } from '../models/AddDsvNamedItemsResponseResultsInner';
import { AddMember400Response } from '../models/AddMember400Response';
import { AddMemberRequest } from '../models/AddMemberRequest';
import { AddMemberResponse } from '../models/AddMemberResponse';
import { ApiKeyTypeEnum } from '../models/ApiKeyTypeEnum';
import { ApiLogEnvironmentTypeEnum } from '../models/ApiLogEnvironmentTypeEnum';
import { ApiLogMethodEnum } from '../models/ApiLogMethodEnum';
import { ApiLogStatusEnum } from '../models/ApiLogStatusEnum';
import { AppendCLIDataRequest } from '../models/AppendCLIDataRequest';
import { AppendCLIDataRequestCli } from '../models/AppendCLIDataRequestCli';
import { AppendCLIDataRequestCliPagesInner } from '../models/AppendCLIDataRequestCliPagesInner';
import { AppendCLIDataResponse } from '../models/AppendCLIDataResponse';
import { AppendCLIDataResponseBlockMapping } from '../models/AppendCLIDataResponseBlockMapping';
import { AppendCLIDataResponseBlockMappingImagesInner } from '../models/AppendCLIDataResponseBlockMappingImagesInner';
import { AppendCLIDataResponseBlockMappingPricingTablesInner } from '../models/AppendCLIDataResponseBlockMappingPricingTablesInner';
import { AppendCLIDataResponseBlockMappingTablesInner } from '../models/AppendCLIDataResponseBlockMappingTablesInner';
import { AppendCLIDataResponseBlockMappingTextsInner } from '../models/AppendCLIDataResponseBlockMappingTextsInner';
import { AppendCLIDataResponseCli } from '../models/AppendCLIDataResponseCli';
import { AppendCLIDataResponseCliPagesInner } from '../models/AppendCLIDataResponseCliPagesInner';
import { AssignedToRecipientDeliveryMethods } from '../models/AssignedToRecipientDeliveryMethods';
import { AutoReminders } from '../models/AutoReminders';
import { BaseActor } from '../models/BaseActor';
import { BaseEditingSessionResponse } from '../models/BaseEditingSessionResponse';
import { BaseField } from '../models/BaseField';
import { BaseFieldAssignedTo } from '../models/BaseFieldAssignedTo';
import { BaseIdentity } from '../models/BaseIdentity';
import { ChangeDocumentStatus409Response } from '../models/ChangeDocumentStatus409Response';
import { Checkbox } from '../models/Checkbox';
import { CollectFile } from '../models/CollectFile';
import { CollectFileAllOfValue } from '../models/CollectFileAllOfValue';
import { ContactCreateRequest } from '../models/ContactCreateRequest';
import { ContactDetailsResponse } from '../models/ContactDetailsResponse';
import { ContactListResponse } from '../models/ContactListResponse';
import { ContactUpdateRequest } from '../models/ContactUpdateRequest';
import { ContentLibraryItemCreateFromUrlRequest } from '../models/ContentLibraryItemCreateFromUrlRequest';
import { ContentLibraryItemCreateRequest } from '../models/ContentLibraryItemCreateRequest';
import { ContentLibraryItemListResponse } from '../models/ContentLibraryItemListResponse';
import { ContentLibraryItemListResponseResultsInner } from '../models/ContentLibraryItemListResponseResultsInner';
import { ContentLibraryItemResponse } from '../models/ContentLibraryItemResponse';
import { ContentLibraryItemResponseCreatedBy } from '../models/ContentLibraryItemResponseCreatedBy';
import { ContentLibraryResponse } from '../models/ContentLibraryResponse';
import { CreateApiKeyRequest } from '../models/CreateApiKeyRequest';
import { CreateApiKeyResponse } from '../models/CreateApiKeyResponse';
import { CreateDocument400Response } from '../models/CreateDocument400Response';
import { CreateDocumentActor } from '../models/CreateDocumentActor';
import { CreateDocumentEditingSession201Response } from '../models/CreateDocumentEditingSession201Response';
import { CreateDocumentFieldsRequest } from '../models/CreateDocumentFieldsRequest';
import { CreateDocumentFieldsResponse } from '../models/CreateDocumentFieldsResponse';
import { CreateDocumentRecipient } from '../models/CreateDocumentRecipient';
import { CreateDocumentRecipientGroup } from '../models/CreateDocumentRecipientGroup';
import { CreateMemberTokenRequest } from '../models/CreateMemberTokenRequest';
import { CreateMemberTokenResponse } from '../models/CreateMemberTokenResponse';
import { CreateNotarizationRequest } from '../models/CreateNotarizationRequest';
import { CreateNotarizationRequestInvitation } from '../models/CreateNotarizationRequestInvitation';
import { CreateNotarizationRequestInvitationInviteesInner } from '../models/CreateNotarizationRequestInvitationInviteesInner';
import { CreateNotarizationRequestNotary } from '../models/CreateNotarizationRequestNotary';
import { CreateNotarizationResponse } from '../models/CreateNotarizationResponse';
import { CreateNotarizationResponseCreatedBy } from '../models/CreateNotarizationResponseCreatedBy';
import { CreateNotarizationResponseInviteesInner } from '../models/CreateNotarizationResponseInviteesInner';
import { CreateTemplateEditingSession201Response } from '../models/CreateTemplateEditingSession201Response';
import { CreateTemplateFromUrlRequest } from '../models/CreateTemplateFromUrlRequest';
import { CreateTemplateRequest } from '../models/CreateTemplateRequest';
import { CreateTemplateRequestOwner } from '../models/CreateTemplateRequestOwner';
import { CreateUser400Response } from '../models/CreateUser400Response';
import { CreateUserRequest } from '../models/CreateUserRequest';
import { CreateUserRequestUser } from '../models/CreateUserRequestUser';
import { CreateUserRequestWorkspacesInner } from '../models/CreateUserRequestWorkspacesInner';
import { CreateUserResponse } from '../models/CreateUserResponse';
import { CreateUserResponseWorkspacesInner } from '../models/CreateUserResponseWorkspacesInner';
import { CreateWorkspaceRequest } from '../models/CreateWorkspaceRequest';
import { CreateWorkspaceResponse } from '../models/CreateWorkspaceResponse';
import { DetailsLogV2404Response } from '../models/DetailsLogV2404Response';
import { DocumentAttachmentMetadata } from '../models/DocumentAttachmentMetadata';
import { DocumentAttachmentRequest } from '../models/DocumentAttachmentRequest';
import { DocumentAttachmentResponse } from '../models/DocumentAttachmentResponse';
import { DocumentAttachmentResponseCreatedBy } from '../models/DocumentAttachmentResponseCreatedBy';
import { DocumentAuditTrailResponse } from '../models/DocumentAuditTrailResponse';
import { DocumentAuditTrailResponseResultsInner } from '../models/DocumentAuditTrailResponseResultsInner';
import { DocumentAuditTrailResponseResultsInnerUser } from '../models/DocumentAuditTrailResponseResultsInnerUser';
import { DocumentAutoRemindersResponse } from '../models/DocumentAutoRemindersResponse';
import { DocumentAutoRemindersResponse400 } from '../models/DocumentAutoRemindersResponse400';
import { DocumentAutoRemindersResponseResultInner } from '../models/DocumentAutoRemindersResponseResultInner';
import { DocumentCreateByPdfRequest } from '../models/DocumentCreateByPdfRequest';
import { DocumentCreateByTemplateRequest } from '../models/DocumentCreateByTemplateRequest';
import { DocumentCreateByTemplateRequestContentPlaceholdersInner } from '../models/DocumentCreateByTemplateRequestContentPlaceholdersInner';
import { DocumentCreateByTemplateRequestContentPlaceholdersInnerContentLibraryItemsInner } from '../models/DocumentCreateByTemplateRequestContentPlaceholdersInnerContentLibraryItemsInner';
import { DocumentCreateByTemplateRequestContentPlaceholdersInnerContentLibraryItemsInnerRecipientsInner } from '../models/DocumentCreateByTemplateRequestContentPlaceholdersInnerContentLibraryItemsInnerRecipientsInner';
import { DocumentCreateByTemplateRequestFieldsValue } from '../models/DocumentCreateByTemplateRequestFieldsValue';
import { DocumentCreateByTemplateRequestFieldsValueValue } from '../models/DocumentCreateByTemplateRequestFieldsValueValue';
import { DocumentCreateByTemplateRequestImagesInner } from '../models/DocumentCreateByTemplateRequestImagesInner';
import { DocumentCreateByTemplateRequestOwner } from '../models/DocumentCreateByTemplateRequestOwner';
import { DocumentCreateByTemplateRequestTextsInner } from '../models/DocumentCreateByTemplateRequestTextsInner';
import { DocumentCreateByTemplateRequestTokensInner } from '../models/DocumentCreateByTemplateRequestTokensInner';
import { DocumentCreateLinkRequest } from '../models/DocumentCreateLinkRequest';
import { DocumentCreateLinkResponse } from '../models/DocumentCreateLinkResponse';
import { DocumentCreateRequest } from '../models/DocumentCreateRequest';
import { DocumentCreateRequestOneOf } from '../models/DocumentCreateRequestOneOf';
import { DocumentCreateRequestOneOf1 } from '../models/DocumentCreateRequestOneOf1';
import { DocumentCreateResponse } from '../models/DocumentCreateResponse';
import { DocumentCreateResponseLinksInner } from '../models/DocumentCreateResponseLinksInner';
import { DocumentDeliveryMethodEnum } from '../models/DocumentDeliveryMethodEnum';
import { DocumentDetailsRecipient } from '../models/DocumentDetailsRecipient';
import { DocumentDetailsRecipientGroup } from '../models/DocumentDetailsRecipientGroup';
import { DocumentDetailsRecipientGroupMember } from '../models/DocumentDetailsRecipientGroupMember';
import { DocumentDetailsResponse } from '../models/DocumentDetailsResponse';
import { DocumentDetailsResponseApprovalExecution } from '../models/DocumentDetailsResponseApprovalExecution';
import { DocumentDetailsResponseCreatedBy } from '../models/DocumentDetailsResponseCreatedBy';
import { DocumentDetailsResponseGrandTotal } from '../models/DocumentDetailsResponseGrandTotal';
import { DocumentDetailsResponseImagesInner } from '../models/DocumentDetailsResponseImagesInner';
import { DocumentDetailsResponseLinkedObjectsInner } from '../models/DocumentDetailsResponseLinkedObjectsInner';
import { DocumentDetailsResponseLinkedObjectsInnerChildrenInner } from '../models/DocumentDetailsResponseLinkedObjectsInnerChildrenInner';
import { DocumentDetailsResponseRecipientsInner } from '../models/DocumentDetailsResponseRecipientsInner';
import { DocumentDetailsResponseTablesInner } from '../models/DocumentDetailsResponseTablesInner';
import { DocumentDetailsResponseTemplate } from '../models/DocumentDetailsResponseTemplate';
import { DocumentDetailsResponseTextsInner } from '../models/DocumentDetailsResponseTextsInner';
import { DocumentDocxExport } from '../models/DocumentDocxExport';
import { DocumentDocxExportStatusEnum } from '../models/DocumentDocxExportStatusEnum';
import { DocumentESignDisclosure } from '../models/DocumentESignDisclosure';
import { DocumentESignDisclosureResult } from '../models/DocumentESignDisclosureResult';
import { DocumentFieldAnchorPointEnum } from '../models/DocumentFieldAnchorPointEnum';
import { DocumentFieldTypeEnum } from '../models/DocumentFieldTypeEnum';
import { DocumentFieldsField } from '../models/DocumentFieldsField';
import { DocumentFieldsFieldAssignedTo } from '../models/DocumentFieldsFieldAssignedTo';
import { DocumentFieldsFieldCreate } from '../models/DocumentFieldsFieldCreate';
import { DocumentFieldsLayout } from '../models/DocumentFieldsLayout';
import { DocumentFieldsLayoutPosition } from '../models/DocumentFieldsLayoutPosition';
import { DocumentFieldsLayoutStyle } from '../models/DocumentFieldsLayoutStyle';
import { DocumentLanguageEnum } from '../models/DocumentLanguageEnum';
import { DocumentListResponse } from '../models/DocumentListResponse';
import { DocumentListResponseResultsInner } from '../models/DocumentListResponseResultsInner';
import { DocumentOrderingFieldsEnum } from '../models/DocumentOrderingFieldsEnum';
import { DocumentRecipientCreateRequest } from '../models/DocumentRecipientCreateRequest';
import { DocumentRecipientEditRequest } from '../models/DocumentRecipientEditRequest';
import { DocumentRecipientResponse } from '../models/DocumentRecipientResponse';
import { DocumentRevertToDraftResponse } from '../models/DocumentRevertToDraftResponse';
import { DocumentSendManualReminder200Response } from '../models/DocumentSendManualReminder200Response';
import { DocumentSendManualReminder200ResponseResultInner } from '../models/DocumentSendManualReminder200ResponseResultInner';
import { DocumentSendManualReminder200ResponseResultInnerEmail } from '../models/DocumentSendManualReminder200ResponseResultInnerEmail';
import { DocumentSendManualReminder200ResponseResultInnerEmailCustomization } from '../models/DocumentSendManualReminder200ResponseResultInnerEmailCustomization';
import { DocumentSendManualReminder200ResponseResultInnerSms } from '../models/DocumentSendManualReminder200ResponseResultInnerSms';
import { DocumentSendManualReminder409Response } from '../models/DocumentSendManualReminder409Response';
import { DocumentSendManualReminderRequest } from '../models/DocumentSendManualReminderRequest';
import { DocumentSendManualReminderRequestRemindersInner } from '../models/DocumentSendManualReminderRequestRemindersInner';
import { DocumentSendManualReminderRequestRemindersInnerEmailCustomization } from '../models/DocumentSendManualReminderRequestRemindersInnerEmailCustomization';
import { DocumentSendRequest } from '../models/DocumentSendRequest';
import { DocumentSendRequestForwardingSettings } from '../models/DocumentSendRequestForwardingSettings';
import { DocumentSendRequestSelectedApprovers } from '../models/DocumentSendRequestSelectedApprovers';
import { DocumentSendRequestSelectedApproversStepsInner } from '../models/DocumentSendRequestSelectedApproversStepsInner';
import { DocumentSendRequestSelectedApproversStepsInnerGroup } from '../models/DocumentSendRequestSelectedApproversStepsInnerGroup';
import { DocumentSendRequestSelectedApproversStepsInnerGroupAssigneesInner } from '../models/DocumentSendRequestSelectedApproversStepsInnerGroupAssigneesInner';
import { DocumentSendRequestSender } from '../models/DocumentSendRequestSender';
import { DocumentSendResponse } from '../models/DocumentSendResponse';
import { DocumentSendResponseRecipientsInner } from '../models/DocumentSendResponseRecipientsInner';
import { DocumentSettingsResponse } from '../models/DocumentSettingsResponse';
import { DocumentStatusChangeRequest } from '../models/DocumentStatusChangeRequest';
import { DocumentStatusChangeRequestStatusEnum } from '../models/DocumentStatusChangeRequestStatusEnum';
import { DocumentStatusEnum } from '../models/DocumentStatusEnum';
import { DocumentStatusRequestEnum } from '../models/DocumentStatusRequestEnum';
import { DocumentStatusResponse } from '../models/DocumentStatusResponse';
import { DocumentTransferAllOwnershipRequest } from '../models/DocumentTransferAllOwnershipRequest';
import { DocumentTransferOwnershipRequest } from '../models/DocumentTransferOwnershipRequest';
import { DocumentUpdateRequest } from '../models/DocumentUpdateRequest';
import { DocumentUpdateRequestFieldValue } from '../models/DocumentUpdateRequestFieldValue';
import { DocumentUpdateRequestImagesInner } from '../models/DocumentUpdateRequestImagesInner';
import { DocumentUpdateRequestTextsInner } from '../models/DocumentUpdateRequestTextsInner';
import { DocumentUpdateRequestTokensInner } from '../models/DocumentUpdateRequestTokensInner';
import { DocumentsFolderCreateRequest } from '../models/DocumentsFolderCreateRequest';
import { DocumentsFolderCreateResponse } from '../models/DocumentsFolderCreateResponse';
import { DocumentsFolderListResponse } from '../models/DocumentsFolderListResponse';
import { DocumentsFolderListResponseResultsInner } from '../models/DocumentsFolderListResponseResultsInner';
import { DocumentsFolderRenameRequest } from '../models/DocumentsFolderRenameRequest';
import { DocumentsFolderRenameResponse } from '../models/DocumentsFolderRenameResponse';
import { DocxExportTaskResponse } from '../models/DocxExportTaskResponse';
import { DocxExportTaskResponseAllOfDocxItems } from '../models/DocxExportTaskResponseAllOfDocxItems';
import { Dropdown } from '../models/Dropdown';
import { EditingSessionRequest } from '../models/EditingSessionRequest';
import { Field } from '../models/Field';
import { FormListResponse } from '../models/FormListResponse';
import { FormListResponseResultsInner } from '../models/FormListResponseResultsInner';
import { Initials } from '../models/Initials';
import { LinkedObjectChild } from '../models/LinkedObjectChild';
import { LinkedObjectCreateRequest } from '../models/LinkedObjectCreateRequest';
import { LinkedObjectCreateResponse } from '../models/LinkedObjectCreateResponse';
import { LinkedObjectListResponse } from '../models/LinkedObjectListResponse';
import { ListCatalogItemsSearchResponse } from '../models/ListCatalogItemsSearchResponse';
import { ListDocumentFieldsResponse } from '../models/ListDocumentFieldsResponse';
import { ListDocuments400Response } from '../models/ListDocuments400Response';
import { ListDocuments401Response } from '../models/ListDocuments401Response';
import { ListDocuments403Response } from '../models/ListDocuments403Response';
import { ListDocuments403ResponseLinksInner } from '../models/ListDocuments403ResponseLinksInner';
import { ListDocuments429Response } from '../models/ListDocuments429Response';
import { ListDocumentsByLinkedObjectsResponseInner } from '../models/ListDocumentsByLinkedObjectsResponseInner';
import { ListLogsV2400Response } from '../models/ListLogsV2400Response';
import { ListLogsV2400ResponseDetailsInner } from '../models/ListLogsV2400ResponseDetailsInner';
import { ListLogsV2401Response } from '../models/ListLogsV2401Response';
import { ListLogsV2429Response } from '../models/ListLogsV2429Response';
import { ListNotaries403Response } from '../models/ListNotaries403Response';
import { ListNotariesResponse } from '../models/ListNotariesResponse';
import { ListNotariesResponseResultsInner } from '../models/ListNotariesResponseResultsInner';
import { ListSmsOptOutChangelogResponse } from '../models/ListSmsOptOutChangelogResponse';
import { ListSmsOptOutChangelogResponseResultsInner } from '../models/ListSmsOptOutChangelogResponseResultsInner';
import { ListUsersResponse } from '../models/ListUsersResponse';
import { ListUsersResponseResultsInner } from '../models/ListUsersResponseResultsInner';
import { ListUsersResponseResultsInnerWorkspacesInner } from '../models/ListUsersResponseResultsInnerWorkspacesInner';
import { ListWorkspacesResponse } from '../models/ListWorkspacesResponse';
import { ListWorkspacesResponseResultsInner } from '../models/ListWorkspacesResponseResultsInner';
import { MemberDetailsResponse } from '../models/MemberDetailsResponse';
import { MemberListResponse } from '../models/MemberListResponse';
import { ModelDate } from '../models/ModelDate';
import { NotarizationRequestDetailsResponse } from '../models/NotarizationRequestDetailsResponse';
import { NotarizationRequestDetailsResponseCreatedBy } from '../models/NotarizationRequestDetailsResponseCreatedBy';
import { NotarizationRequestDetailsResponseInviteesInner } from '../models/NotarizationRequestDetailsResponseInviteesInner';
import { NotarizationRequestDetailsResponseRecording } from '../models/NotarizationRequestDetailsResponseRecording';
import { NotarizationRequestDetailsResponseSignedDocumentsInner } from '../models/NotarizationRequestDetailsResponseSignedDocumentsInner';
import { OAuth2AccessTokenResponse } from '../models/OAuth2AccessTokenResponse';
import { Payment } from '../models/Payment';
import { PricingResponse } from '../models/PricingResponse';
import { PricingTableRequest } from '../models/PricingTableRequest';
import { PricingTableRequestRowOptions } from '../models/PricingTableRequestRowOptions';
import { PricingTableRequestSectionsInner } from '../models/PricingTableRequestSectionsInner';
import { PricingTableRequestSectionsInnerRowsInner } from '../models/PricingTableRequestSectionsInnerRowsInner';
import { PricingTableResponse } from '../models/PricingTableResponse';
import { PricingTableResponseItemsInner } from '../models/PricingTableResponseItemsInner';
import { PricingTableResponseItemsInnerDiscount } from '../models/PricingTableResponseItemsInnerDiscount';
import { PricingTableResponseItemsInnerOptions } from '../models/PricingTableResponseItemsInnerOptions';
import { PricingTableResponseSummary } from '../models/PricingTableResponseSummary';
import { ProductCatalogCatalogCustomBundleItem } from '../models/ProductCatalogCatalogCustomBundleItem';
import { ProductCatalogCatalogItemInBundle } from '../models/ProductCatalogCatalogItemInBundle';
import { ProductCatalogCustomBundleItemNoId } from '../models/ProductCatalogCustomBundleItemNoId';
import { ProductCatalogCustomCatalogItemInBundle } from '../models/ProductCatalogCustomCatalogItemInBundle';
import { ProductCatalogItemPatchRequest } from '../models/ProductCatalogItemPatchRequest';
import { ProductCatalogItemPatchRequestBundleItemsInner } from '../models/ProductCatalogItemPatchRequestBundleItemsInner';
import { ProductCatalogItemPatchRequestBundleItemsInnerItemOrUuid } from '../models/ProductCatalogItemPatchRequestBundleItemsInnerItemOrUuid';
import { ProductCatalogItemPatchRequestProductVariant } from '../models/ProductCatalogItemPatchRequestProductVariant';
import { ProductCatalogItemPriceConfiguration } from '../models/ProductCatalogItemPriceConfiguration';
import { ProductCatalogItemPriceTier } from '../models/ProductCatalogItemPriceTier';
import { ProductCatalogItemRequest } from '../models/ProductCatalogItemRequest';
import { ProductCatalogItemRequestBundleItemsInner } from '../models/ProductCatalogItemRequestBundleItemsInner';
import { ProductCatalogItemRequestBundleItemsInnerItemOrUuid } from '../models/ProductCatalogItemRequestBundleItemsInnerItemOrUuid';
import { ProductCatalogItemRequestCustomFieldsInner } from '../models/ProductCatalogItemRequestCustomFieldsInner';
import { ProductCatalogItemRequestImagesInner } from '../models/ProductCatalogItemRequestImagesInner';
import { ProductCatalogItemResponse } from '../models/ProductCatalogItemResponse';
import { ProductCatalogItemResponseBundleItemsInner } from '../models/ProductCatalogItemResponseBundleItemsInner';
import { ProductCatalogItemResponseBundleItemsInnerItem } from '../models/ProductCatalogItemResponseBundleItemsInnerItem';
import { ProductCatalogItemResponseDefaultPriceConfiguration } from '../models/ProductCatalogItemResponseDefaultPriceConfiguration';
import { ProductCatalogItemResponseVariantsInner } from '../models/ProductCatalogItemResponseVariantsInner';
import { ProductCatalogPricingMethodEnum } from '../models/ProductCatalogPricingMethodEnum';
import { ProductCatalogSearchCatalogItemResponse } from '../models/ProductCatalogSearchCatalogItemResponse';
import { ProductCatalogSearchCatalogItemResponseCustomFieldsInner } from '../models/ProductCatalogSearchCatalogItemResponseCustomFieldsInner';
import { ProductCatalogSearchCatalogItemResponseImagesInner } from '../models/ProductCatalogSearchCatalogItemResponseImagesInner';
import { ProductCatalogSearchCatalogItemResponseTiersInner } from '../models/ProductCatalogSearchCatalogItemResponseTiersInner';
import { ProductCatalogTypeEnum } from '../models/ProductCatalogTypeEnum';
import { QuoteResponse } from '../models/QuoteResponse';
import { QuoteResponseMergeRulesInner } from '../models/QuoteResponseMergeRulesInner';
import { QuoteResponseMergeRulesInnerAction } from '../models/QuoteResponseMergeRulesInnerAction';
import { QuoteResponseMergeRulesInnerCondition } from '../models/QuoteResponseMergeRulesInnerCondition';
import { QuoteResponseMergeRulesInnerConditionComparisonInner } from '../models/QuoteResponseMergeRulesInnerConditionComparisonInner';
import { QuoteResponseSectionColumn } from '../models/QuoteResponseSectionColumn';
import { QuoteResponseSectionItem } from '../models/QuoteResponseSectionItem';
import { QuoteResponseSectionItemOptions } from '../models/QuoteResponseSectionItemOptions';
import { QuoteResponseSectionSummary } from '../models/QuoteResponseSectionSummary';
import { QuoteResponseSectionsInner } from '../models/QuoteResponseSectionsInner';
import { QuoteResponseSettings } from '../models/QuoteResponseSettings';
import { QuoteResponseSummary } from '../models/QuoteResponseSummary';
import { QuoteResponseSummaryDiscountsValue } from '../models/QuoteResponseSummaryDiscountsValue';
import { QuoteResponseSummaryRecurringSubtotalInner } from '../models/QuoteResponseSummaryRecurringSubtotalInner';
import { QuoteSectionSettings } from '../models/QuoteSectionSettings';
import { QuoteUpdateRequest } from '../models/QuoteUpdateRequest';
import { QuoteUpdateRequestBillingFrequencyEnum } from '../models/QuoteUpdateRequestBillingFrequencyEnum';
import { QuoteUpdateRequestDiscountTypeEnum } from '../models/QuoteUpdateRequestDiscountTypeEnum';
import { QuoteUpdateRequestSettings } from '../models/QuoteUpdateRequestSettings';
import { QuoteUpdateRequestSettingsSelectionTypeTypeEnum } from '../models/QuoteUpdateRequestSettingsSelectionTypeTypeEnum';
import { RadioButtons } from '../models/RadioButtons';
import { RecipientAssignedTo } from '../models/RecipientAssignedTo';
import { RecipientAssignmentDetails } from '../models/RecipientAssignmentDetails';
import { RecipientDeliveryMethods } from '../models/RecipientDeliveryMethods';
import { RecipientKindEnum } from '../models/RecipientKindEnum';
import { RecipientPersonalDetails } from '../models/RecipientPersonalDetails';
import { RecipientRedirect } from '../models/RecipientRedirect';
import { RecipientRedirectSettings } from '../models/RecipientRedirectSettings';
import { RecipientVerificationPlaceEnum } from '../models/RecipientVerificationPlaceEnum';
import { RecipientVerificationSettings } from '../models/RecipientVerificationSettings';
import { RecipientVerificationSettingsIdVerification } from '../models/RecipientVerificationSettingsIdVerification';
import { RecipientVerificationSettingsKbaVerification } from '../models/RecipientVerificationSettingsKbaVerification';
import { RecipientVerificationSettingsPasscodeVerification } from '../models/RecipientVerificationSettingsPasscodeVerification';
import { RecipientVerificationSettingsPhoneVerification } from '../models/RecipientVerificationSettingsPhoneVerification';
import { RecipientsGroupAssignedTo } from '../models/RecipientsGroupAssignedTo';
import { RecipientsGroupAssignedToAllOfMembers } from '../models/RecipientsGroupAssignedToAllOfMembers';
import { RemoveMember400Response } from '../models/RemoveMember400Response';
import { RemoveMember404Response } from '../models/RemoveMember404Response';
import { SectionInfoResponse } from '../models/SectionInfoResponse';
import { Signature } from '../models/Signature';
import { Stamp } from '../models/Stamp';
import { StatusDocument404Response } from '../models/StatusDocument404Response';
import { StatusDocumentAutoReminder400Response } from '../models/StatusDocumentAutoReminder400Response';
import { TableCell } from '../models/TableCell';
import { TableRequest } from '../models/TableRequest';
import { TableRequestData } from '../models/TableRequestData';
import { TableRequestDataSectionsInner } from '../models/TableRequestDataSectionsInner';
import { TemplateCreateResponse } from '../models/TemplateCreateResponse';
import { TemplateDetailsResponse } from '../models/TemplateDetailsResponse';
import { TemplateDetailsResponseContentPlaceholdersInner } from '../models/TemplateDetailsResponseContentPlaceholdersInner';
import { TemplateDetailsResponseImagesInner } from '../models/TemplateDetailsResponseImagesInner';
import { TemplateDetailsResponseRolesInner } from '../models/TemplateDetailsResponseRolesInner';
import { TemplateDetailsResponseRolesInnerPreassignedPerson } from '../models/TemplateDetailsResponseRolesInnerPreassignedPerson';
import { TemplateDetailsResponseRolesInnerPreassignedPersonMembersInner } from '../models/TemplateDetailsResponseRolesInnerPreassignedPersonMembersInner';
import { TemplateDetailsResponseTokensInner } from '../models/TemplateDetailsResponseTokensInner';
import { TemplateListResponse } from '../models/TemplateListResponse';
import { TemplateSettingsResponse } from '../models/TemplateSettingsResponse';
import { TemplateStatusResponse } from '../models/TemplateStatusResponse';
import { TemplateUpdateRequest } from '../models/TemplateUpdateRequest';
import { TemplatesFolderCreateRequest } from '../models/TemplatesFolderCreateRequest';
import { TemplatesFolderCreateResponse } from '../models/TemplatesFolderCreateResponse';
import { TemplatesFolderListResponse } from '../models/TemplatesFolderListResponse';
import { TemplatesFolderListResponseResultsInner } from '../models/TemplatesFolderListResponseResultsInner';
import { TemplatesFolderRenameRequest } from '../models/TemplatesFolderRenameRequest';
import { TemplatesFolderRenameResponse } from '../models/TemplatesFolderRenameResponse';
import { Text } from '../models/Text';
import { UpdateDocument400Response } from '../models/UpdateDocument400Response';
import { UpdateDocumentActor } from '../models/UpdateDocumentActor';
import { UpdateDocumentAutoRemindersRequest } from '../models/UpdateDocumentAutoRemindersRequest';
import { UpdateDocumentAutoRemindersResponse } from '../models/UpdateDocumentAutoRemindersResponse';
import { UpdateDocumentRecipient } from '../models/UpdateDocumentRecipient';
import { UpdateDocumentRecipientGroup } from '../models/UpdateDocumentRecipientGroup';
import { UpdateDocumentSettingsRequest } from '../models/UpdateDocumentSettingsRequest';
import { UpdateIntegrationQuoteSection } from '../models/UpdateIntegrationQuoteSection';
import { UpdateIntegrationQuoteSectionItem } from '../models/UpdateIntegrationQuoteSectionItem';
import { UpdateIntegrationQuoteSectionItemDiscountsValue } from '../models/UpdateIntegrationQuoteSectionItemDiscountsValue';
import { UpdateIntegrationQuoteSectionItemOptions } from '../models/UpdateIntegrationQuoteSectionItemOptions';
import { UpdateIntegrationQuoteSectionItemPriceSettings } from '../models/UpdateIntegrationQuoteSectionItemPriceSettings';
import { UpdateIntegrationQuoteSectionItemPriceSettingsTiersInner } from '../models/UpdateIntegrationQuoteSectionItemPriceSettingsTiersInner';
import { UpdateIntegrationQuoteSectionSettings } from '../models/UpdateIntegrationQuoteSectionSettings';
import { UpdateTemplateSettingsRequest } from '../models/UpdateTemplateSettingsRequest';
import { UploadSectionBase } from '../models/UploadSectionBase';
import { UploadSectionByTemplateRequest } from '../models/UploadSectionByTemplateRequest';
import { UploadSectionByTemplateRequestAllOfContentLibraryItems } from '../models/UploadSectionByTemplateRequestAllOfContentLibraryItems';
import { UploadSectionByTemplateRequestAllOfContentPlaceholders } from '../models/UploadSectionByTemplateRequestAllOfContentPlaceholders';
import { UploadSectionListResponse } from '../models/UploadSectionListResponse';
import { UploadSectionListResponseResultsInner } from '../models/UploadSectionListResponseResultsInner';
import { UploadSectionRequest } from '../models/UploadSectionRequest';
import { UploadSectionRequestOneOf } from '../models/UploadSectionRequestOneOf';
import { UploadSectionResponse } from '../models/UploadSectionResponse';
import { UploadSectionStatusEnum } from '../models/UploadSectionStatusEnum';
import { UploadSectionStatusResponse } from '../models/UploadSectionStatusResponse';
import { UserLicenseEnum } from '../models/UserLicenseEnum';
import { WebhookEventDetailsResponse } from '../models/WebhookEventDetailsResponse';
import { WebhookEventErrorEnum } from '../models/WebhookEventErrorEnum';
import { WebhookEventHttpStatusCodeGroupEnum } from '../models/WebhookEventHttpStatusCodeGroupEnum';
import { WebhookEventItemResponse } from '../models/WebhookEventItemResponse';
import { WebhookEventPageResponse } from '../models/WebhookEventPageResponse';
import { WebhookEventTriggerEnum } from '../models/WebhookEventTriggerEnum';
import { WebhookSubscriptionCreateRequest } from '../models/WebhookSubscriptionCreateRequest';
import { WebhookSubscriptionItemResponse } from '../models/WebhookSubscriptionItemResponse';
import { WebhookSubscriptionListResponse } from '../models/WebhookSubscriptionListResponse';
import { WebhookSubscriptionPatchRequest } from '../models/WebhookSubscriptionPatchRequest';
import { WebhookSubscriptionPayloadEnum } from '../models/WebhookSubscriptionPayloadEnum';
import { WebhookSubscriptionSharedKeyResponse } from '../models/WebhookSubscriptionSharedKeyResponse';
import { WebhookSubscriptionStatusEnum } from '../models/WebhookSubscriptionStatusEnum';
import { WebhookSubscriptionTriggerEnum } from '../models/WebhookSubscriptionTriggerEnum';
import { WorkspaceMemberRoleEnum } from '../models/WorkspaceMemberRoleEnum';

import { ObservableAPILogsApi } from "./ObservableAPI";
import { APILogsApiRequestFactory, APILogsApiResponseProcessor} from "../apis/APILogsApi";

export interface APILogsApiDetailsLogRequest {
    /**
     * Log event id.
     * Defaults to: undefined
     * @type string
     * @memberof APILogsApidetailsLog
     */
    id: string
}

export interface APILogsApiDetailsLogV2Request {
    /**
     * Log event id.
     * Defaults to: undefined
     * @type string
     * @memberof APILogsApidetailsLogV2
     */
    id: string
}

export interface APILogsApiListLogsRequest {
    /**
     * Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-90d\&quot; (for past 90 days).
     * Defaults to: &#39;-90d&#39;
     * @type string
     * @memberof APILogsApilistLogs
     */
    since?: string
    /**
     * Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-10d\&quot; (for past 10 days) or a special \&quot;now\&quot; value.
     * Defaults to: undefined
     * @type string
     * @memberof APILogsApilistLogs
     */
    to?: string
    /**
     * The amount of items on each page.
     * Minimum: 1
     * Defaults to: 100
     * @type number
     * @memberof APILogsApilistLogs
     */
    count?: number
    /**
     * Returns page of the results by number.
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof APILogsApilistLogs
     */
    page?: number
    /**
     * Returns only the predefined status codes.
     * Defaults to: undefined
     * @type Array&lt;ApiLogStatusEnum&gt;
     * @memberof APILogsApilistLogs
     */
    statuses?: Array<ApiLogStatusEnum>
    /**
     * Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE.
     * Defaults to: undefined
     * @type Array&lt;ApiLogMethodEnum&gt;
     * @memberof APILogsApilistLogs
     */
    methods?: Array<ApiLogMethodEnum>
    /**
     * Returns the results containing a string.
     * Defaults to: undefined
     * @type string
     * @memberof APILogsApilistLogs
     */
    search?: string
    /**
     * Returns logs for production/sandbox.
     * Defaults to: undefined
     * @type ApiLogEnvironmentTypeEnum
     * @memberof APILogsApilistLogs
     */
    environmentType?: ApiLogEnvironmentTypeEnum
}

export interface APILogsApiListLogsV2Request {
    /**
     * Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-90d\&quot; (for past 90 days).
     * Defaults to: &#39;-90d&#39;
     * @type string
     * @memberof APILogsApilistLogsV2
     */
    since?: string
    /**
     * Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-10d\&quot; (for past 10 days) or a special \&quot;now\&quot; value.
     * Defaults to: undefined
     * @type string
     * @memberof APILogsApilistLogsV2
     */
    to?: string
    /**
     * The amount of items on each page.
     * Minimum: 1
     * Defaults to: 100
     * @type number
     * @memberof APILogsApilistLogsV2
     */
    count?: number
    /**
     * Returns page of the results by number.
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof APILogsApilistLogsV2
     */
    page?: number
    /**
     * Returns only the predefined status codes.
     * Defaults to: undefined
     * @type Array&lt;ApiLogStatusEnum&gt;
     * @memberof APILogsApilistLogsV2
     */
    statuses?: Array<ApiLogStatusEnum>
    /**
     * Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE.
     * Defaults to: undefined
     * @type Array&lt;ApiLogMethodEnum&gt;
     * @memberof APILogsApilistLogsV2
     */
    methods?: Array<ApiLogMethodEnum>
    /**
     * Returns the results containing a string.
     * Defaults to: undefined
     * @type string
     * @memberof APILogsApilistLogsV2
     */
    search?: string
    /**
     * Returns logs for production/sandbox.
     * Defaults to: undefined
     * @type ApiLogEnvironmentTypeEnum
     * @memberof APILogsApilistLogsV2
     */
    environmentType?: ApiLogEnvironmentTypeEnum
}

export class ObjectAPILogsApi {
    private api: ObservableAPILogsApi

    public constructor(configuration: Configuration, requestFactory?: APILogsApiRequestFactory, responseProcessor?: APILogsApiResponseProcessor) {
        this.api = new ObservableAPILogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns details of the specific API log event.
     * [Deprecated] API Log Details
     * @param param the request object
     */
    public detailsLogWithHttpInfo(param: APILogsApiDetailsLogRequest, options?: ConfigurationOptions): Promise<HttpInfo<APILogDetailsResponse>> {
        return this.api.detailsLogWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Returns details of the specific API log event.
     * [Deprecated] API Log Details
     * @param param the request object
     */
    public detailsLog(param: APILogsApiDetailsLogRequest, options?: ConfigurationOptions): Promise<APILogDetailsResponse> {
        return this.api.detailsLog(param.id,  options).toPromise();
    }

    /**
     * Returns details of the specific API log event.
     * API Log Details
     * @param param the request object
     */
    public detailsLogV2WithHttpInfo(param: APILogsApiDetailsLogV2Request, options?: ConfigurationOptions): Promise<HttpInfo<APILogDetailsResponse>> {
        return this.api.detailsLogV2WithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Returns details of the specific API log event.
     * API Log Details
     * @param param the request object
     */
    public detailsLogV2(param: APILogsApiDetailsLogV2Request, options?: ConfigurationOptions): Promise<APILogDetailsResponse> {
        return this.api.detailsLogV2(param.id,  options).toPromise();
    }

    /**
     * Get the list of all logs within the selected workspace.\\ Optionally filter by date, page, and `#` of items per page.
     * [Deprecated] List API Log
     * @param param the request object
     */
    public listLogsWithHttpInfo(param: APILogsApiListLogsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<APILogListResponse>> {
        return this.api.listLogsWithHttpInfo(param.since, param.to, param.count, param.page, param.statuses, param.methods, param.search, param.environmentType,  options).toPromise();
    }

    /**
     * Get the list of all logs within the selected workspace.\\ Optionally filter by date, page, and `#` of items per page.
     * [Deprecated] List API Log
     * @param param the request object
     */
    public listLogs(param: APILogsApiListLogsRequest = {}, options?: ConfigurationOptions): Promise<APILogListResponse> {
        return this.api.listLogs(param.since, param.to, param.count, param.page, param.statuses, param.methods, param.search, param.environmentType,  options).toPromise();
    }

    /**
     * Get the list of all logs within the selected workspace.\\ Optionally filter by date, page, and `#` of items per page.
     * List API Log
     * @param param the request object
     */
    public listLogsV2WithHttpInfo(param: APILogsApiListLogsV2Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<APILogListResponse>> {
        return this.api.listLogsV2WithHttpInfo(param.since, param.to, param.count, param.page, param.statuses, param.methods, param.search, param.environmentType,  options).toPromise();
    }

    /**
     * Get the list of all logs within the selected workspace.\\ Optionally filter by date, page, and `#` of items per page.
     * List API Log
     * @param param the request object
     */
    public listLogsV2(param: APILogsApiListLogsV2Request = {}, options?: ConfigurationOptions): Promise<APILogListResponse> {
        return this.api.listLogsV2(param.since, param.to, param.count, param.page, param.statuses, param.methods, param.search, param.environmentType,  options).toPromise();
    }

}

import { ObservableCommunicationPreferencesApi } from "./ObservableAPI";
import { CommunicationPreferencesApiRequestFactory, CommunicationPreferencesApiResponseProcessor} from "../apis/CommunicationPreferencesApi";

export interface CommunicationPreferencesApiListRecentSmsOptOutsRequest {
    /**
     * The start of the timestamp.   If no timestamp is provided, 1 hour before the current time will be used. 
     * Defaults to: undefined
     * @type Date
     * @memberof CommunicationPreferencesApilistRecentSmsOptOuts
     */
    timestampFrom?: Date
    /**
     * The end of the timestamp range.   If no timestamp is provided the current time will be used. 
     * Defaults to: undefined
     * @type Date
     * @memberof CommunicationPreferencesApilistRecentSmsOptOuts
     */
    timestampTo?: Date
}

export class ObjectCommunicationPreferencesApi {
    private api: ObservableCommunicationPreferencesApi

    public constructor(configuration: Configuration, requestFactory?: CommunicationPreferencesApiRequestFactory, responseProcessor?: CommunicationPreferencesApiResponseProcessor) {
        this.api = new ObservableCommunicationPreferencesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of the most recent SMS opt-out changes for each phone numbers used in your workspace.  > 📘 You can filter results by time range using `timestamp_from` and `timestamp_to`. 
     * Recent SMS Opt-out
     * @param param the request object
     */
    public listRecentSmsOptOutsWithHttpInfo(param: CommunicationPreferencesApiListRecentSmsOptOutsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListSmsOptOutChangelogResponse>> {
        return this.api.listRecentSmsOptOutsWithHttpInfo(param.timestampFrom, param.timestampTo,  options).toPromise();
    }

    /**
     * Retrieves a list of the most recent SMS opt-out changes for each phone numbers used in your workspace.  > 📘 You can filter results by time range using `timestamp_from` and `timestamp_to`. 
     * Recent SMS Opt-out
     * @param param the request object
     */
    public listRecentSmsOptOuts(param: CommunicationPreferencesApiListRecentSmsOptOutsRequest = {}, options?: ConfigurationOptions): Promise<ListSmsOptOutChangelogResponse> {
        return this.api.listRecentSmsOptOuts(param.timestampFrom, param.timestampTo,  options).toPromise();
    }

}

import { ObservableContactsApi } from "./ObservableAPI";
import { ContactsApiRequestFactory, ContactsApiResponseProcessor} from "../apis/ContactsApi";

export interface ContactsApiCreateContactRequest {
    /**
     * 
     * @type ContactCreateRequest
     * @memberof ContactsApicreateContact
     */
    contactCreateRequest: ContactCreateRequest
}

export interface ContactsApiDeleteContactRequest {
    /**
     * Contact id.
     * Defaults to: undefined
     * @type string
     * @memberof ContactsApideleteContact
     */
    id: string
}

export interface ContactsApiDetailsContactRequest {
    /**
     * Contact id.
     * Defaults to: undefined
     * @type string
     * @memberof ContactsApidetailsContact
     */
    id: string
}

export interface ContactsApiListContactsRequest {
    /**
     * Optional search parameter. Filter results by exact match.
     * Defaults to: undefined
     * @type string
     * @memberof ContactsApilistContacts
     */
    email?: string
}

export interface ContactsApiUpdateContactRequest {
    /**
     * Contact id.
     * Defaults to: undefined
     * @type string
     * @memberof ContactsApiupdateContact
     */
    id: string
    /**
     * 
     * @type ContactUpdateRequest
     * @memberof ContactsApiupdateContact
     */
    contactUpdateRequest: ContactUpdateRequest
}

export class ObjectContactsApi {
    private api: ObservableContactsApi

    public constructor(configuration: Configuration, requestFactory?: ContactsApiRequestFactory, responseProcessor?: ContactsApiResponseProcessor) {
        this.api = new ObservableContactsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This method adds a contact into a contacts list.
     * Create contact
     * @param param the request object
     */
    public createContactWithHttpInfo(param: ContactsApiCreateContactRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContactDetailsResponse>> {
        return this.api.createContactWithHttpInfo(param.contactCreateRequest,  options).toPromise();
    }

    /**
     * This method adds a contact into a contacts list.
     * Create contact
     * @param param the request object
     */
    public createContact(param: ContactsApiCreateContactRequest, options?: ConfigurationOptions): Promise<ContactDetailsResponse> {
        return this.api.createContact(param.contactCreateRequest,  options).toPromise();
    }

    /**
     * This method deletes a contact.
     * Delete Contact
     * @param param the request object
     */
    public deleteContactWithHttpInfo(param: ContactsApiDeleteContactRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteContactWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * This method deletes a contact.
     * Delete Contact
     * @param param the request object
     */
    public deleteContact(param: ContactsApiDeleteContactRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteContact(param.id,  options).toPromise();
    }

    /**
     * Returns contact details by its ID.
     * Contact Details
     * @param param the request object
     */
    public detailsContactWithHttpInfo(param: ContactsApiDetailsContactRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContactDetailsResponse>> {
        return this.api.detailsContactWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Returns contact details by its ID.
     * Contact Details
     * @param param the request object
     */
    public detailsContact(param: ContactsApiDetailsContactRequest, options?: ConfigurationOptions): Promise<ContactDetailsResponse> {
        return this.api.detailsContact(param.id,  options).toPromise();
    }

    /**
     * This method returns a list of contacts associated with a workspace.
     * List contacts
     * @param param the request object
     */
    public listContactsWithHttpInfo(param: ContactsApiListContactsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ContactListResponse>> {
        return this.api.listContactsWithHttpInfo(param.email,  options).toPromise();
    }

    /**
     * This method returns a list of contacts associated with a workspace.
     * List contacts
     * @param param the request object
     */
    public listContacts(param: ContactsApiListContactsRequest = {}, options?: ConfigurationOptions): Promise<ContactListResponse> {
        return this.api.listContacts(param.email,  options).toPromise();
    }

    /**
     * This method updates a contact details.
     * Update Contact
     * @param param the request object
     */
    public updateContactWithHttpInfo(param: ContactsApiUpdateContactRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContactDetailsResponse>> {
        return this.api.updateContactWithHttpInfo(param.id, param.contactUpdateRequest,  options).toPromise();
    }

    /**
     * This method updates a contact details.
     * Update Contact
     * @param param the request object
     */
    public updateContact(param: ContactsApiUpdateContactRequest, options?: ConfigurationOptions): Promise<ContactDetailsResponse> {
        return this.api.updateContact(param.id, param.contactUpdateRequest,  options).toPromise();
    }

}

import { ObservableContentLibraryItemsApi } from "./ObservableAPI";
import { ContentLibraryItemsApiRequestFactory, ContentLibraryItemsApiResponseProcessor} from "../apis/ContentLibraryItemsApi";

export interface ContentLibraryItemsApiCreateContentLibraryItemRequest {
    /**
     * 
     * @type ContentLibraryItemCreateFromUrlRequest
     * @memberof ContentLibraryItemsApicreateContentLibraryItem
     */
    contentLibraryItemCreateFromUrlRequest: ContentLibraryItemCreateFromUrlRequest
}

export interface ContentLibraryItemsApiCreateContentLibraryItemFromUploadRequest {
    /**
     * Binary PDF File
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ContentLibraryItemsApicreateContentLibraryItemFromUpload
     */
    file?: HttpFile
    /**
     * JSON as a multipart/form-data request.
     * Defaults to: undefined
     * @type ContentLibraryItemCreateRequest
     * @memberof ContentLibraryItemsApicreateContentLibraryItemFromUpload
     */
    data?: ContentLibraryItemCreateRequest
}

export interface ContentLibraryItemsApiDetailsContentLibraryItemRequest {
    /**
     * Content Library Item ID
     * Defaults to: undefined
     * @type string
     * @memberof ContentLibraryItemsApidetailsContentLibraryItem
     */
    id: string
}

export interface ContentLibraryItemsApiListContentLibraryItemsRequest {
    /**
     * Search query. Filter by content library item name.
     * Defaults to: undefined
     * @type string
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    q?: string
    /**
     * Specify content library item ID.
     * Defaults to: undefined
     * @type string
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    id?: string
    /**
     * Returns only the deleted content library items.
     * Defaults to: undefined
     * @type boolean
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    deleted?: boolean
    /**
     * The UUID of the folder where the content library items are stored.
     * Defaults to: undefined
     * @type string
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    folderUuid?: string
    /**
     * Specify how many content library items to return. Default is 50 content library items, maximum is 100 content library items.
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    count?: number
    /**
     * Specify which page of the dataset to return.
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    page?: number
    /**
     * Search tag. Filter by content library item tag.
     * Defaults to: undefined
     * @type string
     * @memberof ContentLibraryItemsApilistContentLibraryItems
     */
    tag?: string
}

export interface ContentLibraryItemsApiStatusContentLibraryItemRequest {
    /**
     * Content Library Item ID
     * Defaults to: undefined
     * @type string
     * @memberof ContentLibraryItemsApistatusContentLibraryItem
     */
    id: string
}

export class ObjectContentLibraryItemsApi {
    private api: ObservableContentLibraryItemsApi

    public constructor(configuration: Configuration, requestFactory?: ContentLibraryItemsApiRequestFactory, responseProcessor?: ContentLibraryItemsApiResponseProcessor) {
        this.api = new ObservableContentLibraryItemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API endpoint allows users to create an empty item in the content library. No actual content or data is required to be provided in the initial creation. 
     * Create Content Library Item
     * @param param the request object
     */
    public createContentLibraryItemWithHttpInfo(param: ContentLibraryItemsApiCreateContentLibraryItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContentLibraryResponse>> {
        return this.api.createContentLibraryItemWithHttpInfo(param.contentLibraryItemCreateFromUrlRequest,  options).toPromise();
    }

    /**
     * This API endpoint allows users to create an empty item in the content library. No actual content or data is required to be provided in the initial creation. 
     * Create Content Library Item
     * @param param the request object
     */
    public createContentLibraryItem(param: ContentLibraryItemsApiCreateContentLibraryItemRequest, options?: ConfigurationOptions): Promise<ContentLibraryResponse> {
        return this.api.createContentLibraryItem(param.contentLibraryItemCreateFromUrlRequest,  options).toPromise();
    }

    /**
     * This asynchronous endpoint allows users to create a new CLI by uploading a file. The uploaded file is processed in the background to generate the CLI. The maximum allowable file size for upload is 100 MB. Field tags and form fields are not supported yet. Once the file is uploaded, the processing will happen asynchronously, and users need to check the status of the CLI creation. 
     * Create Content Library Item from File Upload
     * @param param the request object
     */
    public createContentLibraryItemFromUploadWithHttpInfo(param: ContentLibraryItemsApiCreateContentLibraryItemFromUploadRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ContentLibraryResponse>> {
        return this.api.createContentLibraryItemFromUploadWithHttpInfo(param.file, param.data,  options).toPromise();
    }

    /**
     * This asynchronous endpoint allows users to create a new CLI by uploading a file. The uploaded file is processed in the background to generate the CLI. The maximum allowable file size for upload is 100 MB. Field tags and form fields are not supported yet. Once the file is uploaded, the processing will happen asynchronously, and users need to check the status of the CLI creation. 
     * Create Content Library Item from File Upload
     * @param param the request object
     */
    public createContentLibraryItemFromUpload(param: ContentLibraryItemsApiCreateContentLibraryItemFromUploadRequest = {}, options?: ConfigurationOptions): Promise<ContentLibraryResponse> {
        return this.api.createContentLibraryItemFromUpload(param.file, param.data,  options).toPromise();
    }

    /**
     * Retrieve detailed information about a specific content library item using its ID. The details include:  - **Roles** - **All fields with values** - **All tokens with values** - **Pricing information (pricing tables, products, etc)** - **Metadata** - **Tags** - **Modification Timestamps**: note that `date_modified` means any changes associated with the CLI, while `content_date_modified` logs any changes in CLI content. 
     * Content Library Item Details
     * @param param the request object
     */
    public detailsContentLibraryItemWithHttpInfo(param: ContentLibraryItemsApiDetailsContentLibraryItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContentLibraryItemResponse>> {
        return this.api.detailsContentLibraryItemWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieve detailed information about a specific content library item using its ID. The details include:  - **Roles** - **All fields with values** - **All tokens with values** - **Pricing information (pricing tables, products, etc)** - **Metadata** - **Tags** - **Modification Timestamps**: note that `date_modified` means any changes associated with the CLI, while `content_date_modified` logs any changes in CLI content. 
     * Content Library Item Details
     * @param param the request object
     */
    public detailsContentLibraryItem(param: ContentLibraryItemsApiDetailsContentLibraryItemRequest, options?: ConfigurationOptions): Promise<ContentLibraryItemResponse> {
        return this.api.detailsContentLibraryItem(param.id,  options).toPromise();
    }

    /**
     * The endpoint retrieves items from the content library in PandaDoc. This endpoint supports filtering options to narrow down the results, allowing users to search by query, tags, folder, and more.  > ### ⚠️ Please avoid empty values for the parameters > API returns \"400\" error when any of the parameters has an empty value. Please remove such a parameter from the request or add a value. 
     * List Content Library Item
     * @param param the request object
     */
    public listContentLibraryItemsWithHttpInfo(param: ContentLibraryItemsApiListContentLibraryItemsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ContentLibraryItemListResponse>> {
        return this.api.listContentLibraryItemsWithHttpInfo(param.q, param.id, param.deleted, param.folderUuid, param.count, param.page, param.tag,  options).toPromise();
    }

    /**
     * The endpoint retrieves items from the content library in PandaDoc. This endpoint supports filtering options to narrow down the results, allowing users to search by query, tags, folder, and more.  > ### ⚠️ Please avoid empty values for the parameters > API returns \"400\" error when any of the parameters has an empty value. Please remove such a parameter from the request or add a value. 
     * List Content Library Item
     * @param param the request object
     */
    public listContentLibraryItems(param: ContentLibraryItemsApiListContentLibraryItemsRequest = {}, options?: ConfigurationOptions): Promise<ContentLibraryItemListResponse> {
        return this.api.listContentLibraryItems(param.q, param.id, param.deleted, param.folderUuid, param.count, param.page, param.tag,  options).toPromise();
    }

    /**
     * Requesting the CLI status helps verify that a CLI is in the expected state before invoking additional API methods.  ## Available CLI Statuses  The following is a complete list of all possible CLI statuses returned:  | CLI Status | Status Description | |-----------------|--------------------| | `cli.UPLOADED`  | The CLI upload process has been initiated and is currently in progress. It will soon transition to the `cli.PROCESSED` state. | | `cli.PROCESSED` | The CLI has been successfully uploaded and created. At this stage, all aspects of the CLI are editable. | | `cli.ERROR`     | The CLI upload process has failed. Please refer to the error details in the response for more information. | 
     * Content Library Item Status
     * @param param the request object
     */
    public statusContentLibraryItemWithHttpInfo(param: ContentLibraryItemsApiStatusContentLibraryItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContentLibraryResponse>> {
        return this.api.statusContentLibraryItemWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Requesting the CLI status helps verify that a CLI is in the expected state before invoking additional API methods.  ## Available CLI Statuses  The following is a complete list of all possible CLI statuses returned:  | CLI Status | Status Description | |-----------------|--------------------| | `cli.UPLOADED`  | The CLI upload process has been initiated and is currently in progress. It will soon transition to the `cli.PROCESSED` state. | | `cli.PROCESSED` | The CLI has been successfully uploaded and created. At this stage, all aspects of the CLI are editable. | | `cli.ERROR`     | The CLI upload process has failed. Please refer to the error details in the response for more information. | 
     * Content Library Item Status
     * @param param the request object
     */
    public statusContentLibraryItem(param: ContentLibraryItemsApiStatusContentLibraryItemRequest, options?: ConfigurationOptions): Promise<ContentLibraryResponse> {
        return this.api.statusContentLibraryItem(param.id,  options).toPromise();
    }

}

import { ObservableDocumentAttachmentsApi } from "./ObservableAPI";
import { DocumentAttachmentsApiRequestFactory, DocumentAttachmentsApiResponseProcessor} from "../apis/DocumentAttachmentsApi";

export interface DocumentAttachmentsApiCreateDocumentAttachmentRequest {
    /**
     * Document UUID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentAttachmentsApicreateDocumentAttachment
     */
    id: string
    /**
     * 
     * @type DocumentAttachmentRequest
     * @memberof DocumentAttachmentsApicreateDocumentAttachment
     */
    documentAttachmentRequest: DocumentAttachmentRequest
}

export interface DocumentAttachmentsApiCreateDocumentAttachmentFromFileUploadRequest {
    /**
     * Document UUID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentAttachmentsApicreateDocumentAttachmentFromFileUpload
     */
    id: string
    /**
     * Binary file to be attached to a document
     * Defaults to: undefined
     * @type HttpFile
     * @memberof DocumentAttachmentsApicreateDocumentAttachmentFromFileUpload
     */
    file?: HttpFile
    /**
     * Optional name to set for uploaded file
     * Defaults to: undefined
     * @type string
     * @memberof DocumentAttachmentsApicreateDocumentAttachmentFromFileUpload
     */
    name?: string
}

export interface DocumentAttachmentsApiDeleteDocumentAttachmentRequest {
    /**
     * Document UUID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentAttachmentsApideleteDocumentAttachment
     */
    id: string
    /**
     * Attachment UUID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentAttachmentsApideleteDocumentAttachment
     */
    attachmentId: string
}

export interface DocumentAttachmentsApiDetailsDocumentAttachmentRequest {
    /**
     * Document UUID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentAttachmentsApidetailsDocumentAttachment
     */
    id: string
    /**
     * Attachment UUID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentAttachmentsApidetailsDocumentAttachment
     */
    attachmentId: string
}

export interface DocumentAttachmentsApiDownloadDocumentAttachmentRequest {
    /**
     * Document UUID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentAttachmentsApidownloadDocumentAttachment
     */
    id: string
    /**
     * Attachment UUID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentAttachmentsApidownloadDocumentAttachment
     */
    attachmentId: string
}

export interface DocumentAttachmentsApiListDocumentAttachmentsRequest {
    /**
     * Document UUID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentAttachmentsApilistDocumentAttachments
     */
    id: string
}

export class ObjectDocumentAttachmentsApi {
    private api: ObservableDocumentAttachmentsApi

    public constructor(configuration: Configuration, requestFactory?: DocumentAttachmentsApiRequestFactory, responseProcessor?: DocumentAttachmentsApiResponseProcessor) {
        this.api = new ObservableDocumentAttachmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an attachment for a particular document
     * Create Document Attachment
     * @param param the request object
     */
    public createDocumentAttachmentWithHttpInfo(param: DocumentAttachmentsApiCreateDocumentAttachmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentAttachmentResponse>> {
        return this.api.createDocumentAttachmentWithHttpInfo(param.id, param.documentAttachmentRequest,  options).toPromise();
    }

    /**
     * Creates an attachment for a particular document
     * Create Document Attachment
     * @param param the request object
     */
    public createDocumentAttachment(param: DocumentAttachmentsApiCreateDocumentAttachmentRequest, options?: ConfigurationOptions): Promise<DocumentAttachmentResponse> {
        return this.api.createDocumentAttachment(param.id, param.documentAttachmentRequest,  options).toPromise();
    }

    /**
     * Creates an attachment for a particular document
     * Create Document Attachment From Upload
     * @param param the request object
     */
    public createDocumentAttachmentFromFileUploadWithHttpInfo(param: DocumentAttachmentsApiCreateDocumentAttachmentFromFileUploadRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentAttachmentResponse>> {
        return this.api.createDocumentAttachmentFromFileUploadWithHttpInfo(param.id, param.file, param.name,  options).toPromise();
    }

    /**
     * Creates an attachment for a particular document
     * Create Document Attachment From Upload
     * @param param the request object
     */
    public createDocumentAttachmentFromFileUpload(param: DocumentAttachmentsApiCreateDocumentAttachmentFromFileUploadRequest, options?: ConfigurationOptions): Promise<DocumentAttachmentResponse> {
        return this.api.createDocumentAttachmentFromFileUpload(param.id, param.file, param.name,  options).toPromise();
    }

    /**
     * Deletes an attachment from the document.
     * Delete Document Attachment
     * @param param the request object
     */
    public deleteDocumentAttachmentWithHttpInfo(param: DocumentAttachmentsApiDeleteDocumentAttachmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteDocumentAttachmentWithHttpInfo(param.id, param.attachmentId,  options).toPromise();
    }

    /**
     * Deletes an attachment from the document.
     * Delete Document Attachment
     * @param param the request object
     */
    public deleteDocumentAttachment(param: DocumentAttachmentsApiDeleteDocumentAttachmentRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteDocumentAttachment(param.id, param.attachmentId,  options).toPromise();
    }

    /**
     * Returns details of the specific document\'s attachment.
     * Document Attachment Details
     * @param param the request object
     */
    public detailsDocumentAttachmentWithHttpInfo(param: DocumentAttachmentsApiDetailsDocumentAttachmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentAttachmentResponse>> {
        return this.api.detailsDocumentAttachmentWithHttpInfo(param.id, param.attachmentId,  options).toPromise();
    }

    /**
     * Returns details of the specific document\'s attachment.
     * Document Attachment Details
     * @param param the request object
     */
    public detailsDocumentAttachment(param: DocumentAttachmentsApiDetailsDocumentAttachmentRequest, options?: ConfigurationOptions): Promise<DocumentAttachmentResponse> {
        return this.api.detailsDocumentAttachment(param.id, param.attachmentId,  options).toPromise();
    }

    /**
     * Download an attachment by ID.
     * Download Document Attachment
     * @param param the request object
     */
    public downloadDocumentAttachmentWithHttpInfo(param: DocumentAttachmentsApiDownloadDocumentAttachmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        return this.api.downloadDocumentAttachmentWithHttpInfo(param.id, param.attachmentId,  options).toPromise();
    }

    /**
     * Download an attachment by ID.
     * Download Document Attachment
     * @param param the request object
     */
    public downloadDocumentAttachment(param: DocumentAttachmentsApiDownloadDocumentAttachmentRequest, options?: ConfigurationOptions): Promise<HttpFile> {
        return this.api.downloadDocumentAttachment(param.id, param.attachmentId,  options).toPromise();
    }

    /**
     * Returns a list of attachments associated with a specified document.
     * List Document Attachments
     * @param param the request object
     */
    public listDocumentAttachmentsWithHttpInfo(param: DocumentAttachmentsApiListDocumentAttachmentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<DocumentAttachmentResponse>>> {
        return this.api.listDocumentAttachmentsWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Returns a list of attachments associated with a specified document.
     * List Document Attachments
     * @param param the request object
     */
    public listDocumentAttachments(param: DocumentAttachmentsApiListDocumentAttachmentsRequest, options?: ConfigurationOptions): Promise<Array<DocumentAttachmentResponse>> {
        return this.api.listDocumentAttachments(param.id,  options).toPromise();
    }

}

import { ObservableDocumentAuditTrailApi } from "./ObservableAPI";
import { DocumentAuditTrailApiRequestFactory, DocumentAuditTrailApiResponseProcessor} from "../apis/DocumentAuditTrailApi";

export interface DocumentAuditTrailApiListDocumentAuditTrailRequest {
    /**
     * Unique identifier of the document to retrieve the audit trail for.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentAuditTrailApilistDocumentAuditTrail
     */
    documentId: string
    /**
     * Maximum number of items to return.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 20
     * @type number
     * @memberof DocumentAuditTrailApilistDocumentAuditTrail
     */
    limit?: number
    /**
     * Number of items to skip before starting to collect the result set.
     * Minimum: 0
     * Defaults to: 0
     * @type number
     * @memberof DocumentAuditTrailApilistDocumentAuditTrail
     */
    offset?: number
}

export class ObjectDocumentAuditTrailApi {
    private api: ObservableDocumentAuditTrailApi

    public constructor(configuration: Configuration, requestFactory?: DocumentAuditTrailApiRequestFactory, responseProcessor?: DocumentAuditTrailApiResponseProcessor) {
        this.api = new ObservableDocumentAuditTrailApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the full audit trail for a specified document. The audit trail includes detailed user actions such as sending, viewing, signing, and editing, along with metadata like timestamps, IP addresses, and user identity. This endpoint is accessible to authorized workspace administrators only. 
     * List Document Audit Trail
     * @param param the request object
     */
    public listDocumentAuditTrailWithHttpInfo(param: DocumentAuditTrailApiListDocumentAuditTrailRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentAuditTrailResponse>> {
        return this.api.listDocumentAuditTrailWithHttpInfo(param.documentId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Retrieves the full audit trail for a specified document. The audit trail includes detailed user actions such as sending, viewing, signing, and editing, along with metadata like timestamps, IP addresses, and user identity. This endpoint is accessible to authorized workspace administrators only. 
     * List Document Audit Trail
     * @param param the request object
     */
    public listDocumentAuditTrail(param: DocumentAuditTrailApiListDocumentAuditTrailRequest, options?: ConfigurationOptions): Promise<DocumentAuditTrailResponse> {
        return this.api.listDocumentAuditTrail(param.documentId, param.limit, param.offset,  options).toPromise();
    }

}

import { ObservableDocumentFieldsApi } from "./ObservableAPI";
import { DocumentFieldsApiRequestFactory, DocumentFieldsApiResponseProcessor} from "../apis/DocumentFieldsApi";

export interface DocumentFieldsApiCreateDocumentFieldsRequest {
    /**
     * Document UUID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentFieldsApicreateDocumentFields
     */
    id: string
    /**
     * 
     * @type CreateDocumentFieldsRequest
     * @memberof DocumentFieldsApicreateDocumentFields
     */
    createDocumentFieldsRequest: CreateDocumentFieldsRequest
}

export interface DocumentFieldsApiListDocumentFieldsRequest {
    /**
     * Document UUID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentFieldsApilistDocumentFields
     */
    id: string
}

export class ObjectDocumentFieldsApi {
    private api: ObservableDocumentFieldsApi

    public constructor(configuration: Configuration, requestFactory?: DocumentFieldsApiRequestFactory, responseProcessor?: DocumentFieldsApiResponseProcessor) {
        this.api = new ObservableDocumentFieldsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates fields for a particular document. For CFR11-compliant workspaces (21 CFR Part 11),  signature fields must have a minimum size of 108×33. 
     * Create Document Fields
     * @param param the request object
     */
    public createDocumentFieldsWithHttpInfo(param: DocumentFieldsApiCreateDocumentFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateDocumentFieldsResponse>> {
        return this.api.createDocumentFieldsWithHttpInfo(param.id, param.createDocumentFieldsRequest,  options).toPromise();
    }

    /**
     * Creates fields for a particular document. For CFR11-compliant workspaces (21 CFR Part 11),  signature fields must have a minimum size of 108×33. 
     * Create Document Fields
     * @param param the request object
     */
    public createDocumentFields(param: DocumentFieldsApiCreateDocumentFieldsRequest, options?: ConfigurationOptions): Promise<CreateDocumentFieldsResponse> {
        return this.api.createDocumentFields(param.id, param.createDocumentFieldsRequest,  options).toPromise();
    }

    /**
     * Return the list of fields for a particular document.
     * List Document Fields
     * @param param the request object
     */
    public listDocumentFieldsWithHttpInfo(param: DocumentFieldsApiListDocumentFieldsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListDocumentFieldsResponse>> {
        return this.api.listDocumentFieldsWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Return the list of fields for a particular document.
     * List Document Fields
     * @param param the request object
     */
    public listDocumentFields(param: DocumentFieldsApiListDocumentFieldsRequest, options?: ConfigurationOptions): Promise<ListDocumentFieldsResponse> {
        return this.api.listDocumentFields(param.id,  options).toPromise();
    }

}

import { ObservableDocumentLinkToCRMApi } from "./ObservableAPI";
import { DocumentLinkToCRMApiRequestFactory, DocumentLinkToCRMApiResponseProcessor} from "../apis/DocumentLinkToCRMApi";

export interface DocumentLinkToCRMApiCreateLinkedObjectRequest {
    /**
     * Specify document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentLinkToCRMApicreateLinkedObject
     */
    id: string
    /**
     * 
     * @type LinkedObjectCreateRequest
     * @memberof DocumentLinkToCRMApicreateLinkedObject
     */
    linkedObjectCreateRequest: LinkedObjectCreateRequest
}

export interface DocumentLinkToCRMApiDeleteLinkedObjectRequest {
    /**
     * Specify document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentLinkToCRMApideleteLinkedObject
     */
    id: string
    /**
     * Specify linked object ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentLinkToCRMApideleteLinkedObject
     */
    linkedObjectId: string
}

export interface DocumentLinkToCRMApiListDocumentsByLinkedObjectRequest {
    /**
     * You can get entity id from your integration, for example, from a url of a HubSpot deal.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentLinkToCRMApilistDocumentsByLinkedObject
     */
    entityId: string
    /**
     * See the available entity types: https://developers.pandadoc.com/reference/link-service#examples-of-the-most-popular-crms 
     * Defaults to: undefined
     * @type string
     * @memberof DocumentLinkToCRMApilistDocumentsByLinkedObject
     */
    entityType: string
    /**
     * See the available providers: https://developers.pandadoc.com/reference/link-service#examples-of-the-most-popular-crms 
     * Defaults to: undefined
     * @type string
     * @memberof DocumentLinkToCRMApilistDocumentsByLinkedObject
     */
    provider: string
    /**
     * 
     * Defaults to: &#39;-date_created&#39;
     * @type string
     * @memberof DocumentLinkToCRMApilistDocumentsByLinkedObject
     */
    orderBy?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof DocumentLinkToCRMApilistDocumentsByLinkedObject
     */
    ownerIds?: Array<string>
}

export interface DocumentLinkToCRMApiListLinkedObjectsRequest {
    /**
     * Specify document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentLinkToCRMApilistLinkedObjects
     */
    id: string
}

export class ObjectDocumentLinkToCRMApi {
    private api: ObservableDocumentLinkToCRMApi

    public constructor(configuration: Configuration, requestFactory?: DocumentLinkToCRMApiRequestFactory, responseProcessor?: DocumentLinkToCRMApiResponseProcessor) {
        this.api = new ObservableDocumentLinkToCRMApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a linked object in the document.  > 🚧  >  > You can only link each document to each CRM once. This ensures the consistent functionality of the [two-way CRM sync](https://support.pandadoc.com/en/articles/9714877-hubspot-crm#h_3a3344e8-2a6e-4fd8-86be-0da8c121e4ac). >  > You can, however, link one document to several external systems. 
     * Create Linked Object
     * @param param the request object
     */
    public createLinkedObjectWithHttpInfo(param: DocumentLinkToCRMApiCreateLinkedObjectRequest, options?: ConfigurationOptions): Promise<HttpInfo<LinkedObjectCreateResponse>> {
        return this.api.createLinkedObjectWithHttpInfo(param.id, param.linkedObjectCreateRequest,  options).toPromise();
    }

    /**
     * Create a linked object in the document.  > 🚧  >  > You can only link each document to each CRM once. This ensures the consistent functionality of the [two-way CRM sync](https://support.pandadoc.com/en/articles/9714877-hubspot-crm#h_3a3344e8-2a6e-4fd8-86be-0da8c121e4ac). >  > You can, however, link one document to several external systems. 
     * Create Linked Object
     * @param param the request object
     */
    public createLinkedObject(param: DocumentLinkToCRMApiCreateLinkedObjectRequest, options?: ConfigurationOptions): Promise<LinkedObjectCreateResponse> {
        return this.api.createLinkedObject(param.id, param.linkedObjectCreateRequest,  options).toPromise();
    }

    /**
     * Delete a linked object associated with a document.
     * Delete Linked Object
     * @param param the request object
     */
    public deleteLinkedObjectWithHttpInfo(param: DocumentLinkToCRMApiDeleteLinkedObjectRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteLinkedObjectWithHttpInfo(param.id, param.linkedObjectId,  options).toPromise();
    }

    /**
     * Delete a linked object associated with a document.
     * Delete Linked Object
     * @param param the request object
     */
    public deleteLinkedObject(param: DocumentLinkToCRMApiDeleteLinkedObjectRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteLinkedObject(param.id, param.linkedObjectId,  options).toPromise();
    }

    /**
     * Get a list of documents connected to a linked object - an entity from an integration.
     * List Documents by Linked Object
     * @param param the request object
     */
    public listDocumentsByLinkedObjectWithHttpInfo(param: DocumentLinkToCRMApiListDocumentsByLinkedObjectRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<ListDocumentsByLinkedObjectsResponseInner>>> {
        return this.api.listDocumentsByLinkedObjectWithHttpInfo(param.entityId, param.entityType, param.provider, param.orderBy, param.ownerIds,  options).toPromise();
    }

    /**
     * Get a list of documents connected to a linked object - an entity from an integration.
     * List Documents by Linked Object
     * @param param the request object
     */
    public listDocumentsByLinkedObject(param: DocumentLinkToCRMApiListDocumentsByLinkedObjectRequest, options?: ConfigurationOptions): Promise<Array<ListDocumentsByLinkedObjectsResponseInner>> {
        return this.api.listDocumentsByLinkedObject(param.entityId, param.entityType, param.provider, param.orderBy, param.ownerIds,  options).toPromise();
    }

    /**
     * Get a list of linked objects for the document. 
     * List Linked Objects
     * @param param the request object
     */
    public listLinkedObjectsWithHttpInfo(param: DocumentLinkToCRMApiListLinkedObjectsRequest, options?: ConfigurationOptions): Promise<HttpInfo<LinkedObjectListResponse>> {
        return this.api.listLinkedObjectsWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a list of linked objects for the document. 
     * List Linked Objects
     * @param param the request object
     */
    public listLinkedObjects(param: DocumentLinkToCRMApiListLinkedObjectsRequest, options?: ConfigurationOptions): Promise<LinkedObjectListResponse> {
        return this.api.listLinkedObjects(param.id,  options).toPromise();
    }

}

import { ObservableDocumentRecipientsApi } from "./ObservableAPI";
import { DocumentRecipientsApiRequestFactory, DocumentRecipientsApiResponseProcessor} from "../apis/DocumentRecipientsApi";

export interface DocumentRecipientsApiAddDocumentRecipientRequest {
    /**
     * Document UUID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentRecipientsApiaddDocumentRecipient
     */
    id: string
    /**
     * 
     * @type DocumentRecipientCreateRequest
     * @memberof DocumentRecipientsApiaddDocumentRecipient
     */
    documentRecipientCreateRequest: DocumentRecipientCreateRequest
}

export interface DocumentRecipientsApiDeleteDocumentRecipientRequest {
    /**
     * Document UUID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentRecipientsApideleteDocumentRecipient
     */
    id: string
    /**
     * Recipient UUID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentRecipientsApideleteDocumentRecipient
     */
    recipientId: string
}

export interface DocumentRecipientsApiEditDocumentRecipientRequest {
    /**
     * Document UUID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentRecipientsApieditDocumentRecipient
     */
    id: string
    /**
     * Recipient UUID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentRecipientsApieditDocumentRecipient
     */
    recipientId: string
    /**
     * 
     * @type DocumentRecipientEditRequest
     * @memberof DocumentRecipientsApieditDocumentRecipient
     */
    documentRecipientEditRequest: DocumentRecipientEditRequest
}

export interface DocumentRecipientsApiReassignDocumentRecipientRequest {
    /**
     * Document UUID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentRecipientsApireassignDocumentRecipient
     */
    id: string
    /**
     * Recipient UUID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentRecipientsApireassignDocumentRecipient
     */
    recipientId: string
    /**
     * 
     * @type DocumentRecipientCreateRequest
     * @memberof DocumentRecipientsApireassignDocumentRecipient
     */
    documentRecipientCreateRequest: DocumentRecipientCreateRequest
}

export class ObjectDocumentRecipientsApi {
    private api: ObservableDocumentRecipientsApi

    public constructor(configuration: Configuration, requestFactory?: DocumentRecipientsApiRequestFactory, responseProcessor?: DocumentRecipientsApiResponseProcessor) {
        this.api = new ObservableDocumentRecipientsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a CC recipient to a document.  > 🚧 Before you start >  > To add a CC recipient, please ensure that: >  > - You have the \'Can Manage Recipients\' permission. > - This recipient is already created in your contacts. If not, add them using the [Create Contact](https://developers.pandadoc.com/reference/create-contact) endpoint.  To add a new CC recipient to a document, two parameters must be included in the request body:  - `kind`: Set this parameter to `contact` to specify an individual contact. - `id`:  Input the ID of the desired contact.  To retrieve the contact\'s ID, use the [List Contacts](https://developers.pandadoc.com/reference/list-contacts) endpoint to access a list of all contacts, and then locate the desired contact by searching using the name or email address within the returned list.  ### Document status  You can add CC recipients in any document status except for the \'Expired\' (`document.voided`) and \'Declined\' (`document.declined`).  > 📘 Email notification to access the document >  > **Note**: When a document is in one of the following statuses: \'Sent\' (`document.sent`), \'Viewed\' (`document.viewed`), \'Completed\' (`document.completed`), \'Waiting for Payment\' (`document.waiting_pay`), or \'Paid\' (`document.paid`), any added CC recipient will receive an instant notification at their email address, allowing them access to the document. 
     * Add Document Recipient
     * @param param the request object
     */
    public addDocumentRecipientWithHttpInfo(param: DocumentRecipientsApiAddDocumentRecipientRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentRecipientResponse>> {
        return this.api.addDocumentRecipientWithHttpInfo(param.id, param.documentRecipientCreateRequest,  options).toPromise();
    }

    /**
     * Add a CC recipient to a document.  > 🚧 Before you start >  > To add a CC recipient, please ensure that: >  > - You have the \'Can Manage Recipients\' permission. > - This recipient is already created in your contacts. If not, add them using the [Create Contact](https://developers.pandadoc.com/reference/create-contact) endpoint.  To add a new CC recipient to a document, two parameters must be included in the request body:  - `kind`: Set this parameter to `contact` to specify an individual contact. - `id`:  Input the ID of the desired contact.  To retrieve the contact\'s ID, use the [List Contacts](https://developers.pandadoc.com/reference/list-contacts) endpoint to access a list of all contacts, and then locate the desired contact by searching using the name or email address within the returned list.  ### Document status  You can add CC recipients in any document status except for the \'Expired\' (`document.voided`) and \'Declined\' (`document.declined`).  > 📘 Email notification to access the document >  > **Note**: When a document is in one of the following statuses: \'Sent\' (`document.sent`), \'Viewed\' (`document.viewed`), \'Completed\' (`document.completed`), \'Waiting for Payment\' (`document.waiting_pay`), or \'Paid\' (`document.paid`), any added CC recipient will receive an instant notification at their email address, allowing them access to the document. 
     * Add Document Recipient
     * @param param the request object
     */
    public addDocumentRecipient(param: DocumentRecipientsApiAddDocumentRecipientRequest, options?: ConfigurationOptions): Promise<DocumentRecipientResponse> {
        return this.api.addDocumentRecipient(param.id, param.documentRecipientCreateRequest,  options).toPromise();
    }

    /**
     * Remove a recipient from a document.  > 🚧 Before you start >  > Please ensure that you have the \'Can Manage Recipients\' permission.  To remove a recipient from a document, you must specify their ID in the path parameter (note that this is different from their contact\'s ID). The recipient\'s ID can be retrieved via the [Document Details](https://developers.pandadoc.com/reference/document-details) endpoint.  ### Document status  - Removing a signer is only possible when the document is in the \'Draft\' (`document.draft`) status and this action will unassign all fields associated with that signer. - Removing a CC recipient is allowed in any document status except for the \'Expired\' (`document.voided`) and \'Declined\' (`document.declined`). If a CC recipient is removed, their access will be revoked. 
     * Delete Document Recipient
     * @param param the request object
     */
    public deleteDocumentRecipientWithHttpInfo(param: DocumentRecipientsApiDeleteDocumentRecipientRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteDocumentRecipientWithHttpInfo(param.id, param.recipientId,  options).toPromise();
    }

    /**
     * Remove a recipient from a document.  > 🚧 Before you start >  > Please ensure that you have the \'Can Manage Recipients\' permission.  To remove a recipient from a document, you must specify their ID in the path parameter (note that this is different from their contact\'s ID). The recipient\'s ID can be retrieved via the [Document Details](https://developers.pandadoc.com/reference/document-details) endpoint.  ### Document status  - Removing a signer is only possible when the document is in the \'Draft\' (`document.draft`) status and this action will unassign all fields associated with that signer. - Removing a CC recipient is allowed in any document status except for the \'Expired\' (`document.voided`) and \'Declined\' (`document.declined`). If a CC recipient is removed, their access will be revoked. 
     * Delete Document Recipient
     * @param param the request object
     */
    public deleteDocumentRecipient(param: DocumentRecipientsApiDeleteDocumentRecipientRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteDocumentRecipient(param.id, param.recipientId,  options).toPromise();
    }

    /**
     * Modify recipient\'s personal details.  > 🚧 Before you start >  > To edit a recipient, please ensure that you have the \'Can Edit Document\' permission.  Use this endpoint to easily fix typos in a recipient\'s name or email, or to change any other recipient information in a sent document.   > 📘 Please note that changes made to a recipient within a document will also update their `Contact` information. However, these changes will not update information about this recipient in other documents where they have already been added.  ### Document status  - You can edit a signer in the following document statuses:   - \'Draft\' (`document.draft`),   - \'Waiting Approval\' (`document.waiting_approval`),   - \'Approved\' (`document.approved`),   - \'Rejected\' (`document.rejected`),   - \'Sent\' (`document.sent`),   - \'Viewed\' (`document.viewed`), but only until they have signed the document. - You can edit a CC recipient in any document status **except**:   - \'Expired\' (`document.voided`),   - \'Declined\' (`document.declined`).  > 📘 Updating a recipient\'s email after sending a document >  > **Note**: If you update a recipient\'s email address after sending a document, they will receive an instant notification at the new email address, allowing them access to the document. Access via the previous email will be revoked.  ### Restrictions for updating a recipient\'s email  - You cannot change emails of PandaDoc users. - You cannot use the email addresses of existing contacts. If you need to use an email from an existing contact, use the [Change Signer](https://developers.pandadoc.com/reference/change-signer) endpoint to replace a signer with this contact. 
     * Update Document Recipient
     * @param param the request object
     */
    public editDocumentRecipientWithHttpInfo(param: DocumentRecipientsApiEditDocumentRecipientRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.editDocumentRecipientWithHttpInfo(param.id, param.recipientId, param.documentRecipientEditRequest,  options).toPromise();
    }

    /**
     * Modify recipient\'s personal details.  > 🚧 Before you start >  > To edit a recipient, please ensure that you have the \'Can Edit Document\' permission.  Use this endpoint to easily fix typos in a recipient\'s name or email, or to change any other recipient information in a sent document.   > 📘 Please note that changes made to a recipient within a document will also update their `Contact` information. However, these changes will not update information about this recipient in other documents where they have already been added.  ### Document status  - You can edit a signer in the following document statuses:   - \'Draft\' (`document.draft`),   - \'Waiting Approval\' (`document.waiting_approval`),   - \'Approved\' (`document.approved`),   - \'Rejected\' (`document.rejected`),   - \'Sent\' (`document.sent`),   - \'Viewed\' (`document.viewed`), but only until they have signed the document. - You can edit a CC recipient in any document status **except**:   - \'Expired\' (`document.voided`),   - \'Declined\' (`document.declined`).  > 📘 Updating a recipient\'s email after sending a document >  > **Note**: If you update a recipient\'s email address after sending a document, they will receive an instant notification at the new email address, allowing them access to the document. Access via the previous email will be revoked.  ### Restrictions for updating a recipient\'s email  - You cannot change emails of PandaDoc users. - You cannot use the email addresses of existing contacts. If you need to use an email from an existing contact, use the [Change Signer](https://developers.pandadoc.com/reference/change-signer) endpoint to replace a signer with this contact. 
     * Update Document Recipient
     * @param param the request object
     */
    public editDocumentRecipient(param: DocumentRecipientsApiEditDocumentRecipientRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.editDocumentRecipient(param.id, param.recipientId, param.documentRecipientEditRequest,  options).toPromise();
    }

    /**
     * Reassign fields to another signer.  > 🚧 Before you start >  > To change a signer in a document, please ensure that: >  > - You have the \'Can Manage Recipients\' permission. > - New signer is already created in your contacts. If not, add them using the [Create Contact](https://developers.pandadoc.com/reference/create-contact) endpoint.  You can reassign fields to another signer before the original signer has signed the document. You can choose any person except those recipients who have already signed the document.  The endpoint path includes the `recipient_id` of the original signer and the request body must include the following two parameters:  - `kind`: Set this parameter to `contact` to specify an individual contact. - `id`: Input the ID of the contact you want to use as a replacement for the original signer.  To retrieve the contact\'s ID, use the [List Contacts](https://developers.pandadoc.com/reference/list-contacts) endpoint to access a list of all contacts, and then locate the desired contact by searching using the name or email address within the returned list.  Once you execute the call to change the signer, the original signer will be entirely removed from the document. If you wish to retain the original signer as a CC recipient, you can re-add them using the [Add CC Recipient](https://developers.pandadoc.com/reference/add-new-recipient-cc) endpoint.  > 🚧 Pre-filled fields >  > If you change the signer in a document that has already been sent, the signer\'s pre-filled fields will be completely reset. In the \'Draft\' (`document.draft`) status, pre-filled fields will remain. 
     * Change Signer (Reassign Document Recipient)
     * @param param the request object
     */
    public reassignDocumentRecipientWithHttpInfo(param: DocumentRecipientsApiReassignDocumentRecipientRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentRecipientResponse>> {
        return this.api.reassignDocumentRecipientWithHttpInfo(param.id, param.recipientId, param.documentRecipientCreateRequest,  options).toPromise();
    }

    /**
     * Reassign fields to another signer.  > 🚧 Before you start >  > To change a signer in a document, please ensure that: >  > - You have the \'Can Manage Recipients\' permission. > - New signer is already created in your contacts. If not, add them using the [Create Contact](https://developers.pandadoc.com/reference/create-contact) endpoint.  You can reassign fields to another signer before the original signer has signed the document. You can choose any person except those recipients who have already signed the document.  The endpoint path includes the `recipient_id` of the original signer and the request body must include the following two parameters:  - `kind`: Set this parameter to `contact` to specify an individual contact. - `id`: Input the ID of the contact you want to use as a replacement for the original signer.  To retrieve the contact\'s ID, use the [List Contacts](https://developers.pandadoc.com/reference/list-contacts) endpoint to access a list of all contacts, and then locate the desired contact by searching using the name or email address within the returned list.  Once you execute the call to change the signer, the original signer will be entirely removed from the document. If you wish to retain the original signer as a CC recipient, you can re-add them using the [Add CC Recipient](https://developers.pandadoc.com/reference/add-new-recipient-cc) endpoint.  > 🚧 Pre-filled fields >  > If you change the signer in a document that has already been sent, the signer\'s pre-filled fields will be completely reset. In the \'Draft\' (`document.draft`) status, pre-filled fields will remain. 
     * Change Signer (Reassign Document Recipient)
     * @param param the request object
     */
    public reassignDocumentRecipient(param: DocumentRecipientsApiReassignDocumentRecipientRequest, options?: ConfigurationOptions): Promise<DocumentRecipientResponse> {
        return this.api.reassignDocumentRecipient(param.id, param.recipientId, param.documentRecipientCreateRequest,  options).toPromise();
    }

}

import { ObservableDocumentRemindersApi } from "./ObservableAPI";
import { DocumentRemindersApiRequestFactory, DocumentRemindersApiResponseProcessor} from "../apis/DocumentRemindersApi";

export interface DocumentRemindersApiCreateManualReminderRequest {
    /**
     * The UUID of the document.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentRemindersApicreateManualReminder
     */
    documentId: string
    /**
     * 
     * @type DocumentSendManualReminderRequest
     * @memberof DocumentRemindersApicreateManualReminder
     */
    documentSendManualReminderRequest: DocumentSendManualReminderRequest
}

export interface DocumentRemindersApiGetDocumentAutoReminderSettingsRequest {
    /**
     * The UUID of the document.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentRemindersApigetDocumentAutoReminderSettings
     */
    documentId: string
}

export interface DocumentRemindersApiStatusDocumentAutoReminderRequest {
    /**
     * The UUID of the document.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentRemindersApistatusDocumentAutoReminder
     */
    documentId: string
}

export interface DocumentRemindersApiUpdateDocumentAutoReminderSettingsRequest {
    /**
     * The UUID of the document.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentRemindersApiupdateDocumentAutoReminderSettings
     */
    documentId: string
    /**
     * 
     * @type UpdateDocumentAutoRemindersRequest
     * @memberof DocumentRemindersApiupdateDocumentAutoReminderSettings
     */
    updateDocumentAutoRemindersRequest: UpdateDocumentAutoRemindersRequest
}

export class ObjectDocumentRemindersApi {
    private api: ObservableDocumentRemindersApi

    public constructor(configuration: Configuration, requestFactory?: DocumentRemindersApiRequestFactory, responseProcessor?: DocumentRemindersApiResponseProcessor) {
        this.api = new ObservableDocumentRemindersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sends manual reminders to one or more recipients of a specified document. 
     * Send Manual Reminder
     * @param param the request object
     */
    public createManualReminderWithHttpInfo(param: DocumentRemindersApiCreateManualReminderRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentSendManualReminder200Response>> {
        return this.api.createManualReminderWithHttpInfo(param.documentId, param.documentSendManualReminderRequest,  options).toPromise();
    }

    /**
     * Sends manual reminders to one or more recipients of a specified document. 
     * Send Manual Reminder
     * @param param the request object
     */
    public createManualReminder(param: DocumentRemindersApiCreateManualReminderRequest, options?: ConfigurationOptions): Promise<DocumentSendManualReminder200Response> {
        return this.api.createManualReminder(param.documentId, param.documentSendManualReminderRequest,  options).toPromise();
    }

    /**
     * Retrieves the current auto reminder configuration for a specified document. 
     * Document Auto Reminder Settings
     * @param param the request object
     */
    public getDocumentAutoReminderSettingsWithHttpInfo(param: DocumentRemindersApiGetDocumentAutoReminderSettingsRequest, options?: ConfigurationOptions): Promise<HttpInfo<AutoReminders>> {
        return this.api.getDocumentAutoReminderSettingsWithHttpInfo(param.documentId,  options).toPromise();
    }

    /**
     * Retrieves the current auto reminder configuration for a specified document. 
     * Document Auto Reminder Settings
     * @param param the request object
     */
    public getDocumentAutoReminderSettings(param: DocumentRemindersApiGetDocumentAutoReminderSettingsRequest, options?: ConfigurationOptions): Promise<AutoReminders> {
        return this.api.getDocumentAutoReminderSettings(param.documentId,  options).toPromise();
    }

    /**
     * Retrieves the current auto reminder status per recipient for a specified document. Recipients who could not receive reminders due to validations (recipient groups, non-signers, etc.) will be skipped and not included in the response. 
     * Document Auto Reminder Status
     * @param param the request object
     */
    public statusDocumentAutoReminderWithHttpInfo(param: DocumentRemindersApiStatusDocumentAutoReminderRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentAutoRemindersResponse>> {
        return this.api.statusDocumentAutoReminderWithHttpInfo(param.documentId,  options).toPromise();
    }

    /**
     * Retrieves the current auto reminder status per recipient for a specified document. Recipients who could not receive reminders due to validations (recipient groups, non-signers, etc.) will be skipped and not included in the response. 
     * Document Auto Reminder Status
     * @param param the request object
     */
    public statusDocumentAutoReminder(param: DocumentRemindersApiStatusDocumentAutoReminderRequest, options?: ConfigurationOptions): Promise<DocumentAutoRemindersResponse> {
        return this.api.statusDocumentAutoReminder(param.documentId,  options).toPromise();
    }

    /**
     * Configures automatic reminders for document recipients.  These reminders are sent after the document\'s initial dispatch.  Settings include enabling reminders, delivery method (email/SMS), initial delay,  and recurrence frequency. 
     * Update Document Auto Reminder Settings
     * @param param the request object
     */
    public updateDocumentAutoReminderSettingsWithHttpInfo(param: DocumentRemindersApiUpdateDocumentAutoReminderSettingsRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpdateDocumentAutoRemindersResponse>> {
        return this.api.updateDocumentAutoReminderSettingsWithHttpInfo(param.documentId, param.updateDocumentAutoRemindersRequest,  options).toPromise();
    }

    /**
     * Configures automatic reminders for document recipients.  These reminders are sent after the document\'s initial dispatch.  Settings include enabling reminders, delivery method (email/SMS), initial delay,  and recurrence frequency. 
     * Update Document Auto Reminder Settings
     * @param param the request object
     */
    public updateDocumentAutoReminderSettings(param: DocumentRemindersApiUpdateDocumentAutoReminderSettingsRequest, options?: ConfigurationOptions): Promise<UpdateDocumentAutoRemindersResponse> {
        return this.api.updateDocumentAutoReminderSettings(param.documentId, param.updateDocumentAutoRemindersRequest,  options).toPromise();
    }

}

import { ObservableDocumentSectionsBundlesApi } from "./ObservableAPI";
import { DocumentSectionsBundlesApiRequestFactory, DocumentSectionsBundlesApiResponseProcessor} from "../apis/DocumentSectionsBundlesApi";

export interface DocumentSectionsBundlesApiDeleteSectionRequest {
    /**
     * Specify document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentSectionsBundlesApideleteSection
     */
    documentId: string
    /**
     * Specify section ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentSectionsBundlesApideleteSection
     */
    sectionId: string
}

export interface DocumentSectionsBundlesApiListSectionsRequest {
    /**
     * Document ID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentSectionsBundlesApilistSections
     */
    documentId: string
}

export interface DocumentSectionsBundlesApiSectionDetailsRequest {
    /**
     * Document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentSectionsBundlesApisectionDetails
     */
    documentId: string
    /**
     * Upload ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentSectionsBundlesApisectionDetails
     */
    uploadId: string
}

export interface DocumentSectionsBundlesApiSectionInfoRequest {
    /**
     * Document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentSectionsBundlesApisectionInfo
     */
    documentId: string
    /**
     * Section ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentSectionsBundlesApisectionInfo
     */
    sectionId: string
}

export interface DocumentSectionsBundlesApiUploadSectionRequest {
    /**
     * Document ID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentSectionsBundlesApiuploadSection
     */
    documentId: string
    /**
     * 
     * @type UploadSectionRequest
     * @memberof DocumentSectionsBundlesApiuploadSection
     */
    uploadSectionRequest: UploadSectionRequest
    /**
     * Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID. 
     * Defaults to: undefined
     * @type &#39;document&#39; | &#39;upload&#39;
     * @memberof DocumentSectionsBundlesApiuploadSection
     */
    mergeFieldScope?: 'document' | 'upload'
}

export interface DocumentSectionsBundlesApiUploadSectionWithUploadRequest {
    /**
     * Document ID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentSectionsBundlesApiuploadSectionWithUpload
     */
    documentId: string
    /**
     * Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID. 
     * Defaults to: undefined
     * @type &#39;document&#39; | &#39;upload&#39;
     * @memberof DocumentSectionsBundlesApiuploadSectionWithUpload
     */
    mergeFieldScope?: 'document' | 'upload'
    /**
     * Binary PDF/DocX/RTF File.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof DocumentSectionsBundlesApiuploadSectionWithUpload
     */
    file?: HttpFile
    /**
     * JSON as a multipart/form-data string.
     * Defaults to: undefined
     * @type UploadSectionRequest
     * @memberof DocumentSectionsBundlesApiuploadSectionWithUpload
     */
    data?: UploadSectionRequest
}

export class ObjectDocumentSectionsBundlesApi {
    private api: ObservableDocumentSectionsBundlesApi

    public constructor(configuration: Configuration, requestFactory?: DocumentSectionsBundlesApiRequestFactory, responseProcessor?: DocumentSectionsBundlesApiResponseProcessor) {
        this.api = new ObservableDocumentSectionsBundlesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes selected section from the document.
     * Delete Document Section
     * @param param the request object
     */
    public deleteSectionWithHttpInfo(param: DocumentSectionsBundlesApiDeleteSectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteSectionWithHttpInfo(param.documentId, param.sectionId,  options).toPromise();
    }

    /**
     * Removes selected section from the document.
     * Delete Document Section
     * @param param the request object
     */
    public deleteSection(param: DocumentSectionsBundlesApiDeleteSectionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteSection(param.documentId, param.sectionId,  options).toPromise();
    }

    /**
     * Retrieve information about the sections within a document. 
     * List Document Sections
     * @param param the request object
     */
    public listSectionsWithHttpInfo(param: DocumentSectionsBundlesApiListSectionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<UploadSectionListResponse>> {
        return this.api.listSectionsWithHttpInfo(param.documentId,  options).toPromise();
    }

    /**
     * Retrieve information about the sections within a document. 
     * List Document Sections
     * @param param the request object
     */
    public listSections(param: DocumentSectionsBundlesApiListSectionsRequest, options?: ConfigurationOptions): Promise<UploadSectionListResponse> {
        return this.api.listSections(param.documentId,  options).toPromise();
    }

    /**
     * Receive the upload status of the document and sections by their `upload_id`.  Requesting document section upload status is useful to ensure a document section upload is in the expected state before calling additional API methods.  In response, you receive an array with `sections_uuid`. You can receive information about each section using the [Document Section Info](https://developers.pandadoc.com/reference/document-section-info) endpoint.  ```json     \"section_uuids\": [         \"H8T8CJofGY6JwTsWsPuDEF\",         \"8MwLaU4SaZywqLiDk26mDF\"     ] ```  ## Available Document Section Upload Statuses  The following is a complete list of all possible document statuses returned:  | Document Status                      | Status Description                                                                                                                                                | | :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | | `document_sections_upload.UPLOADED`  | The document section upload process has just been created. It is in processing and will be in `document_sections_upload.PROCESSED` state momentarily.             | | `document_sections_upload.PROCESSED` | The document sections upload is processed and the sections are already created in the document. All aspects of the document sections can be edited in this state. | | `document_sections_upload.ERROR`     | Document section upload procces has been failed. For more information check error details in the response.                                                        | 
     * Document Section Upload Status
     * @param param the request object
     */
    public sectionDetailsWithHttpInfo(param: DocumentSectionsBundlesApiSectionDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<UploadSectionStatusResponse>> {
        return this.api.sectionDetailsWithHttpInfo(param.documentId, param.uploadId,  options).toPromise();
    }

    /**
     * Receive the upload status of the document and sections by their `upload_id`.  Requesting document section upload status is useful to ensure a document section upload is in the expected state before calling additional API methods.  In response, you receive an array with `sections_uuid`. You can receive information about each section using the [Document Section Info](https://developers.pandadoc.com/reference/document-section-info) endpoint.  ```json     \"section_uuids\": [         \"H8T8CJofGY6JwTsWsPuDEF\",         \"8MwLaU4SaZywqLiDk26mDF\"     ] ```  ## Available Document Section Upload Statuses  The following is a complete list of all possible document statuses returned:  | Document Status                      | Status Description                                                                                                                                                | | :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | | `document_sections_upload.UPLOADED`  | The document section upload process has just been created. It is in processing and will be in `document_sections_upload.PROCESSED` state momentarily.             | | `document_sections_upload.PROCESSED` | The document sections upload is processed and the sections are already created in the document. All aspects of the document sections can be edited in this state. | | `document_sections_upload.ERROR`     | Document section upload procces has been failed. For more information check error details in the response.                                                        | 
     * Document Section Upload Status
     * @param param the request object
     */
    public sectionDetails(param: DocumentSectionsBundlesApiSectionDetailsRequest, options?: ConfigurationOptions): Promise<UploadSectionStatusResponse> {
        return this.api.sectionDetails(param.documentId, param.uploadId,  options).toPromise();
    }

    /**
     * Receive information about each section.
     * Document Section Details
     * @param param the request object
     */
    public sectionInfoWithHttpInfo(param: DocumentSectionsBundlesApiSectionInfoRequest, options?: ConfigurationOptions): Promise<HttpInfo<SectionInfoResponse>> {
        return this.api.sectionInfoWithHttpInfo(param.documentId, param.sectionId,  options).toPromise();
    }

    /**
     * Receive information about each section.
     * Document Section Details
     * @param param the request object
     */
    public sectionInfo(param: DocumentSectionsBundlesApiSectionInfoRequest, options?: ConfigurationOptions): Promise<SectionInfoResponse> {
        return this.api.sectionInfo(param.documentId, param.sectionId,  options).toPromise();
    }

    /**
     * With this endpoint, you can add a new section to an existing PandaDoc document (create a bundle).  You can upload a section to the document using a PandaDoc template or a file by URL.  > ⏱️ Document Section creation is a non-blocking (asynchronous) operation >  > The document creation process may take some time. >  > With a successful request, you receive a response with the created upload ID and status `document_sections_upload.uploaded`. After processing completes on our servers, usually a few seconds, the document moves to the `document_sections_upload.PROCESSED` status.  ## Using a PandaDoc template  <details>    > 🚧 Current Version Limitations   >    > Images in sections are currently not supported.    > 📘 Pricing tables note   >    > Each pricing table must have a unique name to populate it with data correctly.    A PandaDoc template is a document template created and edited in the PandaDoc web application. Our [help center](https://support.pandadoc.com/en/articles/9714616-save-time-with-a-reusable-template) has further information on PandaDoc templates.     If you don\'t have any PandaDoc Template yet, you can easily create one by clicking [Copy a Sample PandaDoc template](https://app.pandadoc.com/get-this-template/?pt=public_template&pub=eiC3a6qBVfEfbw7VCYgaeN). This will open the PandaDoc application in a new tab, copy the sample template into your account, and create a new document from the template. </details>  ## Using a File by URL  <details>      Using this endpoint you can add a section to the existing document. The section is created from a file you upload. The file can be a PDF, DocX, or RTF.    > 📘 We\'ve prepared two samples that you can use to test the request.   > Download them here:   >   > - [Download a Sample PDF with Form Fields](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)    > - [Download a Sample PDF with Field Tags](https://5132871.fs1.hubspotusercontent-na1.net/hubfs/5132871/SamplePandaDocPdf_FieldTags_updated.pdf)    > ❗️ Limitations   >    > * This method does not support multiple documents.   > * The maximum supported file size is 50 MB. API returns \"413 Request entity too large\" in case of bigger files.   > * PandaDoc does not support creating document from a PDF with encrypted files (to check whether a file is encrypted or not, try Get info -> Secure: Password Encrypted).    ### PDF Form Fields    PandaDoc recognizes PDF form fields. To enable this feature, pass the optional `parse_form_fields` value as `true` when making a create document section API call. We support Text fields, Dropdowns, and Signature fields.    If you would like to pass additional parameters to configure PDF form fields, use the PDF field name as an optId. You can use a PDF editor such as Adobe Acrobat, Foxit to get and edit field names in your PDF.    [**Download a Sample PDF with Form Fields**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)    ### PDF/DocX/RTF Field Tags    This parsing format allows a word processor such as [Microsoft Word](https://support.office.com/en-us/article/Save-as-PDF-d85416c5-7d77-4fd6-a216-6f4bf7c7c110?ui=en-US&rs=en-US&ad=US) or [Google Docs](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en) to prepare a document and save it in PDF, DocX or RTF format.    Within the text, PandaDoc parses field tags. A field tag starts and ends with brackets. The field tag includes basic information on how to create a form field in the PandaDoc document. The request JSON object `optId` can also extend this information for even greater control.    Here is an example of how the field tag in a PDF/DocX/RTF  is converted to a text field in the PandaDoc document:    ![](https://files.readme.io/38afedf-ex3.png \"ex3.png\")    [**Download a Sample PDF with Field Tags**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf)    #### PDF Field Tag Key    ![](https://files.readme.io/a81fbf1-field-tag-structure.png \"field-tag-structure.png\")    | Number | Key         | Description                                                                                                                                                                                                                                                                               | Example                           |   | :----- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |   | 1      | `fieldType` | Field type from the table documented below                                                                                                                                                                                                                                                | `signature`, or `s` for shorthand |   | 2      | `*`         | Optional `*` denotes the field is not required                                                                                                                                                                                                                                            | `*`                               |   | 3      | `role`      | Role name. Associate the field tag with a recipient role. Roles must be assigned to recipients in the request body. In this case we are using role `s1` to keep the length short and denote the concept of \"signer 1\". `s1` would be the value passed as role in a recipient JSON object. | `s1`                              |   | 4      | `optId`     | Optional field Id. Specify more information about the field tag within the post request by using this id.                                                                                                                                                                                 | `sigBox17`                        |   | 5      | `_____`     | Use underscores to widen the field if desired. The form fields in PandaDoc will scale to the length and size of your field tag.                                                                                                                                                           | `_____`                           |    > 🚧 Role names restrictions   >    > Underscores are not supported in role names for a file with a Field Tag.    #### PDF/DocX/RTF Field Tag Supported Types    | Field Type  | Short Notation | Is PandaDoc Field |   | :---------- | :------------- | :---------------- |   | `textfield` | `t`            | Field             |   | `checkbox`  | `c`            | Field             |   | `signature` | `s`            | Field             |   | `date`      | `d`            | Field             |   | `initials`  | `i`            | Field             |   | `dropdown`  | `dd`           | Field             |    ```json Field Tags Example   \"fields\": {       \"textfield\": {           \"value\": \"Jane\",         \"role\": \"user\"     },     \"dropdown\": {         \"value\": \"opt1\",         \"role\": \"user\",         \"options\":[           \"opt1\",           \"opt2\",           \"opt3\"         ]     },     \"checkbox\": {           \"value\": true,         \"role\": \"user\"     },     \"date\":{         \"value\": \"2022-05-20\",         \"role\": \"user\"     },     \"signature\": {           \"value\": \"\",         \"role\": \"user\"     }   }   ```    > 📘 Fields in PandaDoc   >    > The following article explains how to use Fields: [Everything you need to know about Fields](https://support.pandadoc.com/en/articles/9714583-fields)    ### Signing order    Set a signing order for document section sections created from a file.    ```json   \"recipients\": [       {         \"email\": \"josh@example.com\",       \"first_name\": \"Josh\",       \"last_name\": \"Ron\",       \"role\": \"user\",       \"signing_order\": 1     }   ]   ```    > 📘 Signing order in PandaDoc   >   > The following article explains how to use signing order: [How to use signing order](https://support.pandadoc.com/en/articles/9714771-signing-order)    ### Error handling    | Error description | Type | Root cause |   |---|---|---|   | Document version 1 is not supported. | Validation errors: Form fields | The creation document section is supported only for document version 2 |   | PDF content hasn\'t been processed: document is broken or locked | Processing errors: Failed to process document content | Document converter service can’t process PDF. This may be caused by locked PDF or if it’s broken. |   | Error occurred while parsing PDF field tags. Please try PDF flattening or reach out to support | Processing errors: Field tag / Form field validation error | Doc converter managed to parse PDF and extract tags, but at least 1 of them is invalid (having negative position, for example). Usually we recommend PDF flattening and it helps |   | No role=\'{role}\' for field tag specified in `recipients` found, roles passed were {roles} | Validation errors: Field tags | Role is invalid. When the role specified in field tag is empty or wasn’t provided in a payload for any recipient |   | All field tags within PDF must be declared within `fields`  object of the JSON Payload. No field with optId=\'{optid}\' found in fields object, fields passed were {optids} | Validation errors: Field tags | Label is invalid. Occurs when **optId** specified in field tag is empty or no field with **name = optId** was provided in a payload |   | One of field tags in PDF with type=\'{field}\' doesn\'t have a role | Validation errors: Field tags | Field tag in PDF has no role. One of field tags in PDF with type=% doesn\'t have a role. |   | Role for form field with name=\'{role}\' is not provided in payload | Validation errors: Form fields | Role for form field with ‘name’ is not provided. Occurs when `role` for form field with name=%s  is not provided in payload |   | Field for form field with name=\'{name}\' is not specified in payload, available names are {names} | Validation errors: Form fields | Field ‘name’ is not specified in payload. Occurs when no field with name = form field name was provided in a payload |   | No role=\'{role}\' for form field specified in \'recipients\' found, roles passed were {roles}\" | Validation errors: Form fields | Failed to resolve field actor for `role` in form field with ‘name’.   Occurs when role from the form field is not found in recipient’s from payload |   | Failed to download file from link {url}. | Source errors | Error on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload |   | Failed to download file from link {url} (status code: {status code}) | Source errors | Error with HTTP status code on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload - remote server responded with the HTTP status code |   | Content type=\'{type}\' is not supported, available types are {types} | Source errors | Content type is not supported.   Content type should be one of the following: PDF, ZIP, doc, docx, RTF |   | The maximum file size is exceeded, limit is {limit} MB | Source errors | The file size has exceeded the allowed limits. An error occurred while trying to download a file that is too large (limit is 50M) |        </details> 
     * Create Document Section
     * @param param the request object
     */
    public uploadSectionWithHttpInfo(param: DocumentSectionsBundlesApiUploadSectionRequest, options?: ConfigurationOptions): Promise<HttpInfo<UploadSectionResponse>> {
        return this.api.uploadSectionWithHttpInfo(param.documentId, param.uploadSectionRequest, param.mergeFieldScope,  options).toPromise();
    }

    /**
     * With this endpoint, you can add a new section to an existing PandaDoc document (create a bundle).  You can upload a section to the document using a PandaDoc template or a file by URL.  > ⏱️ Document Section creation is a non-blocking (asynchronous) operation >  > The document creation process may take some time. >  > With a successful request, you receive a response with the created upload ID and status `document_sections_upload.uploaded`. After processing completes on our servers, usually a few seconds, the document moves to the `document_sections_upload.PROCESSED` status.  ## Using a PandaDoc template  <details>    > 🚧 Current Version Limitations   >    > Images in sections are currently not supported.    > 📘 Pricing tables note   >    > Each pricing table must have a unique name to populate it with data correctly.    A PandaDoc template is a document template created and edited in the PandaDoc web application. Our [help center](https://support.pandadoc.com/en/articles/9714616-save-time-with-a-reusable-template) has further information on PandaDoc templates.     If you don\'t have any PandaDoc Template yet, you can easily create one by clicking [Copy a Sample PandaDoc template](https://app.pandadoc.com/get-this-template/?pt=public_template&pub=eiC3a6qBVfEfbw7VCYgaeN). This will open the PandaDoc application in a new tab, copy the sample template into your account, and create a new document from the template. </details>  ## Using a File by URL  <details>      Using this endpoint you can add a section to the existing document. The section is created from a file you upload. The file can be a PDF, DocX, or RTF.    > 📘 We\'ve prepared two samples that you can use to test the request.   > Download them here:   >   > - [Download a Sample PDF with Form Fields](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)    > - [Download a Sample PDF with Field Tags](https://5132871.fs1.hubspotusercontent-na1.net/hubfs/5132871/SamplePandaDocPdf_FieldTags_updated.pdf)    > ❗️ Limitations   >    > * This method does not support multiple documents.   > * The maximum supported file size is 50 MB. API returns \"413 Request entity too large\" in case of bigger files.   > * PandaDoc does not support creating document from a PDF with encrypted files (to check whether a file is encrypted or not, try Get info -> Secure: Password Encrypted).    ### PDF Form Fields    PandaDoc recognizes PDF form fields. To enable this feature, pass the optional `parse_form_fields` value as `true` when making a create document section API call. We support Text fields, Dropdowns, and Signature fields.    If you would like to pass additional parameters to configure PDF form fields, use the PDF field name as an optId. You can use a PDF editor such as Adobe Acrobat, Foxit to get and edit field names in your PDF.    [**Download a Sample PDF with Form Fields**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)    ### PDF/DocX/RTF Field Tags    This parsing format allows a word processor such as [Microsoft Word](https://support.office.com/en-us/article/Save-as-PDF-d85416c5-7d77-4fd6-a216-6f4bf7c7c110?ui=en-US&rs=en-US&ad=US) or [Google Docs](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en) to prepare a document and save it in PDF, DocX or RTF format.    Within the text, PandaDoc parses field tags. A field tag starts and ends with brackets. The field tag includes basic information on how to create a form field in the PandaDoc document. The request JSON object `optId` can also extend this information for even greater control.    Here is an example of how the field tag in a PDF/DocX/RTF  is converted to a text field in the PandaDoc document:    ![](https://files.readme.io/38afedf-ex3.png \"ex3.png\")    [**Download a Sample PDF with Field Tags**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf)    #### PDF Field Tag Key    ![](https://files.readme.io/a81fbf1-field-tag-structure.png \"field-tag-structure.png\")    | Number | Key         | Description                                                                                                                                                                                                                                                                               | Example                           |   | :----- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |   | 1      | `fieldType` | Field type from the table documented below                                                                                                                                                                                                                                                | `signature`, or `s` for shorthand |   | 2      | `*`         | Optional `*` denotes the field is not required                                                                                                                                                                                                                                            | `*`                               |   | 3      | `role`      | Role name. Associate the field tag with a recipient role. Roles must be assigned to recipients in the request body. In this case we are using role `s1` to keep the length short and denote the concept of \"signer 1\". `s1` would be the value passed as role in a recipient JSON object. | `s1`                              |   | 4      | `optId`     | Optional field Id. Specify more information about the field tag within the post request by using this id.                                                                                                                                                                                 | `sigBox17`                        |   | 5      | `_____`     | Use underscores to widen the field if desired. The form fields in PandaDoc will scale to the length and size of your field tag.                                                                                                                                                           | `_____`                           |    > 🚧 Role names restrictions   >    > Underscores are not supported in role names for a file with a Field Tag.    #### PDF/DocX/RTF Field Tag Supported Types    | Field Type  | Short Notation | Is PandaDoc Field |   | :---------- | :------------- | :---------------- |   | `textfield` | `t`            | Field             |   | `checkbox`  | `c`            | Field             |   | `signature` | `s`            | Field             |   | `date`      | `d`            | Field             |   | `initials`  | `i`            | Field             |   | `dropdown`  | `dd`           | Field             |    ```json Field Tags Example   \"fields\": {       \"textfield\": {           \"value\": \"Jane\",         \"role\": \"user\"     },     \"dropdown\": {         \"value\": \"opt1\",         \"role\": \"user\",         \"options\":[           \"opt1\",           \"opt2\",           \"opt3\"         ]     },     \"checkbox\": {           \"value\": true,         \"role\": \"user\"     },     \"date\":{         \"value\": \"2022-05-20\",         \"role\": \"user\"     },     \"signature\": {           \"value\": \"\",         \"role\": \"user\"     }   }   ```    > 📘 Fields in PandaDoc   >    > The following article explains how to use Fields: [Everything you need to know about Fields](https://support.pandadoc.com/en/articles/9714583-fields)    ### Signing order    Set a signing order for document section sections created from a file.    ```json   \"recipients\": [       {         \"email\": \"josh@example.com\",       \"first_name\": \"Josh\",       \"last_name\": \"Ron\",       \"role\": \"user\",       \"signing_order\": 1     }   ]   ```    > 📘 Signing order in PandaDoc   >   > The following article explains how to use signing order: [How to use signing order](https://support.pandadoc.com/en/articles/9714771-signing-order)    ### Error handling    | Error description | Type | Root cause |   |---|---|---|   | Document version 1 is not supported. | Validation errors: Form fields | The creation document section is supported only for document version 2 |   | PDF content hasn\'t been processed: document is broken or locked | Processing errors: Failed to process document content | Document converter service can’t process PDF. This may be caused by locked PDF or if it’s broken. |   | Error occurred while parsing PDF field tags. Please try PDF flattening or reach out to support | Processing errors: Field tag / Form field validation error | Doc converter managed to parse PDF and extract tags, but at least 1 of them is invalid (having negative position, for example). Usually we recommend PDF flattening and it helps |   | No role=\'{role}\' for field tag specified in `recipients` found, roles passed were {roles} | Validation errors: Field tags | Role is invalid. When the role specified in field tag is empty or wasn’t provided in a payload for any recipient |   | All field tags within PDF must be declared within `fields`  object of the JSON Payload. No field with optId=\'{optid}\' found in fields object, fields passed were {optids} | Validation errors: Field tags | Label is invalid. Occurs when **optId** specified in field tag is empty or no field with **name = optId** was provided in a payload |   | One of field tags in PDF with type=\'{field}\' doesn\'t have a role | Validation errors: Field tags | Field tag in PDF has no role. One of field tags in PDF with type=% doesn\'t have a role. |   | Role for form field with name=\'{role}\' is not provided in payload | Validation errors: Form fields | Role for form field with ‘name’ is not provided. Occurs when `role` for form field with name=%s  is not provided in payload |   | Field for form field with name=\'{name}\' is not specified in payload, available names are {names} | Validation errors: Form fields | Field ‘name’ is not specified in payload. Occurs when no field with name = form field name was provided in a payload |   | No role=\'{role}\' for form field specified in \'recipients\' found, roles passed were {roles}\" | Validation errors: Form fields | Failed to resolve field actor for `role` in form field with ‘name’.   Occurs when role from the form field is not found in recipient’s from payload |   | Failed to download file from link {url}. | Source errors | Error on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload |   | Failed to download file from link {url} (status code: {status code}) | Source errors | Error with HTTP status code on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload - remote server responded with the HTTP status code |   | Content type=\'{type}\' is not supported, available types are {types} | Source errors | Content type is not supported.   Content type should be one of the following: PDF, ZIP, doc, docx, RTF |   | The maximum file size is exceeded, limit is {limit} MB | Source errors | The file size has exceeded the allowed limits. An error occurred while trying to download a file that is too large (limit is 50M) |        </details> 
     * Create Document Section
     * @param param the request object
     */
    public uploadSection(param: DocumentSectionsBundlesApiUploadSectionRequest, options?: ConfigurationOptions): Promise<UploadSectionResponse> {
        return this.api.uploadSection(param.documentId, param.uploadSectionRequest, param.mergeFieldScope,  options).toPromise();
    }

    /**
     * With this endpoint, you can add a new section to an existing PandaDoc document (create a bundle). The section is created from a file you upload. The file can be a PDF, DocX, or RTF.  > 📘 We\'ve prepared two samples that you can use to test the request. > Download them here: > > - [Download a Sample PDF with Form Fields](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)  > - [Download a Sample PDF with Field Tags](https://5132871.fs1.hubspotusercontent-na1.net/hubfs/5132871/SamplePandaDocPdf_FieldTags_updated.pdf)   > 🚧 Usage specifics >  > 1. This method uses a `multipart/form-data` request type instead of the `application/json` typically found in the PandaDoc API. This is to accommodate the upload of the included document. > 2. You can send a URL instead of a file in the document creation request.   >    In this case, you need to use the `application/json` content type and add the URL parameter in the body request. As an example, see [Create from public PDF](https://developers.pandadoc.com/docs/create-and-send-a-document-from-a-publicly-available-pdf) guide for more details. > 3. A file you upload is not stored in your PandaDoc account, so you have to upload it with every request.  > ❗️ Limitations >  > 1. This method does not support multiple documents. > 2. The maximum supported file size is 50 MB. API returns \"413 Request entity too large\" in case of bigger files. > 3. PandaDoc does not support creating document from a PDF with encrypted files (to check whether a file is encrypted or not, try Get info -> Secure: Password Encrypted).  > ⏱️ Document Section creation is a non-blocking (asynchronous) operation >  > The document creation process may take some time. >  > With a successful request, you receive a response with the created upload ID and status `document_sections_upload.uploaded`. After processing completes on our servers, usually a few seconds, the document moves to the `document_sections_upload.PROCESSED` status.  ## PDF Form Fields  PandaDoc recognizes PDF form fields. To enable this feature, pass the optional `parse_form_fields` value as `true` when making a create document section API call. We support Text fields, Dropdowns, and Signature fields.  If you would like to pass additional parameters to configure PDF form fields, use the PDF field name as an optId. You can use a PDF editor such as Adobe Acrobat, Foxit to get and edit field names in your PDF.  [**Download a Sample PDF with Form Fields**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)  ## PDF/DocX/RTF Field Tags  This parsing format allows a word processor such as [Microsoft Word](https://support.office.com/en-us/article/Save-as-PDF-d85416c5-7d77-4fd6-a216-6f4bf7c7c110?ui=en-US&rs=en-US&ad=US) or [Google Docs](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en) to prepare a document and save it in PDF, DocX or RTF format.  Within the text, PandaDoc parses field tags. A field tag starts and ends with brackets. The field tag includes basic information on how to create a form field in the PandaDoc document. The request JSON object `optId` can also extend this information for even greater control.  Here is an example of how the field tag in a PDF/DocX/RTF  is converted to a text field in the PandaDoc document:  ![](https://files.readme.io/38afedf-ex3.png \"ex3.png\")  [**Download a Sample PDF with Field Tags**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf)  <details>    ### PDF Field Tag Key    ![](https://files.readme.io/a81fbf1-field-tag-structure.png \"field-tag-structure.png\")    | Number | Key         | Description                                                                                                                                                                                                                                                                               | Example                           |   | :----- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |   | 1      | `fieldType` | Field type from the table documented below                                                                                                                                                                                                                                                | `signature`, or `s` for shorthand |   | 2      | `*`         | Optional `*` denotes the field is not required                                                                                                                                                                                                                                            | `*`                               |   | 3      | `role`      | Role name. Associate the field tag with a recipient role. Roles must be assigned to recipients in the request body. In this case we are using role `s1` to keep the length short and denote the concept of \"signer 1\". `s1` would be the value passed as role in a recipient JSON object. | `s1`                              |   | 4      | `optId`     | Optional field Id. Specify more information about the field tag within the post request by using this id.                                                                                                                                                                                 | `sigBox17`                        |   | 5      | `_____`     | Use underscores to widen the field if desired. The form fields in PandaDoc will scale to the length and size of your field tag.                                                                                                                                                           | `_____`                           |    > 🚧 Role names restrictions   >    > Underscores are not supported in role names for a file with a Field Tag.    ### PDF/DocX/RTF Field Tag Supported Types    | Field Type  | Short Notation | Is PandaDoc Field |   | :---------- | :------------- | :---------------- |   | `textfield` | `t`            | Field             |   | `checkbox`  | `c`            | Field             |   | `signature` | `s`            | Field             |   | `date`      | `d`            | Field             |   | `initials`  | `i`            | Field             |   | `dropdown`  | `dd`           | Field             |    > 📘 Fields in PandaDoc   >    > The following article explains how to use Fields: [Everything you need to know about Fields](https://support.pandadoc.com/en/articles/9714583-fields)    ```json Field Tags Example   \"fields\": {             \"textfield\": {                 \"value\": \"Jane\",               \"role\": \"user\"           },           \"dropdown\": {               \"value\": \"opt1\",               \"role\": \"user\",               \"options\":[                 \"opt1\",                 \"opt2\",                 \"opt3\"               ]           },           \"checkbox\": {                 \"value\": true,               \"role\": \"user\"           },           \"date\":{               \"value\": \"2022-05-20\",               \"role\": \"user\"           },           \"signature\": {                 \"value\": \"\",               \"role\": \"user\"           }       }   ```  </details>  ## Signing order  Set a signing order for document section sections created from a file.  ```json \"recipients\": [     {       \"email\": \"josh@example.com\",     \"first_name\": \"Josh\",     \"last_name\": \"Ron\",     \"role\": \"user\",     \"signing_order\": 1   } ] ```  ## Error handling  | Error description | Type | Root cause | |---|---|---| | Document version 1 is not supported. | Validation errors: Form fields | The creation document section is supported only for document version 2 | | PDF content hasn\'t been processed: document is broken or locked | Processing errors: Failed to process document content | Document converter service can’t process PDF. This may be caused by locked PDF or if it’s broken. | | Error occurred while parsing PDF field tags. Please try PDF flattening or reach out to support | Processing errors: Field tag / Form field validation error | Doc converter managed to parse PDF and extract tags, but at least 1 of them is invalid (having negative position, for example). Usually we recommend PDF flattening and it helps | | No role=\'{role}\' for field tag specified in `recipients` found, roles passed were {roles} | Validation errors: Field tags | Role is invalid. When the role specified in field tag is empty or wasn’t provided in a payload for any recipient | | All field tags within PDF must be declared within `fields`  object of the JSON Payload. No field with optId=\'{optid}\' found in fields object, fields passed were {optids} | Validation errors: Field tags | Label is invalid. Occurs when **optId** specified in field tag is empty or no field with **name = optId** was provided in a payload | | One of field tags in PDF with type=\'{field}\' doesn\'t have a role | Validation errors: Field tags | Field tag in PDF has no role. One of field tags in PDF with type=% doesn\'t have a role. | | Role for form field with name=\'{role}\' is not provided in payload | Validation errors: Form fields | Role for form field with ‘name’ is not provided. Occurs when `role` for form field with name=%s  is not provided in payload | | Field for form field with name=\'{name}\' is not specified in payload, available names are {names} | Validation errors: Form fields | Field ‘name’ is not specified in payload. Occurs when no field with name = form field name was provided in a payload | | No role=\'{role}\' for form field specified in \'recipients\' found, roles passed were {roles}\" | Validation errors: Form fields | Failed to resolve field actor for `role` in form field with ‘name’.   Occurs when role from the form field is not found in recipient’s from payload | | Failed to download file from link {url}. | Source errors | Error on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload | | Failed to download file from link {url} (status code: {status code}) | Source errors | Error with HTTP status code on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload - remote server responded with the HTTP status code | | Content type=\'{type}\' is not supported, available types are {types} | Source errors | Content type is not supported.   Content type should be one of the following: PDF, ZIP, doc, docx, RTF | | The maximum file size is exceeded, limit is {limit} MB | Source errors | The file size has exceeded the allowed limits. An error occurred while trying to download a file that is too large (limit is 50M) | 
     * Create Document Section from File Upload
     * @param param the request object
     */
    public uploadSectionWithUploadWithHttpInfo(param: DocumentSectionsBundlesApiUploadSectionWithUploadRequest, options?: ConfigurationOptions): Promise<HttpInfo<UploadSectionResponse>> {
        return this.api.uploadSectionWithUploadWithHttpInfo(param.documentId, param.mergeFieldScope, param.file, param.data,  options).toPromise();
    }

    /**
     * With this endpoint, you can add a new section to an existing PandaDoc document (create a bundle). The section is created from a file you upload. The file can be a PDF, DocX, or RTF.  > 📘 We\'ve prepared two samples that you can use to test the request. > Download them here: > > - [Download a Sample PDF with Form Fields](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)  > - [Download a Sample PDF with Field Tags](https://5132871.fs1.hubspotusercontent-na1.net/hubfs/5132871/SamplePandaDocPdf_FieldTags_updated.pdf)   > 🚧 Usage specifics >  > 1. This method uses a `multipart/form-data` request type instead of the `application/json` typically found in the PandaDoc API. This is to accommodate the upload of the included document. > 2. You can send a URL instead of a file in the document creation request.   >    In this case, you need to use the `application/json` content type and add the URL parameter in the body request. As an example, see [Create from public PDF](https://developers.pandadoc.com/docs/create-and-send-a-document-from-a-publicly-available-pdf) guide for more details. > 3. A file you upload is not stored in your PandaDoc account, so you have to upload it with every request.  > ❗️ Limitations >  > 1. This method does not support multiple documents. > 2. The maximum supported file size is 50 MB. API returns \"413 Request entity too large\" in case of bigger files. > 3. PandaDoc does not support creating document from a PDF with encrypted files (to check whether a file is encrypted or not, try Get info -> Secure: Password Encrypted).  > ⏱️ Document Section creation is a non-blocking (asynchronous) operation >  > The document creation process may take some time. >  > With a successful request, you receive a response with the created upload ID and status `document_sections_upload.uploaded`. After processing completes on our servers, usually a few seconds, the document moves to the `document_sections_upload.PROCESSED` status.  ## PDF Form Fields  PandaDoc recognizes PDF form fields. To enable this feature, pass the optional `parse_form_fields` value as `true` when making a create document section API call. We support Text fields, Dropdowns, and Signature fields.  If you would like to pass additional parameters to configure PDF form fields, use the PDF field name as an optId. You can use a PDF editor such as Adobe Acrobat, Foxit to get and edit field names in your PDF.  [**Download a Sample PDF with Form Fields**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)  ## PDF/DocX/RTF Field Tags  This parsing format allows a word processor such as [Microsoft Word](https://support.office.com/en-us/article/Save-as-PDF-d85416c5-7d77-4fd6-a216-6f4bf7c7c110?ui=en-US&rs=en-US&ad=US) or [Google Docs](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en) to prepare a document and save it in PDF, DocX or RTF format.  Within the text, PandaDoc parses field tags. A field tag starts and ends with brackets. The field tag includes basic information on how to create a form field in the PandaDoc document. The request JSON object `optId` can also extend this information for even greater control.  Here is an example of how the field tag in a PDF/DocX/RTF  is converted to a text field in the PandaDoc document:  ![](https://files.readme.io/38afedf-ex3.png \"ex3.png\")  [**Download a Sample PDF with Field Tags**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf)  <details>    ### PDF Field Tag Key    ![](https://files.readme.io/a81fbf1-field-tag-structure.png \"field-tag-structure.png\")    | Number | Key         | Description                                                                                                                                                                                                                                                                               | Example                           |   | :----- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |   | 1      | `fieldType` | Field type from the table documented below                                                                                                                                                                                                                                                | `signature`, or `s` for shorthand |   | 2      | `*`         | Optional `*` denotes the field is not required                                                                                                                                                                                                                                            | `*`                               |   | 3      | `role`      | Role name. Associate the field tag with a recipient role. Roles must be assigned to recipients in the request body. In this case we are using role `s1` to keep the length short and denote the concept of \"signer 1\". `s1` would be the value passed as role in a recipient JSON object. | `s1`                              |   | 4      | `optId`     | Optional field Id. Specify more information about the field tag within the post request by using this id.                                                                                                                                                                                 | `sigBox17`                        |   | 5      | `_____`     | Use underscores to widen the field if desired. The form fields in PandaDoc will scale to the length and size of your field tag.                                                                                                                                                           | `_____`                           |    > 🚧 Role names restrictions   >    > Underscores are not supported in role names for a file with a Field Tag.    ### PDF/DocX/RTF Field Tag Supported Types    | Field Type  | Short Notation | Is PandaDoc Field |   | :---------- | :------------- | :---------------- |   | `textfield` | `t`            | Field             |   | `checkbox`  | `c`            | Field             |   | `signature` | `s`            | Field             |   | `date`      | `d`            | Field             |   | `initials`  | `i`            | Field             |   | `dropdown`  | `dd`           | Field             |    > 📘 Fields in PandaDoc   >    > The following article explains how to use Fields: [Everything you need to know about Fields](https://support.pandadoc.com/en/articles/9714583-fields)    ```json Field Tags Example   \"fields\": {             \"textfield\": {                 \"value\": \"Jane\",               \"role\": \"user\"           },           \"dropdown\": {               \"value\": \"opt1\",               \"role\": \"user\",               \"options\":[                 \"opt1\",                 \"opt2\",                 \"opt3\"               ]           },           \"checkbox\": {                 \"value\": true,               \"role\": \"user\"           },           \"date\":{               \"value\": \"2022-05-20\",               \"role\": \"user\"           },           \"signature\": {                 \"value\": \"\",               \"role\": \"user\"           }       }   ```  </details>  ## Signing order  Set a signing order for document section sections created from a file.  ```json \"recipients\": [     {       \"email\": \"josh@example.com\",     \"first_name\": \"Josh\",     \"last_name\": \"Ron\",     \"role\": \"user\",     \"signing_order\": 1   } ] ```  ## Error handling  | Error description | Type | Root cause | |---|---|---| | Document version 1 is not supported. | Validation errors: Form fields | The creation document section is supported only for document version 2 | | PDF content hasn\'t been processed: document is broken or locked | Processing errors: Failed to process document content | Document converter service can’t process PDF. This may be caused by locked PDF or if it’s broken. | | Error occurred while parsing PDF field tags. Please try PDF flattening or reach out to support | Processing errors: Field tag / Form field validation error | Doc converter managed to parse PDF and extract tags, but at least 1 of them is invalid (having negative position, for example). Usually we recommend PDF flattening and it helps | | No role=\'{role}\' for field tag specified in `recipients` found, roles passed were {roles} | Validation errors: Field tags | Role is invalid. When the role specified in field tag is empty or wasn’t provided in a payload for any recipient | | All field tags within PDF must be declared within `fields`  object of the JSON Payload. No field with optId=\'{optid}\' found in fields object, fields passed were {optids} | Validation errors: Field tags | Label is invalid. Occurs when **optId** specified in field tag is empty or no field with **name = optId** was provided in a payload | | One of field tags in PDF with type=\'{field}\' doesn\'t have a role | Validation errors: Field tags | Field tag in PDF has no role. One of field tags in PDF with type=% doesn\'t have a role. | | Role for form field with name=\'{role}\' is not provided in payload | Validation errors: Form fields | Role for form field with ‘name’ is not provided. Occurs when `role` for form field with name=%s  is not provided in payload | | Field for form field with name=\'{name}\' is not specified in payload, available names are {names} | Validation errors: Form fields | Field ‘name’ is not specified in payload. Occurs when no field with name = form field name was provided in a payload | | No role=\'{role}\' for form field specified in \'recipients\' found, roles passed were {roles}\" | Validation errors: Form fields | Failed to resolve field actor for `role` in form field with ‘name’.   Occurs when role from the form field is not found in recipient’s from payload | | Failed to download file from link {url}. | Source errors | Error on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload | | Failed to download file from link {url} (status code: {status code}) | Source errors | Error with HTTP status code on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload - remote server responded with the HTTP status code | | Content type=\'{type}\' is not supported, available types are {types} | Source errors | Content type is not supported.   Content type should be one of the following: PDF, ZIP, doc, docx, RTF | | The maximum file size is exceeded, limit is {limit} MB | Source errors | The file size has exceeded the allowed limits. An error occurred while trying to download a file that is too large (limit is 50M) | 
     * Create Document Section from File Upload
     * @param param the request object
     */
    public uploadSectionWithUpload(param: DocumentSectionsBundlesApiUploadSectionWithUploadRequest, options?: ConfigurationOptions): Promise<UploadSectionResponse> {
        return this.api.uploadSectionWithUpload(param.documentId, param.mergeFieldScope, param.file, param.data,  options).toPromise();
    }

}

import { ObservableDocumentSettingsApi } from "./ObservableAPI";
import { DocumentSettingsApiRequestFactory, DocumentSettingsApiResponseProcessor} from "../apis/DocumentSettingsApi";

export interface DocumentSettingsApiDocumentSettingsGetRequest {
    /**
     * Unique identifier of the document to retrieve settings for.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentSettingsApidocumentSettingsGet
     */
    documentId: string
}

export interface DocumentSettingsApiDocumentSettingsUpdateRequest {
    /**
     * Unique identifier of the document to update settings for.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentSettingsApidocumentSettingsUpdate
     */
    documentId: string
    /**
     * 
     * @type UpdateDocumentSettingsRequest
     * @memberof DocumentSettingsApidocumentSettingsUpdate
     */
    updateDocumentSettingsRequest: UpdateDocumentSettingsRequest
}

export class ObjectDocumentSettingsApi {
    private api: ObservableDocumentSettingsApi

    public constructor(configuration: Configuration, requestFactory?: DocumentSettingsApiRequestFactory, responseProcessor?: DocumentSettingsApiResponseProcessor) {
        this.api = new ObservableDocumentSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the settings for a specified document. Supported fields: language, qualified_electronic_signature, expires_in (in days). 
     * Get document settings
     * @param param the request object
     */
    public documentSettingsGetWithHttpInfo(param: DocumentSettingsApiDocumentSettingsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentSettingsResponse>> {
        return this.api.documentSettingsGetWithHttpInfo(param.documentId,  options).toPromise();
    }

    /**
     * Retrieves the settings for a specified document. Supported fields: language, qualified_electronic_signature, expires_in (in days). 
     * Get document settings
     * @param param the request object
     */
    public documentSettingsGet(param: DocumentSettingsApiDocumentSettingsGetRequest, options?: ConfigurationOptions): Promise<DocumentSettingsResponse> {
        return this.api.documentSettingsGet(param.documentId,  options).toPromise();
    }

    /**
     * Updates the settings for a specified document. Supported fields: language, qualified_electronic_signature, expires_in (in days). 
     * Update document settings
     * @param param the request object
     */
    public documentSettingsUpdateWithHttpInfo(param: DocumentSettingsApiDocumentSettingsUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentSettingsResponse>> {
        return this.api.documentSettingsUpdateWithHttpInfo(param.documentId, param.updateDocumentSettingsRequest,  options).toPromise();
    }

    /**
     * Updates the settings for a specified document. Supported fields: language, qualified_electronic_signature, expires_in (in days). 
     * Update document settings
     * @param param the request object
     */
    public documentSettingsUpdate(param: DocumentSettingsApiDocumentSettingsUpdateRequest, options?: ConfigurationOptions): Promise<DocumentSettingsResponse> {
        return this.api.documentSettingsUpdate(param.documentId, param.updateDocumentSettingsRequest,  options).toPromise();
    }

}

import { ObservableDocumentsApi } from "./ObservableAPI";
import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";

export interface DocumentsApiAppendContentLibraryItemToDocumentRequest {
    /**
     * Specify document id.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApiappendContentLibraryItemToDocument
     */
    id: string
    /**
     * 
     * @type AppendCLIDataRequest
     * @memberof DocumentsApiappendContentLibraryItemToDocument
     */
    appendCLIDataRequest: AppendCLIDataRequest
}

export interface DocumentsApiChangeDocumentStatusRequest {
    /**
     * Specify document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApichangeDocumentStatus
     */
    id: string
    /**
     * 
     * @type DocumentStatusChangeRequest
     * @memberof DocumentsApichangeDocumentStatus
     */
    documentStatusChangeRequest: DocumentStatusChangeRequest
}

export interface DocumentsApiChangeDocumentStatusWithUploadRequest {
    /**
     * Specify document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApichangeDocumentStatusWithUpload
     */
    id: string
    /**
     * Binary attachment file
     * Defaults to: undefined
     * @type HttpFile
     * @memberof DocumentsApichangeDocumentStatusWithUpload
     */
    file?: HttpFile
    /**
     * JSON as a multipart/form-data string.
     * Defaults to: undefined
     * @type DocumentStatusChangeRequest
     * @memberof DocumentsApichangeDocumentStatusWithUpload
     */
    data?: DocumentStatusChangeRequest
}

export interface DocumentsApiCreateDocumentRequest {
    /**
     * 
     * @type DocumentCreateRequest
     * @memberof DocumentsApicreateDocument
     */
    documentCreateRequest: DocumentCreateRequest
    /**
     * Set this parameter as &#x60;ev1&#x60; if you want to create a document from PDF with Classic Editor when both editors are enabled for the workspace.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApicreateDocument
     */
    editorVer?: string
    /**
     * Set this parameter as &#x60;yes&#x60; or &#x60;1&#x60; or &#x60;true&#x60; (only when upload pdf with form fields) if you want to  respect form fields properties, like &#x60;required&#x60;.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApicreateDocument
     */
    useFormFieldProperties?: string
}

export interface DocumentsApiCreateDocumentEditingSessionRequest {
    /**
     * Document ID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApicreateDocumentEditingSession
     */
    id: string
    /**
     * 
     * @type EditingSessionRequest
     * @memberof DocumentsApicreateDocumentEditingSession
     */
    editingSessionRequest: EditingSessionRequest
}

export interface DocumentsApiCreateDocumentFromUploadRequest {
    /**
     * Set this parameter as &#x60;ev1&#x60; if you want to create a document from PDF with Classic Editor when both editors are enabled for the workspace.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApicreateDocumentFromUpload
     */
    editorVer?: string
    /**
     * Set this parameter as &#x60;yes&#x60; or &#x60;1&#x60; or &#x60;true&#x60; (only when upload pdf with form fields) if you want to  respect form fields properties, like &#x60;required&#x60;.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApicreateDocumentFromUpload
     */
    useFormFieldProperties?: string
    /**
     * Binary PDF File
     * Defaults to: undefined
     * @type HttpFile
     * @memberof DocumentsApicreateDocumentFromUpload
     */
    file?: HttpFile
    /**
     * 
     * Defaults to: undefined
     * @type DocumentCreateByPdfRequest
     * @memberof DocumentsApicreateDocumentFromUpload
     */
    data?: DocumentCreateByPdfRequest
}

export interface DocumentsApiCreateDocumentLinkRequest {
    /**
     * Document ID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApicreateDocumentLink
     */
    id: string
    /**
     * 
     * @type DocumentCreateLinkRequest
     * @memberof DocumentsApicreateDocumentLink
     */
    documentCreateLinkRequest: DocumentCreateLinkRequest
}

export interface DocumentsApiCreateExportDocxTaskRequest {
    /**
     * Specify document id.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApicreateExportDocxTask
     */
    documentId: string
}

export interface DocumentsApiDeleteDocumentRequest {
    /**
     * Document ID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApideleteDocument
     */
    id: string
}

export interface DocumentsApiDetailsDocumentRequest {
    /**
     * Document ID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidetailsDocument
     */
    id: string
}

export interface DocumentsApiDocumentESignDisclosureRequest {
    /**
     * The UUID of the document.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidocumentESignDisclosure
     */
    documentId: string
}

export interface DocumentsApiDocumentMoveToFolderRequest {
    /**
     * Specify document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidocumentMoveToFolder
     */
    id: string
    /**
     * Specify folder ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidocumentMoveToFolder
     */
    folderId: string
}

export interface DocumentsApiDocumentRevertToDraftRequest {
    /**
     * Specify document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidocumentRevertToDraft
     */
    id: string
}

export interface DocumentsApiDownloadDocumentRequest {
    /**
     * Specify document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidownloadDocument
     */
    id: string
    /**
     * HEX code (for example &#x60;#FF5733&#x60;).
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidownloadDocument
     */
    watermarkColor?: string
    /**
     * Font size of the watermark.
     * Defaults to: undefined
     * @type number
     * @memberof DocumentsApidownloadDocument
     */
    watermarkFontSize?: number
    /**
     * In range 0.0-1.0
     * Defaults to: undefined
     * @type number
     * @memberof DocumentsApidownloadDocument
     */
    watermarkOpacity?: number
    /**
     * Specify watermark text.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidownloadDocument
     */
    watermarkText?: string
    /**
     * Download document bundle as a zip-archive of separate PDFs (1 file per section).
     * Defaults to: false
     * @type boolean
     * @memberof DocumentsApidownloadDocument
     */
    separateFiles?: boolean
}

export interface DocumentsApiDownloadProtectedDocumentRequest {
    /**
     * Specify document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApidownloadProtectedDocument
     */
    id: string
    /**
     * Download document bundle as a zip-archive of separate PDFs (1 file per section).
     * Defaults to: false
     * @type boolean
     * @memberof DocumentsApidownloadProtectedDocument
     */
    separateFiles?: boolean
}

export interface DocumentsApiGetDocxExportTaskRequest {
    /**
     * Specify document id.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApigetDocxExportTask
     */
    documentId: string
    /**
     * Specify Task id.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApigetDocxExportTask
     */
    taskId: string
}

export interface DocumentsApiListDocumentsRequest {
    /**
     * Filters by parent template. This Parameter can\&#39;t be used with form_id.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    templateId?: string
    /**
     * Filters by parent form. This parameter can\&#39;t be used with template_id.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    formId?: string
    /**
     * Filters by the folder where the documents are stored.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    folderUuid?: string
    /**
     * Filters by recipient or approver with this \&#39;contact_id\&#39;.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    contactId?: string
    /**
     * Limits the size of the response. Default is 50 documents, maximum is 100 documents.
     * Defaults to: undefined
     * @type number
     * @memberof DocumentsApilistDocuments
     */
    count?: number
    /**
     * Paginates the search result. Increase value to get the next page of results.
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof DocumentsApilistDocuments
     */
    page?: number
    /**
     * Defines the sorting of the result. Use &#x60;date_created&#x60; for ASC and &#x60;-date_created&#x60; for DESC sorting.
     * Defaults to: undefined
     * @type DocumentOrderingFieldsEnum
     * @memberof DocumentsApilistDocuments
     */
    orderBy?: DocumentOrderingFieldsEnum
    /**
     * Limits results to the documents with the &#x60;date_created&#x60; greater than or equal to this value.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    createdFrom?: string
    /**
     * Limits results to the documents with the &#x60;date_created&#x60; less than this value.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    createdTo?: string
    /**
     * Returns only the deleted documents.
     * Defaults to: undefined
     * @type boolean
     * @memberof DocumentsApilistDocuments
     */
    deleted?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    id?: string
    /**
     * Limits results to the documents with the &#x60;date_completed&#x60; greater than or equal to this value.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    completedFrom?: string
    /**
     * Limits results to the documents with the &#x60;date_completed&#x60; less than this value.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    completedTo?: string
    /**
     * Filter documents by the owner\&#39;s \&#39;membership_id\&#39;.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    membershipId?: string
    /**
     * Filters documents by metadata. Pass metadata in the format of &#x60;metadata_{metadata-key}&#x3D;{metadata-value}&#x60; such as &#x60;metadata_opportunity_id&#x3D;2181432&#x60;. The &#x60;metadata_&#x60; prefix is always required.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof DocumentsApilistDocuments
     */
    metadata?: Array<string>
    /**
     * Limits results to the documents with the &#x60;date_modified&#x60; greater than or equal to this value.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    modifiedFrom?: string
    /**
     * Limits results to the documents with the &#x60;date_modified&#x60; less than this value.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    modifiedTo?: string
    /**
     * Filters documents by name or reference number (stored on the template level).
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    q?: string
    /**
     * Filters documents by the status.   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined   * 13: document.external_review 
     * Defaults to: undefined
     * @type DocumentStatusRequestEnum
     * @memberof DocumentsApilistDocuments
     */
    status?: DocumentStatusRequestEnum
    /**
     * Exludes documents with this status.   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined   * 13: document.external_review 
     * Defaults to: undefined
     * @type DocumentStatusRequestEnum
     * @memberof DocumentsApilistDocuments
     */
    statusNe?: DocumentStatusRequestEnum
    /**
     * Filters documents by tag.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApilistDocuments
     */
    tag?: string
}

export interface DocumentsApiSendDocumentRequest {
    /**
     * Document ID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApisendDocument
     */
    id: string
    /**
     * 
     * @type DocumentSendRequest
     * @memberof DocumentsApisendDocument
     */
    documentSendRequest: DocumentSendRequest
}

export interface DocumentsApiStatusDocumentRequest {
    /**
     * Specify document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApistatusDocument
     */
    id: string
}

export interface DocumentsApiTransferAllDocumentsOwnershipRequest {
    /**
     * 
     * @type DocumentTransferAllOwnershipRequest
     * @memberof DocumentsApitransferAllDocumentsOwnership
     */
    documentTransferAllOwnershipRequest: DocumentTransferAllOwnershipRequest
}

export interface DocumentsApiTransferDocumentOwnershipRequest {
    /**
     * Specify document ID.
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApitransferDocumentOwnership
     */
    id: string
    /**
     * 
     * @type DocumentTransferOwnershipRequest
     * @memberof DocumentsApitransferDocumentOwnership
     */
    documentTransferOwnershipRequest: DocumentTransferOwnershipRequest
}

export interface DocumentsApiUpdateDocumentRequest {
    /**
     * Document ID
     * Defaults to: undefined
     * @type string
     * @memberof DocumentsApiupdateDocument
     */
    id: string
    /**
     * 
     * @type DocumentUpdateRequest
     * @memberof DocumentsApiupdateDocument
     */
    documentUpdateRequest: DocumentUpdateRequest
}

export class ObjectDocumentsApi {
    private api: ObservableDocumentsApi

    public constructor(configuration: Configuration, requestFactory?: DocumentsApiRequestFactory, responseProcessor?: DocumentsApiResponseProcessor) {
        this.api = new ObservableDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Appends a Content Library Item (CLI) to a document and provides a name mapping for its content blocks.
     * Append Content Library Item to a document
     * @param param the request object
     */
    public appendContentLibraryItemToDocumentWithHttpInfo(param: DocumentsApiAppendContentLibraryItemToDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<AppendCLIDataResponse>> {
        return this.api.appendContentLibraryItemToDocumentWithHttpInfo(param.id, param.appendCLIDataRequest,  options).toPromise();
    }

    /**
     * Appends a Content Library Item (CLI) to a document and provides a name mapping for its content blocks.
     * Append Content Library Item to a document
     * @param param the request object
     */
    public appendContentLibraryItemToDocument(param: DocumentsApiAppendContentLibraryItemToDocumentRequest, options?: ConfigurationOptions): Promise<AppendCLIDataResponse> {
        return this.api.appendContentLibraryItemToDocument(param.id, param.appendCLIDataRequest,  options).toPromise();
    }

    /**
     * PandaDoc has eight document statuses, but you can manually set your document status to only four:  ### Document statuses  - Completed - `document.completed` - API code `2` - Expired - `document.voided` - code `11` - Paid - `document.paid` - code `10`. **Important**: You can only set it if you have a payment app connected. - Declined - `document.declined` - code `12`  > 🚧 Pass a numeric code for the corresponding document status, for example, `2` for `document.completed`.  Find more details in [\\[Editor 2.0\\] Manually change document status](https://support.pandadoc.com/en/articles/9714842-manually-change-document-status) topic.  | Current Status | To Completed: | To Expired: | To Paid: | To Declined: | |----------------|---------------|-------------|----------|--------------| | Draft          | YES           | NO          | YES      | YES          | | Approved       | NO            | NO          | NO       | NO           | | Sent           | YES           | YES         | NO       | YES          | | Viewed         | YES           | YES         | NO       | YES          | | Completed (Auto) | NO          | NO          | NO       | YES          | | Waithing for payment | NO      | NO          | YES      | YES          | | Paid           | NO            | NO          | NO       | NO           | | Expired        | YES           | NO          | YES      | YES          | | Declined       | YES           | NO          | YES      | NO           |  > ✅ - from `document.voided` to `document.paid` > > ❌ - from `document.paid` to `document.voided` 
     * Document Status Change
     * @param param the request object
     */
    public changeDocumentStatusWithHttpInfo(param: DocumentsApiChangeDocumentStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.changeDocumentStatusWithHttpInfo(param.id, param.documentStatusChangeRequest,  options).toPromise();
    }

    /**
     * PandaDoc has eight document statuses, but you can manually set your document status to only four:  ### Document statuses  - Completed - `document.completed` - API code `2` - Expired - `document.voided` - code `11` - Paid - `document.paid` - code `10`. **Important**: You can only set it if you have a payment app connected. - Declined - `document.declined` - code `12`  > 🚧 Pass a numeric code for the corresponding document status, for example, `2` for `document.completed`.  Find more details in [\\[Editor 2.0\\] Manually change document status](https://support.pandadoc.com/en/articles/9714842-manually-change-document-status) topic.  | Current Status | To Completed: | To Expired: | To Paid: | To Declined: | |----------------|---------------|-------------|----------|--------------| | Draft          | YES           | NO          | YES      | YES          | | Approved       | NO            | NO          | NO       | NO           | | Sent           | YES           | YES         | NO       | YES          | | Viewed         | YES           | YES         | NO       | YES          | | Completed (Auto) | NO          | NO          | NO       | YES          | | Waithing for payment | NO      | NO          | YES      | YES          | | Paid           | NO            | NO          | NO       | NO           | | Expired        | YES           | NO          | YES      | YES          | | Declined       | YES           | NO          | YES      | NO           |  > ✅ - from `document.voided` to `document.paid` > > ❌ - from `document.paid` to `document.voided` 
     * Document Status Change
     * @param param the request object
     */
    public changeDocumentStatus(param: DocumentsApiChangeDocumentStatusRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.changeDocumentStatus(param.id, param.documentStatusChangeRequest,  options).toPromise();
    }

    /**
     * PandaDoc has eight document statuses, but you can manually set your document status to only four:  ### Document statuses  - Completed - `document.completed` - API code `2` - Expired - `document.voided` - code `11` - Paid - `document.paid` - code `10`. **Important**: You can only set it if you have a payment app connected. - Declined - `document.declined` - code `12`  > 🚧 Pass a numeric code for the corresponding document status, for example, `2` for `document.completed`.  Find more details in [\\[Editor 2.0\\] Manually change document status](https://support.pandadoc.com/en/articles/9714842-manually-change-document-status) topic.  | Current Status | To Completed: | To Expired: | To Paid: | To Declined: | |----------------|---------------|-------------|----------|--------------| | Draft          | YES           | NO          | YES      | YES          | | Approved       | NO            | NO          | NO       | NO           | | Sent           | YES           | YES         | NO       | YES          | | Viewed         | YES           | YES         | NO       | YES          | | Completed (Auto) | NO          | NO          | NO       | YES          | | Waithing for payment | NO      | NO          | YES      | YES          | | Paid           | NO            | NO          | NO       | NO           | | Expired        | YES           | NO          | YES      | YES          | | Declined       | YES           | NO          | YES      | NO           |  > ✅ - from `document.voided` to `document.paid` > > ❌ - from `document.paid` to `document.voided` 
     * Document Status Change with Upload
     * @param param the request object
     */
    public changeDocumentStatusWithUploadWithHttpInfo(param: DocumentsApiChangeDocumentStatusWithUploadRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.changeDocumentStatusWithUploadWithHttpInfo(param.id, param.file, param.data,  options).toPromise();
    }

    /**
     * PandaDoc has eight document statuses, but you can manually set your document status to only four:  ### Document statuses  - Completed - `document.completed` - API code `2` - Expired - `document.voided` - code `11` - Paid - `document.paid` - code `10`. **Important**: You can only set it if you have a payment app connected. - Declined - `document.declined` - code `12`  > 🚧 Pass a numeric code for the corresponding document status, for example, `2` for `document.completed`.  Find more details in [\\[Editor 2.0\\] Manually change document status](https://support.pandadoc.com/en/articles/9714842-manually-change-document-status) topic.  | Current Status | To Completed: | To Expired: | To Paid: | To Declined: | |----------------|---------------|-------------|----------|--------------| | Draft          | YES           | NO          | YES      | YES          | | Approved       | NO            | NO          | NO       | NO           | | Sent           | YES           | YES         | NO       | YES          | | Viewed         | YES           | YES         | NO       | YES          | | Completed (Auto) | NO          | NO          | NO       | YES          | | Waithing for payment | NO      | NO          | YES      | YES          | | Paid           | NO            | NO          | NO       | NO           | | Expired        | YES           | NO          | YES      | YES          | | Declined       | YES           | NO          | YES      | NO           |  > ✅ - from `document.voided` to `document.paid` > > ❌ - from `document.paid` to `document.voided` 
     * Document Status Change with Upload
     * @param param the request object
     */
    public changeDocumentStatusWithUpload(param: DocumentsApiChangeDocumentStatusWithUploadRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.changeDocumentStatusWithUpload(param.id, param.file, param.data,  options).toPromise();
    }

    /**
     * ## Create from a template > See the [Create document from template](https://developers.pandadoc.com/docs/create-document-from-template) tutorial for details on how to use this endpoint, as well as a sample template.  ## Create from a URL > See the [Create from public PDF](https://developers.pandadoc.com/docs/create-and-send-a-document-from-a-publicly-available-pdf) guide for info about roles and fields, as well as PDF examples. 
     * Create Document
     * @param param the request object
     */
    public createDocumentWithHttpInfo(param: DocumentsApiCreateDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentCreateResponse>> {
        return this.api.createDocumentWithHttpInfo(param.documentCreateRequest, param.editorVer, param.useFormFieldProperties,  options).toPromise();
    }

    /**
     * ## Create from a template > See the [Create document from template](https://developers.pandadoc.com/docs/create-document-from-template) tutorial for details on how to use this endpoint, as well as a sample template.  ## Create from a URL > See the [Create from public PDF](https://developers.pandadoc.com/docs/create-and-send-a-document-from-a-publicly-available-pdf) guide for info about roles and fields, as well as PDF examples. 
     * Create Document
     * @param param the request object
     */
    public createDocument(param: DocumentsApiCreateDocumentRequest, options?: ConfigurationOptions): Promise<DocumentCreateResponse> {
        return this.api.createDocument(param.documentCreateRequest, param.editorVer, param.useFormFieldProperties,  options).toPromise();
    }

    /**
     * Creates a new editing session for the Embedded Editor. The response includes an E-Token, which is required to open the document.  > 🚧 **Important:** The Embedded Editor can only open documents that have a `draft` status.  #### Limitations  - **Single Active Session per User-Document Pair**    Only one editing session can be active at a time for a specific user and document. Creating a new session for the same user-document pair will automatically invalidate the previous one.  - **Weekly Session Cap**    A maximum of **250** editing sessions can be created for a single document per week. Any attempt to exceed this limit will result in a `403 Forbidden` error. 
     * Create Document Editing Session 
     * @param param the request object
     */
    public createDocumentEditingSessionWithHttpInfo(param: DocumentsApiCreateDocumentEditingSessionRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateDocumentEditingSession201Response>> {
        return this.api.createDocumentEditingSessionWithHttpInfo(param.id, param.editingSessionRequest,  options).toPromise();
    }

    /**
     * Creates a new editing session for the Embedded Editor. The response includes an E-Token, which is required to open the document.  > 🚧 **Important:** The Embedded Editor can only open documents that have a `draft` status.  #### Limitations  - **Single Active Session per User-Document Pair**    Only one editing session can be active at a time for a specific user and document. Creating a new session for the same user-document pair will automatically invalidate the previous one.  - **Weekly Session Cap**    A maximum of **250** editing sessions can be created for a single document per week. Any attempt to exceed this limit will result in a `403 Forbidden` error. 
     * Create Document Editing Session 
     * @param param the request object
     */
    public createDocumentEditingSession(param: DocumentsApiCreateDocumentEditingSessionRequest, options?: ConfigurationOptions): Promise<CreateDocumentEditingSession201Response> {
        return this.api.createDocumentEditingSession(param.id, param.editingSessionRequest,  options).toPromise();
    }

    /**
     * ## Create from an upload > See the [Create from PDF](https://developers.pandadoc.com/docs/create-document-from-file) tutorial for the usage specifics and sample PDF files.  **Note**: A file you upload is not stored in your PandaDoc account, so you have to upload it with every request. 
     * Create Document from File Upload
     * @param param the request object
     */
    public createDocumentFromUploadWithHttpInfo(param: DocumentsApiCreateDocumentFromUploadRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<DocumentCreateResponse>> {
        return this.api.createDocumentFromUploadWithHttpInfo(param.editorVer, param.useFormFieldProperties, param.file, param.data,  options).toPromise();
    }

    /**
     * ## Create from an upload > See the [Create from PDF](https://developers.pandadoc.com/docs/create-document-from-file) tutorial for the usage specifics and sample PDF files.  **Note**: A file you upload is not stored in your PandaDoc account, so you have to upload it with every request. 
     * Create Document from File Upload
     * @param param the request object
     */
    public createDocumentFromUpload(param: DocumentsApiCreateDocumentFromUploadRequest = {}, options?: ConfigurationOptions): Promise<DocumentCreateResponse> {
        return this.api.createDocumentFromUpload(param.editorVer, param.useFormFieldProperties, param.file, param.data,  options).toPromise();
    }

    /**
     * Creates a document session for a recipient to view and sign a document.  > 📘 How to create an Embedded Sign session > For more information on how to create an Embedded Sign session, see the [Embedded Signing](https://developers.pandadoc.com/docs/embedded-signing) documentation. 
     * Create Document Session for Embedded Sign
     * @param param the request object
     */
    public createDocumentLinkWithHttpInfo(param: DocumentsApiCreateDocumentLinkRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentCreateLinkResponse>> {
        return this.api.createDocumentLinkWithHttpInfo(param.id, param.documentCreateLinkRequest,  options).toPromise();
    }

    /**
     * Creates a document session for a recipient to view and sign a document.  > 📘 How to create an Embedded Sign session > For more information on how to create an Embedded Sign session, see the [Embedded Signing](https://developers.pandadoc.com/docs/embedded-signing) documentation. 
     * Create Document Session for Embedded Sign
     * @param param the request object
     */
    public createDocumentLink(param: DocumentsApiCreateDocumentLinkRequest, options?: ConfigurationOptions): Promise<DocumentCreateLinkResponse> {
        return this.api.createDocumentLink(param.id, param.documentCreateLinkRequest,  options).toPromise();
    }

    /**
     * > ⏱️ Export as DOCX is a non-blocking (asynchronous) operation > The document generation process may take some time. > With a successful request, you receive a response with task ID, status **created** and document id. After process completes, usually in a few minutes, the task status moves to the **done** state. > You can download documents up to 300 pages. For documents of 301+ pages, you will receive an error “400: The number of pages more then limit 300” 
     * [Beta] Create DOCX Export Task
     * @param param the request object
     */
    public createExportDocxTaskWithHttpInfo(param: DocumentsApiCreateExportDocxTaskRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentDocxExport>> {
        return this.api.createExportDocxTaskWithHttpInfo(param.documentId,  options).toPromise();
    }

    /**
     * > ⏱️ Export as DOCX is a non-blocking (asynchronous) operation > The document generation process may take some time. > With a successful request, you receive a response with task ID, status **created** and document id. After process completes, usually in a few minutes, the task status moves to the **done** state. > You can download documents up to 300 pages. For documents of 301+ pages, you will receive an error “400: The number of pages more then limit 300” 
     * [Beta] Create DOCX Export Task
     * @param param the request object
     */
    public createExportDocxTask(param: DocumentsApiCreateExportDocxTaskRequest, options?: ConfigurationOptions): Promise<DocumentDocxExport> {
        return this.api.createExportDocxTask(param.documentId,  options).toPromise();
    }

    /**
     * Delete a document by ID. 
     * Delete Document
     * @param param the request object
     */
    public deleteDocumentWithHttpInfo(param: DocumentsApiDeleteDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteDocumentWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete a document by ID. 
     * Delete Document
     * @param param the request object
     */
    public deleteDocument(param: DocumentsApiDeleteDocumentRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteDocument(param.id,  options).toPromise();
    }

    /**
     * Return detailed data about a document. Use Document Status for getting just a basic info and status.  Get details about a document by its `id`. Details include:  - Basic document information (name, document state, owner, sender, grand total, etc.) - Recipients (completion status, signing order, etc.) - Fields with values (incl. Collect Files field) - Tokens (variables) with values - Pricing information (pricing tables, products, quotes, etc.) - Content block names for table, image, and text blocks (tables, images, texts) - Metadata - Tags - Linked objects - [Approval flow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) (if present) - Timestamps associated with a document. Note that `date_modified` means any changes associated with the recipients and document status, while `content_date_modified` reflects any changes in the document content. 
     * Document Details
     * @param param the request object
     */
    public detailsDocumentWithHttpInfo(param: DocumentsApiDetailsDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentDetailsResponse>> {
        return this.api.detailsDocumentWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Return detailed data about a document. Use Document Status for getting just a basic info and status.  Get details about a document by its `id`. Details include:  - Basic document information (name, document state, owner, sender, grand total, etc.) - Recipients (completion status, signing order, etc.) - Fields with values (incl. Collect Files field) - Tokens (variables) with values - Pricing information (pricing tables, products, quotes, etc.) - Content block names for table, image, and text blocks (tables, images, texts) - Metadata - Tags - Linked objects - [Approval flow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) (if present) - Timestamps associated with a document. Note that `date_modified` means any changes associated with the recipients and document status, while `content_date_modified` reflects any changes in the document content. 
     * Document Details
     * @param param the request object
     */
    public detailsDocument(param: DocumentsApiDetailsDocumentRequest, options?: ConfigurationOptions): Promise<DocumentDetailsResponse> {
        return this.api.detailsDocument(param.id,  options).toPromise();
    }

    /**
     * Retrieves the current version of eSign disclosure text for a specified document. 
     * Document eSign disclosure
     * @param param the request object
     */
    public documentESignDisclosureWithHttpInfo(param: DocumentsApiDocumentESignDisclosureRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentESignDisclosure>> {
        return this.api.documentESignDisclosureWithHttpInfo(param.documentId,  options).toPromise();
    }

    /**
     * Retrieves the current version of eSign disclosure text for a specified document. 
     * Document eSign disclosure
     * @param param the request object
     */
    public documentESignDisclosure(param: DocumentsApiDocumentESignDisclosureRequest, options?: ConfigurationOptions): Promise<DocumentESignDisclosure> {
        return this.api.documentESignDisclosure(param.documentId,  options).toPromise();
    }

    /**
     * This operation allows you to move a document to a folder by specifying the document ID and folder ID.
     * Document move to folder
     * @param param the request object
     */
    public documentMoveToFolderWithHttpInfo(param: DocumentsApiDocumentMoveToFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.documentMoveToFolderWithHttpInfo(param.id, param.folderId,  options).toPromise();
    }

    /**
     * This operation allows you to move a document to a folder by specifying the document ID and folder ID.
     * Document move to folder
     * @param param the request object
     */
    public documentMoveToFolder(param: DocumentsApiDocumentMoveToFolderRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.documentMoveToFolder(param.id, param.folderId,  options).toPromise();
    }

    /**
     * Revert your document back to draft to continue editing it.  > 📘 Returning to Draft works for any document status except Removed.  ## After you move your document to the Draft status  - `Signature` and `Initials` fields are cleared. All other fields stay filled in. - Recipients are **not** notified that the document is back in Draft. - You\'ll need to resend the document so that recipients can sign the updated version. 
     * Move Document to Draft
     * @param param the request object
     */
    public documentRevertToDraftWithHttpInfo(param: DocumentsApiDocumentRevertToDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentRevertToDraftResponse>> {
        return this.api.documentRevertToDraftWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Revert your document back to draft to continue editing it.  > 📘 Returning to Draft works for any document status except Removed.  ## After you move your document to the Draft status  - `Signature` and `Initials` fields are cleared. All other fields stay filled in. - Recipients are **not** notified that the document is back in Draft. - You\'ll need to resend the document so that recipients can sign the updated version. 
     * Move Document to Draft
     * @param param the request object
     */
    public documentRevertToDraft(param: DocumentsApiDocumentRevertToDraftRequest, options?: ConfigurationOptions): Promise<DocumentRevertToDraftResponse> {
        return this.api.documentRevertToDraft(param.id,  options).toPromise();
    }

    /**
     * Download documents as a PDF. 
     * Document Download
     * @param param the request object
     */
    public downloadDocumentWithHttpInfo(param: DocumentsApiDownloadDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        return this.api.downloadDocumentWithHttpInfo(param.id, param.watermarkColor, param.watermarkFontSize, param.watermarkOpacity, param.watermarkText, param.separateFiles,  options).toPromise();
    }

    /**
     * Download documents as a PDF. 
     * Document Download
     * @param param the request object
     */
    public downloadDocument(param: DocumentsApiDownloadDocumentRequest, options?: ConfigurationOptions): Promise<HttpFile> {
        return this.api.downloadDocument(param.id, param.watermarkColor, param.watermarkFontSize, param.watermarkOpacity, param.watermarkText, param.separateFiles,  options).toPromise();
    }

    /**
     * Download a completed document as a verifiable PDF (Download Protected Document) > 🚧 Production key only >  > This endpoint only works with a Production key. You\'ll get a 401 Unauthorized error when trying to use a Sandbox key.  Download a signed PDF of a completed document 
     * Download Completed Document
     * @param param the request object
     */
    public downloadProtectedDocumentWithHttpInfo(param: DocumentsApiDownloadProtectedDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        return this.api.downloadProtectedDocumentWithHttpInfo(param.id, param.separateFiles,  options).toPromise();
    }

    /**
     * Download a completed document as a verifiable PDF (Download Protected Document) > 🚧 Production key only >  > This endpoint only works with a Production key. You\'ll get a 401 Unauthorized error when trying to use a Sandbox key.  Download a signed PDF of a completed document 
     * Download Completed Document
     * @param param the request object
     */
    public downloadProtectedDocument(param: DocumentsApiDownloadProtectedDocumentRequest, options?: ConfigurationOptions): Promise<HttpFile> {
        return this.api.downloadProtectedDocument(param.id, param.separateFiles,  options).toPromise();
    }

    /**
     * > 📘 This endpoint returns the current state of a DOCX export task for a document. > The endpoint supports downloading only multiple files if the document contains several sections. Downloading as a single file in this case is not possible. 
     * [Beta] DOCX Export Task
     * @param param the request object
     */
    public getDocxExportTaskWithHttpInfo(param: DocumentsApiGetDocxExportTaskRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocxExportTaskResponse>> {
        return this.api.getDocxExportTaskWithHttpInfo(param.documentId, param.taskId,  options).toPromise();
    }

    /**
     * > 📘 This endpoint returns the current state of a DOCX export task for a document. > The endpoint supports downloading only multiple files if the document contains several sections. Downloading as a single file in this case is not possible. 
     * [Beta] DOCX Export Task
     * @param param the request object
     */
    public getDocxExportTask(param: DocumentsApiGetDocxExportTaskRequest, options?: ConfigurationOptions): Promise<DocxExportTaskResponse> {
        return this.api.getDocxExportTask(param.documentId, param.taskId,  options).toPromise();
    }

    /**
     * This endpoint will let you list and search for the documents. ### [Here](https://developers.pandadoc.com/docs/list-search-documents-api) you can find how to filter, search and order documents. 
     * List Documents
     * @param param the request object
     */
    public listDocumentsWithHttpInfo(param: DocumentsApiListDocumentsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<DocumentListResponse>> {
        return this.api.listDocumentsWithHttpInfo(param.templateId, param.formId, param.folderUuid, param.contactId, param.count, param.page, param.orderBy, param.createdFrom, param.createdTo, param.deleted, param.id, param.completedFrom, param.completedTo, param.membershipId, param.metadata, param.modifiedFrom, param.modifiedTo, param.q, param.status, param.statusNe, param.tag,  options).toPromise();
    }

    /**
     * This endpoint will let you list and search for the documents. ### [Here](https://developers.pandadoc.com/docs/list-search-documents-api) you can find how to filter, search and order documents. 
     * List Documents
     * @param param the request object
     */
    public listDocuments(param: DocumentsApiListDocumentsRequest = {}, options?: ConfigurationOptions): Promise<DocumentListResponse> {
        return this.api.listDocuments(param.templateId, param.formId, param.folderUuid, param.contactId, param.count, param.page, param.orderBy, param.createdFrom, param.createdTo, param.deleted, param.id, param.completedFrom, param.completedTo, param.membershipId, param.metadata, param.modifiedFrom, param.modifiedTo, param.q, param.status, param.statusNe, param.tag,  options).toPromise();
    }

    /**
     * > 🚧 Using the Sandbox Key >  > When you use a [sandbox API key](https://developers.pandadoc.com/reference/sandbox-key) during the free trial period, the sender and recipient email addresses must be from the same organisation (email domain).  ## Document State  - You can only send a document in the `document.draft` status. - After creating a new document, it usually retains a `document.uploaded` status for 3-5 seconds while the document syncs across PandaDoc servers. When the document is available for further API calls, it moves to the `document.draft` state. Use [Document Status](/reference/document-status) or [Webhooks](/reference/on-document-status-change) to check document status. - Moving a document to the `document.sent` status finalizes the document structure, before recipients can complete it. - If a template used for the document creation has an approval workflow turned on, the sent document moves to the `document.waiting_approval` status. Once the document is approved, you need to make the call again to move the document to `document.sent` status.  ## Send and Silence Notifications  - By default, PandaDoc sends a notification email to the recipient, as well as notifications the sender has configured. You may disable all notifications for recipients by passing `silent: true`. This is useful when you are using alternative delivery methods such as linking to the document or embedding the document. - The `silent: true` parameter disables sent, viewed, comment and completed document email notifications. \"Document Approval\" notification won\'t be affected by this parameter. - If you pass `silent: false`, the document is going to be delivered by email and/or SMS.   ![Example email. Branding can be changed in workspace settings](https://files.readme.io/cc5a03e-email2.png)  ## Select Approver from Group  If you have previously set up an approval workflow with selectable groups on the UI, you can select a particular approver from this group. Learn more about [selectable groups](https://support.pandadoc.com/en/articles/9714799-approval-workflow#h_01H4GNY5GSGG38BPYY46XV7GB4).   To set an approver, we recommend to follow these steps:  1. Run the [Document Details](https://developers.pandadoc.com/reference/document-details) request. 2. Copy the `steps` part from the `approval_execution` section of the response into the `selected_approvers` field of the Send Document payload. 3. Modify your payload according to business needs: set `is_selected` to true for one approver.  > 📘 **Note**: You can change the selected approver only if you revert your document back to the `document.draft` status. 
     * Send Document
     * @param param the request object
     */
    public sendDocumentWithHttpInfo(param: DocumentsApiSendDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentSendResponse>> {
        return this.api.sendDocumentWithHttpInfo(param.id, param.documentSendRequest,  options).toPromise();
    }

    /**
     * > 🚧 Using the Sandbox Key >  > When you use a [sandbox API key](https://developers.pandadoc.com/reference/sandbox-key) during the free trial period, the sender and recipient email addresses must be from the same organisation (email domain).  ## Document State  - You can only send a document in the `document.draft` status. - After creating a new document, it usually retains a `document.uploaded` status for 3-5 seconds while the document syncs across PandaDoc servers. When the document is available for further API calls, it moves to the `document.draft` state. Use [Document Status](/reference/document-status) or [Webhooks](/reference/on-document-status-change) to check document status. - Moving a document to the `document.sent` status finalizes the document structure, before recipients can complete it. - If a template used for the document creation has an approval workflow turned on, the sent document moves to the `document.waiting_approval` status. Once the document is approved, you need to make the call again to move the document to `document.sent` status.  ## Send and Silence Notifications  - By default, PandaDoc sends a notification email to the recipient, as well as notifications the sender has configured. You may disable all notifications for recipients by passing `silent: true`. This is useful when you are using alternative delivery methods such as linking to the document or embedding the document. - The `silent: true` parameter disables sent, viewed, comment and completed document email notifications. \"Document Approval\" notification won\'t be affected by this parameter. - If you pass `silent: false`, the document is going to be delivered by email and/or SMS.   ![Example email. Branding can be changed in workspace settings](https://files.readme.io/cc5a03e-email2.png)  ## Select Approver from Group  If you have previously set up an approval workflow with selectable groups on the UI, you can select a particular approver from this group. Learn more about [selectable groups](https://support.pandadoc.com/en/articles/9714799-approval-workflow#h_01H4GNY5GSGG38BPYY46XV7GB4).   To set an approver, we recommend to follow these steps:  1. Run the [Document Details](https://developers.pandadoc.com/reference/document-details) request. 2. Copy the `steps` part from the `approval_execution` section of the response into the `selected_approvers` field of the Send Document payload. 3. Modify your payload according to business needs: set `is_selected` to true for one approver.  > 📘 **Note**: You can change the selected approver only if you revert your document back to the `document.draft` status. 
     * Send Document
     * @param param the request object
     */
    public sendDocument(param: DocumentsApiSendDocumentRequest, options?: ConfigurationOptions): Promise<DocumentSendResponse> {
        return this.api.sendDocument(param.id, param.documentSendRequest,  options).toPromise();
    }

    /**
     * It is useful to request document status to ensure a document is in the expected state before calling additional API methods.   ### Required Document Statuses  Here are some common methods and the `document.status` required to proceed:  | API Method           | Required Document State | | :------------------- | :---------------------- | | Send A Document      | `document.draft`        | | Get Document Details | `document.draft`        | | Embed A Document     | `document.sent`         | | Download A Document  | `document.completed`    |  > 📘 Polling vs Webhooks >  > If you are using the `GET` document status endpoint for [**polling**](https://en.wikipedia.org/wiki/Polling_(computer_science)), we also support and recommend using **webhooks** for event-driven needs: <https://developers.pandadoc.com/docs/listen-document-status-changes#/>  ### Available Document Statuses  The following is a complete list of all possible document statuses returned:  | Document Status             | Status Description                                                                                                                                                                                                               | | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | `document.uploaded`         | The document has just been created or uploaded. It is in processing and will be in `document.draft` state soon.                                                                                                           | | `document.error`            | The document creation has failed. This status is terminal, you should stop polling after getting it. | `document.draft`            | The document is in a draft state. All aspects of the document can be edited in this state. Our API does not support edits after the document has been created, but it can still be edited manually on <https://app.pandadoc.com> | | `document.sent`             | The document has been \"sealed\" and optionally sent. No further document edits can occur except for document recipient(s) filling out or signing the document.                                                                    | | `document.viewed`           | Document recipient(s) have viewed the sent document.                                                                                                                                                                             | | `document.waiting_approval` | The document has an [automatic approval workflow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) and has not yet been approved.                                                      | | `document.rejected`         | The document has an [automatic approval workflow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) and was rejected.                                                                   | | `document.approved`         | The document has an [automatic approval workflow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) and was approved.                                                                   | | `document.waiting_pay`      | The document has a [Stripe payment](https://support.pandadoc.com/en/articles/9714942-stripe-checkout-payments) option and is awaiting payment.                                                                              | | `document.paid`             | The document has a [Stripe payment](https://support.pandadoc.com/en/articles/9714942-stripe-checkout-payments) option and was paid.                                                                                         | | `document.completed`        | The document has been completed by all recipients.                                                                                                                                                                               | | `document.voided`           | The document expired and is no longer available for completion or signature.                                                                                                                                                     | | `document.declined`         | The document was [manually marked](https://support.pandadoc.com/en/articles/9714842-manually-change-document-status) as \"Declined\"                                                                                    | | `document.external_review`  | The document is reviewed by it\'s recipient using Suggest Edit feature                                                                                                                                                            | 
     * Document Status
     * @param param the request object
     */
    public statusDocumentWithHttpInfo(param: DocumentsApiStatusDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentStatusResponse>> {
        return this.api.statusDocumentWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * It is useful to request document status to ensure a document is in the expected state before calling additional API methods.   ### Required Document Statuses  Here are some common methods and the `document.status` required to proceed:  | API Method           | Required Document State | | :------------------- | :---------------------- | | Send A Document      | `document.draft`        | | Get Document Details | `document.draft`        | | Embed A Document     | `document.sent`         | | Download A Document  | `document.completed`    |  > 📘 Polling vs Webhooks >  > If you are using the `GET` document status endpoint for [**polling**](https://en.wikipedia.org/wiki/Polling_(computer_science)), we also support and recommend using **webhooks** for event-driven needs: <https://developers.pandadoc.com/docs/listen-document-status-changes#/>  ### Available Document Statuses  The following is a complete list of all possible document statuses returned:  | Document Status             | Status Description                                                                                                                                                                                                               | | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | `document.uploaded`         | The document has just been created or uploaded. It is in processing and will be in `document.draft` state soon.                                                                                                           | | `document.error`            | The document creation has failed. This status is terminal, you should stop polling after getting it. | `document.draft`            | The document is in a draft state. All aspects of the document can be edited in this state. Our API does not support edits after the document has been created, but it can still be edited manually on <https://app.pandadoc.com> | | `document.sent`             | The document has been \"sealed\" and optionally sent. No further document edits can occur except for document recipient(s) filling out or signing the document.                                                                    | | `document.viewed`           | Document recipient(s) have viewed the sent document.                                                                                                                                                                             | | `document.waiting_approval` | The document has an [automatic approval workflow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) and has not yet been approved.                                                      | | `document.rejected`         | The document has an [automatic approval workflow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) and was rejected.                                                                   | | `document.approved`         | The document has an [automatic approval workflow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) and was approved.                                                                   | | `document.waiting_pay`      | The document has a [Stripe payment](https://support.pandadoc.com/en/articles/9714942-stripe-checkout-payments) option and is awaiting payment.                                                                              | | `document.paid`             | The document has a [Stripe payment](https://support.pandadoc.com/en/articles/9714942-stripe-checkout-payments) option and was paid.                                                                                         | | `document.completed`        | The document has been completed by all recipients.                                                                                                                                                                               | | `document.voided`           | The document expired and is no longer available for completion or signature.                                                                                                                                                     | | `document.declined`         | The document was [manually marked](https://support.pandadoc.com/en/articles/9714842-manually-change-document-status) as \"Declined\"                                                                                    | | `document.external_review`  | The document is reviewed by it\'s recipient using Suggest Edit feature                                                                                                                                                            | 
     * Document Status
     * @param param the request object
     */
    public statusDocument(param: DocumentsApiStatusDocumentRequest, options?: ConfigurationOptions): Promise<DocumentStatusResponse> {
        return this.api.statusDocument(param.id,  options).toPromise();
    }

    /**
     * This method transfers ownership of all documents from one member to another. 
     * Transfer all documents ownership
     * @param param the request object
     */
    public transferAllDocumentsOwnershipWithHttpInfo(param: DocumentsApiTransferAllDocumentsOwnershipRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.transferAllDocumentsOwnershipWithHttpInfo(param.documentTransferAllOwnershipRequest,  options).toPromise();
    }

    /**
     * This method transfers ownership of all documents from one member to another. 
     * Transfer all documents ownership
     * @param param the request object
     */
    public transferAllDocumentsOwnership(param: DocumentsApiTransferAllDocumentsOwnershipRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.transferAllDocumentsOwnership(param.documentTransferAllOwnershipRequest,  options).toPromise();
    }

    /**
     * This operation allows transferring the ownership of a document to another user by specifying the document ID and membership ID.
     * Update document ownership
     * @param param the request object
     */
    public transferDocumentOwnershipWithHttpInfo(param: DocumentsApiTransferDocumentOwnershipRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.transferDocumentOwnershipWithHttpInfo(param.id, param.documentTransferOwnershipRequest,  options).toPromise();
    }

    /**
     * This operation allows transferring the ownership of a document to another user by specifying the document ID and membership ID.
     * Update document ownership
     * @param param the request object
     */
    public transferDocumentOwnership(param: DocumentsApiTransferDocumentOwnershipRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.transferDocumentOwnership(param.id, param.documentTransferOwnershipRequest,  options).toPromise();
    }

    /**
     * Use the PATCH method to update a PandaDoc document.  > 🚧 Document status >  > You can only update a document in the Draft status (`document.draft`).  >  > After creating a new document, it usually retains a `document.uploaded` status for 3-5 seconds while the document syncs across PandaDoc servers. When the document is available for further API calls, the document moves to the `document.draft` state. Use [Document Status](https://developers.pandadoc.com/reference/document-status) or Webhooks to check document status. 
     * Update Document
     * @param param the request object
     */
    public updateDocumentWithHttpInfo(param: DocumentsApiUpdateDocumentRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateDocumentWithHttpInfo(param.id, param.documentUpdateRequest,  options).toPromise();
    }

    /**
     * Use the PATCH method to update a PandaDoc document.  > 🚧 Document status >  > You can only update a document in the Draft status (`document.draft`).  >  > After creating a new document, it usually retains a `document.uploaded` status for 3-5 seconds while the document syncs across PandaDoc servers. When the document is available for further API calls, the document moves to the `document.draft` state. Use [Document Status](https://developers.pandadoc.com/reference/document-status) or Webhooks to check document status. 
     * Update Document
     * @param param the request object
     */
    public updateDocument(param: DocumentsApiUpdateDocumentRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateDocument(param.id, param.documentUpdateRequest,  options).toPromise();
    }

}

import { ObservableFoldersApi } from "./ObservableAPI";
import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";

export interface FoldersApiCreateDocumentFolderRequest {
    /**
     * 
     * @type DocumentsFolderCreateRequest
     * @memberof FoldersApicreateDocumentFolder
     */
    documentsFolderCreateRequest: DocumentsFolderCreateRequest
}

export interface FoldersApiCreateTemplateFolderRequest {
    /**
     * 
     * @type TemplatesFolderCreateRequest
     * @memberof FoldersApicreateTemplateFolder
     */
    templatesFolderCreateRequest: TemplatesFolderCreateRequest
}

export interface FoldersApiListDocumentFoldersRequest {
    /**
     * The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApilistDocumentFolders
     */
    parentUuid?: string
    /**
     * Optionally, specify how many folders to return.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof FoldersApilistDocumentFolders
     */
    count?: number
    /**
     * Optionally, specify which page of the dataset to return.
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FoldersApilistDocumentFolders
     */
    page?: number
}

export interface FoldersApiListTemplateFoldersRequest {
    /**
     * The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApilistTemplateFolders
     */
    parentUuid?: string
    /**
     * Optionally, specify how many folders to return.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof FoldersApilistTemplateFolders
     */
    count?: number
    /**
     * Optionally, specify which page of the dataset to return.
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FoldersApilistTemplateFolders
     */
    page?: number
}

export interface FoldersApiRenameDocumentFolderRequest {
    /**
     * The UUID of the folder that you are renaming.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApirenameDocumentFolder
     */
    id: string
    /**
     * 
     * @type DocumentsFolderRenameRequest
     * @memberof FoldersApirenameDocumentFolder
     */
    documentsFolderRenameRequest: DocumentsFolderRenameRequest
}

export interface FoldersApiRenameTemplateFolderRequest {
    /**
     * The UUID of the folder which you are renaming.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApirenameTemplateFolder
     */
    id: string
    /**
     * 
     * @type TemplatesFolderRenameRequest
     * @memberof FoldersApirenameTemplateFolder
     */
    templatesFolderRenameRequest: TemplatesFolderRenameRequest
}

export class ObjectFoldersApi {
    private api: ObservableFoldersApi

    public constructor(configuration: Configuration, requestFactory?: FoldersApiRequestFactory, responseProcessor?: FoldersApiResponseProcessor) {
        this.api = new ObservableFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new folder to store your documents.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Create Documents Folder
     * @param param the request object
     */
    public createDocumentFolderWithHttpInfo(param: FoldersApiCreateDocumentFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentsFolderCreateResponse>> {
        return this.api.createDocumentFolderWithHttpInfo(param.documentsFolderCreateRequest,  options).toPromise();
    }

    /**
     * Create a new folder to store your documents.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Create Documents Folder
     * @param param the request object
     */
    public createDocumentFolder(param: FoldersApiCreateDocumentFolderRequest, options?: ConfigurationOptions): Promise<DocumentsFolderCreateResponse> {
        return this.api.createDocumentFolder(param.documentsFolderCreateRequest,  options).toPromise();
    }

    /**
     * Create a new folder to store your templates.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Create Templates Folder
     * @param param the request object
     */
    public createTemplateFolderWithHttpInfo(param: FoldersApiCreateTemplateFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatesFolderCreateResponse>> {
        return this.api.createTemplateFolderWithHttpInfo(param.templatesFolderCreateRequest,  options).toPromise();
    }

    /**
     * Create a new folder to store your templates.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Create Templates Folder
     * @param param the request object
     */
    public createTemplateFolder(param: FoldersApiCreateTemplateFolderRequest, options?: ConfigurationOptions): Promise<TemplatesFolderCreateResponse> {
        return this.api.createTemplateFolder(param.templatesFolderCreateRequest,  options).toPromise();
    }

    /**
     * Get the list of folders which contain Documents in your account.  > 📘  >  > The root folder is not listed in the response.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * List Documents Folders
     * @param param the request object
     */
    public listDocumentFoldersWithHttpInfo(param: FoldersApiListDocumentFoldersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<DocumentsFolderListResponse>> {
        return this.api.listDocumentFoldersWithHttpInfo(param.parentUuid, param.count, param.page,  options).toPromise();
    }

    /**
     * Get the list of folders which contain Documents in your account.  > 📘  >  > The root folder is not listed in the response.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * List Documents Folders
     * @param param the request object
     */
    public listDocumentFolders(param: FoldersApiListDocumentFoldersRequest = {}, options?: ConfigurationOptions): Promise<DocumentsFolderListResponse> {
        return this.api.listDocumentFolders(param.parentUuid, param.count, param.page,  options).toPromise();
    }

    /**
     * Get the list of folders that contain Templates in your account.  > 📘  >  > The root folder is not listed in the response.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * List Templates Folders
     * @param param the request object
     */
    public listTemplateFoldersWithHttpInfo(param: FoldersApiListTemplateFoldersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TemplatesFolderListResponse>> {
        return this.api.listTemplateFoldersWithHttpInfo(param.parentUuid, param.count, param.page,  options).toPromise();
    }

    /**
     * Get the list of folders that contain Templates in your account.  > 📘  >  > The root folder is not listed in the response.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * List Templates Folders
     * @param param the request object
     */
    public listTemplateFolders(param: FoldersApiListTemplateFoldersRequest = {}, options?: ConfigurationOptions): Promise<TemplatesFolderListResponse> {
        return this.api.listTemplateFolders(param.parentUuid, param.count, param.page,  options).toPromise();
    }

    /**
     * Rename Documents Folder.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Rename Documents Folder
     * @param param the request object
     */
    public renameDocumentFolderWithHttpInfo(param: FoldersApiRenameDocumentFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<DocumentsFolderRenameResponse>> {
        return this.api.renameDocumentFolderWithHttpInfo(param.id, param.documentsFolderRenameRequest,  options).toPromise();
    }

    /**
     * Rename Documents Folder.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Rename Documents Folder
     * @param param the request object
     */
    public renameDocumentFolder(param: FoldersApiRenameDocumentFolderRequest, options?: ConfigurationOptions): Promise<DocumentsFolderRenameResponse> {
        return this.api.renameDocumentFolder(param.id, param.documentsFolderRenameRequest,  options).toPromise();
    }

    /**
     * Rename a templates folder.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Rename Templates Folder
     * @param param the request object
     */
    public renameTemplateFolderWithHttpInfo(param: FoldersApiRenameTemplateFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplatesFolderRenameResponse>> {
        return this.api.renameTemplateFolderWithHttpInfo(param.id, param.templatesFolderRenameRequest,  options).toPromise();
    }

    /**
     * Rename a templates folder.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Rename Templates Folder
     * @param param the request object
     */
    public renameTemplateFolder(param: FoldersApiRenameTemplateFolderRequest, options?: ConfigurationOptions): Promise<TemplatesFolderRenameResponse> {
        return this.api.renameTemplateFolder(param.id, param.templatesFolderRenameRequest,  options).toPromise();
    }

}

import { ObservableFormsApi } from "./ObservableAPI";
import { FormsApiRequestFactory, FormsApiResponseProcessor} from "../apis/FormsApi";

export interface FormsApiListFormRequest {
    /**
     * Specify how many forms to return. Default is 50 forms, maximum is 100 forms.
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FormsApilistForm
     */
    count?: number
    /**
     * Specify which page of the dataset to return.
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof FormsApilistForm
     */
    page?: number
    /**
     * Specify which status of the forms dataset to return.
     * Defaults to: undefined
     * @type Array&lt;&#39;draft&#39; | &#39;active&#39; | &#39;disabled&#39;&gt;
     * @memberof FormsApilistForm
     */
    status?: Array<'draft' | 'active' | 'disabled'>
    /**
     * Specify the form dataset order to return.
     * Defaults to: undefined
     * @type &#39;name&#39; | &#39;responses&#39; | &#39;status&#39; | &#39;created_date&#39; | &#39;modified_date&#39;
     * @memberof FormsApilistForm
     */
    orderBy?: 'name' | 'responses' | 'status' | 'created_date' | 'modified_date'
    /**
     * Specify sorting the result-set in ascending or descending order.
     * Defaults to: undefined
     * @type boolean
     * @memberof FormsApilistForm
     */
    asc?: boolean
    /**
     * Specify the form name.
     * Defaults to: undefined
     * @type string
     * @memberof FormsApilistForm
     */
    name?: string
}

export class ObjectFormsApi {
    private api: ObservableFormsApi

    public constructor(configuration: Configuration, requestFactory?: FormsApiRequestFactory, responseProcessor?: FormsApiResponseProcessor) {
        this.api = new ObservableFormsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a paginated list of forms with optional filtering and sorting options.
     * List Forms
     * @param param the request object
     */
    public listFormWithHttpInfo(param: FormsApiListFormRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<FormListResponse>> {
        return this.api.listFormWithHttpInfo(param.count, param.page, param.status, param.orderBy, param.asc, param.name,  options).toPromise();
    }

    /**
     * Retrieve a paginated list of forms with optional filtering and sorting options.
     * List Forms
     * @param param the request object
     */
    public listForm(param: FormsApiListFormRequest = {}, options?: ConfigurationOptions): Promise<FormListResponse> {
        return this.api.listForm(param.count, param.page, param.status, param.orderBy, param.asc, param.name,  options).toPromise();
    }

}

import { ObservableMembersApi } from "./ObservableAPI";
import { MembersApiRequestFactory, MembersApiResponseProcessor} from "../apis/MembersApi";

export interface MembersApiCreateMemberTokenRequest {
    /**
     * Member id.
     * Defaults to: undefined
     * @type string
     * @memberof MembersApicreateMemberToken
     */
    memberId: string
    /**
     * 
     * @type CreateMemberTokenRequest
     * @memberof MembersApicreateMemberToken
     */
    createMemberTokenRequest?: CreateMemberTokenRequest
}

export interface MembersApiDetailsCurrentMemberRequest {
}

export interface MembersApiDetailsMemberRequest {
    /**
     * Membership id.
     * Defaults to: undefined
     * @type string
     * @memberof MembersApidetailsMember
     */
    id: string
}

export interface MembersApiListMembersRequest {
}

export class ObjectMembersApi {
    private api: ObservableMembersApi

    public constructor(configuration: Configuration, requestFactory?: MembersApiRequestFactory, responseProcessor?: MembersApiResponseProcessor) {
        this.api = new ObservableMembersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * > 🚧  >  > This endpoint is only exposed upon request. Please reach out to your Account Manager to get access.  > 📘  >  > Make sure you\'re using Public API keys generated by Org Admin, otherwise you\'ll receive a 403 response. 
     * Create Member Token
     * @param param the request object
     */
    public createMemberTokenWithHttpInfo(param: MembersApiCreateMemberTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateMemberTokenResponse>> {
        return this.api.createMemberTokenWithHttpInfo(param.memberId, param.createMemberTokenRequest,  options).toPromise();
    }

    /**
     * > 🚧  >  > This endpoint is only exposed upon request. Please reach out to your Account Manager to get access.  > 📘  >  > Make sure you\'re using Public API keys generated by Org Admin, otherwise you\'ll receive a 403 response. 
     * Create Member Token
     * @param param the request object
     */
    public createMemberToken(param: MembersApiCreateMemberTokenRequest, options?: ConfigurationOptions): Promise<CreateMemberTokenResponse> {
        return this.api.createMemberToken(param.memberId, param.createMemberTokenRequest,  options).toPromise();
    }

    /**
     * Returns the member details of the current user (the owner of the API key).  **User** - is an account with a license in the Organization.   **Member** - is a User with a predefined Role in the Workspace.  | Parameter | Description | |---|---| | `user_id` | A unique identifier of the `user` in the **organization** | | `membership_id` | A unique identifier of the `user` in the **workspace** | | `email` | A user email address | | `first_name` | A user\'s first name | | `last_name` | A user\'s last name | | `is_active` | A boolean value that identifies if a member is active and not blocked | | `workspace` | A unique identifier of the user\'s current active workspace | | `workspace_name` | A name of the user\'s current active workspace | | `email_verified` | A boolean value that identifies if the email is verified | | `role` | A member\'s role in the workspace | | `user_license` | A user license in the organization:  <br/>`Full (Standard)`;  <br/>`Read-only`;  <br/>`eSignature`;  <br/>`Guest`;  <br/>`Creator` | | `date_created` | A date when a member was added to the workspace | | `date_modified` | Last modified date of a member | 
     * Current Member Details
     * @param param the request object
     */
    public detailsCurrentMemberWithHttpInfo(param: MembersApiDetailsCurrentMemberRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<MemberDetailsResponse>> {
        return this.api.detailsCurrentMemberWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the member details of the current user (the owner of the API key).  **User** - is an account with a license in the Organization.   **Member** - is a User with a predefined Role in the Workspace.  | Parameter | Description | |---|---| | `user_id` | A unique identifier of the `user` in the **organization** | | `membership_id` | A unique identifier of the `user` in the **workspace** | | `email` | A user email address | | `first_name` | A user\'s first name | | `last_name` | A user\'s last name | | `is_active` | A boolean value that identifies if a member is active and not blocked | | `workspace` | A unique identifier of the user\'s current active workspace | | `workspace_name` | A name of the user\'s current active workspace | | `email_verified` | A boolean value that identifies if the email is verified | | `role` | A member\'s role in the workspace | | `user_license` | A user license in the organization:  <br/>`Full (Standard)`;  <br/>`Read-only`;  <br/>`eSignature`;  <br/>`Guest`;  <br/>`Creator` | | `date_created` | A date when a member was added to the workspace | | `date_modified` | Last modified date of a member | 
     * Current Member Details
     * @param param the request object
     */
    public detailsCurrentMember(param: MembersApiDetailsCurrentMemberRequest = {}, options?: ConfigurationOptions): Promise<MemberDetailsResponse> {
        return this.api.detailsCurrentMember( options).toPromise();
    }

    /**
     * A method to retrieve a member\'s details by ID.  **User** - is an account with a license in the Organization.   **Member** - is a User with a predefined Role in the Workspace.  | Parameter | Description | |---|---| | `user_id` | A unique identifier of the `user` in the **organization** | | `membership_id` | A unique identifier of the `user` in the **workspace** | | `email` | A user email address | | `first_name` | A user\'s first name | | `last_name` | A user\'s last name | | `is_active` | A boolean value that identifies if a member is active and not blocked | | `workspace` | A unique identifier of the user\'s current active workspace | | `workspace_name` | A name of the user\'s current active workspace | | `email_verified` | A boolean value that identifies if the email is verified | | `role` | A member\'s role in the workspace | | `user_license` | A user license in the organization:  <br/>`Full (Standard)`;  <br/>`Read-only`;  <br/>`eSignature`;  <br/>`Guest`;  <br/>`Creator` | | `date_created` | A date when a member was added to the workspace | | `date_modified` | Last modified date of a member | 
     * Member Details
     * @param param the request object
     */
    public detailsMemberWithHttpInfo(param: MembersApiDetailsMemberRequest, options?: ConfigurationOptions): Promise<HttpInfo<MemberDetailsResponse>> {
        return this.api.detailsMemberWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * A method to retrieve a member\'s details by ID.  **User** - is an account with a license in the Organization.   **Member** - is a User with a predefined Role in the Workspace.  | Parameter | Description | |---|---| | `user_id` | A unique identifier of the `user` in the **organization** | | `membership_id` | A unique identifier of the `user` in the **workspace** | | `email` | A user email address | | `first_name` | A user\'s first name | | `last_name` | A user\'s last name | | `is_active` | A boolean value that identifies if a member is active and not blocked | | `workspace` | A unique identifier of the user\'s current active workspace | | `workspace_name` | A name of the user\'s current active workspace | | `email_verified` | A boolean value that identifies if the email is verified | | `role` | A member\'s role in the workspace | | `user_license` | A user license in the organization:  <br/>`Full (Standard)`;  <br/>`Read-only`;  <br/>`eSignature`;  <br/>`Guest`;  <br/>`Creator` | | `date_created` | A date when a member was added to the workspace | | `date_modified` | Last modified date of a member | 
     * Member Details
     * @param param the request object
     */
    public detailsMember(param: MembersApiDetailsMemberRequest, options?: ConfigurationOptions): Promise<MemberDetailsResponse> {
        return this.api.detailsMember(param.id,  options).toPromise();
    }

    /**
     * Retrieve all members details of the workspace implied by the OAuth token or API key.\\ For each member, the `workspace` parameter shows their active workspace, that is the workspace they are currently working in.\\ This means the `workspace` value can differ from the workspace implied by your API key. 
     * List Members
     * @param param the request object
     */
    public listMembersWithHttpInfo(param: MembersApiListMembersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<MemberListResponse>> {
        return this.api.listMembersWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieve all members details of the workspace implied by the OAuth token or API key.\\ For each member, the `workspace` parameter shows their active workspace, that is the workspace they are currently working in.\\ This means the `workspace` value can differ from the workspace implied by your API key. 
     * List Members
     * @param param the request object
     */
    public listMembers(param: MembersApiListMembersRequest = {}, options?: ConfigurationOptions): Promise<MemberListResponse> {
        return this.api.listMembers( options).toPromise();
    }

}

import { ObservableNotaryApi } from "./ObservableAPI";
import { NotaryApiRequestFactory, NotaryApiResponseProcessor} from "../apis/NotaryApi";

export interface NotaryApiCreateNotarizationRequestRequest {
    /**
     * 
     * @type CreateNotarizationRequest
     * @memberof NotaryApicreateNotarizationRequest
     */
    createNotarizationRequest: CreateNotarizationRequest
}

export interface NotaryApiDeleteNotarizationRequestRequest {
    /**
     * Notarization Request ID.
     * Defaults to: undefined
     * @type string
     * @memberof NotaryApideleteNotarizationRequest
     */
    sessionRequestId: string
}

export interface NotaryApiListNotariesRequest {
    /**
     * Filter by status (comma-separated values supported). Valid values are INVITED, UNDER_REVIEW, ACTIVE, REJECTED, INACTIVE
     * Defaults to: undefined
     * @type Array&lt;&#39;INVITED&#39; | &#39;UNDER_REVIEW&#39; | &#39;ACTIVE&#39; | &#39;REJECTED&#39; | &#39;INACTIVE&#39;&gt;
     * @memberof NotaryApilistNotaries
     */
    status?: Array<'INVITED' | 'UNDER_REVIEW' | 'ACTIVE' | 'REJECTED' | 'INACTIVE'>
    /**
     * Filter by commission state (comma-separated values supported)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof NotaryApilistNotaries
     */
    commissionState?: Array<string>
    /**
     * Number of results to skip
     * Defaults to: 0
     * @type number
     * @memberof NotaryApilistNotaries
     */
    offset?: number
    /**
     * Maximum number of results to return
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof NotaryApilistNotaries
     */
    limit?: number
    /**
     * Sort by name, email, or status (default is email). Use a - prefix for descending order (e.g., -email)
     * Defaults to: &#39;email&#39;
     * @type &#39;email&#39; | &#39;-email&#39; | &#39;status&#39; | &#39;-status&#39; | &#39;name&#39; | &#39;-name&#39;
     * @memberof NotaryApilistNotaries
     */
    orderBy?: 'email' | '-email' | 'status' | '-status' | 'name' | '-name'
}

export interface NotaryApiNotarizationRequestDetailsRequest {
    /**
     * Notarization Request ID.
     * Defaults to: undefined
     * @type string
     * @memberof NotaryApinotarizationRequestDetails
     */
    sessionRequestId: string
}

export class ObjectNotaryApi {
    private api: ObservableNotaryApi

    public constructor(configuration: Configuration, requestFactory?: NotaryApiRequestFactory, responseProcessor?: NotaryApiResponseProcessor) {
        this.api = new ObservableNotaryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a notarization request to connect with a notary and complete online notarizations for your signers within minutes.  > 🚧 **Important:** This endpoint supports only documents in draft status.  ## Prerequisites  > 🚧 Before you start >  > Ensure the following before creating a notarization request: >  > - Install the Notary On-Demand or Notary add-on > - Create a document for notarization and get its `document_id`. To create a document, use the [Create Document from Template](https://developers.pandadoc.com/reference/create-document-from-pandadoc-template) or [Create Document from File Upload](https://developers.pandadoc.com/reference/create-document-from-pdf) endpoint.  ## Request Details  For the notarization request, include in the request body:  - `document_id` - At least one `invitees`, specifying their `email`, `first_name`, and `last_name` - Optionally, include a `message` for your signers - Optionally, using `disable_invitees_notifications` you can disable all notifications for invitees including email with invitation for notarization. This is useful when you are using alternative delivery methods. - If in-house notary must be assigned to this request, include the `notary` object with the notary\'s `id`, `scheduled_at` timestamp, and an optional `message` for the notary  After the API call is executed, your signers will receive an email invitation for notarization. Alternatively, you can directly share the `notarization_link` with your signers, which is available in the 201 response body.  Upon successful notarization, you will receive an email with a link to the notarized document.  ## Usage Tips  > 📘 Best Practices >  > - Ensure that signers are added as both invitees in the request body and recipients in the document to avoid inconveniences during notary sessions > - Signers will receive an email with a notary link upon a successful API call; this link is also in the 201 response > - In case if notary is not specified in the request, signers will use the link to connect with commissioned online notaries, available Mon-Fri, 9 AM - 9 PM Central Time, typically responding within 2 minutes > - If notary is specified, signers will use the link to connect with your in-house notary at the scheduled time  ## Limits  A maximum of 100 API calls per minute is permitted. Exceeding this limit triggers a 429 Too Many Requests error.  ## Troubleshooting  **Solutions for 4xx Response Codes:**  - **403 Forbidden (Inactive Add-on)**: Ensure the Notary On-Demand or Notary add-on is installed - **403 Forbidden (Transactions Limit)**: Purchase additional transactions either through the Notary UI or by contacting the Sales team - **429 Too Many Requests**: If you hit the limit, hold your API calls, then send them after waiting for the retry time  > 📘 To learn more about PandaDoc Notary On-Demand, visit our [website](https://notary.pandadoc.com/notary-on-demand/). 
     * Create Notarization Request
     * @param param the request object
     */
    public createNotarizationRequestWithHttpInfo(param: NotaryApiCreateNotarizationRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateNotarizationResponse>> {
        return this.api.createNotarizationRequestWithHttpInfo(param.createNotarizationRequest,  options).toPromise();
    }

    /**
     * Create a notarization request to connect with a notary and complete online notarizations for your signers within minutes.  > 🚧 **Important:** This endpoint supports only documents in draft status.  ## Prerequisites  > 🚧 Before you start >  > Ensure the following before creating a notarization request: >  > - Install the Notary On-Demand or Notary add-on > - Create a document for notarization and get its `document_id`. To create a document, use the [Create Document from Template](https://developers.pandadoc.com/reference/create-document-from-pandadoc-template) or [Create Document from File Upload](https://developers.pandadoc.com/reference/create-document-from-pdf) endpoint.  ## Request Details  For the notarization request, include in the request body:  - `document_id` - At least one `invitees`, specifying their `email`, `first_name`, and `last_name` - Optionally, include a `message` for your signers - Optionally, using `disable_invitees_notifications` you can disable all notifications for invitees including email with invitation for notarization. This is useful when you are using alternative delivery methods. - If in-house notary must be assigned to this request, include the `notary` object with the notary\'s `id`, `scheduled_at` timestamp, and an optional `message` for the notary  After the API call is executed, your signers will receive an email invitation for notarization. Alternatively, you can directly share the `notarization_link` with your signers, which is available in the 201 response body.  Upon successful notarization, you will receive an email with a link to the notarized document.  ## Usage Tips  > 📘 Best Practices >  > - Ensure that signers are added as both invitees in the request body and recipients in the document to avoid inconveniences during notary sessions > - Signers will receive an email with a notary link upon a successful API call; this link is also in the 201 response > - In case if notary is not specified in the request, signers will use the link to connect with commissioned online notaries, available Mon-Fri, 9 AM - 9 PM Central Time, typically responding within 2 minutes > - If notary is specified, signers will use the link to connect with your in-house notary at the scheduled time  ## Limits  A maximum of 100 API calls per minute is permitted. Exceeding this limit triggers a 429 Too Many Requests error.  ## Troubleshooting  **Solutions for 4xx Response Codes:**  - **403 Forbidden (Inactive Add-on)**: Ensure the Notary On-Demand or Notary add-on is installed - **403 Forbidden (Transactions Limit)**: Purchase additional transactions either through the Notary UI or by contacting the Sales team - **429 Too Many Requests**: If you hit the limit, hold your API calls, then send them after waiting for the retry time  > 📘 To learn more about PandaDoc Notary On-Demand, visit our [website](https://notary.pandadoc.com/notary-on-demand/). 
     * Create Notarization Request
     * @param param the request object
     */
    public createNotarizationRequest(param: NotaryApiCreateNotarizationRequestRequest, options?: ConfigurationOptions): Promise<CreateNotarizationResponse> {
        return this.api.createNotarizationRequest(param.createNotarizationRequest,  options).toPromise();
    }

    /**
     * Use this method to delete a notarization request. Once notarization request is deleted it cannot be restored.  > 🚧 Notarization Request status >  > You can only delete a notarization request in status \'SENT\', \'WAITING_FOR_NOTARY\' or \'INCOMPLETE\'.  > If the notarization request is in any other status, the request will return a 400 Bad Request error.  By default all invitees will receive email notification about deletion of the notarization request.  If you want to disable this notification, you can use the `disable_invitees_notifications` parameter when creating request (see [Create Notarization Request](https://developers.pandadoc.com/reference/create-notarization-request)). 
     * Delete Notarization Request
     * @param param the request object
     */
    public deleteNotarizationRequestWithHttpInfo(param: NotaryApiDeleteNotarizationRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteNotarizationRequestWithHttpInfo(param.sessionRequestId,  options).toPromise();
    }

    /**
     * Use this method to delete a notarization request. Once notarization request is deleted it cannot be restored.  > 🚧 Notarization Request status >  > You can only delete a notarization request in status \'SENT\', \'WAITING_FOR_NOTARY\' or \'INCOMPLETE\'.  > If the notarization request is in any other status, the request will return a 400 Bad Request error.  By default all invitees will receive email notification about deletion of the notarization request.  If you want to disable this notification, you can use the `disable_invitees_notifications` parameter when creating request (see [Create Notarization Request](https://developers.pandadoc.com/reference/create-notarization-request)). 
     * Delete Notarization Request
     * @param param the request object
     */
    public deleteNotarizationRequest(param: NotaryApiDeleteNotarizationRequestRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteNotarizationRequest(param.sessionRequestId,  options).toPromise();
    }

    /**
     * Retrieve a list of notaries associated with your organization.  ## Important Notes  - At the moment, notaries can be added to organization only manually through the PandaDoc Notary UI.  - Organization must have Notary addon enabled to use this endpoint 
     * List Notaries
     * @param param the request object
     */
    public listNotariesWithHttpInfo(param: NotaryApiListNotariesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListNotariesResponse>> {
        return this.api.listNotariesWithHttpInfo(param.status, param.commissionState, param.offset, param.limit, param.orderBy,  options).toPromise();
    }

    /**
     * Retrieve a list of notaries associated with your organization.  ## Important Notes  - At the moment, notaries can be added to organization only manually through the PandaDoc Notary UI.  - Organization must have Notary addon enabled to use this endpoint 
     * List Notaries
     * @param param the request object
     */
    public listNotaries(param: NotaryApiListNotariesRequest = {}, options?: ConfigurationOptions): Promise<ListNotariesResponse> {
        return this.api.listNotaries(param.status, param.commissionState, param.offset, param.limit, param.orderBy,  options).toPromise();
    }

    /**
     * Get details about a notarization request by its `id`.  Details include:  - Basic notarization request information (status, creator, invitees). - Signed documents information with links for downloading. - Notarization session recording information with link for downloading. - Timestamps associated with a notarization request.  ## Available Notarization Request Statuses  The following is a complete list of all possible notarization request statuses returned:  | Notarization Request Status | Status Description                                                                                                 | | :-------------------------- | :----------------------------------------------------------------------------------------------------------------- | | SENT                        | Notarization request has been created. Invitees are notified and can start the process of finding a notary.        | | WAITING_FOR_NOTARY          | One of the invitees initialised the process of finding a notary.                                                   | | ACCEPTED                    | Notarization request has been accepted by the notary. At this time nobody has joined the notarization session yet. | | LIVE                        | Notarization session has started.                                                                                  | | COMPLETED                   | Notarization session is finished. Documents have been successfully signed and ready for downloading.               | | INCOMPLETE                  | Notarization session has started but was not completed successfully.                                               |  ## Signed documents  Signed documents are the documents that were successfully signed during the notarization session. The signed document\'s info is available only if the notarization request has `COMPLETED` status, otherwise the returned list will be empty.    In case you uploaded several documents for notarization then the `signed_documents` list will contain links for downloading for each document separately (with `SINGLE` document type) and link for the combined document (with `COMBINED` document type accordingly).  ## Recording  Recording is the video of the notarization session. The recording info is available only if the notarization request has `COMPLETED` status and recording is available, otherwise the returned object will be empty.  > 📘 Links expire in 1 hour >  > **Note**: The signed document and recording links expire in 1 hour. After this time it will be not possible to download files using the returned urls. In this case you need to call endpoint again since each request generates a new link.  ## Limits  A maximum of 100 API calls per minute is permitted. Exceeding this limit triggers a 429 Too Many Requests error. 
     * Notarization Request Details
     * @param param the request object
     */
    public notarizationRequestDetailsWithHttpInfo(param: NotaryApiNotarizationRequestDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<NotarizationRequestDetailsResponse>> {
        return this.api.notarizationRequestDetailsWithHttpInfo(param.sessionRequestId,  options).toPromise();
    }

    /**
     * Get details about a notarization request by its `id`.  Details include:  - Basic notarization request information (status, creator, invitees). - Signed documents information with links for downloading. - Notarization session recording information with link for downloading. - Timestamps associated with a notarization request.  ## Available Notarization Request Statuses  The following is a complete list of all possible notarization request statuses returned:  | Notarization Request Status | Status Description                                                                                                 | | :-------------------------- | :----------------------------------------------------------------------------------------------------------------- | | SENT                        | Notarization request has been created. Invitees are notified and can start the process of finding a notary.        | | WAITING_FOR_NOTARY          | One of the invitees initialised the process of finding a notary.                                                   | | ACCEPTED                    | Notarization request has been accepted by the notary. At this time nobody has joined the notarization session yet. | | LIVE                        | Notarization session has started.                                                                                  | | COMPLETED                   | Notarization session is finished. Documents have been successfully signed and ready for downloading.               | | INCOMPLETE                  | Notarization session has started but was not completed successfully.                                               |  ## Signed documents  Signed documents are the documents that were successfully signed during the notarization session. The signed document\'s info is available only if the notarization request has `COMPLETED` status, otherwise the returned list will be empty.    In case you uploaded several documents for notarization then the `signed_documents` list will contain links for downloading for each document separately (with `SINGLE` document type) and link for the combined document (with `COMBINED` document type accordingly).  ## Recording  Recording is the video of the notarization session. The recording info is available only if the notarization request has `COMPLETED` status and recording is available, otherwise the returned object will be empty.  > 📘 Links expire in 1 hour >  > **Note**: The signed document and recording links expire in 1 hour. After this time it will be not possible to download files using the returned urls. In this case you need to call endpoint again since each request generates a new link.  ## Limits  A maximum of 100 API calls per minute is permitted. Exceeding this limit triggers a 429 Too Many Requests error. 
     * Notarization Request Details
     * @param param the request object
     */
    public notarizationRequestDetails(param: NotaryApiNotarizationRequestDetailsRequest, options?: ConfigurationOptions): Promise<NotarizationRequestDetailsResponse> {
        return this.api.notarizationRequestDetails(param.sessionRequestId,  options).toPromise();
    }

}

import { ObservableOAuth20AuthenticationApi } from "./ObservableAPI";
import { OAuth20AuthenticationApiRequestFactory, OAuth20AuthenticationApiResponseProcessor} from "../apis/OAuth20AuthenticationApi";

export interface OAuth20AuthenticationApiAccessTokenRequest {
    /**
     * This value must be set to &#x60;refresh_token&#x60;.
     * Defaults to: &#39;refresh_token&#39;
     * @type string
     * @memberof OAuth20AuthenticationApiaccessToken
     */
    grantType?: string
    /**
     * Client ID that is automatically generated after application creation in the Developer Dashboard.
     * Defaults to: undefined
     * @type string
     * @memberof OAuth20AuthenticationApiaccessToken
     */
    clientId?: string
    /**
     * Client secret that is automatically generated after application creation in the Developer Dashboard.
     * Defaults to: undefined
     * @type string
     * @memberof OAuth20AuthenticationApiaccessToken
     */
    clientSecret?: string
    /**
     * &#x60;auth_code&#x60; from the server on the previous step (Authorize a PandaDoc User). 
     * Defaults to: undefined
     * @type string
     * @memberof OAuth20AuthenticationApiaccessToken
     */
    code?: string
    /**
     * Requested permissions. Use &#x60;read+write&#x60; as our default value to send documents.
     * Defaults to: undefined
     * @type string
     * @memberof OAuth20AuthenticationApiaccessToken
     */
    scope?: string
    /**
     * &#x60;refresh_token&#x60; you received and stored from the server when initially creating an &#x60;access_token&#x60;. 
     * Defaults to: undefined
     * @type string
     * @memberof OAuth20AuthenticationApiaccessToken
     */
    refreshToken?: string
}

export class ObjectOAuth20AuthenticationApi {
    private api: ObservableOAuth20AuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: OAuth20AuthenticationApiRequestFactory, responseProcessor?: OAuth20AuthenticationApiResponseProcessor) {
        this.api = new ObservableOAuth20AuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create or refresh an access token to make requests on behalf of a user. This endpoint is used to obtain an `access_token` and `refresh_token` for the first time, and to refresh the `access_token` when it expires. This endpoint is part of OAuth 2.0 implementation. You need to configure OAuth App to obtain `client_id` and `client_secret`. Read more about [OAuth 2.0 implementation](https://developers.pandadoc.com/reference/authentication-process). Make sure you\'re sending the header `Content-Type: application/x-www-form-urlencoded`.   ## Create Access Token As a result of the OAuth 2.0 user authentication process, you should get a `code` that can be exchanged for an `access_token`. Use this endpoint to do this exchange, and to refresh the token later.  > 🚧 Invalid Grant? >  > If you receive an `invalid grant` response it is likely because you used the same `code` more than once from the [Authorize a PandaDoc User](ref:authorize-a-user) step above. The `code` parameter is generated for one-time use. A new `code` value must be generated if you wish to change API users, permissions, or simply generate a new `code` value for the same PandaDoc user.  > 📘 expires_in >  > `expires_in` is based in seconds. Currently, a token expires in 31535999 seconds = 1 year.  ## Refresh Access Token Eventually, `access_token` expires and accessing an API method returns **401 unauthorized**. Your application needs to refresh the OAuth2 token with the stored `refresh_token` returned when initially creating an access token.  Once refreshed, calls on behalf of the originally authorized user can resume immediately. Use the newly returned `access_token` for all future API requests.  > 🚧 Invalid Grant? >  > If you receive an `invalid grant` response, it is likely because your `refresh_token` is invalid. 
     * Create/Refresh Access Token
     * @param param the request object
     */
    public accessTokenWithHttpInfo(param: OAuth20AuthenticationApiAccessTokenRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<OAuth2AccessTokenResponse>> {
        return this.api.accessTokenWithHttpInfo(param.grantType, param.clientId, param.clientSecret, param.code, param.scope, param.refreshToken,  options).toPromise();
    }

    /**
     * Create or refresh an access token to make requests on behalf of a user. This endpoint is used to obtain an `access_token` and `refresh_token` for the first time, and to refresh the `access_token` when it expires. This endpoint is part of OAuth 2.0 implementation. You need to configure OAuth App to obtain `client_id` and `client_secret`. Read more about [OAuth 2.0 implementation](https://developers.pandadoc.com/reference/authentication-process). Make sure you\'re sending the header `Content-Type: application/x-www-form-urlencoded`.   ## Create Access Token As a result of the OAuth 2.0 user authentication process, you should get a `code` that can be exchanged for an `access_token`. Use this endpoint to do this exchange, and to refresh the token later.  > 🚧 Invalid Grant? >  > If you receive an `invalid grant` response it is likely because you used the same `code` more than once from the [Authorize a PandaDoc User](ref:authorize-a-user) step above. The `code` parameter is generated for one-time use. A new `code` value must be generated if you wish to change API users, permissions, or simply generate a new `code` value for the same PandaDoc user.  > 📘 expires_in >  > `expires_in` is based in seconds. Currently, a token expires in 31535999 seconds = 1 year.  ## Refresh Access Token Eventually, `access_token` expires and accessing an API method returns **401 unauthorized**. Your application needs to refresh the OAuth2 token with the stored `refresh_token` returned when initially creating an access token.  Once refreshed, calls on behalf of the originally authorized user can resume immediately. Use the newly returned `access_token` for all future API requests.  > 🚧 Invalid Grant? >  > If you receive an `invalid grant` response, it is likely because your `refresh_token` is invalid. 
     * Create/Refresh Access Token
     * @param param the request object
     */
    public accessToken(param: OAuth20AuthenticationApiAccessTokenRequest = {}, options?: ConfigurationOptions): Promise<OAuth2AccessTokenResponse> {
        return this.api.accessToken(param.grantType, param.clientId, param.clientSecret, param.code, param.scope, param.refreshToken,  options).toPromise();
    }

}

import { ObservableProductCatalogApi } from "./ObservableAPI";
import { ProductCatalogApiRequestFactory, ProductCatalogApiResponseProcessor} from "../apis/ProductCatalogApi";

export interface ProductCatalogApiCreateCatalogItemRequest {
    /**
     * 
     * @type ProductCatalogItemRequest
     * @memberof ProductCatalogApicreateCatalogItem
     */
    productCatalogItemRequest: ProductCatalogItemRequest
}

export interface ProductCatalogApiDeleteCatalogItemRequest {
    /**
     * Catalog item UUID
     * Defaults to: undefined
     * @type string
     * @memberof ProductCatalogApideleteCatalogItem
     */
    itemUuid: string
}

export interface ProductCatalogApiGetCatalogItemRequest {
    /**
     * Catalog item UUID
     * Defaults to: undefined
     * @type string
     * @memberof ProductCatalogApigetCatalogItem
     */
    itemUuid: string
}

export interface ProductCatalogApiSearchCatalogItemsRequest {
    /**
     * Page number.
     * Defaults to: undefined
     * @type number
     * @memberof ProductCatalogApisearchCatalogItems
     */
    page?: number
    /**
     * Items per page.
     * Defaults to: undefined
     * @type number
     * @memberof ProductCatalogApisearchCatalogItems
     */
    perPage?: number
    /**
     * Search query. Searches the following fields: Title, SKU, description, category name, custom fields name and value. 
     * Defaults to: undefined
     * @type string
     * @memberof ProductCatalogApisearchCatalogItems
     */
    query?: string
    /**
     * Ordering principle for displaying search results.
     * Defaults to: undefined
     * @type &#39;sku&#39; | &#39;-sku&#39; | &#39;title&#39; | &#39;-title&#39; | &#39;price&#39; | &#39;-price&#39; | &#39;date_modified&#39; | &#39;-date_modified&#39;
     * @memberof ProductCatalogApisearchCatalogItems
     */
    orderBy?: 'sku' | '-sku' | 'title' | '-title' | 'price' | '-price' | 'date_modified' | '-date_modified'
    /**
     * Filter by catalog item types.
     * Defaults to: undefined
     * @type Array&lt;ProductCatalogTypeEnum&gt;
     * @memberof ProductCatalogApisearchCatalogItems
     */
    types?: Array<ProductCatalogTypeEnum>
    /**
     * Filter by billing types.
     * Defaults to: undefined
     * @type Array&lt;&#39;one_time&#39; | &#39;recurring&#39;&gt;
     * @memberof ProductCatalogApisearchCatalogItems
     */
    billingTypes?: Array<'one_time' | 'recurring'>
    /**
     * A list of item uuids to be excluded from search.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ProductCatalogApisearchCatalogItems
     */
    excludeUuids?: Array<string>
    /**
     * Category id.
     * Defaults to: undefined
     * @type string
     * @memberof ProductCatalogApisearchCatalogItems
     */
    categoryId?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof ProductCatalogApisearchCatalogItems
     */
    noCategory?: boolean
}

export interface ProductCatalogApiUpdateCatalogItemRequest {
    /**
     * Catalog item UUID
     * Defaults to: undefined
     * @type string
     * @memberof ProductCatalogApiupdateCatalogItem
     */
    itemUuid: string
    /**
     * 
     * @type ProductCatalogItemPatchRequest
     * @memberof ProductCatalogApiupdateCatalogItem
     */
    productCatalogItemPatchRequest: ProductCatalogItemPatchRequest
}

export class ObjectProductCatalogApi {
    private api: ObservableProductCatalogApi

    public constructor(configuration: Configuration, requestFactory?: ProductCatalogApiRequestFactory, responseProcessor?: ProductCatalogApiResponseProcessor) {
        this.api = new ObservableProductCatalogApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new catalog item.
     * Create Catalog Item
     * @param param the request object
     */
    public createCatalogItemWithHttpInfo(param: ProductCatalogApiCreateCatalogItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductCatalogItemResponse>> {
        return this.api.createCatalogItemWithHttpInfo(param.productCatalogItemRequest,  options).toPromise();
    }

    /**
     * Create a new catalog item.
     * Create Catalog Item
     * @param param the request object
     */
    public createCatalogItem(param: ProductCatalogApiCreateCatalogItemRequest, options?: ConfigurationOptions): Promise<ProductCatalogItemResponse> {
        return this.api.createCatalogItem(param.productCatalogItemRequest,  options).toPromise();
    }

    /**
     * Delete catalog item.
     * Delete Catalog Item
     * @param param the request object
     */
    public deleteCatalogItemWithHttpInfo(param: ProductCatalogApiDeleteCatalogItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteCatalogItemWithHttpInfo(param.itemUuid,  options).toPromise();
    }

    /**
     * Delete catalog item.
     * Delete Catalog Item
     * @param param the request object
     */
    public deleteCatalogItem(param: ProductCatalogApiDeleteCatalogItemRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteCatalogItem(param.itemUuid,  options).toPromise();
    }

    /**
     * Get catalog item.
     * Catalog Item Details
     * @param param the request object
     */
    public getCatalogItemWithHttpInfo(param: ProductCatalogApiGetCatalogItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductCatalogItemResponse>> {
        return this.api.getCatalogItemWithHttpInfo(param.itemUuid,  options).toPromise();
    }

    /**
     * Get catalog item.
     * Catalog Item Details
     * @param param the request object
     */
    public getCatalogItem(param: ProductCatalogApiGetCatalogItemRequest, options?: ConfigurationOptions): Promise<ProductCatalogItemResponse> {
        return this.api.getCatalogItem(param.itemUuid,  options).toPromise();
    }

    /**
     * This method searches for items in your [product catalog](https://support.pandadoc.com/en/articles/9714691-product-catalog).  Use the `query` parameter to search in title, SKU, description, category name, custom fields name and value. You can also search for items by their type, billing type, and category id.  Order search results, in both ascending and descending order, by these item properties:  - SKU - Name - Price - Modification date  Use the `exclude_uuids` parameter to exclude particular uuids from the search request. 
     * List Catalog Items Search
     * @param param the request object
     */
    public searchCatalogItemsWithHttpInfo(param: ProductCatalogApiSearchCatalogItemsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListCatalogItemsSearchResponse>> {
        return this.api.searchCatalogItemsWithHttpInfo(param.page, param.perPage, param.query, param.orderBy, param.types, param.billingTypes, param.excludeUuids, param.categoryId, param.noCategory,  options).toPromise();
    }

    /**
     * This method searches for items in your [product catalog](https://support.pandadoc.com/en/articles/9714691-product-catalog).  Use the `query` parameter to search in title, SKU, description, category name, custom fields name and value. You can also search for items by their type, billing type, and category id.  Order search results, in both ascending and descending order, by these item properties:  - SKU - Name - Price - Modification date  Use the `exclude_uuids` parameter to exclude particular uuids from the search request. 
     * List Catalog Items Search
     * @param param the request object
     */
    public searchCatalogItems(param: ProductCatalogApiSearchCatalogItemsRequest = {}, options?: ConfigurationOptions): Promise<ListCatalogItemsSearchResponse> {
        return this.api.searchCatalogItems(param.page, param.perPage, param.query, param.orderBy, param.types, param.billingTypes, param.excludeUuids, param.categoryId, param.noCategory,  options).toPromise();
    }

    /**
     * Update catalog item.
     * Update Catalog Item
     * @param param the request object
     */
    public updateCatalogItemWithHttpInfo(param: ProductCatalogApiUpdateCatalogItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProductCatalogItemResponse>> {
        return this.api.updateCatalogItemWithHttpInfo(param.itemUuid, param.productCatalogItemPatchRequest,  options).toPromise();
    }

    /**
     * Update catalog item.
     * Update Catalog Item
     * @param param the request object
     */
    public updateCatalogItem(param: ProductCatalogApiUpdateCatalogItemRequest, options?: ConfigurationOptions): Promise<ProductCatalogItemResponse> {
        return this.api.updateCatalogItem(param.itemUuid, param.productCatalogItemPatchRequest,  options).toPromise();
    }

}

import { ObservableQuotesApi } from "./ObservableAPI";
import { QuotesApiRequestFactory, QuotesApiResponseProcessor} from "../apis/QuotesApi";

export interface QuotesApiQuoteUpdateRequest {
    /**
     * Document ID
     * Defaults to: undefined
     * @type string
     * @memberof QuotesApiquoteUpdate
     */
    documentId: string
    /**
     * Quote ID
     * Defaults to: undefined
     * @type string
     * @memberof QuotesApiquoteUpdate
     */
    quoteId: string
    /**
     * 
     * @type QuoteUpdateRequest
     * @memberof QuotesApiquoteUpdate
     */
    quoteUpdateRequest: QuoteUpdateRequest
}

export class ObjectQuotesApi {
    private api: ObservableQuotesApi

    public constructor(configuration: Configuration, requestFactory?: QuotesApiRequestFactory, responseProcessor?: QuotesApiResponseProcessor) {
        this.api = new ObservableQuotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This operation updates the details of a specific quote within a document by specifying the document ID and quote ID.
     * Quote update
     * @param param the request object
     */
    public quoteUpdateWithHttpInfo(param: QuotesApiQuoteUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuoteResponse>> {
        return this.api.quoteUpdateWithHttpInfo(param.documentId, param.quoteId, param.quoteUpdateRequest,  options).toPromise();
    }

    /**
     * This operation updates the details of a specific quote within a document by specifying the document ID and quote ID.
     * Quote update
     * @param param the request object
     */
    public quoteUpdate(param: QuotesApiQuoteUpdateRequest, options?: ConfigurationOptions): Promise<QuoteResponse> {
        return this.api.quoteUpdate(param.documentId, param.quoteId, param.quoteUpdateRequest,  options).toPromise();
    }

}

import { ObservableTemplateSettingsApi } from "./ObservableAPI";
import { TemplateSettingsApiRequestFactory, TemplateSettingsApiResponseProcessor} from "../apis/TemplateSettingsApi";

export interface TemplateSettingsApiTemplateSettingsGetRequest {
    /**
     * Unique identifier of the template to retrieve settings for.
     * Defaults to: undefined
     * @type string
     * @memberof TemplateSettingsApitemplateSettingsGet
     */
    templateId: string
}

export interface TemplateSettingsApiTemplateSettingsUpdateRequest {
    /**
     * Unique identifier of the template to update settings for.
     * Defaults to: undefined
     * @type string
     * @memberof TemplateSettingsApitemplateSettingsUpdate
     */
    templateId: string
    /**
     * 
     * @type UpdateTemplateSettingsRequest
     * @memberof TemplateSettingsApitemplateSettingsUpdate
     */
    updateTemplateSettingsRequest: UpdateTemplateSettingsRequest
}

export class ObjectTemplateSettingsApi {
    private api: ObservableTemplateSettingsApi

    public constructor(configuration: Configuration, requestFactory?: TemplateSettingsApiRequestFactory, responseProcessor?: TemplateSettingsApiResponseProcessor) {
        this.api = new ObservableTemplateSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the settings for a specified template. Only the language field is currently supported. 
     * Get template settings
     * @param param the request object
     */
    public templateSettingsGetWithHttpInfo(param: TemplateSettingsApiTemplateSettingsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateSettingsResponse>> {
        return this.api.templateSettingsGetWithHttpInfo(param.templateId,  options).toPromise();
    }

    /**
     * Retrieves the settings for a specified template. Only the language field is currently supported. 
     * Get template settings
     * @param param the request object
     */
    public templateSettingsGet(param: TemplateSettingsApiTemplateSettingsGetRequest, options?: ConfigurationOptions): Promise<TemplateSettingsResponse> {
        return this.api.templateSettingsGet(param.templateId,  options).toPromise();
    }

    /**
     * Updates the settings for a specified template. Only the language field is currently supported. 
     * Update template settings
     * @param param the request object
     */
    public templateSettingsUpdateWithHttpInfo(param: TemplateSettingsApiTemplateSettingsUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateSettingsResponse>> {
        return this.api.templateSettingsUpdateWithHttpInfo(param.templateId, param.updateTemplateSettingsRequest,  options).toPromise();
    }

    /**
     * Updates the settings for a specified template. Only the language field is currently supported. 
     * Update template settings
     * @param param the request object
     */
    public templateSettingsUpdate(param: TemplateSettingsApiTemplateSettingsUpdateRequest, options?: ConfigurationOptions): Promise<TemplateSettingsResponse> {
        return this.api.templateSettingsUpdate(param.templateId, param.updateTemplateSettingsRequest,  options).toPromise();
    }

}

import { ObservableTemplatesApi } from "./ObservableAPI";
import { TemplatesApiRequestFactory, TemplatesApiResponseProcessor} from "../apis/TemplatesApi";

export interface TemplatesApiCreateTemplateRequest {
    /**
     * 
     * @type CreateTemplateFromUrlRequest
     * @memberof TemplatesApicreateTemplate
     */
    createTemplateFromUrlRequest: CreateTemplateFromUrlRequest
    /**
     * A comma-separated list of additional fields to include in the response.
     * Defaults to: undefined
     * @type Array&lt;&#39;content_date_modified&#39;&gt;
     * @memberof TemplatesApicreateTemplate
     */
    fields?: Array<'content_date_modified'>
}

export interface TemplatesApiCreateTemplateEditingSessionRequest {
    /**
     * Template ID
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApicreateTemplateEditingSession
     */
    id: string
    /**
     * 
     * @type EditingSessionRequest
     * @memberof TemplatesApicreateTemplateEditingSession
     */
    editingSessionRequest: EditingSessionRequest
}

export interface TemplatesApiCreateTemplateWithUploadRequest {
    /**
     * A comma-separated list of additional fields to include in the response.
     * Defaults to: undefined
     * @type Array&lt;&#39;content_date_modified&#39;&gt;
     * @memberof TemplatesApicreateTemplateWithUpload
     */
    fields?: Array<'content_date_modified'>
    /**
     * Binary PDF/DocX/RTF File.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof TemplatesApicreateTemplateWithUpload
     */
    file?: HttpFile
    /**
     * JSON as a multipart/form-data string.
     * Defaults to: undefined
     * @type CreateTemplateRequest
     * @memberof TemplatesApicreateTemplateWithUpload
     */
    data?: CreateTemplateRequest
}

export interface TemplatesApiDeleteTemplateRequest {
    /**
     * Template ID
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApideleteTemplate
     */
    id: string
}

export interface TemplatesApiDetailsTemplateRequest {
    /**
     * Template ID
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApidetailsTemplate
     */
    id: string
}

export interface TemplatesApiListTemplatesRequest {
    /**
     * Search query. Filter by template name.
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApilistTemplates
     */
    q?: string
    /**
     * Returns only the shared templates.
     * Defaults to: undefined
     * @type boolean
     * @memberof TemplatesApilistTemplates
     */
    shared?: boolean
    /**
     * Returns only the deleted templates.
     * Defaults to: undefined
     * @type boolean
     * @memberof TemplatesApilistTemplates
     */
    deleted?: boolean
    /**
     * Specify how many templates to return.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof TemplatesApilistTemplates
     */
    count?: number
    /**
     * Specify which page of the dataset to return.
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TemplatesApilistTemplates
     */
    page?: number
    /**
     * Specify template ID.
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApilistTemplates
     */
    id?: string
    /**
     * UUID of the folder where the templates are stored.
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApilistTemplates
     */
    folderUuid?: string
    /**
     * Search tag. Filter by template tag.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TemplatesApilistTemplates
     */
    tag?: Array<string>
    /**
     * A comma-separated list of additional fields to include in the response.
     * Defaults to: undefined
     * @type Array&lt;&#39;content_date_modified&#39;&gt;
     * @memberof TemplatesApilistTemplates
     */
    fields?: Array<'content_date_modified'>
}

export interface TemplatesApiStatusTemplateRequest {
    /**
     * Template ID
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApistatusTemplate
     */
    id: string
}

export interface TemplatesApiUpdateTemplateRequest {
    /**
     * Template ID
     * Defaults to: undefined
     * @type string
     * @memberof TemplatesApiupdateTemplate
     */
    id: string
    /**
     * 
     * @type TemplateUpdateRequest
     * @memberof TemplatesApiupdateTemplate
     */
    templateUpdateRequest: TemplateUpdateRequest
}

export class ObjectTemplatesApi {
    private api: ObservableTemplatesApi

    public constructor(configuration: Configuration, requestFactory?: TemplatesApiRequestFactory, responseProcessor?: TemplatesApiResponseProcessor) {
        this.api = new ObservableTemplatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This operation allows you to create a new template by providing the necessary template details.
     * Create Template
     * @param param the request object
     */
    public createTemplateWithHttpInfo(param: TemplatesApiCreateTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateCreateResponse>> {
        return this.api.createTemplateWithHttpInfo(param.createTemplateFromUrlRequest, param.fields,  options).toPromise();
    }

    /**
     * This operation allows you to create a new template by providing the necessary template details.
     * Create Template
     * @param param the request object
     */
    public createTemplate(param: TemplatesApiCreateTemplateRequest, options?: ConfigurationOptions): Promise<TemplateCreateResponse> {
        return this.api.createTemplate(param.createTemplateFromUrlRequest, param.fields,  options).toPromise();
    }

    /**
     * Creates a new editing session for the Embedded Editor. The response includes an E-Token, which is required to open the template.  #### Limitations  - **Single Active Session per User-Template Pair**    Only one editing session can be active at a time for a specific user and template. Creating a new session for the same user-template pair will automatically invalidate the previous one.  - **Weekly Session Cap**    A maximum of **250** editing sessions can be created for a single template per week. Any attempt to exceed this limit will result in a `403 Forbidden` error. 
     * Create Template Editing Session 
     * @param param the request object
     */
    public createTemplateEditingSessionWithHttpInfo(param: TemplatesApiCreateTemplateEditingSessionRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateTemplateEditingSession201Response>> {
        return this.api.createTemplateEditingSessionWithHttpInfo(param.id, param.editingSessionRequest,  options).toPromise();
    }

    /**
     * Creates a new editing session for the Embedded Editor. The response includes an E-Token, which is required to open the template.  #### Limitations  - **Single Active Session per User-Template Pair**    Only one editing session can be active at a time for a specific user and template. Creating a new session for the same user-template pair will automatically invalidate the previous one.  - **Weekly Session Cap**    A maximum of **250** editing sessions can be created for a single template per week. Any attempt to exceed this limit will result in a `403 Forbidden` error. 
     * Create Template Editing Session 
     * @param param the request object
     */
    public createTemplateEditingSession(param: TemplatesApiCreateTemplateEditingSessionRequest, options?: ConfigurationOptions): Promise<CreateTemplateEditingSession201Response> {
        return this.api.createTemplateEditingSession(param.id, param.editingSessionRequest,  options).toPromise();
    }

    /**
     * This asynchronous endpoint allows users to create a new template by uploading a file.  The uploaded file is processed in the background to generate the template. The maximum allowable file size for upload is 100 MB. Field tags and form fields are not supported yet.  Once the file is uploaded, the processing will happen asynchronously, and users need to check [the status of the template](https://developers.pandadoc.com/reference/template-status) creation. 
     * Create Template from File Upload
     * @param param the request object
     */
    public createTemplateWithUploadWithHttpInfo(param: TemplatesApiCreateTemplateWithUploadRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TemplateCreateResponse>> {
        return this.api.createTemplateWithUploadWithHttpInfo(param.fields, param.file, param.data,  options).toPromise();
    }

    /**
     * This asynchronous endpoint allows users to create a new template by uploading a file.  The uploaded file is processed in the background to generate the template. The maximum allowable file size for upload is 100 MB. Field tags and form fields are not supported yet.  Once the file is uploaded, the processing will happen asynchronously, and users need to check [the status of the template](https://developers.pandadoc.com/reference/template-status) creation. 
     * Create Template from File Upload
     * @param param the request object
     */
    public createTemplateWithUpload(param: TemplatesApiCreateTemplateWithUploadRequest = {}, options?: ConfigurationOptions): Promise<TemplateCreateResponse> {
        return this.api.createTemplateWithUpload(param.fields, param.file, param.data,  options).toPromise();
    }

    /**
     * Delete a template
     * Delete Template
     * @param param the request object
     */
    public deleteTemplateWithHttpInfo(param: TemplatesApiDeleteTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteTemplateWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete a template
     * Delete Template
     * @param param the request object
     */
    public deleteTemplate(param: TemplatesApiDeleteTemplateRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteTemplate(param.id,  options).toPromise();
    }

    /**
     * Get details about a template by `id`. Details include:  - Basic template information (name, author, etc) - Roles - All fields with values - All tokens with values - Pricing information (pricing tables, products, quotes) - Template metadata - Template tags - Content placeholders - Modification timestamps. Note that `date_modified` means any changes associated with the template roles, while `content_date_modified` logs any changes in the template content. 
     * Template Details
     * @param param the request object
     */
    public detailsTemplateWithHttpInfo(param: TemplatesApiDetailsTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateDetailsResponse>> {
        return this.api.detailsTemplateWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get details about a template by `id`. Details include:  - Basic template information (name, author, etc) - Roles - All fields with values - All tokens with values - Pricing information (pricing tables, products, quotes) - Template metadata - Template tags - Content placeholders - Modification timestamps. Note that `date_modified` means any changes associated with the template roles, while `content_date_modified` logs any changes in the template content. 
     * Template Details
     * @param param the request object
     */
    public detailsTemplate(param: TemplatesApiDetailsTemplateRequest, options?: ConfigurationOptions): Promise<TemplateDetailsResponse> {
        return this.api.detailsTemplate(param.id,  options).toPromise();
    }

    /**
     * Retrieves a list of templates. You can filter results by a search query, tags, or fields.
     * List Templates
     * @param param the request object
     */
    public listTemplatesWithHttpInfo(param: TemplatesApiListTemplatesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TemplateListResponse>> {
        return this.api.listTemplatesWithHttpInfo(param.q, param.shared, param.deleted, param.count, param.page, param.id, param.folderUuid, param.tag, param.fields,  options).toPromise();
    }

    /**
     * Retrieves a list of templates. You can filter results by a search query, tags, or fields.
     * List Templates
     * @param param the request object
     */
    public listTemplates(param: TemplatesApiListTemplatesRequest = {}, options?: ConfigurationOptions): Promise<TemplateListResponse> {
        return this.api.listTemplates(param.q, param.shared, param.deleted, param.count, param.page, param.id, param.folderUuid, param.tag, param.fields,  options).toPromise();
    }

    /**
     * ## Available Template Statuses  The following is a complete list of all possible template statuses returned:  | Template Status      | Status Description                                                                                                                      | | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | | `template.UPLOADED`  | The template upload process has been initiated and is currently in progress. It will soon transition to the `template.PROCESSED` state. | | `template.PROCESSED` | The template has been successfully uploaded and created. At this stage, all aspects of the template are editable.                       | | `template.ERROR`     | The template upload process has failed. Please refer to the error details in the response for more information.                         | 
     * Template Status
     * @param param the request object
     */
    public statusTemplateWithHttpInfo(param: TemplatesApiStatusTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TemplateStatusResponse>> {
        return this.api.statusTemplateWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * ## Available Template Statuses  The following is a complete list of all possible template statuses returned:  | Template Status      | Status Description                                                                                                                      | | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | | `template.UPLOADED`  | The template upload process has been initiated and is currently in progress. It will soon transition to the `template.PROCESSED` state. | | `template.PROCESSED` | The template has been successfully uploaded and created. At this stage, all aspects of the template are editable.                       | | `template.ERROR`     | The template upload process has failed. Please refer to the error details in the response for more information.                         | 
     * Template Status
     * @param param the request object
     */
    public statusTemplate(param: TemplatesApiStatusTemplateRequest, options?: ConfigurationOptions): Promise<TemplateStatusResponse> {
        return this.api.statusTemplate(param.id,  options).toPromise();
    }

    /**
     * > 🚧 Template status >  > You can only update a template in the PROCESSED status (`template.PROCESSED`).  >  > After creating a new template, it usually retains a `template.uploaded` status for 3-5 seconds while the template syncs across PandaDoc servers. When the template is available for further API calls, the template moves to the `template.PROCESSED` state. Use [Template Status](https://developers.pandadoc.com/reference/template-status) or Webhooks to check template status. 
     * Template Update
     * @param param the request object
     */
    public updateTemplateWithHttpInfo(param: TemplatesApiUpdateTemplateRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateTemplateWithHttpInfo(param.id, param.templateUpdateRequest,  options).toPromise();
    }

    /**
     * > 🚧 Template status >  > You can only update a template in the PROCESSED status (`template.PROCESSED`).  >  > After creating a new template, it usually retains a `template.uploaded` status for 3-5 seconds while the template syncs across PandaDoc servers. When the template is available for further API calls, the template moves to the `template.PROCESSED` state. Use [Template Status](https://developers.pandadoc.com/reference/template-status) or Webhooks to check template status. 
     * Template Update
     * @param param the request object
     */
    public updateTemplate(param: TemplatesApiUpdateTemplateRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateTemplate(param.id, param.templateUpdateRequest,  options).toPromise();
    }

}

import { ObservableUserAndWorkspaceManagementApi } from "./ObservableAPI";
import { UserAndWorkspaceManagementApiRequestFactory, UserAndWorkspaceManagementApiResponseProcessor} from "../apis/UserAndWorkspaceManagementApi";

export interface UserAndWorkspaceManagementApiAddMemberRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserAndWorkspaceManagementApiaddMember
     */
    workspaceId: string
    /**
     * 
     * @type AddMemberRequest
     * @memberof UserAndWorkspaceManagementApiaddMember
     */
    addMemberRequest: AddMemberRequest
    /**
     * Send a confirmation email to the user that was added to workspace(s).
     * Defaults to: undefined
     * @type boolean
     * @memberof UserAndWorkspaceManagementApiaddMember
     */
    notifyUser?: boolean
    /**
     * Send a confirmation email to all workspace admins indicating that the user has been added to the workspace.
     * Defaults to: undefined
     * @type boolean
     * @memberof UserAndWorkspaceManagementApiaddMember
     */
    notifyWsAdmins?: boolean
}

export interface UserAndWorkspaceManagementApiCreateApiKeyRequest {
    /**
     * Workspace id.
     * Defaults to: undefined
     * @type string
     * @memberof UserAndWorkspaceManagementApicreateApiKey
     */
    workspaceId: string
    /**
     * 
     * @type CreateApiKeyRequest
     * @memberof UserAndWorkspaceManagementApicreateApiKey
     */
    createApiKeyRequest: CreateApiKeyRequest
}

export interface UserAndWorkspaceManagementApiCreateUserRequest {
    /**
     * 
     * @type CreateUserRequest
     * @memberof UserAndWorkspaceManagementApicreateUser
     */
    createUserRequest: CreateUserRequest
    /**
     * Send a confirmation email to the user that was added to workspace(s).
     * Defaults to: undefined
     * @type boolean
     * @memberof UserAndWorkspaceManagementApicreateUser
     */
    notifyUser?: boolean
    /**
     * Send a confirmation email to all workspace admins indicating that the user has been added to the workspace.
     * Defaults to: undefined
     * @type boolean
     * @memberof UserAndWorkspaceManagementApicreateUser
     */
    notifyWsAdmins?: boolean
}

export interface UserAndWorkspaceManagementApiCreateWorkspaceRequest {
    /**
     * 
     * @type CreateWorkspaceRequest
     * @memberof UserAndWorkspaceManagementApicreateWorkspace
     */
    createWorkspaceRequest: CreateWorkspaceRequest
}

export interface UserAndWorkspaceManagementApiDeactivateWorkspaceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserAndWorkspaceManagementApideactivateWorkspace
     */
    workspaceId: string
    /**
     * 
     * @type any
     * @memberof UserAndWorkspaceManagementApideactivateWorkspace
     */
    body?: any
}

export interface UserAndWorkspaceManagementApiGetWorkspacesListRequest {
    /**
     * Number of elements in page.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 50
     * @type number
     * @memberof UserAndWorkspaceManagementApigetWorkspacesList
     */
    count?: number
    /**
     * Page number.
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof UserAndWorkspaceManagementApigetWorkspacesList
     */
    page?: number
}

export interface UserAndWorkspaceManagementApiListUsersRequest {
    /**
     * Number of elements in page.
     * Minimum: 0
     * Maximum: 50
     * Defaults to: 50
     * @type number
     * @memberof UserAndWorkspaceManagementApilistUsers
     */
    count?: number
    /**
     * Page number.
     * Minimum: 0
     * Defaults to: 1
     * @type number
     * @memberof UserAndWorkspaceManagementApilistUsers
     */
    page?: number
    /**
     * Filter option - show users with removed memberships.
     * Defaults to: true
     * @type boolean
     * @memberof UserAndWorkspaceManagementApilistUsers
     */
    showRemoved?: boolean
}

export interface UserAndWorkspaceManagementApiRemoveMemberRequest {
    /**
     * Workspace id
     * Defaults to: undefined
     * @type string
     * @memberof UserAndWorkspaceManagementApiremoveMember
     */
    workspaceId: string
    /**
     * Member id
     * Defaults to: undefined
     * @type string
     * @memberof UserAndWorkspaceManagementApiremoveMember
     */
    memberId: string
}

export class ObjectUserAndWorkspaceManagementApi {
    private api: ObservableUserAndWorkspaceManagementApi

    public constructor(configuration: Configuration, requestFactory?: UserAndWorkspaceManagementApiRequestFactory, responseProcessor?: UserAndWorkspaceManagementApiResponseProcessor) {
        this.api = new ObservableUserAndWorkspaceManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add an existing user to a workspace. - You must be an organization admin or a workspace admin to add members. 
     * Add Member to Workspace
     * @param param the request object
     */
    public addMemberWithHttpInfo(param: UserAndWorkspaceManagementApiAddMemberRequest, options?: ConfigurationOptions): Promise<HttpInfo<AddMemberResponse>> {
        return this.api.addMemberWithHttpInfo(param.workspaceId, param.addMemberRequest, param.notifyUser, param.notifyWsAdmins,  options).toPromise();
    }

    /**
     * Add an existing user to a workspace. - You must be an organization admin or a workspace admin to add members. 
     * Add Member to Workspace
     * @param param the request object
     */
    public addMember(param: UserAndWorkspaceManagementApiAddMemberRequest, options?: ConfigurationOptions): Promise<AddMemberResponse> {
        return this.api.addMember(param.workspaceId, param.addMemberRequest, param.notifyUser, param.notifyWsAdmins,  options).toPromise();
    }

    /**
     * Generate a new API key for the workspace. Check out [API Key Authentication article](https://developers.pandadoc.com/reference/api-key-authentication-process) for detailed API Keys description.  > 📘  > - Only an **Org Admin** can generate an API keys. > - To make another user a key\'s owner, pass `user_id` of this user. The user should has an **Admin** role in the workspace. > - Generating a new key invalidates existing key with the same type. Using this request, you can deactivate the key you\'re using for the request. 
     * Create API Key
     * @param param the request object
     */
    public createApiKeyWithHttpInfo(param: UserAndWorkspaceManagementApiCreateApiKeyRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateApiKeyResponse>> {
        return this.api.createApiKeyWithHttpInfo(param.workspaceId, param.createApiKeyRequest,  options).toPromise();
    }

    /**
     * Generate a new API key for the workspace. Check out [API Key Authentication article](https://developers.pandadoc.com/reference/api-key-authentication-process) for detailed API Keys description.  > 📘  > - Only an **Org Admin** can generate an API keys. > - To make another user a key\'s owner, pass `user_id` of this user. The user should has an **Admin** role in the workspace. > - Generating a new key invalidates existing key with the same type. Using this request, you can deactivate the key you\'re using for the request. 
     * Create API Key
     * @param param the request object
     */
    public createApiKey(param: UserAndWorkspaceManagementApiCreateApiKeyRequest, options?: ConfigurationOptions): Promise<CreateApiKeyResponse> {
        return this.api.createApiKey(param.workspaceId, param.createApiKeyRequest,  options).toPromise();
    }

    /**
     * Create users, and assign them roles, licenses, and workspaces.  - You must be an organization admin to create users. - We check that the user email domain matches your organization domain. - We check that the user email and phone number have a valid format. 
     * Create User
     * @param param the request object
     */
    public createUserWithHttpInfo(param: UserAndWorkspaceManagementApiCreateUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateUserResponse>> {
        return this.api.createUserWithHttpInfo(param.createUserRequest, param.notifyUser, param.notifyWsAdmins,  options).toPromise();
    }

    /**
     * Create users, and assign them roles, licenses, and workspaces.  - You must be an organization admin to create users. - We check that the user email domain matches your organization domain. - We check that the user email and phone number have a valid format. 
     * Create User
     * @param param the request object
     */
    public createUser(param: UserAndWorkspaceManagementApiCreateUserRequest, options?: ConfigurationOptions): Promise<CreateUserResponse> {
        return this.api.createUser(param.createUserRequest, param.notifyUser, param.notifyWsAdmins,  options).toPromise();
    }

    /**
     * Create a workspace in your organization.  - You need to be an Org Admin to create a workspace. - You will be added to the new workspace with an Admin role. 
     * Create Workspace
     * @param param the request object
     */
    public createWorkspaceWithHttpInfo(param: UserAndWorkspaceManagementApiCreateWorkspaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateWorkspaceResponse>> {
        return this.api.createWorkspaceWithHttpInfo(param.createWorkspaceRequest,  options).toPromise();
    }

    /**
     * Create a workspace in your organization.  - You need to be an Org Admin to create a workspace. - You will be added to the new workspace with an Admin role. 
     * Create Workspace
     * @param param the request object
     */
    public createWorkspace(param: UserAndWorkspaceManagementApiCreateWorkspaceRequest, options?: ConfigurationOptions): Promise<CreateWorkspaceResponse> {
        return this.api.createWorkspace(param.createWorkspaceRequest,  options).toPromise();
    }

    /**
     * Deactivate the workspace, remove all the members from it and make it  unavailable. 
     * Deactivate Workspace
     * @param param the request object
     */
    public deactivateWorkspaceWithHttpInfo(param: UserAndWorkspaceManagementApiDeactivateWorkspaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.deactivateWorkspaceWithHttpInfo(param.workspaceId, param.body,  options).toPromise();
    }

    /**
     * Deactivate the workspace, remove all the members from it and make it  unavailable. 
     * Deactivate Workspace
     * @param param the request object
     */
    public deactivateWorkspace(param: UserAndWorkspaceManagementApiDeactivateWorkspaceRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.deactivateWorkspace(param.workspaceId, param.body,  options).toPromise();
    }

    /**
     * Get a list of all the active workspaces in the organization. 
     * List Workspaces
     * @param param the request object
     */
    public getWorkspacesListWithHttpInfo(param: UserAndWorkspaceManagementApiGetWorkspacesListRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListWorkspacesResponse>> {
        return this.api.getWorkspacesListWithHttpInfo(param.count, param.page,  options).toPromise();
    }

    /**
     * Get a list of all the active workspaces in the organization. 
     * List Workspaces
     * @param param the request object
     */
    public getWorkspacesList(param: UserAndWorkspaceManagementApiGetWorkspacesListRequest = {}, options?: ConfigurationOptions): Promise<ListWorkspacesResponse> {
        return this.api.getWorkspacesList(param.count, param.page,  options).toPromise();
    }

    /**
     * Get a list of all users with membership in your organization, with their contact information, license type, and workspace roles.  You must be an organization admin to list users. 
     * List Users
     * @param param the request object
     */
    public listUsersWithHttpInfo(param: UserAndWorkspaceManagementApiListUsersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListUsersResponse>> {
        return this.api.listUsersWithHttpInfo(param.count, param.page, param.showRemoved,  options).toPromise();
    }

    /**
     * Get a list of all users with membership in your organization, with their contact information, license type, and workspace roles.  You must be an organization admin to list users. 
     * List Users
     * @param param the request object
     */
    public listUsers(param: UserAndWorkspaceManagementApiListUsersRequest = {}, options?: ConfigurationOptions): Promise<ListUsersResponse> {
        return this.api.listUsers(param.count, param.page, param.showRemoved,  options).toPromise();
    }

    /**
     * This operation removes a specified member from a workspace by providing the workspace ID and member ID.
     * Remove Member from Workspace
     * @param param the request object
     */
    public removeMemberWithHttpInfo(param: UserAndWorkspaceManagementApiRemoveMemberRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeMemberWithHttpInfo(param.workspaceId, param.memberId,  options).toPromise();
    }

    /**
     * This operation removes a specified member from a workspace by providing the workspace ID and member ID.
     * Remove Member from Workspace
     * @param param the request object
     */
    public removeMember(param: UserAndWorkspaceManagementApiRemoveMemberRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeMember(param.workspaceId, param.memberId,  options).toPromise();
    }

}

import { ObservableWebhookEventsApi } from "./ObservableAPI";
import { WebhookEventsApiRequestFactory, WebhookEventsApiResponseProcessor} from "../apis/WebhookEventsApi";

export interface WebhookEventsApiDetailsWebhookEventRequest {
    /**
     * Webhook event uuid.
     * Defaults to: undefined
     * @type string
     * @memberof WebhookEventsApidetailsWebhookEvent
     */
    id: string
}

export interface WebhookEventsApiListWebhookEventRequest {
    /**
     * Specify how many event results to return.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof WebhookEventsApilistWebhookEvent
     */
    count: number
    /**
     * Specify which page of the dataset to return.
     * Minimum: 0
     * Defaults to: undefined
     * @type number
     * @memberof WebhookEventsApilistWebhookEvent
     */
    page: number
    /**
     * Return results where the event creation time is greater than or equal to this value.
     * Defaults to: undefined
     * @type Date
     * @memberof WebhookEventsApilistWebhookEvent
     */
    since?: Date
    /**
     * Return results where the event creation time is less than this value.
     * Defaults to: undefined
     * @type Date
     * @memberof WebhookEventsApilistWebhookEvent
     */
    to?: Date
    /**
     * Returns results by the specified event types.
     * Defaults to: undefined
     * @type Array&lt;WebhookEventTriggerEnum&gt;
     * @memberof WebhookEventsApilistWebhookEvent
     */
    type?: Array<WebhookEventTriggerEnum>
    /**
     * Returns results with the specified HTTP status codes.
     * Defaults to: undefined
     * @type Array&lt;WebhookEventHttpStatusCodeGroupEnum&gt;
     * @memberof WebhookEventsApilistWebhookEvent
     */
    httpStatusCode?: Array<WebhookEventHttpStatusCodeGroupEnum>
    /**
     * Returns results with the following errors.
     * Defaults to: undefined
     * @type Array&lt;WebhookEventErrorEnum&gt;
     * @memberof WebhookEventsApilistWebhookEvent
     */
    error?: Array<WebhookEventErrorEnum>
}

export class ObjectWebhookEventsApi {
    private api: ObservableWebhookEventsApi

    public constructor(configuration: Configuration, requestFactory?: WebhookEventsApiRequestFactory, responseProcessor?: WebhookEventsApiResponseProcessor) {
        this.api = new ObservableWebhookEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This operation fetches detailed information about a specific webhook event using its unique identifier.
     * Webhook Event Details
     * @param param the request object
     */
    public detailsWebhookEventWithHttpInfo(param: WebhookEventsApiDetailsWebhookEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<WebhookEventDetailsResponse>> {
        return this.api.detailsWebhookEventWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * This operation fetches detailed information about a specific webhook event using its unique identifier.
     * Webhook Event Details
     * @param param the request object
     */
    public detailsWebhookEvent(param: WebhookEventsApiDetailsWebhookEventRequest, options?: ConfigurationOptions): Promise<WebhookEventDetailsResponse> {
        return this.api.detailsWebhookEvent(param.id,  options).toPromise();
    }

    /**
     * This operation retrieves a paginated list of all webhook events.
     * List Webhook Events
     * @param param the request object
     */
    public listWebhookEventWithHttpInfo(param: WebhookEventsApiListWebhookEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<WebhookEventPageResponse>> {
        return this.api.listWebhookEventWithHttpInfo(param.count, param.page, param.since, param.to, param.type, param.httpStatusCode, param.error,  options).toPromise();
    }

    /**
     * This operation retrieves a paginated list of all webhook events.
     * List Webhook Events
     * @param param the request object
     */
    public listWebhookEvent(param: WebhookEventsApiListWebhookEventRequest, options?: ConfigurationOptions): Promise<WebhookEventPageResponse> {
        return this.api.listWebhookEvent(param.count, param.page, param.since, param.to, param.type, param.httpStatusCode, param.error,  options).toPromise();
    }

}

import { ObservableWebhookSubscriptionsApi } from "./ObservableAPI";
import { WebhookSubscriptionsApiRequestFactory, WebhookSubscriptionsApiResponseProcessor} from "../apis/WebhookSubscriptionsApi";

export interface WebhookSubscriptionsApiCreateWebhookSubscriptionRequest {
    /**
     * 
     * @type WebhookSubscriptionCreateRequest
     * @memberof WebhookSubscriptionsApicreateWebhookSubscription
     */
    webhookSubscriptionCreateRequest: WebhookSubscriptionCreateRequest
}

export interface WebhookSubscriptionsApiDeleteWebhookSubscriptionRequest {
    /**
     * Webhook subscription uuid.
     * Defaults to: undefined
     * @type string
     * @memberof WebhookSubscriptionsApideleteWebhookSubscription
     */
    id: string
}

export interface WebhookSubscriptionsApiDetailsWebhookSubscriptionRequest {
    /**
     * Webhook subscription uuid
     * Defaults to: undefined
     * @type string
     * @memberof WebhookSubscriptionsApidetailsWebhookSubscription
     */
    id: string
}

export interface WebhookSubscriptionsApiListWebhookSubscriptionsRequest {
}

export interface WebhookSubscriptionsApiUpdateWebhookSubscriptionRequest {
    /**
     * Webhook subscription uuid
     * Defaults to: undefined
     * @type string
     * @memberof WebhookSubscriptionsApiupdateWebhookSubscription
     */
    id: string
    /**
     * 
     * @type WebhookSubscriptionPatchRequest
     * @memberof WebhookSubscriptionsApiupdateWebhookSubscription
     */
    webhookSubscriptionPatchRequest: WebhookSubscriptionPatchRequest
}

export interface WebhookSubscriptionsApiUpdateWebhookSubscriptionSharedKeyRequest {
    /**
     * Webhook subscription uuid
     * Defaults to: undefined
     * @type string
     * @memberof WebhookSubscriptionsApiupdateWebhookSubscriptionSharedKey
     */
    id: string
}

export class ObjectWebhookSubscriptionsApi {
    private api: ObservableWebhookSubscriptionsApi

    public constructor(configuration: Configuration, requestFactory?: WebhookSubscriptionsApiRequestFactory, responseProcessor?: WebhookSubscriptionsApiResponseProcessor) {
        this.api = new ObservableWebhookSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This operation creates a new webhook subscription by specifying its details.
     * Create Webhook Subscription
     * @param param the request object
     */
    public createWebhookSubscriptionWithHttpInfo(param: WebhookSubscriptionsApiCreateWebhookSubscriptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<WebhookSubscriptionItemResponse>> {
        return this.api.createWebhookSubscriptionWithHttpInfo(param.webhookSubscriptionCreateRequest,  options).toPromise();
    }

    /**
     * This operation creates a new webhook subscription by specifying its details.
     * Create Webhook Subscription
     * @param param the request object
     */
    public createWebhookSubscription(param: WebhookSubscriptionsApiCreateWebhookSubscriptionRequest, options?: ConfigurationOptions): Promise<WebhookSubscriptionItemResponse> {
        return this.api.createWebhookSubscription(param.webhookSubscriptionCreateRequest,  options).toPromise();
    }

    /**
     * This operation deletes a specific webhook subscription identified by its UUID.
     * Delete Webhook Subscription
     * @param param the request object
     */
    public deleteWebhookSubscriptionWithHttpInfo(param: WebhookSubscriptionsApiDeleteWebhookSubscriptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteWebhookSubscriptionWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * This operation deletes a specific webhook subscription identified by its UUID.
     * Delete Webhook Subscription
     * @param param the request object
     */
    public deleteWebhookSubscription(param: WebhookSubscriptionsApiDeleteWebhookSubscriptionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteWebhookSubscription(param.id,  options).toPromise();
    }

    /**
     * Get webhook subscription by uuid 
     * Webhook Subscription Details
     * @param param the request object
     */
    public detailsWebhookSubscriptionWithHttpInfo(param: WebhookSubscriptionsApiDetailsWebhookSubscriptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<WebhookSubscriptionItemResponse>> {
        return this.api.detailsWebhookSubscriptionWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get webhook subscription by uuid 
     * Webhook Subscription Details
     * @param param the request object
     */
    public detailsWebhookSubscription(param: WebhookSubscriptionsApiDetailsWebhookSubscriptionRequest, options?: ConfigurationOptions): Promise<WebhookSubscriptionItemResponse> {
        return this.api.detailsWebhookSubscription(param.id,  options).toPromise();
    }

    /**
     * This operation fetches a paginated list of webhook subscriptions.
     * List Webhook Subscriptions
     * @param param the request object
     */
    public listWebhookSubscriptionsWithHttpInfo(param: WebhookSubscriptionsApiListWebhookSubscriptionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<WebhookSubscriptionListResponse>> {
        return this.api.listWebhookSubscriptionsWithHttpInfo( options).toPromise();
    }

    /**
     * This operation fetches a paginated list of webhook subscriptions.
     * List Webhook Subscriptions
     * @param param the request object
     */
    public listWebhookSubscriptions(param: WebhookSubscriptionsApiListWebhookSubscriptionsRequest = {}, options?: ConfigurationOptions): Promise<WebhookSubscriptionListResponse> {
        return this.api.listWebhookSubscriptions( options).toPromise();
    }

    /**
     * This operation updates the details of a webhook subscription.
     * Update Webhook Subscription
     * @param param the request object
     */
    public updateWebhookSubscriptionWithHttpInfo(param: WebhookSubscriptionsApiUpdateWebhookSubscriptionRequest, options?: ConfigurationOptions): Promise<HttpInfo<WebhookSubscriptionItemResponse>> {
        return this.api.updateWebhookSubscriptionWithHttpInfo(param.id, param.webhookSubscriptionPatchRequest,  options).toPromise();
    }

    /**
     * This operation updates the details of a webhook subscription.
     * Update Webhook Subscription
     * @param param the request object
     */
    public updateWebhookSubscription(param: WebhookSubscriptionsApiUpdateWebhookSubscriptionRequest, options?: ConfigurationOptions): Promise<WebhookSubscriptionItemResponse> {
        return this.api.updateWebhookSubscription(param.id, param.webhookSubscriptionPatchRequest,  options).toPromise();
    }

    /**
     * This operation regenerates the shared key for a specific webhook subscription identified by its UUID.
     * Update Webhook Subscription Shared Key
     * @param param the request object
     */
    public updateWebhookSubscriptionSharedKeyWithHttpInfo(param: WebhookSubscriptionsApiUpdateWebhookSubscriptionSharedKeyRequest, options?: ConfigurationOptions): Promise<HttpInfo<WebhookSubscriptionSharedKeyResponse>> {
        return this.api.updateWebhookSubscriptionSharedKeyWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * This operation regenerates the shared key for a specific webhook subscription identified by its UUID.
     * Update Webhook Subscription Shared Key
     * @param param the request object
     */
    public updateWebhookSubscriptionSharedKey(param: WebhookSubscriptionsApiUpdateWebhookSubscriptionSharedKeyRequest, options?: ConfigurationOptions): Promise<WebhookSubscriptionSharedKeyResponse> {
        return this.api.updateWebhookSubscriptionSharedKey(param.id,  options).toPromise();
    }

}
