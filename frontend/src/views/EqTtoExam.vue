<template>
  <div>
    <template v-for="item in eqTtoQuestions">
      <eq-tto
        v-if="eqTtoQuestions.indexOf(item)===currentItem"
        :block="item"
        v-on:cUpdateItem="pUpdateItem"
        :key="item.id"
      ></eq-tto>
    </template>
  </div>
</template>

<script>
import EqTto from "@/views/question/EqTto";
// import dataEqttoquestion from "@/assets/data/eqttoquestion.json";
import { mapState } from "vuex";

export default {
  components: {
    EqTto
  },
  data: () => ({
    eqTtoQuestions: [{}],
    currentItem: 0
  }),
  created() {
    this.getQuestion();
  },
  mounted() {},
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    pUpdateItem() {
      // console.log(this.currentItem + "--->" + this.eqTtoQuestions[this.currentItem].source_text)
      this.currentItem++;
      // console.log(this.currentItem);
      // console.log(this.eqTtoQuestions.length)
      if (this.currentItem > this.eqTtoQuestions.length - 1) {
        this.$router.push({ path: "/eq/end" });
      }
    },
    getQuestion() {
      // console.log(this.userInfo.blockQuestion);
      this.$axios
        .get("/api/question/tto", {
          params: { block: this.userInfo.blockQuestion }
        })
        .then(res => {
          this.eqTtoQuestions = res.data;
          // this.currentItem = this.eqTtoQuestions[0].id;
          // console.log(this.eqTtoQuestions);
        })
        .catch(error => {
          console.log(error);
        });
      // console.log(this.eqTtoQuestions);
    }
  }
};
</script>