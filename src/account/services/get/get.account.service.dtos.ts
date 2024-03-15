import { Account } from '../../domain/entity/account.entity';
import { AccountRepository } from '../../domain/repository/account.repository';

export type GetAccountServiceParamsDTO = {
  by: AccountRepository.FindUnique.Params['where'];
};

export type GetAccountServiceResponseDTO = {
  account?: Account;
};
