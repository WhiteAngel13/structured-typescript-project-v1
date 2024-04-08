import { createZodDto } from 'nestjs-zod';
import { AccountData } from '../../../../domain/entity/account.entity.data';
import { z } from 'zod';

export const CreateAccountRestServiceParamsDTOSchema = z.object({
  nickname: z.string(),
});

export class CreateAccountRestServiceParamsDTO extends createZodDto(
  CreateAccountRestServiceParamsDTOSchema,
) {}

export type CreateAccountRestServiceResponseDTO = {
  account: AccountData;
};
