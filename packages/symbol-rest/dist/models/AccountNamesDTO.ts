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
 * @interface AccountNamesDTO
 */
export interface AccountNamesDTO {
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof AccountNamesDTO
     */
    address: string;
    /**
     * Account linked namespace names.
     * @type {Array<string>}
     * @memberof AccountNamesDTO
     */
    names: Array<string>;
}

/**
 * Check if a given object implements the AccountNamesDTO interface.
 */
export function instanceOfAccountNamesDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "names" in value;

    return isInstance;
}

export function AccountNamesDTOFromJSON(json: any): AccountNamesDTO {
    return AccountNamesDTOFromJSONTyped(json, false);
}

export function AccountNamesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountNamesDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'names': json['names'],
    };
}

export function AccountNamesDTOToJSON(value?: AccountNamesDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'names': value.names,
    };
}

