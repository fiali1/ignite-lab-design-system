import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface ITextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: ITextInputProps) {
  return (
    <div className={clsx(
      `
        h-12
        flex
        items-center
        gap-3
        py-4
        px-3
        rounded
        bg-gray-800
        focus-within:ring-2
        ring-cyan-300
      `
    )}
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

export interface ITextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: ITextInputIconProps) {
  return (
    <Slot 
      className="w-6 h-6 text-gray-400"
    >
      { children }
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface ITextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: ITextInputInputProps) {
  return (
      <input
        className="bg-transparent flex-1 w-full text-gray-100 text-xs placeholder:text-gray-400 outline-none" 
        {...props}
      />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}