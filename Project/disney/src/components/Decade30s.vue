<template>
  <div class="decade">
    <Header></Header>
    <br>
    <br>
    <br>
    <br>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <h3 class="decade-header">The 30s</h3>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row timeline_section">
      <section class="timeline">
        <ul>
          <li>
            <div class="timelineElement">
              <b-card class="timelineCard">
                <b-media>
                  <h5 class="mt-0">1930 - Distribution</h5>
                  <p>
                    Distribution is moved to Columbia Pictures.  
                  </p>
                </b-media>
              </b-card>
            </div>
          </li>
          <li>
            <div class="timelineElement">
              <b-card class="timelineCard">
                <b-media>
                  <h5 class="mt-0">1932 - Distribution</h5>
                  <p>
                    Distribution moves again, this time to United Artists.  
                  </p>
                </b-media>
              </b-card>
            </div>
          </li>
          <li>
            <div class="timelineElement">
              <b-card class="timelineCard">
                <b-media>
                  <h5 class="mt-0">1932 - First Academy Award</h5>
                  <br>
                  <p>
                    Disney releases <span class="italic">Flowers and Trees</span>, a <span class="italic">Silly Symphonies</span> cartoon, in full-color (Technicolor). It is the first commercially released film to use this technique, reaching critical acclaim because of this as well. By fitting the category with success being only eight minutes long, the movie wins Disney the Academy Award for Animated Short Subjects.  
                  </p>
                  <br>
                  <div class="timelineImg">
                    <img src="../assets/Silly_symphony.jpg" fluid alt="Flowers and Trees' cover"/>
                    <p>Flowers and Trees' cover</p>
                  </div>
                </b-media>
              </b-card>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <hr>
    <div class="decadeRouter row">
      <div class="col-md-5"></div>
      <div class="col-md-2">
        <a href="#/decade/30s">The 30s
        <i class="fas fa-caret-right"></i></a>
      </div>
      <div class="col-md-5"></div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  mounted () {
    window.scrollTo(0,0)
    function isElementInViewport (el) {
      var rect = el.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
    var items = document.querySelectorAll('.timeline li')
    function callbackFunc () {
      for (var i = 0; i < items.length; i++) items[i].classList.add('in-view')
      for (i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add('in-view')
        } else {
          items[i].classList.remove('in-view')
        }
      }
    }
    this.$nextTick(function () {
      window.addEventListener('load', callbackFunc)
      window.addEventListener('scroll', callbackFunc)
    })
  },
  name:'Decade30s',
  components: {
    Header
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Tajawal');
.decade {
  overflow-x : hidden;
  background-color:  #9AB7D3;
  font: normal 16px/1.5 'Tajawal', sans-serif;
}
div .timeline_section{
  background: #9AB7D3;
  color: #333;
  overflow-x: hidden;
}
.decade-header{
  text-align: center;
  color: #406b94;
  font-weight: bolder;
}
.timeline ul li{
  list-style-type:none;
  position: relative;
  width: 8px;
  margin: 0 auto;
  padding-top: 50px;
  background: #406b94;
  text-align: justify;
  border-radius: 10px;
}
.timeline ul li::after{
  content: '';
  position: absolute;
  left: 40%;
  bottom: -5px;
  transform: translateX(-50%);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: #fff;
}
.timeline ul li .timelineElement{
  position: relative;
  bottom: 0;
  width: 950px;
  padding: 15px;
  background: #F7E1D3;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
}
.timeline ul li .timelineElement::before{
  content: '';
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}
.timeline ul li:nth-child(odd) .timelineElement, .timeline ul li:nth-child(even) .timelineElement {
  left: 45px;
}
.timeline ul li:nth-child(odd) .timelineElement::before, .timeline ul li:nth-child(even) .timelineElement::before{
  left: -15px;
  border-width: 8px 16px 8px 0;
  border-color: transparent #F7E1D3 transparent transparent;
}
.timeline ul li::after {
  background: #9AB7D3;
  transition: background .5s ease-in-out;
}
.timeline ul li.in-view::after {
  background: #406b94;
}
.timeline ul li .timelineElement {
  visibility: hidden;
  opacity: 0;
  transition: all .5s ease-in-out;
}
.timeline ul li:nth-child(odd) .timelineElement, .timeline ul li:nth-child(even) .timelineElement {
  transform: translate3d(200px,0,0);
}
.timeline ul li.in-view .timelineElement {
  transform: none;
  visibility: visible;
  opacity: 1;
}
.timeline ul li .timelineCard, .timeline ul li .timelineCard *{
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
}
.timeline ul li .timelineCard .italic{
  font-style: italic;
}
.timeline ul li .timelineCard .timelineImg {
  text-align: center;
}
.decade .decadeRouter a{
  color: #333333;
  font-weight: bolder;
  font-size: 1.5em;
}
.decade .decadeRouter a i{
  font-size: 0.85em;
}
.decade .decadeRouter {
  text-align: center;
}
@media screen and (max-width: 800px) {
  .timeline ul li .timelineElement {
    width: 500px;
  }
}
</style>