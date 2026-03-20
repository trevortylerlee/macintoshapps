import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const monetizationMethods = ["free", "freemium", "paid"] as const;

const appsCollection = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/apps" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string().max(40),
      icon: image(),
      link: z.string(),
      developerName: z.string(),
      monetization: z.enum(monetizationMethods),
      isOpenSource: z.boolean(),
      isFree: z.boolean(),
      isOneTimePurchase: z.boolean(),
      isSubscription: z.boolean(),
      tags: z.array(z.string()).optional(),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publicationDate: z.coerce.date(),
      image: image()
        .refine((img) => img.width >= 1200, {
          message: "Image should be 1200px × 630px.",
        })
        .optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { apps: appsCollection, blog };
