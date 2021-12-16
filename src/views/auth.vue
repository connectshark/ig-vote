<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
const route = useRoute()
const ans = ref('')
axios.post('https://fathomless-garden-95154.herokuapp.com/auth', {
  code: route.query.code
}).then(res => {
  ans.value = res.data
})
</script>

<template>
  <main>
    <h1>auth</h1>
    <p>{{ans}}</p>
  </main>
</template>
