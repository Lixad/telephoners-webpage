<template>
  <div>
    <Header></Header>
    <ValidationObserver ref="addpostform">
      <form novalidate="true" class="addpost-form p-b-250" @submit.prevent="onSubmit">
        <Validation-provider rules="required" v-slot="{ errors }" class="addpost-form-field">
          <input type="text" placeholder="Tytuł" v-model="postTitle" name="Title"/>
          <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
        </Validation-provider>
        <Validation-provider rules="required" v-slot="{ errors }" class="addpost-form-field">
          <input type="text" placeholder="Tematyka posta" v-model="topic" name="topic"/>
          <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
        </Validation-provider>
        <Validation-provider rules="required" v-slot="{ errors }" class="addpost-textarea">
          <textarea rows="10" placeholder="Treść posta" v-model="content" name="Content"/>
          <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
        </Validation-provider>
        <Validation-provider class="addpost-form-field-img" rules="image">
          <label for="mainPhoto">Główne zdjęcie</label>
          <input type="file" name="mainPhoto" id="mainPhoto" accept="image/*" @change="handleFileChange($event)"/>
          <span class="error-msg" :class="{'p-b-1_15em d-n' : this.mainPhoto}">Picture is required</span>
        </Validation-provider>
        <Validation-provider class="addpost-form-field-img" rules="image">
          <label for="photos">Zdjęcia</label>
          <input type="file" name="photos" id="photos" accept="image/*" multiple="true" @change="handleFilesChange($event)"/>
          <span class="error-msg" :class="{'p-b-1_15em d-n' : this.galleries.length}">Picture is required</span>
        </Validation-provider>
        <button type="submit" class="shining-button button-addpost">
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
import {required, image} from 'vee-validate/dist/rules';
import axios from 'axios';
import baseUrl from '../modules/url';
import { messages } from 'vee-validate/dist/locale/en.json';

extend('required', {
  ...required,
  message: messages.required
});

extend('image', {
  ...image,
  message: messages.image
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
      this.mainPhoto = event.target.files[0];
    },
    handleFilesChange(event){
      this.galleries = event.target.files;
    },
    onSubmit(){
      this.$refs.addpostform.validate().then(success => {
        if (!success || !this.mainPhoto || !this.galleries.length) {
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
          console.log('Zjebalo sie', err);
        });
      }) 
    }
  }
}
</script>

<style  lang="scss" scoped>

.addpost-form{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 40%;
  margin: 0 auto;
  padding-top: 20px;
}

.addpost-form label{
  font-size: 3.4em;
  margin-bottom: 15px;
}

.addpost-form input{
  width: 100%;
  padding: 10px;
  font-size: 2.4em;
  box-sizing: border-box;
}

.addpost-form input:focus{
  outline: none;
}

.addpost-form-field{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 10px auto;
}

.addpost-form-field-img {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 10px auto;
  padding-top: 10px;
  & input{
    padding: 10px 0;
  }
}

.addpost-textarea{
  width: 100%;
  margin: 10px auto;
  & textarea{
    box-sizing: border-box;
    padding: 10px;
    font-size: 2.4em;
    width: 100%;
  }
}

.button-addpost{
  background-color: transparent;
  border: none;
  font-size: 3em;
  margin: 0;
  cursor: pointer;
}

</style>
