<template>
<div id="home">
  <Header></Header>
  <div id="homeBackground">
    <b-img src="./static/images/disney logo.jpg" fluid alt="Responsive disney image" />
    <div id="wheel">
      <b-img v-bind:style="[baseStyles, overrideStyles, rotatingAnim]" center id="wheelOutside" c src="./static/images/wheel.png" fluid alt="Responsive wheel image" />
      <div id="wheelInside" v-bind:style="[baseStyles, overrideStyles, rotatingAnim]">
        <div class="wheelC" >
          <a href="#" id="wheel1" v-bind:class="wheel[1]">
            <b-img id="char1" class="char" src="./static/images/char1.png" fluid alt="char1"/>
          </a>
        </div>
        <div class="wheelC" id="wheelC1" >
          <a href="#" id="wheel2" v-bind:class="wheel[2]">
            <b-img id="char2" class="char" src="./static/images/char2.png" fluid alt="char2"/>
          </a>
          <a href="#" id="wheel9" v-bind:class="wheel[9]">
            <b-img id="char9" class="char" src="./static/images/char9.png" fluid alt="char9"/>
          </a>
        </div>
        <div class="wheelC" id="wheelC2" >
          <a href="#" id="wheel3" v-bind:class="wheel[3]">
            <b-img id="char3" class="char" src="./static/images/char3.png" fluid alt="char3"/>
          </a>
          <a href="#" id="wheel8" v-bind:class="wheel[8]">
            <b-img id="char8" class="char" src="./static/images/char8.png" fluid alt="char8"/>
          </a>
        </div>
        <div class="wheelC" id="wheelC3">
          <a href="#" id="wheel4" v-bind:class="wheel[4]">
            <b-img id="char4" class="char" src="./static/images/char4.png" fluid alt="char4"/>
          </a>
          <a href="#" id="wheel7" v-bind:class="wheel[7]">
            <b-img id="char7" class="char" src="./static/images/char7.png" fluid alt="char7"/>
          </a>
        </div>
        <div class="wheelC" id="wheelC4">
          <a href="#" id="wheel5" v-bind:class="wheel[5]">
            <b-img id="char5" class="char" src="./static/images/char5.png" fluid alt="char5"/>
          </a>
          <a href="#" id="wheel6" v-bind:class="wheel[6]">
            <b-img id="char6" class="char" src="./static/images/char6.png" fluid alt="char6"/>
          </a>
        </div>
      </div>
    </div>
    <div id="buttonDiv">
      <b-img id="button_l" class="buttons" src="./static/images/arrow_l.png" fluid alt="arrow_l" v-on:click="rotate(-1)"/>
      <b-img id="button_r" class="buttons" src="./static/images/arrow_r.png" fluid alt="arrow_r" v-on:click="rotate(1)"/>
    </div>
  </div>
</div>
</template>

<script>
import Header from '@/components/Header'
export default {
  data () {
    return {
      state: 1,
      wheel: ['nope', 'active', 'right', 'none', 'none', 'none', 'none', 'none', 'none', 'left'],
      animated: false,
      coiso: true,
      baseStyles: {
        transform: 'rotate(' + 0 + 'deg)'
      },
      overrideStyles: {
        transform: 'rotate(' + (this.state - 1) * 40 + 'deg)'
      },
      rotatingAnim: {
        '-webkit-animation-name': 'rotation0',
        '-webkit-animation-duration': '2s',
        '-webkit-animation-iteration-count': '1',
        '-webkit-animation-fill-mode': 'forwards',
        'animation-name': 'rotation0',
        'animation-duration': '2s',
        'animation-iteration-count': '1',
        'animation-fill-mode': 'forwards'
      }
    }
  },
  methods: {
    rotate (value) {
      if (this.animated) return
      let rA = (value === 1) ? 'rotation' + this.state : 'rotationE' + this.state
      this.rotatingAnim = {
        '-webkit-animation-name': rA,
        '-webkit-animation-duration': '2s',
        '-webkit-animation-iteration-count': '1',
        '-webkit-animation-fill-mode': 'forwards',
        'animation-name': rA,
        'animation-duration': '2s',
        'animation-iteration-count': '1',
        'animation-fill-mode': 'forwards'
      }
      this.wheel[this.state] = 'none'
      let self = this
      self.animated = true
      setTimeout(
        function () {
          self.state += value
          if (self.state === 10) self.state = 1
          if (self.state === 0) self.state = 9
          self.wheel[self.state] = 'active'
          self.overrideStyles.transform = 'rotate(' + 40 * (self.state - 1) + 'deg)'
          self.animated = false
          this.rotatingAnim = {
            '-webkit-animation-name': 'rotation0',
            'animation-name': 'rotation0'
          }
        }, 2000)
    }
  },
  components: {
    Header
  }
}
</script>
<style>
  #home{
    margin:0;
  }
  #homeBackground{
    position: relative;
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
  #buttonDiv{
    z-index: 10;
    text-align: center;
    left: 0;
    right: 0;
    top: 70%;
    margin: 0 auto;
    position: absolute;
  }
  .buttons{
    width: 15%;
    height: 15%;
  }
  #button_l{
    margin-left: 20%;
    float: left;
  }
  #button_r{
    margin-right: 20%;
    float:right;
  }
  .buttons:hover{
    cursor: pointer;
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
  #wheelOutside{
    z-index: 9;
    padding-bottom: 0;
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
  @-webkit-keyframes rotation1 {
    0%   {transform: rotate(0deg);}
    100% {transform: rotate(320deg);}
  }
  /* Standard syntax */
  @keyframes rotation1 {
    0%   {transform: rotate(0deg);}
    100% {transform: rotate(320deg);}
  }
  @-webkit-keyframes rotation2 {
    0%   {transform: rotate(-40deg);}
    100% {transform: rotate(280deg);}
  }
  /* Standard syntax */
  @keyframes rotation2 {
    0%   {transform: rotate(-40deg);}
    100% {transform: rotate(280deg);}
  }
  @-webkit-keyframes rotation3 {
    0%   {transform: rotate(-80deg);}
    100% {transform: rotate(240deg);}
  }
  /* Standard syntax */
  @keyframes rotation3 {
    0%   {transform: rotate(-80deg);}
    100% {transform: rotate(240deg);}
  }
  @-webkit-keyframes rotation4 {
    0%   {transform: rotate(-120deg);}
    100% {transform: rotate(200deg);}
  }
  /* Standard syntax */
  @keyframes rotation4 {
    0%   {transform: rotate(-120deg);}
    100% {transform: rotate(200deg);}
  }
  @-webkit-keyframes rotation5 {
    0%   {transform: rotate(-160deg);}
    100% {transform: rotate(160deg);}
  }
  /* Standard syntax */
  @keyframes rotation5 {
    0%   {transform: rotate(-160deg);}
    100% {transform: rotate(160deg);}
  }
  @-webkit-keyframes rotation6 {
    0%   {transform: rotate(-200deg);}
    100% {transform: rotate(120deg);}
  }
  /* Standard syntax */
  @keyframes rotation6 {
    0%   {transform: rotate(-200deg);}
    100% {transform: rotate(120deg);}
  }
  @-webkit-keyframes rotation7 {
    0%   {transform: rotate(-240deg);}
    100% {transform: rotate(80deg);}
  }
  /* Standard syntax */
  @keyframes rotation7 {
    0%   {transform: rotate(-240deg);}
    100% {transform: rotate(80deg);}
  }
  @-webkit-keyframes rotation8 {
    0%   {transform: rotate(-280deg);}
    100% {transform: rotate(40deg);}
  }
  /* Standard syntax */
  @keyframes rotation8 {
    0%   {transform: rotate(-280deg);}
    100% {transform: rotate(40deg);}
  }
  @-webkit-keyframes rotation9 {
    0%   {transform: rotate(-320deg);}
    100% {transform: rotate(0deg);}
  }
  /* Standard syntax */
  @keyframes rotation9 {
    0%   {transform: rotate(-320deg);}
    100% {transform: rotate(0deg);}
  }
  @-webkit-keyframes rotationE2 {
    100%   {transform: rotate(0deg);}
    0% {transform: rotate(320deg);}
  }
  /* Standard syntax */
  @keyframes rotationE2 {
    100%   {transform: rotate(0deg);}
    0% {transform: rotate(320deg);}
  }
  @-webkit-keyframes rotationE3 {
    100%   {transform: rotate(-40deg);}
    0% {transform: rotate(280deg);}
  }
  /* Standard syntax */
  @keyframes rotationE3 {
    100%   {transform: rotate(-40deg);}
    0% {transform: rotate(280deg);}
  }
  @-webkit-keyframes rotationE4 {
    100%   {transform: rotate(-80deg);}
    0% {transform: rotate(240deg);}
  }
  /* Standard syntax */
  @keyframes rotationE4 {
    100%   {transform: rotate(-80deg);}
    0% {transform: rotate(240deg);}
  }
  @-webkit-keyframes rotationE5 {
    100%   {transform: rotate(-120deg);}
    0% {transform: rotate(200deg);}
  }
  /* Standard syntax */
  @keyframes rotationE5 {
    100%   {transform: rotate(-120deg);}
    0% {transform: rotate(200deg);}
  }
  @-webkit-keyframes rotationE6 {
    100%   {transform: rotate(-160deg);}
    0% {transform: rotate(160deg);}
  }
  /* Standard syntax */
  @keyframes rotationE6 {
    100%   {transform: rotate(-160deg);}
    0% {transform: rotate(160deg);}
  }
  @-webkit-keyframes rotationE7 {
    100%   {transform: rotate(-200deg);}
    0% {transform: rotate(120deg);}
  }
  /* Standard syntax */
  @keyframes rotationE7 {
    100%   {transform: rotate(-200deg);}
    0% {transform: rotate(120deg);}
  }
  @-webkit-keyframes rotationE8 {
    100%   {transform: rotate(-240deg);}
    0% {transform: rotate(80deg);}
  }
  /* Standard syntax */
  @keyframes rotationE8 {
    100%   {transform: rotate(-240deg);}
    0% {transform: rotate(80deg);}
  }
  @-webkit-keyframes rotationE9 {
    100%   {transform: rotate(-280deg);}
    0% {transform: rotate(40deg);}
  }
  /* Standard syntax */
  @keyframes rotationE9 {
    100%   {transform: rotate(-280deg);}
    0% {transform: rotate(40deg);}
  }
  @-webkit-keyframes rotationE1 {
    100%   {transform: rotate(-320deg);}
    0% {transform: rotate(0deg);}
  }
  /* Standard syntax */
  @keyframes rotationE1 {
    100%   {transform: rotate(-320deg);}
    0% {transform: rotate(0deg);}
  }
  @-webkit-keyframes rotation0 {
    0%   {transform: rotate(0deg);}
  }
  /* Standard syntax */
  @keyframes rotation0 {
    0%   {transform: rotate(0deg);}
  }
</style>
