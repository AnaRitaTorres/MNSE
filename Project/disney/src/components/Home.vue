<template>
  <div id="homeBackground">
    <b-img src="./static/images/disney logo.jpg" fluid alt="Responsive disney image" />
    <div id="wheel">
      <b-img v-if="coiso" center id="wheelOutside" src="./static/images/wheel.png" fluid alt="Responsive wheel image" />
      <div id="wheelInside">
        <div class="wheelC" id="wheel1">
          <b-img id="char1" class="char" src="./static/images/char1.png" fluid alt="char1"/>
        </div>
        <div class="wheelC" id="wheel2">
          <b-img id="char2" class="char" src="./static/images/char2.png" fluid alt="char2"/>
        </div>
        <div class="wheelC" id="wheel3">
          <b-img id="char3" class="char" src="./static/images/char3.png" fluid alt="char3"/>
        </div>
        <div class="wheelC" id="wheel4">
          <b-img id="char4" class="char" src="./static/images/char4.png" fluid alt="char4"/>
        </div>
        <div class="wheelC" id="wheel5">
          <b-img id="char5" class="char" src="./static/images/char5.png" fluid alt="char5"/>
        </div>
        <div class="wheelC" id="wheel6">
          <b-img id="char6" class="char" src="./static/images/char6.png" fluid alt="char6"/>
        </div>
        <div class="wheelC" id="wheel7">
          <b-img id="char7" class="char" src="./static/images/char7.png" fluid alt="char7"/>
        </div>
        <div class="wheelC" id="wheel8">
          <b-img id="char8" class="char" src="./static/images/char8.png" fluid alt="char8"/>
        </div>
        <div class="wheelC" id="wheel9">
          <b-img id="char9" class="char" src="./static/images/char9.png" fluid alt="char9"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      coiso: true
    }
  }
}
</script>
<style>
  #homeBackground{
    position: relative;
    padding: 20px;
    left: 0;
    right: 0;
  }
  #wheel{
    /*position: absolute;*/
    left: 0;
    right: 0;
    width: 50%;
    height: 50%;
    top: 25%;
    margin: 0 auto;
    position: absolute;
    /*-webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 0% 50%);*/
    /*clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 88%);*/
  }
  /*.wheelC{*/
    /*!*position: absolute;*!*/
    /*left: 0;*/
    /*right: 0;*/
    /*!*width: 100%;*!*/
    /*!*height: 200%;*!*/
    /*top: -160%;*/
    /*margin: 0 auto;*/
    /*position: relative;*/
  /*}*/
  #wheelInside{
    left: 0;
    right: 0;
    top: -160%;
    margin: 0 auto;
    position: relative;
  }
  .char{
    z-index: 10;/*hmm*/
    width: 10%;
    height: 10%;
  }
  #char1{
    position: relative;
    left: 45%;
    right: 45%;
  }
  #char2{
    position: relative;
    left: 65%;
    right: 65%;
  }
  #char3{
    position: relative;
    left: 75%;
    right: 75%;
  }
  #char4{
    position: relative;
    left: 75%;
    right: 75%;
  }
  #char5{
    position: relative;
    left: 58%;
    right: 58%;
  }
  #char6{
    position: relative;
    left: 35%;
    right: 35%;
  }
  #char7{
    position: relative;
    left: 15%;
    right: 15%;
  }
  #char8{
    position: relative;
    left: 10%;
    right: 10%;
  }
  #char9{
    position: relative;
    left: 20%;
    right: 20%;
  }
  #wheelOutside{
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes example {
    0%   {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
  /* Standard syntax */
  @keyframes example {
    0%   {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
</style>
