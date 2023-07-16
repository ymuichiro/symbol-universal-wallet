import { AccountRestrictionFlagsEnumFromJSON, AccountRestrictionFlagsEnumToJSON, } from './AccountRestrictionFlagsEnum';
import { TransactionTypeEnumFromJSON, TransactionTypeEnumToJSON, } from './TransactionTypeEnum';
export function instanceOfAccountOperationRestrictionTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "restrictionFlags" in value;
    isInstance = isInstance && "restrictionAdditions" in value;
    isInstance = isInstance && "restrictionDeletions" in value;
    return isInstance;
}
export function AccountOperationRestrictionTransactionBodyDTOFromJSON(json) {
    return AccountOperationRestrictionTransactionBodyDTOFromJSONTyped(json, false);
}
export function AccountOperationRestrictionTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'restrictionFlags': AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
        'restrictionAdditions': (json['restrictionAdditions'].map(TransactionTypeEnumFromJSON)),
        'restrictionDeletions': (json['restrictionDeletions'].map(TransactionTypeEnumFromJSON)),
    };
}
export function AccountOperationRestrictionTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'restrictionFlags': AccountRestrictionFlagsEnumToJSON(value.restrictionFlags),
        'restrictionAdditions': (value.restrictionAdditions.map(TransactionTypeEnumToJSON)),
        'restrictionDeletions': (value.restrictionDeletions.map(TransactionTypeEnumToJSON)),
    };
}
