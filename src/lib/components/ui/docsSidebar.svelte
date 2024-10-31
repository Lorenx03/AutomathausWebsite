<script lang="ts" module>
	// sample data
	const data = {
		versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
		navMain: [
			{
				title: "Getting Started",
				url: "/docs/getting-started",
				items: [
					{
						title: "Installation",
						url: "/docs/getting-started",
					},
					{
						title: "Project Structure",
						url: "/docs/getting-started",
					},
				],
			},
		]
	};
</script>

<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";
    import LogoAutomat from "../svg/logoAutomat.svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root variant="floating" {...restProps} class="pt-20">
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="/docs" {...props}>
							<div
								class="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
							>
								<LogoAutomat class="size-5 dark:fill-zinc-950 fill-white"/>
							</div>
							<div class="flex flex-col gap-0.5 leading-none">
								<span class="font-semibold">Documentation</span>
								<span class="">v0.0.1</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.Menu class="gap-2">
				{#each data.navMain as mainItem (mainItem.title)}
					<Sidebar.MenuItem>
						<Sidebar.MenuButton class="font-medium">
							{#snippet child({ props })}
								<a href={mainItem.url} {...props}>
									<span class="text-lg">{mainItem.title}</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
						{#if mainItem.items?.length}
							<Sidebar.MenuSub class="ml-0 border-l-0 px-1.5">
								{#each mainItem.items as item (item.title)}
									<Sidebar.MenuSubItem>
										<Sidebar.MenuSubButton isActive={item.isActive}>
											{#snippet child({ props })}
												<a href={item.url} {...props}>{item.title}</a>
											{/snippet}
										</Sidebar.MenuSubButton>
									</Sidebar.MenuSubItem>
								{/each}
							</Sidebar.MenuSub>
						{/if}
					</Sidebar.MenuItem>
				{/each}
			</Sidebar.Menu>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
