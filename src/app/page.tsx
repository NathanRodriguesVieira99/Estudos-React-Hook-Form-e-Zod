"use client";

import { Form } from "@/components/Form";
import { FormProvider, useForm } from "react-hook-form";

export default function Home() {
  /* 
  inicializo o gerenciamento do formulário 
  useForm para usar os métodos e tipagem (zod e @hookform/resolvers/zod)
  */
  const loginForm = useForm({
    // TODO adicionar resolver com e tipagem com zod
  });

  // função que vai ser chamada quando o formulário for enviado
  const handleSubmitLogin = (data: unknown) => {
    // TODO adicionar função
    console.log(data);
  };

  return (
    <>
      {/* 
      FormProvider para usar o contexto do react hook form e conectar aos componentes filhos com o useForm via spread (...)
      */}
      <FormProvider {...loginForm}>
        <div className="flex  flex-col items-center mt-24">
          {/* 
          Valida os dados  e chama a função de submit 
          */}
          <Form.Root onSubmit={loginForm.handleSubmit(handleSubmitLogin)}>
            <Form.Field>
              <Form.Label htmlFor="nome">Nome</Form.Label>
              <Form.Input
                name="nome"
                type="text"
                placeholder="Informe seu nome..."
              />
            </Form.Field>
          </Form.Root>

          <Form.Root>
            <Form.Field className="mt-4">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Input
                name="email"
                type="email"
                placeholder="Informe seu email..."
              />
            </Form.Field>
          </Form.Root>

          <Form.Root>
            <Form.Field className="mt-4">
              <Form.Label htmlFor="senha">Senha</Form.Label>
              <Form.Input
                name="senha"
                type="password"
                placeholder="Informe sua senha...."
              />
            </Form.Field>
          </Form.Root>
        </div>
      </FormProvider>

      {/* TODO adicionar botões */}
    </>
  );
}
