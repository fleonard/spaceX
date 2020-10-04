# SpaceX's rockets and dragons

- [Intro](#intro)
- [Requirements](#requirements)
- [Setup](#setup)
- [Development](#development)
- [Technology Used](#technology-used)
- [Improvements](#improvements)
- [Tech stack](#tech-stack)

## Intro

I've created this project using [my own](https://www.npmjs.com/package/cra-template-fleonard-starter) Create React App template as a starting point and tweaked it based on the requirements.<br />
In this application, that uses [SpaceX's open API](https://docs.spacexdata.com/), you will be able to see a brief overview of SpaceX's rockets and dragons. 🚀 🛰.

## Requirements

- Node >= 12.0.0
- yarn
- GIT
- Bash

## Recommended installation

### NVM

Allows you to use different Node (NPM) versions on your computer

1. Go to [NVM GitHub](https://github.com/creationix/nvm)
2. Follow the instructions at [NVM installation](https://github.com/creationix/nvm#installation). _Important to note the bash profile command that needs to be added to your ~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc_
3. Once verified follow [NVM usage](https://github.com/creationix/nvm#usage) to add either the latest version of node (as of writing is currently 14.13.0)
4. You should now be ready to go

## Setup

Clone the repository and install.

### Installing

All the project NPM modules will be installed on the initial `yarn` but will need to have it installed globally.

On macOS you can install Yarn through the [Homebrew package manager.](https://brew.sh/)
Run the command:

```
brew install yarn
```

or get the installer for Windows from [here](https://yarnpkg.com/en/docs/install#windows-tab).

## Development

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the unit test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Technology Used

### Typescript

I like to use Typescript to have an instant feedback while coding, it also helps me when I need to build components and data structure needed for my application.<br />
It also make the code easier to understand for other developers and, in my opinion, once all the types are in place coding it's easier and more efficient.<br />
Looking at future improvements, with Typescript code will be easier to refactor and I find it less error prone when developing and merging branches.

### Material-UI and Styled Components

I've decided to use Material-UI as a base for the look and feel of the application and expanded upon it using Styled Components to achieve the desired design.

### Custom Hooks

For this application I've decided to implement a custom hook that take care of the data fetching ffrom SpaceX API. It stores the base url in it and you can pass each endpoint in order to get the data you need.<br />
I've used a pretty simple state and a reducer to handle the different status (fetching, fetched and error) of the application and to store the data that will then be exposed to the application.<br />
I've also added a small caching mechanism using [useRef](https://reactjs.org/docs/hooks-reference.html#useref) in order to avoid multiple fetch from the same endpoint.<br />
This could have also be done using a state manager like Redux but for this specific application I thought it was easier and cleaner to implement it this way.<br /><br />
I've also implemented two other custom hooks in order to achieve a sticky navigation and to be able to close the mobile menu clicking outside of it.

### Testing

Testing is done with a combination of [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).<br />
All components and custom hook logic are tested.

## Design and UX

The application has been designed with a Mobile first approach. It has a simple top navigation with a burger side menu on smaller screens. I've decided to use [React Router](https://reactrouter.com/) to handle the different views of the application. One view with a list of either rockets and dragons and a more detailed page with all the extra informations.

## Tech Stack

- [Node & NPM](https://nodejs.org) - Latest version (14)
- [Typescript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/) - Declarative routing for React
- [Styled Components](https://styled-components.com/) - Visual primitives for the component age
- [Material-UI](https://material-ui.com/) - React components for faster and easier web development.
- [Jest](https://jestjs.io/) - Delightful JavaScript Testing Framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - Simple and complete testing utilities that encourage good testing practices
- [ESlint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Prettier](https://prettier.io/) - An opinionated code formatter
