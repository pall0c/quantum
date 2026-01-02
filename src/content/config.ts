import { defineCollection, z } from 'astro:content';

const glossary = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
    }),
});

export const collections = {
    glossary,
};

