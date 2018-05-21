<template>
  <div id="homeBackground">
    <b-img src="./static/images/disney logo.jpg" fluid alt="Responsive disney image" />
    <div id="wheel">
      <b-img v-if="coiso" center id="wheelOutside" src="./static/images/wheel.png" fluid alt="Responsive wheel image" />
      <div id="wheelInside">
        <div class="wheelC" >
          <a href="#" id="wheel1">
            <b-img id="char1" class="char" src="./static/images/char1.png" fluid alt="char1"/>
          </a>
        </div>
        <div class="wheelC" id="wheelC1" >
          <a href="#" id="wheel2">
            <b-img id="char2" class="char" src="./static/images/char2.png" fluid alt="char2"/>
          </a>
          <a href="#" id="wheel9">
            <b-img id="char9" class="char" src="./static/images/char9.png" fluid alt="char9"/>
          </a>
        </div>
        <div class="wheelC" id="wheelC2">
          <a href="#" id="wheel3">
            <b-img id="char3" class="char" src="./static/images/char3.png" fluid alt="char3"/>
          </a>
          <a href="#" id="wheel8">
            <b-img id="char8" class="char" src="./static/images/char8.png" fluid alt="char8"/>
          </a>
        </div>
        <div class="wheelC" id="wheelC3">
          <a href="#" id="wheel4">
            <b-img id="char4" class="char" src="./static/images/char4.png" fluid alt="char4"/>
          </a>
          <a href="#" id="wheel7">
            <b-img id="char7" class="char" src="./static/images/char7.png" fluid alt="char7"/>
          </a>
        </div>
        <div class="wheelC" id="wheelC4">
          <a href="#" id="wheel5">
            <b-img id="char5" class="char" src="./static/images/char5.png" fluid alt="char5"/>
          </a>
          <a href="#" id="wheel6">
            <b-img id="char6" class="char" src="./static/images/char6.png" fluid alt="char6"/>
          </a>
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
    /*-webkit-clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 88%);*/
    /*clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 88%);*/
  }
  .wheelC{
    text-align: center;
  }
  #wheelC1{
    margin-top: -2%;
  }
  #wheelC2{
    margin-top: 5%;
  }
  #wheelC3{
    margin-top: 10%;
  }
  #wheelInside{
    left: 0;
    right: 0;
    top: -160%;
    margin: 0 auto;
    position: relative;
  }
  .char{
    z-index: 10;/*hmm*/
    width: 12%;
    height: 12%;
  }
  #char1{
    position: relative;
  }
  #char2{
    position: relative;
    left: 30%;
    right: 30%;
    transform: rotate(40deg);
  }
  #char3{
    position: relative;
    left: 40%;
    right: 40%;
    height: 9%;
    width: 9%;
    transform: rotate(80deg);
  }
  #char4{
    position: relative;
    left: 35%;
    right: 35%;
    transform: rotate(120deg);
  }
  #char5{
    position: relative;
    left: 20%;
    right: 20%;
    width: 15%;
    height: 15%;
    transform: rotate(160deg);
  }
  #char6{
    position: relative;
    left: -20%;
    right: -20%;
    width: 13%;
    height: 13%;
    transform: rotate(-160deg);
  }
  #char7{
    position: relative;
    left: -35%;
    right: -35%;
    width: 15%;
    height: 15%;
    transform: rotate(-120deg);
  }
  #char8{
    position: relative;
    width: 15%;
    height: 15%;
    left: -35%;
    right: -35%;
    transform: rotate(-80deg);
  }
  #char9{
    position: relative;
    left: -25%;
    right: -25%;
    transform: rotate(-40deg);
  }
  #wheelOutside, #wheelInside{
    /*animation-name: example;*/
    /*animation-duration: 2s;*/
    /*animation-iteration-count: infinite;*/
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
