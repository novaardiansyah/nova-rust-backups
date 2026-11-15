<script lang="ts">
  import AuthShell from "$lib/components/auth/auth-shell.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";

  let email = $state("");
  let loading = $state(false);
  let sent = $state(false);

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    loading = true;

    // TODO: wire to the Rust backend, e.g. invoke("request_password_reset", { email })
    await new Promise((resolve) => setTimeout(resolve, 400));

    loading = false;
    sent = true;
  }
</script>

<AuthShell
  title="Reset your password"
  description="Enter your email and we'll send you a link to reset it."
>
  {#if sent}
    <div class="grid gap-5">
      <p class="rounded-md bg-accent-soft px-3 py-3 text-sm text-accent">
        If an account exists for <span class="font-medium">{email}</span>, a password reset link
        has been sent.
      </p>
      <Button variant="outline" class="w-full" onclick={() => (sent = false)}>
        Send again
      </Button>
      <p class="border-t border-line pt-4 text-center text-sm text-muted">
        Remembered it?
        <a href="/login" class="cursor-pointer font-medium text-accent hover:underline">Back to sign in</a>
      </p>
    </div>
  {:else}
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

      <Button type="submit" class="w-full" disabled={loading}>
        {loading ? "Sending…" : "Send reset link"}
      </Button>

      <p class="border-t border-line pt-4 text-center text-sm text-muted">
        Remembered it?
        <a href="/login" class="cursor-pointer font-medium text-accent hover:underline">Back to sign in</a>
      </p>
    </form>
  {/if}
</AuthShell>
