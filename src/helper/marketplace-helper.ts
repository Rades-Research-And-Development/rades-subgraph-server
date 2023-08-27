import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { marketplaceContract } from ".";
import { Marketplace__salesResult } from "../../generated/Marketplace/Marketplace";

export function fetchAmount(): BigInt | null {
    let result = marketplaceContract.try_saleIdCounter();
    if (!result.reverted) {
        return result.value;
    }

    return null;
}

export function fetchSale(saleId: BigInt): Marketplace__salesResult | null {
    let result = marketplaceContract.try_sales(saleId);
    if (!result.reverted) {
        return result.value
    }

    return null;
}

export function fetchSaleStatus(saleId: BigInt): Bytes | null {
    let result = marketplaceContract.try_getSaleStatus(saleId);
    if (!result.reverted) {
        return result.value
    }

    return null;
}
