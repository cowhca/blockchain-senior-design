import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../dex/params";
import { SellOrderBook } from "../dex/sell_order_book";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { BuyOrderBook } from "../dex/buy_order_book";
import { DenomTrace } from "../dex/denom_trace";
export declare const protobufPackage = "cosmonaut.interchange.dex";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetSellOrderBookRequest {
    index: string;
}
export interface QueryGetSellOrderBookResponse {
    sellOrderBook: SellOrderBook | undefined;
}
export interface QueryAllSellOrderBookRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSellOrderBookResponse {
    sellOrderBook: SellOrderBook[];
    pagination: PageResponse | undefined;
}
export interface QueryGetBuyOrderBookRequest {
    index: string;
}
export interface QueryGetBuyOrderBookResponse {
    buyOrderBook: BuyOrderBook | undefined;
}
export interface QueryAllBuyOrderBookRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBuyOrderBookResponse {
    buyOrderBook: BuyOrderBook[];
    pagination: PageResponse | undefined;
}
export interface QueryGetDenomTraceRequest {
    index: string;
}
export interface QueryGetDenomTraceResponse {
    denomTrace: DenomTrace | undefined;
}
export interface QueryAllDenomTraceRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllDenomTraceResponse {
    denomTrace: DenomTrace[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetSellOrderBookRequest: {
    encode(message: QueryGetSellOrderBookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSellOrderBookRequest;
    fromJSON(object: any): QueryGetSellOrderBookRequest;
    toJSON(message: QueryGetSellOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSellOrderBookRequest>): QueryGetSellOrderBookRequest;
};
export declare const QueryGetSellOrderBookResponse: {
    encode(message: QueryGetSellOrderBookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSellOrderBookResponse;
    fromJSON(object: any): QueryGetSellOrderBookResponse;
    toJSON(message: QueryGetSellOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSellOrderBookResponse>): QueryGetSellOrderBookResponse;
};
export declare const QueryAllSellOrderBookRequest: {
    encode(message: QueryAllSellOrderBookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSellOrderBookRequest;
    fromJSON(object: any): QueryAllSellOrderBookRequest;
    toJSON(message: QueryAllSellOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSellOrderBookRequest>): QueryAllSellOrderBookRequest;
};
export declare const QueryAllSellOrderBookResponse: {
    encode(message: QueryAllSellOrderBookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSellOrderBookResponse;
    fromJSON(object: any): QueryAllSellOrderBookResponse;
    toJSON(message: QueryAllSellOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSellOrderBookResponse>): QueryAllSellOrderBookResponse;
};
export declare const QueryGetBuyOrderBookRequest: {
    encode(message: QueryGetBuyOrderBookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBuyOrderBookRequest;
    fromJSON(object: any): QueryGetBuyOrderBookRequest;
    toJSON(message: QueryGetBuyOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBuyOrderBookRequest>): QueryGetBuyOrderBookRequest;
};
export declare const QueryGetBuyOrderBookResponse: {
    encode(message: QueryGetBuyOrderBookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBuyOrderBookResponse;
    fromJSON(object: any): QueryGetBuyOrderBookResponse;
    toJSON(message: QueryGetBuyOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBuyOrderBookResponse>): QueryGetBuyOrderBookResponse;
};
export declare const QueryAllBuyOrderBookRequest: {
    encode(message: QueryAllBuyOrderBookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBuyOrderBookRequest;
    fromJSON(object: any): QueryAllBuyOrderBookRequest;
    toJSON(message: QueryAllBuyOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBuyOrderBookRequest>): QueryAllBuyOrderBookRequest;
};
export declare const QueryAllBuyOrderBookResponse: {
    encode(message: QueryAllBuyOrderBookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBuyOrderBookResponse;
    fromJSON(object: any): QueryAllBuyOrderBookResponse;
    toJSON(message: QueryAllBuyOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBuyOrderBookResponse>): QueryAllBuyOrderBookResponse;
};
export declare const QueryGetDenomTraceRequest: {
    encode(message: QueryGetDenomTraceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDenomTraceRequest;
    fromJSON(object: any): QueryGetDenomTraceRequest;
    toJSON(message: QueryGetDenomTraceRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetDenomTraceRequest>): QueryGetDenomTraceRequest;
};
export declare const QueryGetDenomTraceResponse: {
    encode(message: QueryGetDenomTraceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDenomTraceResponse;
    fromJSON(object: any): QueryGetDenomTraceResponse;
    toJSON(message: QueryGetDenomTraceResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetDenomTraceResponse>): QueryGetDenomTraceResponse;
};
export declare const QueryAllDenomTraceRequest: {
    encode(message: QueryAllDenomTraceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDenomTraceRequest;
    fromJSON(object: any): QueryAllDenomTraceRequest;
    toJSON(message: QueryAllDenomTraceRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllDenomTraceRequest>): QueryAllDenomTraceRequest;
};
export declare const QueryAllDenomTraceResponse: {
    encode(message: QueryAllDenomTraceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDenomTraceResponse;
    fromJSON(object: any): QueryAllDenomTraceResponse;
    toJSON(message: QueryAllDenomTraceResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDenomTraceResponse>): QueryAllDenomTraceResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a SellOrderBook by index. */
    SellOrderBook(request: QueryGetSellOrderBookRequest): Promise<QueryGetSellOrderBookResponse>;
    /** Queries a list of SellOrderBook items. */
    SellOrderBookAll(request: QueryAllSellOrderBookRequest): Promise<QueryAllSellOrderBookResponse>;
    /** Queries a BuyOrderBook by index. */
    BuyOrderBook(request: QueryGetBuyOrderBookRequest): Promise<QueryGetBuyOrderBookResponse>;
    /** Queries a list of BuyOrderBook items. */
    BuyOrderBookAll(request: QueryAllBuyOrderBookRequest): Promise<QueryAllBuyOrderBookResponse>;
    /** Queries a DenomTrace by index. */
    DenomTrace(request: QueryGetDenomTraceRequest): Promise<QueryGetDenomTraceResponse>;
    /** Queries a list of DenomTrace items. */
    DenomTraceAll(request: QueryAllDenomTraceRequest): Promise<QueryAllDenomTraceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    SellOrderBook(request: QueryGetSellOrderBookRequest): Promise<QueryGetSellOrderBookResponse>;
    SellOrderBookAll(request: QueryAllSellOrderBookRequest): Promise<QueryAllSellOrderBookResponse>;
    BuyOrderBook(request: QueryGetBuyOrderBookRequest): Promise<QueryGetBuyOrderBookResponse>;
    BuyOrderBookAll(request: QueryAllBuyOrderBookRequest): Promise<QueryAllBuyOrderBookResponse>;
    DenomTrace(request: QueryGetDenomTraceRequest): Promise<QueryGetDenomTraceResponse>;
    DenomTraceAll(request: QueryAllDenomTraceRequest): Promise<QueryAllDenomTraceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
