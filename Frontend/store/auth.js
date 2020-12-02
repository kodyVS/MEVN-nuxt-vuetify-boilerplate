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
      const snackBarData = {
        isError: true,
        message: error.response.data.message,
      };
      vuexContext.commit("snackBar", snackBarData, { root: true });
      return "error";
    }
  },
  async logOut(vuexContext) {
    await this.$axios
      .get(process.env.VUE_APP_API_URL + "/api/v1/users/logout", {
        withCredentials: true,
      })
      .then(() => {
        vuexContext.commit("setLoggedIn", false);
      });
  },
  async autoLogin(vuexContext) {
    if (!vuexContext.getters.isAuthenticated) {
      try {
        await this.$axios
          .get(process.env.VUE_APP_API_URL + "/api/v1/users/autoLogin", {
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.status === "success") {
              vuexContext.commit("setLoggedIn", true);
            }
          })
          .catch((error) => {
            throw error;
          });
      } catch (error) {
        vuexContext.commit("setLoggedIn", false);
      }
    }
  },
  async signUp(vuexContext, signUpData) {
    console.log(signUpData);
    try {
      const res = await this.$axios.post(
        process.env.VUE_APP_API_URL + "/api/v1/users/signup",
        signUpData,
        { withCredentials: true }
      );
      console.log(res);
      vuexContext.commit("setLoggedIn", true);
    } catch (err) {
      console.log(err);
    }
  },
};
export const getters = {
  isAuthenticated(state) {
    return state.loggedIn !== false;
  },
};
