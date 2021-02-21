<template>
  <div class="header" :class="{'mobile-menu-show': isMenu}">
    <div class="d-f-a-e">
      <a href="/" title="" class="logotype">
      <svg class="logo">
        <use xlink:href="#logo"/>
      </svg>
      <div>
        <span class="logo-text-small">koło naukowe</span>
        <br>
        <span class="logo-text-big">telephoners</span>
      </div>
      </a>
    </div>
    <div class="hamburger-container" @click="isMenu=!isMenu">
      <div class="hamburger-menu"></div>
    </div>
    <nav>
        <a href="/aboutus" title="" class="header-button">O nas</a>
        <a href="/projects" title="" class="header-button">Projekty</a>
        <a href="/cooperation" title="" class="header-button">Współpraca</a>
        <a href="/contact" title="" class="header-button">Kontakt</a>
        <a href="/login" title="" class="header-login">{{ this.$store.state.username ?  this.$store.state.username : 'zaloguj się'}}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
  data() {
    return {
      isMenu: false
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header{
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #052431;
  justify-content: space-between;
  position: fixed;
  top:0;
  left:0;
  z-index: 100;
}

.logotype{
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: #fff;
  text-decoration: none;
}

.logo{
  height: 80px;
  width: 80px;
  padding: 10px;
}

.logo-text-small{
  font-size: 1.6em;
  font-weight: 300;
}

.logo-text-big{
  font-size: 3.6em;
}

.header-button{
  font-size: 2.4em;
  text-decoration: none;
  color: #fff;
  padding: 5px 10px;
  margin: 0 20px;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
}

.header-button:hover{
  border-bottom-color:#fff;
  transition: 0.3s;
}

.header-login{
  font-size: 2.4em;
  text-decoration: none;
  color: #03F8D6;
  padding: 5px 10px;
  text-shadow: 0 0 10px #03F8D6;
  margin: 0 40px;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
}

.header-login:hover{
  border-bottom-color:#03F8D6;
  transition: 0.3s
}

.hamburger-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 50px;
  padding:5px;
  margin-right: 45px;
  cursor: pointer;
  z-index: 1001;
}

.hamburger-menu{
  display: none;
  height: 5px;
  width: 40px;
  background-color: #fff;
  position: relative;
  transition: 0.1s;

  &::before{
    content: '';
    height: 5px;
    width: 40px;
    top: -12px;
    background-color: #fff;
    position: absolute;
    transition: 0.3s;
  }
  &::after{
    content: '';
    height: 5px;
    width: 40px;
    top: 12px;
    background-color: #fff;
    position: absolute;
    transition: 0.3s;
  }
}

@media (max-width: 1300px){
  nav{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 100px 30px 0;
    height: 100%;
    background-color: #052431;
    top: 0;
    right: -300px;
    transition: 0.5s;
    position: fixed;
    z-index: 1000;
  }

  .hamburger-menu{
    display: block;
  }

  .mobile-menu-show .hamburger-menu{
    height: 0;
    transition: 0.1s;
  }

  .mobile-menu-show .hamburger-menu::after{
    transition: 0.3s;
    top: 0;
    transform: rotateZ(-45deg);
  }
  
  .mobile-menu-show .hamburger-menu::before{
    transition: 0.3s;
    top: 0;
    transform: rotateZ(45deg);
  }

  .mobile-menu-show nav{
    right: 0;
    transition: 0.5s;
    box-shadow: -5px 0 18px rgb(0,0,0,0.5);
  }

  .header-button{
    padding: 15px 0px;
  }
  
  .header-login{
    padding: 15px 0px;
  }
}

@media (max-width: 600px){
  .logo{
    height: 60px;
    width: 60px;
  }

  .logo-text-small{
    font-size: 1.2em;
    font-weight: 300;
  }

  .logo-text-big{
    font-size: 2.6em;
  }

  
  .hamburger-container{
    margin-right: 20px;
  }
}

</style>
