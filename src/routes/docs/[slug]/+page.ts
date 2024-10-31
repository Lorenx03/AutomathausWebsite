import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
    try {
        // Dynamically import the markdown file from the content directory
        const post = await import(`../content/${params.slug}.svx`);

        return {
            content: post.default,
            metadata: post.metadata,
        };
    } catch (err) {
        error(404, `Could not find ${params.slug}`);
    }
};
