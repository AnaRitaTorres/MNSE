<template>
  <div id="homeBackground">
    <b-img src="./static/images/disney logo.jpg" fluid alt="Responsive disney image" />
    <div id="wheelOutside">
      <b-img center id="wheel" src="./static/images/wheel.png" fluid alt="Responsive wheel image" />
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style>
  #homeBackground{
    position: relative;
    padding: 20px;
    left: 0;
    right: 0;
  }
  #wheelOutside{
    /*position: absolute;*/
    left: 0;
    right: 0;
    width: 50%;
    height: 50%;
    top: 25%;
    margin: 0 auto;
    position: absolute;
  }
  #wheel{
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
