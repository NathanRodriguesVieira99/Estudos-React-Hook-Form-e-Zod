import type { ComponentProps } from "react";

interface RootProps extends ComponentProps<"form"> {
  children: React.ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return <form>{children}</form>;
};
