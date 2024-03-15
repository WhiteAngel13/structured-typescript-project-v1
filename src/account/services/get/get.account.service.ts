import { AccountRepository } from '../../domain/repository/account.repository';
import {
  GetAccountServiceParamsDTO,
  GetAccountServiceResponseDTO,
} from './get.account.service.dtos';

type Params = GetAccountServiceParamsDTO;
type Response = GetAccountServiceResponseDTO;

export class GetAccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  async execute(params: Params): Promise<Response> {
    const { account } = await this.accountRepository.findUnique({
      where: params.by,
    });

    if (!account) return { account: undefined };

    return { account };
  }
}
