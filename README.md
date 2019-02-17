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


<https://web-bootcamp-exercise-beer-swagger-pgjtqotgtl.now.sh/api-docs/>

## Main features

- Get list of beers from API and show ten results at the home page.
- Filter main results by text and/or year. After filtering, ten new results will be displayed.
- Show each beer details page by clicking on 'Show details' button from beer card.
- Add likes to a beer by clicking on 'I Like It!' button on the beer details page.
- Add a comment about a beer in its details page by submitting a form.

## Prerequisites

- Node for JavaScript execution.
- npm for dependencies installation.
- Modern web browser (Chrome or Firefox latest versions) is highly recommended.

## Usage

### Clone and install project

```bash
git clone https://github.com/Ferveloper/nodepop.git
cd nodepop
npm i
```

### Run the app on Webpack server

```bash
npm start
```

### Bundle app for development

```bash
npm run webpack
```
or, if you want Webpack to automatically watch files and re-bundle when changes occur

```bash
npm run webpack:dev
```

### Bundle app for production

```bash
npm run prod
```
## Configuration files

- `package.json` for Node project.
- `.gitignore` for repository excluded files.
- `webpack.config.js` for Webpack development settings.
- `webpack.production.js` for Webpack production settings.
- `.babelrc` for Babel.
- `.eslint.js` for ESLint preferences.

## Additional notes
For both development and production, app will be bundled in `./dist` folder.  
You can test the bundled app by running server emulator modules such as [http-server](https://www.npmjs.com/package/http-server) of [browser-sync](https://www.browsersync.io/) on `./dist` folder.

## License

MIT ([See details](https://opensource.org/licenses/MIT))