<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>
          You have reached the admin page which means you are an authenicated
          user
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  middleware: ["autoLogin", "authCheck"],
};
</script>
