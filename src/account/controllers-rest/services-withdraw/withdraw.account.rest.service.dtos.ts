import { AccountData } from '../../domain/entity/account.entity.data';

export type WithdrawAccountRestServiceParamsDTO = {
  nickname: string;
  withdrawValue: string;
};

export type WithdrawAccountRestServiceResponseDTO = {
  account: AccountData;
};
