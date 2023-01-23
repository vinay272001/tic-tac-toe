FROM node:19-alpine

USER root
# Create a working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining files
COPY . .

# Build the application
RUN npm run build

# Expose the port for the application
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
