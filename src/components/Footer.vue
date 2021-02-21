<template>
  <div class="footer">
    <div class="footer-links">
      <div class="contact">
        <h5>Kontakt</h5>
        <div class="contact-link-div">
          <a href="mailto:#" class="contact-link">mail@agh.edu.pl</a>
        </div>
        <div class="contact-link-div">
          <a href="tel:#" class="contact-link">997-997-997</a>
        </div>
        <h5>Inne media:</h5>
        <div>
          <a href="#" title="">
            <svg class="media-icon p-r-20">
              <use xlink:href="#facebook"/>
            </svg>
          </a>
          <a href="#" title="">
            <svg class="media-icon">
              <use xlink:href="#linkedin"/>
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h5>Nawigacja</h5>
        <div class="navigation-footer">
          <ul>
            <li>
              <a href="/aboutus" title="">O nas</a>
            </li>
            <li>
              <a href="/projects" title="">Projekty</a>
            </li>
            <li>
              <a href="/cooperation" title="">Współpraca</a>
            </li>
            <li>
              <a href="#" title="">Aktualności</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/history" title="">Historia Koła</a>
            </li>
            <li>
              <a href="/projects" title="">Bieżące projekty</a>
            </li>
            <li>
              <a href="/cooperation" title="">Sponsorzy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" title="">Dokumenty</a>
            </li>
            <li>
              <a href="#" title="">Panel użytkownika</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <small>© 2020 SKN Telephoners. All rights reserved.</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>

<style scoped lang="scss">

.footer{
  padding-top: 50px;
  padding-bottom: 20px;
}

.footer-links{
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 50px;
}

.contact{
  display: flex;
  flex-direction: column;
  width: 50%;
}

h5{
  font-size: 1.8em;
  font-weight: 700;
  padding: 15px 0;
}

.contact-link{
  text-decoration: none;
  color: #fff;
  font-size: 1.6em;
  font-weight: 300;
  width: auto;
}

.contact-link:hover{
  text-decoration: underline;
}

.contact-link-div{
  padding: 10px 0;
}

.media-icon{
  fill: #fff;
  opacity: 0.8;
  height: 60px;
  width: 60px;
  padding: 5px 20px 5px 0;
  transition: 0.2s;
}

.media-icon:hover{
  opacity: 1;
  transition: 0.2s;
}

.navigation-footer{
  display: flex;
}

.navigation-footer ul{
  padding-right: 40px;
}

.navigation-footer ul li{
  padding: 10px 0;
}

.navigation-footer ul li a{
  text-decoration: none;
  color: #fff;
  font-size: 1.6em;
  font-weight: 300;
}

.navigation-footer ul li a:hover{
  text-decoration: underline;
}

small{
  padding-left: 5%;
};

@media (max-width: 1300px){
  .contact{
    width: auto;
  }

  .footer-links{
    justify-content: space-between;
  }
}

@media (max-width: 840px){
  .footer-links{
    flex-direction: column;
    align-items: center;
  }
  .contact{
    margin-bottom: 20px;
  }
}

@media (max-width: 620px){
  .navigation-footer{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact{
    align-items: center;
  }

  .navigation-footer ul{
    padding: 0;
  }  

  .navigation-footer ul li{
    padding: 10px 0;
    text-align: center;
  }

  .media-icon{
    padding: 0;
  }
  .p-r-20{
    padding-right: 20px;
  }

  h5{
    text-align: center;
  }
}

</style>
