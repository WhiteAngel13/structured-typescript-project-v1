import { AccountData } from '../../../../domain/entity/account.entity.data';
import { z } from 'zod';

export const BalanceAccountRestServiceParamsDTOSchema = z.object({
  nickname: z.string(),
});

export type BalanceAccountRestServiceParamsDTO = z.infer<
  typeof BalanceAccountRestServiceParamsDTOSchema
>;

export type BalanceAccountRestServiceResponseDTO = {
  account: AccountData;
};
