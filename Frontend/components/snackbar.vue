<template>
  <div>
    <v-snackbar
      v-model="localSnackObject.isError"
      color=""
      class="success--text"
      top
      ><template v-slot:action="{ attrs }">
        <v-btn
          color="success"
          text
          v-bind="attrs"
          @click="localSnackObject.isError = false"
        >
          Close
        </v-btn>
      </template>
      <v-icon color="red">mdi-alert-circle-outline</v-icon>
      <span> {{ localSnackObject.message }}</span>
    </v-snackbar>
    <v-snackbar
      v-model="localSnackObject.isSuccess"
      color=""
      class="success--text"
      top
      ><template v-slot:action="{ attrs }">
        <v-btn
          color="green"
          text
          v-bind="attrs"
          @click="localSnackObject.isSuccess = false"
        >
          Close
        </v-btn>
      </template>
      <v-icon color="green">mdi-check</v-icon>
      <span> {{ localSnackObject.message }}</span>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      localSnackObject: {
        isError: false,
        isSuccess: false,
        message: "",
      },
    };
  },
  computed: {
    ...mapState({
      snackObject: (state) => state.snackObject,
    }),
  },
  watch: {
    snackObject() {
      this.localSnackObject = { ...this.snackObject };
    },
  },
};
</script>
