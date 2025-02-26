# base image
FROM node:16.16.0-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose port 80
EXPOSE 80

# Start the Next.js app in production mode
CMD ["npm", "start"]
