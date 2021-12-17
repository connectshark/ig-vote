<script setup>
import dayjs from 'dayjs'
const props = defineProps({
  caption: String,
  media_url: String,
  media_type: String,
  time: String,
  postId: String
})

const time = dayjs(props.time).format('YYYY/MM/DD')
</script>

<template>
<router-link :to="{ path: '/post/' + props.postId}" class="post">
  <figure>
    <img :src="props.media_url" :alt="props.media_type">
    <figcaption>{{time}}</figcaption>
  </figure>
</router-link>
</template>

<style scoped lang="scss">
.post{
  figure{
    img{
      width: 100px;
      height: 100px;
      object-fit: contain;
    }
    figcaption{
      font-size: 14px;
      line-height: 1.5;
    }
  }
}
</style>