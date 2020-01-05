<template>
  <v-app>
    <v-app-bar app>
      <router-link to="/">
        <v-img
          :src="require('@/assets/images/eq5d_logo.gif')"
          height="64"
          max-height="64"
          max-width="250"
        ></v-img>
      </router-link>

      <v-spacer></v-spacer>
      <d-lang-picker></d-lang-picker>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon :to="url" v-on="on">
            <v-icon>settings</v-icon>
          </v-btn>
        </template>
        <span>{{$vuetify.lang.t("$vuetify.setting.settings")}}</span>
      </v-tooltip>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
//导入语言设置组件
import DLangPicker from "@/components/lang/DLangPicker";
export default {
  name: "App",

  data: () => ({
    url: "/eq/question/setting"
  }),
  components: {
    DLangPicker
  },
  created() {
    this.language = this.$store.state.language;
    this.$vuetify.lang.current = this.language;
  }
};
</script>
