<script lang="ts">
	import type { PageData } from './$types';
    import AppSidebar from "$lib/components/ui/docsSidebar.svelte";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import DocsTableOfContents from '$lib/components/ui/docsTableOfContents.svelte';
	import * as Card from "$lib/components/ui/card/index.js";

	let { data }: { data: PageData } = $props();
    let Content = data.content;
</script>

<svelte:head>
    <title>Automathaus | {data.metadata.title}</title>
</svelte:head>

<Sidebar.Provider style="--sidebar-width: 19rem;">
	<AppSidebar />
	<Sidebar.Inset class="bg-transparent pt-20">
		<Card.Root class="min-h-[calc(100vh-5.5rem)] flex flex-col">
			<Card.Header class="flex flex-row justify-between items-center gap-2">
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="#">Getting Started</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Installation</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</Card.Header>

			<Card.Content class="prose prose-zinc dark:prose-invert p-14">
				<Content />
			</Card.Content>

			<Card.Footer class="mt-auto flex flex-col justify-between items-center gap-4">
				<Separator />
				<!-- <p>Card Footer</p> -->
			</Card.Footer>
		</Card.Root>
	</Sidebar.Inset>
	<DocsTableOfContents side="right" />
</Sidebar.Provider>


<!-- <header class="flex h-16 shrink-0 items-center gap-2 px-4">
	<Sidebar.Trigger class="-ml-1" />
	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item class="hidden md:block">
				<Breadcrumb.Link href="#">Building Your Application</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator class="hidden md:block" />
			<Breadcrumb.Item>
				<Breadcrumb.Page>Data Fetching</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>
</header>
<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
	<Content />
</div> -->