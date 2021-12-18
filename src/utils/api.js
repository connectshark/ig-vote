const api = {
  auth (code) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_URL + `/auth/ig?code=${code}`)
        .then(r => r.json())
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
    
  },
  getMe (userId, userToken) {
    return new Promise(resolve => {
      fetch( import.meta.env.VITE_IG_URL + `/${userId}?fields=account_type,id,media_count,username&access_token=${userToken}`)
        .then(r => r.json())
        .then(res => {
          resolve(res.username)
        })
    })
  },

  getPosts (userToken) {
    return new Promise(resolve => {
      fetch( import.meta.env.VITE_IG_URL + `/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${userToken}`)
        .then(r => r.json())
        .then(res => {
          resolve(res.data)
        })
    })
  },

  getPostDetail (postId, userToken) {
    return new Promise((resolve, reject) => {
      fetch( import.meta.env.VITE_IG_URL + `/${postId}?fields=media_url&access_token=${userToken}`)
        .then(r => r.json())
        .then(res => {
          resolve(res)
        })
    })
  },

  getPostChildren (postId, userToken) {
    return new Promise((resolve, reject) => {
      fetch( import.meta.env.VITE_IG_URL + `/${postId}/children?access_token=${userToken}`)
        .then(r => r.json())
        .then(res => {
          resolve(res.data)
        })
    })
  }
}

export default api