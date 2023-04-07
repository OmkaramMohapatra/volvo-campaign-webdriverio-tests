# Use the official Node.js 16.x image
FROM node:16

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Expose port for WebDriverIO test runner
EXPOSE 4444

# Run tests
CMD ["npx", "wdio", "run", "./wdio.conf.js"]