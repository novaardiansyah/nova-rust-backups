<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  import { cn } from "$lib/utils.js";

  let {
    class: className,
    value = $bindable(""),
    ...restProps
  }: Omit<HTMLInputAttributes, "value"> & { value?: string } = $props();
</script>

<input
  bind:value
  class={cn(
    "flex h-9 w-full min-w-0 rounded-md border border-input bg-page-elevated px-3 py-1 text-sm text-ink shadow-xs outline-none transition-[color,box-shadow]",
    "placeholder:text-faint selection:bg-accent selection:text-accent-foreground",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-ink",
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
    className,
  )}
  {...restProps}
/>
