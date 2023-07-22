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
import type { MosaicRestrictionTypeEnum } from './MosaicRestrictionTypeEnum';
import {
    MosaicRestrictionTypeEnumFromJSON,
    MosaicRestrictionTypeEnumFromJSONTyped,
    MosaicRestrictionTypeEnumToJSON,
} from './MosaicRestrictionTypeEnum';

/**
 * 
 * @export
 * @interface MosaicGlobalRestrictionTransactionBodyDTO
 */
export interface MosaicGlobalRestrictionTransactionBodyDTO {
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionBodyDTO
     */
    mosaicId: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionBodyDTO
     */
    referenceMosaicId: string;
    /**
     * Restriction key.
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionBodyDTO
     */
    restrictionKey: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionBodyDTO
     */
    previousRestrictionValue: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof MosaicGlobalRestrictionTransactionBodyDTO
     */
    newRestrictionValue: string;
    /**
     * 
     * @type {MosaicRestrictionTypeEnum}
     * @memberof MosaicGlobalRestrictionTransactionBodyDTO
     */
    previousRestrictionType: MosaicRestrictionTypeEnum;
    /**
     * 
     * @type {MosaicRestrictionTypeEnum}
     * @memberof MosaicGlobalRestrictionTransactionBodyDTO
     */
    newRestrictionType: MosaicRestrictionTypeEnum;
}

/**
 * Check if a given object implements the MosaicGlobalRestrictionTransactionBodyDTO interface.
 */
export function instanceOfMosaicGlobalRestrictionTransactionBodyDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "referenceMosaicId" in value;
    isInstance = isInstance && "restrictionKey" in value;
    isInstance = isInstance && "previousRestrictionValue" in value;
    isInstance = isInstance && "newRestrictionValue" in value;
    isInstance = isInstance && "previousRestrictionType" in value;
    isInstance = isInstance && "newRestrictionType" in value;

    return isInstance;
}

export function MosaicGlobalRestrictionTransactionBodyDTOFromJSON(json: any): MosaicGlobalRestrictionTransactionBodyDTO {
    return MosaicGlobalRestrictionTransactionBodyDTOFromJSONTyped(json, false);
}

export function MosaicGlobalRestrictionTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicGlobalRestrictionTransactionBodyDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mosaicId': json['mosaicId'],
        'referenceMosaicId': json['referenceMosaicId'],
        'restrictionKey': json['restrictionKey'],
        'previousRestrictionValue': json['previousRestrictionValue'],
        'newRestrictionValue': json['newRestrictionValue'],
        'previousRestrictionType': MosaicRestrictionTypeEnumFromJSON(json['previousRestrictionType']),
        'newRestrictionType': MosaicRestrictionTypeEnumFromJSON(json['newRestrictionType']),
    };
}

export function MosaicGlobalRestrictionTransactionBodyDTOToJSON(value?: MosaicGlobalRestrictionTransactionBodyDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mosaicId': value.mosaicId,
        'referenceMosaicId': value.referenceMosaicId,
        'restrictionKey': value.restrictionKey,
        'previousRestrictionValue': value.previousRestrictionValue,
        'newRestrictionValue': value.newRestrictionValue,
        'previousRestrictionType': MosaicRestrictionTypeEnumToJSON(value.previousRestrictionType),
        'newRestrictionType': MosaicRestrictionTypeEnumToJSON(value.newRestrictionType),
    };
}

