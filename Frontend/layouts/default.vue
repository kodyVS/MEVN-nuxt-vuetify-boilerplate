<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="secondary white--text">
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        v-if="!loggedIn"
        @click="signIn = !signIn"
        color="blue darken-2 white--text"
      >
        <span>Sign in</span>
        <v-icon right>mdi-login-variant</v-icon>
      </v-btn>
      <v-btn v-if="loggedIn" @click="logOut()" color="blue darken-2 white--text"
        >Sign out
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-dialog v-model="signIn" max-width="600px" min-width="360px">
        <login @signedIn="signIn = !signIn"></login>
      </v-dialog>

      <v-container>
        <snackbar />
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      signIn: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Page 2",
          to: "/page2",
        },
        {
          icon: "mdi-account",
          title: "login",
          to: "/login",
        },
        {
          icon: "mdi-chart-bubble",
          title: "admin",
          to: "/admin/",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Base App",
    };
  },
  computed: {
    ...mapState({
      loggedIn: (state) => state.auth.loggedIn,
    }),
  },
  methods: {
    async logOut() {
      await this.$store.dispatch("auth/logOut");
      this.$router.go("/login");
      const snackBarData = {
        isSuccess: true,
        message: "Successfully logged out",
      };
      this.$store.commit("snackBar", snackBarData);
    },
  },
};
</script>
