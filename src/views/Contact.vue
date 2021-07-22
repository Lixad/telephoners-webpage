<template>
  <div>

    <ValidationObserver ref="contactform">
    <form class="contact-form" novalidate="true" @submit.prevent="onSubmit">
      <Validation-provider rules="required" v-slot="{ errors }" class="contact-form-field">
        <label for="topic">TEMAT*</label>
        <input type="text" id="topic" name="Topic" placeholder="TEMAT" v-model="topic"/>
        <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider rules="required" v-slot="{ errors }" class="contact-form-field">
        <label for="content">TREŚĆ*</label>
        <textarea id="content" rows="10" placeholder="TREŚĆ" name="Content" v-model="content"/>
        <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider rules="required" v-slot="{ errors }" class="contact-form-field">
        <label for="email">EMAIL*</label>
        <input type="email" id="email" placeholder="EMAIL" name="Email" v-model="email"/>
        <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider :rules="{required: { allowFalse: false }}" v-slot="{ errors }" class="contact-form-checkbox">
        <label for="rodo">Akceptuję RODO*
          <input type="checkbox" id="rodo" name="RODO" v-model="rodo"/>
          <span class="checkmark"></span>
        </label>
        <span class="error-msg p-l-40" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider :rules="{required: { allowFalse: false }}" v-slot="{ errors }" class="contact-form-checkbox">
        <label for="robot">Nie jestem robotem*
          <input type="checkbox" id="robot" name="I am not a robot" v-model="robot"/>
          <span class="checkmark"></span>
        </label>
        <span class="error-msg p-l-40" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
      </Validation-provider>
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
    </ValidationObserver>
  </div>
</template>

<script>
// @ is an alias to /src
import {ValidationProvider, ValidationObserver, extend} from 'vee-validate';
import {required} from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

extend('required',{
  ...required,
  message: messages.required
});

export default {
  name: 'Contact',
  components: {
    ValidationProvider,
    ValidationObserver
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
  },
  methods:{
    onSubmit(){
      this.$refs.contactform.validate().then(success => {
        if (!success) {
          return;
        }
        this.$axios.post('/auth/login',
          {
            username: this.login,
            password: this.password
          }
        )
        .then((res) => {
          if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + res);
            return;
          }
          this.$store.commit('login', res.data);
          this.$router.push('/');
        })
      }) 
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
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 10px auto;
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

@media(max-width: 840px){
  .contact-form{
    width: 90%;
    padding-top: 40px;
  }

  .contact-form label{
    font-size: 1.8em;
  }

  .checkmark{
    height: 18px;
    width: 18px;
    left: 5px;
  }

  .contact-form-checkbox .checkmark:after {
    left: 6px;
    top: 3px;
    width: 3px;
    height: 8px;
  }
}

</style>