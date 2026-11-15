<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLLabelAttributes } from "svelte/elements";
  import { cn } from "$lib/utils.js";

  let {
    class: className,
    children,
    ...restProps
  }: HTMLLabelAttributes & { children?: Snippet } = $props();
</script>

<label class={cn("select-none text-sm font-medium text-ink", className)} {...restProps}>
  {@render children?.()}
</label>
