/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Registry {
    schemaVersion?: string;
    modules?: ModuleRef[];
    plugins?: PluginRef[];
    repos?: string[];
}
export interface ModuleRef {
    id: string;
    path: string;
}
export interface PluginRef {
    id: string;
    path: string;
}
