# Getting Started with My first App

# In the project directory, you can run:

## npm start

Runs the app in the development mode.
Open [http://localhost:1234](http://localhost:1234 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## npm run build

Builds the app for production to the dist folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## npm run deploy

Deploys the app into the github repository.

[gh-pages -b master -d dist] (gh-pages -b {branch} -d {folder})


All the scripts and dependencies are shown below: 


```javascript
  "dependencies": {
    "bootstrap": "^5.2.0",
    "gh-pages": "^4.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "source-map-explorer": "^2.5.2"
  },
  "devDependencies": {
    "parcel": "^2.7.0",
    "process": "^0.11.10"
  },
  "scripts": {
    "start": "parcel ./public/index.html",
    "build": "parcel build ./public/index.html",
    "deploy": "gh-pages -b master -d dist",
    "analyze": "source-map-explorer ./dist/*js"
  },
  ```
