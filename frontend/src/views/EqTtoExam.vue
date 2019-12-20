<template>
  <div>
      <eq-tto v-for="item in eqTtoQuestions" :key="item.id" v-if="item.id==currentItem" :block="item" v-on:cUpdateItem="pUpdateItem"
      ></eq-tto>
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
      console.log(this.eqTtoQuestions)
  },
  methods: {
      pUpdateItem() {
          this.currentItem++;
      }
  }
};
</script>