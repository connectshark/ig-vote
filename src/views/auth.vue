<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const ans = ref('')
const code = route.query.code
fetch(import.meta.env.VITE_URL + `/auth?code=${code}`)
  .then(r => r.json())
  .then(res => ans.value = res)
</script>

<template>
  <main>
    <h1>auth</h1>
    <p>{{ans}}</p>
  </main>
</template>
