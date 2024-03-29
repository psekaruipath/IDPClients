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
 * Command used to update an existing ApiResource.
 */
export interface UpdateApiResourceCommand { 
    /**
     * The unique name of the API. This value is used for authentication   with introspection and will be added to the audience of the outgoing access token.
     */
    name?: string | null;
    /**
     * The API Resource display name.
     */
    displayName?: string | null;
    /**
     * List of associated user claim types that should be included in the access token.
     */
    userClaims?: Array<string> | null;
}

