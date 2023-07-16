/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const NodeStatusEnum = {
    Up: 'up',
    Down: 'down'
} as const;
export type NodeStatusEnum = typeof NodeStatusEnum[keyof typeof NodeStatusEnum];


export function NodeStatusEnumFromJSON(json: any): NodeStatusEnum {
    return NodeStatusEnumFromJSONTyped(json, false);
}

export function NodeStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeStatusEnum {
    return json as NodeStatusEnum;
}

export function NodeStatusEnumToJSON(value?: NodeStatusEnum | null): any {
    return value as any;
}
