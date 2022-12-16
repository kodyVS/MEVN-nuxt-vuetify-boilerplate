export const state = () => ({
  loggedIn: false,
});
export const mutations = {
  setLoggedIn(state, loggedIn) {
    state.loggedIn = loggedIn;
  },
  logOut(state) {
    state.loggedIn = false;
  },
};
export const actions = {
  async login(vuexContext, loginData) {
    try {
      const res = await this.$axios.post(
        process.env.VUE_APP_API_URL + "/api/v1/users/login",
        {
          email: loginData.email,
          password: loginData.password,
        },
        {
          withCredentials: true,
        }
      );
      if (res.data.status === "success") {
        vuexContext.commit("setLoggedIn", true);
      }
    } catch (error) {
      returnError(error, "Error in connecting the server", vuexContext);
      throw new Error(error);
    }
  },
  async logOut(vuexContext) {
    try {
      await this.$axios.get(
        process.env.VUE_APP_API_URL + "/api/v1/users/logout",
        {
          withCredentials: true,
        }
      );
      vuexContext.commit("setLoggedIn", false);
    } catch (error) {
      returnError(error, "Error in connecting the server", vuexContext);
      throw new Error(error);
    }
  },
  async autoLogin(vuexContext) {
    if (!vuexContext.getters.isAuthenticated) {
      try {
        const res = await this.$axios.get(
          process.env.VUE_APP_API_URL + "/api/v1/users/autoLogin",
          {
            withCredentials: true,
          }
        );
        if (res.data.status === "success") {
          vuexContext.commit("setLoggedIn", true);
        }
      } catch (error) {
        returnError(error, "Error in connecting the server", vuexContext);
      }
    }
  },
  async signUp(vuexContext, signUpData) {
    try {
      await this.$axios.post(
        process.env.VUE_APP_API_URL + "/api/v1/users/signup",
        signUpData,
        { withCredentials: true }
      );
      vuexContext.commit("setLoggedIn", true);
    } catch (error) {
      returnError(error, "Error in connecting the server", vuexContext);
      throw new Error(error);
    }
  },
};
export const getters = {
  isAuthenticated(state) {
    return state.loggedIn !== false;
  },
};

const returnError = (error, snackbarDefaultMessage, vuexContext) => {
  const snackBarData = {
    isError: true,
    message: snackbarDefaultMessage,
  };
  if (error.response) {
    snackBarData.message = error.response.data.message;
  } else if (error) {
    snackBarData.message = snackbarDefaultMessage;
  }
  vuexContext.commit("snackBar", snackBarData, { root: true });
  return snackBarData;
};
