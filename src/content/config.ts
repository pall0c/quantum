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

const platforms = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        notes: z.string().optional(),
        platform: z.string().optional(),
        trappingTechnique: z.string().optional(),
        gateMechanism: z.string().optional(),
    }),
});

export const collections = {
    glossary,
    resources,
    platforms,
};

