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
 * Transaction to create or modify a multisig account.
 * @export
 * @interface MultisigAccountModificationTransactionDTO
 */
export interface MultisigAccountModificationTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof MultisigAccountModificationTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof MultisigAccountModificationTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof MultisigAccountModificationTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof MultisigAccountModificationTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof MultisigAccountModificationTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof MultisigAccountModificationTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof MultisigAccountModificationTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof MultisigAccountModificationTransactionDTO
     */
    deadline: string;
    /**
     * Number of signatures needed to remove a cosignatory.
     * If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories.
     * @type {number}
     * @memberof MultisigAccountModificationTransactionDTO
     */
    minRemovalDelta: number;
    /**
     * Number of signatures needed to approve a transaction.
     * If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories.
     * @type {number}
     * @memberof MultisigAccountModificationTransactionDTO
     */
    minApprovalDelta: number;
    /**
     * Array of cosignatory accounts to add.
     * @type {Array<string>}
     * @memberof MultisigAccountModificationTransactionDTO
     */
    addressAdditions: Array<string>;
    /**
     * Array of cosignatory accounts to delete.
     * @type {Array<string>}
     * @memberof MultisigAccountModificationTransactionDTO
     */
    addressDeletions: Array<string>;
}

/**
 * Check if a given object implements the MultisigAccountModificationTransactionDTO interface.
 */
export function instanceOfMultisigAccountModificationTransactionDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "minRemovalDelta" in value;
    isInstance = isInstance && "minApprovalDelta" in value;
    isInstance = isInstance && "addressAdditions" in value;
    isInstance = isInstance && "addressDeletions" in value;

    return isInstance;
}

export function MultisigAccountModificationTransactionDTOFromJSON(json: any): MultisigAccountModificationTransactionDTO {
    return MultisigAccountModificationTransactionDTOFromJSONTyped(json, false);
}

export function MultisigAccountModificationTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultisigAccountModificationTransactionDTO {
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
        'minRemovalDelta': json['minRemovalDelta'],
        'minApprovalDelta': json['minApprovalDelta'],
        'addressAdditions': json['addressAdditions'],
        'addressDeletions': json['addressDeletions'],
    };
}

export function MultisigAccountModificationTransactionDTOToJSON(value?: MultisigAccountModificationTransactionDTO | null): any {
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
        'minRemovalDelta': value.minRemovalDelta,
        'minApprovalDelta': value.minApprovalDelta,
        'addressAdditions': value.addressAdditions,
        'addressDeletions': value.addressDeletions,
    };
}

