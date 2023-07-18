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
 * @interface SizePrefixedEntityDTO
 */
export interface SizePrefixedEntityDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof SizePrefixedEntityDTO
     */
    size: number;
}

/**
 * Check if a given object implements the SizePrefixedEntityDTO interface.
 */
export function instanceOfSizePrefixedEntityDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "size" in value;

    return isInstance;
}

export function SizePrefixedEntityDTOFromJSON(json: any): SizePrefixedEntityDTO {
    return SizePrefixedEntityDTOFromJSONTyped(json, false);
}

export function SizePrefixedEntityDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SizePrefixedEntityDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'size': json['size'],
    };
}

export function SizePrefixedEntityDTOToJSON(value?: SizePrefixedEntityDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'size': value.size,
    };
}

