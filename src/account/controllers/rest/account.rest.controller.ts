import {
  BalanceAccountRestServiceParamsDTOSchema,
  BalanceAccountRestServiceResponseDTO,
} from './services/balance/balance.account.rest.service.dtos';
import { CreateAccountRestService } from './services/create/create.account.rest.service';
import {
  CreateAccountRestServiceParamsDTOSchema,
  CreateAccountRestServiceResponseDTO,
} from './services/create/create.account.rest.service.dtos';
import { DepositAccountRestService } from './services/deposit/deposit.account.rest.service';
import {
  DepositAccountRestServiceParamsDTOSchema,
  DepositAccountRestServiceResponseDTO,
} from './services/deposit/deposit.account.rest.service.dtos';
import { WithdrawAccountRestService } from './services/withdraw/withdraw.account.rest.service';
import { WithdrawAccountRestServiceResponseDTO } from './services/withdraw/withdraw.account.rest.service.dtos';
import { BalanceAccountRestService } from './services/balance/balance.account.rest.service';
import { WithdrawAccountRestServiceParamsDTOSchema } from './services/withdraw/withdraw.account.rest.service.dtos';

export class AccountRestController {
  constructor(
    private readonly createAccountRestService: CreateAccountRestService,
    private readonly depositAccountRestService: DepositAccountRestService,
    private readonly withdrawAccountRestService: WithdrawAccountRestService,
    private readonly balanceAccountRestService: BalanceAccountRestService,
  ) {}
  async create(params: unknown): Promise<CreateAccountRestServiceResponseDTO> {
    const paramsDTO = CreateAccountRestServiceParamsDTOSchema.parse(params);
    return this.createAccountRestService.execute(paramsDTO);
  }

  async deposit(
    params: unknown,
  ): Promise<DepositAccountRestServiceResponseDTO> {
    const paramsDTO = DepositAccountRestServiceParamsDTOSchema.parse(params);
    return this.depositAccountRestService.execute(paramsDTO);
  }

  async withdraw(
    params: unknown,
  ): Promise<WithdrawAccountRestServiceResponseDTO> {
    const paramsDTO = WithdrawAccountRestServiceParamsDTOSchema.parse(params);
    return this.withdrawAccountRestService.execute(paramsDTO);
  }

  async balance(
    params: unknown,
  ): Promise<BalanceAccountRestServiceResponseDTO> {
    const paramsDTO = BalanceAccountRestServiceParamsDTOSchema.parse(params);
    return this.balanceAccountRestService.execute(paramsDTO);
  }
}
