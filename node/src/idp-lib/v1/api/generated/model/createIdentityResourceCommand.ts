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
 * Command used to create a new identity server identity resource.
 */
export interface CreateIdentityResourceCommand { 
    /**
     * The unique name of the identity resource. This is the value a client will  use for the scope parameter in the authorize request.
     */
    name?: string | null;
    /**
     * The Identity Resource display name.
     */
    displayName?: string | null;
    /**
     * List of associated user claim types that should be included in the identity token.
     */
    userClaims?: Array<string> | null;
}

