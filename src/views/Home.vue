<template>
  <div>
    <NewsSmall></NewsSmall>
    <AboutUsSmall></AboutUsSmall>
    <OurProjectsSmall></OurProjectsSmall>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsSmall from "@/components/NewsSmall.vue";
import AboutUsSmall from "@/components/AboutUsSmall.vue";
import OurProjectsSmall from "@/components/OurProjectsSmall.vue";

export default {
  name: 'Home',
  components: {
    NewsSmall,
    AboutUsSmall,
    OurProjectsSmall
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
