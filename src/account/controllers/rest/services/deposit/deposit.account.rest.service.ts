import { AccountService } from '../../../../services/account/account.service';
import { DepositAccountRestServiceParamsDTO } from './deposit.account.rest.service.dtos';
import { DepositAccountRestServiceResponseDTO } from './deposit.account.rest.service.dtos';

type Params = DepositAccountRestServiceParamsDTO;
type Response = DepositAccountRestServiceResponseDTO;

export class DepositAccountRestService {
  constructor(private readonly accountService: AccountService) {}

  async execute(params: Params): Promise<Response> {
    const { account: accountExists } = await this.accountService.get({
      by: { nickname: params.nickname },
    });

    if (!accountExists) throw new Error('account not found');

    const account = this.accountService.deposit({
      toAccount: accountExists,
      data: { value: params.value },
    });

    return account;
  }
}
