import { z } from "zod";

// validação para o form de cadastro
export const cadastroSchema = z.object({
  // Os nomes dos campos abaixo (name, email, password) devem  ser iguais à prop "name" dos inputs no formulário React Hook Form.
  name: z.string().min(1, { message: "Nome é obrigatório!" }),
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres" })
    .regex(/[A-Z]/, {
      message: "A senha deve ter ao menos uma letra maiúscula",
    })
    .regex(/[0-9]/, { message: "A senha deve ter ao menos um número" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "A senha deve ter ao menos um caractere especial",
    }),
});

// tipagem para os campos do form de cadastro
export type cadastroSchemaProps = z.infer<typeof cadastroSchema>;
