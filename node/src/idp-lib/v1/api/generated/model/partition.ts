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
import { PartitionStatus } from './partitionStatus';
import { PartitionType } from './partitionType';


/**
 * A partition that we can use to split the users. Eg tenant.
 */
export interface Partition { 
    /**
     * The database id of the partition.
     */
    id?: number;
    type: PartitionType;
    globalId: string;
    status?: PartitionStatus;
}

