# Atlas API

### Quickstart

```sh
$ git clone git@github.com:digital-futures-academy/atlas-api.git && cd atlas-api
$ npm install
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
$ npm start
```

### Env vars
Project uses `dotenv` to handle project specific environment variables. See `.env.example` for an example on how to configure yours for development.

### Tests

```sh
# to run Cypress tests
$ npx cypress open

# to run Cypress headless browser tests
$ npx cypress run --reporter mochawesome --reporter-options "reportDir=cypress/report/mochawesome-report,overwrite=false,html=false,json=true,timestamp=mmddyyyy_HHMMss"

# to run unit tests
$ npm test
```
