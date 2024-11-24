import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: 'content',
  schema: z.object({
  })
})

const service = defineCollection({
  type: 'content',
  schema: z.object({
  })
})
const team = defineCollection({
  type: 'content',
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


export const collections = { blog, service, team } // -