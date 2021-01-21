export default async function (context) {
  if (!context.store.getters["auth/isAuthenticated"]) {
    await context.store.dispatch("auth/autoLogin");
  }
}
