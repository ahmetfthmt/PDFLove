# =============================================================================
# Stage 1: Build
# =============================================================================
FROM node:22-bookworm-slim AS builder

WORKDIR /app

# Install build tools needed for native npm packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies
COPY package.json package-lock.json ./
# --ignore-scripts skips postinstall hooks (e.g. LibreOffice binary downloads)
RUN npm install --no-audit --no-fund --ignore-scripts

# Copy source and manually run only the pdfjs worker sync script
COPY scripts/ ./scripts/

# Copy the rest of the source
COPY . .

# Run only the pdfjs worker sync (skipped by --ignore-scripts above)
RUN node scripts/sync-pdfjs-workers.js

# Build the Next.js static export
ENV NODE_ENV=production
RUN npm run build --no-audit

# =============================================================================
# Stage 2: Serve with nginx
# =============================================================================
FROM nginx:bookworm AS runner

# Copy static export output
COPY --from=builder /app/out /usr/share/nginx/html

# Custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
