import { AccountRepository } from '../../domain/repository/account.repository';
import {
  BalanceAccountServiceParamsDTO,
  BalanceAccountServiceResponseDTO,
} from './balance.account.service.dtos';

type Params = BalanceAccountServiceParamsDTO;
type Response = BalanceAccountServiceResponseDTO;

export class BalanceAccountService {
  constructor(private accountRepository: AccountRepository) {}

  async execute(params: Params): Promise<Response> {
    const account = params.toAccount;

    return { account };
  }
}
