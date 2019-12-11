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

import { BulkCreateOrUpdateSettingsCommand } from '../model/bulkCreateOrUpdateSettingsCommand';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class SettingService {

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
     * Get an application settings for a list of keys in a tenant
     * @param key 
     * @param tenantGlobalId 
     * @param userId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiSettingGet(key?: Array<string>, tenantGlobalId?: string, userId?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiSettingGet(key?: Array<string>, tenantGlobalId?: string, userId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiSettingGet(key?: Array<string>, tenantGlobalId?: string, userId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiSettingGet(key?: Array<string>, tenantGlobalId?: string, userId?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (key) {
            key.forEach((element) => {
                queryParameters = queryParameters.append('key', <any>element);
            })
        }
        if (tenantGlobalId !== undefined && tenantGlobalId !== null) {
            queryParameters = queryParameters.set('tenantGlobalId', <any>tenantGlobalId);
        }
        if (userId !== undefined && userId !== null) {
            queryParameters = queryParameters.set('userId', <any>userId);
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


        return this.httpClient.get<any>(`${this.configuration.basePath}/api/Setting`,
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
     * Updates or create new settings if they don\&#39;t exist on a specific tenant.
     * @param bulkCreateOrUpdateSettingsCommand A bulk command to create/update a list of settings on a specific tenant.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiSettingPut(bulkCreateOrUpdateSettingsCommand?: BulkCreateOrUpdateSettingsCommand, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiSettingPut(bulkCreateOrUpdateSettingsCommand?: BulkCreateOrUpdateSettingsCommand, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiSettingPut(bulkCreateOrUpdateSettingsCommand?: BulkCreateOrUpdateSettingsCommand, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiSettingPut(bulkCreateOrUpdateSettingsCommand?: BulkCreateOrUpdateSettingsCommand, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.put<any>(`${this.configuration.basePath}/api/Setting`,
            bulkCreateOrUpdateSettingsCommand,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes the specified setting.
     * @param settingId The database id of the setting that will be deleted.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiSettingSettingIdDelete(settingId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiSettingSettingIdDelete(settingId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiSettingSettingIdDelete(settingId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiSettingSettingIdDelete(settingId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (settingId === null || settingId === undefined) {
            throw new Error('Required parameter settingId was null or undefined when calling apiSettingSettingIdDelete.');
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


        return this.httpClient.delete<any>(`${this.configuration.basePath}/api/Setting/${encodeURIComponent(String(settingId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
