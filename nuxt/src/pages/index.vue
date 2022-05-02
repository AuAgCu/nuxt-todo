<template>
  <div>
    <h1>初期ページ</h1>
    <a href="/register">新規登録</a>
    <a href="/login">ログイン</a>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',

  created: async function() {
    const hoge = await this.$axios.get('http://localhost:8080/helloWorld');
    console.log(hoge);
  }
});
</script>
