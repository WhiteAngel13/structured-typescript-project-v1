import { Account } from '../../domain/entity/account.entity';
import { AccountRepository } from '../../domain/repository/account.repository';
import {
  WithdrawAccountServiceParamsDTO,
  WithdrawAccountServiceResponseDTO,
} from './withdraw.account.service';

type Params = WithdrawAccountServiceParamsDTO;
type Response = WithdrawAccountServiceResponseDTO;

export class WithdrawAccountService {
  constructor(private accountRepository: AccountRepository) {}

  async execute(params: Params): Promise<Response> {
    const account = await this.accountRepository.getByNickname(
      params.data.nickname,
    );

    if (!account) throw new Error('Account with nickname does not exists');

    if (account.balance < params.data.withdrawValue)
      throw new Error('Balance insuficient');

    const accountId = account.id;
    const updatedBalance = account.balance - params.data.withdrawValue;

    const updatedAccount = new Account({
      id: accountId,
      balance: updatedBalance,
      nickname: params.data.nickname,
    });

    await this.accountRepository.updateBalance(updatedAccount);

    return { account: updatedAccount };
  }
}
