# Squareme Mobile App

Welcome to Squareme Mobile App! This project is a...

## Folder Structure

Here is an overview of the project's folder structure:

- `__tests__/`: Unit and integration tests
- `android/`: Android native files and configurations
- `ios/`: iOS native files and configurations
- `assets/`: Images, fonts, and other static assets
- `src/`: Source code
  - `components/`: Reusable UI components
  - `models/`: Typescript Interfaces ans types
  - `navigation/`: Navigation configurations
  - `screens/`: Individual screens or pages
  - `store/`: Context API setup, actions, reducers
  - `utils/`: Helpers, and constants  like colors, route names, keys and sizes 
- `App.tsx`: Main application entry point  
- `.gitignore`: Git ignore file
- `.prettierrc`: Prettier configuration
- `.eslintrc.js`: ESLint configuration
- `react-native.config.js`: Project config file
- `package.json`: Node.js dependencies and scripts
- `README.md`: Project documentation

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone [git@github.com:thesaintzion/squareme-mobile-app.git]`
2. Install dependencies: `npm install`
3. Run the app: `npm start`


## Useful commands

- Start the dev sever: `npm start`
- Run on Android: `npm run android`
- Run on ios: `npm run ios`
- Install dependencies for IOS: `npm run ios:install`
- Update dependencies for IOS: `npm run ios:update`
- Gradle Clean for Android: `npm run android:clean`
- Link assets (eg: if you add new fonts..): `npm run link-assets`
- Run lint: `npm run lint`
- Get list of available devices on your machine: `npm run devices`
- Delete/kill all running watchman and reset cache:  `npm run watch-reset`
- Run the test: `npm run jest`
