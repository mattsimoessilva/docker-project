# Use a base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application
COPY . .

# Make the entrypoint script executable
RUN chmod ./entrypoint.sh

# Expose port
EXPOSE 3000

# Entry point script to handle command properly
ENTRYPOINT ["./entrypoint.sh"]
