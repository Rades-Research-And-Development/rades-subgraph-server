import { Address } from "@graphprotocol/graph-ts"
import { CreatureAccessory } from "../../generated/CreatureAccessory/CreatureAccessory"
import { Marketplace } from "../../generated/Marketplace/Marketplace"
const CREATURE_ACCESSORY_ADDRESS = "0x9EC41A36e3913Bc05B8C820ae4f7C54b255d8A1A"
const MARKETPLACE_ADDRESS = "0x535e0cF7d0533013343C68c7Dc93E841f3ccd7E2"

export const creatureAccessoryContract = CreatureAccessory.bind(Address.fromString(CREATURE_ACCESSORY_ADDRESS))
export const marketplaceContract = Marketplace.bind(Address.fromString(MARKETPLACE_ADDRESS))


// Registry contract deployed to 0x107a30aB3008B7FcBddd06EF76e509dd73987667
// Marketplace contract deployed to 0x535e0cF7d0533013343C68c7Dc93E841f3ccd7E2
// Creature contract deployed to 0xa213F98CC2F2CD5F657B4978fFF0949cD77c3796
// Creature Accessory contract deployed to 0x9EC41A36e3913Bc05B8C820ae4f7C54b255d8A1A
// RadesMockCurrency contract deployed to 0xee3424d777966E9ac50d23f21D4d4DB5b060ce44