<script setup>
import { ref } from 'vue'
import { useTokenStore } from '../stores/token'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import api from '../utils/api'

SwiperCore.use([Navigation])

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
    <swiper
      :navigation="{
        nextEl: '.sw-next',
        prevEl: '.sw-prev'
      }"
      :slides-per-view="1"
      :space-between="20"
    >
      <swiper-slide v-for="img in imgs" :key="img.id">
        <figure>
          <img :src="img.media_url" :alt="img.id">
        </figure>
      </swiper-slide>
    </swiper>
    <div class="navigation">
      <span class="sw-next">
        <i class='bx bxs-right-arrow'></i>
      </span>
      <span class="sw-prev">
        <i class='bx bxs-left-arrow'></i>
      </span>
    </div>
  </div>
  
</div>
</template>

<style scoped lang="scss">
.post{
  .group{
    width: 80%;
    margin: auto;
    figure{
      img{
        width: 100%;
        vertical-align: middle;
      }
    }
  }
}
</style>