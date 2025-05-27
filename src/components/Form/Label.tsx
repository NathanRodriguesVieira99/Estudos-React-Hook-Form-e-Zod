import type { ComponentProps } from "react";

// interface LabelProps extends ComponentProps<"label"> {
//   children: React.ReactNode;
// }

export const Label = (props: ComponentProps<"label">) => {
  return <label {...props} />;
};
