<template functional>
    <li class="post-container">
        <img class="post-main-photo" :src="props.data.mainPhoto.url"/>
        <div class="post-text-container">
            <a :href="'/posts/' + props.data.id" class="post-title">
                Tytuł: {{props.data.postName}}
            </a>
            <div class="post-topic">
                Tematyka: {{props.data.topic}}
            </div>
            <div class="post-date">
                Data utworzenia: {{props.data.postDate}}
            </div>
            <div class="post-content">
                {{props.data.content}}
            </div>
        </div>
    </li>
</template>

<script>
export default {
  name: 'Post',
  props: {
      data: Object
  }
}
</script>

<style lang="scss" scoped>

.post-container{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 100px;
}

.post-text-container{
  max-width: 50%;
}

.post-title{
  font-size: 3.6em;
  padding-bottom: 30px;
  color: #03F8D6;
}

.post-topic{
  font-size: 3em;
  padding-bottom: 20px;
}

.post-date{
  font-size: 2em;
  padding-bottom: 10px;
}

.post-content{
  font-size: 1.6em;
}

.post-main-photo{
  width: 50%;
  margin-right: 30px;
  max-height: 500px;
}

</style>