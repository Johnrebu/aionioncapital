# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run
FROM node:18-alpine

WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 3000

# Start Next.js server
CMD ["npm", "run", "start"]
