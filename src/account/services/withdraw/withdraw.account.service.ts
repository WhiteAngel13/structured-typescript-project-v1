import { Account } from "../../domain/entity/account.entity";

export type WithdrawAccountServiceParamsDataDTO = {
    nickname: string;
    withdrawValue: number;
}

export type WithdrawAccountServiceParamsDTO = {
    data: WithdrawAccountServiceParamsDataDTO;
}

export type WithdrawAccountServiceResponseDTO = {
    account: Account;
}