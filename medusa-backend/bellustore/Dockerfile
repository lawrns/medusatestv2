FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=development
COPY package*.json ./
RUN npm ci
COPY . .
# Build Medusa project
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/.medusa ./.medusa
COPY --from=builder /app/medusa-config.js ./medusa-config.js
EXPOSE 8080
CMD ["sh","-lc","npm run migrate || npm run setup; npm run start"]
