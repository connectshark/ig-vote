<script setup>
import { ref } from 'vue'
import { useTokenStore } from '../stores/token'
import Post from '../components/post.vue'
const store = useTokenStore()

const user = ref('')
const posts = ref([])
fetch( import.meta.env.VITE_IG_URL + `/${store.userId}?fields=account_type,id,media_count,username&access_token=${store.token}`)
  .then(r => r.json())
  .then(res => user.value = res.username)

fetch( import.meta.env.VITE_IG_URL + `/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${store.token}`)
  .then(r => r.json())
  .then(res => {
    posts.value = res.data
  })

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