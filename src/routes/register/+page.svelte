<script lang="ts">
  import AuthShell from "$lib/components/auth/auth-shell.svelte";
  import GoogleButton from "$lib/components/auth/google-button.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { PasswordInput } from "$lib/components/ui/password-input/index.js";

  let fullName = $state("");
  let email = $state("");
  let password = $state("");
  let confirmPassword = $state("");
  let agree = $state(false);
  let loading = $state(false);
  let notice = $state<string | null>(null);
  let error = $state<string | null>(null);

  let passwordsMismatch = $derived(
    confirmPassword.length > 0 && password !== confirmPassword,
  );

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    error = null;
    notice = null;

    if (password !== confirmPassword) {
      error = "Passwords do not match.";
      return;
    }
    if (!agree) {
      error = "Please accept the terms and privacy policy to continue.";
      return;
    }

    loading = true;

    // TODO: wire to the Rust backend, e.g. invoke("register", { fullName, email, password })
    await new Promise((resolve) => setTimeout(resolve, 400));

    loading = false;
    notice = "Registration is not connected to a backend yet.";
  }

  function handleGoogle() {
    notice = "Google sign-up is not connected to a backend yet.";
  }
</script>

<AuthShell title="Create your account" description="Start protecting your data with scheduled backups.">
  <form class="grid gap-5" onsubmit={handleSubmit}>
    <div class="grid gap-2">
      <Label for="full-name">Full name</Label>
      <Input
        id="full-name"
        type="text"
        placeholder="Jane Doe"
        autocomplete="name"
        bind:value={fullName}
        required
      />
    </div>

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
      <Label for="password">Password</Label>
      <PasswordInput
        id="password"
        placeholder="Create a strong password"
        autocomplete="new-password"
        bind:value={password}
        aria-invalid={passwordsMismatch}
        required
      />
    </div>

    <div class="grid gap-2">
      <Label for="confirm-password">Confirm password</Label>
      <PasswordInput
        id="confirm-password"
        placeholder="Repeat your password"
        autocomplete="new-password"
        bind:value={confirmPassword}
        aria-invalid={passwordsMismatch}
        required
      />
      {#if passwordsMismatch}
        <p class="text-xs text-destructive">Passwords do not match.</p>
      {/if}
    </div>

    <label class="flex items-start gap-2 text-sm text-muted">
      <input
        type="checkbox"
        bind:checked={agree}
        class="mt-0.5 size-4 rounded border border-line-strong accent-[var(--accent)]"
      />
      <span>
        I agree to the
        <a href="/terms" class="cursor-pointer font-medium text-accent hover:underline"
          >Terms of Service</a
        >
        and
        <a href="/privacy" class="cursor-pointer font-medium text-accent hover:underline"
          >Privacy Policy</a
        >.
      </span>
    </label>

    {#if error}
      <p class="rounded-md bg-danger-soft px-3 py-2 text-sm text-destructive">{error}</p>
    {/if}
    {#if notice}
      <p class="rounded-md bg-accent-soft px-3 py-2 text-sm text-accent">{notice}</p>
    {/if}

    <Button type="submit" class="w-full" disabled={loading || passwordsMismatch}>
      {loading ? "Creating account…" : "Create account"}
    </Button>

    <div class="flex justify-center">
      <span class="text-xs font-medium uppercase tracking-wide text-faint">or</span>
    </div>

    <GoogleButton label="Sign up with Google" onclick={handleGoogle} />

    <p class="border-t border-line pt-4 text-center text-sm text-muted">
      Already have an account?
      <a href="/login" class="cursor-pointer font-medium text-accent hover:underline">Sign in</a>
    </p>
  </form>
</AuthShell>
