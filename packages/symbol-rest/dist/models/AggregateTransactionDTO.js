import { exists } from '../runtime';
import { CosignatureDTOFromJSON, CosignatureDTOToJSON, } from './CosignatureDTO';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfAggregateTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "transactionsHash" in value;
    return isInstance;
}
export function AggregateTransactionDTOFromJSON(json) {
    return AggregateTransactionDTOFromJSONTyped(json, false);
}
export function AggregateTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
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
        'transactionsHash': json['transactionsHash'],
        'cosignatures': !exists(json, 'cosignatures') ? undefined : (json['cosignatures'].map(CosignatureDTOFromJSON)),
    };
}
export function AggregateTransactionDTOToJSON(value) {
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
        'transactionsHash': value.transactionsHash,
        'cosignatures': value.cosignatures === undefined ? undefined : (value.cosignatures.map(CosignatureDTOToJSON)),
    };
}
