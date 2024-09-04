<script>
    import { ArrowRight } from 'lucide-svelte';

    import LogoAutomat from "$lib/components/svg/logoAutomat.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import CurveThing from '$lib/components/svg/CurveThing.svelte';
</script>

<div class="w-full h-svh flex justify-center content-center overflow-hidden relative">
    <div class="flex flex-col items-center justify-center space-y-6">
        <LogoAutomat class="size-60 "/>
        <div class="text-center space-y-2">
            <h1 class="text-6xl">Automathaus</h1>
            <p class="text-lg">Open source domotic system</p>
        </div>
        
        <Button class="hover:scale-110 ease-in-out transition-transform	duration-300">
            Get Started
            <ArrowRight class="ml-2 h-5 w-5"/>
        </Button>
    </div>

    <!-- <CurveThing class="absolute -bottom-20 -left-20 w-[35rem] h-[30rem] scale-[1.5] -rotate-45 fill-zinc-700 dark:fill-zinc-600"/> -->
    <!-- <CurveThing class="absolute -bottom-40 -left-40 w-[35rem] h-[30rem] scale-[1.8] -rotate-45 fill-zinc-800 dark:fill-zinc-500"/> -->
    <CurveThing class="absolute -bottom-60 -left-60 w-[35rem] h-[30rem] scale-[2] -rotate-45 fill-zinc-900 dark:fill-zinc-400"/>
    <CurveThing class="absolute -bottom-80 -left-80 w-[35rem] h-[30rem] scale-[2.2]  -rotate-45 fill-zinc-950 dark:fill-zinc-300"/>

    <!-- <CurveThing class="absolute -top-20 -right-20 w-[35rem] h-[30rem] scale-[1.5] rotate-[135deg] fill-zinc-700 dark:fill-zinc-600"/> -->
    <!-- <CurveThing class="absolute -top-40 -right-40 w-[35rem] h-[30rem] scale-[1.8] rotate-[135deg] fill-zinc-800 dark:fill-zinc-500"/> -->
    <CurveThing class="absolute -top-60 -right-60 w-[35rem] h-[30rem] scale-[2] rotate-[135deg] fill-zinc-900 dark:fill-zinc-400"/>
    <CurveThing class="absolute -top-80 -right-80 w-[35rem] h-[30rem] scale-[2.2] rotate-[135deg] fill-zinc-950 dark:fill-zinc-300"/>
</div>
