<template>
  <v-container fluid class="pa-0">
    <v-img :src="require('@/assets/images/eqbgqst.png')" max-height="40vh" :aspect-ratio="16/9"></v-img>
    <v-row>
      <v-col cols="12" >
        <v-row align="center" justify="center">
          <v-card
           v-for="item in questionList" :key="item"
            class="ma-3 pa-6 text-center"
            outlined
            tile
            width="120"
            height="80"
            @click="hi()"
          >
            {{item}}
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    questionList: ['PVT','TTO','TTO Feedback']
  }),
  methods: {
    hi() {
      alert("hi");
    }
  }
}
</script>