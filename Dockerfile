FROM node:22.21.1-trixie-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install deps (omit dev deps for prod)
RUN npm ci

# Copy source code
COPY . .

# Optional: Build if using TypeScript or bundler
# RUN npm run build

# Ensure logs go to stdout/stderr (no buffering)
ENV NODE_ENV=production

EXPOSE 3000

# Start the server — Cloud Run injects PORT automatically
CMD ["node", "index.js"]
