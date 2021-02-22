<template>
  <div>
    <Header></Header>
    <h3>Rejestracja</h3>
    <ValidationObserver ref="registerform">
    <form novalidate="true" class="login-form p-b-250" @submit.prevent="onSubmit">
      <Validation-provider rules="required|alpha_dash" v-slot="{ errors }" class="login-form-field">
        <input type="text" placeholder="Login" v-model="login" name="Login"/>
        <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider rules="confirmed:password2|required" vid="password" v-slot="{ errors }" class="login-form-field">
        <input type="password" placeholder="Hasło" v-model="password" name="Password"/>
        <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider rules="confirmed:password|required" vid="password2" v-slot="{ errors }" class="login-form-field">
        <input type="password" placeholder="Powtórz hasło" v-model="password2" name="Confirm password"/>
        <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider rules="required|email" v-slot="{ errors }" class="login-form-field">
        <input type="text" placeholder="Email" v-model="email" name="Email"/>
        <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider rules="required|alpha" v-slot="{ errors }" class="login-form-field">
        <input type="text" placeholder="Imię" v-model="name" name="Name"/>
        <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider rules="required|alpha" v-slot="{ errors }" class="login-form-field">
        <input type="text" placeholder="Nazwisko" v-model="surname" name="Surname"/>
        <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
      </Validation-provider>
      <button type="submit" class="shining-button button-login">
        ZAREJESTRUJ SIĘ
      </button>
      <div class="login-container">
        Masz już konto ? 
        <a href="/login" title="#" class="login shining-button"> 
          Zaloguj się!
        </a>
      </div>
    </form>
    </ValidationObserver>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {ValidationProvider, ValidationObserver, extend} from 'vee-validate';
import {required, email, confirmed, alpha, alpha_dash} from 'vee-validate/dist/rules';
import axios from 'axios';
import baseUrl from '../modules/url';
import { messages } from 'vee-validate/dist/locale/en.json';

extend('required',{ 
  ...required,
  message: messages.required
});
extend('email',{ 
  ...email,
  message: messages.email
});
extend('confirmed',{
  ...confirmed,
  message: messages.confirmed
});
extend('alpha',{
  ...alpha,
  message: messages.alpha
});
extend('alpha_dash',{
  ...alpha_dash,
  message: messages.alpha_dash
})

export default {
  name: 'Register',
  components: {
    Header,
    Footer,
    ValidationProvider,
    ValidationObserver
  },
  data(){
    return{
      name: "",
      surname: "",
      login: "",
      email: "",
      password: "",
      password2: ""
    }
  },
  methods:{
    onSubmit() {
      this.$refs.registerform.validate().then(success => {
        if (!success) {
          return;
        }
        axios.post(baseUrl + '/auth/register',
          {
            username: this.login,
            password: this.password,
            name: this.name,
            surname: this.surname,
            email: this.email
          }
        )
        .then(res => {
            if (res.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' + res);
              return;
            }
            console.log(res.status);
            this.$router.push('/login');
          }
        )
        .catch(err => {
            console.log('Something went wrong: ', err);
          }
        )
      });
    }   
  }
}

</script>

<style lang="scss" scoped>

h3{
  font-size: 3.6em;
  text-align: center;
  padding-top: 150px;
}

.login-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  padding-top: 20px;
}

.login-form label{
  font-size: 2.4em;
  margin-bottom: 15px;
}

.login-form input{
  width: 100%;
  padding: 6px;
  font-size: 2.4em;
  box-sizing: border-box;
}

.login-form input:focus{
  outline: none;
}

.login-form-field{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 10px auto;
}

.button-login{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 3em;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
}

.login-form-checkbox{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 20px auto;
}

.login-form-checkbox label{
  position: relative;
  cursor: pointer;
  padding-left: 40px;
}

.login-form-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
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

.login-form-checkbox input:checked ~ .checkmark {
  background-color: transparent;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.login-form-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.login-form-checkbox .checkmark:after {
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

.login-container{
  display: flex;
  flex-direction: column;
  color: #fff;
  align-self: center;
  align-items: center;
  font-size: 2em;
  padding: 40px 0;
}

.login{
  font-size: 1.2em;
  margin: 0;
}

@media(max-width: 1300px){
  .login-form{
    width: 60%;
  }
}

@media(max-width: 840px){
  .login-form{
    width: 80%;
  }

  h3{
    padding-top: 30px;
  }

  .p-b-250{
    padding-bottom: 30px;
  }
}

@media(max-width: 520px){
  .login-form{
    width: 95%;
  }

  .button-login{
    font-size: 2.6em;
  }
}

</style>