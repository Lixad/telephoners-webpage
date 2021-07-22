<template>
  <div>
    <h3>{{ $t('register.signUp') }}</h3>
      <el-form ref="registerForm" :model="registerForm" :rules="rules" class="login-form">
        <el-form-item prop="login" class="w_100">
          <el-input v-model="registerForm.login" :placeholder="$t('register.login')" />
        </el-form-item>
        <el-form-item prop="password" class="w_100">
          <el-input type="password" v-model="registerForm.password" :placeholder="$t('register.password')" />
        </el-form-item>
        <el-form-item prop="password2" class="w_100">
          <el-input type="password" v-model="registerForm.password2" :placeholder="$t('register.confirmPassword')" />
        </el-form-item>
        <el-form-item prop="email" class="w_100">
          <el-input v-model="registerForm.email" :placeholder="$t('register.email')" />
        </el-form-item>
        <el-form-item prop="name" class="w_100">
          <el-input v-model="registerForm.name" :placeholder="$t('register.name')" />
        </el-form-item>
        <el-form-item prop="surname" class="w_100">
          <el-input v-model="registerForm.surname" :placeholder="$t('register.surname')" />
        </el-form-item>
        <button type="submit" @click.prevent="onSubmit" class="shining-button button-login">
          {{ $t('register.register') }}
        </button>
        <div class="login-container">
          {{ $t('register.haveAccount') }}
          <a href="/login" title="#" class="login shining-button"> 
            {{ $t('register.signIn') }}
          </a>
        </div>
      </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import { Form, FormItem, Input, Checkbox } from 'element-ui';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Checkbox);

export default {
  name: 'Register',

  data(){
    const checkPassword = (rule, value, callback) => {
      if(this.registerForm.password !== value) {
        return callback(new Error(this.$t('register.passwordMatch')))
      } else {
        return callback();
      }
    }
    return{
      registerForm: {
        login: '',
        password: '',
        password2: '',
        email: '',
        name: '',
        surname: '',
      },
      rules: {
        login: [{ required: true, message: this.$t('login.loginRequired'), trigger: 'blur' },
                { min: 4, message: this.$t('register.loginLen'), trigger: 'blur'},
                { max: 16, message: this.$t('register.loginLenMax'), trigger: 'blur'}],
        password: [{ required: true, message: this.$t('login.passwordRequired'), trigger: 'blur' },
                   { min: 4, message: this.$t('register.passwordLen'), trigger: 'blur'}],
        password2: [{ required: true, message: this.$t('login.passwordRequired'), trigger: 'blur' },
                    { validator: checkPassword, trigger: 'blur' }],
        email: [{ type: 'email', message: this.$t('register.validEmailFormat'), trigger: 'blur' },
                { required: true, message: this.$t('register.emailRequired'), trigger: 'blur' }],
        name: [{ required: true, message: this.$t('register.nameRequired'), trigger: 'blur' }],
        surname: [{ required: true, message: this.$t('register.surnameRequired'), trigger: 'blur' }]
      },
    }
  },
  methods:{
    onSubmit() {
      this.$refs.registerForm.validate(success => {
        if (!success) {
          return;
        }
        this.$axios.post('/auth/register',
          {
            username: this.registerForm.login,
            password: this.registerForm.password,
            name: this.registerForm.name,
            surname: this.registerForm.surname,
            email: this.registerForm.email
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