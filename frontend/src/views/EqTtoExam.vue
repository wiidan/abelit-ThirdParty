<template>
  <div>
    <template v-for="item in eqTtoQuestions">
      <eq-tto
        v-if="item.id===currentItem"
        :block="item"
        v-on:cUpdateItem="pUpdateItem"
        :key="item.id"
      ></eq-tto>
    </template>
  </div>
</template>

<script>
import EqTto from "@/views/question/EqTto";
import dataEqttoquestion from "@/assets/data/eqttoquestion.json";
export default {
  components: {
    EqTto
  },
  data: () => ({
    eqTtoQuestions: [{}],
    currentItem: 1
  }),
  mounted() {
    this.eqTtoQuestions = dataEqttoquestion;
    console.log(this.eqTtoQuestions);
  },
  methods: {
    pUpdateItem() {
      this.currentItem++;
      if (this.currentItem > this.eqTtoQuestions.length - 1) {
        this.$router.push({ path: "/eq/end" });
      }
    }
  }
};
</script>