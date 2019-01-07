// import { ITM } from './module/TM/tm.d'
import { IKeys } from './module/Keys/keys.d'
// import { ITX } from './module/TX/tx.d'
// import { IStake } from './module/Stake/stake.d'
// import { IGov } from './module/Gov/gov.d'
// import { ISlashing } from './module/Slashing/slashing.d'
// import { IFee } from './module/Fee/fee.d'

export declare interface ICosWeb {
    config: object;
    // constructor(config: object): any

    // Tendermint APIs, such as query blocks, transactions and validatorset
    // TM: iTM

    // Key management APIs
    Keys: IKeys;

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

