import { Params } from "../dex/params";
import { SellOrderBook } from "../dex/sell_order_book";
import { BuyOrderBook } from "../dex/buy_order_book";
import { DenomTrace } from "../dex/denom_trace";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "cosmonaut.interchange.dex";
/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    portId: string;
    sellOrderBookList: SellOrderBook[];
    buyOrderBookList: BuyOrderBook[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    denomTraceList: DenomTrace[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
