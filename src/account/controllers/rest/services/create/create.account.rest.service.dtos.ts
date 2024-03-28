import { AccountData } from '../../../../domain/entity/account.entity.data';
import { z } from 'zod';

export const CreateAccountRestServiceParamsDTOSchema = z.object({
  nickname: z.string(),
});

export type CreateAccountRestServiceParamsDTO = z.infer<
  typeof CreateAccountRestServiceParamsDTOSchema
>;

export type CreateAccountRestServiceResponseDTO = {
  account: AccountData;
};
