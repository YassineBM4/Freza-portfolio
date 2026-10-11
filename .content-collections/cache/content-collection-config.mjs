// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";
var projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    period: z.string(),
    role: z.string(),
    platform: z.string(),
    order: z.number(),
    cover: z.string(),
    accent: z.string(),
    stack: z.array(z.string()),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
    highlights: z.array(z.string()),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    content: z.string()
  })
});
var content_collections_default = defineConfig({
  collections: [projects]
});
export {
  content_collections_default as default
};
