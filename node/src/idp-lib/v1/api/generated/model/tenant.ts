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


/**
 * Tenant used in a multi-tenancy architecture.
 */
export interface Tenant { 
    /**
     * The local database id.
     */
    id?: number;
    /**
     * The global identifier for the tenant.
     */
    globalId?: string;
    /**
     * The tenant name . The same with tenancy name.
     */
    name: string | null;
    /**
     * The tenant normalized name.
     */
    normalizedName: string | null;
    /**
     * Flag indicating if the tenant supports basic authentication.
     */
    enableBasicAuth?: boolean;
    /**
     * Flag indicating if the tenant is active (enabled).
     */
    isActive?: boolean;
    /**
     * Flag indicating if the tenant is deleted.
     */
    isDeleted?: boolean;
    /**
     * Every tenant represent a partition.
     */
    partitionId?: number;
}

