import { AccountData } from '../../domain/entity/account.entity.data';

export type DepositAccountRestServiceParamsDTO = {
  nickname: string;
  depositValue: string;
};

export type DepositAccountRestServiceResponseDTO = {
  account: AccountData;
};
