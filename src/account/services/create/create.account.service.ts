import { Account } from '../../domain/entity/account.entity';
import { AccountRepository } from '../../domain/repository/account.repository';
import { CreateAccountServiceParamsDTO } from './create.account.service.dtos';
import { CreateAccountServiceResponseDTO } from './create.account.service.dtos';
import { randomUUID } from 'crypto';

type Params = CreateAccountServiceParamsDTO;
type Response = CreateAccountServiceResponseDTO;

export class CreateAccountService {
  constructor(private accountRepository: AccountRepository) {}

  async execute(params: Params): Promise<Response> {
    const accountWithNicknameExists =
      await this.accountRepository.getByNickname(params.data.nickname);

    if (accountWithNicknameExists)
      throw new Error('Account with nickname already exists'); // A string passada para new Error fica armazenada dentro do objeto erro, com chave 'message'

    const accountId = randomUUID();

    const account = new Account({
      id: accountId,
      balance: 0,
      nickname: params.data.nickname,
    });

    await this.accountRepository.create(account);

    return { account };
  }
}
