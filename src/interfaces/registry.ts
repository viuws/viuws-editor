/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Registry {
  schemaVersion?: string;
  processes?: ProcessRef[];
}
export interface ProcessRef {
  id: string;
  path: string;
}
