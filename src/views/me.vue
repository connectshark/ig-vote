<script setup>
import { ref } from 'vue'
import { useTokenStore } from '../stores/token'
const store = useTokenStore()

const user = ref('')
fetch(`https://graph.instagram.com/v12.0/${store.userId}?fields=account_type,id,media_count,username&access_token=${store.token}`)
  .then(r => r.json())
  .then(res => user.value = res.username)
</script>

<template>
<h1>Hello {{user}}</h1>
</template>

<style scoped lang="scss">
h1{
  font-size: 30px;
  line-height: 2;
}
</style>