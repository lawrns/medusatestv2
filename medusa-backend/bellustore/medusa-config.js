import { defineConfig } from '@medusajs/framework/config';
export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: { ip: '0.0.0.0', port: Number(process.env.PORT) || 8080 }
  },
  admin: { disable: true }
});
