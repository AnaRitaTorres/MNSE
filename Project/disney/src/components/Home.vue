<template>
  <div id="homeBackground">
    <b-img src="./static/images/disney logo.jpg" fluid alt="Responsive disney image" />
    <div id="wheel">
      <b-img v-if="coiso" center id="wheelOutside" src="./static/images/wheel.png" fluid alt="Responsive wheel image" />
      <div id="wheel2">
        <b-img id="char1" class="char" src="./static/images/char1.png" fluid alt="char1"/>
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
  #wheel2{
    /*position: absolute;*/
    left: 0;
    right: 0;
    /*width: 100%;*/
    /*height: 200%;*/
    top: -100%;
    margin: 0 auto;
    position: relative;
    /*-webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 0% 50%);*/
    /*clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 88%);*/
  }
  .char{
    z-index: 10;/*hmm*/
    width: 10%;
    height: 10%;
  }
  #char1{
    position: relative;
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
