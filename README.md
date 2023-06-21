# The Matrix

This is a simple code that renders The Matrix code rainfall. It's primarily used for testing CI/CD pipelines and development integrations.

## Documentation

### Prerequisites

- NodeJS v14.0.0 or later
- Docker v20.10.0 or later

### Usage

This application can be run either directly using Node.js, or within a Docker container.

#### Running with Node.js

To run the application using Node.js, first navigate to the project directory in your terminal. Next, install the dependencies with:

```
npm install
```


Then, you can start the application with:

```
node src/matrix.js
```

#### Running with Docker

To run the application using Docker, you first need to build the Docker image. In the project directory, run:

```
docker build -t the-matrix .
```

You can then start the application with:

```
docker run -it the-matrix
```


### Development

This project uses Node.js, and the main application logic is contained within `src/matrix.js`.

New features should be developed on separate branches, and changes are merged into the main branch via pull requests to undergo CI/CD tests.

### Testing

Pending.

### Contributing

Code changes are welcome and should follow the guidelines below:

- Fork the repository and make your changes in a new branch.
- Ensure your code adheres to the existing style. 
- Include descriptive commit messages with your changes.
- Include tests for your changes if applicable.
- Issue a Pull Request. Include a detailed description of your changes in the pull/merge request description.

I will review all pull/merge requests within a week and you will get feedback accordingly.

Thank you for your contributions!
