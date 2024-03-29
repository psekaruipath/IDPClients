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
 * Command used to update an existing identity server client.
 */
export interface UpdateClientCommand { 
    /**
     * Unique ID of the client.
     */
    clientId?: string | null;
    /**
     * Client display name (used for logging and consent screen)
     */
    clientName?: string | null;
    /**
     * Specifies logout URI at client for HTTP based front-channel logout.   See the OIDC Front-Channel spec for more details.
     */
    frontChannelLogoutUri?: string | null;
    /**
     * When requesting both an id token and access token, should the user claims always be   added to the id token instead of requiring the client to use the userinfo endpoint. Default is false.
     */
    alwaysIncludeUserClaimsInIdToken?: boolean;
    /**
     * If set, the client claims will be sent for every flow.  If not, only for client credentials flow (default is false).
     */
    alwaysSendClientClaims?: boolean;
    /**
     * Specifies whether a consent screen is required. Defaults to true.
     */
    requireConsent?: boolean;
    /**
     * Specifies whether this client can request refresh tokens (be requesting the offline_access scope).
     */
    allowOfflineAccess?: boolean;
    /**
     * Lifetime of identity token in seconds (defaults to 300 seconds / 5 minutes)
     */
    identityTokenLifetime?: number;
    /**
     * Lifetime of access token in seconds (defaults to 3600 seconds / 1 hour)
     */
    accessTokenLifetime?: number;
    /**
     * Lifetime of authorization code in seconds (defaults to 300 seconds / 5 minutes)
     */
    authorizationCodeLifetime?: number;
    /**
     * Maximum lifetime of a refresh token in seconds. Defaults to 2592000 seconds / 30 days
     */
    absoluteRefreshTokenLifetime?: number;
    /**
     * Sliding lifetime of a refresh token in seconds. Defaults to 1296000 seconds / 15 days
     */
    slidingRefreshTokenLifetime?: number;
    /**
     * List of client secrets - credentials to access the token endpoint.
     */
    clientSecrets?: Array<string> | null;
    /**
     * Specifies the grant types the client is allowed to use. Use the GrantTypes   class for common combinations.
     */
    allowedGrantTypes?: Array<string> | null;
    /**
     * Specifies the allowed URIs to return tokens or authorization codes to.
     */
    redirectUris?: Array<string> | null;
    /**
     * Specifies allowed URIs to redirect to after logout.  See the OIDC Connect Session Management spec for more details.
     */
    postLogoutRedirectUris?: Array<string> | null;
    /**
     * If specified, will be used by the default CORS policy service   implementations (In-Memory and EF) to build a CORS policy for JavaScript clients.
     */
    allowedCorsOrigins?: Array<string> | null;
    /**
     * By default a client has no access to any resources - specify   the allowed resources by adding the corresponding scopes names
     */
    allowedScopes?: Array<string> | null;
}

