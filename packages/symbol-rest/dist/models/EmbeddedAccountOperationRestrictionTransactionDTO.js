import { AccountRestrictionFlagsEnumFromJSON, AccountRestrictionFlagsEnumToJSON, } from './AccountRestrictionFlagsEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
import { TransactionTypeEnumFromJSON, TransactionTypeEnumToJSON, } from './TransactionTypeEnum';
export function instanceOfEmbeddedAccountOperationRestrictionTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "restrictionFlags" in value;
    isInstance = isInstance && "restrictionAdditions" in value;
    isInstance = isInstance && "restrictionDeletions" in value;
    return isInstance;
}
export function EmbeddedAccountOperationRestrictionTransactionDTOFromJSON(json) {
    return EmbeddedAccountOperationRestrictionTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedAccountOperationRestrictionTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'restrictionFlags': AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
        'restrictionAdditions': (json['restrictionAdditions'].map(TransactionTypeEnumFromJSON)),
        'restrictionDeletions': (json['restrictionDeletions'].map(TransactionTypeEnumFromJSON)),
    };
}
export function EmbeddedAccountOperationRestrictionTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'restrictionFlags': AccountRestrictionFlagsEnumToJSON(value.restrictionFlags),
        'restrictionAdditions': (value.restrictionAdditions.map(TransactionTypeEnumToJSON)),
        'restrictionDeletions': (value.restrictionDeletions.map(TransactionTypeEnumToJSON)),
    };
}
