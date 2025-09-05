import { defineConfig, loadEnv } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV ?? "production", process.cwd());

export default defineConfig({
  projectConfig: {
    http: {
      port: Number(process.env.PORT) || 8080,
      ip: "0.0.0.0",
    },
    databaseUrl: process.env.DATABASE_URL!,
    // databaseDriverOptions: { connection: { ssl: { rejectUnauthorized: false } } },
  },
  admin: { disable: true },
});

