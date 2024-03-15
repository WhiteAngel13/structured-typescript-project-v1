import { Account } from '../../domain/entity/account.entity';

export type DepositAccountServiceParamsDataDTO = {
  value: number;
};

export type DepositAccountServiceParamsDTO = {
  toAccount: Account;
  data: DepositAccountServiceParamsDataDTO;
};

export type DepositAccountServiceResponseDTO = {
  account: Account;
};
