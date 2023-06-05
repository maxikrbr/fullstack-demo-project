import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "O nome deve contar no mínimo 3 caracteres"),
  email: z.string().email("Deve ser um email válido"),
  password: z
    .string()
    .min(8, "A senha deve conter no mínimo 4 caracteres."),
  phone: z.string().length(11, "O telefone deve ter 11 caracteres"),
});

export type RegisterData = z.infer<typeof registerSchema>;
