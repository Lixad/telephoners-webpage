<template>
  <div>
    <Header></Header>
    <NewsSmall></NewsSmall>
    <AboutUsSmall></AboutUsSmall>
    <OurProjectsSmall></OurProjectsSmall>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import NewsSmall from "@/components/NewsSmall.vue";
import AboutUsSmall from "@/components/AboutUsSmall.vue";
import OurProjectsSmall from "@/components/OurProjectsSmall.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Header,
    NewsSmall,
    AboutUsSmall,
    OurProjectsSmall,
    Footer
  }
}
</script>

<style  lang="scss" scoped>

.content{
  width: 85%;
  margin: 0 auto;
}

.bottom-right{
  width: 100%;
  fill: white;
  color: red;
}

</style>
