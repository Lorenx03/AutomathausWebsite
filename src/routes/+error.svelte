<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="w-full min-h-svh flex flex-col items-center justify-center gap-2">
    <h1 class="text-5xl font-bold">{$page.status}</h1>
    <p class="text-lg">{$page.error?.message}</p>
</div>
