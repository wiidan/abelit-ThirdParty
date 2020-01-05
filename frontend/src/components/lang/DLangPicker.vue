<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on: menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn color="transparent" v-on="{ ...tooltip, ...menu}" icon>
              <v-avatar size="32px" tile>
                <v-img
                  :src="require('@/assets/images/lang/'+language+'.png')"
                  aspect-ratio="1"
                  alt="language"
                ></v-img>
              </v-avatar>
            </v-btn>
          </template>
          <span>{{ $vuetify.lang.t("$vuetify.tooltip.switchLanguage") }}</span>
        </v-tooltip>
      </template>
      <v-list dense>
        <v-list-item
          v-for="(lang, index) in langList"
          :key="index"
          :disabled="language === lang.code"
          @click="setLanguage(lang.code)"
        >
          <v-list-item-avatar tile>
            <v-img :src="require('@/assets/images/lang/'+lang.code+'.png')" :alt="lang.name"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ lang.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>


<script>
export default {
  data: () => ({
    language: "zh_cn",
    langList: [
      {
        code: "zh_cn",
        name: "简体中文"
      },
      {
        code: "en_us",
        name: "American English"
      }
    ]
  }),
  methods: {
    // 语言切换
    setLanguage(language) {
      this.language = language;
      // 设置国际化语言信息
      this.$vuetify.lang.current = this.language;

      // 通过异步方式调用store中setLanguage方法，保存语言信息
      this.$store.dispatch("setLanguage", this.language);
    }
  },
  mounted() {
    // 从vuex中获取语言信息
    this.language = this.$store.state.language;
  }
};
</script>