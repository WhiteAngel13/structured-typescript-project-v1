import { Account } from '../../domain/entity/account.entity';

export type WithdrawAccountServiceParamsDataDTO = {
  value: number;
};

export type WithdrawAccountServiceParamsDTO = {
  toAccount: Account;
  data: WithdrawAccountServiceParamsDataDTO;
};

export type WithdrawAccountServiceResponseDTO = {
  account: Account;
};
