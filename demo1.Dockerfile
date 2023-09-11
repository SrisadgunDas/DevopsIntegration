# Use Node.js v18.15.0 as the base image
FROM node:18.15.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose a port if your Node.js app listens on a specific port (e.g., 3000)
EXPOSE 3000

# Command to start your Node.js application
CMD ["node", "nodejsHello.js"]
