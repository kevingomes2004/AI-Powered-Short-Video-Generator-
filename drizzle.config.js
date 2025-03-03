import { defineConfig } from 'drizzle-kit'

/** @type {import {"drizzle-kit"}.Config } */

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_1qnGNl7tYxvu@ep-quiet-base-a8a6h65r-pooler.eastus2.azure.neon.tech/Ai-short-video-generator?sslmode=require',
  }
});
