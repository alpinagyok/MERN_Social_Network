# MERN_Social_Network

## This project was made by following a turorial and adding some of my own changes. Not meant to be a portfolio project.

![Screenshot](https://res.cloudinary.com/dwwoxasih/image/upload/v1598794779/w_ysxhzc.png)

[Live Vesrion](https://mern-social-learning.herokuapp.com/)

This is a very simple website project made with NodeJS (Express) + React (Redux) + MongoDB. The user can add and delete items from list.

## Keys file for local deployment:

```javascript
module.exports = {
  mongoURI:
    "",
  secretOrKey: "",
};
```

## Config Vars needed for Heroku:

#### `MONGODB_URL`

#### `SECRET_OR_KEY`

#### `REACT_APP_GITHUB_CLIEND_ID`

#### `REACT_APP_GITHUB_CLIEND_SECRET`

## Available NPM Scripts

In the project directory, you can run:

### `npm run start`

Runs Node server on localhost.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm run server`

Runs Node server in the development mode (Nodemon).<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm run client`

Runs the React app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run dev`

Runs 'server' and 'client' scripts concurrently.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

