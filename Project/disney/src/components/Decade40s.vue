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
        <h3 class="decade-header">The 40s</h3>
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
                  <h5 class="mt-0">1940 - Pinocchio</h5>
                  <p>Based on an old Italian fairytale for children, Disney produces <span class="italic">Pinocchio</span>, a 88 minute long feature movie that marked a significant advancement in technology in the special effects area.</p>
                  <p>The movie portrays the story of an old man called Geppetto and his wood-carved puppet called Pinocchio. Visited by a magical blue fairy, Pinocchio is told that he can become a real boy if he is truthful and unselfish. Through a series of encounters with characters decided to lead Pinocchio astray, leading to be trapped in a cage. Although his companion, the famous Jiminy Cricket urges him to tell the fairy everything that happened, Pinocchio starts lying which causes his nose to grow longer and longer. Despite this, the fairy makes him promise to be a good boy again. On the way home, Pinocchio encounters a series of unfortunate characters that once again lead him to bad actions such as vandalism, gambling, and such. They convince him to go the Pleasure Island, on which he is half-turned into a donkey, like everyone that ends up there. He manages to escape but finds out that Geppetto has been trapped inside a giant sperm whale. Pinocchio sets out to reunite with him and help rescue him, alongside Jiminy and the fairy. He succeeds in rescuing his creator, but dies in the process. Nevertheless, the fairy decides that Pinocchio has been good enough to bring him back as a real boy, ending the story on a happy ending.</p>
                  <p>Despite growing to become quite a success and later received several academy awards, <span class="italic">Pinocchio</span> was initially a box-office disaster.</p>
                  <div class="video">
                    <b-embed type="iframe" aspect="16by9" src="https://youtube.com/embed/E3lq9xhpL0c" allowfullscreen></b-embed>
                  </div>
                </b-media>
              </b-card>
            </div>
          </li>
          <li>
            <div class="timelineElement">
              <b-card class="timelineCard">
                <b-media>
                  <h5 class="mt-0">1940 - Fantasia</h5>
                  <p>Disney releases <span class="italic">Fantasia</span>, in an effort to recover from financial losses from <span class="italic">Pinocchio</span>, and marking the first feature film to star Mickey Mouse. The movie initally set out to be displayed alongside a massive fair and music piece, which was a big investment for the company, thus resulting in losses. The movie reached universal acclaim and is now considered one of the best made animation movies of all time.</p>
                  <br>
                  <div class="timelineImg">
                    <img src="../assets/Disney-Movies-Fantasia.jpg" width="500" fluid alt="Mickey Mouse in Fantasia"/>
                    <p>Mickey Mouse in <span class="italic">Fantasia</span></p>
                  </div>
                </b-media>
              </b-card>
            </div>
          </li>
          <li>
            <div class="timelineElement">
              <b-card class="timelineCard">
                <b-media>
                  <h5 class="mt-0">1941 - Dumbo</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin.
                  </p>
                  <div class="video">
                    <b-embed type="iframe" aspect="16by9" src="https://youtube.com/embed/jcZUPDMXzJ8" allowfullscreen></b-embed>
                  </div>
                </b-media>
              </b-card>
            </div>
          </li>
          <li>
            <div class="timelineElement">
              <b-card class="timelineCard">
                <b-media>
                  <h5 class="mt-0">1942 - Bambi</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                 <div class="video">
                    <b-embed type="iframe" aspect="16by9" src="https://youtube.com/embed/F9FXdLcrkss" allowfullscreen></b-embed>
                  </div>
                </b-media>
              </b-card>
            </div>
          </li>
          <li>
            <div class="timelineElement">
              <b-card class="timelineCard">
                <b-media>
                  <h5 class="mt-0">1940 - The year of ASDASDAS</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                    sollicitudin.
                  </p>
                </b-media>
              </b-card>
            </div>
          </li>
        </ul>
      </section>
    </div>
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
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom - 400 <= (window.innerHeight || document.documentElement.clientHeight) &&
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
  name: 'Decade40s',
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
.timelineCard .video{
  margin: 4% !important;
}
</style>
