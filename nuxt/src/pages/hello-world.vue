<template>
  <h1>Hello, World</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  created: async function () {
    const hoge = await this.$axios.get('http://localhost:8080/helloWorld')
    console.log(hoge)
  },
})
</script>