<template>
  <div>
    <Header></Header>
    <div class="grad p-t-100 p-b-100">
      <div class="content">
        <h3>O NAS</h3>
        <p>
          Koło Naukowe TELEPHONERS tworzy grupa studentów studiujących na kierunkach Teleinformatyka oraz Elektronika i Telekomunikacja na Wydziale Informatyki, Elektroniki i Telekomunikacji Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie. Studenci KN Telephoners wspólnie stwarzają sobie możliwości rozwijania własnych zainteresowań oraz realizowania unikalnych. Koło Naukowe TELEPHONERS tworzy grupa studentów.
        </p>
        <img title="" alt="" src="../assets/img4.png"/>
      </div>
    </div>
    <div class="grad p-t-100 p-b-100">
      <div class="content three">
        <div class="w_30">
          <div class="three-header">
          <svg>
              <use xlink:href="#calendar"/>
            </svg>
            <h4>
              HISTORIA SUKCESÓW
            </h4>
          </div>
          <p>
            Koło Naukowe TELEPHONERS tworzy grupa studentów studiujących na kierunkach Teleinformatyka oraz Elektronika i Telekomunikacja na Wydziale Informatyki, Elektroniki i Telekomunikacji Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie. Studenci KN Telephoners wspólnie stwarzają sobie możliwości rozwijania własnych zainteresowań oraz realizowania unikalnych.
          </p>
        </div>
        <div class="w_30">
          <div class="three-header">
            <svg>
              <use xlink:href="#user"/>
            </svg>
            <h4>
              WSPANIALI LUDZIE
            </h4>
          </div>
          <p>
            Koło Naukowe TELEPHONERS tworzy grupa studentów studiujących na kierunkach Teleinformatyka oraz Elektronika i Telekomunikacja na Wydziale Informatyki, Elektroniki i Telekomunikacji Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie. Studenci KN Telephoners wspólnie stwarzają sobie możliwości rozwijania własnych zainteresowań oraz realizowania unikalnych.
          </p>
        </div>
        <div class="w_30">
          <div class="three-header">
            <svg>
              <use xlink:href="#heart"/>
            </svg>
            <h4>
              WSPANIAŁY PREZES
            </h4>
          </div>
          <p>
            Koło Naukowe TELEPHONERS tworzy grupa studentów studiujących na kierunkach Teleinformatyka oraz Elektronika i Telekomunikacja na Wydziale Informatyki, Elektroniki i Telekomunikacji Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie. Studenci KN Telephoners wspólnie stwarzają sobie możliwości rozwijania własnych zainteresowań oraz realizowania unikalnych.
          </p>
        </div>
      </div>
      <div class="d-f-c">
      <a href="/history" title="" class="shining-button">
        HISTORIA KOŁA
        <svg class="arrow">
          <use xlink:href="#arrow"/>
        </svg>
      </a>
      </div>
    </div>
    <Cooperation></Cooperation>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Cooperation from "@/components/Cooperation.vue";

export default {
  name: 'AboutUs',
  components: {
    Header,
    Footer,
    Cooperation
  }
}
</script>

<style scoped lang="scss">

h3{
  font-size: 3.6em;
}

p{
  padding: 100px 0;
  font-size: 1.6em;
  line-height: 1.25em;
}

img{
  width: 100%;
  height: auto;
}

.three{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.three-header{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  border-bottom: 1px solid #fff;
}

.three svg{
  height: 50px;
  width: 50px;
  fill: #fff;
  padding-right: 30px;
}

h4{
  font-size: 3em;
}

</style>