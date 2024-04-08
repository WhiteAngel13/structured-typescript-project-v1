import { Injectable } from '@nestjs/common';
import { Account } from '../../domain/entity/account.entity';
import { CreateAccountServiceParamsDTO } from './create.account.service.dtos';
import { CreateAccountServiceResponseDTO } from './create.account.service.dtos';
import { randomUUID } from 'crypto';
import { AccountRepositoryService } from '../../infra/repository/local-file.account.repository.service';

type Params = CreateAccountServiceParamsDTO;
type Response = CreateAccountServiceResponseDTO;

@Injectable()
export class CreateAccountService {
  constructor(private accountRepositoryService: AccountRepositoryService) {}

  async execute(params: Params): Promise<Response> {
    const accountWithNicknameExists =
      await this.accountRepositoryService.findUnique({
        where: { nickname: params.data.nickname },
      });

    if (accountWithNicknameExists.account)
      throw new Error('Account with nickname already exists');
    const accountId = randomUUID();

    const account = new Account({
      id: accountId,
      balance: 0,
      nickname: params.data.nickname,
    });

    await this.accountRepositoryService.create(account);

    return { account };
  }
}
