<script setup>
import { useTokenStore } from '../stores/token';

const store = useTokenStore()
const props = defineProps({
  postId: String
})
fetch( import.meta.env.VITE_IG_URL + `/${props.postId}/children?access_token=${store.token}`)
  .then(r => r.json())
  .then(res => console.log(res))
</script>

<template>
<div class="post">
  {{props.postId}}
</div>
</template>

<style scoped lang="scss">

</style>