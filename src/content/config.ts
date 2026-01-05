import { defineCollection, z } from 'astro:content';

const glossary = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
    }),
});

const resources = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        source: z.string(),
    }),
});

export const collections = {
    glossary,
    resources,
};

