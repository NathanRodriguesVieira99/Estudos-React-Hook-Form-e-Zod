import type { ComponentProps } from "react";

// importa o contexto do React Hook Form
import { useFormContext } from "react-hook-form";

interface InputProps extends ComponentProps<"input"> {
  name: string; // o nome do campo do input
  placeholder: string;
}

export const Input = ({ name, placeholder, ...props }: InputProps) => {
  // chama o register usando o contexto do react hook form
  const { register } = useFormContext();

  return (
    <input
      id={name} // id do input com o nome do campo
      className="flex-1 rounded border px-3 py-2 border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-800 placeholder:text-zinc-500"
      placeholder={placeholder}
      {...register(name)} // conecta o input ao react hook form usando a prop name
      {...props}
    />
  );
};
