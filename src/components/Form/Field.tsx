import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface FieldProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const Field = ({ children, className, ...props }: FieldProps) => {
  return (
    <div {...props} className={twMerge("flex flex-col gap-1.5", className)}>
      {children}
    </div>
  );
};
