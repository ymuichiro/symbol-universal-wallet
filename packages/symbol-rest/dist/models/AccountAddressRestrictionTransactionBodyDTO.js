import { AccountRestrictionFlagsEnumFromJSON, AccountRestrictionFlagsEnumToJSON, } from './AccountRestrictionFlagsEnum';
export function instanceOfAccountAddressRestrictionTransactionBodyDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "restrictionFlags" in value;
    isInstance = isInstance && "restrictionAdditions" in value;
    isInstance = isInstance && "restrictionDeletions" in value;
    return isInstance;
}
export function AccountAddressRestrictionTransactionBodyDTOFromJSON(json) {
    return AccountAddressRestrictionTransactionBodyDTOFromJSONTyped(json, false);
}
export function AccountAddressRestrictionTransactionBodyDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'restrictionFlags': AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
        'restrictionAdditions': json['restrictionAdditions'],
        'restrictionDeletions': json['restrictionDeletions'],
    };
}
export function AccountAddressRestrictionTransactionBodyDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'restrictionFlags': AccountRestrictionFlagsEnumToJSON(value.restrictionFlags),
        'restrictionAdditions': value.restrictionAdditions,
        'restrictionDeletions': value.restrictionDeletions,
    };
}
