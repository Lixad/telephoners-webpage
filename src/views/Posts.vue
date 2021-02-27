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
import baseUrl from '../modules/url';

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
    axios.get(baseUrl + '/posts/page/' + this.$route.params.page)
    .then(res => {
      if (res.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + res);
        return;
      }
      this.posts = res.data;
    })
    .catch(function (error) {
      console.log(error);
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