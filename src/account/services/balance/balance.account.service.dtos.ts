import { Account } from '../../domain/entity/account.entity';

export type BalanceAccountServiceParamsDTO = {
  toAccount: Account;
};

export type BalanceAccountServiceResponseDTO = {
  account: Account;
};
