# Use a base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY my-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY my-app ./my-app

# Make the entrypoint script executable
RUN chmod +x ./entrypoint.sh

# Expose port
EXPOSE 3000

# Entry point script to handle command properly
ENTRYPOINT ["./entrypoint.sh"]
