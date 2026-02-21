import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: "**/*.{md,mdx}" }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			summary: z.array(z.string()).length(3, "Exactly 3 summary lines are required"),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			softwares: z.array(z.string()).optional(),
			cta: z.array(z.string()).optional(),
		}),
	}),
};
