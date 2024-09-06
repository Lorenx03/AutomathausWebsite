<script>
    import { ArrowRight } from 'lucide-svelte';

    import Button from "$lib/components/ui/button/button.svelte";
    import CurveThing from '$lib/components/svg/CurveThing.svelte';
    import AnimAutomatLogo from '$lib/components/svg/animAutomatLogo.svelte';
</script>

<div class="w-full h-svh flex justify-center content-center overflow-hidden relative">
    <div class="flex flex-col items-center justify-center space-y-6">
        <AnimAutomatLogo />
        <div class="text-center space-y-2">
            <h1 class="text-5xl lg:text-6xl">Automathaus</h1>
            <p class="text-lg">Open source domotic system</p>
        </div>
        
        <Button class="hover:scale-110 ease-in-out transition-transform	duration-300">
            Get Started
            <ArrowRight class="ml-2 h-5 w-5"/>
        </Button>
    </div>


    <CurveThing class="absolute -bottom-60 -left-60 -rotate-45 fill-zinc-900 dark:fill-zinc-400 size-[20rem] lg:size-[35rem] scale-[2]" />
    <CurveThing class="absolute -bottom-80 -left-80 -rotate-45 fill-zinc-950 dark:fill-zinc-300 size-[20rem] lg:size-[35rem] scale-[2.2]" />

    <CurveThing class="absolute -top-60 -right-60 rotate-[135deg] fill-zinc-900 dark:fill-zinc-400 size-[20rem] lg:size-[35rem] scale-[2]" />
    <CurveThing class="absolute -top-80 -right-80 rotate-[135deg] fill-zinc-950 dark:fill-zinc-300 size-[20rem] lg:size-[35rem] scale-[2.2]" />
</div>
