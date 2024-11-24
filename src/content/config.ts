import { defineCollection, z } from "astro:content";

const team = defineCollection({
  schema: z.object({
    order: z.number(),
    given_name: z.string(),
    position: z.string(),
    linkedin: z.string().optional(),
    email: z.string().optional(),
    image: z.string(),
    imageCss: z.string().optional(),
    description: z.string().optional(),
  })
})


export const collections = { team }