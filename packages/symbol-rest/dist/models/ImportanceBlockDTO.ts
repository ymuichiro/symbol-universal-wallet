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
 * 
 * @export
 * @interface ImportanceBlockDTO
 */
export interface ImportanceBlockDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof ImportanceBlockDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof ImportanceBlockDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof ImportanceBlockDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof ImportanceBlockDTO
     */
    type: number;
    /**
     * Height of the blockchain.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    height: string;
    /**
     * Number of milliseconds elapsed since the creation of the nemesis block. This value can be converted to epoch time by adding the network's 'epochAdjustment'.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    timestamp: string;
    /**
     * Determines how hard is to harvest a new block, based on previous blocks.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    difficulty: string;
    /**
     * 32-bytes VRF proof gamma.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    proofGamma: string;
    /**
     * 16-bytes VRF proof verification hash.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    proofVerificationHash: string;
    /**
     * 32-bytes VRF proof scalar.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    proofScalar: string;
    /**
     * 
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    previousBlockHash: string;
    /**
     * 
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    transactionsHash: string;
    /**
     * 
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    receiptsHash: string;
    /**
     * 
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    stateHash: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    beneficiaryAddress: string;
    /**
     * Fee multiplier applied to transactions contained in block.
     * @type {number}
     * @memberof ImportanceBlockDTO
     */
    feeMultiplier: number;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof ImportanceBlockDTO
     */
    votingEligibleAccountsCount: number;
    /**
     * A number that allows uint 64 values represented with a string.
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    harvestingEligibleAccountsCount: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    totalVotingBalance: string;
    /**
     * 
     * @type {string}
     * @memberof ImportanceBlockDTO
     */
    previousImportanceBlockHash: string;
}

/**
 * Check if a given object implements the ImportanceBlockDTO interface.
 */
export function instanceOfImportanceBlockDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "difficulty" in value;
    isInstance = isInstance && "proofGamma" in value;
    isInstance = isInstance && "proofVerificationHash" in value;
    isInstance = isInstance && "proofScalar" in value;
    isInstance = isInstance && "previousBlockHash" in value;
    isInstance = isInstance && "transactionsHash" in value;
    isInstance = isInstance && "receiptsHash" in value;
    isInstance = isInstance && "stateHash" in value;
    isInstance = isInstance && "beneficiaryAddress" in value;
    isInstance = isInstance && "feeMultiplier" in value;
    isInstance = isInstance && "votingEligibleAccountsCount" in value;
    isInstance = isInstance && "harvestingEligibleAccountsCount" in value;
    isInstance = isInstance && "totalVotingBalance" in value;
    isInstance = isInstance && "previousImportanceBlockHash" in value;

    return isInstance;
}

export function ImportanceBlockDTOFromJSON(json: any): ImportanceBlockDTO {
    return ImportanceBlockDTOFromJSONTyped(json, false);
}

export function ImportanceBlockDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportanceBlockDTO {
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
        'height': json['height'],
        'timestamp': json['timestamp'],
        'difficulty': json['difficulty'],
        'proofGamma': json['proofGamma'],
        'proofVerificationHash': json['proofVerificationHash'],
        'proofScalar': json['proofScalar'],
        'previousBlockHash': json['previousBlockHash'],
        'transactionsHash': json['transactionsHash'],
        'receiptsHash': json['receiptsHash'],
        'stateHash': json['stateHash'],
        'beneficiaryAddress': json['beneficiaryAddress'],
        'feeMultiplier': json['feeMultiplier'],
        'votingEligibleAccountsCount': json['votingEligibleAccountsCount'],
        'harvestingEligibleAccountsCount': json['harvestingEligibleAccountsCount'],
        'totalVotingBalance': json['totalVotingBalance'],
        'previousImportanceBlockHash': json['previousImportanceBlockHash'],
    };
}

export function ImportanceBlockDTOToJSON(value?: ImportanceBlockDTO | null): any {
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
        'height': value.height,
        'timestamp': value.timestamp,
        'difficulty': value.difficulty,
        'proofGamma': value.proofGamma,
        'proofVerificationHash': value.proofVerificationHash,
        'proofScalar': value.proofScalar,
        'previousBlockHash': value.previousBlockHash,
        'transactionsHash': value.transactionsHash,
        'receiptsHash': value.receiptsHash,
        'stateHash': value.stateHash,
        'beneficiaryAddress': value.beneficiaryAddress,
        'feeMultiplier': value.feeMultiplier,
        'votingEligibleAccountsCount': value.votingEligibleAccountsCount,
        'harvestingEligibleAccountsCount': value.harvestingEligibleAccountsCount,
        'totalVotingBalance': value.totalVotingBalance,
        'previousImportanceBlockHash': value.previousImportanceBlockHash,
    };
}

