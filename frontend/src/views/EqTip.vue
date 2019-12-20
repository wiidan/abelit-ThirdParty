<template>
    <v-container>
       <v-card class="mt-12 pa-5">
      <v-card-title class="display-2">简介</v-card-title>
      <v-card-text>
        <v-row justify="center" class="mt-12">
          <v-col cols="12">
            <span class="display-1">
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 感谢您同意参加本次调查。本次采访的目的是为了改进医疗卫生系统。我们邀请包括您在内的病人帮助我们完成这项研究。这些问题是询问人们对于健康状况和疾病的不同看法。我们感兴趣的是您的看法，这里没有正确或错误的答案。您只需告诉我们您的想法。完成本项调查大约需要30分钟。我们将对您的答案和个人信息严格保密。您准备好了吗？
            </span>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          x-large
          height="72"
          width="200"
          dark
          class="mt-12 lime darken-4"
          @click="startExam"
        >
          <v-icon>mdi-play</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-container>
</template>


<script>
export default {
  name: "EqTip",
  data: () => ({

  }),
  methods: {
    startExam() {
      this.$router.push({path: "/eq/tto"});
    }
  }
}
</script>