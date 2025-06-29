import { twMerge } from "tailwind-merge";
import type { ComponentProps, ReactNode } from "react";

interface RootProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export const Root = ({ children, className, ...props }: RootProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center bg justify-center mt-6 bg-green-500 rounded p-1",
        className
      )}
    >
      {children}
    </button>
  );
};
