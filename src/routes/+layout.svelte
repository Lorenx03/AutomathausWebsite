<script lang="ts">
	//Styles
	import '@fontsource/poppins';
	import '../app.css';

	//Components 
    import { ModeWatcher } from 'mode-watcher';
    import Navbar from '$lib/components/ui/navbar.svelte';
    import CurveThingsScreen from '$lib/components/svg/CurveThingsScreen.svelte';

	//Props
	let { children } = $props();
</script>

<ModeWatcher />
<Navbar />
<CurveThingsScreen />

{@render children()}