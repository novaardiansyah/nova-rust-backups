<script lang="ts">
  import AuthShell from "$lib/components/auth/auth-shell.svelte";
  import GoogleButton from "$lib/components/auth/google-button.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { PasswordInput } from "$lib/components/ui/password-input/index.js";

  let email = $state("");
  let password = $state("");
  let remember = $state(true);
  let loading = $state(false);
  let notice = $state<string | null>(null);

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    notice = null;
    loading = true;

    // TODO: wire to the Rust backend, e.g. invoke("login", { email, password })
    await new Promise((resolve) => setTimeout(resolve, 400));

    loading = false;
    notice = "Sign-in is not connected to a backend yet.";
  }

  function handleGoogle() {
    notice = "Google sign-in is not connected to a backend yet.";
  }
</script>

<AuthShell
  title="Welcome back"
  description="Sign in to manage your backup jobs."
>
  <form class="grid gap-5" onsubmit={handleSubmit}>
    <div class="grid gap-2">
      <Label for="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="you@example.com"
        autocomplete="email"
        bind:value={email}
        required
      />
    </div>

    <div class="grid gap-2">
      <div class="flex items-center justify-between gap-2">
        <Label for="password">Password</Label>
        <a
          href="/forgot-password"
          class="cursor-pointer text-sm font-medium text-accent hover:underline"
        >
          Forgot password?
        </a>
      </div>
      <PasswordInput
        id="password"
        placeholder="Enter your password"
        autocomplete="current-password"
        bind:value={password}
        required
      />
    </div>

    <label class="flex items-center gap-2 text-sm text-muted">
      <input
        type="checkbox"
        bind:checked={remember}
        class="size-4 rounded border border-line-strong accent-[var(--accent)]"
      />
      Remember me
    </label>

    {#if notice}
      <p class="rounded-md bg-accent-soft px-3 py-2 text-sm text-accent">
        {notice}
      </p>
    {/if}

    <Button type="submit" class="w-full" disabled={loading}>
      {loading ? "Signing in…" : "Sign in"}
    </Button>

    <div class="flex justify-center">
      <span class="text-xs font-medium uppercase tracking-wide text-faint">or</span>
    </div>

    <GoogleButton onclick={handleGoogle} />

    <p class="border-t border-line pt-4 text-center text-sm text-muted">
      Don't have an account?
      <a href="/register" class="cursor-pointer font-medium text-accent hover:underline"
        >Create one</a
      >
    </p>
  </form>
</AuthShell>
