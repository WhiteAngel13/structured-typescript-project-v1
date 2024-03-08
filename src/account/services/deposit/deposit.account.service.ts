import { Account } from "../../domain/entity/account.entity";
import { AccountRepository } from "../../domain/repository/account.repository";
import { DepositAccountServiceParamsDTO } from "./deposit.account.service.dtos";
import { DepositAccountServiceResponseDTO } from "./deposit.account.service.dtos";

type Params = DepositAccountServiceParamsDTO;
type Response = DepositAccountServiceResponseDTO;

export class DepositAccountService {
    constructor(private accountRepository: AccountRepository) {}

    async execute(params: Params): Promise<Response> {
        const account = await this.accountRepository.getByNickname(params.data.nickname);
  
      if (!account)
        throw new Error("Account with nickname does not exists");
  
      const accountId = account.id;
      const updatedBalance = account.balance + params.data.depositValue;
  
      const updatedAccount = new Account({
        id: accountId,
        balance: updatedBalance,
        nickname: params.data.nickname,
      });
  
      await this.accountRepository.updateBalance(updatedAccount); // Aqui eu atualizo uma conta que já existe criando uma com o mesmo ID, deve ter um jeito melhor de fazer isso
  
      return { account: updatedAccount };
    }}