FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production\
    MEDUSA_TELEMETRY_DISABLED=1
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx -y @medusajs/cli@2.8.2 build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production\
    MEDUSA_TELEMETRY_DISABLED=1
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/.medusa ./.medusa
COPY --from=builder /app/medusa-config.js ./medusa-config.js
EXPOSE 8080
CMD ["sh","-lc","npx -y @medusajs/cli@2.8.2 db:migrate || npx -y @medusajs/cli@2.8.2 db:setup; npx -y @medusajs/cli@2.8.2 start"]
