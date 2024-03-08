import { Account } from '../../domain/entity/account.entity';

export type DepositAccountServiceParamsDataDTO = {
  nickname: string;
  depositValue: number;
};

export type DepositAccountServiceParamsDTO = {
  data: DepositAccountServiceParamsDataDTO;
};

export type DepositAccountServiceResponseDTO = {
  account: Account;
};
