<script setup>
import { ref } from 'vue'
import { useTokenStore } from '../stores/token'
import Post from '../components/post.vue'
import api from '../utils/api'
const store = useTokenStore()

const posts = ref([])
const user = ref('')
api.getMe(store.userId, store.token)
  .then(name => user.value = name)

api.getPosts(store.token)
  .then(post => posts.value = post )

const loadMore = () => {

}
</script>

<template>
<div class="me">
  <h1>Hello {{user}}</h1>
  <div class="container">
    <Post v-for="post in posts" :key="post.id"
      :media_url="post.media_url"
      :media_type="post.media_type"
      :caption="post.caption"
      :time="post.timestamp"
      :postId="post.id"
    />
  </div>
  <div class="btn-group">
    <div class="btn" @click="loadMore">
      <i class='bx bx-chevron-down'></i>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.me{
  padding: 20px 0;
  .btn-group{
    .btn{
      font-size: 30px;
      padding: 5px 0;
      cursor: pointer;
      &:hover{
        background-color: #2a2a2a;
      }
    }
  }
  h1{
    font-size: 30px;
    line-height: 2;
  }
  .container{
    width: 90%;
    margin: auto;
    max-width: 600px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
}

</style>