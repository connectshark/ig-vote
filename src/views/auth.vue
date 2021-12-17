<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTokenStore } from '../stores/token'
import api from '../utils/api'
const store = useTokenStore()
const route = useRoute()
const router = useRouter()

const ans = ref('')

const code = route.query.code
api.auth(code)
  .then(res => {
    store.token = res.access_token,
    store.userId = res.user_id
    router.replace('/me')
  })
  .catch(err => {
    ans.value = '讀取失敗 請稍後再嘗試'
  })
</script>

<template>
  <main class="auth">
    <div class="loading">
      <i class='bx bx-loader-circle bx-spin' ></i>
      <h2 class="tip" v-if="ans">{{ ans }}</h2>
      <h2 class="tip" v-else>努力讀取中</h2>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.auth{
  padding-top: 200px;
  box-sizing: border-box;
  .loading{
    width: 80%;
    max-width: 600px;
    margin: auto;
    i{
      font-size: 30px;
      line-height: 2;
    }
    .tip{
      font-size: 30px;
      line-height: 2;
    }
  }
}
</style>
