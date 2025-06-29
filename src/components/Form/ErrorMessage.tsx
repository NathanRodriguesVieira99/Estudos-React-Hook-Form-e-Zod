import { useFormContext } from "react-hook-form";

// Recebe o nome do campo que deseja exibir o erro
interface ErrorMessageProps {
  field: string;
}

export const ErrorMessage = ({ field }: ErrorMessageProps) => {
  // Acessa o objeto de erros do formulário pelo contexto
  const {
    formState: { errors },
  } = useFormContext();

  // Busca a mensagem de erro do campo passado por prop
  const error = errors[field]?.message as string | undefined;

  // Se não houver erro, não renderiza nada
  if (!error) return null;

  // Exibe a mensagem de erro estilizada
  return <span className="text-red-500 text-xs">{error}</span>;
};
