import { CreateAccountRestService } from "./services-create/create.account.rest.service";
import { CreateAccountRestServiceResponseDTO } from "./services-create/create.account.rest.service.dtos";
import { DepositAccountRestService } from "./services-deposit/deposit.account.rest.service";
import { DepositAccountRestServiceResponseDTO } from "./services-deposit/deposit.account.rest.service.dtos";
import { WithdrawAccountRestService } from "./services-withdraw/withdraw.account.rest.service";
import { WithdrawAccountRestServiceResponseDTO } from "./services-withdraw/withdraw.account.rest.service.dtos";

export class AccountRestController {
    constructor(private readonly createAccountRestService: CreateAccountRestService,
        private readonly depositAccountRestService: DepositAccountRestService,
        private readonly withdrawAccountRestService: WithdrawAccountRestService) {}
    async create(params: unknown): Promise<CreateAccountRestServiceResponseDTO> {
        if (typeof params !== "object") throw new Error("invalid params");
        if (params === null) throw new Error("invalid params");
        if (Array.isArray(params)) throw new Error("invalid params");
        const {nickname} = params as {nickname?: unknown};
        if (typeof nickname !== "string") throw new Error("invalid nickname");

        return this.createAccountRestService.execute({nickname});
    }

    async deposit(params:unknown): Promise<DepositAccountRestServiceResponseDTO> {
        if (typeof params !== "object") throw new Error("invalid params");
        if (params === null) throw new Error("invalid params");
        if (Array.isArray(params)) throw new Error("invalid params");
        const {nickname} = params as {nickname?: unknown};
        if (typeof nickname !== "string") throw new Error("invalid nickname");
        const {depositValue} = params as {depositValue?: unknown};
        if (typeof depositValue !== "string") throw new Error("invalid value");

        return this.depositAccountRestService.execute({nickname, depositValue})
    }

    async withdraw(params: unknown): Promise<WithdrawAccountRestServiceResponseDTO> {
        if (typeof params !== "object") throw new Error("invalid params");
        if (params === null) throw new Error("invalid params");
        if (Array.isArray(params)) throw new Error("invalid params");
        const {nickname} = params as {nickname?: unknown};
        if (typeof nickname !== "string") throw new Error("invalid nickname");
        const {withdrawValue} = params as {withdrawValue?: unknown};
        if (typeof withdrawValue !== "string") throw new Error("invalid value");

        return this.withdrawAccountRestService.execute({nickname, withdrawValue});
    }
}