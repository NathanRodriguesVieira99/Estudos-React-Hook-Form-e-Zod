import { useState, type ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form'; // importa o contexto do React Hook Form
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps extends ComponentProps<'input'> {
  name: string; // o nome do campo do input
  placeholder: string;
}

export const Input = ({ name, placeholder, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false); // estado para gerenciar a exibição da senha (começa como false pra não mostrar)
  const isPassword = props.type === 'password'; // verifica se o tipo do input (vindo de ...props) é password
  const { register } = useFormContext(); // chama o register usando o contexto do react hook form

  // função que altera o estado de exibição da senha (de false pra true e vice-versa)
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <input
        id={name} // id do input com o nome do campo
        className="flex-1 rounded border px-3 py-2 border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-800 placeholder:text-zinc-500"
        placeholder={placeholder}
        {...register(name)} // conecta o input ao react hook form usando a prop name
        {...props}
        type={isPassword ? (showPassword ? 'text' : 'password') : props.type} // se o input for do tipo password o input vira do tipo text e exibe a senha, caso contrario continua sendo password e não exibe
      />
      {/* renderiza o botão com os ícones de exibição de senha caso o estado isPassword seja true */}
      {isPassword && (
        <button type="button" onClick={handleShowPassword} className="m-2">
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
    </div>
  );
};
