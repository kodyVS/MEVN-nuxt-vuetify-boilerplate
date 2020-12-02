export const state = () => ({
  snackObject: {
    isError: false,
    isSuccess: false,
    message: "",
  },
});

export const mutations = {
  snackBar(state, snackBarData) {
    state.snackObject = snackBarData;
  },
};

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    await context.store.dispatch("auth/autoLogin");
  },
};
