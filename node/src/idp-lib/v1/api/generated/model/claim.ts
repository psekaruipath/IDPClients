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
import { ClaimsIdentity } from './claimsIdentity';


export interface Claim { 
    readonly issuer?: string | null;
    readonly originalIssuer?: string | null;
    readonly properties?: { [key: string]: string; } | null;
    subject?: ClaimsIdentity;
    readonly type?: string | null;
    readonly value?: string | null;
    readonly valueType?: string | null;
}

