<template>
  <v-container v-show="dceQuestion.length > 1">
    <v-row>
      <v-col>
<<<<<<< HEAD
        <v-alert dense type="info">Which is better, state A or state B?</v-alert>
=======
        <v-alert dense type="info"
          >Which is better, state A or state B?</v-alert
        >
>>>>>>> 5f5ee7a6cd7f459c70033ff2994677225a11b0ca
      </v-col>
    </v-row>
    <v-row v-for="item in dceQuestion" :key="item.id">
      <v-col cols="6" v-if="item.name == name">
        <v-card
          style="height:200px"
          class="pa-3"
          v-model="selectedAnswer"
<<<<<<< HEAD
          :class="item.answerA==selectedAnswer?'primary':''"
=======
          :class="item.answerA == selectedAnswer ? 'primary' : ''"
>>>>>>> 5f5ee7a6cd7f459c70033ff2994677225a11b0ca
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
<<<<<<< HEAD
          :class="item.answerB==selectedAnswer?'primary':''"
=======
          :class="item.answerB == selectedAnswer ? 'primary' : ''"
>>>>>>> 5f5ee7a6cd7f459c70033ff2994677225a11b0ca
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
    selectedAnswer: ""
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
<<<<<<< HEAD
        if (this.itemOrder.indexOf(this.name)+1>=this.itemOrder.length) {
            alert("haha");
            return false;
        }
        this.name = this.itemOrder[this.itemOrder.indexOf(this.name)+1]
=======
      if (this.itemOrder.indexOf(this.name) + 1 >= this.itemOrder.length) {
        alert("回答完毕");
        return false;
      }
      this.name = this.itemOrder[this.itemOrder.indexOf(this.name) + 1];
      this.selectedAnswer = "";
>>>>>>> 5f5ee7a6cd7f459c70033ff2994677225a11b0ca
    },
    chooseAnswer(item) {
      this.selectedAnswer = item;
      console.log(this.selectedAnswer);
    },
<<<<<<< HEAD
    async getdceQuestion() {
      await this.$axios
=======
    getdceQuestion() {
      this.$axios
>>>>>>> 5f5ee7a6cd7f459c70033ff2994677225a11b0ca
        .get("/api/question/dce", {
          params: { block: this.userInfo.blockQuestion }
        })
        .then(res => {
<<<<<<< HEAD
        //   this.dceQuestion = res.data;
          var arrKey = [];
          var arrTemp = [];
          for (let i = 0; i < res.data.length; i++) {
=======
          //   this.dceQuestion = res.data;
          var arrKey = [];
          var arrTemp = [];
          for (let i = 0; i < res.data.length; i++) {
            console.log(arrKey.indexOf(res.data[i].name) == -1);
>>>>>>> 5f5ee7a6cd7f459c70033ff2994677225a11b0ca
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
<<<<<<< HEAD
          console.log(arrTemp)
          this.dceQuestion =  arrTemp;
=======
          console.log(arrTemp);
          this.dceQuestion = arrTemp;
>>>>>>> 5f5ee7a6cd7f459c70033ff2994677225a11b0ca
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
