/**
 * IS4 API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Scope { 
    name?: string | null;
    displayName?: string | null;
    description?: string | null;
    required?: boolean;
    emphasize?: boolean;
    showInDiscoveryDocument?: boolean;
    userClaims?: Array<string> | null;
}
