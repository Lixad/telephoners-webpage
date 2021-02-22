<template>
  <div id="app">
    <div id="nav">

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  padding-top: 100px;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html{
  font-size: 10px;
  font-family: 'Montserrat';
  font-weight: 400;
  color: #ffffff;
  background-color: #052431;
}

@font-face{
  font-family: 'Montserrat';
  src: url('fonts/Montserrat-Light.ttf');
  font-style: normal;
  font-weight: 300;
}

@font-face{
  font-family: 'Montserrat';
  src: url('fonts/Montserrat-Regular.ttf');
  font-style: normal;
  font-weight: 400;
}

@font-face{
  font-family: 'Montserrat';
  src: url('fonts/Montserrat-Medium.ttf');
  font-style: normal;
  font-weight: 500;
}

@font-face{
  font-family: 'Montserrat';
  src: url('fonts/Montserrat-Bold.ttf');
  font-style: normal;
  font-weight: 700;
}

.shining-button{
  display: flex;
  align-items: center;
  font-size: 2.4em;
  text-decoration: none;
  color: #03F8D6;
  padding: 5px 10px;
  text-shadow: 0 0 10px #03F8D6;
  margin: 20px 40px;
}

.shining-button:hover{
  text-decoration: underline;
}

.arrow{
  height: 1.2em;
  width: 1.2em;
  fill: #03f8d6;
  margin-left: 20px;
}

.d-f-c{
  display: flex;
  justify-content: center;
}

.d-f-sb{
  display: flex;
  justify-content: space-between;
}

.d-f-se{
  display: flex;
  justify-content: space-evenly;
}

.d-f-a-e{
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.d-f-a-c{
  display: flex;
  align-items: center;
  flex-direction: column;
}

.pos-rel{
  position: relative;
}

.m-t-50{
  margin-top: 50px;
}

.w_30{
  width: 30%;
}

.w_100{
  width: 100%;
}

.w_85_auto{
  width: 85%;
  margin: 0 auto;
}

.grad{
  background-image: linear-gradient(#052431, #3d5e6b,#052431);
}

.error-msg{
  padding: 2px 0;
  font-size: 1.4em;
  color: #E53935;
}

.p-b-100{
  padding-bottom: 100px;
}

.p-b-250{
  padding-bottom: 250px;
}

.p-b-1_15em{
  padding-bottom: 1.15em;
}

.p-t-100{
  padding-top: 100px;
}

.p-r-20{
  padding-right: 20px;
}

.p-l-40{
  padding-left: 40px;
}

.m-auto{
  margin: 0 auto;
}

.content{
  width: 80%;
  margin: 0 auto;
}

button:focus{
  outline: none;
}

.d-n{
  display: none;
}

@media(max-width: 840px){
  .shining-button{
    margin: 30px 0px;
    font-size: 2em;
  }
  .arrow{
    margin-left: 5px;
  }
}

</style>
