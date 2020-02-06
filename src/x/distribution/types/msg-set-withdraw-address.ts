import { Msg } from "../../../types/msg";
import { AccAddress } from "../../../types/address/acc-address";

export class MsgSetWithdrawAddress extends Msg {
  /**
   * @param delegator_address
   * @param withdraw_address
   */
  constructor(
    public delegator_address: AccAddress,
    public withdraw_address: AccAddress
  ) {
    super();
  }

  /**
   * @see Amino.reviver
   */
  public static fromJSON(value: any) {
    return new this(
      AccAddress.fromBech32(value.delegator_address),
      AccAddress.fromBech32(value.withdraw_address)
    );
  }
}
