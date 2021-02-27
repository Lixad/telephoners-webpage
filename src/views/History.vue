<template>
  <div>
    <div class="grad p-t-100 p-b-100">
      <div class="content d-f-sb">
        <div class="history-left">
          <h3>HISTORIA KOŁA</h3>
          <h5>X lat sukcesów</h5>
          <p>
            Koło Naukowe TELEPHONERS tworzy grupa studentów studiujących na kierunkach Teleinformatyka oraz Elektronika i Telekomunikacja na Wydziale Informatyki, Elektroniki i Telekomunikacji Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie. Studenci KN Telephoners wspólnie stwarzają sobie możliwości rozwijania własnych zainteresowań oraz realizowania unikalnych.
          </p>
        </div>
        <img title="" alt="" src="../assets/img1.png" class="history-top-img"/>
      </div>
    </div>
    <div class="grad p-t-100 p-b-100">
      <div class="content">
        <h3>LATA DZIAŁALNOŚCI</h3>
        <div class="years">
          <svg class="arrow-left">
            <use xlink:href="#arrow"/>
          </svg>
          <span>2020</span>
          <span class="active">2019</span>
          <span>2018</span>
          <span>2017</span>
          <span>2016</span>
          <span>2015</span>
          <svg class="arrow-right">
            <use xlink:href="#arrow"/>
          </svg>
        </div>
        <div class="history-project-section">
          <div class="history-project-section-left">
          <h3>ROK2019: UKOŃCZENIE PROJEKTU X</h3>
          <p>
            Koło Naukowe TELEPHONERS tworzy grupa studentów studiujących na kierunkach Teleinformatyka oraz Elektronika i Telekomunikacja na Wydziale Informatyki, Elektroniki i Telekomunikacji Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie. Studenci KN Telephoners wspólnie stwarzają sobie możliwości rozwijania własnych zainteresowań oraz realizowania unikalnych.
          </p>
          </div>
          <img alt="" title="" src="../assets/img5.png" class="history-project-img"/>
        </div>
        <div class="d-f-c">
          <a href="/management" title="" class="shining-button">
            ZARZĄD KOŁA
            <svg class="arrow">
              <use xlink:href="#arrow"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'History'
}
</script>

<style scoped lang="scss">

h3{
  font-size: 3.6em;
}

h5{
  font-size: 2em;
}

p{
  padding: 100px 0;
  font-size: 1.6em;
  line-height: 1.25em;
}

.history-left{
  width: 45%;
}

.history-top-img{
  width: 45%;
  height: auto;
}

.history-project-img{
  width: 20%;
  height: auto;
}

h4{
  font-size: 3em;
}

.arrow-left{
  height: 30px;
  width: 30px;
  fill: #fff;
  transform: rotateY(180deg);
}

.arrow-right{
  height: 30px;
  width: 30px;
  fill: #fff;
}

.years{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0;
}

.years span{
  font-size: 2.4em;
  padding: 20px 40px;
  cursor: pointer;
}

.years .active{
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.history-project-section{
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
}

.history-project-section-left{
  width: 70%;
}

</style>