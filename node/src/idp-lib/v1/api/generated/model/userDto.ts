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


export interface UserDto { 
    /**
     * The database id (Guid).
     */
    id?: string;
    /**
     * The username.
     */
    userName?: string | null;
    /**
     * The user\'s email address.
     */
    email?: string | null;
    /**
     * The first name of the user.
     */
    name?: string | null;
    /**
     * The last name of the user.
     */
    surname?: string | null;
    /**
     * The user\'s creation time.
     */
    creationTime?: Date;
    /**
     * The user\'s last modification time.
     */
    lastModificationTime?: Date | null;
    /**
     * The user\'s last login time.
     */
    lastLoginTime?: Date | null;
}

