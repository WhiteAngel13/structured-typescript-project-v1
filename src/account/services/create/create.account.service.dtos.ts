import { Account } from '../../domain/entity/account.entity';

export type CreateAccountServiceParamsDataDTO = {
  nickname: string;
};

export type CreateAccountServiceParamsDTO = {
  data: CreateAccountServiceParamsDataDTO;
};

export type CreateAccountServiceResponseDTO = {
  account: Account;
};
