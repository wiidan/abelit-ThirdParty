<template>
  <v-container v-show="dceQuestion.length > 1">
    <v-row>
      <v-col>
        <v-alert dense type="info">Which is better, state A or state B?</v-alert>
      </v-col>
    </v-row>
    <v-row v-for="item in dceQuestion" :key="item.id">
      <v-col cols="6" v-if="item.name == name">
        <v-card
          style="height:200px"
          class="pa-3"
          v-model="selectedAnswer"
          :class="item.answerA==selectedAnswer?'primary':''"
          @click="chooseAnswer(item.answerA)"
        >
          <h3>{{ item.answerA }}</h3>
          <p>{{ item.sourceTextA }}</p>
        </v-card>
      </v-col>
      <v-col cols="6" v-if="item.name == name">
        <v-card
          style="height:200px"
          class="pa-3"
          v-model="selectedAnswer"
          :class="item.answerB==selectedAnswer?'primary':''"
          @click="chooseAnswer(item.answerB)"
        >
          <h3>{{ item.answerB }}</h3>
          <p>{{ item.sourceTextB }}</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" align="center" justify="center">
        <v-btn height="72" width="200" color="primary" @click="nextBtn">
          <v-icon>mdi-play</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
//import dataDce from "@/assets/data/dce.json";
import { mapState } from "vuex";
export default {
  data: () => ({
    dceQuestion: [],
    block: 1,
    itemOrder: [],
    name: "",
    selectedAnswer: "",
    dceAnswers: []
  }),
  created() {
    this.getdceQuestion();
  },
  mounted() {},
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    nextBtn() {
      if (!this.selectedAnswer) {
        alert("请选择您的答案！");
        return false;
      }

      if (this.itemOrder.indexOf(this.name) + 1 >= this.itemOrder.length) {
        alert("回答完毕！");
        this.$router.push({ path: "/eq/end" });
      }
      var answerObj = {
        participant: this.userInfo.participant,
        interviewer: this.userInfo.interviewer,
        item: this.name,
        position_of_item: this.itemOrder.indexOf(this.name) + 1,
        selected_state: this.selectedAnswer,
        dce_reversal: "",
        block: this.userInfo.blockQuestion,
        version: "V17"
      };

      this.dceAnswers.push(answerObj);

      console.log(this.dceAnswers);

      this.selectedAnswer = "";
      this.name = this.itemOrder[this.itemOrder.indexOf(this.name) + 1];
    },
    chooseAnswer(item) {
      this.selectedAnswer = item;
      console.log(this.selectedAnswer);
    },
    getdceQuestion() {
      this.$axios
        .get("/api/question/dce", {
          params: { block: this.userInfo.blockQuestion }
        })
        .then(res => {
          //   this.dceQuestion = res.data;
          var arrKey = [];
          var arrTemp = [];
          for (let i = 0; i < res.data.length; i++) {
            if (arrKey.indexOf(res.data[i].name) == -1) {
              arrKey.push(res.data[i].name);
            }
          }
          for (let i = 0; i < arrKey.length; i++) {
            var obj = {};
            for (let j = 0; j < res.data.length; j++) {
              if (res.data[j].name == arrKey[i]) {
                obj.name = arrKey[i];
                obj.presentation = res.data[j].presentation;
                if (res.data[j].answer == "A") {
                  obj.answerA = "A";
                  obj.sourceTextA = res.data[j].source_text;
                }
                if (res.data[j].answer == "B") {
                  obj.answerB = "B";
                  obj.sourceTextB = res.data[j].source_text;
                }
              }
            }
            arrTemp.push(obj);
          }
          console.log(arrTemp);
          this.dceQuestion = arrTemp;
          this.itemOrder = arrKey;
          this.name = this.dceQuestion[0].name;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
