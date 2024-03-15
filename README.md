# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## 1. github

echo "# jsplace" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:silmi-ayra/jsplace.git
git push -u origin main

## 2. Edit App.js

```
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>Coba Deploy Github</h4>
    </div>
  );
}

export default App;

```

## 3. Coba deploy github multi accoun >> silmi

```
git remote rm origin
git remote add origin git@github.com-silmi:silmi-ayra/jsplace.git
```

## 4. Buat branch untuk deploy github pages

`git branch git-pages`

`npm install gh-pages --save-dev`

pada package.json

```
{
  "homepage": "http://silmi-ayra.github.io/jsplace",
  "name": "jsomplace1",

  ....
},

  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d build"
  },
```

kemudian deploy :

```
git add .
git commit -m "setup gh-pages"
git push
```

## 5. Consume API

`npm install axios`

`npm run deploy`
