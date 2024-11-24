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
    areas: z
      .array(
        z.object({
          title: z.string(),
          icon: z.string().optional(), // Emoji o referencia al ícono
          summary: z.string().optional(), // Breve descripción de la área
          details: z.string().optional(), // Descripción extendida
          link: z.string().url().optional(), // Opcional, para redirigir a más detalles
        })
      )
      .optional(),
  }),
});

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