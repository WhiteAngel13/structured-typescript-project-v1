import { AccountService } from '../../../../services/account/account.service';
import { DepositAccountRestServiceParamsDTO } from './deposit.account.rest.service.dtos';
import { DepositAccountRestServiceResponseDTO } from './deposit.account.rest.service.dtos';

type Params = DepositAccountRestServiceParamsDTO;
type Response = DepositAccountRestServiceResponseDTO;

export class DepositAccountRestService {
  constructor(private readonly accountService: AccountService) {}

  async execute(params: Params): Promise<Response> {
    const account = this.accountService.deposit({
      data: {
        nickname: params.nickname,
        value: params.value,
      },
    });
    return account;
  }
}
