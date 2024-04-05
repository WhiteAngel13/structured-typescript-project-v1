import { AccountData } from '../../../../domain/entity/account.entity.data';
import { z } from 'zod';

export const WithdrawAccountRestServiceParamsDTOSchema = z.object({
  nickname: z.string(),
  value: z.number(),
});

export type WithdrawAccountRestServiceParamsDTO = z.infer<
  typeof WithdrawAccountRestServiceParamsDTOSchema
>;

export type WithdrawAccountRestServiceResponseDTO = {
  account: AccountData;
};
