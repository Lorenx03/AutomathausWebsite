<script lang="ts">
    //Icons
    import { Menu } from 'lucide-svelte';
    import { SunMoon } from 'lucide-svelte';
    import { Github } from "lucide-svelte";
    import { Newspaper } from "lucide-svelte";
    import { BookText } from "lucide-svelte";
    import { House } from "lucide-svelte";

    import Sun from "lucide-svelte/icons/sun";

    //Components
    import DarkmodeButton from "./darkmodeButton.svelte";
    import LogoAutomat from "../svg/logoAutomat.svelte";

    //Dropdown menu
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

    //Button
    import { Button } from "$lib/components/ui/button/index.js";
    import { buttonVariants } from "$lib/components/ui/button/index.js";

    //Mode watcher
    import { toggleMode } from "mode-watcher";
</script>

<nav class="fixed p-3 md:p-5 w-full flex items-center justify-between backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 z-50">
    <div class="flex items-center space-x-3 ">
         <LogoAutomat class="size-7 lg:size-9"/>
        <h2 class="text-xl lg:text-2xl">
            Automathaus<span class="text-zinc-500/30">.dev</span>
        </h2>
    </div>

    
    <div class="md:flex items-center gap-3">
        <!-- <Button variant="outline" class="hidden md:flex">
            <House class="mr-2 h-4 w-4"/>
            Home
        </Button> -->
        <Button variant="outline" class="hidden md:inline-flex">
            <BookText class="mr-1 size-4"/>
            Docs
        </Button>
        <Button variant="outline" class="hidden md:inline-flex">
            <Newspaper class="mr-1 size-4"/>
            News
        </Button>
        <Button class="hidden md:inline-flex" href="https://github.com/Automathaus">
            <Github class="mr-1 size-4"/>
            Github
        </Button>

        <DarkmodeButton class="hidden md:inline-flex"/>

        <DropdownMenu.Root>
            <DropdownMenu.Trigger class={buttonVariants({ variant: "ghost", size: "icon" }) + ' md:hidden'}>
                <Menu class="size-7" />
                <span class="sr-only">Dropdown menu</span>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
                <!-- <DropdownMenu.Item >
                    <House class="mr-2 h-4 w-4"/>
                    <span>Home</span>
                </DropdownMenu.Item> -->
                
                <DropdownMenu.Item >
                    <BookText class="mr-2 size-4"/>
                    <span>Docs</span>
                </DropdownMenu.Item>
    
                <DropdownMenu.Item >
                    <Newspaper class="mr-2 size-4"/>
                    <span>News</span>
                </DropdownMenu.Item>
    
                <DropdownMenu.Item >
                    <Github class="mr-2 size-4"/>
                    <span>Github</span>
                </DropdownMenu.Item>

                <DropdownMenu.Separator />

                <DropdownMenu.Item onclick={toggleMode}>
                    <SunMoon class="mr-2 size-4"/>
                    <span>Toggle theme</span>
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </div>
</nav>