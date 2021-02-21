<template>
<div class="grad p-b-100">
  <div class="d-f-a-e pos-rel w_85_auto">
    <div class="news-small">
      <img title="" alt="" src="../assets/img1.png">
      <div class="right-info">
        <h3>Aktualności</h3>
        <div class="date">5 maja 2020</div>
        <p class="text">
          Koło Naukowe TELEPHONERS tworzy grupa studentów studiujących na kierunkach Teleinformatyka oraz Elektronika i Telekomunikacja na Wydziale Informatyki, Elektroniki i Telekomunikacji Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie. Studenci KN Telephoners wspólnie stwarzają sobie możliwości rozwijania własnych zainteresowań oraz realizowania unikalnych.
        </p>
      </div>
    </div>
      <a href="#" title="" class="shining-button">
        CZYTAJ DALEJ
        <svg class="arrow">
          <use xlink:href="#arrow"/>
        </svg>
      </a>
      <div class="squares">
        <div class="square active-square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'NewsSmall',
  props: {
  }
}
</script>

<style scoped lang="scss">

.news-small{
  display: flex;
  align-items: center;
  padding-top: 100px;
}

h3{
  font-size: 3.6em;
  text-align: center;
  margin-bottom: 10px;
}

.date{
  font-size: 2.4em;
  text-align: center;
  margin-bottom: 30px;
}

.text{
  font-size: 2.2em;
}

img{
  height: auto;
  width: 50%;
}

.right-info{
  padding: 40px;
}

.squares{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}

.square{
  height: 10px;
  width: 10px;
  background-color: transparent;
  border: 1px solid #fff;
  position: relative;
}

.active-square{
  background-color: #fff;
  height: 12px;
  width: 12px;
}

@media (max-width: 1300px){
  .news-small{
    flex-direction: column-reverse;
  }

  img{
    height: auto;
    width: 80%;
  }

  .squares{
    bottom: 70px;
  }

  .shining-button{
    margin-top: 30px
  }

  .text{
    text-align: center;
  }
}

@media (max-width: 640px){
  .text{
    font-size: 1.6em;
  }

  .news-small{
    padding-top: 0;
  }

  .right-info{
    padding: 0 0 30px 0;
  }

  .p-b-100{
    padding-bottom: 20px;
  }

}

</style>
