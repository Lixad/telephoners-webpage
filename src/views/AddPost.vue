<template>
  <div>
    <el-form>
      <el-form-item>

      </el-form-item>
    </el-form>
    <ValidationObserver ref="addpostform">
      <form novalidate="true" class="addpost-form p-b-250" @submit.prevent="onSubmit">
        <Validation-provider rules="required" v-slot="{ errors }" class="addpost-form-field">
          <label for="Title">Tytuł</label>
          <input type="text" placeholder="Tytuł" v-model="postTitle" id="Title" name="Title"/>
          <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
        </Validation-provider>
        <Validation-provider rules="required" v-slot="{ errors }" class="addpost-form-field">
          <label for="topic">Tematyka posta</label>
          <input type="text" placeholder="Tematyka posta" v-model="topic" id="topic" name="topic"/>
          <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
        </Validation-provider>
        <Validation-provider rules="required" v-slot="{ errors }" class="addpost-textarea">
          <label for="Content">Treść posta</label>
          <textarea rows="10" placeholder="Treść posta" v-model="content" name="Content" id="Content"/>
          <span class="error-msg" :class="{'p-b-1_15em' : !errors[0]}">{{ errors[0] }}</span>
        </Validation-provider>
        <Validation-provider class="addpost-form-field-img" rules="image">
          <label for="mainPhoto">Główne zdjęcie</label>
          <input type="file" name="mainPhoto" id="mainPhoto" accept="image/*" @focus="activateMainPhotoError()" @change="handleFileChange($event)"/>
          <span v-show="showMainPhotoError" class="error-msg" :class="{'p-b-1_15em d-n' : this.mainfile}">Picture is required</span>
        </Validation-provider>
        <Validation-provider class="addpost-form-field-img" rules="image">
          <label for="photos">Zdjęcia</label>
          <input type="file" name="photos" id="photos" accept="image/*" multiple="true" @focus="activateGalleryError()" @change="handleFilesChange($event)"/>
          <span v-show="showGalleriesError" class="error-msg" :class="{'p-b-1_15em d-n' : this.galleryfiles.length}">Picture is required</span>
        </Validation-provider>
        <button type="submit" class="shining-button button-addpost">
          Dodaj post
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
// @ is an alias to /src
import {ValidationProvider, ValidationObserver, extend} from 'vee-validate';
import {required, image} from 'vee-validate/dist/rules';
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
    ValidationProvider,
    ValidationObserver
  },
  data(){
    return{
      postTitle: '',
      topic: '',
      content: '',
      mainfile: undefined,
      galleryfiles: [],
      showGalleriesError: false,
      showMainPhotoError: false
    }
  },
  methods:{
    handleFileChange(event){
      this.mainfile = event.target.files[0];
    },
    handleFilesChange(event){
      this.galleryfiles = event.target.files;
    },
    activateMainPhotoError(){
      this.showMainPhotoError = true;
    },
    activateGalleryError(){
      this.showGalleriesError = true;
    },
    onSubmit(){
      this.$refs.addpostform.validate().then(success => {
        if (!success || !this.mainfile || !this.galleryfiles.length) {
          this.showMainPhotoError = true;
          this.showGalleriesError = true;
          return;
        }
        const data = new FormData();
        data.append('Post', `{ "postName": "${this.postTitle}" ,"topic": "${this.topic}", "content": "${this.content}"}`);
        data.append('mainfile', this.mainfile);
        const arrayKey = 'galleryfiles';
        this.galleryfiles.forEach(v => {
            data.append(arrayKey, v);
        });
        for (var value of data.values()) {
          console.log(value);
        }
        this.$axios.post('/posts/addpost',
          data,
          {
            headers : {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((res) => {
          if (res.status !== 201) {
            console.log('Looks like there was a problem. Status Code: ' + res);
            return;
          }
          this.$router.push('/posts/page/0');
        })
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
  &  label{
    font-size: 3.4em;
    margin-bottom: 15px;
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
