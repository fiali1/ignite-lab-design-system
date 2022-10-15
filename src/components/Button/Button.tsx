import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export function Button({ children, className, asChild, ...rest }: IButtonProps) {
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
            py-3 
            px-4 
            rounded 
            transition:colors
          `,
          className
        )
      }
      {...rest}
    >
      {children}
    </Comp>
  );
}