<script setup>
const url = `https://api.instagram.com/oauth/authorize?client_id=328160172224472&redirect_uri=https://ig-vote.onrender.com/auth&response_type=code&state=look&scope=user_profile,user_media`
</script>

<template>
  <main>
    <a :href="url">hahaha</a>
  </main>
</template>
