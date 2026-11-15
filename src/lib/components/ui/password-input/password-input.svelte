<script lang="ts">
  import Eye from "@lucide/svelte/icons/eye";
  import EyeOff from "@lucide/svelte/icons/eye-off";
  import type { HTMLInputAttributes } from "svelte/elements";
  import { Input } from "$lib/components/ui/input/index.js";

  let {
    value = $bindable(""),
    ...restProps
  }: Omit<HTMLInputAttributes, "value" | "type"> & { value?: string } = $props();

  let visible = $state(false);
</script>

<div class="relative">
  <Input type={visible ? "text" : "password"} class="pl-3 pr-10" bind:value {...restProps} />
  <button
    type="button"
    class="absolute inset-y-0 right-0 flex cursor-pointer items-center justify-center px-3 text-muted transition-colors hover:text-ink focus-visible:outline-none"
    onclick={() => (visible = !visible)}
    aria-label={visible ? "Hide password" : "Show password"}
    aria-pressed={visible}
  >
    {#if visible}
      <EyeOff class="size-4" />
    {:else}
      <Eye class="size-4" />
    {/if}
  </button>
</div>
