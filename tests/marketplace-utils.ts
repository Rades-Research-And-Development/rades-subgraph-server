import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AuctionCancelled,
  BalanceUpdated,
  BidPlaced,
  ClaimAuctionNFT,
  ClaimFunds,
  ClaimSaleNFTs,
  NewAuction,
  OwnershipTransferred,
  Purchase,
  SaleCancelled,
  SaleCreated
} from "../generated/Marketplace/Marketplace"

export function createAuctionCancelledEvent(
  auctionId: BigInt
): AuctionCancelled {
  let auctionCancelledEvent = changetype<AuctionCancelled>(newMockEvent())

  auctionCancelledEvent.parameters = new Array()

  auctionCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )

  return auctionCancelledEvent
}

export function createBalanceUpdatedEvent(
  accountOf: Address,
  tokenAddress: Address,
  newBalance: BigInt
): BalanceUpdated {
  let balanceUpdatedEvent = changetype<BalanceUpdated>(newMockEvent())

  balanceUpdatedEvent.parameters = new Array()

  balanceUpdatedEvent.parameters.push(
    new ethereum.EventParam("accountOf", ethereum.Value.fromAddress(accountOf))
  )
  balanceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  balanceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newBalance",
      ethereum.Value.fromUnsignedBigInt(newBalance)
    )
  )

  return balanceUpdatedEvent
}

export function createBidPlacedEvent(
  auctionId: BigInt,
  totalAmount: BigInt
): BidPlaced {
  let bidPlacedEvent = changetype<BidPlaced>(newMockEvent())

  bidPlacedEvent.parameters = new Array()

  bidPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "totalAmount",
      ethereum.Value.fromUnsignedBigInt(totalAmount)
    )
  )

  return bidPlacedEvent
}

export function createClaimAuctionNFTEvent(
  auctionId: BigInt,
  claimer: Address,
  recipient: Address,
  amount: BigInt
): ClaimAuctionNFT {
  let claimAuctionNftEvent = changetype<ClaimAuctionNFT>(newMockEvent())

  claimAuctionNftEvent.parameters = new Array()

  claimAuctionNftEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  claimAuctionNftEvent.parameters.push(
    new ethereum.EventParam("claimer", ethereum.Value.fromAddress(claimer))
  )
  claimAuctionNftEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  claimAuctionNftEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimAuctionNftEvent
}

export function createClaimFundsEvent(
  accountOf: Address,
  tokenAddress: Address,
  newBalance: BigInt
): ClaimFunds {
  let claimFundsEvent = changetype<ClaimFunds>(newMockEvent())

  claimFundsEvent.parameters = new Array()

  claimFundsEvent.parameters.push(
    new ethereum.EventParam("accountOf", ethereum.Value.fromAddress(accountOf))
  )
  claimFundsEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  claimFundsEvent.parameters.push(
    new ethereum.EventParam(
      "newBalance",
      ethereum.Value.fromUnsignedBigInt(newBalance)
    )
  )

  return claimFundsEvent
}

export function createClaimSaleNFTsEvent(
  id: BigInt,
  owner: Address,
  amount: BigInt
): ClaimSaleNFTs {
  let claimSaleNfTsEvent = changetype<ClaimSaleNFTs>(newMockEvent())

  claimSaleNfTsEvent.parameters = new Array()

  claimSaleNfTsEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  claimSaleNfTsEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  claimSaleNfTsEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimSaleNfTsEvent
}

export function createNewAuctionEvent(
  auctionId: BigInt,
  newAuction: ethereum.Tuple
): NewAuction {
  let newAuctionEvent = changetype<NewAuction>(newMockEvent())

  newAuctionEvent.parameters = new Array()

  newAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  newAuctionEvent.parameters.push(
    new ethereum.EventParam("newAuction", ethereum.Value.fromTuple(newAuction))
  )

  return newAuctionEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPurchaseEvent(
  saleId: BigInt,
  purchaser: Address,
  recipient: Address
): Purchase {
  let purchaseEvent = changetype<Purchase>(newMockEvent())

  purchaseEvent.parameters = new Array()

  purchaseEvent.parameters.push(
    new ethereum.EventParam("saleId", ethereum.Value.fromUnsignedBigInt(saleId))
  )
  purchaseEvent.parameters.push(
    new ethereum.EventParam("purchaser", ethereum.Value.fromAddress(purchaser))
  )
  purchaseEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return purchaseEvent
}

export function createSaleCancelledEvent(saleId: BigInt): SaleCancelled {
  let saleCancelledEvent = changetype<SaleCancelled>(newMockEvent())

  saleCancelledEvent.parameters = new Array()

  saleCancelledEvent.parameters.push(
    new ethereum.EventParam("saleId", ethereum.Value.fromUnsignedBigInt(saleId))
  )

  return saleCancelledEvent
}

export function createSaleCreatedEvent(
  id: BigInt,
  nftAddress: Address,
  nftID: BigInt
): SaleCreated {
  let saleCreatedEvent = changetype<SaleCreated>(newMockEvent())

  saleCreatedEvent.parameters = new Array()

  saleCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  saleCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  saleCreatedEvent.parameters.push(
    new ethereum.EventParam("nftID", ethereum.Value.fromUnsignedBigInt(nftID))
  )

  return saleCreatedEvent
}
