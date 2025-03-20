# Base image for Docker Container [Establish the runtime environment]
FROM node:23-alpine3.20

# Create app directory [Inside the container]
WORKDIR /app

# Copy app dependencies [Inside the container]
COPY package*.json ./

# Install dependencies [Inside the container]
RUN npm install

# Copy app files [From host directory to inside the container directory]
COPY . .

# Define Environment Variables
ENV PORT=3000

# Expose the port [Outside the container]
EXPOSE 3000

# Run the app [Inside the container]
CMD ["npm", "run", "dev"]