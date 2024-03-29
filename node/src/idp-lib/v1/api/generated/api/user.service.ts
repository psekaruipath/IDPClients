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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { BulkSoftDeleteCommand } from '../model/bulkSoftDeleteCommand';
import { ChangeUserPasswordCommand } from '../model/changeUserPasswordCommand';
import { CreateUserCommand } from '../model/createUserCommand';
import { IdentityResult } from '../model/identityResult';
import { UpdateUserCommand } from '../model/updateUserCommand';
import { UserDto } from '../model/userDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class UserService {

    protected basePath = 'https://devtest-im-identity.azurewebsites.net/identity';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * Bulk deletes the specified list of users.
     * @param bulkSoftDeleteCommand The bulk delete command.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiUserDelete(bulkSoftDeleteCommand?: BulkSoftDeleteCommand, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiUserDelete(bulkSoftDeleteCommand?: BulkSoftDeleteCommand, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiUserDelete(bulkSoftDeleteCommand?: BulkSoftDeleteCommand, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiUserDelete(bulkSoftDeleteCommand?: BulkSoftDeleteCommand, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.delete<any>(`${this.configuration.basePath}/api/User`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the list of users filtered based on the partition global id.
     * The maximum number of returned users is 1000.
     * @param partitionGlobalId 
     * @param skipNumber 
     * @param takeNumber 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiUserGet(partitionGlobalId?: string, skipNumber?: number, takeNumber?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<UserDto>>;
    public apiUserGet(partitionGlobalId?: string, skipNumber?: number, takeNumber?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<UserDto>>>;
    public apiUserGet(partitionGlobalId?: string, skipNumber?: number, takeNumber?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<UserDto>>>;
    public apiUserGet(partitionGlobalId?: string, skipNumber?: number, takeNumber?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (partitionGlobalId !== undefined && partitionGlobalId !== null) {
            queryParameters = queryParameters.set('partitionGlobalId', <any>partitionGlobalId);
        }
        if (skipNumber !== undefined && skipNumber !== null) {
            queryParameters = queryParameters.set('skipNumber', <any>skipNumber);
        }
        if (takeNumber !== undefined && takeNumber !== null) {
            queryParameters = queryParameters.set('takeNumber', <any>takeNumber);
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<UserDto>>(`${this.configuration.basePath}/api/User`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates a new user or updates an existing one with the provided data.
     * @param createUserCommand The data used to create/update a new user.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiUserPost(createUserCommand?: CreateUserCommand, observe?: 'body', reportProgress?: boolean): Observable<IdentityResult>;
    public apiUserPost(createUserCommand?: CreateUserCommand, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IdentityResult>>;
    public apiUserPost(createUserCommand?: CreateUserCommand, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IdentityResult>>;
    public apiUserPost(createUserCommand?: CreateUserCommand, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<IdentityResult>(`${this.configuration.basePath}/api/User`,
            createUserCommand,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Changes the user\&#39;s password.
     * @param userId The database user id.
     * @param changeUserPasswordCommand The change user password command..
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiUserUserIdChangepasswordPost(userId: string, changeUserPasswordCommand?: ChangeUserPasswordCommand, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiUserUserIdChangepasswordPost(userId: string, changeUserPasswordCommand?: ChangeUserPasswordCommand, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiUserUserIdChangepasswordPost(userId: string, changeUserPasswordCommand?: ChangeUserPasswordCommand, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiUserUserIdChangepasswordPost(userId: string, changeUserPasswordCommand?: ChangeUserPasswordCommand, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling apiUserUserIdChangepasswordPost.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/api/User/${encodeURIComponent(String(userId))}/changepassword`,
            changeUserPasswordCommand,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes the specified user.
     * @param userId The id of the user that will be deleted.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiUserUserIdDelete(userId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiUserUserIdDelete(userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiUserUserIdDelete(userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiUserUserIdDelete(userId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling apiUserUserIdDelete.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.delete<any>(`${this.configuration.basePath}/api/User/${encodeURIComponent(String(userId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the user at the specified location
     * @param userId The data used to create a new user.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiUserUserIdGet(userId: string, observe?: 'body', reportProgress?: boolean): Observable<UserDto>;
    public apiUserUserIdGet(userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDto>>;
    public apiUserUserIdGet(userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDto>>;
    public apiUserUserIdGet(userId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling apiUserUserIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<UserDto>(`${this.configuration.basePath}/api/User/${encodeURIComponent(String(userId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates the specified user.
     * @param userId The database identifier of the user.
     * @param updateUserCommand The command that stores the information to update user.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiUserUserIdPut(userId: string, updateUserCommand?: UpdateUserCommand, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiUserUserIdPut(userId: string, updateUserCommand?: UpdateUserCommand, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiUserUserIdPut(userId: string, updateUserCommand?: UpdateUserCommand, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiUserUserIdPut(userId: string, updateUserCommand?: UpdateUserCommand, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling apiUserUserIdPut.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.configuration.basePath}/api/User/${encodeURIComponent(String(userId))}`,
            updateUserCommand,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
