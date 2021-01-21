<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <div class="text-center"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <serverSearch />
        </v-col>
        <v-col cols="7">
          <serverList />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import serverSearch from "../components/serverSearch";
import serverList from "../components/serverList";
export default {
  components: {
    serverSearch,
    serverList,
  },
};
</script>
