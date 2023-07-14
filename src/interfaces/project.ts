/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Project {
  schemaVersion?: "0.1";
  name: string;
  workflows?: Workflow[];
  environments?: {
    [k: string]: Environment;
  };
  [k: string]: unknown;
}
export interface Workflow {
  name: string;
  processes?: {
    [k: string]: ProcessConfig;
  };
  environment: string;
  [k: string]: unknown;
}
export interface ProcessConfig {
  repository?: string | null;
  revision?: string | null;
  path: string;
  inputs?: {
    [k: string]: string;
  };
  outputs?: {
    [k: string]: string;
  };
  env?: {
    [k: string]: unknown;
  };
  args?: string[];
  executor: string;
  [k: string]: unknown;
}
export interface Environment {
  name: string;
  baseDir: string;
  dataMappings?: {
    [k: string]: string;
  };
  executors?: {
    [k: string]: Executor;
  };
  [k: string]: unknown;
}
export interface Executor {
  name: string;
  type: string;
  config?: string;
  [k: string]: unknown;
}
