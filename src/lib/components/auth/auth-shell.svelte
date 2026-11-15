<script lang="ts">
  import type { Snippet } from "svelte";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card/index.js";
  import ThemeToggle from "./theme-toggle.svelte";

  interface Props {
    title: string;
    description?: string;
    children: Snippet;
  }

  let { title, description, children }: Props = $props();
</script>

<div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-page px-4 py-10 text-ink">
  <div class="pointer-events-none absolute inset-0" aria-hidden="true">
    <div class="absolute left-1/2 top-[-12rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent-soft blur-3xl"></div>
  </div>

  <div class="absolute right-4 top-4">
    <ThemeToggle />
  </div>

  <div class="relative w-full max-w-md">
    <Card class="shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {#if description}
          <CardDescription>{description}</CardDescription>
        {/if}
      </CardHeader>
      <CardContent>
        {@render children()}
      </CardContent>
    </Card>

    <p class="mt-6 text-center text-xs text-faint">
      &copy; {new Date().getFullYear()} Nova Backups. All rights reserved.
    </p>
  </div>
</div>
