export interface DexBuyOrderBook {
    index?: string;
    amountDenom?: string;
    priceDenom?: string;
}
export interface DexDenomTrace {
    index?: string;
    port?: string;
    channel?: string;
    origin?: string;
}
export declare type DexMsgCancelBuyOrderResponse = object;
export declare type DexMsgCancelSellOrderResponse = object;
export declare type DexMsgSendBuyOrderResponse = object;
export declare type DexMsgSendCreatePairResponse = object;
export declare type DexMsgSendSellOrderResponse = object;
/**
 * Params defines the parameters for the module.
 */
export declare type DexParams = object;
export interface DexQueryAllBuyOrderBookResponse {
    buyOrderBook?: DexBuyOrderBook[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface DexQueryAllDenomTraceResponse {
    denomTrace?: DexDenomTrace[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface DexQueryAllSellOrderBookResponse {
    sellOrderBook?: DexSellOrderBook[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface DexQueryGetBuyOrderBookResponse {
    buyOrderBook?: DexBuyOrderBook;
}
export interface DexQueryGetDenomTraceResponse {
    denomTrace?: DexDenomTrace;
}
export interface DexQueryGetSellOrderBookResponse {
    sellOrderBook?: DexSellOrderBook;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface DexQueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: DexParams;
}
export interface DexSellOrderBook {
    index?: string;
    amountDenom?: string;
    priceDenom?: string;
}
export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
    /**
     * reverse is set to true if results are to be returned in the descending order.
     *
     * Since: cosmos-sdk 0.43
     */
    reverse?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title dex/buy_order_book.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryBuyOrderBookAll
     * @summary Queries a list of BuyOrderBook items.
     * @request GET:/cosmonaut/interchange/dex/buy_order_book
     */
    queryBuyOrderBookAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<DexQueryAllBuyOrderBookResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBuyOrderBook
     * @summary Queries a BuyOrderBook by index.
     * @request GET:/cosmonaut/interchange/dex/buy_order_book/{index}
     */
    queryBuyOrderBook: (index: string, params?: RequestParams) => Promise<HttpResponse<DexQueryGetBuyOrderBookResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDenomTraceAll
     * @summary Queries a list of DenomTrace items.
     * @request GET:/cosmonaut/interchange/dex/denom_trace
     */
    queryDenomTraceAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<DexQueryAllDenomTraceResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDenomTrace
     * @summary Queries a DenomTrace by index.
     * @request GET:/cosmonaut/interchange/dex/denom_trace/{index}
     */
    queryDenomTrace: (index: string, params?: RequestParams) => Promise<HttpResponse<DexQueryGetDenomTraceResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Parameters queries the parameters of the module.
     * @request GET:/cosmonaut/interchange/dex/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<DexQueryParamsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySellOrderBookAll
     * @summary Queries a list of SellOrderBook items.
     * @request GET:/cosmonaut/interchange/dex/sell_order_book
     */
    querySellOrderBookAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<DexQueryAllSellOrderBookResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySellOrderBook
     * @summary Queries a SellOrderBook by index.
     * @request GET:/cosmonaut/interchange/dex/sell_order_book/{index}
     */
    querySellOrderBook: (index: string, params?: RequestParams) => Promise<HttpResponse<DexQueryGetSellOrderBookResponse, RpcStatus>>;
}
export {};
