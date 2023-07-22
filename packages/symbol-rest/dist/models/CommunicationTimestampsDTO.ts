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
 * @interface CommunicationTimestampsDTO
 */
export interface CommunicationTimestampsDTO {
    /**
     * Number of milliseconds elapsed since the creation of the nemesis block. This value can be converted to epoch time by adding the network's 'epochAdjustment'.
     * @type {string}
     * @memberof CommunicationTimestampsDTO
     */
    sendTimestamp?: string;
    /**
     * Number of milliseconds elapsed since the creation of the nemesis block. This value can be converted to epoch time by adding the network's 'epochAdjustment'.
     * @type {string}
     * @memberof CommunicationTimestampsDTO
     */
    receiveTimestamp?: string;
}

/**
 * Check if a given object implements the CommunicationTimestampsDTO interface.
 */
export function instanceOfCommunicationTimestampsDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommunicationTimestampsDTOFromJSON(json: any): CommunicationTimestampsDTO {
    return CommunicationTimestampsDTOFromJSONTyped(json, false);
}

export function CommunicationTimestampsDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunicationTimestampsDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sendTimestamp': !exists(json, 'sendTimestamp') ? undefined : json['sendTimestamp'],
        'receiveTimestamp': !exists(json, 'receiveTimestamp') ? undefined : json['receiveTimestamp'],
    };
}

export function CommunicationTimestampsDTOToJSON(value?: CommunicationTimestampsDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sendTimestamp': value.sendTimestamp,
        'receiveTimestamp': value.receiveTimestamp,
    };
}

