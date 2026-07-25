import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const survival = defineCollection({
  loader: glob({
    base: "./src/content/survival",
    pattern: "**/*.md",
  }),
  schema: z.object({
    episode: z.number(),
    title: z.string(),
    description: z.string(),
    youtube: z.string(),
    minecraft: z.string(),
    published: z.coerce.date(),
    thumbnail: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const mods = defineCollection({
  loader: glob({
    base: "./src/content/mods",
    pattern: "**/*.md",
  }),
  schema: z.object({
    episode: z.number(),
    title: z.string(),
    description: z.string(),
    youtube: z.string(),
    minecraft: z.string(),
    published: z.coerce.date(),
    thumbnail: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  survival,
  mods,
};
