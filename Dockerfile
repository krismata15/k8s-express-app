# Slim base image
FROM node:alpine 

WORKDIR /app

# Install dependencies first 
COPY package*.json ./ 
RUN npm install

# Copy the rest of your application code
COPY . .   

# Set the NODE_ENV to production
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000  

# Default command to start the app
CMD ["npm", "start"] 
