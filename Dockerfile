# Use a lightweight version of Node.js as our base image
FROM node:alpine

# Set the LANG environment variable to use UTF-8 as our character encoding
ENV LANG C.UTF-8
ENV TERM xterm-256color

# Create a new directory to run our app.
WORKDIR /app

# Copy all application files into our new directory.
COPY ./src/ /app/src/

# Install the blessed package
RUN npm install blessed

# The command to start our app.
CMD [ "node", "src/matrix.js" ]
