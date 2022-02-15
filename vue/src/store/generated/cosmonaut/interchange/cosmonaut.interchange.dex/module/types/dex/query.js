/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../dex/params";
import { SellOrderBook } from "../dex/sell_order_book";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { BuyOrderBook } from "../dex/buy_order_book";
import { DenomTrace } from "../dex/denom_trace";
export const protobufPackage = "cosmonaut.interchange.dex";
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryGetSellOrderBookRequest = { index: "" };
export const QueryGetSellOrderBookRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSellOrderBookRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetSellOrderBookRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSellOrderBookRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetSellOrderBookResponse = {};
export const QueryGetSellOrderBookResponse = {
    encode(message, writer = Writer.create()) {
        if (message.sellOrderBook !== undefined) {
            SellOrderBook.encode(message.sellOrderBook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSellOrderBookResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellOrderBook = SellOrderBook.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetSellOrderBookResponse,
        };
        if (object.sellOrderBook !== undefined && object.sellOrderBook !== null) {
            message.sellOrderBook = SellOrderBook.fromJSON(object.sellOrderBook);
        }
        else {
            message.sellOrderBook = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sellOrderBook !== undefined &&
            (obj.sellOrderBook = message.sellOrderBook
                ? SellOrderBook.toJSON(message.sellOrderBook)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSellOrderBookResponse,
        };
        if (object.sellOrderBook !== undefined && object.sellOrderBook !== null) {
            message.sellOrderBook = SellOrderBook.fromPartial(object.sellOrderBook);
        }
        else {
            message.sellOrderBook = undefined;
        }
        return message;
    },
};
const baseQueryAllSellOrderBookRequest = {};
export const QueryAllSellOrderBookRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSellOrderBookRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllSellOrderBookRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSellOrderBookRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllSellOrderBookResponse = {};
export const QueryAllSellOrderBookResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.sellOrderBook) {
            SellOrderBook.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSellOrderBookResponse,
        };
        message.sellOrderBook = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellOrderBook.push(SellOrderBook.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllSellOrderBookResponse,
        };
        message.sellOrderBook = [];
        if (object.sellOrderBook !== undefined && object.sellOrderBook !== null) {
            for (const e of object.sellOrderBook) {
                message.sellOrderBook.push(SellOrderBook.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.sellOrderBook) {
            obj.sellOrderBook = message.sellOrderBook.map((e) => e ? SellOrderBook.toJSON(e) : undefined);
        }
        else {
            obj.sellOrderBook = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSellOrderBookResponse,
        };
        message.sellOrderBook = [];
        if (object.sellOrderBook !== undefined && object.sellOrderBook !== null) {
            for (const e of object.sellOrderBook) {
                message.sellOrderBook.push(SellOrderBook.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetBuyOrderBookRequest = { index: "" };
export const QueryGetBuyOrderBookRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetBuyOrderBookRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetBuyOrderBookRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetBuyOrderBookRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetBuyOrderBookResponse = {};
export const QueryGetBuyOrderBookResponse = {
    encode(message, writer = Writer.create()) {
        if (message.buyOrderBook !== undefined) {
            BuyOrderBook.encode(message.buyOrderBook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetBuyOrderBookResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buyOrderBook = BuyOrderBook.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetBuyOrderBookResponse,
        };
        if (object.buyOrderBook !== undefined && object.buyOrderBook !== null) {
            message.buyOrderBook = BuyOrderBook.fromJSON(object.buyOrderBook);
        }
        else {
            message.buyOrderBook = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.buyOrderBook !== undefined &&
            (obj.buyOrderBook = message.buyOrderBook
                ? BuyOrderBook.toJSON(message.buyOrderBook)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetBuyOrderBookResponse,
        };
        if (object.buyOrderBook !== undefined && object.buyOrderBook !== null) {
            message.buyOrderBook = BuyOrderBook.fromPartial(object.buyOrderBook);
        }
        else {
            message.buyOrderBook = undefined;
        }
        return message;
    },
};
const baseQueryAllBuyOrderBookRequest = {};
export const QueryAllBuyOrderBookRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllBuyOrderBookRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllBuyOrderBookRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllBuyOrderBookRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllBuyOrderBookResponse = {};
export const QueryAllBuyOrderBookResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.buyOrderBook) {
            BuyOrderBook.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllBuyOrderBookResponse,
        };
        message.buyOrderBook = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buyOrderBook.push(BuyOrderBook.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllBuyOrderBookResponse,
        };
        message.buyOrderBook = [];
        if (object.buyOrderBook !== undefined && object.buyOrderBook !== null) {
            for (const e of object.buyOrderBook) {
                message.buyOrderBook.push(BuyOrderBook.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.buyOrderBook) {
            obj.buyOrderBook = message.buyOrderBook.map((e) => e ? BuyOrderBook.toJSON(e) : undefined);
        }
        else {
            obj.buyOrderBook = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllBuyOrderBookResponse,
        };
        message.buyOrderBook = [];
        if (object.buyOrderBook !== undefined && object.buyOrderBook !== null) {
            for (const e of object.buyOrderBook) {
                message.buyOrderBook.push(BuyOrderBook.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetDenomTraceRequest = { index: "" };
export const QueryGetDenomTraceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetDenomTraceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetDenomTraceRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetDenomTraceRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetDenomTraceResponse = {};
export const QueryGetDenomTraceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.denomTrace !== undefined) {
            DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetDenomTraceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomTrace = DenomTrace.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetDenomTraceResponse,
        };
        if (object.denomTrace !== undefined && object.denomTrace !== null) {
            message.denomTrace = DenomTrace.fromJSON(object.denomTrace);
        }
        else {
            message.denomTrace = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.denomTrace !== undefined &&
            (obj.denomTrace = message.denomTrace
                ? DenomTrace.toJSON(message.denomTrace)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetDenomTraceResponse,
        };
        if (object.denomTrace !== undefined && object.denomTrace !== null) {
            message.denomTrace = DenomTrace.fromPartial(object.denomTrace);
        }
        else {
            message.denomTrace = undefined;
        }
        return message;
    },
};
const baseQueryAllDenomTraceRequest = {};
export const QueryAllDenomTraceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllDenomTraceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllDenomTraceRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllDenomTraceRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllDenomTraceResponse = {};
export const QueryAllDenomTraceResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.denomTrace) {
            DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllDenomTraceResponse,
        };
        message.denomTrace = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomTrace.push(DenomTrace.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllDenomTraceResponse,
        };
        message.denomTrace = [];
        if (object.denomTrace !== undefined && object.denomTrace !== null) {
            for (const e of object.denomTrace) {
                message.denomTrace.push(DenomTrace.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.denomTrace) {
            obj.denomTrace = message.denomTrace.map((e) => e ? DenomTrace.toJSON(e) : undefined);
        }
        else {
            obj.denomTrace = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllDenomTraceResponse,
        };
        message.denomTrace = [];
        if (object.denomTrace !== undefined && object.denomTrace !== null) {
            for (const e of object.denomTrace) {
                message.denomTrace.push(DenomTrace.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.interchange.dex.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    SellOrderBook(request) {
        const data = QueryGetSellOrderBookRequest.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.interchange.dex.Query", "SellOrderBook", data);
        return promise.then((data) => QueryGetSellOrderBookResponse.decode(new Reader(data)));
    }
    SellOrderBookAll(request) {
        const data = QueryAllSellOrderBookRequest.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.interchange.dex.Query", "SellOrderBookAll", data);
        return promise.then((data) => QueryAllSellOrderBookResponse.decode(new Reader(data)));
    }
    BuyOrderBook(request) {
        const data = QueryGetBuyOrderBookRequest.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.interchange.dex.Query", "BuyOrderBook", data);
        return promise.then((data) => QueryGetBuyOrderBookResponse.decode(new Reader(data)));
    }
    BuyOrderBookAll(request) {
        const data = QueryAllBuyOrderBookRequest.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.interchange.dex.Query", "BuyOrderBookAll", data);
        return promise.then((data) => QueryAllBuyOrderBookResponse.decode(new Reader(data)));
    }
    DenomTrace(request) {
        const data = QueryGetDenomTraceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.interchange.dex.Query", "DenomTrace", data);
        return promise.then((data) => QueryGetDenomTraceResponse.decode(new Reader(data)));
    }
    DenomTraceAll(request) {
        const data = QueryAllDenomTraceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.interchange.dex.Query", "DenomTraceAll", data);
        return promise.then((data) => QueryAllDenomTraceResponse.decode(new Reader(data)));
    }
}
