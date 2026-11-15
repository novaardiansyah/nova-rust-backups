<script lang="ts">
  import AuthShell from "$lib/components/auth/auth-shell.svelte";
</script>

<AuthShell title="Privacy Policy" description="How Nova Backups handles your data.">
  <div class="grid gap-4 text-sm leading-relaxed text-muted">
    <p>
      Nova Backups runs entirely on your device. Backup files and settings are stored locally and
      are not uploaded to any server by the application.
    </p>
    <p>
      The application does not collect analytics or telemetry at this time. If this changes, this
      policy will be updated first.
    </p>
    <p>You can remove all local data at any time by deleting the application's data directory.</p>
    <p class="border-t border-line pt-4 text-center">
      <a href="/register" class="cursor-pointer font-medium text-accent hover:underline"
        >Back to sign up</a
      >
    </p>
  </div>
</AuthShell>
