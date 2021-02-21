<template>
  <div>
    <Header></Header>
    <div class="grad">
      
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Projects',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>