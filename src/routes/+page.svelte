<script lang="ts">
    import { ArrowRight } from "lucide-svelte";
    import AnimAutomatLogo from "$lib/components/svg/animAutomatLogo.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
</script>

<svelte:head>
    <title>Automathaus | Open source domotic system</title>
</svelte:head>

<div class="w-full min-h-svh flex items-center justify-center">
    <div class="flex flex-col items-center justify-center lg:space-y-6">
        <div class="scale-75 lg:scale-100">
            <AnimAutomatLogo />
        </div>
        <div class="flex flex-col items-center justify-center space-y-6">
            <div class="text-center space-y-2">
                <h1 class="text-5xl lg:text-6xl">Automathaus</h1>
                <p class="text-lg">Open source domotic system</p>
            </div>
            
            <Button class="hover:scale-110 ease-in-out transition-transform	duration-300" href="https://github.com/Automathaus">
                Get Started
                <ArrowRight class="ml-2 h-5 w-5"/>
            </Button>
        </div>
    </div>
</div>