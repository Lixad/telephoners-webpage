<template>
<div class="grad p-b-100 p-t-100">
  <div class="w_85_auto d-f-a-c">
    <div class="d-f-se w_100">
      <h4 class="active-projects">NASZE PROJEKTY</h4>
      <h4>BIEŻĄCE PROJEKTY</h4> 
    </div>
    <div class="news">
      <div>
        <svg class="arrow-left">
          <use xlink:href="#arrow"/>
        </svg>
      </div>
      <img src="../assets/img3.png">
      <img src="../assets/img3.png">
      <img src="../assets/img3.png">
      <div>
        <svg class="arrow-right">
          <use xlink:href="#arrow"/>
        </svg>
      </div>
    </div>
      <a href="/projects" title="" class="shining-button button-projects">
        ZOBACZ WSZYSTKIE PROJEKTY
      </a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'OurProjectsSmall',
  props: {
  }
}
</script>

<style scoped lang="scss">

.news{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 100px;
}

h4{
  font-size: 2.6em;
  text-align: center;
  margin-bottom: 10px;
  color: #ccc;
}

img{
  height: auto;
  width: 20%;
}

.arrow-left{
  height: 40px;
  width: 40px;
  fill: #fff;
  transform: rotateY(180deg);
}

.arrow-right{
  height: 40px;
  width: 40px;
  fill: #fff;
}

.button-projects{
  margin-top: 100px;
}

.active-projects{
  color: #fff;
  position: relative;
}

.active-projects::before{
  content: "";
  position: absolute;
  height: 2px;
  width: 120px;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ccc;
}

@media (max-width: 640px){
  .button-projects{
    margin-top: 40px;
    font-size: 1.789em;
  }

  h4{
    font-size: 2em;
  }

  .news{
    padding-top: 60px;
  }

  .p-b-100{
    padding-bottom: 20px;
  }
  .p-t-100{
    padding-top: 20px;
  }

}

</style>
