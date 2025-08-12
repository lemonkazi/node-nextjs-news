# Use official Node.js image with Alpine
FROM node:22-alpine

# credits goes here
LABEL author="Kazi Mamun"
LABEL maintainer="Kazi Mamun <lemonpstu09@gmail.com>"

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies including devDependencies
RUN npm install --include=dev

# Copy all files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "start"]
