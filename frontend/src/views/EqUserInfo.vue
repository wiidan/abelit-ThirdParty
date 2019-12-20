<template>
  <v-container>
    <v-card class="mt-12">
      <v-card-title class="display-1">To be filled in by interviewer</v-card-title>
      <v-card-text>
        <v-row justify="center" class="mt-12">
          <v-col cols="2">
            <v-subheader class="eq-userinfo">Interviewer</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-select :items="interviewers" label="- select -" outlined v-model="interviewer"></v-select>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-12">
          <v-col cols="2">
            <v-subheader class="eq-userinfo">Participant ID</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="- participant id -" outlined v-model="participant"></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-12">
          <v-col cols="2">
            <v-subheader class="eq-userinfo">Block of questions</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-select :items="blockQuestions" label="- select -" outlined v-model="blockQuestion"></v-select>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="#0094ff"
          x-large
          height="72"
          width="200"
          dark
          class="mt-12"
          @click="saveUserInfo()"
        >
          <v-icon>mdi-play</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "EqUserInfo",
  //   props: ["interviewers", "blockQuestions"],
  data: () => ({
    interviewers: [1, 2, 3, 4, 5],
    blockQuestions: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
    interviewer: "",
    participant: "",
    blockQuestion: ""
  }),
  methods: {
    saveUserInfo() {
      var obj = {
        interviewer: this.interviewer,
        participant: this.participant,
        blockQuestion: this.blockQuestion
      };
      this.$store.dispatch("setUserInfo", obj).then(() => {
        console.log(obj);
        this.$router.push({ path: "/eq/tip" });
      });
    }
  }
};
</script>

<style lang="scss">
.eq-userinfo {
  color: black !important;
  font-size: 16px;
}
</style>