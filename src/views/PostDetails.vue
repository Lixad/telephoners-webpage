<template>
    <div class="container">
        <h3>
            Tytuł: {{post.postName}}
        </h3>
        <h4>
            Tematyka: {{post.topic}}
        </h4>
        <h5>
            Data utworzenia: {{post.postDate}}
        </h5>
        <img :src="post.mainPhoto.url"/>
        <p>
            {{post.content}}
        </p>
        <div>
            <img :src="photo.url"  v-for="photo in post.galleries" :key="photo.id"/>
        </div>
    </div>
</template>

<script>
import Post from '../components/Post';

export default {
    name: 'PostDetails',
    components: {
        Post
    },
    data(){
        return{
            post: {}
        }
    },
    created(){
        axios.get('/posts/' + this.$route.params.id)
        .then(res => {
            console.log(res);
            this.post = res.data;
        })
    }
}
</script>

<style lang="scss" scoped>

.container{
    padding-top: 100px;
    width: 80%;
    margin: 0 auto;
}

</style>