import { AccountRestController } from './controllers/rest/account.rest.controller';
import { BalanceAccountRestService } from './controllers/rest/services/balance/balance.account.rest.service';
import { CreateAccountRestService } from './controllers/rest/services/create/create.account.rest.service';
import { DepositAccountRestService } from './controllers/rest/services/deposit/deposit.account.rest.service';
import { WithdrawAccountRestService } from './controllers/rest/services/withdraw/withdraw.account.rest.service';
import { AccountRepositoryService } from './infra/repository/local-file.account.repository.service';
import { AccountService } from './services/account/account.service';
import { BalanceAccountService } from './services/balance/balance.account.service';
import { CreateAccountService } from './services/create/create.account.service';
import { DepositAccountService } from './services/deposit/deposit.account.service';
import { GetAccountService } from './services/get/get.account.service';
import { WithdrawAccountService } from './services/withdraw/withdraw.account.service';

const localFileAccountRepositoryService = new AccountRepositoryService();

const accountRepositoryService = localFileAccountRepositoryService;

const getAccountService = new GetAccountService(accountRepositoryService);
const createAccountService = new CreateAccountService(accountRepositoryService);
const depositAccountService = new DepositAccountService(
  accountRepositoryService,
);
const withdrawAccountSerive = new WithdrawAccountService(
  accountRepositoryService,
);
const balanceAccountService = new BalanceAccountService(
  accountRepositoryService,
);

export const accountService = new AccountService(
  getAccountService,
  createAccountService,
  depositAccountService,
  withdrawAccountSerive,
  balanceAccountService,
);

const createAccountRestService = new CreateAccountRestService(accountService);
const depositAccountRestService = new DepositAccountRestService(accountService);
const withdrawAccountRestService = new WithdrawAccountRestService(
  accountService,
);
const balanceAccountRestService = new BalanceAccountRestService(accountService);

export const accountRestController = new AccountRestController(
  createAccountRestService,
  depositAccountRestService,
  withdrawAccountRestService,
  balanceAccountRestService,
);
