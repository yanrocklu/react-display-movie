# React Movie Tiles

This project was bootstrapped with *Create React App*.

### Link To the Live Demo

https://yanrocklu.github.io/react-display-movie/

### Project Introduction

This is a React web application that displays movies as a list of tiles. Each tile displays movie detail such as title, actors, description, poster.

The application uses 2 levels deep nested components;

* Header - A header that displays app title
* MovieContainer - The root conrainer component that manages state for all children components. It is uses _axio_ to connect to Firebase database.
* MovieList - A list of movies
* MovieTile - A tile to dispaly movie details

**Axios**, a Promise based HTTP client is used to obtain movie data:
* axios-movies - A axios instance that retrieves movie data from Firebase.

**Firebase**, a NoSQL database is used to store the JSON style data

### Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Firebase](https://firebase.google.com//) - A NoSQL database
* [Axios](https://www.axios.com//) - A HTTP client

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

* Clone _'react-display-movie'_ repository from GitHub

  ```bash
  git clone https://github.com/yanrocklu/react-display-movie.git
  ```

* Install node modules

   ```bash
   cd react-display-movie
   npm install
   ```

### Run

* Run start

  This will start your app

  ```bash
  npm start
  ```

## Author

* **Yan Lu** - [yanrocklu](https://github.com/yanrocklu)