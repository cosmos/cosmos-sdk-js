import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";

export interface Delegation {
  delegator_addr: AccAddress;
  validator_addr: ValAddress;
  shares: string;
  height: number;
}
