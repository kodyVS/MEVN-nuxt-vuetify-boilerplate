# frontend

## Build Setup

IMPORTANT: Must clear your localhost cookies before starting.

In the /Frontend directory

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run serve

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

To generate snackbar's

```javascript
const snackBarData = {
  isSuccess: true,
  message: "Successfully logged in",
};
this.$store.commit("snackBar", snackBarData);
```

## Comes with

Vue
vuex
nuxt
vuetify
authentication middleware
route protection
error handling
login and registering users
nuxt serverside rendering
dashboard and navigation

## Important VSCode extentions that I use:

Debugger for Chrome
EsLint
Babel Javascript
ESLint
Prettier
Vue

vsCode preference "format on save" is turned on

## Run Command

`sudo docker-compose up --build`

## ENV File

```
DATABASE_PASSWORD=mongopw
DATABASE=mongodb://docker:<PASSWORD>@localhost:49101
TEST=off
TEST_DATABASE=
TEST_DATABASE_PASSWORD=
PORT=3001
NODE_ENV=development
PRODUCTION_FRONTEND_URL=127.0.0.1
DEVELOPMENT_FRONTEND_URL=http://localhost:2500
JWT_SECRET=my-ultra-secure-and-ultra-long-secre1
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90
```
