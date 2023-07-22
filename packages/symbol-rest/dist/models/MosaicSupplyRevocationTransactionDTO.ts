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

import { exists, mapValues } from '../runtime';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
import {
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';

/**
 * Transaction that allows the mosaic creator to revoke some balance from a user.
 * @export
 * @interface MosaicSupplyRevocationTransactionDTO
 */
export interface MosaicSupplyRevocationTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof MosaicSupplyRevocationTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof MosaicSupplyRevocationTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof MosaicSupplyRevocationTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof MosaicSupplyRevocationTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof MosaicSupplyRevocationTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof MosaicSupplyRevocationTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof MosaicSupplyRevocationTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof MosaicSupplyRevocationTransactionDTO
     */
    deadline: string;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof MosaicSupplyRevocationTransactionDTO
     */
    sourceAddress: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof MosaicSupplyRevocationTransactionDTO
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof MosaicSupplyRevocationTransactionDTO
     */
    amount: string;
}

/**
 * Check if a given object implements the MosaicSupplyRevocationTransactionDTO interface.
 */
export function instanceOfMosaicSupplyRevocationTransactionDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "sourceAddress" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function MosaicSupplyRevocationTransactionDTOFromJSON(json: any): MosaicSupplyRevocationTransactionDTO {
    return MosaicSupplyRevocationTransactionDTOFromJSONTyped(json, false);
}

export function MosaicSupplyRevocationTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicSupplyRevocationTransactionDTO {
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
        'sourceAddress': json['sourceAddress'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
    };
}

export function MosaicSupplyRevocationTransactionDTOToJSON(value?: MosaicSupplyRevocationTransactionDTO | null): any {
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
        'sourceAddress': value.sourceAddress,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
    };
}

