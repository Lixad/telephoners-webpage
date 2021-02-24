<template>
  <div>
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Posts',
  components: {
    Header,
    Footer,
  },
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>

</style>