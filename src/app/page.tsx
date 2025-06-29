"use client";

import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import {
  cadastroSchema,
  type cadastroSchemaProps,
} from "@/schemas/cadastroSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function Home() {
  const [isSaving, startIsSaving] = useTransition(); // useTransition usado para exibir loading enquanto o cadastro está sendo processado, sem travar a interface.

  // inicializo o gerenciamento do formulário com useForm para usar os métodos e tipagem (cadastroSchemaProps) e @hookform/resolvers/zod
  const cadastroForm = useForm<cadastroSchemaProps>({
    resolver: zodResolver(cadastroSchema),
  });

  // função que vai ser chamada quando o formulário for enviado
  const handleSubmitLogin = (data: cadastroSchemaProps) => {
    startIsSaving(async () => {
      await new Promise((resolver) => setTimeout(resolver, 2000)); // simula delay
      console.log(data); // aqui teria um await e chamaria uma função real de cadastro
      cadastroForm.reset(); // limpa o formulário após cadastrar
    });
  };

  return (
    <>
      {/* 
      FormProvider para usar o contexto do react hook form e conectar aos componentes filhos com o useForm via spread (...)
      */}
      <FormProvider {...cadastroForm}>
        <div className="flex  flex-col items-center mt-24">
          <Form.Root onSubmit={cadastroForm.handleSubmit(handleSubmitLogin)}>
            <Form.Field>
              <Form.Label htmlFor="name">Nome</Form.Label>
              <Form.Input
                name="name"
                type="text"
                placeholder="Informe seu nome..."
              />
              <Form.ErrorMessage field="name" />
            </Form.Field>

            <Form.Field className="mt-4">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Input
                name="email"
                type="email"
                placeholder="Informe seu email..."
              />
              <Form.ErrorMessage field="email" />
            </Form.Field>

            <Form.Field className="mt-4">
              <Form.Label htmlFor="password">Senha</Form.Label>
              <Form.Input
                name="password"
                type="password"
                placeholder="Informe sua senha...."
              />
              <Form.ErrorMessage field="password" />
            </Form.Field>

            {/* TODO refazer esse button com composition patter */}
            <Button.Root type="submit" disabled={isSaving}>
              {isSaving ? <p> Cadastrando...</p> : <p>Cadastrar</p>}
            </Button.Root>
          </Form.Root>
        </div>
      </FormProvider>
    </>
  );
}
