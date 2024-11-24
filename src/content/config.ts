import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: 'content',
  schema: z.object({
  })
})

const services = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    title: z.string(),
    person: z.string(),
    subtitle: z.string().optional(),
    img: z.string(),
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


export const collections = { blog, services, team } // -