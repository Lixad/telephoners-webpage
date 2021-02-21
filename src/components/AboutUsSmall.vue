<template>
<div class="grad p-b-100">
  <div class="d-f-a-e pos-rel w_85_auto">
    <div class="news">
      <div class="right-info">
        <h3>O NAS</h3>
        <p class="text">
          Koło Naukowe TELEPHONERS tworzy grupa studentów studiujących na kierunkach Teleinformatyka oraz Elektronika i Telekomunikacja na Wydziale Informatyki, Elektroniki i Telekomunikacji Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie. Studenci KN Telephoners wspólnie stwarzają sobie możliwości rozwijania własnych zainteresowań oraz realizowania unikalnych.
        </p>
      </div>
      <img src="../assets/img2.png">
    </div>
      <a href="/aboutus" title="" class="shining-button m-t-50">
        POZNAJ NAS LEPIEJ
        <svg class="arrow">
          <use xlink:href="#arrow"/>
        </svg>
      </a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUsSmall',
  props: {
  }
}
</script>

<style scoped lang="scss">

.news{
  display: flex;
  align-items: center;
  padding-top: 100px;
}

h3{
  font-size: 3.6em;
  text-align: center;
  margin-bottom: 40px;
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

@media (max-width: 1300px){
  .news{
    flex-direction: column;
  }

  img{
    width: 80%;
  }

  .text{
    text-align: center;
  }
}

@media (max-width: 640px){
  .text{
    font-size: 1.6em;
  }
  .right-info{
    padding: 0;
  }

  .news{
    padding-top: 20px;
  }

  .p-b-100{
    padding-bottom: 20px;
  }
}

</style>
