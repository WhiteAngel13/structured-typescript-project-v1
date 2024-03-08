import { AccountService } from "../../services/account/account.service";
import { DepositAccountRestServiceParamsDTO } from "./deposit.account.rest.service.dtos";
import { DepositAccountRestServiceResponseDTO } from "./deposit.account.rest.service.dtos";

type Params = DepositAccountRestServiceParamsDTO;
type Response = DepositAccountRestServiceResponseDTO;

export class DepositAccountRestService {
    constructor(private readonly accountService: AccountService) {}

    async execute(params: Params): Promise<Response> {
        
        const numberDepositValue = Number(params.depositValue);
        if (isNaN(numberDepositValue)) throw new Error("invalid value");
        if (numberDepositValue <= 0) throw new Error("invalid value");

       const account = this.accountService.deposit({
        data: {
            nickname: params.nickname,
            depositValue: numberDepositValue,
           }
       })
        return account;
    }
}