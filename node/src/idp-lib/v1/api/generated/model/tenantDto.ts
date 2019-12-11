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


export interface TenantDto { 
    /**
     * The local database id.
     */
    id?: number;
    /**
     * The tenant name . The same with tenancy name.
     */
    name?: string | null;
    /**
     * The global identifier of the tenant.
     */
    globalId?: string;
    /**
     * Flag indicating if the tenant supports basic authentication.
     */
    enableBasicAuth?: boolean;
    /**
     * Flag indicating is the tenant is active (enabled).
     */
    isActive?: boolean;
}
