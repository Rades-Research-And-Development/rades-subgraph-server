import { Address, BigInt, ByteArray, Bytes, ethereum } from "@graphprotocol/graph-ts"
import {
  AuctionCancelled as AuctionCancelledEvent,
  BalanceUpdated as BalanceUpdatedEvent,
  BidPlaced as BidPlacedEvent,
  ClaimAuctionNFT as ClaimAuctionNFTEvent,
  ClaimFunds as ClaimFundsEvent,
  ClaimSaleNFTs as ClaimSaleNFTsEvent,
  Marketplace,
  Marketplace__salesResult,
  NewAuction as NewAuctionEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Purchase as PurchaseEvent,
  SaleCancelled as SaleCancelledEvent,
  SaleCreated as SaleCreatedEvent
} from "../generated/Marketplace/Marketplace"
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
} from "../generated/schema"
import { fetchAmount, fetchSale } from "./helper/marketplace-helper"

export function handleAuctionCancelled(event: AuctionCancelledEvent): void {
  let entity = new AuctionCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.auctionId = event.params.auctionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBalanceUpdated(event: BalanceUpdatedEvent): void {
  let entity = new BalanceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.accountOf = event.params.accountOf
  entity.tokenAddress = event.params.tokenAddress
  entity.newBalance = event.params.newBalance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBidPlaced(event: BidPlacedEvent): void {
  let entity = new BidPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.auctionId = event.params.auctionId
  entity.totalAmount = event.params.totalAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimAuctionNFT(event: ClaimAuctionNFTEvent): void {
  let entity = new ClaimAuctionNFT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.auctionId = event.params.auctionId
  entity.claimer = event.params.claimer
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimFunds(event: ClaimFundsEvent): void {
  let entity = new ClaimFunds(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.accountOf = event.params.accountOf
  entity.tokenAddress = event.params.tokenAddress
  entity.newBalance = event.params.newBalance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimSaleNFTs(event: ClaimSaleNFTsEvent): void {
  let entity = new ClaimSaleNFTs(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Marketplace_id = event.params.id
  entity.owner = event.params.owner
  entity.amount = event.params.amount
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewAuction(event: NewAuctionEvent): void {
  let entity = new NewAuction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.auctionId = event.params.auctionId
  entity.newAuction_id = event.params.newAuction.id
  entity.newAuction_nftId = event.params.newAuction.nftId
  entity.newAuction_isERC721 = event.params.newAuction.isERC721
  entity.newAuction_nftAddress = event.params.newAuction.nftAddress
  entity.newAuction_owner = event.params.newAuction.owner
  entity.newAuction_currency = event.params.newAuction.currency
  entity.newAuction_startTime = event.params.newAuction.startTime
  entity.newAuction_endTime = event.params.newAuction.endTime
  entity.newAuction_reservePrice = event.params.newAuction.reservePrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePurchase(event: PurchaseEvent): void {
  let entity = new Purchase(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.saleId = event.params.saleId
  entity.purchaser = event.params.purchaser
  entity.recipient = event.params.recipient
  let saleId = event.params.saleId;
  let saleIdBytes = Bytes.fromBigInt(saleId);

  let sale = SaleCreated.load(Bytes.fromByteArray(saleIdBytes));
  if (sale !== null) {
    sale.status = false;
    sale.save();
  }

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSaleCancelled(event: SaleCancelledEvent): void {
  let entity = new SaleCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.saleId = event.params.saleId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSaleCreated(event: SaleCreatedEvent): void {
  let sale = new SaleCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  // const saleDetail = marketplaceContract.try_sales(event.params.id)
  // const saleDetail = marketplaceContract.owner()
  sale.Marketplace_id = event.params.id
  sale.nftAddress = event.params.nftAddress
  sale.nftID = event.params.nftID
  sale.status = true
  sale.seller = event.transaction.from
  const sale_: Marketplace__salesResult | null = fetchSale(event.params.id);
  if (sale_) {
    sale.amount = sale_.getAmount()
    sale.price = sale_.getPrice()
    sale.isERC721 = sale_.getIsERC721()
    sale.currency = sale_.getCurrency()
  }
  // sale.price = saleDetail.value.getPrice()
  // sale.isERC721 = saleDetail.value.getIsERC721()
  // sale.currency = marketplaceContract.try_saleIdCounter()

  sale.blockNumber = event.block.number
  sale.blockTimestamp = event.block.timestamp
  sale.transactionHash = event.transaction.hash

  sale.save()
}
