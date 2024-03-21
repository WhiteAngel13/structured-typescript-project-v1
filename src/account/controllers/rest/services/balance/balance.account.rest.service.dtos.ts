import { AccountData } from '../../../../domain/entity/account.entity.data';

export type BalanceAccountRestServiceParamsDTO = {
  nickname: string;
};

export type BalanceAccountRestServiceResponseDTO = {
  account: AccountData;
};
