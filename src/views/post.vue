<script setup>
import { ref } from 'vue'
import { useTokenStore } from '../stores/token'
import api from '../utils/api'

const store = useTokenStore()
const props = defineProps({
  postId: String
})
const imgs = ref([])
api.getPostChildren(props.postId, store.token)
  .then(children => {
    children.forEach(item => {
      api.getPostDetail(item.id, store.token)
        .then(res => {
          imgs.value.push(res)
        })
    })
  })
</script>

<template>
<div class="post">
  <h1>{{props.postId}}</h1>
  <div class="group">
    <figure v-for="img in imgs" :key="img.id">
      <img :src="img.media_url" :alt="img.id">
    </figure>
  </div>
  
</div>
</template>

<style scoped lang="scss">
.post{
  .group{
    figure{
      display: inline-block;
      width: 33%;
      img{
        width: 100%;
        vertical-align: middle;
      }
    }
  }
}
</style>