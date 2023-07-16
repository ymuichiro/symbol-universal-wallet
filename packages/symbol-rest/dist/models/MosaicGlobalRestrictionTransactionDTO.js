import { MosaicRestrictionTypeEnumFromJSON, MosaicRestrictionTypeEnumToJSON, } from './MosaicRestrictionTypeEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfMosaicGlobalRestrictionTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "referenceMosaicId" in value;
    isInstance = isInstance && "restrictionKey" in value;
    isInstance = isInstance && "previousRestrictionValue" in value;
    isInstance = isInstance && "newRestrictionValue" in value;
    isInstance = isInstance && "previousRestrictionType" in value;
    isInstance = isInstance && "newRestrictionType" in value;
    return isInstance;
}
export function MosaicGlobalRestrictionTransactionDTOFromJSON(json) {
    return MosaicGlobalRestrictionTransactionDTOFromJSONTyped(json, false);
}
export function MosaicGlobalRestrictionTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'mosaicId': json['mosaicId'],
        'referenceMosaicId': json['referenceMosaicId'],
        'restrictionKey': json['restrictionKey'],
        'previousRestrictionValue': json['previousRestrictionValue'],
        'newRestrictionValue': json['newRestrictionValue'],
        'previousRestrictionType': MosaicRestrictionTypeEnumFromJSON(json['previousRestrictionType']),
        'newRestrictionType': MosaicRestrictionTypeEnumFromJSON(json['newRestrictionType']),
    };
}
export function MosaicGlobalRestrictionTransactionDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'mosaicId': value.mosaicId,
        'referenceMosaicId': value.referenceMosaicId,
        'restrictionKey': value.restrictionKey,
        'previousRestrictionValue': value.previousRestrictionValue,
        'newRestrictionValue': value.newRestrictionValue,
        'previousRestrictionType': MosaicRestrictionTypeEnumToJSON(value.previousRestrictionType),
        'newRestrictionType': MosaicRestrictionTypeEnumToJSON(value.newRestrictionType),
    };
}