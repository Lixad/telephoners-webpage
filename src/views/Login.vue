<template>
  <div>
    <h3>{{ $t('login.signIn') }}</h3>
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form">
      <el-form-item prop="login" class="w_100">
        <el-input v-model="loginForm.login" :placeholder="$t('login.login')" />
      </el-form-item>
      <el-form-item prop="password" class="w_100">
        <el-input type="password" v-model="loginForm.password" :placeholder="$t('login.password')" />
      </el-form-item>
      <el-form-item prop="saveMe">
        <el-checkbox v-model="loginForm.saveMe" @change="changeSaveMeCookie" />
      </el-form-item>
       <el-button @click="onSubmit">{{ $t('login.signInButton') }}</el-button>
    </el-form>
    <div class="register-container">
      Nie masz jeszcze konta ? 
      <a href="/register" title="#" class="register shining-button"> 
        Zarejetruj się!
      </a>
    </div>




    <!-- <ValidationObserver ref="loginform">
      <form novalidate="true" class="login-form p-b-250" @submit.prevent="onSubmit">
        <Validation-provider rules="required" v-slot="{ errors }" class="login-form-field">
          <input type="text" placeholder="Login" v-model="login" name="Login"/>
          <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
        </Validation-provider>
        <Validation-provider rules="required" v-slot="{ errors }" class="login-form-field">
          <input type="password" placeholder="Hasło" v-model="password" name="Password"/>
          <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
        </Validation-provider>
        <div class="login-form-checkbox">
          <label for="save">Zapamiętaj mnie
            <input type="checkbox" id="save" v-model="save"/>
            <span class="checkmark"></span>
          </label>
        </div>
        <button type="submit" class="shining-button button-login">
          ZALOGUJ SIĘ
          <svg class="arrow">
            <use xlink:href="#arrow"/>
          </svg>
        </button>
      </form>
    </ValidationObserver> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';
import { Button, Form, FormItem, Input, Checkbox } from 'element-ui';
import Cookies from 'js-cookie'

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Checkbox);

extend('required', {
  ...required,
  message: messages.required
});

export default {
  name: 'Login',

  data(){
    return{
      login: '',
      password: '',
      save: false,
      loginForm: {
        login: '',
        password: '',
        saveMe: Cookies.get('saveMe') !== 'false',
      },
      rules: {
        login: [{ required: true, message: this.$t('login.loginRequired'), trigger: 'blur' }],
        password: [{ required: true, message: this.$t('login.passwordRequired'), trigger: 'blur' }],
      },
    };
  },

  methods: {
    onSubmit() {
      this.$refs.loginForm.validate(success => {
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
    },
    changeSaveMeCookie() {
      Cookies.set('saveMe', this.loginForm.saveMe, { expires: 365 });
    },
  },
};
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
  align-items: flex-end;
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
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  margin: 0;
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

.register-container{
  display: flex;
  flex-direction: column;
  color: #fff;
  align-self: center;
  align-items: center;
  font-size: 2em;
  padding: 40px 0;
}

.register{
  font-size: 1.4em;
  margin: 0;
}

.el-form-item{
  font-family: 'Montserrat' !important;
}


@media(max-width: 840px){
  .login-form{
    width: 70%;
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
    width: 90%;
  }
  .login-form label{
    font-size: 1.8em;
  }
  .checkmark{
    height: 18px;
    width: 18px;
    left: 5px;
  }
  .login-form-checkbox .checkmark:after {
    left: 6px;
    top: 3px;
    width: 3px;
    height: 8px;
  }
}

</style>