# Development Stage
FROM node:20-alpine AS development

WORKDIR /app

# Copy package.json and yarn.lock (if available)
COPY package.json yarn.lock* ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Set environment variable for development
ENV NODE_ENV=development

# Start the development server
CMD ["yarn", "dev"]
