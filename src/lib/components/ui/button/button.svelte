<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { cn } from "$lib/utils.js";
  import { type ButtonVariant, type ButtonSize, buttonVariants } from "./button-variants.js";

  let {
    class: className,
    variant = "default",
    size = "default",
    children,
    ...restProps
  }: HTMLButtonAttributes & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: Snippet;
  } = $props();
</script>

<button class={cn(buttonVariants({ variant, size, class: className }))} {...restProps}>
  {@render children?.()}
</button>
