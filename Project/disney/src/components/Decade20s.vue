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
        <h1 class="decade-header">The 20s</h1>
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
                  <h5 class="mt-0">1923 - Disney is born</h5>
                  <br>
                  <p>
                    Walt Disney founds a company called "Disney Brothers Cartoon Studio", which would later become the Disney company, while also releasing the <span class="italic">Alice's Wonderland</span> series.
                  </p>
                </b-media>
              </b-card>
            </div>
          </li>
          <li>
            <div class="timelineElement">
              <b-card class="timelineCard">
                <b-media>
                  <h5 class="mt-0">1928 - Mickey and Minnie Mouse's first appearance</h5>
                  <br>
                  <p>
                    The first movies to feature Mickey Mouse are made, thus birthing this iconic character of the franchise. Mickey debuts in <span class="italic">Plane Crazy</span>, only being displayed to a test screening theater audience, and appears later in the year in <span class="italic">Steamboat Willy</span>, his first sound cartoon, along his girlfriend Minnie.
                  </p>
                  <p>
                    The appearance of syncronized sound with character noises marked the enormous success the movie attained.
                  </p>
                  <br>
                  <div class="timelineImg">
                    <img src="../assets/Steamboat-willie.jpg" fluid alt="Mickey in Steamboat Willie"/>
                    <p>Mickey Mouse in Steamboat Willie</p>
                  </div>
                </b-media>
              </b-card>
            </div>
          </li>
          <li>
            <div class="timelineElement">
              <b-card class="timelineCard">
                <b-media>
                  <h5 class="mt-0">1929 - Silly Symphonies</h5>
                  <br>
                  <p>
                    During this year the <span class="italic">Silly Sympohonies</span> series of animated cartoons begins, marking the start of a 75 cartoon saga.
                  </p>
                  <div class="video">
                    <b-embed type="iframe" aspect="16by9" src="https://youtube.com/embed/dihJ1w48Jh0" allowfullscreen></b-embed>
                  </div>
                </b-media>
              </b-card>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <br>
    <div class="decadeReview row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="timelineElement">
              <b-card class="timelineCard">
                <b-media>
                  <h5 class="mt-0">The 20s in Review</h5>
                  <div class="timelineImg">
                    <img src="../assets/20s.gif" fluid alt="Skeleton cello"/>
                    <p>Silly Symphonies scene</p>
                  </div>
                </b-media>
              </b-card>
            </div>
      </div>
      <div class="col-md-4"></div>
    </div>
    <br>
    <br>
    <div class="decadeRouter row">
      <div class="col-md-5"></div>
      <div class="col-md-2">
        <a href="#/decade/30s">30s
        <i class="fa fa-chevron-circle-right"></i>
        </a>
      </div>
      <div class="col-md-5"></div>
    </div>
    <br>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  mounted () {
    window.scrollTo(0, 0)
    function isElementInViewport (el) {
      var rect = el.getBoundingClientRect()
      return (
        rect.top + 300 >= 0 &&
        rect.left >= 0 &&
        rect.bottom - 300 <= (window.innerHeight || document.documentElement.clientHeight) &&
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
  name: 'Decade20s',
  components: {
    Header
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Tajawal');
@import url('https://fonts.googleapis.com/css?family=Great+Vibes');

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
  font-size: 4em;
  font-family: 'Great Vibes', cursive;
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
  color: #e1f7d5;
}
.timeline ul li .timelineElement{
  position: relative;
  bottom: 0;
  width: 950px;
  padding: 15px;
  background: #e1f7d5;
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
  border-color: transparent #e1f7d5 transparent transparent;
}
.timeline ul li::after {
  background: #406b94;
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
  color: #406b94;;
  font-weight: bolder;
  font-size: 1.5em;
  font-family: 'Great Vibes', cursive;
}
.decade .decadeRouter a i{
  font-size: 0.65em;
}
.decade .decadeRouter {
  text-align: center;
}
@media screen and (max-width: 800px) {
  .timeline ul li .timelineElement {
    width: 500px;
  }
}
.timelineCard .video{
  margin: 4% !important;
}
.decadeReview .timelineCard .timelineImg{
  margin-left: 20% !important;
  margin-top: 10% !important;
}
</style>
