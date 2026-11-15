import type { HTMLAttributes } from "svelte/elements";

import { cn } from "$lib/utils.js";
import { type ButtonVariant, type ButtonSize, buttonVariants } from "./button-variants.js";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = ({ class: className, variant, size, ...props }: ButtonProps) => {
  return (
    <button class={cn(buttonVariants({ variant, size, class: className }))} {...props} />
  );
};

export default Button;
export { Button, type ButtonVariant, type ButtonSize };