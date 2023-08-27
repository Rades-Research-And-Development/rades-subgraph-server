import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { creatureAccessoryContract } from ".";


export function fetchBalanceOf(owner: Address, nftID: BigInt): BigInt | null {
    let result = creatureAccessoryContract.try_balanceOf(owner, nftID);
    if (!result.reverted) {
        return result.value;
    }

    return null;
}

