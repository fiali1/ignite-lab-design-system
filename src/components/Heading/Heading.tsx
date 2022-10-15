import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode } from "react";

export interface IHeadingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({ size = 'md', className, children, asChild }: IHeadingProps) {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      className={
        clsx(
          "text-gray-100 font-bold font-sans",
          {
            "text-lg": size === 'sm',
            'text-xl': size === 'md',
            "text-2xl": size === 'lg',
          },
          className
        )
      }
    >
      {children}
    </Comp>
  );
}