/* eslint-disable */
import { Params } from "../dex/params";
import { SellOrderBook } from "../dex/sell_order_book";
import { BuyOrderBook } from "../dex/buy_order_book";
import { DenomTrace } from "../dex/denom_trace";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "cosmonaut.interchange.dex";
const baseGenesisState = { portId: "" };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        for (const v of message.sellOrderBookList) {
            SellOrderBook.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.buyOrderBookList) {
            BuyOrderBook.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.denomTraceList) {
            DenomTrace.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.sellOrderBookList = [];
        message.buyOrderBookList = [];
        message.denomTraceList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.sellOrderBookList.push(SellOrderBook.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.buyOrderBookList.push(BuyOrderBook.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.denomTraceList.push(DenomTrace.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.sellOrderBookList = [];
        message.buyOrderBookList = [];
        message.denomTraceList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = "";
        }
        if (object.sellOrderBookList !== undefined &&
            object.sellOrderBookList !== null) {
            for (const e of object.sellOrderBookList) {
                message.sellOrderBookList.push(SellOrderBook.fromJSON(e));
            }
        }
        if (object.buyOrderBookList !== undefined &&
            object.buyOrderBookList !== null) {
            for (const e of object.buyOrderBookList) {
                message.buyOrderBookList.push(BuyOrderBook.fromJSON(e));
            }
        }
        if (object.denomTraceList !== undefined && object.denomTraceList !== null) {
            for (const e of object.denomTraceList) {
                message.denomTraceList.push(DenomTrace.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.portId !== undefined && (obj.portId = message.portId);
        if (message.sellOrderBookList) {
            obj.sellOrderBookList = message.sellOrderBookList.map((e) => e ? SellOrderBook.toJSON(e) : undefined);
        }
        else {
            obj.sellOrderBookList = [];
        }
        if (message.buyOrderBookList) {
            obj.buyOrderBookList = message.buyOrderBookList.map((e) => e ? BuyOrderBook.toJSON(e) : undefined);
        }
        else {
            obj.buyOrderBookList = [];
        }
        if (message.denomTraceList) {
            obj.denomTraceList = message.denomTraceList.map((e) => e ? DenomTrace.toJSON(e) : undefined);
        }
        else {
            obj.denomTraceList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.sellOrderBookList = [];
        message.buyOrderBookList = [];
        message.denomTraceList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = "";
        }
        if (object.sellOrderBookList !== undefined &&
            object.sellOrderBookList !== null) {
            for (const e of object.sellOrderBookList) {
                message.sellOrderBookList.push(SellOrderBook.fromPartial(e));
            }
        }
        if (object.buyOrderBookList !== undefined &&
            object.buyOrderBookList !== null) {
            for (const e of object.buyOrderBookList) {
                message.buyOrderBookList.push(BuyOrderBook.fromPartial(e));
            }
        }
        if (object.denomTraceList !== undefined && object.denomTraceList !== null) {
            for (const e of object.denomTraceList) {
                message.denomTraceList.push(DenomTrace.fromPartial(e));
            }
        }
        return message;
    },
};
