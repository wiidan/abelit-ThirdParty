





<template>
  <v-container>
    <div v-for="item in items" :key="item.id">
      {{item.name}} ----> {{item.source_text}}
    </div>
  </v-container>
</template>


<script>
import {mapState} from "vuex";
export default {
  data: () => ({
    items: [{}]
  }),
  created() {
    this.getItem();
  },
  methods: {
    getItem() {
      this.$axios.get("/api/question/tto", {
        params: {
          block: this.userInfo.blockQuestion
        }
      }).then(res => {
        this.items = res.data;
      })
    }
  },
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>