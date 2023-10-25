 
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Address =
    | "webpage"
    | "contentScript"
    | "serviceWorker"
    | "nativeHost";

export interface Message {
    schemaVersion?: string;
    header: Header;
    payload: PingRequestPayload | PingResponsePayload;
}
export interface Header {
    id: number;
    source: Address;
    target: Address;
    sourceWebpage?: number | null;
    targetWebpage?: number | null;
}
export interface PingRequestPayload {
    type?: "pingRequest";
}
export interface PingResponsePayload {
    requestId: number;
    type?: "pingResponse";
    ok: boolean;
    error?: string | null;
}