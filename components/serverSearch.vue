<template>
  <v-card dark style="background-color: #5e5e5e" text>
    <v-card-title> Advanced Search </v-card-title>
    <v-card-text>
      <v-text-field outlined rounded dense label="Name..."></v-text-field>
      <v-text-field outlined rounded dense label="Category..."></v-text-field>
      <v-text-field outlined rounded dense label="Tags..."></v-text-field>
      <v-text-field
        outlined
        rounded
        dense
        label="Minimum Member Count"
      ></v-text-field>
      <v-text-field
        outlined
        rounded
        dense
        label="Maximum Member Count"
      ></v-text-field>
      <v-text-field outlined rounded dense label="Date Created"></v-text-field>
      <v-text-field outlined rounded dense label="Class..."></v-text-field>
      <v-text-field outlined rounded dense label="Private Key?"></v-text-field>
    </v-card-text>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-btn color="green darken-1" class="mr-4">Find Server List</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {};
</script>
