import { Account } from '../entity/account.entity';

export namespace AccountRepository {
  export namespace FindUnique {
    type Where = {
      id?: string;
      nickname?: string;
    };

    export type Params = {
      where: Where;
    };

    export type Response = {
      account: Account | undefined;
    };
  }
}

export interface AccountRepository {
  findUnique(
    params: AccountRepository.FindUnique.Params,
  ): Promise<AccountRepository.FindUnique.Response>;
  create(account: Account): Promise<void>;
  updateBalance(updatedAccount: Account): Promise<void>;
}
