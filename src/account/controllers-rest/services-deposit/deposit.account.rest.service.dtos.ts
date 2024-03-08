import { Account } from "../../domain/entity/account.entity";
import { AccountData } from "../../domain/entity/account.entity.data";
import { DepositAccountServiceParamsDataDTO } from "../../services/deposit/deposit.account.service.dtos";


export type DepositAccountRestServiceParamsDTO = {
    nickname: string;
    depositValue: string;
  };

export type DepositAccountRestServiceResponseDTO = {
    account: AccountData;
};