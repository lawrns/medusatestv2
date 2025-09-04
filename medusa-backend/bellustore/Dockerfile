FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production MEDUSA_TELEMETRY_DISABLED=1
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 8080
CMD sh -lc "node scripts/migrate.js && node scripts/start.js"
