import { CreateAccountService } from '../create/create.account.service';
import { CreateAccountServiceParamsDTO } from '../create/create.account.service.dtos';
import { CreateAccountServiceResponseDTO } from '../create/create.account.service.dtos';
import { DepositAccountService } from '../deposit/deposit.account.service';
import {
  DepositAccountServiceParamsDTO,
  DepositAccountServiceResponseDTO,
} from '../deposit/deposit.account.service.dtos';
import {
  WithdrawAccountServiceParamsDTO,
  WithdrawAccountServiceResponseDTO,
} from '../withdraw/withdraw.account.service';
import { WithdrawAccountService } from '../withdraw/withdraw.account.service.dtos';

export class AccountService {
  constructor(
    private readonly createAccountService: CreateAccountService,
    private readonly depositAccountService: DepositAccountService,
    private readonly withdrawAccountSerive: WithdrawAccountService,
  ) {}

  async create(
    params: CreateAccountServiceParamsDTO,
  ): Promise<CreateAccountServiceResponseDTO> {
    return this.createAccountService.execute(params);
  }

  async deposit(
    params: DepositAccountServiceParamsDTO,
  ): Promise<DepositAccountServiceResponseDTO> {
    return this.depositAccountService.execute(params);
  }

  async withdraw(
    params: WithdrawAccountServiceParamsDTO,
  ): Promise<WithdrawAccountServiceResponseDTO> {
    return this.withdrawAccountSerive.execute(params);
  }
}
