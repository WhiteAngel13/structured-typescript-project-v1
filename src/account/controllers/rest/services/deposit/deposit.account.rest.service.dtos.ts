import { z } from 'zod';
import { AccountData } from '../../../../domain/entity/account.entity.data';

export const DepositAccountRestServiceParamsDTOSchema = z.object({
  nickname: z.string(),
  value: z.number(),
});

export type DepositAccountRestServiceParamsDTO = z.infer<
  typeof DepositAccountRestServiceParamsDTOSchema
>;

export type DepositAccountRestServiceResponseDTO = {
  account: AccountData;
};
