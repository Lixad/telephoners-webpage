<template>
  <div>
    <div class="grad p-t-100 p-b-100">
      <div class="content">
        <h3>WSPÓŁPRACA</h3>
        <div class="cooperation p-b-250">
          <div class="partner-info">
            <img alt="" title="" src="../assets/img7.png"/>
            <h4>
              Nazwa partner współpracujący tutaj
            </h4>
          </div>
          <div class="partner-info">
            <img alt="" title="" src="../assets/img7.png"/>
            <h4>
              Nazwa partner współpracujący tutaj
            </h4>
          </div>
          <div class="partner-info">
            <img alt="" title="" src="../assets/img7.png"/>
            <h4>
              Nazwa partner współpracujący tutaj
            </h4>
          </div>
          <div class="partner-info">
            <img alt="" title="" src="../assets/img7.png"/>
            <h4>
              Nazwa partner współpracujący tutaj
            </h4>
          </div>
        </div>
        <h3>SPONSORZY</h3>
        <div class="cooperation p-b-250">
          <div class="partner-info">
            <img alt="" title="" src="../assets/img8.png"/>
            <h4>
              Sponsor
            </h4>
          </div>
          <div class="partner-info">
            <img alt="" title="" src="../assets/img8.png"/>
            <h4>
              Sponsor
            </h4>
          </div>
          <div class="partner-info">
            <img alt="" title="" src="../assets/img8.png"/>
            <h4>
              Sponsor
            </h4>
          </div>
          <div class="partner-info">
            <img alt="" title="" src="../assets/img8.png"/>
            <h4>
              Sponsor
            </h4>
          </div>
        </div>
        <div class="cooperation-contact">
          <h3>ZAINTERESOWANY WSPÓŁPRACĄ?</h3>
          <a href="/contact" title="" class="shining-button">SKONTAKTUJ SIĘ Z NAMI</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Cooperation',
  components: {
  }
}
</script>

<style lang="scss" scoped>

h3{
  font-size: 3.6em;
}

h4{
  text-align: center;
  font-size: 2.6em;
}

.cooperation{
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
}

.partner-info{
  width: 22%;
}

.cooperation img{
  width: 100%;
  height: auto;
  transition: 0.2s;
  margin-bottom: 50px;
}

.cooperation img:hover{
  transform: scale(1.1);
  transition: 0.2s;
}

.cooperation-contact{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.cooperation-contact .shining-button{
  font-size: 3.6em;
}

</style>