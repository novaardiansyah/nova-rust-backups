<script lang="ts">
  import Moon from "@lucide/svelte/icons/moon";
  import Sun from "@lucide/svelte/icons/sun";
  import { onMount } from "svelte";
  import { Button } from "$lib/components/ui/button/index.js";

  let isDark = $state(false);

  onMount(() => {
    isDark = document.documentElement.classList.contains("dark");
  });

  function toggle() {
    isDark = !isDark;
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("nova-theme", isDark ? "dark" : "light");
    } catch {
      // storage may be unavailable; ignore
    }
  }
</script>

<Button
  variant="ghost"
  size="icon"
  onclick={toggle}
  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
>
  {#if isDark}
    <Sun class="size-4" />
  {:else}
    <Moon class="size-4" />
  {/if}
</Button>
