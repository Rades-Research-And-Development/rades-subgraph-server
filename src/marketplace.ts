import {
  AuctionCancelled as AuctionCancelledEvent,
  BalanceUpdated as BalanceUpdatedEvent,
  BidPlaced as BidPlacedEvent,
  ClaimAuctionNFT as ClaimAuctionNFTEvent,
  ClaimFunds as ClaimFundsEvent,
  ClaimSaleNFTs as ClaimSaleNFTsEvent,
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
  let entity = new SaleCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Marketplace_id = event.params.id
  entity.nftAddress = event.params.nftAddress
  entity.nftID = event.params.nftID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
