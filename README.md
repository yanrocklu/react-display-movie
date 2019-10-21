This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Movie Tiles

A web application that displays movies as a list of tiles. Each tiles displays movie detail such as title, actors, description, poster.

### Link To the Live Demo

https://yanrocklu.github.io/react-display-movie/

### Project Introduction

This is a React web application using 2 levels deep nested components. 

The application is composed of the following components:

* Header - A header that displays app title

* MovieContainer - The root component that manages state for all children components. It is also responsible for connecting to _MovieService_ to retrieve movie data

* MovieList - A list of movies

* MovieTile - A tile to dispaly movie details

**Firebase** database is used to store the JSON style data

**Axios**, a Promise based HTTP client is used to obtain movie data:

* axios-movies - A axios instance that retrieves movie data from Firebase.

For styling, I have adopted bootstrap4 beta. I use SCSS for all custom written styles.

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [SCSS](http://sass-lang.com/) - A css metalanguage
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

  This will run the _'serve'_ npm task

  ```bash
  npm start
  ```

## Author

* **Yan Lu** - [yanrocklu](https://github.com/yanrocklu)