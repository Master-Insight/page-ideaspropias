import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      autor: z.string(),
      category: z.string().optional(),
      image: z.string().optional(),
      tags: z.array(z.string()).optional(),
  }),
});

export const collections = { 
  'blog': blogCollection
};