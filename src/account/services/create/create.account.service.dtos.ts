import { Account } from "../../domain/entity/account.entity";

export type CreateAccountServiceParamsDataDTO = {
    nickname: string; // Aqui vão todos os dados fornecidos pelo usuário?
}

export type CreateAccountServiceParamsDTO = {
    data: CreateAccountServiceParamsDataDTO; // Não entendi direito a necessidade dessa estrutura
}

export type CreateAccountServiceResponseDTO = {
    account: Account;
}

