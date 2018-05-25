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
        <h3 class="decade-header">Search for {{query}}</h3>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row timeline_section">
      <div class="col-md-12">
        <h3 v-if="!success" class="decade-header">Nothing was found :( Try again !</h3>
      </div>
      <section class="timeline">
        <ul  v-for="item in search" :key="item.id + '' + item.type">
          <li class="in-view">
            <div class="timelineElement">
              <b-card class="timelineCard">
                <b-media>
                  <h5 v-if="item.type === 'user'" class="banan"> User: {{item.name}} </h5>
                  <h5 v-if="item.type === 'char'" class="banan"> Character: {{item.name}} </h5>
                  <h5 v-if="item.type === 'mov'" class="banan"> Movie: {{item.name}} </h5>
                  <br>
                  <div v-if="item.description.length < 100" class="banan">
                    {{item.description}}
                  </div>
                  <div v-if="item.description.length >= 100">
                    {{item.description}}
                  </div>
                  <br>
                  <br>
                  <div class="timelineImg">
                    <img v-bind:src="item.pic" fluid alt="Pic alt"/>
                    <br>
                    <br>
                    <div>
                      <a v-if="item.type === 'user'" v-bind:href="item.url" class="banan">Check out {{item.name}} profile! </a>
                      <a v-if="item.type === 'char'" v-on:click="updateCharacters(item.id)" class="banan">Add/Remove {{item.name}} from your list! </a>
                      <a v-if="item.type === 'mov'" v-on:click="updateMovies(item.id)" class="banan">Add/Remove {{item.name}} from your list! </a>
                      <h5 class="banan" v-if="errorId === (item.id + '' + item.type)">{{errorMsg}}</h5>
                    </div>
                  </div>
                </b-media>
              </b-card>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <hr>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  data () {
    return {
      search: [],
      query: '',
      dbURL: 'http://localhost:8420/',
      success: false,
      errorId: '',
      errorMsg: ''
    }
  },
  methods: {
    getSearch () {
      this.success = true
      this.search = []
      let page = this
      this.$http.get(this.dbURL + 'search?search=' + this.query).then(
        function (res) {
          console.log('oh god')
          if (!res.body.success) {
            page.success = false
            return
          }
          page.search = res.body.content
          if (page.search.length === 0) {
            page.success = false
            return
          }
          for (let i = 0; i < page.search.length; i++) {
            let obj = page.search[i]
            if (obj.type === 'user') {
              page.search[i].pic = (obj.pic === null) ? page.dbURL + 'static/default_pic.jpg' : page.dbURL + 'static/users/profile/' + obj.id + '/' + obj.pic
              page.search[i].url = '/#/profile?id=' + obj.id
            }
            if (obj.type === 'char') {
              page.search[i].pic = page.dbURL + 'static/characters/' + obj.pic
            }
            if (obj.type === 'mov') {
              page.search[i].pic = page.dbURL + 'static/movies/' + obj.pic
            }
          }
        }
      )
    },
    updateMovies (id) {
      let token = require('../scripts/cookies').getCookie('token')
      if (token === undefined || token.length <= 0) {
        this.errorMsg = 'Please log in in order to do that!'
        this.errorId = id + 'mov'
        return
      }
      let obj = {
        id: id,
        token: token
      }
      let page = this
      this.$http.post(this.dbURL + 'auth/addMovie', obj).then(
        function (res) {
          if (!res.body.success) {
            console.log('already added so lets remove')
            this.$http.post(this.dbURL + 'auth/removeMovie', obj).then(
              function (res) {
                if (!res.body.success) {
                  console.log('oops')
                  page.errorMsg = 'Error updating movie! pls try again'
                  page.errorId = id + 'mov'
                  return
                }
                page.errorMsg = 'Movie Removed!'
                page.errorId = id + 'mov'
              }
            )
            return
          }
          page.errorMsg = 'Movie Added!'
          page.errorId = id + 'mov'
        }
      )
    },
    updateCharacters (id) {
      let token = require('../scripts/cookies').getCookie('token')
      if (token === undefined || token.length <= 0) {
        this.errorMsg = 'Please log in in order to do that!'
        this.errorId = id + 'char'
        return
      }
      let obj = {
        id: id,
        token: token
      }
      let page = this
      this.$http.post(this.dbURL + 'auth/addCharacter', obj).then(
        function (res) {
          if (!res.body.success) {
            console.log('already added so lets remove')
            this.$http.post(this.dbURL + 'auth/removeCharacter', obj).then(
              function (res) {
                if (!res.body.success) {
                  console.log('oops')
                  page.errorMsg = 'Error updating character! pls try again'
                  page.errorId = id + 'char'
                  return
                }
                page.errorMsg = 'Character Removed!'
                page.errorId = id + 'char'
              }
            )
            return
          }
          page.errorMsg = 'Character Added!'
          page.errorId = id + 'char'
        }
      )
    }
  },
  mounted () {
    this.query = this.$route.query.id
    if (this.query === '') this.query = ' '
    this.getSearch()
  },
  name: 'Search',
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
  min-height: 840px;
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
.timeline ul li .timelineCard .timelineImg, .banan {
  text-align: center;
}
a.banan {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
a.banan:hover {
  text-decoration: none;
}
.timelineImg img{
  max-width: 20%;
  max-height: 20%;
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
