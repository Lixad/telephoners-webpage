<template>
  <div>
    <Header></Header>
    <form class="contact-form">
      <div class="contact-form-field">
        <label for="topic">TEMAT*</label>
        <span></span>
        <input type="text" id="topic" placeholder="TEMAT" v-model="topic"/>
      </div>
      <div class="contact-form-field">
        <label for="content">TREŚĆ*</label>
        <span></span>
        <textarea id="content" rows="10" placeholder="TREŚĆ" v-model="content"/>
      </div>
      <div class="contact-form-field">
        <label for="email">EMAIL*</label>
        <span></span>
        <input type="email" id="email" placeholder="EMAIL" v-model="email"/>
      </div>
      <div class="contact-form-checkbox">
        <label for="rodo">Akceptuję RODO*
          <input type="checkbox" id="rodo" v-model="rodo"/>
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="contact-form-checkbox">
        <label for="robot">Nie jestem robotem*
          <input type="checkbox" id="robot" v-model="robot"/>
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="contact-form-checkbox">
        <label for="copy">Wyślij do mnie kopie
          <input type="checkbox" id="copy" v-model="copy"/>
          <span class="checkmark"></span>
        </label>
      </div>
      <button type="submit" class="shining-button button-contact">
        WYŚLIJ
        <svg class="arrow">
          <use xlink:href="#arrow"/>
        </svg>
      </button>
    </form>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Contact',
  components: {
    Header,
    Footer
  },
  data(){
    return {
      topic: "",
      content: "",
      email: "",
      rodo: false,
      robot: false,
      copy: false
    }
  }
}
</script>

<style lang="scss" scoped>

.contact-form{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 60%;
  margin: 0 auto;
  padding-top: 100px;
}

.contact-form label{
  font-size: 2.4em;
  margin-bottom: 15px;
}

.contact-form input{
  width: 100%;
  padding: 6px;
  font-size: 2.4em;
  box-sizing: border-box;
}

.contact-form input:focus{
  outline: none;
}

.contact-form textarea{
  width: 100%;
  padding: 6px;
  font-size: 2.4em;
  resize: vertical;
  box-sizing: border-box;
}

.contact-form textarea:focus{
  outline: none;
}

.contact-form-field{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 20px auto;
}

.contact-form-checkbox{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 20px auto;
}

.contact-form-checkbox label{
  position: relative;
  cursor: pointer;
  padding-left: 40px;
}

.contact-form-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.button-contact{
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  margin: 0;
}

.checkmark {
    position: absolute;
    top: -3px;
    left: 0;
    height: 25px;
    width: 25px;
    border: 2px solid #03F8D6;
    background-color: transparent;
}

.contact-form-checkbox input:checked ~ .checkmark {
  background-color: transparent;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.contact-form-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.contact-form-checkbox .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid #03F8D6;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

</style>