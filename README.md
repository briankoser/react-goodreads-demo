# react-goodreads-demo
Demo for React training: React app calling the Goodreads API

[Hosted on Netlify](https://koser-react-demo.netlify.com/) [![Netlify Status](https://api.netlify.com/api/v1/badges/b1c8ddb0-7830-4feb-b1c6-11a7e95953ae/deploy-status)](https://app.netlify.com/sites/koser-react-demo/deploys)

[Goodreads API documentation](https://www.goodreads.com/api/index)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run
Set REACT_APP_GOODREADS_API_KEY in the .env file.

`
cd app
npm start
`

## Features
- [x] State
  - [x] pass to children via props
  - [x] other components update based on state changes
- [x] Redux
- [x] Hook
- [x] Integrate with an API
- [x] Unit test
  - Redux reducers, action creators
- [x] Accessible
  - React Accessibility page
  - ARIA labels, semantic HTML, accessible forms, keyboard accessible
  - [Ran through WebAIM's WAVE tool](https://wave.webaim.org/report#/https%3A%2F%2Fkoser-react-demo.netlify.com%2F), got the result: Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility.

## To do
- [x] Register for [Goodreads API](https://www.goodreads.com/api)
- [x] Display user information by Goodreads ID
- [x] Display user[0].updates in Updates component
- [x] Take ID input
- [x] Deploy to netlify
- [ ] Send Tim Github repo link

------

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify