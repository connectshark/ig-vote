<script setup>
import { useRouter } from 'vue-router'
import { useTokenStore } from '../stores/token'

const router = useRouter()
const store = useTokenStore()
if (!store.token) {
  router.push('/login')
}
</script>

<template>
  <main>
    <h1>Hello </h1>
  </main>
</template>
