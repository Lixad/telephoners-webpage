<template>
  <div>
    <div class="container p-t-100">
      <h3>Posty</h3>
      <ul>
        <Post v-for="post in posts" :key="post.id" :data="post"/>
      </ul>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Post from '../components/Post.vue';

export default {
  name: 'Posts',
  components: {
    Post
  },
  data(){
    return{
        posts: []
      }
  },
  methods:{
  },
  created() {
    axios.get('/posts/page/' + this.$route.params.page)
    .then(res => {
      this.posts = res.data;
      console.log(res.data);
    })
  }
}
</script>

<style lang="scss" scoped>

h3 {
  font-size: 6em;
  padding-bottom: 150px;
}

.container{
  width: 80%;
  margin: 0 auto;
}

</style>