import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(3, "O nome precisa ter no mínimo 3 caracteres."),
  lastName: z
    .string()
    .min(3, "O Sobrenome precisa ter no mínimo 3 caracteres."),
  email: z.email("Por favor, insira um email válido."),
  message: z
    .string()
    .min(10, "A mensagem precisa ter no mínimo 10 caracteres."),
});
