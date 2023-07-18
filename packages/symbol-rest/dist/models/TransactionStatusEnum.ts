/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * List of status errors that can be returned via the status channel after announcing a transaction:
 * * Success
 * * Neutral
 * * Failure
 * * Failure_Core_Past_Deadline - Validation failed because the deadline passed.
 * * Failure_Core_Future_Deadline - Validation failed because the deadline is too far in the future.
 * * Failure_Core_Insufficient_Balance - Validation failed because the account has an insufficient balance.
 * * Failure_Core_Too_Many_Transactions - Validation failed because there are too many transactions in a block.
 * * Failure_Core_Nemesis_Account_Signed_After_Nemesis_Block - Validation failed because an entity originated from the nemesis account after the nemesis block.
 * * Failure_Core_Wrong_Network - Validation failed because the entity has the wrong network specified.
 * * Failure_Core_Invalid_Address - Validation failed because an address is invalid.
 * * Failure_Core_Invalid_Version - Validation failed because entity version is invalid.
 * * Failure_Core_Invalid_Transaction_Fee - Validation failed because a transaction fee is invalid.
 * * Failure_Core_Block_Harvester_Ineligible - Validation failed because a block was harvested by an ineligible harvester.
 * * Failure_Core_Zero_Address - Validation failed because an address is zero.
 * * Failure_Core_Zero_Public_Key - Validation failed because a public key is zero.
 * * Failure_Core_Nonzero_Internal_Padding - Validation failed because internal padding is nonzero.
 * * Failure_Core_Address_Collision - Validation failed because an address collision is detected.
 * * Failure_Core_Importance_Block_Mismatch - Validation failed because the block does not match the schema of an importance block.
 * * Failure_Core_Unexpected_Block_Type - Validation failed because the block type is unexpected.
 * * Failure_Core_Block_Explicit_Transactions_Hash_Mismatch - Validation failed because a block did not have the expected transactions hash at a specified height.
 * * Failure_Core_Invalid_Link_Action - Validation failed because link action is invalid.
 * * Failure_Core_Link_Already_Exists - Validation failed because main account is already linked to another account.
 * * Failure_Core_Inconsistent_Unlink_Data - Validation failed because unlink data is not consistent with existing account link.
 * * Failure_Core_Invalid_Link_Range - Validation failed because link range is invalid.
 * * Failure_Core_Too_Many_Links - Validation failed because main account has too many links of the specified type.
 * * Failure_Core_Link_Start_Epoch_Invalid - Validation failed because the start epoch is invalid.
 * * Failure_Hash_Already_Exists
 * * Failure_Signature_Not_Verifiable - Validation failed because the verification of the signature failed.
 * * Failure_AccountLink_Link_Already_Exists - Validation failed because main account is already linked to another account.
 * * Failure_AccountLink_Inconsistent_Unlink_Data - Validation failed because unlink data is not consistent with existing account link.
 * * Failure_AccountLink_Unknown_Link - Validation failed because main account is not linked to another account.
 * * Failure_AccountLink_Remote_Account_Ineligible - Validation failed because link is attempting to convert ineligible account to remote.
 * * Failure_AccountLink_Remote_Account_Signer_Prohibited - Validation failed because remote is not allowed to sign a transaction.
 * * Failure_AccountLink_Remote_Account_Participant_Prohibited - Validation failed because remote is not allowed to participate in the transaction.
 * * Failure_Aggregate_Too_Many_Transactions - Validation failed because aggregate has too many transactions.
 * * Failure_Aggregate_No_Transactions - Validation failed because aggregate does not have any transactions.
 * * Failure_Aggregate_Too_Many_Cosignatures - Validation failed because aggregate has too many cosignatures.
 * * Failure_Aggregate_Redundant_Cosignatures - Validation failed because redundant cosignatures are present.
 * * Failure_Aggregate_Ineligible_Cosignatories - Validation failed because at least one cosignatory is ineligible.
 * * Failure_Aggregate_Missing_Cosignatures - Validation failed because at least one required cosignature is missing.
 * * Failure_Aggregate_Transactions_Hash_Mismatch - Validation failed because the aggregate transactions hash does not match the calculated value.
 * * Failure_LockHash_Invalid_Mosaic_Id - Validation failed because lock does not allow the specified mosaic.
 * * Failure_LockHash_Invalid_Mosaic_Amount - Validation failed because lock does not allow the specified amount.
 * * Failure_LockHash_Hash_Already_Exists - Validation failed because hash is already present in cache.
 * * Failure_LockHash_Unknown_Hash - Validation failed because hash is not present in cache.
 * * Failure_LockHash_Inactive_Hash - Validation failed because hash is inactive.
 * * Failure_LockHash_Invalid_Duration - Validation failed because duration is too long.
 * * Failure_LockSecret_Invalid_Hash_Algorithm - Validation failed because hash algorithm for lock type secret is invalid.
 * * Failure_LockSecret_Hash_Already_Exists - Validation failed because hash is already present in cache.
 * * Failure_LockSecret_Proof_Size_Out_Of_Bounds - Validation failed because proof is too small or too large.
 * * Failure_LockSecret_Secret_Mismatch - Validation failed because secret does not match proof.
 * * Failure_LockSecret_Unknown_Composite_Key - Validation failed because composite key is unknown.
 * * Failure_LockSecret_Inactive_Secret - Validation failed because secret is inactive.
 * * Failure_LockSecret_Hash_Algorithm_Mismatch - Validation failed because hash algorithm does not match.
 * * Failure_LockSecret_Invalid_Duration - Validation failed because duration is too long.
 * * Failure_Metadata_Value_Too_Small - Validation failed because the metadata value is too small.
 * * Failure_Metadata_Value_Too_Large - Validation failed because the metadata value is too large.
 * * Failure_Metadata_Value_Size_Delta_Too_Large - Validation failed because the metadata value size delta is larger in magnitude than the value size.
 * * Failure_Metadata_Value_Size_Delta_Mismatch - Validation failed because the metadata value size delta does not match expected value based on the current state.
 * * Failure_Metadata_Value_Change_Irreversible - Validation failed because a metadata value change (truncation) is irreversible.
 * * Failure_Mosaic_Invalid_Duration - Validation failed because the duration has an invalid value.
 * * Failure_Mosaic_Invalid_Name - Validation failed because the name is invalid.
 * * Failure_Mosaic_Name_Id_Mismatch - Validation failed because the name and id don't match.
 * * Failure_Mosaic_Expired - Validation failed because the parent is expired.
 * * Failure_Mosaic_Owner_Conflict - Validation failed because the parent owner conflicts with the child owner.
 * * Failure_Mosaic_Id_Mismatch - Validation failed because the id is not the expected id generated from signer and nonce.
 * * Failure_Mosaic_Parent_Id_Conflict - Validation failed because the existing parent id does not match the supplied parent id.
 * * Failure_Mosaic_Invalid_Property - Validation failed because a mosaic property is invalid.
 * * Failure_Mosaic_Invalid_Flags - Validation failed because the mosaic flags are invalid.
 * * Failure_Mosaic_Invalid_Divisibility - Validation failed because the mosaic divisibility is invalid.
 * * Failure_Mosaic_Invalid_Supply_Change_Action - Validation failed because the mosaic supply change action is invalid.
 * * Failure_Mosaic_Invalid_Supply_Change_Amount - Validation failed because the mosaic supply change amount is invalid.
 * * Failure_Mosaic_Invalid_Id - Validation failed because the mosaic id is invalid.
 * * Failure_Mosaic_Modification_Disallowed - Validation failed because mosaic modification is not allowed.
 * * Failure_Mosaic_Modification_No_Changes - Validation failed because mosaic modification would not result in any changes.
 * * Failure_Mosaic_Supply_Immutable - Validation failed because the mosaic supply is immutable.
 * * Failure_Mosaic_Supply_Negative - Validation failed because the resulting mosaic supply is negative.
 * * Failure_Mosaic_Supply_Exceeded - Validation failed because the resulting mosaic supply exceeds the maximum allowed value.
 * * Failure_Mosaic_Non_Transferable - Validation failed because the mosaic is not transferable.
 * * Failure_Mosaic_Max_Mosaics_Exceeded - Validation failed because the credit of the mosaic would exceed the maximum of different mosaics an account is allowed to own.
 * * Failure_Mosaic_Required_Property_Flag_Unset - Validation failed because the mosaic has at least one required property flag unset.
 * * Failure_Multisig_Account_In_Both_Sets - Validation failed because account is specified to be both added and removed.
 * * Failure_Multisig_Multiple_Deletes - Validation failed because multiple removals are present.
 * * Failure_Multisig_Redundant_Modification - Validation failed because a modification is redundant.
 * * Failure_Multisig_Unknown_Multisig_Account - Validation failed because account is not in multisig cache.
 * * Failure_Multisig_Not_A_Cosignatory - Validation failed because account to be removed is not present.
 * * Failure_Multisig_Already_A_Cosignatory - Validation failed because account to be added is already a cosignatory.
 * * Failure_Multisig_Min_Setting_Out_Of_Range - Validation failed because new minimum settings are out of range.
 * * Failure_Multisig_Min_Setting_Larger_Than_Num_Cosignatories - Validation failed because min settings are larger than number of cosignatories.
 * * Failure_Multisig_Invalid_Modification_Action - Validation failed because the modification action is invalid.
 * * Failure_Multisig_Max_Cosigned_Accounts - Validation failed because the cosignatory already cosigns the maximum number of accounts.
 * * Failure_Multisig_Max_Cosignatories - Validation failed because the multisig account already has the maximum number of cosignatories.
 * * Failure_Multisig_Loop - Validation failed because a multisig loop is created.
 * * Failure_Multisig_Max_Multisig_Depth - Validation failed because the max multisig depth is exceeded.
 * * Failure_Multisig_Operation_Prohibited_By_Account - Validation failed because an operation is not permitted by a multisig account.
 * * Failure_Namespace_Invalid_Duration - Validation failed because the duration has an invalid value.
 * * Failure_Namespace_Invalid_Name - Validation failed because the name is invalid.
 * * Failure_Namespace_Name_Id_Mismatch - Validation failed because the name and id don't match.
 * * Failure_Namespace_Expired - Validation failed because the parent is expired.
 * * Failure_Namespace_Owner_Conflict - Validation failed because the parent owner conflicts with the child owner.
 * * Failure_Namespace_Id_Mismatch - Validation failed because the id is not the expected id generated from signer and nonce.
 * * Failure_Namespace_Invalid_Registration_Type - Validation failed because the namespace registration type is invalid.
 * * Failure_Namespace_Root_Name_Reserved - Validation failed because the root namespace has a reserved name.
 * * Failure_Namespace_Too_Deep - Validation failed because the resulting namespace would exceed the maximum allowed namespace depth.
 * * Failure_Namespace_Unknown_Parent - Validation failed because the namespace parent is unknown.
 * * Failure_Namespace_Already_Exists - Validation failed because the namespace already exists.
 * * Failure_Namespace_Already_Active - Validation failed because the namespace is already active.
 * * Failure_Namespace_Eternal_After_Nemesis_Block - Validation failed because an eternal namespace was received after the nemesis block.
 * * Failure_Namespace_Max_Children_Exceeded - Validation failed because the maximum number of children for a root namespace was exceeded.
 * * Failure_Namespace_Alias_Invalid_Action - Validation failed because alias action is invalid.
 * * Failure_Namespace_Unknown - Validation failed because namespace does not exist.
 * * Failure_Namespace_Alias_Already_Exists - Validation failed because namespace is already linked to an alias.
 * * Failure_Namespace_Unknown_Alias - Validation failed because namespace is not linked to an alias.
 * * Failure_Namespace_Alias_Inconsistent_Unlink_Type - Validation failed because unlink type is not consistent with existing alias.
 * * Failure_Namespace_Alias_Inconsistent_Unlink_Data - Validation failed because unlink data is not consistent with existing alias.
 * * Failure_Namespace_Alias_Invalid_Address - Validation failed because aliased address is invalid.
 * * Failure_RestrictionAccount_Invalid_Restriction_Flags - Validation failed because the account restriction flags are invalid.
 * * Failure_RestrictionAccount_Invalid_Modification_Action - Validation failed because a modification action is invalid.
 * * Failure_RestrictionAccount_Invalid_Modification_Address - Validation failed because a modification address is invalid.
 * * Failure_RestrictionAccount_Modification_Operation_Type_Incompatible - Validation failed because the operation type is incompatible. *Note*: This indicates that the existing restrictions have a different operation type than that specified in the notification.
 * * Failure_RestrictionAccount_Redundant_Modification - Validation failed because a modification is redundant.
 * * Failure_RestrictionAccount_Invalid_Modification - Validation failed because a value is not in the container.
 * * Failure_RestrictionAccount_Modification_Count_Exceeded - Validation failed because the transaction has too many modifications.
 * * Failure_RestrictionAccount_No_Modifications - Validation failed because the transaction has no modifications.
 * * Failure_RestrictionAccount_Values_Count_Exceeded - Validation failed because the resulting account restriction has too many values.
 * * Failure_RestrictionAccount_Invalid_Value - Validation failed because the account restriction value is invalid.
 * * Failure_RestrictionAccount_Address_Interaction_Prohibited - Validation failed because the addresses involved in the transaction are not allowed to interact.
 * * Failure_RestrictionAccount_Mosaic_Transfer_Prohibited - Validation failed because the mosaic transfer is prohibited by the recipient.
 * * Failure_RestrictionAccount_Operation_Type_Prohibited - Validation failed because the operation type is not allowed to be initiated by the signer.
 * * Failure_RestrictionMosaic_Invalid_Restriction_Type - Validation failed because the mosaic restriction type is invalid.
 * * Failure_RestrictionMosaic_Previous_Value_Mismatch - Validation failed because specified previous value does not match current value.
 * * Failure_RestrictionMosaic_Previous_Value_Must_Be_Zero - Validation failed because specified previous value is nonzero.
 * * Failure_RestrictionMosaic_Max_Restrictions_Exceeded - Validation failed because the maximum number of restrictions would be exceeded.
 * * Failure_RestrictionMosaic_Cannot_Delete_Nonexistent_Restriction - Validation failed because nonexistent restriction cannot be deleted.
 * * Failure_RestrictionMosaic_Unknown_Global_Restriction - Validation failed because required global restriction does not exist.
 * * Failure_RestrictionMosaic_Invalid_Global_Restriction - Validation failed because mosaic has invalid global restriction.
 * * Failure_RestrictionMosaic_Account_Unauthorized - Validation failed because account lacks proper permissions to move mosaic.
 * * Failure_Transfer_Message_Too_Large - Validation failed because the message is too large.
 * * Failure_Transfer_Out_Of_Order_Mosaics - Validation failed because mosaics are out of order.
 * * Failure_Chain_Unlinked - Validation failed because a block was received that did not link with the existing chain.
 * * Failure_Chain_Block_Not_Hit - Validation failed because a block was received that is not a hit.
 * * Failure_Chain_Block_Inconsistent_State_Hash - Validation failed because a block was received that has an inconsistent state hash.
 * * Failure_Chain_Block_Inconsistent_Receipts_Hash - Validation failed because a block was received that has an inconsistent receipts hash.
 * * Failure_Chain_Block_Invalid_Vrf_Proof - Validation failed because the Vrf proof is invalid.
 * * Failure_Chain_Block_Unknown_Signer - Validation failed because the block signer is unknown.
 * * Failure_Chain_Unconfirmed_Cache_Too_Full - Validation failed because the unconfirmed cache is too full.
 * * Failure_Consumer_Empty_Input - Validation failed because the consumer input is empty.
 * * Failure_Consumer_Block_Transactions_Hash_Mismatch - Validation failed because the block transactions hash does not match the calculated value.
 * * Neutral_Consumer_Hash_In_Recency_Cache - Validation failed because an entity hash is present in the recency cache.
 * * Failure_Consumer_Remote_Chain_Too_Many_Blocks - Validation failed because the chain part has too many blocks.
 * * Failure_Consumer_Remote_Chain_Improper_Link - Validation failed because the chain is internally improperly linked.
 * * Failure_Consumer_Remote_Chain_Duplicate_Transactions - Validation failed because the chain part contains duplicate transactions.
 * * Failure_Consumer_Remote_Chain_Unlinked - Validation failed because the chain part does not link to the current chain.
 * * Failure_Consumer_Remote_Chain_Difficulties_Mismatch - Validation failed because the remote chain difficulties do not match the calculated difficulties.
 * * Failure_Consumer_Remote_Chain_Score_Not_Better - Validation failed because the remote chain score is not better.
 * * Failure_Consumer_Remote_Chain_Too_Far_Behind - Validation failed because the remote chain is too far behind.
 * * Failure_Consumer_Remote_Chain_Too_Far_In_Future - Validation failed because the remote chain timestamp is too far in the future.
 * * Failure_Consumer_Batch_Signature_Not_Verifiable - Validation failed because the verification of the signature failed during a batch operation.
 * * Failure_Consumer_Remote_Chain_Improper_Importance_Link - Validation failed because the remote chain has an improper importance link.
 * * Failure_Extension_Partial_Transaction_Cache_Prune - Validation failed because the partial transaction was pruned from the temporal cache.
 * * Failure_Extension_Partial_Transaction_Dependency_Removed - Validation failed because the partial transaction was pruned from the temporal cache due to its dependency being removed.
 * * Failure_Extension_Read_Rate_Limit_Exceeded - Validation failed because socket read rate limit was exceeded.
 * @export
 */
export const TransactionStatusEnum = {
    Success: 'Success',
    Neutral: 'Neutral',
    Failure: 'Failure',
    FailureCorePastDeadline: 'Failure_Core_Past_Deadline',
    FailureCoreFutureDeadline: 'Failure_Core_Future_Deadline',
    FailureCoreInsufficientBalance: 'Failure_Core_Insufficient_Balance',
    FailureCoreTooManyTransactions: 'Failure_Core_Too_Many_Transactions',
    FailureCoreNemesisAccountSignedAfterNemesisBlock: 'Failure_Core_Nemesis_Account_Signed_After_Nemesis_Block',
    FailureCoreWrongNetwork: 'Failure_Core_Wrong_Network',
    FailureCoreInvalidAddress: 'Failure_Core_Invalid_Address',
    FailureCoreInvalidVersion: 'Failure_Core_Invalid_Version',
    FailureCoreInvalidTransactionFee: 'Failure_Core_Invalid_Transaction_Fee',
    FailureCoreBlockHarvesterIneligible: 'Failure_Core_Block_Harvester_Ineligible',
    FailureCoreZeroAddress: 'Failure_Core_Zero_Address',
    FailureCoreZeroPublicKey: 'Failure_Core_Zero_Public_Key',
    FailureCoreNonzeroInternalPadding: 'Failure_Core_Nonzero_Internal_Padding',
    FailureCoreAddressCollision: 'Failure_Core_Address_Collision',
    FailureCoreImportanceBlockMismatch: 'Failure_Core_Importance_Block_Mismatch',
    FailureCoreUnexpectedBlockType: 'Failure_Core_Unexpected_Block_Type',
    FailureCoreBlockExplicitTransactionsHashMismatch: 'Failure_Core_Block_Explicit_Transactions_Hash_Mismatch',
    FailureCoreInvalidLinkAction: 'Failure_Core_Invalid_Link_Action',
    FailureCoreLinkAlreadyExists: 'Failure_Core_Link_Already_Exists',
    FailureCoreInconsistentUnlinkData: 'Failure_Core_Inconsistent_Unlink_Data',
    FailureCoreInvalidLinkRange: 'Failure_Core_Invalid_Link_Range',
    FailureCoreTooManyLinks: 'Failure_Core_Too_Many_Links',
    FailureCoreLinkStartEpochInvalid: 'Failure_Core_Link_Start_Epoch_Invalid',
    FailureHashAlreadyExists: 'Failure_Hash_Already_Exists',
    FailureSignatureNotVerifiable: 'Failure_Signature_Not_Verifiable',
    FailureAccountLinkLinkAlreadyExists: 'Failure_AccountLink_Link_Already_Exists',
    FailureAccountLinkInconsistentUnlinkData: 'Failure_AccountLink_Inconsistent_Unlink_Data',
    FailureAccountLinkUnknownLink: 'Failure_AccountLink_Unknown_Link',
    FailureAccountLinkRemoteAccountIneligible: 'Failure_AccountLink_Remote_Account_Ineligible',
    FailureAccountLinkRemoteAccountSignerProhibited: 'Failure_AccountLink_Remote_Account_Signer_Prohibited',
    FailureAccountLinkRemoteAccountParticipantProhibited: 'Failure_AccountLink_Remote_Account_Participant_Prohibited',
    FailureAggregateTooManyTransactions: 'Failure_Aggregate_Too_Many_Transactions',
    FailureAggregateNoTransactions: 'Failure_Aggregate_No_Transactions',
    FailureAggregateTooManyCosignatures: 'Failure_Aggregate_Too_Many_Cosignatures',
    FailureAggregateRedundantCosignatures: 'Failure_Aggregate_Redundant_Cosignatures',
    FailureAggregateIneligibleCosignatories: 'Failure_Aggregate_Ineligible_Cosignatories',
    FailureAggregateMissingCosignatures: 'Failure_Aggregate_Missing_Cosignatures',
    FailureAggregateTransactionsHashMismatch: 'Failure_Aggregate_Transactions_Hash_Mismatch',
    FailureLockHashInvalidMosaicId: 'Failure_LockHash_Invalid_Mosaic_Id',
    FailureLockHashInvalidMosaicAmount: 'Failure_LockHash_Invalid_Mosaic_Amount',
    FailureLockHashHashAlreadyExists: 'Failure_LockHash_Hash_Already_Exists',
    FailureLockHashUnknownHash: 'Failure_LockHash_Unknown_Hash',
    FailureLockHashInactiveHash: 'Failure_LockHash_Inactive_Hash',
    FailureLockHashInvalidDuration: 'Failure_LockHash_Invalid_Duration',
    FailureLockSecretInvalidHashAlgorithm: 'Failure_LockSecret_Invalid_Hash_Algorithm',
    FailureLockSecretHashAlreadyExists: 'Failure_LockSecret_Hash_Already_Exists',
    FailureLockSecretProofSizeOutOfBounds: 'Failure_LockSecret_Proof_Size_Out_Of_Bounds',
    FailureLockSecretSecretMismatch: 'Failure_LockSecret_Secret_Mismatch',
    FailureLockSecretUnknownCompositeKey: 'Failure_LockSecret_Unknown_Composite_Key',
    FailureLockSecretInactiveSecret: 'Failure_LockSecret_Inactive_Secret',
    FailureLockSecretHashAlgorithmMismatch: 'Failure_LockSecret_Hash_Algorithm_Mismatch',
    FailureLockSecretInvalidDuration: 'Failure_LockSecret_Invalid_Duration',
    FailureMetadataValueTooSmall: 'Failure_Metadata_Value_Too_Small',
    FailureMetadataValueTooLarge: 'Failure_Metadata_Value_Too_Large',
    FailureMetadataValueSizeDeltaTooLarge: 'Failure_Metadata_Value_Size_Delta_Too_Large',
    FailureMetadataValueSizeDeltaMismatch: 'Failure_Metadata_Value_Size_Delta_Mismatch',
    FailureMetadataValueChangeIrreversible: 'Failure_Metadata_Value_Change_Irreversible',
    FailureMosaicInvalidDuration: 'Failure_Mosaic_Invalid_Duration',
    FailureMosaicInvalidName: 'Failure_Mosaic_Invalid_Name',
    FailureMosaicNameIdMismatch: 'Failure_Mosaic_Name_Id_Mismatch',
    FailureMosaicExpired: 'Failure_Mosaic_Expired',
    FailureMosaicOwnerConflict: 'Failure_Mosaic_Owner_Conflict',
    FailureMosaicIdMismatch: 'Failure_Mosaic_Id_Mismatch',
    FailureMosaicParentIdConflict: 'Failure_Mosaic_Parent_Id_Conflict',
    FailureMosaicInvalidProperty: 'Failure_Mosaic_Invalid_Property',
    FailureMosaicInvalidFlags: 'Failure_Mosaic_Invalid_Flags',
    FailureMosaicInvalidDivisibility: 'Failure_Mosaic_Invalid_Divisibility',
    FailureMosaicInvalidSupplyChangeAction: 'Failure_Mosaic_Invalid_Supply_Change_Action',
    FailureMosaicInvalidSupplyChangeAmount: 'Failure_Mosaic_Invalid_Supply_Change_Amount',
    FailureMosaicInvalidId: 'Failure_Mosaic_Invalid_Id',
    FailureMosaicModificationDisallowed: 'Failure_Mosaic_Modification_Disallowed',
    FailureMosaicModificationNoChanges: 'Failure_Mosaic_Modification_No_Changes',
    FailureMosaicSupplyImmutable: 'Failure_Mosaic_Supply_Immutable',
    FailureMosaicSupplyNegative: 'Failure_Mosaic_Supply_Negative',
    FailureMosaicSupplyExceeded: 'Failure_Mosaic_Supply_Exceeded',
    FailureMosaicNonTransferable: 'Failure_Mosaic_Non_Transferable',
    FailureMosaicMaxMosaicsExceeded: 'Failure_Mosaic_Max_Mosaics_Exceeded',
    FailureMosaicRequiredPropertyFlagUnset: 'Failure_Mosaic_Required_Property_Flag_Unset',
    FailureMultisigAccountInBothSets: 'Failure_Multisig_Account_In_Both_Sets',
    FailureMultisigMultipleDeletes: 'Failure_Multisig_Multiple_Deletes',
    FailureMultisigRedundantModification: 'Failure_Multisig_Redundant_Modification',
    FailureMultisigUnknownMultisigAccount: 'Failure_Multisig_Unknown_Multisig_Account',
    FailureMultisigNotACosignatory: 'Failure_Multisig_Not_A_Cosignatory',
    FailureMultisigAlreadyACosignatory: 'Failure_Multisig_Already_A_Cosignatory',
    FailureMultisigMinSettingOutOfRange: 'Failure_Multisig_Min_Setting_Out_Of_Range',
    FailureMultisigMinSettingLargerThanNumCosignatories: 'Failure_Multisig_Min_Setting_Larger_Than_Num_Cosignatories',
    FailureMultisigInvalidModificationAction: 'Failure_Multisig_Invalid_Modification_Action',
    FailureMultisigMaxCosignedAccounts: 'Failure_Multisig_Max_Cosigned_Accounts',
    FailureMultisigMaxCosignatories: 'Failure_Multisig_Max_Cosignatories',
    FailureMultisigLoop: 'Failure_Multisig_Loop',
    FailureMultisigMaxMultisigDepth: 'Failure_Multisig_Max_Multisig_Depth',
    FailureMultisigOperationProhibitedByAccount: 'Failure_Multisig_Operation_Prohibited_By_Account',
    FailureNamespaceInvalidDuration: 'Failure_Namespace_Invalid_Duration',
    FailureNamespaceInvalidName: 'Failure_Namespace_Invalid_Name',
    FailureNamespaceNameIdMismatch: 'Failure_Namespace_Name_Id_Mismatch',
    FailureNamespaceExpired: 'Failure_Namespace_Expired',
    FailureNamespaceOwnerConflict: 'Failure_Namespace_Owner_Conflict',
    FailureNamespaceIdMismatch: 'Failure_Namespace_Id_Mismatch',
    FailureNamespaceInvalidRegistrationType: 'Failure_Namespace_Invalid_Registration_Type',
    FailureNamespaceRootNameReserved: 'Failure_Namespace_Root_Name_Reserved',
    FailureNamespaceTooDeep: 'Failure_Namespace_Too_Deep',
    FailureNamespaceUnknownParent: 'Failure_Namespace_Unknown_Parent',
    FailureNamespaceAlreadyExists: 'Failure_Namespace_Already_Exists',
    FailureNamespaceAlreadyActive: 'Failure_Namespace_Already_Active',
    FailureNamespaceEternalAfterNemesisBlock: 'Failure_Namespace_Eternal_After_Nemesis_Block',
    FailureNamespaceMaxChildrenExceeded: 'Failure_Namespace_Max_Children_Exceeded',
    FailureNamespaceAliasInvalidAction: 'Failure_Namespace_Alias_Invalid_Action',
    FailureNamespaceUnknown: 'Failure_Namespace_Unknown',
    FailureNamespaceAliasAlreadyExists: 'Failure_Namespace_Alias_Already_Exists',
    FailureNamespaceUnknownAlias: 'Failure_Namespace_Unknown_Alias',
    FailureNamespaceAliasInconsistentUnlinkType: 'Failure_Namespace_Alias_Inconsistent_Unlink_Type',
    FailureNamespaceAliasInconsistentUnlinkData: 'Failure_Namespace_Alias_Inconsistent_Unlink_Data',
    FailureNamespaceAliasInvalidAddress: 'Failure_Namespace_Alias_Invalid_Address',
    FailureRestrictionAccountInvalidRestrictionFlags: 'Failure_RestrictionAccount_Invalid_Restriction_Flags',
    FailureRestrictionAccountInvalidModificationAction: 'Failure_RestrictionAccount_Invalid_Modification_Action',
    FailureRestrictionAccountInvalidModificationAddress: 'Failure_RestrictionAccount_Invalid_Modification_Address',
    FailureRestrictionAccountModificationOperationTypeIncompatible: 'Failure_RestrictionAccount_Modification_Operation_Type_Incompatible',
    FailureRestrictionAccountRedundantModification: 'Failure_RestrictionAccount_Redundant_Modification',
    FailureRestrictionAccountInvalidModification: 'Failure_RestrictionAccount_Invalid_Modification',
    FailureRestrictionAccountModificationCountExceeded: 'Failure_RestrictionAccount_Modification_Count_Exceeded',
    FailureRestrictionAccountNoModifications: 'Failure_RestrictionAccount_No_Modifications',
    FailureRestrictionAccountValuesCountExceeded: 'Failure_RestrictionAccount_Values_Count_Exceeded',
    FailureRestrictionAccountInvalidValue: 'Failure_RestrictionAccount_Invalid_Value',
    FailureRestrictionAccountAddressInteractionProhibited: 'Failure_RestrictionAccount_Address_Interaction_Prohibited',
    FailureRestrictionAccountMosaicTransferProhibited: 'Failure_RestrictionAccount_Mosaic_Transfer_Prohibited',
    FailureRestrictionAccountOperationTypeProhibited: 'Failure_RestrictionAccount_Operation_Type_Prohibited',
    FailureRestrictionMosaicInvalidRestrictionType: 'Failure_RestrictionMosaic_Invalid_Restriction_Type',
    FailureRestrictionMosaicPreviousValueMismatch: 'Failure_RestrictionMosaic_Previous_Value_Mismatch',
    FailureRestrictionMosaicPreviousValueMustBeZero: 'Failure_RestrictionMosaic_Previous_Value_Must_Be_Zero',
    FailureRestrictionMosaicMaxRestrictionsExceeded: 'Failure_RestrictionMosaic_Max_Restrictions_Exceeded',
    FailureRestrictionMosaicCannotDeleteNonexistentRestriction: 'Failure_RestrictionMosaic_Cannot_Delete_Nonexistent_Restriction',
    FailureRestrictionMosaicUnknownGlobalRestriction: 'Failure_RestrictionMosaic_Unknown_Global_Restriction',
    FailureRestrictionMosaicInvalidGlobalRestriction: 'Failure_RestrictionMosaic_Invalid_Global_Restriction',
    FailureRestrictionMosaicAccountUnauthorized: 'Failure_RestrictionMosaic_Account_Unauthorized',
    FailureTransferMessageTooLarge: 'Failure_Transfer_Message_Too_Large',
    FailureTransferOutOfOrderMosaics: 'Failure_Transfer_Out_Of_Order_Mosaics',
    FailureChainUnlinked: 'Failure_Chain_Unlinked',
    FailureChainBlockNotHit: 'Failure_Chain_Block_Not_Hit',
    FailureChainBlockInconsistentStateHash: 'Failure_Chain_Block_Inconsistent_State_Hash',
    FailureChainBlockInconsistentReceiptsHash: 'Failure_Chain_Block_Inconsistent_Receipts_Hash',
    FailureChainBlockInvalidVrfProof: 'Failure_Chain_Block_Invalid_Vrf_Proof',
    FailureChainBlockUnknownSigner: 'Failure_Chain_Block_Unknown_Signer',
    FailureChainUnconfirmedCacheTooFull: 'Failure_Chain_Unconfirmed_Cache_Too_Full',
    FailureConsumerEmptyInput: 'Failure_Consumer_Empty_Input',
    FailureConsumerBlockTransactionsHashMismatch: 'Failure_Consumer_Block_Transactions_Hash_Mismatch',
    NeutralConsumerHashInRecencyCache: 'Neutral_Consumer_Hash_In_Recency_Cache',
    FailureConsumerRemoteChainTooManyBlocks: 'Failure_Consumer_Remote_Chain_Too_Many_Blocks',
    FailureConsumerRemoteChainImproperLink: 'Failure_Consumer_Remote_Chain_Improper_Link',
    FailureConsumerRemoteChainDuplicateTransactions: 'Failure_Consumer_Remote_Chain_Duplicate_Transactions',
    FailureConsumerRemoteChainUnlinked: 'Failure_Consumer_Remote_Chain_Unlinked',
    FailureConsumerRemoteChainDifficultiesMismatch: 'Failure_Consumer_Remote_Chain_Difficulties_Mismatch',
    FailureConsumerRemoteChainScoreNotBetter: 'Failure_Consumer_Remote_Chain_Score_Not_Better',
    FailureConsumerRemoteChainTooFarBehind: 'Failure_Consumer_Remote_Chain_Too_Far_Behind',
    FailureConsumerRemoteChainTooFarInFuture: 'Failure_Consumer_Remote_Chain_Too_Far_In_Future',
    FailureConsumerBatchSignatureNotVerifiable: 'Failure_Consumer_Batch_Signature_Not_Verifiable',
    FailureConsumerRemoteChainImproperImportanceLink: 'Failure_Consumer_Remote_Chain_Improper_Importance_Link',
    FailureExtensionPartialTransactionCachePrune: 'Failure_Extension_Partial_Transaction_Cache_Prune',
    FailureExtensionPartialTransactionDependencyRemoved: 'Failure_Extension_Partial_Transaction_Dependency_Removed',
    FailureExtensionReadRateLimitExceeded: 'Failure_Extension_Read_Rate_Limit_Exceeded'
} as const;
export type TransactionStatusEnum = typeof TransactionStatusEnum[keyof typeof TransactionStatusEnum];


export function TransactionStatusEnumFromJSON(json: any): TransactionStatusEnum {
    return TransactionStatusEnumFromJSONTyped(json, false);
}

export function TransactionStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionStatusEnum {
    return json as TransactionStatusEnum;
}

export function TransactionStatusEnumToJSON(value?: TransactionStatusEnum | null): any {
    return value as any;
}

