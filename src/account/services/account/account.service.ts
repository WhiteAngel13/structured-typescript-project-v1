import { CreateAccountService } from "../create/create.account.service";
import { CreateAccountServiceParamsDTO } from "../create/create.account.service.dtos";
import { CreateAccountServiceResponseDTO } from "../create/create.account.service.dtos";
import { DepositAccountService } from "../deposit/deposit.account.service";
import { DepositAccountServiceParamsDTO, DepositAccountServiceResponseDTO } from "../deposit/deposit.account.service.dtos";

export class AccountService {
    constructor(private readonly createAccountService: CreateAccountService,
      private readonly depositAccountService: DepositAccountService) {}
  
    async create(
      params: CreateAccountServiceParamsDTO
    ): Promise<CreateAccountServiceResponseDTO> {
      return this.createAccountService.execute(params);
    }

    async deposit(params: DepositAccountServiceParamsDTO): Promise<DepositAccountServiceResponseDTO> {
      return this.depositAccountService.execute(params);
    }
  }