import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'element-theme-default';
import i18n from './plugins/i18n'

axios.defaults.baseURL = 'https://telephonersnew.ew.r.appspot.com';
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8000/';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';

axios.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + store.state.token;
    return config;
}, function(error) {
    alert('Something went wrong. Request error: ' + error + '. Please contact administrator');
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function(error) {
    alert('Something went wrong. Server response: ' + error + '. Please contact administrator');
    return Promise.reject(error);
});

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')