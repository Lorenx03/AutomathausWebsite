<script lang="ts">
    import Github from "lucide-svelte/icons/github";
    import Newspaper from "lucide-svelte/icons/newspaper";
    import BookText from "lucide-svelte/icons/book-text";
    import House from "lucide-svelte/icons/house";

    import Button from "./button/button.svelte";
    import DarkmodeButton from "./darkmodeButton.svelte";
    import LogoAutomat from "../svg/logoAutomat.svelte";
</script>

<nav class="fixed p-5 w-full flex items-center justify-between backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 z-50">
    <div class="flex items-center space-x-3 ">
         <LogoAutomat class="size-9"/>
        <h2 class="text-2xl">
            Automathaus<span class="text-zinc-500/30">.dev</span>
        </h2>
    </div>

    
    <div class="flex items-center space-x-3 ">
        <Button variant="outline">
            <House class="mr-2 h-4 w-4"/>
            Home
        </Button>
        <Button variant="outline">
            <BookText class="mr-2 h-4 w-4"/>
            Docs
        </Button>
        <Button variant="outline">
            <Newspaper class="mr-2 h-4 w-4"/>
            News
        </Button>
        <Button>
            <Github class="mr-2 h-4 w-4"/>
            Github
        </Button>
        <DarkmodeButton />
    </div>
</nav>