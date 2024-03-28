type MilsonSchemaTypes = 'object' | 'string';

type identity<T> = T;
type objectFlatten<T> = identity<{ [K in keyof T]: T[K] }>;

export interface MilsonSchema<
  Type extends MilsonSchemaTypes,
  ValidateResponse,
> {
  validate(value: unknown): ValidateResponse;
}

class MilsonObjectValidator<T extends Record<string, MilsonSchema<any, any>>>
  implements MilsonSchema<'object', T>
{
  __output: T;

  constructor(private schema: T) {}

  validate(params: unknown): T {
    if (typeof params !== 'object')
      throw new Error('invalid params: because it is not an object');
    if (params === null) throw new Error('invalid params');
    if (Array.isArray(params)) throw new Error('invalid params');

    for (const key in params) {
      const validator = this.schema[key];
      if (!validator)
        throw new Error('invalid params: because it has an unknown key');
      //@ts-ignore
      validator.validate(params[key]);
    }

    return params as T;
  }
}

type MilsonStringValidatorOptions = {
  message?: string;
};

class MilsonStringValidator implements MilsonSchema<'string', string> {
  constructor(private options?: MilsonStringValidatorOptions) {}

  validate(params: unknown) {
    if (typeof params !== 'string') {
      let message: string;

      if (this.options?.message) {
        message = this.options.message;
      } else {
        message = 'invalid params: because it is not a string';
      }

      throw new Error(message);
    }

    return params;
  }
}

type MilsonInferObject<T extends Record<string, MilsonSchema<any, any>>> = {
  [K in keyof T]: T[K] extends MilsonSchema<any, any>
    ? MilsonInfer<T[K]>
    : never;
};

type MilsonInfer<T extends MilsonSchema<any, any>> =
  T extends MilsonSchema<'object', infer U>
    ? //@ts-ignore
      objectFlatten<MilsonInferObject<U>>
    : T extends MilsonSchema<'string', string>
      ? string
      : never;

const milson = {
  object: <T extends Record<string, MilsonSchema<any, any>>>(
    schema: T,
  ): MilsonSchema<'object', T> => new MilsonObjectValidator<T>(schema),
  string: (
    params?: MilsonStringValidatorOptions,
  ): MilsonSchema<'string', string> => new MilsonStringValidator(params),
};

const testSchema = milson.object({
  nickname: milson.string({ message: 'nickname is required' }),
  work: milson.object({
    age: milson.string(),
  }),
});

const jorge = { nickname: 'ssas', age: 20 };

testSchema.validate(jorge);

type Test = MilsonInfer<typeof testSchema>;
