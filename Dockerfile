# Use a base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entrypoint script
COPY entrypoint.sh ./

# Verify if entrypoint.sh exists
RUN ls -l  # Para verificação

# Make the entrypoint script executable
RUN chmod +x ./entrypoint.sh

# Copy rest of the application
COPY . .

# Expose port
EXPOSE 3000

# Entry point script to handle command properly
ENTRYPOINT ["./entrypoint.sh"]
