# BeerFlix

## Description

An app to get quick access to the tastiest beers all around the world!

## Built With

- HTML
- SASS
- ES6
- Webpack 4
- PostCSS
- Babel

## Test API

Data displayed on the app is taken from the following test API:


[https://web-bootcamp-exercise-beer-swagger-pgjtqotgtl.now.sh/api-docs/#/user/post_user_login](https://web-bootcamp-exercise-beer-swagger-pgjtqotgtl.now.sh/api-docs/#/user/post_user_login)

## Main features

- Get beers list from API and show ten results at home page.
- Filter main results by text and/or year. After filtering, ten new results will be displayed.
- Show each beer details page by clicking on 'Show details' button from beer card.
- Add likes to a beer by clicking on 'I Like It!' button on that beer details page.
- Add a comment about a beer in its details page by submitting a form.

## Getting Started

## Prerequisites

- Node for JavaScript execution.
- npm for dependencies installation.
- Modern web browser (Chrome or Firefox latest versions) is recommended.

## Clone and install project

```bash
git clone https://github.com/Ferveloper/nodepop.git
cd nodepop
npm i
```

## Run the app on Webpack server

```bash
npm start
```

## Bundle app for development

```bash
npm run webpack
```
or, if you want Webpack to automatically watch files and re-bundle when changes occur

```bash
npm run webpack:dev
```

## Bundle app for production

```bash
npm run prod
```

## Additional notes
For both development and production, app will be bundled in `dist` folder.  
You can test the bundled app by running server emulator modules such as [http-server](https://www.npmjs.com/package/http-server) of [browser-sync](https://www.browsersync.io/) on `dist` folder.