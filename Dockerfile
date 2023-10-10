# Use an official WordPress image as the base image
FROM wordpress:latest

# Copy custom configuration files if needed
COPY themes/ /var/www/html/wp-content/themes

# Expose port 80 to access WordPress from outside the container
EXPOSE 80