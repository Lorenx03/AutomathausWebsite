<script lang="ts">
    import Navbar from "$lib/components/ui/navbar.svelte";
    import '@fontsource/poppins';
    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
</script>

<ModeWatcher/>
<Navbar/>
<slot/>
