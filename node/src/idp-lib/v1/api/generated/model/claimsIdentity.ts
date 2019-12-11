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
import { Claim } from './claim';


export interface ClaimsIdentity { 
    readonly authenticationType?: string | null;
    readonly isAuthenticated?: boolean;
    actor?: ClaimsIdentity;
    bootstrapContext?: object | null;
    readonly claims?: Array<Claim> | null;
    label?: string | null;
    readonly name?: string | null;
    readonly nameClaimType?: string | null;
    readonly roleClaimType?: string | null;
}

