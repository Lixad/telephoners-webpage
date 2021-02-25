<template>
  <div>
    <Header></Header>
    <ValidationObserver ref="addpostform">
      <form novalidate="true" class="login-form p-b-250" @submit.prevent="onSubmit">
        <Validation-provider rules="required" v-slot="{ errors }" class="login-form-field">
          <input type="text" placeholder="Tytuł" v-model="postTitle" name="Title"/>
          <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
        </Validation-provider>
        <Validation-provider rules="required" v-slot="{ errors }" class="login-form-field">
          <input type="text" placeholder="Tematyka posta" v-model="topic" name="topic"/>
          <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
        </Validation-provider>
        <Validation-provider rules="required" v-slot="{ errors }" class="login-form-field">
          <textarea rows="5" placeholder="Treść posta" v-model="content" name="Content"/>
          <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
        </Validation-provider>
        <Validation-provider v-slot="{ errors }" class="login-form-field">
          <input type="file" name="mainPhoto" id="mainPhoto" accept="image/*" @change="handleFileChange($event)"/>
          <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
        </Validation-provider>
        <Validation-provider v-slot="{ errors }" class="login-form-field">
          <input type="file" name="photos" id="photos" accept="image/*" multiple="true" @change="handleFilesChange($event)"/>
          <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
        </Validation-provider>
        <button type="submit" class="shining-button button-login">
          Dodaj post
        </button>
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
import {required} from 'vee-validate/dist/rules';
import axios from 'axios';
import baseUrl from '../modules/url';
import { messages } from 'vee-validate/dist/locale/en.json';

extend('required', {
  ...required,
  message: messages.required
});

export default {
  name: 'AddPost',
  components: {
    Header,
    Footer,
    ValidationProvider,
    ValidationObserver
  },
  data(){
    return{
      postTitle: '',
      topic: '',
      content: '',
      date: new Date(),
      mainPhoto: undefined,
      galleries: []
    }
  },
  methods:{
    handleFileChange(event){
      console.log(event.target.files);
      this.mainPhoto = event.target.files[0];
    },
    handleFilesChange(event){
      console.log(event.target.files);
      this.galleries = event.target.files;
    },
    onSubmit(){
      this.$refs.addpostform.validate().then(success => {
        if (!success) {
          return;
        }
        const data = new FormData();
        data.append('mainPhoto', this.mainPhoto);
        data.append('Post',"content: '" + this.content + "',postName: '" + this.postTitle + "',topic: '" + this.topic + "',postDate: '" + this.date + "'");
        const arrayKey = `galleries[]`;
        this.galleries.forEach(v => {
            data.append(arrayKey, v);
        });
        axios.post(baseUrl + '/posts/addpost',
          data,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Access-Control-Allow-Origin': '*',
              'Authorization': 'Bearer ' + this.$store.state.token
            }
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
        .catch(function(err) {
          console.log('Fetch Error: Zjebalo sie', err);
        });
      }) 
    }
  }
}
</script>

<style  lang="scss" scoped>

</style>
