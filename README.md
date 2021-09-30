# frontend

## Build Setup

In the /Frontend directory

IMPORTANT: Must clear your localhost cookies before starting.

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
```javascript const snackBarData = {
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

DATABASE_PASSWORD= `YOURDBPASS`

DATABASE=`mongodb+srv://...`
TEST=off
TEST_DATABASE=`mongodb+srv://...`
TEST_DATABASE_PASSWORD=
PORT=3001
NODE_ENV=development

JWT_SECRET=`YOURJWTSECRET`
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90