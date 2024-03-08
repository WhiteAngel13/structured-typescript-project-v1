import { AccountService } from "../../services/account/account.service";
import { WithdrawAccountRestServiceParamsDTO, WithdrawAccountRestServiceResponseDTO } from "./withdraw.account.rest.service.dtos";

type Params = WithdrawAccountRestServiceParamsDTO;
type Response = WithdrawAccountRestServiceResponseDTO

export class WithdrawAccountRestService {
    constructor(private readonly accountService: AccountService) {}

    async execute(params: Params): Promise<Response> {
        
        const numberWithdrawValue = Number(params.withdrawValue);
        if (isNaN(numberWithdrawValue)) throw new Error("invalid value");
        if (numberWithdrawValue <= 0) throw new Error("invalid value");

       const account = this.accountService.withdraw({
        data: {
            nickname: params.nickname,
            withdrawValue: numberWithdrawValue,
           }
       })
        return account;
    }
}