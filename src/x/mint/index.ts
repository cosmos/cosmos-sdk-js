import { CosmosSDK } from "../../cosmos-sdk";
import { MintParameter } from "./types";

export * from "./types";

export namespace Mint {
  export function getParams(sdk: CosmosSDK) {
    return sdk.get<MintParameter>("/minting/parameters");
  }

  export function getInflation(sdk: CosmosSDK) {
    return sdk.get<string>("/minting/inflation");
  }

  export function getAnnualProvisions(sdk: CosmosSDK) {
    return sdk.get<string>("/minting/annual-provisions");
  }
}
