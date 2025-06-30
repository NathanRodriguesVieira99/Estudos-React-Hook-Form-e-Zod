import type { ComponentProps, ReactNode } from 'react';

interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="flex  flex-col items-center mt-24">{children}</div>;
};
