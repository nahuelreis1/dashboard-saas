# Multi-stage Dockerfile for Astro SSR (Node Adapter)
# Base stage for shared dependencies
FROM node:20-alpine AS base
WORKDIR /app

# Dependencies stage
FROM base AS deps
COPY package*.json ./
RUN npm ci

# Build stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Note: Astro SSR with Node adapter generates files in dist/
RUN npm run build

# Runtime stage
FROM node:20-alpine AS runtime
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

# Copy only necessary files for runtime
# We need the built server and the static client files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expose the application port
EXPOSE 4321

# Entry point for Astro Node adapter
CMD ["node", "./dist/server/entry.mjs"]
