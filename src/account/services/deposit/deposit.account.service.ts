import { AccountRepository } from '../../domain/repository/account.repository';
import { DepositAccountServiceParamsDTO } from './deposit.account.service.dtos';
import { DepositAccountServiceResponseDTO } from './deposit.account.service.dtos';

type Params = DepositAccountServiceParamsDTO;
type Response = DepositAccountServiceResponseDTO;

export class DepositAccountService {
  constructor(private accountRepository: AccountRepository) {}

  async execute(params: Params): Promise<Response> {
    if (params.data.value <= 0) throw new Error('invalid value');

    const account = params.toAccount;
    account.addBalance(params.data.value);

    await this.accountRepository.updateBalance(account);

    return { account };
  }
}
