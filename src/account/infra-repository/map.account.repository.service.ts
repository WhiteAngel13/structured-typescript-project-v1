import { Account } from '../domain/entity/account.entity';
import { AccountRepository } from '../domain/repository/account.repository';

const map = new Map<string, Account>();

export class MapAccountRepositoryService implements AccountRepository {
  async create(account: Account): Promise<void> {
    map.set(account.id, account);
  }

  async getById(id: string): Promise<Account | undefined> {
    return map.get(id);
  }

  async getByNickname(nickname: string): Promise<Account | undefined> {
    for (const account of map.values()) {
      if (account.nickname === nickname) {
        return account;
      }
    }
  }

  async updateBalance(updatedAccount: Account): Promise<void> {
    this.create(updatedAccount);
  }
}

// Não entendi o motivo de ter service no nome do arquivo
