import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ShowPasswordToggleProps {
  className?: string;
  children: (props: { getInputType: (type: string) => string }) => ReactNode; //  é uma função que recebe getInputType como parâmetro e retorna JSX
}

export const ShowPasswordToggle = ({
  className,
  children,
  ...props
}: ShowPasswordToggleProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false); // estado para gerenciar a exibição da senha (começa como false pra não mostrar a senha)

  // função que altera o estado de exibição da senha (de false pra true e vice-versa)
  const handleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  // alterna entre 'password' e 'text' baseado no estado isShowPassword (true ou false)
  const getInputType = (originalType: string) => {
    return originalType === 'password'
      ? isShowPassword
        ? 'text'
        : 'password'
      : originalType;
  };

  return (
    <div className={twMerge('flex items-center', className)}>
      {/* injeta a função getInputType no componente filho (children)*/}
      {children({ getInputType })}
      <button
        type="button"
        onClick={handleShowPassword}
        className={twMerge('m-2', className)}
        {...props}
      >
        {isShowPassword ? <FaEye /> : <FaEyeSlash />}
      </button>
    </div>
  );
};
