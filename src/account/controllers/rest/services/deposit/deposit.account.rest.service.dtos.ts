import { AccountData } from '../../../../domain/entity/account.entity.data';

export type DepositAccountRestServiceParamsDTO = {
  nickname: string;
  value: number;
};

export type DepositAccountRestServiceResponseDTO = {
  account: AccountData;
};
