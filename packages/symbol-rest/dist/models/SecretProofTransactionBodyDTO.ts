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
import type { LockHashAlgorithmEnum } from './LockHashAlgorithmEnum';
import {
    LockHashAlgorithmEnumFromJSON,
    LockHashAlgorithmEnumFromJSONTyped,
    LockHashAlgorithmEnumToJSON,
} from './LockHashAlgorithmEnum';

/**
 * 
 * @export
 * @interface SecretProofTransactionBodyDTO
 */
export interface SecretProofTransactionBodyDTO {
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof SecretProofTransactionBodyDTO
     */
    recipientAddress: string;
    /**
     * 
     * @type {string}
     * @memberof SecretProofTransactionBodyDTO
     */
    secret: string;
    /**
     * 
     * @type {LockHashAlgorithmEnum}
     * @memberof SecretProofTransactionBodyDTO
     */
    hashAlgorithm: LockHashAlgorithmEnum;
    /**
     * Original random set of bytes.
     * @type {string}
     * @memberof SecretProofTransactionBodyDTO
     */
    proof: string;
}

/**
 * Check if a given object implements the SecretProofTransactionBodyDTO interface.
 */
export function instanceOfSecretProofTransactionBodyDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "hashAlgorithm" in value;
    isInstance = isInstance && "proof" in value;

    return isInstance;
}

export function SecretProofTransactionBodyDTOFromJSON(json: any): SecretProofTransactionBodyDTO {
    return SecretProofTransactionBodyDTOFromJSONTyped(json, false);
}

export function SecretProofTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretProofTransactionBodyDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recipientAddress': json['recipientAddress'],
        'secret': json['secret'],
        'hashAlgorithm': LockHashAlgorithmEnumFromJSON(json['hashAlgorithm']),
        'proof': json['proof'],
    };
}

export function SecretProofTransactionBodyDTOToJSON(value?: SecretProofTransactionBodyDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'recipientAddress': value.recipientAddress,
        'secret': value.secret,
        'hashAlgorithm': LockHashAlgorithmEnumToJSON(value.hashAlgorithm),
        'proof': value.proof,
    };
}

