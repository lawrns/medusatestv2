FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci
COPY . .
# Build Medusa project
RUN npx -y @medusajs/cli@2.10.1 build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/.medusa ./.medusa
COPY --from=builder /app/medusa-config.ts ./medusa-config.ts
EXPOSE 8080
CMD sh -lc "npx -y @medusajs/cli@2.10.1 db:migrate || npx -y @medusajs/cli@2.10.1 db:setup; npx -y @medusajs/cli@2.10.1 start"
