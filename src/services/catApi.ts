import axios from "axios";


const catsApi = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images/search',
  headers: {
    'x-api-key': 'live_o4VNf4DjdlXQTVV4Ry2l8qL1qYOQPD1FhsESP0YrH83oa2uFGsQqPZsYfbevlZ6F'
  }
})

export const fetchCatImages = async()=> {
  const res = await catsApi.get('?limit=10')
  return res
}

// const postsApi = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com'
// })

// export const fetchPosts = async()=> {
//   const res = await postsApi.get('/posts')
//   let min = 1;
//   const date = sub(new Date(), {minutes: min++}).toISOString()
//   const resWithDate = res.data.map((item: Posts) => ({ ...item, createDate: date, keys: nanoid() }))
//   return resWithDate
// }

// export const createPost = async(post: Posts)=> {
//   const res = await postsApi.post('/posts', post)
//   return res.data
// }

// export const updatePost = async(id: string, post: Posts)=> {
//   const res = await postsApi.put(`/posts/${id}`, post)
//   return res.data
// }

// export const deletePost = async( id: string)=> {
//   const res = await postsApi.delete(`/posts/${id}`)
//   return res.data
// }

// export default postsApi