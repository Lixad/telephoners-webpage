<template>
  <div>
    <Header></Header>
    <h3>Rejestracja</h3>
    <ValidationObserver ref="registerform">
    <form novalidate="true" class="login-form p-b-250" @submit.prevent="onSubmit">
      <Validation-provider rules="required|alpha_dash" v-slot="{ errors }" class="login-form-field">
        <input type="text" placeholder="Login" v-model="login"/>
        <span>{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider rules="confirmed:password2|required" v-slot="{ errors }" class="login-form-field">
        <input type="password" placeholder="Hasło" v-model="password"/>
        <span>{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider rules="required" vid="password2" v-slot="{ errors }" class="login-form-field">
        <input type="password" placeholder="Powtórz hasło" v-model="password2"/>
        <span>{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider rules="required|email" v-slot="{ errors }" class="login-form-field">
        <input type="text" placeholder="Email" v-model="email"/>
        <span>{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider rules="required|alpha" v-slot="{ errors }" class="login-form-field">
        <input type="text" placeholder="Imię" v-model="name"/>
        <span>{{ errors[0] }}</span>
      </Validation-provider>
      <Validation-provider rules="required|alpha" v-slot="{ errors }" class="login-form-field">
        <input type="text" placeholder="Nazwisko" v-model="surname"/>
        <span>{{ errors[0] }}</span>
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
import {ValidationProvider, ValidationObserver} from 'vee-validate';
import {extend} from 'vee-validate';
import {required, email, numeric, is, confirmed, alpha, alpha_dash} from 'vee-validate/dist/rules';

extend('required', required);
extend('email', email);
extend('numeric', numeric);
extend('is', is);
extend('confirmed', confirmed);
extend('alpha', alpha);
extend('alpha_dash', alpha_dash)


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

        fetch('https://telephonersnew.ew.r.appspot.com/auth/register', {method: 'post',  
            mode: 'cors', 
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({username: this.login, password: this.password, name: this.name, surname: this.surname, email: this.email})
          })
          .then(
            (response) => {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response);
                return;
            }

            // Examine the text in the response
            response.text().then((data) => {
              console.log(data.status);
              this.$router.push('/login');
            });
          }
        )
        .catch((err) => {
          console.log('Fetch Error :-S', err);
        });
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
  margin: 20px auto;
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

</style>