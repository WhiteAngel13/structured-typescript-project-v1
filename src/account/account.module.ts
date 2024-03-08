import { AccountRestController } from './controllers/rest/account.rest.controller';
import { CreateAccountRestService } from './controllers/rest/services/create/create.account.rest.service';
import { DepositAccountRestService } from './controllers/rest/services/deposit/deposit.account.rest.service';
import { WithdrawAccountRestService } from './controllers/rest/services/withdraw/withdraw.account.rest.service';
import { MapAccountRepositoryService } from './infra/repository/map.account.repository.service';
import { AccountService } from './services/account/account.service';
import { CreateAccountService } from './services/create/create.account.service';
import { DepositAccountService } from './services/deposit/deposit.account.service';
import { WithdrawAccountService } from './services/withdraw/withdraw.account.service.dtos';

const mapAccountRepositoryService = new MapAccountRepositoryService();

const createAccountService = new CreateAccountService(
  mapAccountRepositoryService,
);
const depositAccountService = new DepositAccountService(
  mapAccountRepositoryService,
);
const withdrawAccountSerive = new WithdrawAccountService(
  mapAccountRepositoryService,
);

export const accountService = new AccountService(
  createAccountService,
  depositAccountService,
  withdrawAccountSerive,
);

const createAccountRestService = new CreateAccountRestService(accountService);
const depositAccountRestService = new DepositAccountRestService(accountService);
const withdrawAccountRestService = new WithdrawAccountRestService(
  accountService,
);
export const accountRestController = new AccountRestController(
  createAccountRestService,
  depositAccountRestService,
  withdrawAccountRestService,
);
