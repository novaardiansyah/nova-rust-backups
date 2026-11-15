<script lang="ts">
  import AuthShell from "$lib/components/auth/auth-shell.svelte";
</script>

<AuthShell title="Terms of Service" description="Please read these terms before using Nova Backups.">
  <div class="grid gap-4 text-sm leading-relaxed text-muted">
    <p>
      Nova Backups is provided as-is for creating and managing local backups on your device. You
      are responsible for the data you choose to back up and restore.
    </p>
    <p>
      Do not use the application to store or distribute content that violates applicable law or
      the rights of others.
    </p>
    <p>These terms may be updated as the application evolves.</p>
    <p class="border-t border-line pt-4 text-center">
      <a href="/register" class="cursor-pointer font-medium text-accent hover:underline"
        >Back to sign up</a
      >
    </p>
  </div>
</AuthShell>
