FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production\
    MEDUSA_TELEMETRY_DISABLED=1
COPY package*.json ./
RUN npm ci
COPY . .
RUN node node_modules/@medusajs/cli/dist/index.js build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production\
    MEDUSA_TELEMETRY_DISABLED=1
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/.medusa ./.medusa
COPY --from=builder /app/medusa-config.js ./medusa-config.js
EXPOSE 8080
CMD ["sh","-lc","node node_modules/@medusajs/cli/dist/index.js db:migrate || node node_modules/@medusajs/cli/dist/index.js db:setup; node node_modules/@medusajs/cli/dist/index.js start"]
