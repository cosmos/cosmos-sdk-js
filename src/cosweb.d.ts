import { iTM } from './module/TM/tm.d'
import { iKeys } from './module/Keys/keys.d'
import { iTX } from './module/TX/tx.d'
import { iStake } from './module/Stake/stake.d'
import { iGov } from './module/Gov/gov.d'
import { iSlashing } from './module/Slashing/slashing.d'
import { iFee } from './module/Fee/fee.d'

export declare interface iCosWeb {
    config: object
    // constructor(config: object): any

    // Key management APIs
    // Keys: iKeys

    // Tendermint APIs, such as query blocks, transactions and validatorset
    // TM: iTM

    // Create, sign and broadcast transactions
    // TX: iTX

    // Stake module APIs
    // Stake: iStake

    // Governance module APIs
    // Gov: iGov

    // Slashing module APIs
    // Slashing: iSlashing


    // Fee distribution module APIs
    // Fee: iFee

    // Version: string

    // NodeVersion: string
}

