import { AccountData } from '../../../../domain/entity/account.entity.data';

export type CreateAccountRestServiceParamsDTO = {
  nickname: string;
};

export type CreateAccountRestServiceResponseDTO = {
  account: AccountData;
};
