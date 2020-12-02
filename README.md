# frontend

## Build Setup

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
const snackBarData = {
isSuccess: true,
message: "Successfully logged in",
};
this.$store.commit("snackBar", snackBarData);

Comes with
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

# backend

## Build Setup

in the /API directory

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run serve
```

comes with
Nodejs
express
mongodb
jwt/cookie authentiation
route protection
User model
User roles of admin and user stored in the jwt
error handling
environment variables
Encrypted password database storage
factory handler for mongoose requests

.env should be included in the /API directory with the following information

```
DATABASE_PASSWORD= password replacement in the link
DATABASE=  Mongodb Link

TEST=off
TEST_DATABASE= Optional
TEST_DATABASE_PASSWORD= Optional

PORT=3001
NODE_ENV=development

JWT_SECRET= min 32 character password
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90


```

Important VSCode extentions that I use:

Debugger for Chrome
EsLint
Babel Javascript
ESLint
Prettier
Vue

vsCode preference "format on save" is turned on
