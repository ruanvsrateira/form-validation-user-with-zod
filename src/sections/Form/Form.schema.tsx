import { z } from "zod";

const REQUIRED_FIELD_ERROR = "Campo Obrigatório";
const MIN_NOT_ALCANCED = (len: number) =>
  `O campo deve ter mais de ${len} caractéres`;

export const schema = z
  .object({
    name: z.string().nonempty(REQUIRED_FIELD_ERROR).min(6, MIN_NOT_ALCANCED(6)),
    email: z.string().nonempty(REQUIRED_FIELD_ERROR),
    password: z
      .string()
      .nonempty(REQUIRED_FIELD_ERROR)
      .min(6, MIN_NOT_ALCANCED(6)),
    repeat_password: z
      .string()
      .nonempty(REQUIRED_FIELD_ERROR)
      .min(6, MIN_NOT_ALCANCED(6)),
    accept: z.literal(true, {
      errorMap: () => ({
        message: "Para continuar você deve aceitar os termos.",
      }),
    }),
    bornDay: z
      .string()
      .nonempty(REQUIRED_FIELD_ERROR)
      .min(6, MIN_NOT_ALCANCED(6)),
  })
  .superRefine(({ password, repeat_password }, ctx) => {
    if (password !== repeat_password) {
      ctx.addIssue({
        path: ["repeat_password"],
        code: "custom",
        message: "As senhas não são semelhantes",
      });
    }
  });

export type FormSchemaType = z.infer<typeof schema>;
