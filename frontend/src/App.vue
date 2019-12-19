<template>
  <v-app>
    <v-app-bar dark app dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>EQ PVT</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
