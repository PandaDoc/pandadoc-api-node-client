import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { DeleteNotarizationRequest404Response } from '../models/DeleteNotarizationRequest404Response';
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
import { ListNotaries400Response } from '../models/ListNotaries400Response';
import { ListNotaries400ResponseDetailsInner } from '../models/ListNotaries400ResponseDetailsInner';
import { ListNotaries403Response } from '../models/ListNotaries403Response';
import { ListNotaries429Response } from '../models/ListNotaries429Response';
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
import { SearchCatalogItems401Response } from '../models/SearchCatalogItems401Response';
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
import { ObservableAPILogsApi } from './ObservableAPI';

import { APILogsApiRequestFactory, APILogsApiResponseProcessor} from "../apis/APILogsApi";
export class PromiseAPILogsApi {
    private api: ObservableAPILogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: APILogsApiRequestFactory,
        responseProcessor?: APILogsApiResponseProcessor
    ) {
        this.api = new ObservableAPILogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns details of the specific API log event.
     * API Log Details
     * @param id Log event id.
     */
    public detailsLogWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<APILogDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsLogWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns details of the specific API log event.
     * API Log Details
     * @param id Log event id.
     */
    public detailsLog(id: string, _options?: PromiseConfigurationOptions): Promise<APILogDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsLog(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of all logs within the selected workspace.\\ Optionally filter by date, page, and `#` of items per page.
     * List API Log
     * @param [since] Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-90d\&quot; (for past 90 days).
     * @param [to] Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-10d\&quot; (for past 10 days) or a special \&quot;now\&quot; value.
     * @param [count] The amount of items on each page.
     * @param [page] Returns page of the results by number.
     * @param [statuses] Returns only the predefined status codes.
     * @param [methods] Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE.
     * @param [search] Returns the results containing a string.
     * @param [environmentType] Returns logs for production/sandbox.
     */
    public listLogsWithHttpInfo(since?: string, to?: string, count?: number, page?: number, statuses?: Array<ApiLogStatusEnum>, methods?: Array<ApiLogMethodEnum>, search?: string, environmentType?: ApiLogEnvironmentTypeEnum, _options?: PromiseConfigurationOptions): Promise<HttpInfo<APILogListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLogsWithHttpInfo(since, to, count, page, statuses, methods, search, environmentType, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of all logs within the selected workspace.\\ Optionally filter by date, page, and `#` of items per page.
     * List API Log
     * @param [since] Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-90d\&quot; (for past 90 days).
     * @param [to] Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-10d\&quot; (for past 10 days) or a special \&quot;now\&quot; value.
     * @param [count] The amount of items on each page.
     * @param [page] Returns page of the results by number.
     * @param [statuses] Returns only the predefined status codes.
     * @param [methods] Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE.
     * @param [search] Returns the results containing a string.
     * @param [environmentType] Returns logs for production/sandbox.
     */
    public listLogs(since?: string, to?: string, count?: number, page?: number, statuses?: Array<ApiLogStatusEnum>, methods?: Array<ApiLogMethodEnum>, search?: string, environmentType?: ApiLogEnvironmentTypeEnum, _options?: PromiseConfigurationOptions): Promise<APILogListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLogs(since, to, count, page, statuses, methods, search, environmentType, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCommunicationPreferencesApi } from './ObservableAPI';

import { CommunicationPreferencesApiRequestFactory, CommunicationPreferencesApiResponseProcessor} from "../apis/CommunicationPreferencesApi";
export class PromiseCommunicationPreferencesApi {
    private api: ObservableCommunicationPreferencesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CommunicationPreferencesApiRequestFactory,
        responseProcessor?: CommunicationPreferencesApiResponseProcessor
    ) {
        this.api = new ObservableCommunicationPreferencesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of the most recent SMS opt-out changes for each phone numbers used in your workspace.  > 📘 You can filter results by time range using `timestamp_from` and `timestamp_to`. 
     * Recent SMS Opt-out
     * @param [timestampFrom] The start of the timestamp.   If no timestamp is provided, 1 hour before the current time will be used. 
     * @param [timestampTo] The end of the timestamp range.   If no timestamp is provided the current time will be used. 
     */
    public listRecentSmsOptOutsWithHttpInfo(timestampFrom?: Date, timestampTo?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListSmsOptOutChangelogResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listRecentSmsOptOutsWithHttpInfo(timestampFrom, timestampTo, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of the most recent SMS opt-out changes for each phone numbers used in your workspace.  > 📘 You can filter results by time range using `timestamp_from` and `timestamp_to`. 
     * Recent SMS Opt-out
     * @param [timestampFrom] The start of the timestamp.   If no timestamp is provided, 1 hour before the current time will be used. 
     * @param [timestampTo] The end of the timestamp range.   If no timestamp is provided the current time will be used. 
     */
    public listRecentSmsOptOuts(timestampFrom?: Date, timestampTo?: Date, _options?: PromiseConfigurationOptions): Promise<ListSmsOptOutChangelogResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listRecentSmsOptOuts(timestampFrom, timestampTo, observableOptions);
        return result.toPromise();
    }


}



import { ObservableContactsApi } from './ObservableAPI';

import { ContactsApiRequestFactory, ContactsApiResponseProcessor} from "../apis/ContactsApi";
export class PromiseContactsApi {
    private api: ObservableContactsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactsApiRequestFactory,
        responseProcessor?: ContactsApiResponseProcessor
    ) {
        this.api = new ObservableContactsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This method adds a contact into a contacts list.
     * Create contact
     * @param contactCreateRequest
     */
    public createContactWithHttpInfo(contactCreateRequest: ContactCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContactDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContactWithHttpInfo(contactCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This method adds a contact into a contacts list.
     * Create contact
     * @param contactCreateRequest
     */
    public createContact(contactCreateRequest: ContactCreateRequest, _options?: PromiseConfigurationOptions): Promise<ContactDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContact(contactCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This method deletes a contact.
     * Delete Contact
     * @param id Contact id.
     */
    public deleteContactWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteContactWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * This method deletes a contact.
     * Delete Contact
     * @param id Contact id.
     */
    public deleteContact(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteContact(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns contact details by its ID.
     * Contact Details
     * @param id Contact id.
     */
    public detailsContactWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContactDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsContactWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns contact details by its ID.
     * Contact Details
     * @param id Contact id.
     */
    public detailsContact(id: string, _options?: PromiseConfigurationOptions): Promise<ContactDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsContact(id, observableOptions);
        return result.toPromise();
    }

    /**
     * This method returns a list of contacts associated with a workspace.
     * List contacts
     * @param [email] Optional search parameter. Filter results by exact match.
     */
    public listContactsWithHttpInfo(email?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContactListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContactsWithHttpInfo(email, observableOptions);
        return result.toPromise();
    }

    /**
     * This method returns a list of contacts associated with a workspace.
     * List contacts
     * @param [email] Optional search parameter. Filter results by exact match.
     */
    public listContacts(email?: string, _options?: PromiseConfigurationOptions): Promise<ContactListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContacts(email, observableOptions);
        return result.toPromise();
    }

    /**
     * This method updates a contact details.
     * Update Contact
     * @param id Contact id.
     * @param contactUpdateRequest
     */
    public updateContactWithHttpInfo(id: string, contactUpdateRequest: ContactUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContactDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateContactWithHttpInfo(id, contactUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This method updates a contact details.
     * Update Contact
     * @param id Contact id.
     * @param contactUpdateRequest
     */
    public updateContact(id: string, contactUpdateRequest: ContactUpdateRequest, _options?: PromiseConfigurationOptions): Promise<ContactDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateContact(id, contactUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableContentLibraryItemsApi } from './ObservableAPI';

import { ContentLibraryItemsApiRequestFactory, ContentLibraryItemsApiResponseProcessor} from "../apis/ContentLibraryItemsApi";
export class PromiseContentLibraryItemsApi {
    private api: ObservableContentLibraryItemsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContentLibraryItemsApiRequestFactory,
        responseProcessor?: ContentLibraryItemsApiResponseProcessor
    ) {
        this.api = new ObservableContentLibraryItemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API endpoint allows users to create an empty item in the content library. No actual content or data is required to be provided in the initial creation. 
     * Create Content Library Item
     * @param contentLibraryItemCreateFromUrlRequest
     */
    public createContentLibraryItemWithHttpInfo(contentLibraryItemCreateFromUrlRequest: ContentLibraryItemCreateFromUrlRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContentLibraryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContentLibraryItemWithHttpInfo(contentLibraryItemCreateFromUrlRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This API endpoint allows users to create an empty item in the content library. No actual content or data is required to be provided in the initial creation. 
     * Create Content Library Item
     * @param contentLibraryItemCreateFromUrlRequest
     */
    public createContentLibraryItem(contentLibraryItemCreateFromUrlRequest: ContentLibraryItemCreateFromUrlRequest, _options?: PromiseConfigurationOptions): Promise<ContentLibraryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContentLibraryItem(contentLibraryItemCreateFromUrlRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This asynchronous endpoint allows users to create a new CLI by uploading a file. The uploaded file is processed in the background to generate the CLI. The maximum allowable file size for upload is 100 MB. Field tags and form fields are not supported yet. Once the file is uploaded, the processing will happen asynchronously, and users need to check the status of the CLI creation. 
     * Create Content Library Item from File Upload
     * @param [file] Binary PDF File
     * @param [data] JSON as a multipart/form-data request.
     */
    public createContentLibraryItemFromUploadWithHttpInfo(file?: HttpFile, data?: ContentLibraryItemCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContentLibraryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContentLibraryItemFromUploadWithHttpInfo(file, data, observableOptions);
        return result.toPromise();
    }

    /**
     * This asynchronous endpoint allows users to create a new CLI by uploading a file. The uploaded file is processed in the background to generate the CLI. The maximum allowable file size for upload is 100 MB. Field tags and form fields are not supported yet. Once the file is uploaded, the processing will happen asynchronously, and users need to check the status of the CLI creation. 
     * Create Content Library Item from File Upload
     * @param [file] Binary PDF File
     * @param [data] JSON as a multipart/form-data request.
     */
    public createContentLibraryItemFromUpload(file?: HttpFile, data?: ContentLibraryItemCreateRequest, _options?: PromiseConfigurationOptions): Promise<ContentLibraryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createContentLibraryItemFromUpload(file, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve detailed information about a specific content library item using its ID. The details include:  - **Roles** - **All fields with values** - **All tokens with values** - **Pricing information (pricing tables, products, etc)** - **Metadata** - **Tags** - **Modification Timestamps**: note that `date_modified` means any changes associated with the CLI, while `content_date_modified` logs any changes in CLI content. 
     * Content Library Item Details
     * @param id Content Library Item ID
     */
    public detailsContentLibraryItemWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContentLibraryItemResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsContentLibraryItemWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve detailed information about a specific content library item using its ID. The details include:  - **Roles** - **All fields with values** - **All tokens with values** - **Pricing information (pricing tables, products, etc)** - **Metadata** - **Tags** - **Modification Timestamps**: note that `date_modified` means any changes associated with the CLI, while `content_date_modified` logs any changes in CLI content. 
     * Content Library Item Details
     * @param id Content Library Item ID
     */
    public detailsContentLibraryItem(id: string, _options?: PromiseConfigurationOptions): Promise<ContentLibraryItemResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsContentLibraryItem(id, observableOptions);
        return result.toPromise();
    }

    /**
     * The endpoint retrieves items from the content library in PandaDoc. This endpoint supports filtering options to narrow down the results, allowing users to search by query, tags, folder, and more.  > ### ⚠️ Please avoid empty values for the parameters > API returns \"400\" error when any of the parameters has an empty value. Please remove such a parameter from the request or add a value. 
     * List Content Library Item
     * @param [q] Search query. Filter by content library item name.
     * @param [id] Specify content library item ID.
     * @param [deleted] Returns only the deleted content library items.
     * @param [folderUuid] The UUID of the folder where the content library items are stored.
     * @param [count] Specify how many content library items to return. Default is 50 content library items, maximum is 100 content library items.
     * @param [page] Specify which page of the dataset to return.
     * @param [tag] Search tag. Filter by content library item tag.
     */
    public listContentLibraryItemsWithHttpInfo(q?: string, id?: string, deleted?: boolean, folderUuid?: string, count?: number, page?: number, tag?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContentLibraryItemListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContentLibraryItemsWithHttpInfo(q, id, deleted, folderUuid, count, page, tag, observableOptions);
        return result.toPromise();
    }

    /**
     * The endpoint retrieves items from the content library in PandaDoc. This endpoint supports filtering options to narrow down the results, allowing users to search by query, tags, folder, and more.  > ### ⚠️ Please avoid empty values for the parameters > API returns \"400\" error when any of the parameters has an empty value. Please remove such a parameter from the request or add a value. 
     * List Content Library Item
     * @param [q] Search query. Filter by content library item name.
     * @param [id] Specify content library item ID.
     * @param [deleted] Returns only the deleted content library items.
     * @param [folderUuid] The UUID of the folder where the content library items are stored.
     * @param [count] Specify how many content library items to return. Default is 50 content library items, maximum is 100 content library items.
     * @param [page] Specify which page of the dataset to return.
     * @param [tag] Search tag. Filter by content library item tag.
     */
    public listContentLibraryItems(q?: string, id?: string, deleted?: boolean, folderUuid?: string, count?: number, page?: number, tag?: string, _options?: PromiseConfigurationOptions): Promise<ContentLibraryItemListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listContentLibraryItems(q, id, deleted, folderUuid, count, page, tag, observableOptions);
        return result.toPromise();
    }

    /**
     * Requesting the CLI status helps verify that a CLI is in the expected state before invoking additional API methods.  ## Available CLI Statuses  The following is a complete list of all possible CLI statuses returned:  | CLI Status | Status Description | |-----------------|--------------------| | `cli.UPLOADED`  | The CLI upload process has been initiated and is currently in progress. It will soon transition to the `cli.PROCESSED` state. | | `cli.PROCESSED` | The CLI has been successfully uploaded and created. At this stage, all aspects of the CLI are editable. | | `cli.ERROR`     | The CLI upload process has failed. Please refer to the error details in the response for more information. | 
     * Content Library Item Status
     * @param id Content Library Item ID
     */
    public statusContentLibraryItemWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContentLibraryResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.statusContentLibraryItemWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Requesting the CLI status helps verify that a CLI is in the expected state before invoking additional API methods.  ## Available CLI Statuses  The following is a complete list of all possible CLI statuses returned:  | CLI Status | Status Description | |-----------------|--------------------| | `cli.UPLOADED`  | The CLI upload process has been initiated and is currently in progress. It will soon transition to the `cli.PROCESSED` state. | | `cli.PROCESSED` | The CLI has been successfully uploaded and created. At this stage, all aspects of the CLI are editable. | | `cli.ERROR`     | The CLI upload process has failed. Please refer to the error details in the response for more information. | 
     * Content Library Item Status
     * @param id Content Library Item ID
     */
    public statusContentLibraryItem(id: string, _options?: PromiseConfigurationOptions): Promise<ContentLibraryResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.statusContentLibraryItem(id, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDocumentAttachmentsApi } from './ObservableAPI';

import { DocumentAttachmentsApiRequestFactory, DocumentAttachmentsApiResponseProcessor} from "../apis/DocumentAttachmentsApi";
export class PromiseDocumentAttachmentsApi {
    private api: ObservableDocumentAttachmentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentAttachmentsApiRequestFactory,
        responseProcessor?: DocumentAttachmentsApiResponseProcessor
    ) {
        this.api = new ObservableDocumentAttachmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an attachment for a particular document
     * Create Document Attachment
     * @param id Document UUID
     * @param documentAttachmentRequest
     */
    public createDocumentAttachmentWithHttpInfo(id: string, documentAttachmentRequest: DocumentAttachmentRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentAttachmentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentAttachmentWithHttpInfo(id, documentAttachmentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an attachment for a particular document
     * Create Document Attachment
     * @param id Document UUID
     * @param documentAttachmentRequest
     */
    public createDocumentAttachment(id: string, documentAttachmentRequest: DocumentAttachmentRequest, _options?: PromiseConfigurationOptions): Promise<DocumentAttachmentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentAttachment(id, documentAttachmentRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an attachment for a particular document
     * Create Document Attachment From Upload
     * @param id Document UUID
     * @param [file] Binary file to be attached to a document
     * @param [name] Optional name to set for uploaded file
     */
    public createDocumentAttachmentFromFileUploadWithHttpInfo(id: string, file?: HttpFile, name?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentAttachmentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentAttachmentFromFileUploadWithHttpInfo(id, file, name, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an attachment for a particular document
     * Create Document Attachment From Upload
     * @param id Document UUID
     * @param [file] Binary file to be attached to a document
     * @param [name] Optional name to set for uploaded file
     */
    public createDocumentAttachmentFromFileUpload(id: string, file?: HttpFile, name?: string, _options?: PromiseConfigurationOptions): Promise<DocumentAttachmentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentAttachmentFromFileUpload(id, file, name, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an attachment from the document.
     * Delete Document Attachment
     * @param id Document UUID.
     * @param attachmentId Attachment UUID.
     */
    public deleteDocumentAttachmentWithHttpInfo(id: string, attachmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDocumentAttachmentWithHttpInfo(id, attachmentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an attachment from the document.
     * Delete Document Attachment
     * @param id Document UUID.
     * @param attachmentId Attachment UUID.
     */
    public deleteDocumentAttachment(id: string, attachmentId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDocumentAttachment(id, attachmentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns details of the specific document\'s attachment.
     * Document Attachment Details
     * @param id Document UUID.
     * @param attachmentId Attachment UUID.
     */
    public detailsDocumentAttachmentWithHttpInfo(id: string, attachmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentAttachmentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsDocumentAttachmentWithHttpInfo(id, attachmentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns details of the specific document\'s attachment.
     * Document Attachment Details
     * @param id Document UUID.
     * @param attachmentId Attachment UUID.
     */
    public detailsDocumentAttachment(id: string, attachmentId: string, _options?: PromiseConfigurationOptions): Promise<DocumentAttachmentResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsDocumentAttachment(id, attachmentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Download an attachment by ID.
     * Download Document Attachment
     * @param id Document UUID.
     * @param attachmentId Attachment UUID.
     */
    public downloadDocumentAttachmentWithHttpInfo(id: string, attachmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadDocumentAttachmentWithHttpInfo(id, attachmentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Download an attachment by ID.
     * Download Document Attachment
     * @param id Document UUID.
     * @param attachmentId Attachment UUID.
     */
    public downloadDocumentAttachment(id: string, attachmentId: string, _options?: PromiseConfigurationOptions): Promise<HttpFile> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadDocumentAttachment(id, attachmentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a list of attachments associated with a specified document.
     * List Document Attachments
     * @param id Document UUID
     */
    public listDocumentAttachmentsWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<DocumentAttachmentResponse>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocumentAttachmentsWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a list of attachments associated with a specified document.
     * List Document Attachments
     * @param id Document UUID
     */
    public listDocumentAttachments(id: string, _options?: PromiseConfigurationOptions): Promise<Array<DocumentAttachmentResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocumentAttachments(id, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDocumentAuditTrailApi } from './ObservableAPI';

import { DocumentAuditTrailApiRequestFactory, DocumentAuditTrailApiResponseProcessor} from "../apis/DocumentAuditTrailApi";
export class PromiseDocumentAuditTrailApi {
    private api: ObservableDocumentAuditTrailApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentAuditTrailApiRequestFactory,
        responseProcessor?: DocumentAuditTrailApiResponseProcessor
    ) {
        this.api = new ObservableDocumentAuditTrailApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the full audit trail for a specified document. The audit trail includes detailed user actions such as sending, viewing, signing, and editing, along with metadata like timestamps, IP addresses, and user identity. This endpoint is accessible to authorized workspace administrators only. 
     * List Document Audit Trail
     * @param documentId Unique identifier of the document to retrieve the audit trail for.
     * @param [limit] Maximum number of items to return.
     * @param [offset] Number of items to skip before starting to collect the result set.
     */
    public listDocumentAuditTrailWithHttpInfo(documentId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentAuditTrailResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocumentAuditTrailWithHttpInfo(documentId, limit, offset, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the full audit trail for a specified document. The audit trail includes detailed user actions such as sending, viewing, signing, and editing, along with metadata like timestamps, IP addresses, and user identity. This endpoint is accessible to authorized workspace administrators only. 
     * List Document Audit Trail
     * @param documentId Unique identifier of the document to retrieve the audit trail for.
     * @param [limit] Maximum number of items to return.
     * @param [offset] Number of items to skip before starting to collect the result set.
     */
    public listDocumentAuditTrail(documentId: string, limit?: number, offset?: number, _options?: PromiseConfigurationOptions): Promise<DocumentAuditTrailResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocumentAuditTrail(documentId, limit, offset, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDocumentFieldsApi } from './ObservableAPI';

import { DocumentFieldsApiRequestFactory, DocumentFieldsApiResponseProcessor} from "../apis/DocumentFieldsApi";
export class PromiseDocumentFieldsApi {
    private api: ObservableDocumentFieldsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentFieldsApiRequestFactory,
        responseProcessor?: DocumentFieldsApiResponseProcessor
    ) {
        this.api = new ObservableDocumentFieldsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates fields for a particular document. For CFR11-compliant workspaces (21 CFR Part 11),  signature fields must have a minimum size of 108×33. 
     * Create Document Fields
     * @param id Document UUID.
     * @param createDocumentFieldsRequest
     */
    public createDocumentFieldsWithHttpInfo(id: string, createDocumentFieldsRequest: CreateDocumentFieldsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateDocumentFieldsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentFieldsWithHttpInfo(id, createDocumentFieldsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates fields for a particular document. For CFR11-compliant workspaces (21 CFR Part 11),  signature fields must have a minimum size of 108×33. 
     * Create Document Fields
     * @param id Document UUID.
     * @param createDocumentFieldsRequest
     */
    public createDocumentFields(id: string, createDocumentFieldsRequest: CreateDocumentFieldsRequest, _options?: PromiseConfigurationOptions): Promise<CreateDocumentFieldsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentFields(id, createDocumentFieldsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Return the list of fields for a particular document.
     * List Document Fields
     * @param id Document UUID.
     */
    public listDocumentFieldsWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListDocumentFieldsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocumentFieldsWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Return the list of fields for a particular document.
     * List Document Fields
     * @param id Document UUID.
     */
    public listDocumentFields(id: string, _options?: PromiseConfigurationOptions): Promise<ListDocumentFieldsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocumentFields(id, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDocumentLinkToCRMApi } from './ObservableAPI';

import { DocumentLinkToCRMApiRequestFactory, DocumentLinkToCRMApiResponseProcessor} from "../apis/DocumentLinkToCRMApi";
export class PromiseDocumentLinkToCRMApi {
    private api: ObservableDocumentLinkToCRMApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentLinkToCRMApiRequestFactory,
        responseProcessor?: DocumentLinkToCRMApiResponseProcessor
    ) {
        this.api = new ObservableDocumentLinkToCRMApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a linked object in the document.  > 🚧  >  > You can only link each document to each CRM once. This ensures the consistent functionality of the [two-way CRM sync](https://support.pandadoc.com/en/articles/9714877-hubspot-crm#h_3a3344e8-2a6e-4fd8-86be-0da8c121e4ac). >  > You can, however, link one document to several external systems. 
     * Create Linked Object
     * @param id Specify document ID.
     * @param linkedObjectCreateRequest
     */
    public createLinkedObjectWithHttpInfo(id: string, linkedObjectCreateRequest: LinkedObjectCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LinkedObjectCreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLinkedObjectWithHttpInfo(id, linkedObjectCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a linked object in the document.  > 🚧  >  > You can only link each document to each CRM once. This ensures the consistent functionality of the [two-way CRM sync](https://support.pandadoc.com/en/articles/9714877-hubspot-crm#h_3a3344e8-2a6e-4fd8-86be-0da8c121e4ac). >  > You can, however, link one document to several external systems. 
     * Create Linked Object
     * @param id Specify document ID.
     * @param linkedObjectCreateRequest
     */
    public createLinkedObject(id: string, linkedObjectCreateRequest: LinkedObjectCreateRequest, _options?: PromiseConfigurationOptions): Promise<LinkedObjectCreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createLinkedObject(id, linkedObjectCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a linked object associated with a document.
     * Delete Linked Object
     * @param id Specify document ID.
     * @param linkedObjectId Specify linked object ID.
     */
    public deleteLinkedObjectWithHttpInfo(id: string, linkedObjectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLinkedObjectWithHttpInfo(id, linkedObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a linked object associated with a document.
     * Delete Linked Object
     * @param id Specify document ID.
     * @param linkedObjectId Specify linked object ID.
     */
    public deleteLinkedObject(id: string, linkedObjectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteLinkedObject(id, linkedObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of documents connected to a linked object - an entity from an integration.
     * List Documents by Linked Object
     * @param entityId You can get entity id from your integration, for example, from a url of a HubSpot deal.
     * @param entityType See the available entity types: https://developers.pandadoc.com/reference/link-service#examples-of-the-most-popular-crms 
     * @param provider See the available providers: https://developers.pandadoc.com/reference/link-service#examples-of-the-most-popular-crms 
     * @param [orderBy]
     * @param [ownerIds]
     */
    public listDocumentsByLinkedObjectWithHttpInfo(entityId: string, entityType: string, provider: string, orderBy?: string, ownerIds?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<ListDocumentsByLinkedObjectsResponseInner>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocumentsByLinkedObjectWithHttpInfo(entityId, entityType, provider, orderBy, ownerIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of documents connected to a linked object - an entity from an integration.
     * List Documents by Linked Object
     * @param entityId You can get entity id from your integration, for example, from a url of a HubSpot deal.
     * @param entityType See the available entity types: https://developers.pandadoc.com/reference/link-service#examples-of-the-most-popular-crms 
     * @param provider See the available providers: https://developers.pandadoc.com/reference/link-service#examples-of-the-most-popular-crms 
     * @param [orderBy]
     * @param [ownerIds]
     */
    public listDocumentsByLinkedObject(entityId: string, entityType: string, provider: string, orderBy?: string, ownerIds?: Array<string>, _options?: PromiseConfigurationOptions): Promise<Array<ListDocumentsByLinkedObjectsResponseInner>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocumentsByLinkedObject(entityId, entityType, provider, orderBy, ownerIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of linked objects for the document. 
     * List Linked Objects
     * @param id Specify document ID.
     */
    public listLinkedObjectsWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LinkedObjectListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLinkedObjectsWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of linked objects for the document. 
     * List Linked Objects
     * @param id Specify document ID.
     */
    public listLinkedObjects(id: string, _options?: PromiseConfigurationOptions): Promise<LinkedObjectListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listLinkedObjects(id, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDocumentRecipientsApi } from './ObservableAPI';

import { DocumentRecipientsApiRequestFactory, DocumentRecipientsApiResponseProcessor} from "../apis/DocumentRecipientsApi";
export class PromiseDocumentRecipientsApi {
    private api: ObservableDocumentRecipientsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentRecipientsApiRequestFactory,
        responseProcessor?: DocumentRecipientsApiResponseProcessor
    ) {
        this.api = new ObservableDocumentRecipientsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a CC recipient to a document.  > 🚧 Before you start >  > To add a CC recipient, please ensure that: >  > - You have the \'Can Manage Recipients\' permission. > - This recipient is already created in your contacts. If not, add them using the [Create Contact](https://developers.pandadoc.com/reference/create-contact) endpoint.  To add a new CC recipient to a document, two parameters must be included in the request body:  - `kind`: Set this parameter to `contact` to specify an individual contact. - `id`:  Input the ID of the desired contact.  To retrieve the contact\'s ID, use the [List Contacts](https://developers.pandadoc.com/reference/list-contacts) endpoint to access a list of all contacts, and then locate the desired contact by searching using the name or email address within the returned list.  ### Document status  You can add CC recipients in any document status except for the \'Expired\' (`document.voided`) and \'Declined\' (`document.declined`).  > 📘 Email notification to access the document >  > **Note**: When a document is in one of the following statuses: \'Sent\' (`document.sent`), \'Viewed\' (`document.viewed`), \'Completed\' (`document.completed`), \'Waiting for Payment\' (`document.waiting_pay`), or \'Paid\' (`document.paid`), any added CC recipient will receive an instant notification at their email address, allowing them access to the document. 
     * Add Document Recipient
     * @param id Document UUID
     * @param documentRecipientCreateRequest
     */
    public addDocumentRecipientWithHttpInfo(id: string, documentRecipientCreateRequest: DocumentRecipientCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentRecipientResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addDocumentRecipientWithHttpInfo(id, documentRecipientCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a CC recipient to a document.  > 🚧 Before you start >  > To add a CC recipient, please ensure that: >  > - You have the \'Can Manage Recipients\' permission. > - This recipient is already created in your contacts. If not, add them using the [Create Contact](https://developers.pandadoc.com/reference/create-contact) endpoint.  To add a new CC recipient to a document, two parameters must be included in the request body:  - `kind`: Set this parameter to `contact` to specify an individual contact. - `id`:  Input the ID of the desired contact.  To retrieve the contact\'s ID, use the [List Contacts](https://developers.pandadoc.com/reference/list-contacts) endpoint to access a list of all contacts, and then locate the desired contact by searching using the name or email address within the returned list.  ### Document status  You can add CC recipients in any document status except for the \'Expired\' (`document.voided`) and \'Declined\' (`document.declined`).  > 📘 Email notification to access the document >  > **Note**: When a document is in one of the following statuses: \'Sent\' (`document.sent`), \'Viewed\' (`document.viewed`), \'Completed\' (`document.completed`), \'Waiting for Payment\' (`document.waiting_pay`), or \'Paid\' (`document.paid`), any added CC recipient will receive an instant notification at their email address, allowing them access to the document. 
     * Add Document Recipient
     * @param id Document UUID
     * @param documentRecipientCreateRequest
     */
    public addDocumentRecipient(id: string, documentRecipientCreateRequest: DocumentRecipientCreateRequest, _options?: PromiseConfigurationOptions): Promise<DocumentRecipientResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addDocumentRecipient(id, documentRecipientCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a recipient from a document.  > 🚧 Before you start >  > Please ensure that you have the \'Can Manage Recipients\' permission.  To remove a recipient from a document, you must specify their ID in the path parameter (note that this is different from their contact\'s ID). The recipient\'s ID can be retrieved via the [Document Details](https://developers.pandadoc.com/reference/document-details) endpoint.  ### Document status  - Removing a signer is only possible when the document is in the \'Draft\' (`document.draft`) status and this action will unassign all fields associated with that signer. - Removing a CC recipient is allowed in any document status except for the \'Expired\' (`document.voided`) and \'Declined\' (`document.declined`). If a CC recipient is removed, their access will be revoked. 
     * Delete Document Recipient
     * @param id Document UUID
     * @param recipientId Recipient UUID
     */
    public deleteDocumentRecipientWithHttpInfo(id: string, recipientId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDocumentRecipientWithHttpInfo(id, recipientId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a recipient from a document.  > 🚧 Before you start >  > Please ensure that you have the \'Can Manage Recipients\' permission.  To remove a recipient from a document, you must specify their ID in the path parameter (note that this is different from their contact\'s ID). The recipient\'s ID can be retrieved via the [Document Details](https://developers.pandadoc.com/reference/document-details) endpoint.  ### Document status  - Removing a signer is only possible when the document is in the \'Draft\' (`document.draft`) status and this action will unassign all fields associated with that signer. - Removing a CC recipient is allowed in any document status except for the \'Expired\' (`document.voided`) and \'Declined\' (`document.declined`). If a CC recipient is removed, their access will be revoked. 
     * Delete Document Recipient
     * @param id Document UUID
     * @param recipientId Recipient UUID
     */
    public deleteDocumentRecipient(id: string, recipientId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDocumentRecipient(id, recipientId, observableOptions);
        return result.toPromise();
    }

    /**
     * Modify recipient\'s personal details.  > 🚧 Before you start >  > To edit a recipient, please ensure that you have the \'Can Edit Document\' permission.  Use this endpoint to easily fix typos in a recipient\'s name or email, or to change any other recipient information in a sent document.   > 📘 Please note that changes made to a recipient within a document will also update their `Contact` information. However, these changes will not update information about this recipient in other documents where they have already been added.  ### Document status  - You can edit a signer in the following document statuses:   - \'Draft\' (`document.draft`),   - \'Waiting Approval\' (`document.waiting_approval`),   - \'Approved\' (`document.approved`),   - \'Rejected\' (`document.rejected`),   - \'Sent\' (`document.sent`),   - \'Viewed\' (`document.viewed`), but only until they have signed the document. - You can edit a CC recipient in any document status **except**:   - \'Expired\' (`document.voided`),   - \'Declined\' (`document.declined`).  > 📘 Updating a recipient\'s email after sending a document >  > **Note**: If you update a recipient\'s email address after sending a document, they will receive an instant notification at the new email address, allowing them access to the document. Access via the previous email will be revoked.  ### Restrictions for updating a recipient\'s email  - You cannot change emails of PandaDoc users. - You cannot use the email addresses of existing contacts. If you need to use an email from an existing contact, use the [Change Signer](https://developers.pandadoc.com/reference/change-signer) endpoint to replace a signer with this contact. 
     * Update Document Recipient
     * @param id Document UUID.
     * @param recipientId Recipient UUID.
     * @param documentRecipientEditRequest
     */
    public editDocumentRecipientWithHttpInfo(id: string, recipientId: string, documentRecipientEditRequest: DocumentRecipientEditRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.editDocumentRecipientWithHttpInfo(id, recipientId, documentRecipientEditRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Modify recipient\'s personal details.  > 🚧 Before you start >  > To edit a recipient, please ensure that you have the \'Can Edit Document\' permission.  Use this endpoint to easily fix typos in a recipient\'s name or email, or to change any other recipient information in a sent document.   > 📘 Please note that changes made to a recipient within a document will also update their `Contact` information. However, these changes will not update information about this recipient in other documents where they have already been added.  ### Document status  - You can edit a signer in the following document statuses:   - \'Draft\' (`document.draft`),   - \'Waiting Approval\' (`document.waiting_approval`),   - \'Approved\' (`document.approved`),   - \'Rejected\' (`document.rejected`),   - \'Sent\' (`document.sent`),   - \'Viewed\' (`document.viewed`), but only until they have signed the document. - You can edit a CC recipient in any document status **except**:   - \'Expired\' (`document.voided`),   - \'Declined\' (`document.declined`).  > 📘 Updating a recipient\'s email after sending a document >  > **Note**: If you update a recipient\'s email address after sending a document, they will receive an instant notification at the new email address, allowing them access to the document. Access via the previous email will be revoked.  ### Restrictions for updating a recipient\'s email  - You cannot change emails of PandaDoc users. - You cannot use the email addresses of existing contacts. If you need to use an email from an existing contact, use the [Change Signer](https://developers.pandadoc.com/reference/change-signer) endpoint to replace a signer with this contact. 
     * Update Document Recipient
     * @param id Document UUID.
     * @param recipientId Recipient UUID.
     * @param documentRecipientEditRequest
     */
    public editDocumentRecipient(id: string, recipientId: string, documentRecipientEditRequest: DocumentRecipientEditRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.editDocumentRecipient(id, recipientId, documentRecipientEditRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Reassign fields to another signer.  > 🚧 Before you start >  > To change a signer in a document, please ensure that: >  > - You have the \'Can Manage Recipients\' permission. > - New signer is already created in your contacts. If not, add them using the [Create Contact](https://developers.pandadoc.com/reference/create-contact) endpoint.  You can reassign fields to another signer before the original signer has signed the document. You can choose any person except those recipients who have already signed the document.  The endpoint path includes the `recipient_id` of the original signer and the request body must include the following two parameters:  - `kind`: Set this parameter to `contact` to specify an individual contact. - `id`: Input the ID of the contact you want to use as a replacement for the original signer.  To retrieve the contact\'s ID, use the [List Contacts](https://developers.pandadoc.com/reference/list-contacts) endpoint to access a list of all contacts, and then locate the desired contact by searching using the name or email address within the returned list.  Once you execute the call to change the signer, the original signer will be entirely removed from the document. If you wish to retain the original signer as a CC recipient, you can re-add them using the [Add CC Recipient](https://developers.pandadoc.com/reference/add-new-recipient-cc) endpoint.  > 🚧 Pre-filled fields >  > If you change the signer in a document that has already been sent, the signer\'s pre-filled fields will be completely reset. In the \'Draft\' (`document.draft`) status, pre-filled fields will remain. 
     * Change Signer (Reassign Document Recipient)
     * @param id Document UUID
     * @param recipientId Recipient UUID
     * @param documentRecipientCreateRequest
     */
    public reassignDocumentRecipientWithHttpInfo(id: string, recipientId: string, documentRecipientCreateRequest: DocumentRecipientCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentRecipientResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.reassignDocumentRecipientWithHttpInfo(id, recipientId, documentRecipientCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Reassign fields to another signer.  > 🚧 Before you start >  > To change a signer in a document, please ensure that: >  > - You have the \'Can Manage Recipients\' permission. > - New signer is already created in your contacts. If not, add them using the [Create Contact](https://developers.pandadoc.com/reference/create-contact) endpoint.  You can reassign fields to another signer before the original signer has signed the document. You can choose any person except those recipients who have already signed the document.  The endpoint path includes the `recipient_id` of the original signer and the request body must include the following two parameters:  - `kind`: Set this parameter to `contact` to specify an individual contact. - `id`: Input the ID of the contact you want to use as a replacement for the original signer.  To retrieve the contact\'s ID, use the [List Contacts](https://developers.pandadoc.com/reference/list-contacts) endpoint to access a list of all contacts, and then locate the desired contact by searching using the name or email address within the returned list.  Once you execute the call to change the signer, the original signer will be entirely removed from the document. If you wish to retain the original signer as a CC recipient, you can re-add them using the [Add CC Recipient](https://developers.pandadoc.com/reference/add-new-recipient-cc) endpoint.  > 🚧 Pre-filled fields >  > If you change the signer in a document that has already been sent, the signer\'s pre-filled fields will be completely reset. In the \'Draft\' (`document.draft`) status, pre-filled fields will remain. 
     * Change Signer (Reassign Document Recipient)
     * @param id Document UUID
     * @param recipientId Recipient UUID
     * @param documentRecipientCreateRequest
     */
    public reassignDocumentRecipient(id: string, recipientId: string, documentRecipientCreateRequest: DocumentRecipientCreateRequest, _options?: PromiseConfigurationOptions): Promise<DocumentRecipientResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.reassignDocumentRecipient(id, recipientId, documentRecipientCreateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDocumentRemindersApi } from './ObservableAPI';

import { DocumentRemindersApiRequestFactory, DocumentRemindersApiResponseProcessor} from "../apis/DocumentRemindersApi";
export class PromiseDocumentRemindersApi {
    private api: ObservableDocumentRemindersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentRemindersApiRequestFactory,
        responseProcessor?: DocumentRemindersApiResponseProcessor
    ) {
        this.api = new ObservableDocumentRemindersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sends manual reminders to one or more recipients of a specified document. 
     * Send Manual Reminder
     * @param documentId The UUID of the document.
     * @param documentSendManualReminderRequest
     */
    public createManualReminderWithHttpInfo(documentId: string, documentSendManualReminderRequest: DocumentSendManualReminderRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentSendManualReminder200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createManualReminderWithHttpInfo(documentId, documentSendManualReminderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Sends manual reminders to one or more recipients of a specified document. 
     * Send Manual Reminder
     * @param documentId The UUID of the document.
     * @param documentSendManualReminderRequest
     */
    public createManualReminder(documentId: string, documentSendManualReminderRequest: DocumentSendManualReminderRequest, _options?: PromiseConfigurationOptions): Promise<DocumentSendManualReminder200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createManualReminder(documentId, documentSendManualReminderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the current auto reminder configuration for a specified document. 
     * Document Auto Reminder Settings
     * @param documentId The UUID of the document.
     */
    public getDocumentAutoReminderSettingsWithHttpInfo(documentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutoReminders>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDocumentAutoReminderSettingsWithHttpInfo(documentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the current auto reminder configuration for a specified document. 
     * Document Auto Reminder Settings
     * @param documentId The UUID of the document.
     */
    public getDocumentAutoReminderSettings(documentId: string, _options?: PromiseConfigurationOptions): Promise<AutoReminders> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDocumentAutoReminderSettings(documentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the current auto reminder status per recipient for a specified document. Recipients who could not receive reminders due to validations (recipient groups, non-signers, etc.) will be skipped and not included in the response. 
     * Document Auto Reminder Status
     * @param documentId The UUID of the document.
     */
    public statusDocumentAutoReminderWithHttpInfo(documentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentAutoRemindersResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.statusDocumentAutoReminderWithHttpInfo(documentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the current auto reminder status per recipient for a specified document. Recipients who could not receive reminders due to validations (recipient groups, non-signers, etc.) will be skipped and not included in the response. 
     * Document Auto Reminder Status
     * @param documentId The UUID of the document.
     */
    public statusDocumentAutoReminder(documentId: string, _options?: PromiseConfigurationOptions): Promise<DocumentAutoRemindersResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.statusDocumentAutoReminder(documentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Configures automatic reminders for document recipients.  These reminders are sent after the document\'s initial dispatch.  Settings include enabling reminders, delivery method (email/SMS), initial delay,  and recurrence frequency. 
     * Update Document Auto Reminder Settings
     * @param documentId The UUID of the document.
     * @param updateDocumentAutoRemindersRequest
     */
    public updateDocumentAutoReminderSettingsWithHttpInfo(documentId: string, updateDocumentAutoRemindersRequest: UpdateDocumentAutoRemindersRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateDocumentAutoRemindersResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDocumentAutoReminderSettingsWithHttpInfo(documentId, updateDocumentAutoRemindersRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Configures automatic reminders for document recipients.  These reminders are sent after the document\'s initial dispatch.  Settings include enabling reminders, delivery method (email/SMS), initial delay,  and recurrence frequency. 
     * Update Document Auto Reminder Settings
     * @param documentId The UUID of the document.
     * @param updateDocumentAutoRemindersRequest
     */
    public updateDocumentAutoReminderSettings(documentId: string, updateDocumentAutoRemindersRequest: UpdateDocumentAutoRemindersRequest, _options?: PromiseConfigurationOptions): Promise<UpdateDocumentAutoRemindersResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDocumentAutoReminderSettings(documentId, updateDocumentAutoRemindersRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDocumentSectionsBundlesApi } from './ObservableAPI';

import { DocumentSectionsBundlesApiRequestFactory, DocumentSectionsBundlesApiResponseProcessor} from "../apis/DocumentSectionsBundlesApi";
export class PromiseDocumentSectionsBundlesApi {
    private api: ObservableDocumentSectionsBundlesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentSectionsBundlesApiRequestFactory,
        responseProcessor?: DocumentSectionsBundlesApiResponseProcessor
    ) {
        this.api = new ObservableDocumentSectionsBundlesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes selected section from the document.
     * Delete Document Section
     * @param documentId Specify document ID.
     * @param sectionId Specify section ID.
     */
    public deleteSectionWithHttpInfo(documentId: string, sectionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSectionWithHttpInfo(documentId, sectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes selected section from the document.
     * Delete Document Section
     * @param documentId Specify document ID.
     * @param sectionId Specify section ID.
     */
    public deleteSection(documentId: string, sectionId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteSection(documentId, sectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve information about the sections within a document. 
     * List Document Sections
     * @param documentId Document ID
     */
    public listSectionsWithHttpInfo(documentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UploadSectionListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSectionsWithHttpInfo(documentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve information about the sections within a document. 
     * List Document Sections
     * @param documentId Document ID
     */
    public listSections(documentId: string, _options?: PromiseConfigurationOptions): Promise<UploadSectionListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listSections(documentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Receive the upload status of the document and sections by their `upload_id`.  Requesting document section upload status is useful to ensure a document section upload is in the expected state before calling additional API methods.  In response, you receive an array with `sections_uuid`. You can receive information about each section using the [Document Section Info](https://developers.pandadoc.com/reference/document-section-info) endpoint.  ```json     \"section_uuids\": [         \"H8T8CJofGY6JwTsWsPuDEF\",         \"8MwLaU4SaZywqLiDk26mDF\"     ] ```  ## Available Document Section Upload Statuses  The following is a complete list of all possible document statuses returned:  | Document Status                      | Status Description                                                                                                                                                | | :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | | `document_sections_upload.UPLOADED`  | The document section upload process has just been created. It is in processing and will be in `document_sections_upload.PROCESSED` state momentarily.             | | `document_sections_upload.PROCESSED` | The document sections upload is processed and the sections are already created in the document. All aspects of the document sections can be edited in this state. | | `document_sections_upload.ERROR`     | Document section upload procces has been failed. For more information check error details in the response.                                                        | 
     * Document Section Upload Status
     * @param documentId Document ID.
     * @param uploadId Upload ID.
     */
    public sectionDetailsWithHttpInfo(documentId: string, uploadId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UploadSectionStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sectionDetailsWithHttpInfo(documentId, uploadId, observableOptions);
        return result.toPromise();
    }

    /**
     * Receive the upload status of the document and sections by their `upload_id`.  Requesting document section upload status is useful to ensure a document section upload is in the expected state before calling additional API methods.  In response, you receive an array with `sections_uuid`. You can receive information about each section using the [Document Section Info](https://developers.pandadoc.com/reference/document-section-info) endpoint.  ```json     \"section_uuids\": [         \"H8T8CJofGY6JwTsWsPuDEF\",         \"8MwLaU4SaZywqLiDk26mDF\"     ] ```  ## Available Document Section Upload Statuses  The following is a complete list of all possible document statuses returned:  | Document Status                      | Status Description                                                                                                                                                | | :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | | `document_sections_upload.UPLOADED`  | The document section upload process has just been created. It is in processing and will be in `document_sections_upload.PROCESSED` state momentarily.             | | `document_sections_upload.PROCESSED` | The document sections upload is processed and the sections are already created in the document. All aspects of the document sections can be edited in this state. | | `document_sections_upload.ERROR`     | Document section upload procces has been failed. For more information check error details in the response.                                                        | 
     * Document Section Upload Status
     * @param documentId Document ID.
     * @param uploadId Upload ID.
     */
    public sectionDetails(documentId: string, uploadId: string, _options?: PromiseConfigurationOptions): Promise<UploadSectionStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sectionDetails(documentId, uploadId, observableOptions);
        return result.toPromise();
    }

    /**
     * Receive information about each section.
     * Document Section Details
     * @param documentId Document ID.
     * @param sectionId Section ID.
     */
    public sectionInfoWithHttpInfo(documentId: string, sectionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SectionInfoResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sectionInfoWithHttpInfo(documentId, sectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Receive information about each section.
     * Document Section Details
     * @param documentId Document ID.
     * @param sectionId Section ID.
     */
    public sectionInfo(documentId: string, sectionId: string, _options?: PromiseConfigurationOptions): Promise<SectionInfoResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sectionInfo(documentId, sectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * With this endpoint, you can add a new section to an existing PandaDoc document (create a bundle).  You can upload a section to the document using a PandaDoc template or a file by URL.  > ⏱️ Document Section creation is a non-blocking (asynchronous) operation >  > The document creation process may take some time. >  > With a successful request, you receive a response with the created upload ID and status `document_sections_upload.uploaded`. After processing completes on our servers, usually a few seconds, the document moves to the `document_sections_upload.PROCESSED` status.  ## Using a PandaDoc template  <details>    > 🚧 Current Version Limitations   >    > Images in sections are currently not supported.    > 📘 Pricing tables note   >    > Each pricing table must have a unique name to populate it with data correctly.    A PandaDoc template is a document template created and edited in the PandaDoc web application. Our [help center](https://support.pandadoc.com/en/articles/9714616-save-time-with-a-reusable-template) has further information on PandaDoc templates.     If you don\'t have any PandaDoc Template yet, you can easily create one by clicking [Copy a Sample PandaDoc template](https://app.pandadoc.com/get-this-template/?pt=public_template&pub=eiC3a6qBVfEfbw7VCYgaeN). This will open the PandaDoc application in a new tab, copy the sample template into your account, and create a new document from the template. </details>  ## Using a File by URL  <details>      Using this endpoint you can add a section to the existing document. The section is created from a file you upload. The file can be a PDF, DocX, or RTF.    > 📘 We\'ve prepared two samples that you can use to test the request.   > Download them here:   >   > - [Download a Sample PDF with Form Fields](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)    > - [Download a Sample PDF with Field Tags](https://5132871.fs1.hubspotusercontent-na1.net/hubfs/5132871/SamplePandaDocPdf_FieldTags_updated.pdf)    > ❗️ Limitations   >    > * This method does not support multiple documents.   > * The maximum supported file size is 50 MB. API returns \"413 Request entity too large\" in case of bigger files.   > * PandaDoc does not support creating document from a PDF with encrypted files (to check whether a file is encrypted or not, try Get info -> Secure: Password Encrypted).    ### PDF Form Fields    PandaDoc recognizes PDF form fields. To enable this feature, pass the optional `parse_form_fields` value as `true` when making a create document section API call. We support Text fields, Dropdowns, and Signature fields.    If you would like to pass additional parameters to configure PDF form fields, use the PDF field name as an optId. You can use a PDF editor such as Adobe Acrobat, Foxit to get and edit field names in your PDF.    [**Download a Sample PDF with Form Fields**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)    ### PDF/DocX/RTF Field Tags    This parsing format allows a word processor such as [Microsoft Word](https://support.office.com/en-us/article/Save-as-PDF-d85416c5-7d77-4fd6-a216-6f4bf7c7c110?ui=en-US&rs=en-US&ad=US) or [Google Docs](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en) to prepare a document and save it in PDF, DocX or RTF format.    Within the text, PandaDoc parses field tags. A field tag starts and ends with brackets. The field tag includes basic information on how to create a form field in the PandaDoc document. The request JSON object `optId` can also extend this information for even greater control.    Here is an example of how the field tag in a PDF/DocX/RTF  is converted to a text field in the PandaDoc document:    ![](https://files.readme.io/38afedf-ex3.png \"ex3.png\")    [**Download a Sample PDF with Field Tags**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf)    #### PDF Field Tag Key    ![](https://files.readme.io/a81fbf1-field-tag-structure.png \"field-tag-structure.png\")    | Number | Key         | Description                                                                                                                                                                                                                                                                               | Example                           |   | :----- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |   | 1      | `fieldType` | Field type from the table documented below                                                                                                                                                                                                                                                | `signature`, or `s` for shorthand |   | 2      | `*`         | Optional `*` denotes the field is not required                                                                                                                                                                                                                                            | `*`                               |   | 3      | `role`      | Role name. Associate the field tag with a recipient role. Roles must be assigned to recipients in the request body. In this case we are using role `s1` to keep the length short and denote the concept of \"signer 1\". `s1` would be the value passed as role in a recipient JSON object. | `s1`                              |   | 4      | `optId`     | Optional field Id. Specify more information about the field tag within the post request by using this id.                                                                                                                                                                                 | `sigBox17`                        |   | 5      | `_____`     | Use underscores to widen the field if desired. The form fields in PandaDoc will scale to the length and size of your field tag.                                                                                                                                                           | `_____`                           |    > 🚧 Role names restrictions   >    > Underscores are not supported in role names for a file with a Field Tag.    #### PDF/DocX/RTF Field Tag Supported Types    | Field Type  | Short Notation | Is PandaDoc Field |   | :---------- | :------------- | :---------------- |   | `textfield` | `t`            | Field             |   | `checkbox`  | `c`            | Field             |   | `signature` | `s`            | Field             |   | `date`      | `d`            | Field             |   | `initials`  | `i`            | Field             |   | `dropdown`  | `dd`           | Field             |    ```json Field Tags Example   \"fields\": {       \"textfield\": {           \"value\": \"Jane\",         \"role\": \"user\"     },     \"dropdown\": {         \"value\": \"opt1\",         \"role\": \"user\",         \"options\":[           \"opt1\",           \"opt2\",           \"opt3\"         ]     },     \"checkbox\": {           \"value\": true,         \"role\": \"user\"     },     \"date\":{         \"value\": \"2022-05-20\",         \"role\": \"user\"     },     \"signature\": {           \"value\": \"\",         \"role\": \"user\"     }   }   ```    > 📘 Fields in PandaDoc   >    > The following article explains how to use Fields: [Everything you need to know about Fields](https://support.pandadoc.com/en/articles/9714583-fields)    ### Signing order    Set a signing order for document section sections created from a file.    ```json   \"recipients\": [       {         \"email\": \"josh@example.com\",       \"first_name\": \"Josh\",       \"last_name\": \"Ron\",       \"role\": \"user\",       \"signing_order\": 1     }   ]   ```    > 📘 Signing order in PandaDoc   >   > The following article explains how to use signing order: [How to use signing order](https://support.pandadoc.com/en/articles/9714771-signing-order)    ### Error handling    | Error description | Type | Root cause |   |---|---|---|   | Document version 1 is not supported. | Validation errors: Form fields | The creation document section is supported only for document version 2 |   | PDF content hasn\'t been processed: document is broken or locked | Processing errors: Failed to process document content | Document converter service can’t process PDF. This may be caused by locked PDF or if it’s broken. |   | Error occurred while parsing PDF field tags. Please try PDF flattening or reach out to support | Processing errors: Field tag / Form field validation error | Doc converter managed to parse PDF and extract tags, but at least 1 of them is invalid (having negative position, for example). Usually we recommend PDF flattening and it helps |   | No role=\'{role}\' for field tag specified in `recipients` found, roles passed were {roles} | Validation errors: Field tags | Role is invalid. When the role specified in field tag is empty or wasn’t provided in a payload for any recipient |   | All field tags within PDF must be declared within `fields`  object of the JSON Payload. No field with optId=\'{optid}\' found in fields object, fields passed were {optids} | Validation errors: Field tags | Label is invalid. Occurs when **optId** specified in field tag is empty or no field with **name = optId** was provided in a payload |   | One of field tags in PDF with type=\'{field}\' doesn\'t have a role | Validation errors: Field tags | Field tag in PDF has no role. One of field tags in PDF with type=% doesn\'t have a role. |   | Role for form field with name=\'{role}\' is not provided in payload | Validation errors: Form fields | Role for form field with ‘name’ is not provided. Occurs when `role` for form field with name=%s  is not provided in payload |   | Field for form field with name=\'{name}\' is not specified in payload, available names are {names} | Validation errors: Form fields | Field ‘name’ is not specified in payload. Occurs when no field with name = form field name was provided in a payload |   | No role=\'{role}\' for form field specified in \'recipients\' found, roles passed were {roles}\" | Validation errors: Form fields | Failed to resolve field actor for `role` in form field with ‘name’.   Occurs when role from the form field is not found in recipient’s from payload |   | Failed to download file from link {url}. | Source errors | Error on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload |   | Failed to download file from link {url} (status code: {status code}) | Source errors | Error with HTTP status code on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload - remote server responded with the HTTP status code |   | Content type=\'{type}\' is not supported, available types are {types} | Source errors | Content type is not supported.   Content type should be one of the following: PDF, ZIP, doc, docx, RTF |   | The maximum file size is exceeded, limit is {limit} MB | Source errors | The file size has exceeded the allowed limits. An error occurred while trying to download a file that is too large (limit is 50M) |        </details> 
     * Create Document Section
     * @param documentId Document ID
     * @param uploadSectionRequest
     * @param [mergeFieldScope] Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID. 
     */
    public uploadSectionWithHttpInfo(documentId: string, uploadSectionRequest: UploadSectionRequest, mergeFieldScope?: 'document' | 'upload', _options?: PromiseConfigurationOptions): Promise<HttpInfo<UploadSectionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadSectionWithHttpInfo(documentId, uploadSectionRequest, mergeFieldScope, observableOptions);
        return result.toPromise();
    }

    /**
     * With this endpoint, you can add a new section to an existing PandaDoc document (create a bundle).  You can upload a section to the document using a PandaDoc template or a file by URL.  > ⏱️ Document Section creation is a non-blocking (asynchronous) operation >  > The document creation process may take some time. >  > With a successful request, you receive a response with the created upload ID and status `document_sections_upload.uploaded`. After processing completes on our servers, usually a few seconds, the document moves to the `document_sections_upload.PROCESSED` status.  ## Using a PandaDoc template  <details>    > 🚧 Current Version Limitations   >    > Images in sections are currently not supported.    > 📘 Pricing tables note   >    > Each pricing table must have a unique name to populate it with data correctly.    A PandaDoc template is a document template created and edited in the PandaDoc web application. Our [help center](https://support.pandadoc.com/en/articles/9714616-save-time-with-a-reusable-template) has further information on PandaDoc templates.     If you don\'t have any PandaDoc Template yet, you can easily create one by clicking [Copy a Sample PandaDoc template](https://app.pandadoc.com/get-this-template/?pt=public_template&pub=eiC3a6qBVfEfbw7VCYgaeN). This will open the PandaDoc application in a new tab, copy the sample template into your account, and create a new document from the template. </details>  ## Using a File by URL  <details>      Using this endpoint you can add a section to the existing document. The section is created from a file you upload. The file can be a PDF, DocX, or RTF.    > 📘 We\'ve prepared two samples that you can use to test the request.   > Download them here:   >   > - [Download a Sample PDF with Form Fields](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)    > - [Download a Sample PDF with Field Tags](https://5132871.fs1.hubspotusercontent-na1.net/hubfs/5132871/SamplePandaDocPdf_FieldTags_updated.pdf)    > ❗️ Limitations   >    > * This method does not support multiple documents.   > * The maximum supported file size is 50 MB. API returns \"413 Request entity too large\" in case of bigger files.   > * PandaDoc does not support creating document from a PDF with encrypted files (to check whether a file is encrypted or not, try Get info -> Secure: Password Encrypted).    ### PDF Form Fields    PandaDoc recognizes PDF form fields. To enable this feature, pass the optional `parse_form_fields` value as `true` when making a create document section API call. We support Text fields, Dropdowns, and Signature fields.    If you would like to pass additional parameters to configure PDF form fields, use the PDF field name as an optId. You can use a PDF editor such as Adobe Acrobat, Foxit to get and edit field names in your PDF.    [**Download a Sample PDF with Form Fields**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)    ### PDF/DocX/RTF Field Tags    This parsing format allows a word processor such as [Microsoft Word](https://support.office.com/en-us/article/Save-as-PDF-d85416c5-7d77-4fd6-a216-6f4bf7c7c110?ui=en-US&rs=en-US&ad=US) or [Google Docs](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en) to prepare a document and save it in PDF, DocX or RTF format.    Within the text, PandaDoc parses field tags. A field tag starts and ends with brackets. The field tag includes basic information on how to create a form field in the PandaDoc document. The request JSON object `optId` can also extend this information for even greater control.    Here is an example of how the field tag in a PDF/DocX/RTF  is converted to a text field in the PandaDoc document:    ![](https://files.readme.io/38afedf-ex3.png \"ex3.png\")    [**Download a Sample PDF with Field Tags**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf)    #### PDF Field Tag Key    ![](https://files.readme.io/a81fbf1-field-tag-structure.png \"field-tag-structure.png\")    | Number | Key         | Description                                                                                                                                                                                                                                                                               | Example                           |   | :----- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |   | 1      | `fieldType` | Field type from the table documented below                                                                                                                                                                                                                                                | `signature`, or `s` for shorthand |   | 2      | `*`         | Optional `*` denotes the field is not required                                                                                                                                                                                                                                            | `*`                               |   | 3      | `role`      | Role name. Associate the field tag with a recipient role. Roles must be assigned to recipients in the request body. In this case we are using role `s1` to keep the length short and denote the concept of \"signer 1\". `s1` would be the value passed as role in a recipient JSON object. | `s1`                              |   | 4      | `optId`     | Optional field Id. Specify more information about the field tag within the post request by using this id.                                                                                                                                                                                 | `sigBox17`                        |   | 5      | `_____`     | Use underscores to widen the field if desired. The form fields in PandaDoc will scale to the length and size of your field tag.                                                                                                                                                           | `_____`                           |    > 🚧 Role names restrictions   >    > Underscores are not supported in role names for a file with a Field Tag.    #### PDF/DocX/RTF Field Tag Supported Types    | Field Type  | Short Notation | Is PandaDoc Field |   | :---------- | :------------- | :---------------- |   | `textfield` | `t`            | Field             |   | `checkbox`  | `c`            | Field             |   | `signature` | `s`            | Field             |   | `date`      | `d`            | Field             |   | `initials`  | `i`            | Field             |   | `dropdown`  | `dd`           | Field             |    ```json Field Tags Example   \"fields\": {       \"textfield\": {           \"value\": \"Jane\",         \"role\": \"user\"     },     \"dropdown\": {         \"value\": \"opt1\",         \"role\": \"user\",         \"options\":[           \"opt1\",           \"opt2\",           \"opt3\"         ]     },     \"checkbox\": {           \"value\": true,         \"role\": \"user\"     },     \"date\":{         \"value\": \"2022-05-20\",         \"role\": \"user\"     },     \"signature\": {           \"value\": \"\",         \"role\": \"user\"     }   }   ```    > 📘 Fields in PandaDoc   >    > The following article explains how to use Fields: [Everything you need to know about Fields](https://support.pandadoc.com/en/articles/9714583-fields)    ### Signing order    Set a signing order for document section sections created from a file.    ```json   \"recipients\": [       {         \"email\": \"josh@example.com\",       \"first_name\": \"Josh\",       \"last_name\": \"Ron\",       \"role\": \"user\",       \"signing_order\": 1     }   ]   ```    > 📘 Signing order in PandaDoc   >   > The following article explains how to use signing order: [How to use signing order](https://support.pandadoc.com/en/articles/9714771-signing-order)    ### Error handling    | Error description | Type | Root cause |   |---|---|---|   | Document version 1 is not supported. | Validation errors: Form fields | The creation document section is supported only for document version 2 |   | PDF content hasn\'t been processed: document is broken or locked | Processing errors: Failed to process document content | Document converter service can’t process PDF. This may be caused by locked PDF or if it’s broken. |   | Error occurred while parsing PDF field tags. Please try PDF flattening or reach out to support | Processing errors: Field tag / Form field validation error | Doc converter managed to parse PDF and extract tags, but at least 1 of them is invalid (having negative position, for example). Usually we recommend PDF flattening and it helps |   | No role=\'{role}\' for field tag specified in `recipients` found, roles passed were {roles} | Validation errors: Field tags | Role is invalid. When the role specified in field tag is empty or wasn’t provided in a payload for any recipient |   | All field tags within PDF must be declared within `fields`  object of the JSON Payload. No field with optId=\'{optid}\' found in fields object, fields passed were {optids} | Validation errors: Field tags | Label is invalid. Occurs when **optId** specified in field tag is empty or no field with **name = optId** was provided in a payload |   | One of field tags in PDF with type=\'{field}\' doesn\'t have a role | Validation errors: Field tags | Field tag in PDF has no role. One of field tags in PDF with type=% doesn\'t have a role. |   | Role for form field with name=\'{role}\' is not provided in payload | Validation errors: Form fields | Role for form field with ‘name’ is not provided. Occurs when `role` for form field with name=%s  is not provided in payload |   | Field for form field with name=\'{name}\' is not specified in payload, available names are {names} | Validation errors: Form fields | Field ‘name’ is not specified in payload. Occurs when no field with name = form field name was provided in a payload |   | No role=\'{role}\' for form field specified in \'recipients\' found, roles passed were {roles}\" | Validation errors: Form fields | Failed to resolve field actor for `role` in form field with ‘name’.   Occurs when role from the form field is not found in recipient’s from payload |   | Failed to download file from link {url}. | Source errors | Error on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload |   | Failed to download file from link {url} (status code: {status code}) | Source errors | Error with HTTP status code on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload - remote server responded with the HTTP status code |   | Content type=\'{type}\' is not supported, available types are {types} | Source errors | Content type is not supported.   Content type should be one of the following: PDF, ZIP, doc, docx, RTF |   | The maximum file size is exceeded, limit is {limit} MB | Source errors | The file size has exceeded the allowed limits. An error occurred while trying to download a file that is too large (limit is 50M) |        </details> 
     * Create Document Section
     * @param documentId Document ID
     * @param uploadSectionRequest
     * @param [mergeFieldScope] Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID. 
     */
    public uploadSection(documentId: string, uploadSectionRequest: UploadSectionRequest, mergeFieldScope?: 'document' | 'upload', _options?: PromiseConfigurationOptions): Promise<UploadSectionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadSection(documentId, uploadSectionRequest, mergeFieldScope, observableOptions);
        return result.toPromise();
    }

    /**
     * With this endpoint, you can add a new section to an existing PandaDoc document (create a bundle). The section is created from a file you upload. The file can be a PDF, DocX, or RTF.  > 📘 We\'ve prepared two samples that you can use to test the request. > Download them here: > > - [Download a Sample PDF with Form Fields](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)  > - [Download a Sample PDF with Field Tags](https://5132871.fs1.hubspotusercontent-na1.net/hubfs/5132871/SamplePandaDocPdf_FieldTags_updated.pdf)   > 🚧 Usage specifics >  > 1. This method uses a `multipart/form-data` request type instead of the `application/json` typically found in the PandaDoc API. This is to accommodate the upload of the included document. > 2. You can send a URL instead of a file in the document creation request.   >    In this case, you need to use the `application/json` content type and add the URL parameter in the body request. As an example, see [Create from public PDF](https://developers.pandadoc.com/docs/create-and-send-a-document-from-a-publicly-available-pdf) guide for more details. > 3. A file you upload is not stored in your PandaDoc account, so you have to upload it with every request.  > ❗️ Limitations >  > 1. This method does not support multiple documents. > 2. The maximum supported file size is 50 MB. API returns \"413 Request entity too large\" in case of bigger files. > 3. PandaDoc does not support creating document from a PDF with encrypted files (to check whether a file is encrypted or not, try Get info -> Secure: Password Encrypted).  > ⏱️ Document Section creation is a non-blocking (asynchronous) operation >  > The document creation process may take some time. >  > With a successful request, you receive a response with the created upload ID and status `document_sections_upload.uploaded`. After processing completes on our servers, usually a few seconds, the document moves to the `document_sections_upload.PROCESSED` status.  ## PDF Form Fields  PandaDoc recognizes PDF form fields. To enable this feature, pass the optional `parse_form_fields` value as `true` when making a create document section API call. We support Text fields, Dropdowns, and Signature fields.  If you would like to pass additional parameters to configure PDF form fields, use the PDF field name as an optId. You can use a PDF editor such as Adobe Acrobat, Foxit to get and edit field names in your PDF.  [**Download a Sample PDF with Form Fields**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)  ## PDF/DocX/RTF Field Tags  This parsing format allows a word processor such as [Microsoft Word](https://support.office.com/en-us/article/Save-as-PDF-d85416c5-7d77-4fd6-a216-6f4bf7c7c110?ui=en-US&rs=en-US&ad=US) or [Google Docs](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en) to prepare a document and save it in PDF, DocX or RTF format.  Within the text, PandaDoc parses field tags. A field tag starts and ends with brackets. The field tag includes basic information on how to create a form field in the PandaDoc document. The request JSON object `optId` can also extend this information for even greater control.  Here is an example of how the field tag in a PDF/DocX/RTF  is converted to a text field in the PandaDoc document:  ![](https://files.readme.io/38afedf-ex3.png \"ex3.png\")  [**Download a Sample PDF with Field Tags**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf)  <details>    ### PDF Field Tag Key    ![](https://files.readme.io/a81fbf1-field-tag-structure.png \"field-tag-structure.png\")    | Number | Key         | Description                                                                                                                                                                                                                                                                               | Example                           |   | :----- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |   | 1      | `fieldType` | Field type from the table documented below                                                                                                                                                                                                                                                | `signature`, or `s` for shorthand |   | 2      | `*`         | Optional `*` denotes the field is not required                                                                                                                                                                                                                                            | `*`                               |   | 3      | `role`      | Role name. Associate the field tag with a recipient role. Roles must be assigned to recipients in the request body. In this case we are using role `s1` to keep the length short and denote the concept of \"signer 1\". `s1` would be the value passed as role in a recipient JSON object. | `s1`                              |   | 4      | `optId`     | Optional field Id. Specify more information about the field tag within the post request by using this id.                                                                                                                                                                                 | `sigBox17`                        |   | 5      | `_____`     | Use underscores to widen the field if desired. The form fields in PandaDoc will scale to the length and size of your field tag.                                                                                                                                                           | `_____`                           |    > 🚧 Role names restrictions   >    > Underscores are not supported in role names for a file with a Field Tag.    ### PDF/DocX/RTF Field Tag Supported Types    | Field Type  | Short Notation | Is PandaDoc Field |   | :---------- | :------------- | :---------------- |   | `textfield` | `t`            | Field             |   | `checkbox`  | `c`            | Field             |   | `signature` | `s`            | Field             |   | `date`      | `d`            | Field             |   | `initials`  | `i`            | Field             |   | `dropdown`  | `dd`           | Field             |    > 📘 Fields in PandaDoc   >    > The following article explains how to use Fields: [Everything you need to know about Fields](https://support.pandadoc.com/en/articles/9714583-fields)    ```json Field Tags Example   \"fields\": {             \"textfield\": {                 \"value\": \"Jane\",               \"role\": \"user\"           },           \"dropdown\": {               \"value\": \"opt1\",               \"role\": \"user\",               \"options\":[                 \"opt1\",                 \"opt2\",                 \"opt3\"               ]           },           \"checkbox\": {                 \"value\": true,               \"role\": \"user\"           },           \"date\":{               \"value\": \"2022-05-20\",               \"role\": \"user\"           },           \"signature\": {                 \"value\": \"\",               \"role\": \"user\"           }       }   ```  </details>  ## Signing order  Set a signing order for document section sections created from a file.  ```json \"recipients\": [     {       \"email\": \"josh@example.com\",     \"first_name\": \"Josh\",     \"last_name\": \"Ron\",     \"role\": \"user\",     \"signing_order\": 1   } ] ```  ## Error handling  | Error description | Type | Root cause | |---|---|---| | Document version 1 is not supported. | Validation errors: Form fields | The creation document section is supported only for document version 2 | | PDF content hasn\'t been processed: document is broken or locked | Processing errors: Failed to process document content | Document converter service can’t process PDF. This may be caused by locked PDF or if it’s broken. | | Error occurred while parsing PDF field tags. Please try PDF flattening or reach out to support | Processing errors: Field tag / Form field validation error | Doc converter managed to parse PDF and extract tags, but at least 1 of them is invalid (having negative position, for example). Usually we recommend PDF flattening and it helps | | No role=\'{role}\' for field tag specified in `recipients` found, roles passed were {roles} | Validation errors: Field tags | Role is invalid. When the role specified in field tag is empty or wasn’t provided in a payload for any recipient | | All field tags within PDF must be declared within `fields`  object of the JSON Payload. No field with optId=\'{optid}\' found in fields object, fields passed were {optids} | Validation errors: Field tags | Label is invalid. Occurs when **optId** specified in field tag is empty or no field with **name = optId** was provided in a payload | | One of field tags in PDF with type=\'{field}\' doesn\'t have a role | Validation errors: Field tags | Field tag in PDF has no role. One of field tags in PDF with type=% doesn\'t have a role. | | Role for form field with name=\'{role}\' is not provided in payload | Validation errors: Form fields | Role for form field with ‘name’ is not provided. Occurs when `role` for form field with name=%s  is not provided in payload | | Field for form field with name=\'{name}\' is not specified in payload, available names are {names} | Validation errors: Form fields | Field ‘name’ is not specified in payload. Occurs when no field with name = form field name was provided in a payload | | No role=\'{role}\' for form field specified in \'recipients\' found, roles passed were {roles}\" | Validation errors: Form fields | Failed to resolve field actor for `role` in form field with ‘name’.   Occurs when role from the form field is not found in recipient’s from payload | | Failed to download file from link {url}. | Source errors | Error on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload | | Failed to download file from link {url} (status code: {status code}) | Source errors | Error with HTTP status code on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload - remote server responded with the HTTP status code | | Content type=\'{type}\' is not supported, available types are {types} | Source errors | Content type is not supported.   Content type should be one of the following: PDF, ZIP, doc, docx, RTF | | The maximum file size is exceeded, limit is {limit} MB | Source errors | The file size has exceeded the allowed limits. An error occurred while trying to download a file that is too large (limit is 50M) | 
     * Create Document Section from File Upload
     * @param documentId Document ID
     * @param [mergeFieldScope] Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID. 
     * @param [file] Binary PDF/DocX/RTF File.
     * @param [data] JSON as a multipart/form-data string.
     */
    public uploadSectionWithUploadWithHttpInfo(documentId: string, mergeFieldScope?: 'document' | 'upload', file?: HttpFile, data?: UploadSectionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UploadSectionResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadSectionWithUploadWithHttpInfo(documentId, mergeFieldScope, file, data, observableOptions);
        return result.toPromise();
    }

    /**
     * With this endpoint, you can add a new section to an existing PandaDoc document (create a bundle). The section is created from a file you upload. The file can be a PDF, DocX, or RTF.  > 📘 We\'ve prepared two samples that you can use to test the request. > Download them here: > > - [Download a Sample PDF with Form Fields](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)  > - [Download a Sample PDF with Field Tags](https://5132871.fs1.hubspotusercontent-na1.net/hubfs/5132871/SamplePandaDocPdf_FieldTags_updated.pdf)   > 🚧 Usage specifics >  > 1. This method uses a `multipart/form-data` request type instead of the `application/json` typically found in the PandaDoc API. This is to accommodate the upload of the included document. > 2. You can send a URL instead of a file in the document creation request.   >    In this case, you need to use the `application/json` content type and add the URL parameter in the body request. As an example, see [Create from public PDF](https://developers.pandadoc.com/docs/create-and-send-a-document-from-a-publicly-available-pdf) guide for more details. > 3. A file you upload is not stored in your PandaDoc account, so you have to upload it with every request.  > ❗️ Limitations >  > 1. This method does not support multiple documents. > 2. The maximum supported file size is 50 MB. API returns \"413 Request entity too large\" in case of bigger files. > 3. PandaDoc does not support creating document from a PDF with encrypted files (to check whether a file is encrypted or not, try Get info -> Secure: Password Encrypted).  > ⏱️ Document Section creation is a non-blocking (asynchronous) operation >  > The document creation process may take some time. >  > With a successful request, you receive a response with the created upload ID and status `document_sections_upload.uploaded`. After processing completes on our servers, usually a few seconds, the document moves to the `document_sections_upload.PROCESSED` status.  ## PDF Form Fields  PandaDoc recognizes PDF form fields. To enable this feature, pass the optional `parse_form_fields` value as `true` when making a create document section API call. We support Text fields, Dropdowns, and Signature fields.  If you would like to pass additional parameters to configure PDF form fields, use the PDF field name as an optId. You can use a PDF editor such as Adobe Acrobat, Foxit to get and edit field names in your PDF.  [**Download a Sample PDF with Form Fields**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FormFields.pdf)  ## PDF/DocX/RTF Field Tags  This parsing format allows a word processor such as [Microsoft Word](https://support.office.com/en-us/article/Save-as-PDF-d85416c5-7d77-4fd6-a216-6f4bf7c7c110?ui=en-US&rs=en-US&ad=US) or [Google Docs](https://support.google.com/drive/answer/2423534?co=GENIE.Platform%3DDesktop&hl=en) to prepare a document and save it in PDF, DocX or RTF format.  Within the text, PandaDoc parses field tags. A field tag starts and ends with brackets. The field tag includes basic information on how to create a form field in the PandaDoc document. The request JSON object `optId` can also extend this information for even greater control.  Here is an example of how the field tag in a PDF/DocX/RTF  is converted to a text field in the PandaDoc document:  ![](https://files.readme.io/38afedf-ex3.png \"ex3.png\")  [**Download a Sample PDF with Field Tags**](https://cdn2.hubspot.net/hubfs/2127247/public-templates/SamplePandaDocPdf_FieldTags.pdf)  <details>    ### PDF Field Tag Key    ![](https://files.readme.io/a81fbf1-field-tag-structure.png \"field-tag-structure.png\")    | Number | Key         | Description                                                                                                                                                                                                                                                                               | Example                           |   | :----- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |   | 1      | `fieldType` | Field type from the table documented below                                                                                                                                                                                                                                                | `signature`, or `s` for shorthand |   | 2      | `*`         | Optional `*` denotes the field is not required                                                                                                                                                                                                                                            | `*`                               |   | 3      | `role`      | Role name. Associate the field tag with a recipient role. Roles must be assigned to recipients in the request body. In this case we are using role `s1` to keep the length short and denote the concept of \"signer 1\". `s1` would be the value passed as role in a recipient JSON object. | `s1`                              |   | 4      | `optId`     | Optional field Id. Specify more information about the field tag within the post request by using this id.                                                                                                                                                                                 | `sigBox17`                        |   | 5      | `_____`     | Use underscores to widen the field if desired. The form fields in PandaDoc will scale to the length and size of your field tag.                                                                                                                                                           | `_____`                           |    > 🚧 Role names restrictions   >    > Underscores are not supported in role names for a file with a Field Tag.    ### PDF/DocX/RTF Field Tag Supported Types    | Field Type  | Short Notation | Is PandaDoc Field |   | :---------- | :------------- | :---------------- |   | `textfield` | `t`            | Field             |   | `checkbox`  | `c`            | Field             |   | `signature` | `s`            | Field             |   | `date`      | `d`            | Field             |   | `initials`  | `i`            | Field             |   | `dropdown`  | `dd`           | Field             |    > 📘 Fields in PandaDoc   >    > The following article explains how to use Fields: [Everything you need to know about Fields](https://support.pandadoc.com/en/articles/9714583-fields)    ```json Field Tags Example   \"fields\": {             \"textfield\": {                 \"value\": \"Jane\",               \"role\": \"user\"           },           \"dropdown\": {               \"value\": \"opt1\",               \"role\": \"user\",               \"options\":[                 \"opt1\",                 \"opt2\",                 \"opt3\"               ]           },           \"checkbox\": {                 \"value\": true,               \"role\": \"user\"           },           \"date\":{               \"value\": \"2022-05-20\",               \"role\": \"user\"           },           \"signature\": {                 \"value\": \"\",               \"role\": \"user\"           }       }   ```  </details>  ## Signing order  Set a signing order for document section sections created from a file.  ```json \"recipients\": [     {       \"email\": \"josh@example.com\",     \"first_name\": \"Josh\",     \"last_name\": \"Ron\",     \"role\": \"user\",     \"signing_order\": 1   } ] ```  ## Error handling  | Error description | Type | Root cause | |---|---|---| | Document version 1 is not supported. | Validation errors: Form fields | The creation document section is supported only for document version 2 | | PDF content hasn\'t been processed: document is broken or locked | Processing errors: Failed to process document content | Document converter service can’t process PDF. This may be caused by locked PDF or if it’s broken. | | Error occurred while parsing PDF field tags. Please try PDF flattening or reach out to support | Processing errors: Field tag / Form field validation error | Doc converter managed to parse PDF and extract tags, but at least 1 of them is invalid (having negative position, for example). Usually we recommend PDF flattening and it helps | | No role=\'{role}\' for field tag specified in `recipients` found, roles passed were {roles} | Validation errors: Field tags | Role is invalid. When the role specified in field tag is empty or wasn’t provided in a payload for any recipient | | All field tags within PDF must be declared within `fields`  object of the JSON Payload. No field with optId=\'{optid}\' found in fields object, fields passed were {optids} | Validation errors: Field tags | Label is invalid. Occurs when **optId** specified in field tag is empty or no field with **name = optId** was provided in a payload | | One of field tags in PDF with type=\'{field}\' doesn\'t have a role | Validation errors: Field tags | Field tag in PDF has no role. One of field tags in PDF with type=% doesn\'t have a role. | | Role for form field with name=\'{role}\' is not provided in payload | Validation errors: Form fields | Role for form field with ‘name’ is not provided. Occurs when `role` for form field with name=%s  is not provided in payload | | Field for form field with name=\'{name}\' is not specified in payload, available names are {names} | Validation errors: Form fields | Field ‘name’ is not specified in payload. Occurs when no field with name = form field name was provided in a payload | | No role=\'{role}\' for form field specified in \'recipients\' found, roles passed were {roles}\" | Validation errors: Form fields | Failed to resolve field actor for `role` in form field with ‘name’.   Occurs when role from the form field is not found in recipient’s from payload | | Failed to download file from link {url}. | Source errors | Error on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload | | Failed to download file from link {url} (status code: {status code}) | Source errors | Error with HTTP status code on attempt to download file.   An error has occurred on an attempt to download file using the provided ‘url’ in payload - remote server responded with the HTTP status code | | Content type=\'{type}\' is not supported, available types are {types} | Source errors | Content type is not supported.   Content type should be one of the following: PDF, ZIP, doc, docx, RTF | | The maximum file size is exceeded, limit is {limit} MB | Source errors | The file size has exceeded the allowed limits. An error occurred while trying to download a file that is too large (limit is 50M) | 
     * Create Document Section from File Upload
     * @param documentId Document ID
     * @param [mergeFieldScope] Determines how the fields are mapped when creating a section.   * document: Default value. The fields of the entire document are updated.   * upload: Only the fields from the created section are updated. The merge field is appended with the upload ID. 
     * @param [file] Binary PDF/DocX/RTF File.
     * @param [data] JSON as a multipart/form-data string.
     */
    public uploadSectionWithUpload(documentId: string, mergeFieldScope?: 'document' | 'upload', file?: HttpFile, data?: UploadSectionRequest, _options?: PromiseConfigurationOptions): Promise<UploadSectionResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.uploadSectionWithUpload(documentId, mergeFieldScope, file, data, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDocumentSettingsApi } from './ObservableAPI';

import { DocumentSettingsApiRequestFactory, DocumentSettingsApiResponseProcessor} from "../apis/DocumentSettingsApi";
export class PromiseDocumentSettingsApi {
    private api: ObservableDocumentSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentSettingsApiRequestFactory,
        responseProcessor?: DocumentSettingsApiResponseProcessor
    ) {
        this.api = new ObservableDocumentSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the settings for a specified document. Supported fields: language, qualified_electronic_signature, expires_in (in days). 
     * Get document settings
     * @param documentId Unique identifier of the document to retrieve settings for.
     */
    public documentSettingsGetWithHttpInfo(documentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentSettingsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.documentSettingsGetWithHttpInfo(documentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the settings for a specified document. Supported fields: language, qualified_electronic_signature, expires_in (in days). 
     * Get document settings
     * @param documentId Unique identifier of the document to retrieve settings for.
     */
    public documentSettingsGet(documentId: string, _options?: PromiseConfigurationOptions): Promise<DocumentSettingsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.documentSettingsGet(documentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the settings for a specified document. Supported fields: language, qualified_electronic_signature, expires_in (in days). 
     * Update document settings
     * @param documentId Unique identifier of the document to update settings for.
     * @param updateDocumentSettingsRequest
     */
    public documentSettingsUpdateWithHttpInfo(documentId: string, updateDocumentSettingsRequest: UpdateDocumentSettingsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentSettingsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.documentSettingsUpdateWithHttpInfo(documentId, updateDocumentSettingsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the settings for a specified document. Supported fields: language, qualified_electronic_signature, expires_in (in days). 
     * Update document settings
     * @param documentId Unique identifier of the document to update settings for.
     * @param updateDocumentSettingsRequest
     */
    public documentSettingsUpdate(documentId: string, updateDocumentSettingsRequest: UpdateDocumentSettingsRequest, _options?: PromiseConfigurationOptions): Promise<DocumentSettingsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.documentSettingsUpdate(documentId, updateDocumentSettingsRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDocumentsApi } from './ObservableAPI';

import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";
export class PromiseDocumentsApi {
    private api: ObservableDocumentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentsApiRequestFactory,
        responseProcessor?: DocumentsApiResponseProcessor
    ) {
        this.api = new ObservableDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Appends a Content Library Item (CLI) to a document and provides a name mapping for its content blocks.
     * Append Content Library Item to a document
     * @param id Specify document id.
     * @param appendCLIDataRequest
     */
    public appendContentLibraryItemToDocumentWithHttpInfo(id: string, appendCLIDataRequest: AppendCLIDataRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AppendCLIDataResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.appendContentLibraryItemToDocumentWithHttpInfo(id, appendCLIDataRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Appends a Content Library Item (CLI) to a document and provides a name mapping for its content blocks.
     * Append Content Library Item to a document
     * @param id Specify document id.
     * @param appendCLIDataRequest
     */
    public appendContentLibraryItemToDocument(id: string, appendCLIDataRequest: AppendCLIDataRequest, _options?: PromiseConfigurationOptions): Promise<AppendCLIDataResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.appendContentLibraryItemToDocument(id, appendCLIDataRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * PandaDoc has eight document statuses, but you can manually set your document status to only four:  ### Document statuses  - Completed - `document.completed` - API code `2` - Expired - `document.voided` - code `11` - Paid - `document.paid` - code `10`. **Important**: You can only set it if you have a payment app connected. - Declined - `document.declined` - code `12`  > 🚧 Pass a numeric code for the corresponding document status, for example, `2` for `document.completed`.  Find more details in [\\[Editor 2.0\\] Manually change document status](https://support.pandadoc.com/en/articles/9714842-manually-change-document-status) topic.  | Current Status | To Completed: | To Expired: | To Paid: | To Declined: | |----------------|---------------|-------------|----------|--------------| | Draft          | YES           | NO          | YES      | YES          | | Approved       | NO            | NO          | NO       | NO           | | Sent           | YES           | YES         | NO       | YES          | | Viewed         | YES           | YES         | NO       | YES          | | Completed (Auto) | NO          | NO          | NO       | YES          | | Waithing for payment | NO      | NO          | YES      | YES          | | Paid           | NO            | NO          | NO       | NO           | | Expired        | YES           | NO          | YES      | YES          | | Declined       | YES           | NO          | YES      | NO           |  > ✅ - from `document.voided` to `document.paid` > > ❌ - from `document.paid` to `document.voided` 
     * Document Status Change
     * @param id Specify document ID.
     * @param documentStatusChangeRequest
     */
    public changeDocumentStatusWithHttpInfo(id: string, documentStatusChangeRequest: DocumentStatusChangeRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.changeDocumentStatusWithHttpInfo(id, documentStatusChangeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * PandaDoc has eight document statuses, but you can manually set your document status to only four:  ### Document statuses  - Completed - `document.completed` - API code `2` - Expired - `document.voided` - code `11` - Paid - `document.paid` - code `10`. **Important**: You can only set it if you have a payment app connected. - Declined - `document.declined` - code `12`  > 🚧 Pass a numeric code for the corresponding document status, for example, `2` for `document.completed`.  Find more details in [\\[Editor 2.0\\] Manually change document status](https://support.pandadoc.com/en/articles/9714842-manually-change-document-status) topic.  | Current Status | To Completed: | To Expired: | To Paid: | To Declined: | |----------------|---------------|-------------|----------|--------------| | Draft          | YES           | NO          | YES      | YES          | | Approved       | NO            | NO          | NO       | NO           | | Sent           | YES           | YES         | NO       | YES          | | Viewed         | YES           | YES         | NO       | YES          | | Completed (Auto) | NO          | NO          | NO       | YES          | | Waithing for payment | NO      | NO          | YES      | YES          | | Paid           | NO            | NO          | NO       | NO           | | Expired        | YES           | NO          | YES      | YES          | | Declined       | YES           | NO          | YES      | NO           |  > ✅ - from `document.voided` to `document.paid` > > ❌ - from `document.paid` to `document.voided` 
     * Document Status Change
     * @param id Specify document ID.
     * @param documentStatusChangeRequest
     */
    public changeDocumentStatus(id: string, documentStatusChangeRequest: DocumentStatusChangeRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.changeDocumentStatus(id, documentStatusChangeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * PandaDoc has eight document statuses, but you can manually set your document status to only four:  ### Document statuses  - Completed - `document.completed` - API code `2` - Expired - `document.voided` - code `11` - Paid - `document.paid` - code `10`. **Important**: You can only set it if you have a payment app connected. - Declined - `document.declined` - code `12`  > 🚧 Pass a numeric code for the corresponding document status, for example, `2` for `document.completed`.  Find more details in [\\[Editor 2.0\\] Manually change document status](https://support.pandadoc.com/en/articles/9714842-manually-change-document-status) topic.  | Current Status | To Completed: | To Expired: | To Paid: | To Declined: | |----------------|---------------|-------------|----------|--------------| | Draft          | YES           | NO          | YES      | YES          | | Approved       | NO            | NO          | NO       | NO           | | Sent           | YES           | YES         | NO       | YES          | | Viewed         | YES           | YES         | NO       | YES          | | Completed (Auto) | NO          | NO          | NO       | YES          | | Waithing for payment | NO      | NO          | YES      | YES          | | Paid           | NO            | NO          | NO       | NO           | | Expired        | YES           | NO          | YES      | YES          | | Declined       | YES           | NO          | YES      | NO           |  > ✅ - from `document.voided` to `document.paid` > > ❌ - from `document.paid` to `document.voided` 
     * Document Status Change with Upload
     * @param id Specify document ID.
     * @param [file] Binary attachment file
     * @param [data] JSON as a multipart/form-data string.
     */
    public changeDocumentStatusWithUploadWithHttpInfo(id: string, file?: HttpFile, data?: DocumentStatusChangeRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.changeDocumentStatusWithUploadWithHttpInfo(id, file, data, observableOptions);
        return result.toPromise();
    }

    /**
     * PandaDoc has eight document statuses, but you can manually set your document status to only four:  ### Document statuses  - Completed - `document.completed` - API code `2` - Expired - `document.voided` - code `11` - Paid - `document.paid` - code `10`. **Important**: You can only set it if you have a payment app connected. - Declined - `document.declined` - code `12`  > 🚧 Pass a numeric code for the corresponding document status, for example, `2` for `document.completed`.  Find more details in [\\[Editor 2.0\\] Manually change document status](https://support.pandadoc.com/en/articles/9714842-manually-change-document-status) topic.  | Current Status | To Completed: | To Expired: | To Paid: | To Declined: | |----------------|---------------|-------------|----------|--------------| | Draft          | YES           | NO          | YES      | YES          | | Approved       | NO            | NO          | NO       | NO           | | Sent           | YES           | YES         | NO       | YES          | | Viewed         | YES           | YES         | NO       | YES          | | Completed (Auto) | NO          | NO          | NO       | YES          | | Waithing for payment | NO      | NO          | YES      | YES          | | Paid           | NO            | NO          | NO       | NO           | | Expired        | YES           | NO          | YES      | YES          | | Declined       | YES           | NO          | YES      | NO           |  > ✅ - from `document.voided` to `document.paid` > > ❌ - from `document.paid` to `document.voided` 
     * Document Status Change with Upload
     * @param id Specify document ID.
     * @param [file] Binary attachment file
     * @param [data] JSON as a multipart/form-data string.
     */
    public changeDocumentStatusWithUpload(id: string, file?: HttpFile, data?: DocumentStatusChangeRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.changeDocumentStatusWithUpload(id, file, data, observableOptions);
        return result.toPromise();
    }

    /**
     * ## Create from a template > See the [Create document from template](https://developers.pandadoc.com/docs/create-document-from-template) tutorial for details on how to use this endpoint, as well as a sample template.  ## Create from a URL > See the [Create from public PDF](https://developers.pandadoc.com/docs/create-and-send-a-document-from-a-publicly-available-pdf) guide for info about roles and fields, as well as PDF examples. 
     * Create Document
     * @param documentCreateRequest
     * @param [editorVer] Set this parameter as &#x60;ev1&#x60; if you want to create a document from PDF with Classic Editor when both editors are enabled for the workspace.
     * @param [useFormFieldProperties] Set this parameter as &#x60;yes&#x60; or &#x60;1&#x60; or &#x60;true&#x60; (only when upload pdf with form fields) if you want to  respect form fields properties, like &#x60;required&#x60;.
     */
    public createDocumentWithHttpInfo(documentCreateRequest: DocumentCreateRequest, editorVer?: string, useFormFieldProperties?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentCreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentWithHttpInfo(documentCreateRequest, editorVer, useFormFieldProperties, observableOptions);
        return result.toPromise();
    }

    /**
     * ## Create from a template > See the [Create document from template](https://developers.pandadoc.com/docs/create-document-from-template) tutorial for details on how to use this endpoint, as well as a sample template.  ## Create from a URL > See the [Create from public PDF](https://developers.pandadoc.com/docs/create-and-send-a-document-from-a-publicly-available-pdf) guide for info about roles and fields, as well as PDF examples. 
     * Create Document
     * @param documentCreateRequest
     * @param [editorVer] Set this parameter as &#x60;ev1&#x60; if you want to create a document from PDF with Classic Editor when both editors are enabled for the workspace.
     * @param [useFormFieldProperties] Set this parameter as &#x60;yes&#x60; or &#x60;1&#x60; or &#x60;true&#x60; (only when upload pdf with form fields) if you want to  respect form fields properties, like &#x60;required&#x60;.
     */
    public createDocument(documentCreateRequest: DocumentCreateRequest, editorVer?: string, useFormFieldProperties?: string, _options?: PromiseConfigurationOptions): Promise<DocumentCreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocument(documentCreateRequest, editorVer, useFormFieldProperties, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new editing session for the Embedded Editor. The response includes an E-Token, which is required to open the document.  > 🚧 **Important:** The Embedded Editor can only open documents that have a `draft` status.  #### Limitations  - **Single Active Session per User-Document Pair**    Only one editing session can be active at a time for a specific user and document. Creating a new session for the same user-document pair will automatically invalidate the previous one.  - **Weekly Session Cap**    A maximum of **250** editing sessions can be created for a single document per week. Any attempt to exceed this limit will result in a `403 Forbidden` error. 
     * Create Document Editing Session 
     * @param id Document ID
     * @param editingSessionRequest
     */
    public createDocumentEditingSessionWithHttpInfo(id: string, editingSessionRequest: EditingSessionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateDocumentEditingSession201Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentEditingSessionWithHttpInfo(id, editingSessionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new editing session for the Embedded Editor. The response includes an E-Token, which is required to open the document.  > 🚧 **Important:** The Embedded Editor can only open documents that have a `draft` status.  #### Limitations  - **Single Active Session per User-Document Pair**    Only one editing session can be active at a time for a specific user and document. Creating a new session for the same user-document pair will automatically invalidate the previous one.  - **Weekly Session Cap**    A maximum of **250** editing sessions can be created for a single document per week. Any attempt to exceed this limit will result in a `403 Forbidden` error. 
     * Create Document Editing Session 
     * @param id Document ID
     * @param editingSessionRequest
     */
    public createDocumentEditingSession(id: string, editingSessionRequest: EditingSessionRequest, _options?: PromiseConfigurationOptions): Promise<CreateDocumentEditingSession201Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentEditingSession(id, editingSessionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * ## Create from an upload > See the [Create from PDF](https://developers.pandadoc.com/docs/create-document-from-file) tutorial for the usage specifics and sample PDF files.  **Note**: A file you upload is not stored in your PandaDoc account, so you have to upload it with every request. 
     * Create Document from File Upload
     * @param [editorVer] Set this parameter as &#x60;ev1&#x60; if you want to create a document from PDF with Classic Editor when both editors are enabled for the workspace.
     * @param [useFormFieldProperties] Set this parameter as &#x60;yes&#x60; or &#x60;1&#x60; or &#x60;true&#x60; (only when upload pdf with form fields) if you want to  respect form fields properties, like &#x60;required&#x60;.
     * @param [file] Binary PDF File
     * @param [data]
     */
    public createDocumentFromUploadWithHttpInfo(editorVer?: string, useFormFieldProperties?: string, file?: HttpFile, data?: DocumentCreateByPdfRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentCreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentFromUploadWithHttpInfo(editorVer, useFormFieldProperties, file, data, observableOptions);
        return result.toPromise();
    }

    /**
     * ## Create from an upload > See the [Create from PDF](https://developers.pandadoc.com/docs/create-document-from-file) tutorial for the usage specifics and sample PDF files.  **Note**: A file you upload is not stored in your PandaDoc account, so you have to upload it with every request. 
     * Create Document from File Upload
     * @param [editorVer] Set this parameter as &#x60;ev1&#x60; if you want to create a document from PDF with Classic Editor when both editors are enabled for the workspace.
     * @param [useFormFieldProperties] Set this parameter as &#x60;yes&#x60; or &#x60;1&#x60; or &#x60;true&#x60; (only when upload pdf with form fields) if you want to  respect form fields properties, like &#x60;required&#x60;.
     * @param [file] Binary PDF File
     * @param [data]
     */
    public createDocumentFromUpload(editorVer?: string, useFormFieldProperties?: string, file?: HttpFile, data?: DocumentCreateByPdfRequest, _options?: PromiseConfigurationOptions): Promise<DocumentCreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentFromUpload(editorVer, useFormFieldProperties, file, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a document session for a recipient to view and sign a document.  > 📘 How to create an Embedded Sign session > For more information on how to create an Embedded Sign session, see the [Embedded Signing](https://developers.pandadoc.com/docs/embedded-signing) documentation. 
     * Create Document Session for Embedded Sign
     * @param id Document ID
     * @param documentCreateLinkRequest
     */
    public createDocumentLinkWithHttpInfo(id: string, documentCreateLinkRequest: DocumentCreateLinkRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentCreateLinkResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentLinkWithHttpInfo(id, documentCreateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a document session for a recipient to view and sign a document.  > 📘 How to create an Embedded Sign session > For more information on how to create an Embedded Sign session, see the [Embedded Signing](https://developers.pandadoc.com/docs/embedded-signing) documentation. 
     * Create Document Session for Embedded Sign
     * @param id Document ID
     * @param documentCreateLinkRequest
     */
    public createDocumentLink(id: string, documentCreateLinkRequest: DocumentCreateLinkRequest, _options?: PromiseConfigurationOptions): Promise<DocumentCreateLinkResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentLink(id, documentCreateLinkRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * > ⏱️ Export as DOCX is a non-blocking (asynchronous) operation > The document generation process may take some time. > With a successful request, you receive a response with task ID, status **created** and document id. After process completes, usually in a few minutes, the task status moves to the **done** state. > You can download documents up to 300 pages. For documents of 301+ pages, you will receive an error “400: The number of pages more then limit 300” 
     * [Beta] Create DOCX Export Task
     * @param documentId Specify document id.
     */
    public createExportDocxTaskWithHttpInfo(documentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentDocxExport>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createExportDocxTaskWithHttpInfo(documentId, observableOptions);
        return result.toPromise();
    }

    /**
     * > ⏱️ Export as DOCX is a non-blocking (asynchronous) operation > The document generation process may take some time. > With a successful request, you receive a response with task ID, status **created** and document id. After process completes, usually in a few minutes, the task status moves to the **done** state. > You can download documents up to 300 pages. For documents of 301+ pages, you will receive an error “400: The number of pages more then limit 300” 
     * [Beta] Create DOCX Export Task
     * @param documentId Specify document id.
     */
    public createExportDocxTask(documentId: string, _options?: PromiseConfigurationOptions): Promise<DocumentDocxExport> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createExportDocxTask(documentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a document by ID. 
     * Delete Document
     * @param id Document ID
     */
    public deleteDocumentWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDocumentWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a document by ID. 
     * Delete Document
     * @param id Document ID
     */
    public deleteDocument(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDocument(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Return detailed data about a document. Use Document Status for getting just a basic info and status.  Get details about a document by its `id`. Details include:  - Basic document information (name, document state, owner, sender, grand total, etc.) - Recipients (completion status, signing order, etc.) - Fields with values (incl. Collect Files field) - Tokens (variables) with values - Pricing information (pricing tables, products, quotes, etc.) - Content block names for table, image, and text blocks (tables, images, texts) - Metadata - Tags - Linked objects - [Approval flow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) (if present) - Timestamps associated with a document. Note that `date_modified` means any changes associated with the recipients and document status, while `content_date_modified` reflects any changes in the document content. 
     * Document Details
     * @param id Document ID
     */
    public detailsDocumentWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsDocumentWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Return detailed data about a document. Use Document Status for getting just a basic info and status.  Get details about a document by its `id`. Details include:  - Basic document information (name, document state, owner, sender, grand total, etc.) - Recipients (completion status, signing order, etc.) - Fields with values (incl. Collect Files field) - Tokens (variables) with values - Pricing information (pricing tables, products, quotes, etc.) - Content block names for table, image, and text blocks (tables, images, texts) - Metadata - Tags - Linked objects - [Approval flow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) (if present) - Timestamps associated with a document. Note that `date_modified` means any changes associated with the recipients and document status, while `content_date_modified` reflects any changes in the document content. 
     * Document Details
     * @param id Document ID
     */
    public detailsDocument(id: string, _options?: PromiseConfigurationOptions): Promise<DocumentDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsDocument(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the current version of eSign disclosure text for a specified document. 
     * Document eSign disclosure
     * @param documentId The UUID of the document.
     */
    public documentESignDisclosureWithHttpInfo(documentId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentESignDisclosure>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.documentESignDisclosureWithHttpInfo(documentId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the current version of eSign disclosure text for a specified document. 
     * Document eSign disclosure
     * @param documentId The UUID of the document.
     */
    public documentESignDisclosure(documentId: string, _options?: PromiseConfigurationOptions): Promise<DocumentESignDisclosure> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.documentESignDisclosure(documentId, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation allows you to move a document to a folder by specifying the document ID and folder ID.
     * Document move to folder
     * @param id Specify document ID.
     * @param folderId Specify folder ID.
     */
    public documentMoveToFolderWithHttpInfo(id: string, folderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.documentMoveToFolderWithHttpInfo(id, folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation allows you to move a document to a folder by specifying the document ID and folder ID.
     * Document move to folder
     * @param id Specify document ID.
     * @param folderId Specify folder ID.
     */
    public documentMoveToFolder(id: string, folderId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.documentMoveToFolder(id, folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Revert your document back to draft to continue editing it.  > 📘 Returning to Draft works for any document status except Removed.  ## After you move your document to the Draft status  - `Signature` and `Initials` fields are cleared. All other fields stay filled in. - Recipients are **not** notified that the document is back in Draft. - You\'ll need to resend the document so that recipients can sign the updated version. 
     * Move Document to Draft
     * @param id Specify document ID.
     */
    public documentRevertToDraftWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentRevertToDraftResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.documentRevertToDraftWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Revert your document back to draft to continue editing it.  > 📘 Returning to Draft works for any document status except Removed.  ## After you move your document to the Draft status  - `Signature` and `Initials` fields are cleared. All other fields stay filled in. - Recipients are **not** notified that the document is back in Draft. - You\'ll need to resend the document so that recipients can sign the updated version. 
     * Move Document to Draft
     * @param id Specify document ID.
     */
    public documentRevertToDraft(id: string, _options?: PromiseConfigurationOptions): Promise<DocumentRevertToDraftResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.documentRevertToDraft(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Download documents as a PDF. 
     * Document Download
     * @param id Specify document ID.
     * @param [watermarkColor] HEX code (for example &#x60;#FF5733&#x60;).
     * @param [watermarkFontSize] Font size of the watermark.
     * @param [watermarkOpacity] In range 0.0-1.0
     * @param [watermarkText] Specify watermark text.
     * @param [separateFiles] Download document bundle as a zip-archive of separate PDFs (1 file per section).
     */
    public downloadDocumentWithHttpInfo(id: string, watermarkColor?: string, watermarkFontSize?: number, watermarkOpacity?: number, watermarkText?: string, separateFiles?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadDocumentWithHttpInfo(id, watermarkColor, watermarkFontSize, watermarkOpacity, watermarkText, separateFiles, observableOptions);
        return result.toPromise();
    }

    /**
     * Download documents as a PDF. 
     * Document Download
     * @param id Specify document ID.
     * @param [watermarkColor] HEX code (for example &#x60;#FF5733&#x60;).
     * @param [watermarkFontSize] Font size of the watermark.
     * @param [watermarkOpacity] In range 0.0-1.0
     * @param [watermarkText] Specify watermark text.
     * @param [separateFiles] Download document bundle as a zip-archive of separate PDFs (1 file per section).
     */
    public downloadDocument(id: string, watermarkColor?: string, watermarkFontSize?: number, watermarkOpacity?: number, watermarkText?: string, separateFiles?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpFile> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadDocument(id, watermarkColor, watermarkFontSize, watermarkOpacity, watermarkText, separateFiles, observableOptions);
        return result.toPromise();
    }

    /**
     * Download a completed document as a verifiable PDF (Download Protected Document) > 🚧 Production key only >  > This endpoint only works with a Production key. You\'ll get a 401 Unauthorized error when trying to use a Sandbox key.  Download a signed PDF of a completed document 
     * Download Completed Document
     * @param id Specify document ID.
     * @param [separateFiles] Download document bundle as a zip-archive of separate PDFs (1 file per section).
     */
    public downloadProtectedDocumentWithHttpInfo(id: string, separateFiles?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadProtectedDocumentWithHttpInfo(id, separateFiles, observableOptions);
        return result.toPromise();
    }

    /**
     * Download a completed document as a verifiable PDF (Download Protected Document) > 🚧 Production key only >  > This endpoint only works with a Production key. You\'ll get a 401 Unauthorized error when trying to use a Sandbox key.  Download a signed PDF of a completed document 
     * Download Completed Document
     * @param id Specify document ID.
     * @param [separateFiles] Download document bundle as a zip-archive of separate PDFs (1 file per section).
     */
    public downloadProtectedDocument(id: string, separateFiles?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpFile> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadProtectedDocument(id, separateFiles, observableOptions);
        return result.toPromise();
    }

    /**
     * > 📘 This endpoint returns the current state of a DOCX export task for a document. > The endpoint supports downloading only multiple files if the document contains several sections. Downloading as a single file in this case is not possible. 
     * [Beta] DOCX Export Task
     * @param documentId Specify document id.
     * @param taskId Specify Task id.
     */
    public getDocxExportTaskWithHttpInfo(documentId: string, taskId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocxExportTaskResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDocxExportTaskWithHttpInfo(documentId, taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * > 📘 This endpoint returns the current state of a DOCX export task for a document. > The endpoint supports downloading only multiple files if the document contains several sections. Downloading as a single file in this case is not possible. 
     * [Beta] DOCX Export Task
     * @param documentId Specify document id.
     * @param taskId Specify Task id.
     */
    public getDocxExportTask(documentId: string, taskId: string, _options?: PromiseConfigurationOptions): Promise<DocxExportTaskResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDocxExportTask(documentId, taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint will let you list and search for the documents. ### [Here](https://developers.pandadoc.com/docs/list-search-documents-api) you can find how to filter, search and order documents. 
     * List Documents
     * @param [templateId] Filters by parent template. This Parameter can\&#39;t be used with form_id.
     * @param [formId] Filters by parent form. This parameter can\&#39;t be used with template_id.
     * @param [folderUuid] Filters by the folder where the documents are stored.
     * @param [contactId] Filters by recipient or approver with this \&#39;contact_id\&#39;.
     * @param [count] Limits the size of the response. Default is 50 documents, maximum is 100 documents.
     * @param [page] Paginates the search result. Increase value to get the next page of results.
     * @param [orderBy] Defines the sorting of the result. Use &#x60;date_created&#x60; for ASC and &#x60;-date_created&#x60; for DESC sorting.
     * @param [createdFrom] Limits results to the documents with the &#x60;date_created&#x60; greater than or equal to this value.
     * @param [createdTo] Limits results to the documents with the &#x60;date_created&#x60; less than this value.
     * @param [deleted] Returns only the deleted documents.
     * @param [id]
     * @param [completedFrom] Limits results to the documents with the &#x60;date_completed&#x60; greater than or equal to this value.
     * @param [completedTo] Limits results to the documents with the &#x60;date_completed&#x60; less than this value.
     * @param [membershipId] Filter documents by the owner\&#39;s \&#39;membership_id\&#39;.
     * @param [metadata] Filters documents by metadata. Pass metadata in the format of &#x60;metadata_{metadata-key}&#x3D;{metadata-value}&#x60; such as &#x60;metadata_opportunity_id&#x3D;2181432&#x60;. The &#x60;metadata_&#x60; prefix is always required.
     * @param [modifiedFrom] Limits results to the documents with the &#x60;date_modified&#x60; greater than or equal to this value.
     * @param [modifiedTo] Limits results to the documents with the &#x60;date_modified&#x60; less than this value.
     * @param [q] Filters documents by name or reference number (stored on the template level).
     * @param [status] Filters documents by the status.   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined   * 13: document.external_review 
     * @param [statusNe] Exludes documents with this status.   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined   * 13: document.external_review 
     * @param [tag] Filters documents by tag.
     */
    public listDocumentsWithHttpInfo(templateId?: string, formId?: string, folderUuid?: string, contactId?: string, count?: number, page?: number, orderBy?: DocumentOrderingFieldsEnum, createdFrom?: string, createdTo?: string, deleted?: boolean, id?: string, completedFrom?: string, completedTo?: string, membershipId?: string, metadata?: Array<string>, modifiedFrom?: string, modifiedTo?: string, q?: string, status?: DocumentStatusRequestEnum, statusNe?: DocumentStatusRequestEnum, tag?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocumentsWithHttpInfo(templateId, formId, folderUuid, contactId, count, page, orderBy, createdFrom, createdTo, deleted, id, completedFrom, completedTo, membershipId, metadata, modifiedFrom, modifiedTo, q, status, statusNe, tag, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint will let you list and search for the documents. ### [Here](https://developers.pandadoc.com/docs/list-search-documents-api) you can find how to filter, search and order documents. 
     * List Documents
     * @param [templateId] Filters by parent template. This Parameter can\&#39;t be used with form_id.
     * @param [formId] Filters by parent form. This parameter can\&#39;t be used with template_id.
     * @param [folderUuid] Filters by the folder where the documents are stored.
     * @param [contactId] Filters by recipient or approver with this \&#39;contact_id\&#39;.
     * @param [count] Limits the size of the response. Default is 50 documents, maximum is 100 documents.
     * @param [page] Paginates the search result. Increase value to get the next page of results.
     * @param [orderBy] Defines the sorting of the result. Use &#x60;date_created&#x60; for ASC and &#x60;-date_created&#x60; for DESC sorting.
     * @param [createdFrom] Limits results to the documents with the &#x60;date_created&#x60; greater than or equal to this value.
     * @param [createdTo] Limits results to the documents with the &#x60;date_created&#x60; less than this value.
     * @param [deleted] Returns only the deleted documents.
     * @param [id]
     * @param [completedFrom] Limits results to the documents with the &#x60;date_completed&#x60; greater than or equal to this value.
     * @param [completedTo] Limits results to the documents with the &#x60;date_completed&#x60; less than this value.
     * @param [membershipId] Filter documents by the owner\&#39;s \&#39;membership_id\&#39;.
     * @param [metadata] Filters documents by metadata. Pass metadata in the format of &#x60;metadata_{metadata-key}&#x3D;{metadata-value}&#x60; such as &#x60;metadata_opportunity_id&#x3D;2181432&#x60;. The &#x60;metadata_&#x60; prefix is always required.
     * @param [modifiedFrom] Limits results to the documents with the &#x60;date_modified&#x60; greater than or equal to this value.
     * @param [modifiedTo] Limits results to the documents with the &#x60;date_modified&#x60; less than this value.
     * @param [q] Filters documents by name or reference number (stored on the template level).
     * @param [status] Filters documents by the status.   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined   * 13: document.external_review 
     * @param [statusNe] Exludes documents with this status.   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined   * 13: document.external_review 
     * @param [tag] Filters documents by tag.
     */
    public listDocuments(templateId?: string, formId?: string, folderUuid?: string, contactId?: string, count?: number, page?: number, orderBy?: DocumentOrderingFieldsEnum, createdFrom?: string, createdTo?: string, deleted?: boolean, id?: string, completedFrom?: string, completedTo?: string, membershipId?: string, metadata?: Array<string>, modifiedFrom?: string, modifiedTo?: string, q?: string, status?: DocumentStatusRequestEnum, statusNe?: DocumentStatusRequestEnum, tag?: string, _options?: PromiseConfigurationOptions): Promise<DocumentListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocuments(templateId, formId, folderUuid, contactId, count, page, orderBy, createdFrom, createdTo, deleted, id, completedFrom, completedTo, membershipId, metadata, modifiedFrom, modifiedTo, q, status, statusNe, tag, observableOptions);
        return result.toPromise();
    }

    /**
     * > 🚧 Using the Sandbox Key >  > When you use a [sandbox API key](https://developers.pandadoc.com/reference/sandbox-key) during the free trial period, the sender and recipient email addresses must be from the same organisation (email domain).  ## Document State  - You can only send a document in the `document.draft` status. - After creating a new document, it usually retains a `document.uploaded` status for 3-5 seconds while the document syncs across PandaDoc servers. When the document is available for further API calls, it moves to the `document.draft` state. Use [Document Status](/reference/document-status) or [Webhooks](/reference/on-document-status-change) to check document status. - Moving a document to the `document.sent` status finalizes the document structure, before recipients can complete it. - If a template used for the document creation has an approval workflow turned on, the sent document moves to the `document.waiting_approval` status. Once the document is approved, you need to make the call again to move the document to `document.sent` status.  ## Send and Silence Notifications  - By default, PandaDoc sends a notification email to the recipient, as well as notifications the sender has configured. You may disable all notifications for recipients by passing `silent: true`. This is useful when you are using alternative delivery methods such as linking to the document or embedding the document. - The `silent: true` parameter disables sent, viewed, comment and completed document email notifications. \"Document Approval\" notification won\'t be affected by this parameter. - If you pass `silent: false`, the document is going to be delivered by email and/or SMS.   ![Example email. Branding can be changed in workspace settings](https://files.readme.io/cc5a03e-email2.png)  ## Select Approver from Group  If you have previously set up an approval workflow with selectable groups on the UI, you can select a particular approver from this group. Learn more about [selectable groups](https://support.pandadoc.com/en/articles/9714799-approval-workflow#h_01H4GNY5GSGG38BPYY46XV7GB4).   To set an approver, we recommend to follow these steps:  1. Run the [Document Details](https://developers.pandadoc.com/reference/document-details) request. 2. Copy the `steps` part from the `approval_execution` section of the response into the `selected_approvers` field of the Send Document payload. 3. Modify your payload according to business needs: set `is_selected` to true for one approver.  > 📘 **Note**: You can change the selected approver only if you revert your document back to the `document.draft` status. 
     * Send Document
     * @param id Document ID
     * @param documentSendRequest
     */
    public sendDocumentWithHttpInfo(id: string, documentSendRequest: DocumentSendRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentSendResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendDocumentWithHttpInfo(id, documentSendRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * > 🚧 Using the Sandbox Key >  > When you use a [sandbox API key](https://developers.pandadoc.com/reference/sandbox-key) during the free trial period, the sender and recipient email addresses must be from the same organisation (email domain).  ## Document State  - You can only send a document in the `document.draft` status. - After creating a new document, it usually retains a `document.uploaded` status for 3-5 seconds while the document syncs across PandaDoc servers. When the document is available for further API calls, it moves to the `document.draft` state. Use [Document Status](/reference/document-status) or [Webhooks](/reference/on-document-status-change) to check document status. - Moving a document to the `document.sent` status finalizes the document structure, before recipients can complete it. - If a template used for the document creation has an approval workflow turned on, the sent document moves to the `document.waiting_approval` status. Once the document is approved, you need to make the call again to move the document to `document.sent` status.  ## Send and Silence Notifications  - By default, PandaDoc sends a notification email to the recipient, as well as notifications the sender has configured. You may disable all notifications for recipients by passing `silent: true`. This is useful when you are using alternative delivery methods such as linking to the document or embedding the document. - The `silent: true` parameter disables sent, viewed, comment and completed document email notifications. \"Document Approval\" notification won\'t be affected by this parameter. - If you pass `silent: false`, the document is going to be delivered by email and/or SMS.   ![Example email. Branding can be changed in workspace settings](https://files.readme.io/cc5a03e-email2.png)  ## Select Approver from Group  If you have previously set up an approval workflow with selectable groups on the UI, you can select a particular approver from this group. Learn more about [selectable groups](https://support.pandadoc.com/en/articles/9714799-approval-workflow#h_01H4GNY5GSGG38BPYY46XV7GB4).   To set an approver, we recommend to follow these steps:  1. Run the [Document Details](https://developers.pandadoc.com/reference/document-details) request. 2. Copy the `steps` part from the `approval_execution` section of the response into the `selected_approvers` field of the Send Document payload. 3. Modify your payload according to business needs: set `is_selected` to true for one approver.  > 📘 **Note**: You can change the selected approver only if you revert your document back to the `document.draft` status. 
     * Send Document
     * @param id Document ID
     * @param documentSendRequest
     */
    public sendDocument(id: string, documentSendRequest: DocumentSendRequest, _options?: PromiseConfigurationOptions): Promise<DocumentSendResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.sendDocument(id, documentSendRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * It is useful to request document status to ensure a document is in the expected state before calling additional API methods.   ### Required Document Statuses  Here are some common methods and the `document.status` required to proceed:  | API Method           | Required Document State | | :------------------- | :---------------------- | | Send A Document      | `document.draft`        | | Get Document Details | `document.draft`        | | Embed A Document     | `document.sent`         | | Download A Document  | `document.completed`    |  > 📘 Polling vs Webhooks >  > If you are using the `GET` document status endpoint for [**polling**](https://en.wikipedia.org/wiki/Polling_(computer_science)), we also support and recommend using **webhooks** for event-driven needs: <https://developers.pandadoc.com/docs/listen-document-status-changes#/>  ### Available Document Statuses  The following is a complete list of all possible document statuses returned:  | Document Status             | Status Description                                                                                                                                                                                                               | | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | `document.uploaded`         | The document has just been created or uploaded. It is in processing and will be in `document.draft` state soon.                                                                                                           | | `document.error`            | The document creation has failed. This status is terminal, you should stop polling after getting it. | `document.draft`            | The document is in a draft state. All aspects of the document can be edited in this state. Our API does not support edits after the document has been created, but it can still be edited manually on <https://app.pandadoc.com> | | `document.sent`             | The document has been \"sealed\" and optionally sent. No further document edits can occur except for document recipient(s) filling out or signing the document.                                                                    | | `document.viewed`           | Document recipient(s) have viewed the sent document.                                                                                                                                                                             | | `document.waiting_approval` | The document has an [automatic approval workflow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) and has not yet been approved.                                                      | | `document.rejected`         | The document has an [automatic approval workflow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) and was rejected.                                                                   | | `document.approved`         | The document has an [automatic approval workflow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) and was approved.                                                                   | | `document.waiting_pay`      | The document has a [Stripe payment](https://support.pandadoc.com/en/articles/9714942-stripe-checkout-payments) option and is awaiting payment.                                                                              | | `document.paid`             | The document has a [Stripe payment](https://support.pandadoc.com/en/articles/9714942-stripe-checkout-payments) option and was paid.                                                                                         | | `document.completed`        | The document has been completed by all recipients.                                                                                                                                                                               | | `document.voided`           | The document expired and is no longer available for completion or signature.                                                                                                                                                     | | `document.declined`         | The document was [manually marked](https://support.pandadoc.com/en/articles/9714842-manually-change-document-status) as \"Declined\"                                                                                    | | `document.external_review`  | The document is reviewed by it\'s recipient using Suggest Edit feature                                                                                                                                                            | 
     * Document Status
     * @param id Specify document ID.
     */
    public statusDocumentWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.statusDocumentWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * It is useful to request document status to ensure a document is in the expected state before calling additional API methods.   ### Required Document Statuses  Here are some common methods and the `document.status` required to proceed:  | API Method           | Required Document State | | :------------------- | :---------------------- | | Send A Document      | `document.draft`        | | Get Document Details | `document.draft`        | | Embed A Document     | `document.sent`         | | Download A Document  | `document.completed`    |  > 📘 Polling vs Webhooks >  > If you are using the `GET` document status endpoint for [**polling**](https://en.wikipedia.org/wiki/Polling_(computer_science)), we also support and recommend using **webhooks** for event-driven needs: <https://developers.pandadoc.com/docs/listen-document-status-changes#/>  ### Available Document Statuses  The following is a complete list of all possible document statuses returned:  | Document Status             | Status Description                                                                                                                                                                                                               | | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | `document.uploaded`         | The document has just been created or uploaded. It is in processing and will be in `document.draft` state soon.                                                                                                           | | `document.error`            | The document creation has failed. This status is terminal, you should stop polling after getting it. | `document.draft`            | The document is in a draft state. All aspects of the document can be edited in this state. Our API does not support edits after the document has been created, but it can still be edited manually on <https://app.pandadoc.com> | | `document.sent`             | The document has been \"sealed\" and optionally sent. No further document edits can occur except for document recipient(s) filling out or signing the document.                                                                    | | `document.viewed`           | Document recipient(s) have viewed the sent document.                                                                                                                                                                             | | `document.waiting_approval` | The document has an [automatic approval workflow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) and has not yet been approved.                                                      | | `document.rejected`         | The document has an [automatic approval workflow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) and was rejected.                                                                   | | `document.approved`         | The document has an [automatic approval workflow](https://support.pandadoc.com/en/articles/9714799-approval-workflow) and was approved.                                                                   | | `document.waiting_pay`      | The document has a [Stripe payment](https://support.pandadoc.com/en/articles/9714942-stripe-checkout-payments) option and is awaiting payment.                                                                              | | `document.paid`             | The document has a [Stripe payment](https://support.pandadoc.com/en/articles/9714942-stripe-checkout-payments) option and was paid.                                                                                         | | `document.completed`        | The document has been completed by all recipients.                                                                                                                                                                               | | `document.voided`           | The document expired and is no longer available for completion or signature.                                                                                                                                                     | | `document.declined`         | The document was [manually marked](https://support.pandadoc.com/en/articles/9714842-manually-change-document-status) as \"Declined\"                                                                                    | | `document.external_review`  | The document is reviewed by it\'s recipient using Suggest Edit feature                                                                                                                                                            | 
     * Document Status
     * @param id Specify document ID.
     */
    public statusDocument(id: string, _options?: PromiseConfigurationOptions): Promise<DocumentStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.statusDocument(id, observableOptions);
        return result.toPromise();
    }

    /**
     * This method transfers ownership of all documents from one member to another. 
     * Transfer all documents ownership
     * @param documentTransferAllOwnershipRequest
     */
    public transferAllDocumentsOwnershipWithHttpInfo(documentTransferAllOwnershipRequest: DocumentTransferAllOwnershipRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.transferAllDocumentsOwnershipWithHttpInfo(documentTransferAllOwnershipRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This method transfers ownership of all documents from one member to another. 
     * Transfer all documents ownership
     * @param documentTransferAllOwnershipRequest
     */
    public transferAllDocumentsOwnership(documentTransferAllOwnershipRequest: DocumentTransferAllOwnershipRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.transferAllDocumentsOwnership(documentTransferAllOwnershipRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation allows transferring the ownership of a document to another user by specifying the document ID and membership ID.
     * Update document ownership
     * @param id Specify document ID.
     * @param documentTransferOwnershipRequest
     */
    public transferDocumentOwnershipWithHttpInfo(id: string, documentTransferOwnershipRequest: DocumentTransferOwnershipRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.transferDocumentOwnershipWithHttpInfo(id, documentTransferOwnershipRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation allows transferring the ownership of a document to another user by specifying the document ID and membership ID.
     * Update document ownership
     * @param id Specify document ID.
     * @param documentTransferOwnershipRequest
     */
    public transferDocumentOwnership(id: string, documentTransferOwnershipRequest: DocumentTransferOwnershipRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.transferDocumentOwnership(id, documentTransferOwnershipRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Use the PATCH method to update a PandaDoc document.  > 🚧 Document status >  > You can only update a document in the Draft status (`document.draft`).  >  > After creating a new document, it usually retains a `document.uploaded` status for 3-5 seconds while the document syncs across PandaDoc servers. When the document is available for further API calls, the document moves to the `document.draft` state. Use [Document Status](https://developers.pandadoc.com/reference/document-status) or Webhooks to check document status. 
     * Update Document
     * @param id Document ID
     * @param documentUpdateRequest
     */
    public updateDocumentWithHttpInfo(id: string, documentUpdateRequest: DocumentUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDocumentWithHttpInfo(id, documentUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Use the PATCH method to update a PandaDoc document.  > 🚧 Document status >  > You can only update a document in the Draft status (`document.draft`).  >  > After creating a new document, it usually retains a `document.uploaded` status for 3-5 seconds while the document syncs across PandaDoc servers. When the document is available for further API calls, the document moves to the `document.draft` state. Use [Document Status](https://developers.pandadoc.com/reference/document-status) or Webhooks to check document status. 
     * Update Document
     * @param id Document ID
     * @param documentUpdateRequest
     */
    public updateDocument(id: string, documentUpdateRequest: DocumentUpdateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDocument(id, documentUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFoldersApi } from './ObservableAPI';

import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";
export class PromiseFoldersApi {
    private api: ObservableFoldersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FoldersApiRequestFactory,
        responseProcessor?: FoldersApiResponseProcessor
    ) {
        this.api = new ObservableFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new folder to store your documents.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Create Documents Folder
     * @param documentsFolderCreateRequest
     */
    public createDocumentFolderWithHttpInfo(documentsFolderCreateRequest: DocumentsFolderCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentsFolderCreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentFolderWithHttpInfo(documentsFolderCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new folder to store your documents.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Create Documents Folder
     * @param documentsFolderCreateRequest
     */
    public createDocumentFolder(documentsFolderCreateRequest: DocumentsFolderCreateRequest, _options?: PromiseConfigurationOptions): Promise<DocumentsFolderCreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDocumentFolder(documentsFolderCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new folder to store your templates.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Create Templates Folder
     * @param templatesFolderCreateRequest
     */
    public createTemplateFolderWithHttpInfo(templatesFolderCreateRequest: TemplatesFolderCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatesFolderCreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplateFolderWithHttpInfo(templatesFolderCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new folder to store your templates.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Create Templates Folder
     * @param templatesFolderCreateRequest
     */
    public createTemplateFolder(templatesFolderCreateRequest: TemplatesFolderCreateRequest, _options?: PromiseConfigurationOptions): Promise<TemplatesFolderCreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplateFolder(templatesFolderCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of folders which contain Documents in your account.  > 📘  >  > The root folder is not listed in the response.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * List Documents Folders
     * @param [parentUuid] The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request.
     * @param [count] Optionally, specify how many folders to return.
     * @param [page] Optionally, specify which page of the dataset to return.
     */
    public listDocumentFoldersWithHttpInfo(parentUuid?: string, count?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentsFolderListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocumentFoldersWithHttpInfo(parentUuid, count, page, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of folders which contain Documents in your account.  > 📘  >  > The root folder is not listed in the response.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * List Documents Folders
     * @param [parentUuid] The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request.
     * @param [count] Optionally, specify how many folders to return.
     * @param [page] Optionally, specify which page of the dataset to return.
     */
    public listDocumentFolders(parentUuid?: string, count?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<DocumentsFolderListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listDocumentFolders(parentUuid, count, page, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of folders that contain Templates in your account.  > 📘  >  > The root folder is not listed in the response.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * List Templates Folders
     * @param [parentUuid] The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request.
     * @param [count] Optionally, specify how many folders to return.
     * @param [page] Optionally, specify which page of the dataset to return.
     */
    public listTemplateFoldersWithHttpInfo(parentUuid?: string, count?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatesFolderListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplateFoldersWithHttpInfo(parentUuid, count, page, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of folders that contain Templates in your account.  > 📘  >  > The root folder is not listed in the response.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * List Templates Folders
     * @param [parentUuid] The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request.
     * @param [count] Optionally, specify how many folders to return.
     * @param [page] Optionally, specify which page of the dataset to return.
     */
    public listTemplateFolders(parentUuid?: string, count?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<TemplatesFolderListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplateFolders(parentUuid, count, page, observableOptions);
        return result.toPromise();
    }

    /**
     * Rename Documents Folder.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Rename Documents Folder
     * @param id The UUID of the folder that you are renaming.
     * @param documentsFolderRenameRequest
     */
    public renameDocumentFolderWithHttpInfo(id: string, documentsFolderRenameRequest: DocumentsFolderRenameRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DocumentsFolderRenameResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameDocumentFolderWithHttpInfo(id, documentsFolderRenameRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Rename Documents Folder.  For the full list of folder operations and their limitations, see [Organize Documents and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Rename Documents Folder
     * @param id The UUID of the folder that you are renaming.
     * @param documentsFolderRenameRequest
     */
    public renameDocumentFolder(id: string, documentsFolderRenameRequest: DocumentsFolderRenameRequest, _options?: PromiseConfigurationOptions): Promise<DocumentsFolderRenameResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameDocumentFolder(id, documentsFolderRenameRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Rename a templates folder.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Rename Templates Folder
     * @param id The UUID of the folder which you are renaming.
     * @param templatesFolderRenameRequest
     */
    public renameTemplateFolderWithHttpInfo(id: string, templatesFolderRenameRequest: TemplatesFolderRenameRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplatesFolderRenameResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameTemplateFolderWithHttpInfo(id, templatesFolderRenameRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Rename a templates folder.  For the full list of folder operations and their limitations, see [Organize Templates and Folders](https://developers.pandadoc.com/docs/organize-folders). 
     * Rename Templates Folder
     * @param id The UUID of the folder which you are renaming.
     * @param templatesFolderRenameRequest
     */
    public renameTemplateFolder(id: string, templatesFolderRenameRequest: TemplatesFolderRenameRequest, _options?: PromiseConfigurationOptions): Promise<TemplatesFolderRenameResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.renameTemplateFolder(id, templatesFolderRenameRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFormsApi } from './ObservableAPI';

import { FormsApiRequestFactory, FormsApiResponseProcessor} from "../apis/FormsApi";
export class PromiseFormsApi {
    private api: ObservableFormsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FormsApiRequestFactory,
        responseProcessor?: FormsApiResponseProcessor
    ) {
        this.api = new ObservableFormsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a paginated list of forms with optional filtering and sorting options.
     * List Forms
     * @param [count] Specify how many forms to return. Default is 50 forms, maximum is 100 forms.
     * @param [page] Specify which page of the dataset to return.
     * @param [status] Specify which status of the forms dataset to return.
     * @param [orderBy] Specify the form dataset order to return.
     * @param [asc] Specify sorting the result-set in ascending or descending order.
     * @param [name] Specify the form name.
     */
    public listFormWithHttpInfo(count?: number, page?: number, status?: Array<'draft' | 'active' | 'disabled'>, orderBy?: 'name' | 'responses' | 'status' | 'created_date' | 'modified_date', asc?: boolean, name?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FormListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listFormWithHttpInfo(count, page, status, orderBy, asc, name, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a paginated list of forms with optional filtering and sorting options.
     * List Forms
     * @param [count] Specify how many forms to return. Default is 50 forms, maximum is 100 forms.
     * @param [page] Specify which page of the dataset to return.
     * @param [status] Specify which status of the forms dataset to return.
     * @param [orderBy] Specify the form dataset order to return.
     * @param [asc] Specify sorting the result-set in ascending or descending order.
     * @param [name] Specify the form name.
     */
    public listForm(count?: number, page?: number, status?: Array<'draft' | 'active' | 'disabled'>, orderBy?: 'name' | 'responses' | 'status' | 'created_date' | 'modified_date', asc?: boolean, name?: string, _options?: PromiseConfigurationOptions): Promise<FormListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listForm(count, page, status, orderBy, asc, name, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMembersApi } from './ObservableAPI';

import { MembersApiRequestFactory, MembersApiResponseProcessor} from "../apis/MembersApi";
export class PromiseMembersApi {
    private api: ObservableMembersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MembersApiRequestFactory,
        responseProcessor?: MembersApiResponseProcessor
    ) {
        this.api = new ObservableMembersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * > 🚧  >  > This endpoint is only exposed upon request. Please reach out to your Account Manager to get access.  > 📘  >  > Make sure you\'re using Public API keys generated by Org Admin, otherwise you\'ll receive a 403 response. 
     * Create Member Token
     * @param memberId Member id.
     * @param [createMemberTokenRequest]
     */
    public createMemberTokenWithHttpInfo(memberId: string, createMemberTokenRequest?: CreateMemberTokenRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateMemberTokenResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createMemberTokenWithHttpInfo(memberId, createMemberTokenRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * > 🚧  >  > This endpoint is only exposed upon request. Please reach out to your Account Manager to get access.  > 📘  >  > Make sure you\'re using Public API keys generated by Org Admin, otherwise you\'ll receive a 403 response. 
     * Create Member Token
     * @param memberId Member id.
     * @param [createMemberTokenRequest]
     */
    public createMemberToken(memberId: string, createMemberTokenRequest?: CreateMemberTokenRequest, _options?: PromiseConfigurationOptions): Promise<CreateMemberTokenResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createMemberToken(memberId, createMemberTokenRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the member details of the current user (the owner of the API key).  **User** - is an account with a license in the Organization.   **Member** - is a User with a predefined Role in the Workspace.  | Parameter | Description | |---|---| | `user_id` | A unique identifier of the `user` in the **organization** | | `membership_id` | A unique identifier of the `user` in the **workspace** | | `email` | A user email address | | `first_name` | A user\'s first name | | `last_name` | A user\'s last name | | `is_active` | A boolean value that identifies if a member is active and not blocked | | `workspace` | A unique identifier of the user\'s current active workspace | | `workspace_name` | A name of the user\'s current active workspace | | `email_verified` | A boolean value that identifies if the email is verified | | `role` | A member\'s role in the workspace | | `user_license` | A user license in the organization:  <br/>`Full (Standard)`;  <br/>`Read-only`;  <br/>`eSignature`;  <br/>`Guest`;  <br/>`Creator` | | `date_created` | A date when a member was added to the workspace | | `date_modified` | Last modified date of a member | 
     * Current Member Details
     */
    public detailsCurrentMemberWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<MemberDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsCurrentMemberWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the member details of the current user (the owner of the API key).  **User** - is an account with a license in the Organization.   **Member** - is a User with a predefined Role in the Workspace.  | Parameter | Description | |---|---| | `user_id` | A unique identifier of the `user` in the **organization** | | `membership_id` | A unique identifier of the `user` in the **workspace** | | `email` | A user email address | | `first_name` | A user\'s first name | | `last_name` | A user\'s last name | | `is_active` | A boolean value that identifies if a member is active and not blocked | | `workspace` | A unique identifier of the user\'s current active workspace | | `workspace_name` | A name of the user\'s current active workspace | | `email_verified` | A boolean value that identifies if the email is verified | | `role` | A member\'s role in the workspace | | `user_license` | A user license in the organization:  <br/>`Full (Standard)`;  <br/>`Read-only`;  <br/>`eSignature`;  <br/>`Guest`;  <br/>`Creator` | | `date_created` | A date when a member was added to the workspace | | `date_modified` | Last modified date of a member | 
     * Current Member Details
     */
    public detailsCurrentMember(_options?: PromiseConfigurationOptions): Promise<MemberDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsCurrentMember(observableOptions);
        return result.toPromise();
    }

    /**
     * A method to retrieve a member\'s details by ID.  **User** - is an account with a license in the Organization.   **Member** - is a User with a predefined Role in the Workspace.  | Parameter | Description | |---|---| | `user_id` | A unique identifier of the `user` in the **organization** | | `membership_id` | A unique identifier of the `user` in the **workspace** | | `email` | A user email address | | `first_name` | A user\'s first name | | `last_name` | A user\'s last name | | `is_active` | A boolean value that identifies if a member is active and not blocked | | `workspace` | A unique identifier of the user\'s current active workspace | | `workspace_name` | A name of the user\'s current active workspace | | `email_verified` | A boolean value that identifies if the email is verified | | `role` | A member\'s role in the workspace | | `user_license` | A user license in the organization:  <br/>`Full (Standard)`;  <br/>`Read-only`;  <br/>`eSignature`;  <br/>`Guest`;  <br/>`Creator` | | `date_created` | A date when a member was added to the workspace | | `date_modified` | Last modified date of a member | 
     * Member Details
     * @param id Membership id.
     */
    public detailsMemberWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MemberDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsMemberWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * A method to retrieve a member\'s details by ID.  **User** - is an account with a license in the Organization.   **Member** - is a User with a predefined Role in the Workspace.  | Parameter | Description | |---|---| | `user_id` | A unique identifier of the `user` in the **organization** | | `membership_id` | A unique identifier of the `user` in the **workspace** | | `email` | A user email address | | `first_name` | A user\'s first name | | `last_name` | A user\'s last name | | `is_active` | A boolean value that identifies if a member is active and not blocked | | `workspace` | A unique identifier of the user\'s current active workspace | | `workspace_name` | A name of the user\'s current active workspace | | `email_verified` | A boolean value that identifies if the email is verified | | `role` | A member\'s role in the workspace | | `user_license` | A user license in the organization:  <br/>`Full (Standard)`;  <br/>`Read-only`;  <br/>`eSignature`;  <br/>`Guest`;  <br/>`Creator` | | `date_created` | A date when a member was added to the workspace | | `date_modified` | Last modified date of a member | 
     * Member Details
     * @param id Membership id.
     */
    public detailsMember(id: string, _options?: PromiseConfigurationOptions): Promise<MemberDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsMember(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all members details of the workspace implied by the OAuth token or API key.\\ For each member, the `workspace` parameter shows their active workspace, that is the workspace they are currently working in.\\ This means the `workspace` value can differ from the workspace implied by your API key. 
     * List Members
     */
    public listMembersWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<MemberListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listMembersWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all members details of the workspace implied by the OAuth token or API key.\\ For each member, the `workspace` parameter shows their active workspace, that is the workspace they are currently working in.\\ This means the `workspace` value can differ from the workspace implied by your API key. 
     * List Members
     */
    public listMembers(_options?: PromiseConfigurationOptions): Promise<MemberListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listMembers(observableOptions);
        return result.toPromise();
    }


}



import { ObservableNotaryApi } from './ObservableAPI';

import { NotaryApiRequestFactory, NotaryApiResponseProcessor} from "../apis/NotaryApi";
export class PromiseNotaryApi {
    private api: ObservableNotaryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NotaryApiRequestFactory,
        responseProcessor?: NotaryApiResponseProcessor
    ) {
        this.api = new ObservableNotaryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a notarization request to connect with a notary and complete online notarizations for your signers within minutes.  > 🚧 **Important:** This endpoint supports only documents in draft status.  ## Prerequisites  > 🚧 Before you start >  > Ensure the following before creating a notarization request: >  > - Install the Notary On-Demand or Notary add-on > - Create a document for notarization and get its `document_id`. To create a document, use the [Create Document from Template](https://developers.pandadoc.com/reference/create-document-from-pandadoc-template) or [Create Document from File Upload](https://developers.pandadoc.com/reference/create-document-from-pdf) endpoint.  ## Request Details  For the notarization request, include in the request body:  - `document_id` - At least one `invitees`, specifying their `email`, `first_name`, and `last_name` - Optionally, include a `message` for your signers - Optionally, using `disable_invitees_notifications` you can disable all notifications for invitees including email with invitation for notarization. This is useful when you are using alternative delivery methods. - If in-house notary must be assigned to this request, include the `notary` object with the notary\'s `id`, `scheduled_at` timestamp, and an optional `message` for the notary  After the API call is executed, your signers will receive an email invitation for notarization. Alternatively, you can directly share the `notarization_link` with your signers, which is available in the 201 response body.  Upon successful notarization, you will receive an email with a link to the notarized document.  ## Usage Tips  > 📘 Best Practices >  > - Ensure that signers are added as both invitees in the request body and recipients in the document to avoid inconveniences during notary sessions > - Signers will receive an email with a notary link upon a successful API call; this link is also in the 201 response > - In case if notary is not specified in the request, signers will use the link to connect with commissioned online notaries, available Mon-Fri, 9 AM - 9 PM Central Time, typically responding within 2 minutes > - If notary is specified, signers will use the link to connect with your in-house notary at the scheduled time  ## Limits  A maximum of 100 API calls per minute is permitted. Exceeding this limit triggers a 429 Too Many Requests error.  ## Troubleshooting  **Solutions for 4xx Response Codes:**  - **403 Forbidden (Inactive Add-on)**: Ensure the Notary On-Demand or Notary add-on is installed - **403 Forbidden (Transactions Limit)**: Purchase additional transactions either through the Notary UI or by contacting the Sales team - **429 Too Many Requests**: If you hit the limit, hold your API calls, then send them after waiting for the retry time  > 📘 To learn more about PandaDoc Notary On-Demand, visit our [website](https://notary.pandadoc.com/notary-on-demand/). 
     * Create Notarization Request
     * @param createNotarizationRequest
     */
    public createNotarizationRequestWithHttpInfo(createNotarizationRequest: CreateNotarizationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateNotarizationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNotarizationRequestWithHttpInfo(createNotarizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a notarization request to connect with a notary and complete online notarizations for your signers within minutes.  > 🚧 **Important:** This endpoint supports only documents in draft status.  ## Prerequisites  > 🚧 Before you start >  > Ensure the following before creating a notarization request: >  > - Install the Notary On-Demand or Notary add-on > - Create a document for notarization and get its `document_id`. To create a document, use the [Create Document from Template](https://developers.pandadoc.com/reference/create-document-from-pandadoc-template) or [Create Document from File Upload](https://developers.pandadoc.com/reference/create-document-from-pdf) endpoint.  ## Request Details  For the notarization request, include in the request body:  - `document_id` - At least one `invitees`, specifying their `email`, `first_name`, and `last_name` - Optionally, include a `message` for your signers - Optionally, using `disable_invitees_notifications` you can disable all notifications for invitees including email with invitation for notarization. This is useful when you are using alternative delivery methods. - If in-house notary must be assigned to this request, include the `notary` object with the notary\'s `id`, `scheduled_at` timestamp, and an optional `message` for the notary  After the API call is executed, your signers will receive an email invitation for notarization. Alternatively, you can directly share the `notarization_link` with your signers, which is available in the 201 response body.  Upon successful notarization, you will receive an email with a link to the notarized document.  ## Usage Tips  > 📘 Best Practices >  > - Ensure that signers are added as both invitees in the request body and recipients in the document to avoid inconveniences during notary sessions > - Signers will receive an email with a notary link upon a successful API call; this link is also in the 201 response > - In case if notary is not specified in the request, signers will use the link to connect with commissioned online notaries, available Mon-Fri, 9 AM - 9 PM Central Time, typically responding within 2 minutes > - If notary is specified, signers will use the link to connect with your in-house notary at the scheduled time  ## Limits  A maximum of 100 API calls per minute is permitted. Exceeding this limit triggers a 429 Too Many Requests error.  ## Troubleshooting  **Solutions for 4xx Response Codes:**  - **403 Forbidden (Inactive Add-on)**: Ensure the Notary On-Demand or Notary add-on is installed - **403 Forbidden (Transactions Limit)**: Purchase additional transactions either through the Notary UI or by contacting the Sales team - **429 Too Many Requests**: If you hit the limit, hold your API calls, then send them after waiting for the retry time  > 📘 To learn more about PandaDoc Notary On-Demand, visit our [website](https://notary.pandadoc.com/notary-on-demand/). 
     * Create Notarization Request
     * @param createNotarizationRequest
     */
    public createNotarizationRequest(createNotarizationRequest: CreateNotarizationRequest, _options?: PromiseConfigurationOptions): Promise<CreateNotarizationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createNotarizationRequest(createNotarizationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this method to delete a notarization request. Once notarization request is deleted it cannot be restored.  > 🚧 Notarization Request status >  > You can only delete a notarization request in status \'SENT\', \'WAITING_FOR_NOTARY\' or \'INCOMPLETE\'.  > If the notarization request is in any other status, the request will return a 400 Bad Request error.  By default all invitees will receive email notification about deletion of the notarization request.  If you want to disable this notification, you can use the `disable_invitees_notifications` parameter when creating request (see [Create Notarization Request](https://developers.pandadoc.com/reference/create-notarization-request)). 
     * Delete Notarization Request
     * @param sessionRequestId Notarization Request ID.
     */
    public deleteNotarizationRequestWithHttpInfo(sessionRequestId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNotarizationRequestWithHttpInfo(sessionRequestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this method to delete a notarization request. Once notarization request is deleted it cannot be restored.  > 🚧 Notarization Request status >  > You can only delete a notarization request in status \'SENT\', \'WAITING_FOR_NOTARY\' or \'INCOMPLETE\'.  > If the notarization request is in any other status, the request will return a 400 Bad Request error.  By default all invitees will receive email notification about deletion of the notarization request.  If you want to disable this notification, you can use the `disable_invitees_notifications` parameter when creating request (see [Create Notarization Request](https://developers.pandadoc.com/reference/create-notarization-request)). 
     * Delete Notarization Request
     * @param sessionRequestId Notarization Request ID.
     */
    public deleteNotarizationRequest(sessionRequestId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteNotarizationRequest(sessionRequestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of notaries associated with your organization.  ## Important Notes  - At the moment, notaries can be added to organization only manually through the PandaDoc Notary UI.  - Organization must have Notary addon enabled to use this endpoint 
     * List Notaries
     * @param [status] Filter by status (comma-separated values supported). Valid values are INVITED, UNDER_REVIEW, ACTIVE, REJECTED, INACTIVE
     * @param [commissionState] Filter by commission state (comma-separated values supported)
     * @param [offset] Number of results to skip
     * @param [limit] Maximum number of results to return
     * @param [orderBy] Sort by name, email, or status (default is email). Use a - prefix for descending order (e.g., -email)
     */
    public listNotariesWithHttpInfo(status?: Array<'INVITED' | 'UNDER_REVIEW' | 'ACTIVE' | 'REJECTED' | 'INACTIVE'>, commissionState?: Array<string>, offset?: number, limit?: number, orderBy?: 'email' | '-email' | 'status' | '-status' | 'name' | '-name', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListNotariesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNotariesWithHttpInfo(status, commissionState, offset, limit, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of notaries associated with your organization.  ## Important Notes  - At the moment, notaries can be added to organization only manually through the PandaDoc Notary UI.  - Organization must have Notary addon enabled to use this endpoint 
     * List Notaries
     * @param [status] Filter by status (comma-separated values supported). Valid values are INVITED, UNDER_REVIEW, ACTIVE, REJECTED, INACTIVE
     * @param [commissionState] Filter by commission state (comma-separated values supported)
     * @param [offset] Number of results to skip
     * @param [limit] Maximum number of results to return
     * @param [orderBy] Sort by name, email, or status (default is email). Use a - prefix for descending order (e.g., -email)
     */
    public listNotaries(status?: Array<'INVITED' | 'UNDER_REVIEW' | 'ACTIVE' | 'REJECTED' | 'INACTIVE'>, commissionState?: Array<string>, offset?: number, limit?: number, orderBy?: 'email' | '-email' | 'status' | '-status' | 'name' | '-name', _options?: PromiseConfigurationOptions): Promise<ListNotariesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listNotaries(status, commissionState, offset, limit, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * Get details about a notarization request by its `id`.  Details include:  - Basic notarization request information (status, creator, invitees). - Signed documents information with links for downloading. - Notarization session recording information with link for downloading. - Timestamps associated with a notarization request.  ## Available Notarization Request Statuses  The following is a complete list of all possible notarization request statuses returned:  | Notarization Request Status | Status Description                                                                                                 | | :-------------------------- | :----------------------------------------------------------------------------------------------------------------- | | SENT                        | Notarization request has been created. Invitees are notified and can start the process of finding a notary.        | | WAITING_FOR_NOTARY          | One of the invitees initialised the process of finding a notary.                                                   | | ACCEPTED                    | Notarization request has been accepted by the notary. At this time nobody has joined the notarization session yet. | | LIVE                        | Notarization session has started.                                                                                  | | COMPLETED                   | Notarization session is finished. Documents have been successfully signed and ready for downloading.               | | INCOMPLETE                  | Notarization session has started but was not completed successfully.                                               |  ## Signed documents  Signed documents are the documents that were successfully signed during the notarization session. The signed document\'s info is available only if the notarization request has `COMPLETED` status, otherwise the returned list will be empty.    In case you uploaded several documents for notarization then the `signed_documents` list will contain links for downloading for each document separately (with `SINGLE` document type) and link for the combined document (with `COMBINED` document type accordingly).  ## Recording  Recording is the video of the notarization session. The recording info is available only if the notarization request has `COMPLETED` status and recording is available, otherwise the returned object will be empty.  > 📘 Links expire in 1 hour >  > **Note**: The signed document and recording links expire in 1 hour. After this time it will be not possible to download files using the returned urls. In this case you need to call endpoint again since each request generates a new link.  ## Limits  A maximum of 100 API calls per minute is permitted. Exceeding this limit triggers a 429 Too Many Requests error. 
     * Notarization Request Details
     * @param sessionRequestId Notarization Request ID.
     */
    public notarizationRequestDetailsWithHttpInfo(sessionRequestId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NotarizationRequestDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.notarizationRequestDetailsWithHttpInfo(sessionRequestId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get details about a notarization request by its `id`.  Details include:  - Basic notarization request information (status, creator, invitees). - Signed documents information with links for downloading. - Notarization session recording information with link for downloading. - Timestamps associated with a notarization request.  ## Available Notarization Request Statuses  The following is a complete list of all possible notarization request statuses returned:  | Notarization Request Status | Status Description                                                                                                 | | :-------------------------- | :----------------------------------------------------------------------------------------------------------------- | | SENT                        | Notarization request has been created. Invitees are notified and can start the process of finding a notary.        | | WAITING_FOR_NOTARY          | One of the invitees initialised the process of finding a notary.                                                   | | ACCEPTED                    | Notarization request has been accepted by the notary. At this time nobody has joined the notarization session yet. | | LIVE                        | Notarization session has started.                                                                                  | | COMPLETED                   | Notarization session is finished. Documents have been successfully signed and ready for downloading.               | | INCOMPLETE                  | Notarization session has started but was not completed successfully.                                               |  ## Signed documents  Signed documents are the documents that were successfully signed during the notarization session. The signed document\'s info is available only if the notarization request has `COMPLETED` status, otherwise the returned list will be empty.    In case you uploaded several documents for notarization then the `signed_documents` list will contain links for downloading for each document separately (with `SINGLE` document type) and link for the combined document (with `COMBINED` document type accordingly).  ## Recording  Recording is the video of the notarization session. The recording info is available only if the notarization request has `COMPLETED` status and recording is available, otherwise the returned object will be empty.  > 📘 Links expire in 1 hour >  > **Note**: The signed document and recording links expire in 1 hour. After this time it will be not possible to download files using the returned urls. In this case you need to call endpoint again since each request generates a new link.  ## Limits  A maximum of 100 API calls per minute is permitted. Exceeding this limit triggers a 429 Too Many Requests error. 
     * Notarization Request Details
     * @param sessionRequestId Notarization Request ID.
     */
    public notarizationRequestDetails(sessionRequestId: string, _options?: PromiseConfigurationOptions): Promise<NotarizationRequestDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.notarizationRequestDetails(sessionRequestId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableOAuth20AuthenticationApi } from './ObservableAPI';

import { OAuth20AuthenticationApiRequestFactory, OAuth20AuthenticationApiResponseProcessor} from "../apis/OAuth20AuthenticationApi";
export class PromiseOAuth20AuthenticationApi {
    private api: ObservableOAuth20AuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OAuth20AuthenticationApiRequestFactory,
        responseProcessor?: OAuth20AuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableOAuth20AuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create or refresh an access token to make requests on behalf of a user. This endpoint is used to obtain an `access_token` and `refresh_token` for the first time, and to refresh the `access_token` when it expires. This endpoint is part of OAuth 2.0 implementation. You need to configure OAuth App to obtain `client_id` and `client_secret`. Read more about [OAuth 2.0 implementation](https://developers.pandadoc.com/reference/authentication-process). Make sure you\'re sending the header `Content-Type: application/x-www-form-urlencoded`.   ## Create Access Token As a result of the OAuth 2.0 user authentication process, you should get a `code` that can be exchanged for an `access_token`. Use this endpoint to do this exchange, and to refresh the token later.  > 🚧 Invalid Grant? >  > If you receive an `invalid grant` response it is likely because you used the same `code` more than once from the [Authorize a PandaDoc User](ref:authorize-a-user) step above. The `code` parameter is generated for one-time use. A new `code` value must be generated if you wish to change API users, permissions, or simply generate a new `code` value for the same PandaDoc user.  > 📘 expires_in >  > `expires_in` is based in seconds. Currently, a token expires in 31535999 seconds = 1 year.  ## Refresh Access Token Eventually, `access_token` expires and accessing an API method returns **401 unauthorized**. Your application needs to refresh the OAuth2 token with the stored `refresh_token` returned when initially creating an access token.  Once refreshed, calls on behalf of the originally authorized user can resume immediately. Use the newly returned `access_token` for all future API requests.  > 🚧 Invalid Grant? >  > If you receive an `invalid grant` response, it is likely because your `refresh_token` is invalid. 
     * Create/Refresh Access Token
     * @param [grantType] This value must be set to &#x60;refresh_token&#x60;.
     * @param [clientId] Client ID that is automatically generated after application creation in the Developer Dashboard.
     * @param [clientSecret] Client secret that is automatically generated after application creation in the Developer Dashboard.
     * @param [code] &#x60;auth_code&#x60; from the server on the previous step (Authorize a PandaDoc User). 
     * @param [scope] Requested permissions. Use &#x60;read+write&#x60; as our default value to send documents.
     * @param [refreshToken] &#x60;refresh_token&#x60; you received and stored from the server when initially creating an &#x60;access_token&#x60;. 
     */
    public accessTokenWithHttpInfo(grantType?: string, clientId?: string, clientSecret?: string, code?: string, scope?: string, refreshToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OAuth2AccessTokenResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.accessTokenWithHttpInfo(grantType, clientId, clientSecret, code, scope, refreshToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Create or refresh an access token to make requests on behalf of a user. This endpoint is used to obtain an `access_token` and `refresh_token` for the first time, and to refresh the `access_token` when it expires. This endpoint is part of OAuth 2.0 implementation. You need to configure OAuth App to obtain `client_id` and `client_secret`. Read more about [OAuth 2.0 implementation](https://developers.pandadoc.com/reference/authentication-process). Make sure you\'re sending the header `Content-Type: application/x-www-form-urlencoded`.   ## Create Access Token As a result of the OAuth 2.0 user authentication process, you should get a `code` that can be exchanged for an `access_token`. Use this endpoint to do this exchange, and to refresh the token later.  > 🚧 Invalid Grant? >  > If you receive an `invalid grant` response it is likely because you used the same `code` more than once from the [Authorize a PandaDoc User](ref:authorize-a-user) step above. The `code` parameter is generated for one-time use. A new `code` value must be generated if you wish to change API users, permissions, or simply generate a new `code` value for the same PandaDoc user.  > 📘 expires_in >  > `expires_in` is based in seconds. Currently, a token expires in 31535999 seconds = 1 year.  ## Refresh Access Token Eventually, `access_token` expires and accessing an API method returns **401 unauthorized**. Your application needs to refresh the OAuth2 token with the stored `refresh_token` returned when initially creating an access token.  Once refreshed, calls on behalf of the originally authorized user can resume immediately. Use the newly returned `access_token` for all future API requests.  > 🚧 Invalid Grant? >  > If you receive an `invalid grant` response, it is likely because your `refresh_token` is invalid. 
     * Create/Refresh Access Token
     * @param [grantType] This value must be set to &#x60;refresh_token&#x60;.
     * @param [clientId] Client ID that is automatically generated after application creation in the Developer Dashboard.
     * @param [clientSecret] Client secret that is automatically generated after application creation in the Developer Dashboard.
     * @param [code] &#x60;auth_code&#x60; from the server on the previous step (Authorize a PandaDoc User). 
     * @param [scope] Requested permissions. Use &#x60;read+write&#x60; as our default value to send documents.
     * @param [refreshToken] &#x60;refresh_token&#x60; you received and stored from the server when initially creating an &#x60;access_token&#x60;. 
     */
    public accessToken(grantType?: string, clientId?: string, clientSecret?: string, code?: string, scope?: string, refreshToken?: string, _options?: PromiseConfigurationOptions): Promise<OAuth2AccessTokenResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.accessToken(grantType, clientId, clientSecret, code, scope, refreshToken, observableOptions);
        return result.toPromise();
    }


}



import { ObservableProductCatalogApi } from './ObservableAPI';

import { ProductCatalogApiRequestFactory, ProductCatalogApiResponseProcessor} from "../apis/ProductCatalogApi";
export class PromiseProductCatalogApi {
    private api: ObservableProductCatalogApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductCatalogApiRequestFactory,
        responseProcessor?: ProductCatalogApiResponseProcessor
    ) {
        this.api = new ObservableProductCatalogApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new catalog item.
     * Create Catalog Item
     * @param productCatalogItemRequest
     */
    public createCatalogItemWithHttpInfo(productCatalogItemRequest: ProductCatalogItemRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCatalogItemResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCatalogItemWithHttpInfo(productCatalogItemRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new catalog item.
     * Create Catalog Item
     * @param productCatalogItemRequest
     */
    public createCatalogItem(productCatalogItemRequest: ProductCatalogItemRequest, _options?: PromiseConfigurationOptions): Promise<ProductCatalogItemResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createCatalogItem(productCatalogItemRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete catalog item.
     * Delete Catalog Item
     * @param itemUuid Catalog item UUID
     */
    public deleteCatalogItemWithHttpInfo(itemUuid: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCatalogItemWithHttpInfo(itemUuid, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete catalog item.
     * Delete Catalog Item
     * @param itemUuid Catalog item UUID
     */
    public deleteCatalogItem(itemUuid: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCatalogItem(itemUuid, observableOptions);
        return result.toPromise();
    }

    /**
     * Get catalog item.
     * Catalog Item Details
     * @param itemUuid Catalog item UUID
     */
    public getCatalogItemWithHttpInfo(itemUuid: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCatalogItemResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCatalogItemWithHttpInfo(itemUuid, observableOptions);
        return result.toPromise();
    }

    /**
     * Get catalog item.
     * Catalog Item Details
     * @param itemUuid Catalog item UUID
     */
    public getCatalogItem(itemUuid: string, _options?: PromiseConfigurationOptions): Promise<ProductCatalogItemResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCatalogItem(itemUuid, observableOptions);
        return result.toPromise();
    }

    /**
     * This method searches for items in your [product catalog](https://support.pandadoc.com/en/articles/9714691-product-catalog).  Use the `query` parameter to search in title, SKU, description, category name, custom fields name and value. You can also search for items by their type, billing type, and category id.  Order search results, in both ascending and descending order, by these item properties:  - SKU - Name - Price - Modification date  Use the `exclude_uuids` parameter to exclude particular uuids from the search request. 
     * List Catalog Items Search
     * @param [page] Page number.
     * @param [perPage] Items per page.
     * @param [query] Search query. Searches the following fields: Title, SKU, description, category name, custom fields name and value. 
     * @param [orderBy] Ordering principle for displaying search results.
     * @param [types] Filter by catalog item types.
     * @param [billingTypes] Filter by billing types.
     * @param [excludeUuids] A list of item uuids to be excluded from search.
     * @param [categoryId] Category id.
     * @param [noCategory]
     */
    public searchCatalogItemsWithHttpInfo(page?: number, perPage?: number, query?: string, orderBy?: 'sku' | '-sku' | 'title' | '-title' | 'price' | '-price' | 'date_modified' | '-date_modified', types?: Array<ProductCatalogTypeEnum>, billingTypes?: Array<'one_time' | 'recurring'>, excludeUuids?: Array<string>, categoryId?: string, noCategory?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCatalogItemsSearchResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchCatalogItemsWithHttpInfo(page, perPage, query, orderBy, types, billingTypes, excludeUuids, categoryId, noCategory, observableOptions);
        return result.toPromise();
    }

    /**
     * This method searches for items in your [product catalog](https://support.pandadoc.com/en/articles/9714691-product-catalog).  Use the `query` parameter to search in title, SKU, description, category name, custom fields name and value. You can also search for items by their type, billing type, and category id.  Order search results, in both ascending and descending order, by these item properties:  - SKU - Name - Price - Modification date  Use the `exclude_uuids` parameter to exclude particular uuids from the search request. 
     * List Catalog Items Search
     * @param [page] Page number.
     * @param [perPage] Items per page.
     * @param [query] Search query. Searches the following fields: Title, SKU, description, category name, custom fields name and value. 
     * @param [orderBy] Ordering principle for displaying search results.
     * @param [types] Filter by catalog item types.
     * @param [billingTypes] Filter by billing types.
     * @param [excludeUuids] A list of item uuids to be excluded from search.
     * @param [categoryId] Category id.
     * @param [noCategory]
     */
    public searchCatalogItems(page?: number, perPage?: number, query?: string, orderBy?: 'sku' | '-sku' | 'title' | '-title' | 'price' | '-price' | 'date_modified' | '-date_modified', types?: Array<ProductCatalogTypeEnum>, billingTypes?: Array<'one_time' | 'recurring'>, excludeUuids?: Array<string>, categoryId?: string, noCategory?: boolean, _options?: PromiseConfigurationOptions): Promise<ListCatalogItemsSearchResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchCatalogItems(page, perPage, query, orderBy, types, billingTypes, excludeUuids, categoryId, noCategory, observableOptions);
        return result.toPromise();
    }

    /**
     * Update catalog item.
     * Update Catalog Item
     * @param itemUuid Catalog item UUID
     * @param productCatalogItemPatchRequest
     */
    public updateCatalogItemWithHttpInfo(itemUuid: string, productCatalogItemPatchRequest: ProductCatalogItemPatchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProductCatalogItemResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCatalogItemWithHttpInfo(itemUuid, productCatalogItemPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update catalog item.
     * Update Catalog Item
     * @param itemUuid Catalog item UUID
     * @param productCatalogItemPatchRequest
     */
    public updateCatalogItem(itemUuid: string, productCatalogItemPatchRequest: ProductCatalogItemPatchRequest, _options?: PromiseConfigurationOptions): Promise<ProductCatalogItemResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateCatalogItem(itemUuid, productCatalogItemPatchRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableQuotesApi } from './ObservableAPI';

import { QuotesApiRequestFactory, QuotesApiResponseProcessor} from "../apis/QuotesApi";
export class PromiseQuotesApi {
    private api: ObservableQuotesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: QuotesApiRequestFactory,
        responseProcessor?: QuotesApiResponseProcessor
    ) {
        this.api = new ObservableQuotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This operation updates the details of a specific quote within a document by specifying the document ID and quote ID.
     * Quote update
     * @param documentId Document ID
     * @param quoteId Quote ID
     * @param quoteUpdateRequest
     */
    public quoteUpdateWithHttpInfo(documentId: string, quoteId: string, quoteUpdateRequest: QuoteUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuoteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.quoteUpdateWithHttpInfo(documentId, quoteId, quoteUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation updates the details of a specific quote within a document by specifying the document ID and quote ID.
     * Quote update
     * @param documentId Document ID
     * @param quoteId Quote ID
     * @param quoteUpdateRequest
     */
    public quoteUpdate(documentId: string, quoteId: string, quoteUpdateRequest: QuoteUpdateRequest, _options?: PromiseConfigurationOptions): Promise<QuoteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.quoteUpdate(documentId, quoteId, quoteUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTemplateSettingsApi } from './ObservableAPI';

import { TemplateSettingsApiRequestFactory, TemplateSettingsApiResponseProcessor} from "../apis/TemplateSettingsApi";
export class PromiseTemplateSettingsApi {
    private api: ObservableTemplateSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TemplateSettingsApiRequestFactory,
        responseProcessor?: TemplateSettingsApiResponseProcessor
    ) {
        this.api = new ObservableTemplateSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the settings for a specified template. Only the language field is currently supported. 
     * Get template settings
     * @param templateId Unique identifier of the template to retrieve settings for.
     */
    public templateSettingsGetWithHttpInfo(templateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateSettingsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.templateSettingsGetWithHttpInfo(templateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the settings for a specified template. Only the language field is currently supported. 
     * Get template settings
     * @param templateId Unique identifier of the template to retrieve settings for.
     */
    public templateSettingsGet(templateId: string, _options?: PromiseConfigurationOptions): Promise<TemplateSettingsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.templateSettingsGet(templateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the settings for a specified template. Only the language field is currently supported. 
     * Update template settings
     * @param templateId Unique identifier of the template to update settings for.
     * @param updateTemplateSettingsRequest
     */
    public templateSettingsUpdateWithHttpInfo(templateId: string, updateTemplateSettingsRequest: UpdateTemplateSettingsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateSettingsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.templateSettingsUpdateWithHttpInfo(templateId, updateTemplateSettingsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the settings for a specified template. Only the language field is currently supported. 
     * Update template settings
     * @param templateId Unique identifier of the template to update settings for.
     * @param updateTemplateSettingsRequest
     */
    public templateSettingsUpdate(templateId: string, updateTemplateSettingsRequest: UpdateTemplateSettingsRequest, _options?: PromiseConfigurationOptions): Promise<TemplateSettingsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.templateSettingsUpdate(templateId, updateTemplateSettingsRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTemplatesApi } from './ObservableAPI';

import { TemplatesApiRequestFactory, TemplatesApiResponseProcessor} from "../apis/TemplatesApi";
export class PromiseTemplatesApi {
    private api: ObservableTemplatesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TemplatesApiRequestFactory,
        responseProcessor?: TemplatesApiResponseProcessor
    ) {
        this.api = new ObservableTemplatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This operation allows you to create a new template by providing the necessary template details.
     * Create Template
     * @param createTemplateFromUrlRequest
     * @param [fields] A comma-separated list of additional fields to include in the response.
     */
    public createTemplateWithHttpInfo(createTemplateFromUrlRequest: CreateTemplateFromUrlRequest, fields?: Array<'content_date_modified'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateCreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplateWithHttpInfo(createTemplateFromUrlRequest, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation allows you to create a new template by providing the necessary template details.
     * Create Template
     * @param createTemplateFromUrlRequest
     * @param [fields] A comma-separated list of additional fields to include in the response.
     */
    public createTemplate(createTemplateFromUrlRequest: CreateTemplateFromUrlRequest, fields?: Array<'content_date_modified'>, _options?: PromiseConfigurationOptions): Promise<TemplateCreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplate(createTemplateFromUrlRequest, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new editing session for the Embedded Editor. The response includes an E-Token, which is required to open the template.  #### Limitations  - **Single Active Session per User-Template Pair**    Only one editing session can be active at a time for a specific user and template. Creating a new session for the same user-template pair will automatically invalidate the previous one.  - **Weekly Session Cap**    A maximum of **250** editing sessions can be created for a single template per week. Any attempt to exceed this limit will result in a `403 Forbidden` error. 
     * Create Template Editing Session 
     * @param id Template ID
     * @param editingSessionRequest
     */
    public createTemplateEditingSessionWithHttpInfo(id: string, editingSessionRequest: EditingSessionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateTemplateEditingSession201Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplateEditingSessionWithHttpInfo(id, editingSessionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new editing session for the Embedded Editor. The response includes an E-Token, which is required to open the template.  #### Limitations  - **Single Active Session per User-Template Pair**    Only one editing session can be active at a time for a specific user and template. Creating a new session for the same user-template pair will automatically invalidate the previous one.  - **Weekly Session Cap**    A maximum of **250** editing sessions can be created for a single template per week. Any attempt to exceed this limit will result in a `403 Forbidden` error. 
     * Create Template Editing Session 
     * @param id Template ID
     * @param editingSessionRequest
     */
    public createTemplateEditingSession(id: string, editingSessionRequest: EditingSessionRequest, _options?: PromiseConfigurationOptions): Promise<CreateTemplateEditingSession201Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplateEditingSession(id, editingSessionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This asynchronous endpoint allows users to create a new template by uploading a file.  The uploaded file is processed in the background to generate the template. The maximum allowable file size for upload is 100 MB. Field tags and form fields are not supported yet.  Once the file is uploaded, the processing will happen asynchronously, and users need to check [the status of the template](https://developers.pandadoc.com/reference/template-status) creation. 
     * Create Template from File Upload
     * @param [fields] A comma-separated list of additional fields to include in the response.
     * @param [file] Binary PDF/DocX/RTF File.
     * @param [data] JSON as a multipart/form-data string.
     */
    public createTemplateWithUploadWithHttpInfo(fields?: Array<'content_date_modified'>, file?: HttpFile, data?: CreateTemplateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateCreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplateWithUploadWithHttpInfo(fields, file, data, observableOptions);
        return result.toPromise();
    }

    /**
     * This asynchronous endpoint allows users to create a new template by uploading a file.  The uploaded file is processed in the background to generate the template. The maximum allowable file size for upload is 100 MB. Field tags and form fields are not supported yet.  Once the file is uploaded, the processing will happen asynchronously, and users need to check [the status of the template](https://developers.pandadoc.com/reference/template-status) creation. 
     * Create Template from File Upload
     * @param [fields] A comma-separated list of additional fields to include in the response.
     * @param [file] Binary PDF/DocX/RTF File.
     * @param [data] JSON as a multipart/form-data string.
     */
    public createTemplateWithUpload(fields?: Array<'content_date_modified'>, file?: HttpFile, data?: CreateTemplateRequest, _options?: PromiseConfigurationOptions): Promise<TemplateCreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createTemplateWithUpload(fields, file, data, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a template
     * Delete Template
     * @param id Template ID
     */
    public deleteTemplateWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTemplateWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a template
     * Delete Template
     * @param id Template ID
     */
    public deleteTemplate(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteTemplate(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get details about a template by `id`. Details include:  - Basic template information (name, author, etc) - Roles - All fields with values - All tokens with values - Pricing information (pricing tables, products, quotes) - Template metadata - Template tags - Content placeholders - Modification timestamps. Note that `date_modified` means any changes associated with the template roles, while `content_date_modified` logs any changes in the template content. 
     * Template Details
     * @param id Template ID
     */
    public detailsTemplateWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsTemplateWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get details about a template by `id`. Details include:  - Basic template information (name, author, etc) - Roles - All fields with values - All tokens with values - Pricing information (pricing tables, products, quotes) - Template metadata - Template tags - Content placeholders - Modification timestamps. Note that `date_modified` means any changes associated with the template roles, while `content_date_modified` logs any changes in the template content. 
     * Template Details
     * @param id Template ID
     */
    public detailsTemplate(id: string, _options?: PromiseConfigurationOptions): Promise<TemplateDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsTemplate(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of templates. You can filter results by a search query, tags, or fields.
     * List Templates
     * @param [q] Search query. Filter by template name.
     * @param [shared] Returns only the shared templates.
     * @param [deleted] Returns only the deleted templates.
     * @param [count] Specify how many templates to return.
     * @param [page] Specify which page of the dataset to return.
     * @param [id] Specify template ID.
     * @param [folderUuid] UUID of the folder where the templates are stored.
     * @param [tag] Search tag. Filter by template tag.
     * @param [fields] A comma-separated list of additional fields to include in the response.
     */
    public listTemplatesWithHttpInfo(q?: string, shared?: boolean, deleted?: boolean, count?: number, page?: number, id?: string, folderUuid?: string, tag?: Array<string>, fields?: Array<'content_date_modified'>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplatesWithHttpInfo(q, shared, deleted, count, page, id, folderUuid, tag, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of templates. You can filter results by a search query, tags, or fields.
     * List Templates
     * @param [q] Search query. Filter by template name.
     * @param [shared] Returns only the shared templates.
     * @param [deleted] Returns only the deleted templates.
     * @param [count] Specify how many templates to return.
     * @param [page] Specify which page of the dataset to return.
     * @param [id] Specify template ID.
     * @param [folderUuid] UUID of the folder where the templates are stored.
     * @param [tag] Search tag. Filter by template tag.
     * @param [fields] A comma-separated list of additional fields to include in the response.
     */
    public listTemplates(q?: string, shared?: boolean, deleted?: boolean, count?: number, page?: number, id?: string, folderUuid?: string, tag?: Array<string>, fields?: Array<'content_date_modified'>, _options?: PromiseConfigurationOptions): Promise<TemplateListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listTemplates(q, shared, deleted, count, page, id, folderUuid, tag, fields, observableOptions);
        return result.toPromise();
    }

    /**
     * ## Available Template Statuses  The following is a complete list of all possible template statuses returned:  | Template Status      | Status Description                                                                                                                      | | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | | `template.UPLOADED`  | The template upload process has been initiated and is currently in progress. It will soon transition to the `template.PROCESSED` state. | | `template.PROCESSED` | The template has been successfully uploaded and created. At this stage, all aspects of the template are editable.                       | | `template.ERROR`     | The template upload process has failed. Please refer to the error details in the response for more information.                         | 
     * Template Status
     * @param id Template ID
     */
    public statusTemplateWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateStatusResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.statusTemplateWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * ## Available Template Statuses  The following is a complete list of all possible template statuses returned:  | Template Status      | Status Description                                                                                                                      | | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | | `template.UPLOADED`  | The template upload process has been initiated and is currently in progress. It will soon transition to the `template.PROCESSED` state. | | `template.PROCESSED` | The template has been successfully uploaded and created. At this stage, all aspects of the template are editable.                       | | `template.ERROR`     | The template upload process has failed. Please refer to the error details in the response for more information.                         | 
     * Template Status
     * @param id Template ID
     */
    public statusTemplate(id: string, _options?: PromiseConfigurationOptions): Promise<TemplateStatusResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.statusTemplate(id, observableOptions);
        return result.toPromise();
    }

    /**
     * > 🚧 Template status >  > You can only update a template in the PROCESSED status (`template.PROCESSED`).  >  > After creating a new template, it usually retains a `template.uploaded` status for 3-5 seconds while the template syncs across PandaDoc servers. When the template is available for further API calls, the template moves to the `template.PROCESSED` state. Use [Template Status](https://developers.pandadoc.com/reference/template-status) or Webhooks to check template status. 
     * Template Update
     * @param id Template ID
     * @param templateUpdateRequest
     */
    public updateTemplateWithHttpInfo(id: string, templateUpdateRequest: TemplateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplateWithHttpInfo(id, templateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * > 🚧 Template status >  > You can only update a template in the PROCESSED status (`template.PROCESSED`).  >  > After creating a new template, it usually retains a `template.uploaded` status for 3-5 seconds while the template syncs across PandaDoc servers. When the template is available for further API calls, the template moves to the `template.PROCESSED` state. Use [Template Status](https://developers.pandadoc.com/reference/template-status) or Webhooks to check template status. 
     * Template Update
     * @param id Template ID
     * @param templateUpdateRequest
     */
    public updateTemplate(id: string, templateUpdateRequest: TemplateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateTemplate(id, templateUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableUserAndWorkspaceManagementApi } from './ObservableAPI';

import { UserAndWorkspaceManagementApiRequestFactory, UserAndWorkspaceManagementApiResponseProcessor} from "../apis/UserAndWorkspaceManagementApi";
export class PromiseUserAndWorkspaceManagementApi {
    private api: ObservableUserAndWorkspaceManagementApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserAndWorkspaceManagementApiRequestFactory,
        responseProcessor?: UserAndWorkspaceManagementApiResponseProcessor
    ) {
        this.api = new ObservableUserAndWorkspaceManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add an existing user to a workspace. - You must be an organization admin or a workspace admin to add members. 
     * Add Member to Workspace
     * @param workspaceId
     * @param addMemberRequest
     * @param [notifyUser] Send a confirmation email to the user that was added to workspace(s).
     * @param [notifyWsAdmins] Send a confirmation email to all workspace admins indicating that the user has been added to the workspace.
     */
    public addMemberWithHttpInfo(workspaceId: string, addMemberRequest: AddMemberRequest, notifyUser?: boolean, notifyWsAdmins?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AddMemberResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addMemberWithHttpInfo(workspaceId, addMemberRequest, notifyUser, notifyWsAdmins, observableOptions);
        return result.toPromise();
    }

    /**
     * Add an existing user to a workspace. - You must be an organization admin or a workspace admin to add members. 
     * Add Member to Workspace
     * @param workspaceId
     * @param addMemberRequest
     * @param [notifyUser] Send a confirmation email to the user that was added to workspace(s).
     * @param [notifyWsAdmins] Send a confirmation email to all workspace admins indicating that the user has been added to the workspace.
     */
    public addMember(workspaceId: string, addMemberRequest: AddMemberRequest, notifyUser?: boolean, notifyWsAdmins?: boolean, _options?: PromiseConfigurationOptions): Promise<AddMemberResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addMember(workspaceId, addMemberRequest, notifyUser, notifyWsAdmins, observableOptions);
        return result.toPromise();
    }

    /**
     * Generate a new API key for the workspace. Check out [API Key Authentication article](https://developers.pandadoc.com/reference/api-key-authentication-process) for detailed API Keys description.  > 📘  > - Only an **Org Admin** can generate an API keys. > - To make another user a key\'s owner, pass `user_id` of this user. The user should has an **Admin** role in the workspace. > - Generating a new key invalidates existing key with the same type. Using this request, you can deactivate the key you\'re using for the request. 
     * Create API Key
     * @param workspaceId Workspace id.
     * @param createApiKeyRequest
     */
    public createApiKeyWithHttpInfo(workspaceId: string, createApiKeyRequest: CreateApiKeyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateApiKeyResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApiKeyWithHttpInfo(workspaceId, createApiKeyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Generate a new API key for the workspace. Check out [API Key Authentication article](https://developers.pandadoc.com/reference/api-key-authentication-process) for detailed API Keys description.  > 📘  > - Only an **Org Admin** can generate an API keys. > - To make another user a key\'s owner, pass `user_id` of this user. The user should has an **Admin** role in the workspace. > - Generating a new key invalidates existing key with the same type. Using this request, you can deactivate the key you\'re using for the request. 
     * Create API Key
     * @param workspaceId Workspace id.
     * @param createApiKeyRequest
     */
    public createApiKey(workspaceId: string, createApiKeyRequest: CreateApiKeyRequest, _options?: PromiseConfigurationOptions): Promise<CreateApiKeyResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApiKey(workspaceId, createApiKeyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create users, and assign them roles, licenses, and workspaces.  - You must be an organization admin to create users. - We check that the user email domain matches your organization domain. - We check that the user email and phone number have a valid format. 
     * Create User
     * @param createUserRequest
     * @param [notifyUser] Send a confirmation email to the user that was added to workspace(s).
     * @param [notifyWsAdmins] Send a confirmation email to all workspace admins indicating that the user has been added to the workspace.
     */
    public createUserWithHttpInfo(createUserRequest: CreateUserRequest, notifyUser?: boolean, notifyWsAdmins?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateUserResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createUserWithHttpInfo(createUserRequest, notifyUser, notifyWsAdmins, observableOptions);
        return result.toPromise();
    }

    /**
     * Create users, and assign them roles, licenses, and workspaces.  - You must be an organization admin to create users. - We check that the user email domain matches your organization domain. - We check that the user email and phone number have a valid format. 
     * Create User
     * @param createUserRequest
     * @param [notifyUser] Send a confirmation email to the user that was added to workspace(s).
     * @param [notifyWsAdmins] Send a confirmation email to all workspace admins indicating that the user has been added to the workspace.
     */
    public createUser(createUserRequest: CreateUserRequest, notifyUser?: boolean, notifyWsAdmins?: boolean, _options?: PromiseConfigurationOptions): Promise<CreateUserResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createUser(createUserRequest, notifyUser, notifyWsAdmins, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a workspace in your organization.  - You need to be an Org Admin to create a workspace. - You will be added to the new workspace with an Admin role. 
     * Create Workspace
     * @param createWorkspaceRequest
     */
    public createWorkspaceWithHttpInfo(createWorkspaceRequest: CreateWorkspaceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateWorkspaceResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWorkspaceWithHttpInfo(createWorkspaceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a workspace in your organization.  - You need to be an Org Admin to create a workspace. - You will be added to the new workspace with an Admin role. 
     * Create Workspace
     * @param createWorkspaceRequest
     */
    public createWorkspace(createWorkspaceRequest: CreateWorkspaceRequest, _options?: PromiseConfigurationOptions): Promise<CreateWorkspaceResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWorkspace(createWorkspaceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deactivate the workspace, remove all the members from it and make it  unavailable. 
     * Deactivate Workspace
     * @param workspaceId
     * @param [body]
     */
    public deactivateWorkspaceWithHttpInfo(workspaceId: string, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deactivateWorkspaceWithHttpInfo(workspaceId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Deactivate the workspace, remove all the members from it and make it  unavailable. 
     * Deactivate Workspace
     * @param workspaceId
     * @param [body]
     */
    public deactivateWorkspace(workspaceId: string, body?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deactivateWorkspace(workspaceId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of all the active workspaces in the organization. 
     * List Workspaces
     * @param [count] Number of elements in page.
     * @param [page] Page number.
     */
    public getWorkspacesListWithHttpInfo(count?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListWorkspacesResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getWorkspacesListWithHttpInfo(count, page, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of all the active workspaces in the organization. 
     * List Workspaces
     * @param [count] Number of elements in page.
     * @param [page] Page number.
     */
    public getWorkspacesList(count?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<ListWorkspacesResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getWorkspacesList(count, page, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of all users with membership in your organization, with their contact information, license type, and workspace roles.  You must be an organization admin to list users. 
     * List Users
     * @param [count] Number of elements in page.
     * @param [page] Page number.
     * @param [showRemoved] Filter option - show users with removed memberships.
     */
    public listUsersWithHttpInfo(count?: number, page?: number, showRemoved?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListUsersResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listUsersWithHttpInfo(count, page, showRemoved, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of all users with membership in your organization, with their contact information, license type, and workspace roles.  You must be an organization admin to list users. 
     * List Users
     * @param [count] Number of elements in page.
     * @param [page] Page number.
     * @param [showRemoved] Filter option - show users with removed memberships.
     */
    public listUsers(count?: number, page?: number, showRemoved?: boolean, _options?: PromiseConfigurationOptions): Promise<ListUsersResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listUsers(count, page, showRemoved, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation removes a specified member from a workspace by providing the workspace ID and member ID.
     * Remove Member from Workspace
     * @param workspaceId Workspace id
     * @param memberId Member id
     */
    public removeMemberWithHttpInfo(workspaceId: string, memberId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeMemberWithHttpInfo(workspaceId, memberId, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation removes a specified member from a workspace by providing the workspace ID and member ID.
     * Remove Member from Workspace
     * @param workspaceId Workspace id
     * @param memberId Member id
     */
    public removeMember(workspaceId: string, memberId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.removeMember(workspaceId, memberId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableWebhookEventsApi } from './ObservableAPI';

import { WebhookEventsApiRequestFactory, WebhookEventsApiResponseProcessor} from "../apis/WebhookEventsApi";
export class PromiseWebhookEventsApi {
    private api: ObservableWebhookEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookEventsApiRequestFactory,
        responseProcessor?: WebhookEventsApiResponseProcessor
    ) {
        this.api = new ObservableWebhookEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This operation fetches detailed information about a specific webhook event using its unique identifier.
     * Webhook Event Details
     * @param id Webhook event uuid.
     */
    public detailsWebhookEventWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WebhookEventDetailsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsWebhookEventWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation fetches detailed information about a specific webhook event using its unique identifier.
     * Webhook Event Details
     * @param id Webhook event uuid.
     */
    public detailsWebhookEvent(id: string, _options?: PromiseConfigurationOptions): Promise<WebhookEventDetailsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsWebhookEvent(id, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation retrieves a paginated list of all webhook events.
     * List Webhook Events
     * @param count Specify how many event results to return.
     * @param page Specify which page of the dataset to return.
     * @param [since] Return results where the event creation time is greater than or equal to this value.
     * @param [to] Return results where the event creation time is less than this value.
     * @param [type] Returns results by the specified event types.
     * @param [httpStatusCode] Returns results with the specified HTTP status codes.
     * @param [error] Returns results with the following errors.
     */
    public listWebhookEventWithHttpInfo(count: number, page: number, since?: Date, to?: Date, type?: Array<WebhookEventTriggerEnum>, httpStatusCode?: Array<WebhookEventHttpStatusCodeGroupEnum>, error?: Array<WebhookEventErrorEnum>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WebhookEventPageResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWebhookEventWithHttpInfo(count, page, since, to, type, httpStatusCode, error, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation retrieves a paginated list of all webhook events.
     * List Webhook Events
     * @param count Specify how many event results to return.
     * @param page Specify which page of the dataset to return.
     * @param [since] Return results where the event creation time is greater than or equal to this value.
     * @param [to] Return results where the event creation time is less than this value.
     * @param [type] Returns results by the specified event types.
     * @param [httpStatusCode] Returns results with the specified HTTP status codes.
     * @param [error] Returns results with the following errors.
     */
    public listWebhookEvent(count: number, page: number, since?: Date, to?: Date, type?: Array<WebhookEventTriggerEnum>, httpStatusCode?: Array<WebhookEventHttpStatusCodeGroupEnum>, error?: Array<WebhookEventErrorEnum>, _options?: PromiseConfigurationOptions): Promise<WebhookEventPageResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWebhookEvent(count, page, since, to, type, httpStatusCode, error, observableOptions);
        return result.toPromise();
    }


}



import { ObservableWebhookSubscriptionsApi } from './ObservableAPI';

import { WebhookSubscriptionsApiRequestFactory, WebhookSubscriptionsApiResponseProcessor} from "../apis/WebhookSubscriptionsApi";
export class PromiseWebhookSubscriptionsApi {
    private api: ObservableWebhookSubscriptionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookSubscriptionsApiRequestFactory,
        responseProcessor?: WebhookSubscriptionsApiResponseProcessor
    ) {
        this.api = new ObservableWebhookSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This operation creates a new webhook subscription by specifying its details.
     * Create Webhook Subscription
     * @param webhookSubscriptionCreateRequest
     */
    public createWebhookSubscriptionWithHttpInfo(webhookSubscriptionCreateRequest: WebhookSubscriptionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WebhookSubscriptionItemResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWebhookSubscriptionWithHttpInfo(webhookSubscriptionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation creates a new webhook subscription by specifying its details.
     * Create Webhook Subscription
     * @param webhookSubscriptionCreateRequest
     */
    public createWebhookSubscription(webhookSubscriptionCreateRequest: WebhookSubscriptionCreateRequest, _options?: PromiseConfigurationOptions): Promise<WebhookSubscriptionItemResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createWebhookSubscription(webhookSubscriptionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation deletes a specific webhook subscription identified by its UUID.
     * Delete Webhook Subscription
     * @param id Webhook subscription uuid.
     */
    public deleteWebhookSubscriptionWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWebhookSubscriptionWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation deletes a specific webhook subscription identified by its UUID.
     * Delete Webhook Subscription
     * @param id Webhook subscription uuid.
     */
    public deleteWebhookSubscription(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteWebhookSubscription(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get webhook subscription by uuid 
     * Webhook Subscription Details
     * @param id Webhook subscription uuid
     */
    public detailsWebhookSubscriptionWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WebhookSubscriptionItemResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsWebhookSubscriptionWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Get webhook subscription by uuid 
     * Webhook Subscription Details
     * @param id Webhook subscription uuid
     */
    public detailsWebhookSubscription(id: string, _options?: PromiseConfigurationOptions): Promise<WebhookSubscriptionItemResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.detailsWebhookSubscription(id, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation fetches a paginated list of webhook subscriptions.
     * List Webhook Subscriptions
     */
    public listWebhookSubscriptionsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<WebhookSubscriptionListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWebhookSubscriptionsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * This operation fetches a paginated list of webhook subscriptions.
     * List Webhook Subscriptions
     */
    public listWebhookSubscriptions(_options?: PromiseConfigurationOptions): Promise<WebhookSubscriptionListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listWebhookSubscriptions(observableOptions);
        return result.toPromise();
    }

    /**
     * This operation updates the details of a webhook subscription.
     * Update Webhook Subscription
     * @param id Webhook subscription uuid
     * @param webhookSubscriptionPatchRequest
     */
    public updateWebhookSubscriptionWithHttpInfo(id: string, webhookSubscriptionPatchRequest: WebhookSubscriptionPatchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WebhookSubscriptionItemResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWebhookSubscriptionWithHttpInfo(id, webhookSubscriptionPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation updates the details of a webhook subscription.
     * Update Webhook Subscription
     * @param id Webhook subscription uuid
     * @param webhookSubscriptionPatchRequest
     */
    public updateWebhookSubscription(id: string, webhookSubscriptionPatchRequest: WebhookSubscriptionPatchRequest, _options?: PromiseConfigurationOptions): Promise<WebhookSubscriptionItemResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWebhookSubscription(id, webhookSubscriptionPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation regenerates the shared key for a specific webhook subscription identified by its UUID.
     * Update Webhook Subscription Shared Key
     * @param id Webhook subscription uuid
     */
    public updateWebhookSubscriptionSharedKeyWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WebhookSubscriptionSharedKeyResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWebhookSubscriptionSharedKeyWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * This operation regenerates the shared key for a specific webhook subscription identified by its UUID.
     * Update Webhook Subscription Shared Key
     * @param id Webhook subscription uuid
     */
    public updateWebhookSubscriptionSharedKey(id: string, _options?: PromiseConfigurationOptions): Promise<WebhookSubscriptionSharedKeyResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateWebhookSubscriptionSharedKey(id, observableOptions);
        return result.toPromise();
    }


}



