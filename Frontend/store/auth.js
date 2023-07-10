export const state = () => ({
  loggedIn: false,
  userId: "",
  userRole: "",
  userName: "",
});
export const mutations = {
  setLoggedIn(state, data) {
    state.loggedIn = data.loggedIn;
    state.userRole = data.userRole;
    state.userID = data._id;
    state.userName = `${data.firstName} ${data.lastName}`;
  },
  logOut(state) {
    state.loggedIn = false;
  },
};
export const actions = {
  async login(vuexContext, loginData) {
    try {
      const res = await this.$axios.post(
        process.env.API_URL + "/api/v1/users/login",
        {
          email: loginData.email,
          password: loginData.password,
        },
        {
          withCredentials: true,
        }
      );
      if (res.data.status === "success") {
        const data = { ...res.data.user, loggedIn: true };
        vuexContext.commit("setLoggedIn", data);
        return "success";
      }
    } catch (error) {
      console.log(error.message);
      returnError(
        error,
        "Error in connecting the server, make sure you have service and hit refresh",
        vuexContext
      );
      throw new Error(error);
    }
  },
  async logOut(vuexContext) {
    try {
      await this.$axios.get(process.env.API_URL + "/api/v1/users/logout", {
        withCredentials: true,
      });
      const data = {
        userRole: "",
        userID: "",
        firstName: "",
        lastName: "",
        loggedIn: false,
      };
      vuexContext.commit("setLoggedIn", data);
    } catch (error) {
      returnError(error, "Error in connecting the server", vuexContext);
      throw new Error(error);
    }
  },
  async autoLogin(vuexContext) {
    if (!vuexContext.getters.isAuthenticated) {
      try {
        const res = await this.$axios.get(
          process.env.API_URL + "/api/v1/users/autoLogin",
          {
            withCredentials: true,
          }
        );
        if (res.data.status === "success") {
          const data = { ...res.data.user, loggedIn: true };
          vuexContext.commit("setLoggedIn", data);
        }
      } catch (error) {}
    }
  },
  async signUp(vuexContext, signUpData) {
    try {
      await this.$axios.post(
        process.env.API_URL + "/api/v1/users/signup",
        signUpData,
        { withCredentials: true }
      );
      return "User created";
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
  userRole(state) {
    return state.userRole;
  },
  user(state) {
    return {
      name: state.userName,
      role: state.userRole,
      id: state.userID,
    };
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
