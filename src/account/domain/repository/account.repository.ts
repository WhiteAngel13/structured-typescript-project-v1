import { Account } from "../entity/account.entity";

export interface AccountRepository {
  getById(id: string): Promise<Account | undefined>;
  getByNickname(nickname: string): Promise<Account | undefined>;
  create(account: Account): Promise<void>;
  updateBalance(updatedAccount: Account): Promise<void>;
}