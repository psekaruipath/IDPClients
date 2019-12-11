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

import { CreateTenantCommand } from '../model/createTenantCommand';
import { Tenant } from '../model/tenant';
import { TenantDto } from '../model/tenantDto';
import { UpdateTenantCommand } from '../model/updateTenantCommand';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class TenantService {

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
     * Get the full list of tenants.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiTenantGet(observe?: 'body', reportProgress?: boolean): Observable<Array<TenantDto>>;
    public apiTenantGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TenantDto>>>;
    public apiTenantGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TenantDto>>>;
    public apiTenantGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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


        return this.httpClient.get<Array<TenantDto>>(`${this.configuration.basePath}/api/Tenant`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates a new tenant. If tenant already exists with the same an update will be performed.
     * @param createTenantCommand Command used to create a new tenant.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiTenantPost(createTenantCommand?: CreateTenantCommand, observe?: 'body', reportProgress?: boolean): Observable<Tenant>;
    public apiTenantPost(createTenantCommand?: CreateTenantCommand, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Tenant>>;
    public apiTenantPost(createTenantCommand?: CreateTenantCommand, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Tenant>>;
    public apiTenantPost(createTenantCommand?: CreateTenantCommand, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<Tenant>(`${this.configuration.basePath}/api/Tenant`,
            createTenantCommand,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes the specified tenant.
     * @param tenantGlobalId The tenant global id that will be deleted.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiTenantTenantGlobalIdDelete(tenantGlobalId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiTenantTenantGlobalIdDelete(tenantGlobalId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiTenantTenantGlobalIdDelete(tenantGlobalId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiTenantTenantGlobalIdDelete(tenantGlobalId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (tenantGlobalId === null || tenantGlobalId === undefined) {
            throw new Error('Required parameter tenantGlobalId was null or undefined when calling apiTenantTenantGlobalIdDelete.');
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


        return this.httpClient.delete<any>(`${this.configuration.basePath}/api/Tenant/${encodeURIComponent(String(tenantGlobalId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the tenant that matches the provided id.
     * @param tenantGlobalId The database id for which to fetch the tenant.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiTenantTenantGlobalIdGet(tenantGlobalId: string, observe?: 'body', reportProgress?: boolean): Observable<TenantDto>;
    public apiTenantTenantGlobalIdGet(tenantGlobalId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TenantDto>>;
    public apiTenantTenantGlobalIdGet(tenantGlobalId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TenantDto>>;
    public apiTenantTenantGlobalIdGet(tenantGlobalId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (tenantGlobalId === null || tenantGlobalId === undefined) {
            throw new Error('Required parameter tenantGlobalId was null or undefined when calling apiTenantTenantGlobalIdGet.');
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


        return this.httpClient.get<TenantDto>(`${this.configuration.basePath}/api/Tenant/${encodeURIComponent(String(tenantGlobalId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates the tenant entity.
     * @param tenantGlobalId The database identifier of the tenant.
     * @param updateTenantCommand Command used to update a tenant.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiTenantTenantGlobalIdPut(tenantGlobalId: string, updateTenantCommand?: UpdateTenantCommand, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiTenantTenantGlobalIdPut(tenantGlobalId: string, updateTenantCommand?: UpdateTenantCommand, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiTenantTenantGlobalIdPut(tenantGlobalId: string, updateTenantCommand?: UpdateTenantCommand, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiTenantTenantGlobalIdPut(tenantGlobalId: string, updateTenantCommand?: UpdateTenantCommand, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (tenantGlobalId === null || tenantGlobalId === undefined) {
            throw new Error('Required parameter tenantGlobalId was null or undefined when calling apiTenantTenantGlobalIdPut.');
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

        return this.httpClient.put<any>(`${this.configuration.basePath}/api/Tenant/${encodeURIComponent(String(tenantGlobalId))}`,
            updateTenantCommand,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}