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
/**
 * 
 * @export
 * @interface TransactionIds
 */
export interface TransactionIds {
    /**
     * Array of transaction identifiers.
     * @type {Array<string>}
     * @memberof TransactionIds
     */
    transactionIds?: Array<string>;
}

/**
 * Check if a given object implements the TransactionIds interface.
 */
export function instanceOfTransactionIds(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionIdsFromJSON(json: any): TransactionIds {
    return TransactionIdsFromJSONTyped(json, false);
}

export function TransactionIdsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionIds {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionIds': !exists(json, 'transactionIds') ? undefined : json['transactionIds'],
    };
}

export function TransactionIdsToJSON(value?: TransactionIds | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactionIds': value.transactionIds,
    };
}

