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

import { RobotClientSecretCommand } from '../model/robotClientSecretCommand';
import { RobotClientSecretDto } from '../model/robotClientSecretDto';
import { RobotPropertiesBulkDeleteCommand } from '../model/robotPropertiesBulkDeleteCommand';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class RobotPropertiesService {

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
     * @param robotPropertiesBulkDeleteCommand 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiRobotPropertiesDelete(robotPropertiesBulkDeleteCommand?: RobotPropertiesBulkDeleteCommand, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiRobotPropertiesDelete(robotPropertiesBulkDeleteCommand?: RobotPropertiesBulkDeleteCommand, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiRobotPropertiesDelete(robotPropertiesBulkDeleteCommand?: RobotPropertiesBulkDeleteCommand, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiRobotPropertiesDelete(robotPropertiesBulkDeleteCommand?: RobotPropertiesBulkDeleteCommand, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.delete<any>(`${this.configuration.basePath}/api/RobotProperties`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param robotClientSecretCommand 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiRobotPropertiesPost(robotClientSecretCommand?: RobotClientSecretCommand, observe?: 'body', reportProgress?: boolean): Observable<RobotClientSecretDto>;
    public apiRobotPropertiesPost(robotClientSecretCommand?: RobotClientSecretCommand, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RobotClientSecretDto>>;
    public apiRobotPropertiesPost(robotClientSecretCommand?: RobotClientSecretCommand, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RobotClientSecretDto>>;
    public apiRobotPropertiesPost(robotClientSecretCommand?: RobotClientSecretCommand, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<RobotClientSecretDto>(`${this.configuration.basePath}/api/RobotProperties`,
            robotClientSecretCommand,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
