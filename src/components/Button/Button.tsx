import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: IButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={
        clsx(
          `
            text-black
            text-sm 
            font-semibold 
            font-sans 
            bg-cyan-500 
            hover:bg-cyan-300 
            focus:ring-2 
            ring-white 
            w-full 
            py-4 
            px-3 
            rounded 
            transition:colors
          `,
        )
      }
    >
      {children}
    </Comp>
  );
}