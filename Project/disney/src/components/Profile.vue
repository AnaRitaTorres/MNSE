<template>
<div class="profile">
    <Header></Header>
    <b-container class="profile_con">
        <div id="cover">
            <b-img id="cover_pic" v-bind:src="userData.cover_pic" fluid alt="Responsive image" />
            <b-card id="location">
                <h4>{{ userData.name }}</h4>
                <h5>
                    <i class="fa fa-location-arrow"></i>
                    {{ userData.location }}
                </h5>
            </b-card>
        </div>
        <b-row>
            <b-col md="3">
                <b-card id="personal_info">
                    <div id="profile_pic">
                        <b-img v-bind:src="userData.profile_pic" fluid alt="Responsive image" />
                    </div>
                    <div id="button">
                        <b-button id="follow" href="#" >+ Follow</b-button>
                    </div>
                    <h6 class="main_text">About</h6>
                    <p>
                        {{ userData.description }}
                    </p>
                    <h6 class="main_text">Followers {{ followers.length }} </h6>
                    <h6 class="main_text">Following {{ followings.length }} </h6>
                </b-card>
            </b-col>
            <b-col id="disney_info" md="8">
            <h4>Favourite Films</h4>
            <b-card id="film_info">
                <b-row>
                  <b-col v-for="item in displayMovies" :key="item.pic">
                    <b-img v-bind:src="dbURL + 'static/movies/' + item.pic" fluid alt="Responsive image" />
                  </b-col>
                </b-row>
            </b-card>
            <h4>Favourite Characters</h4>
            <b-card id="character_info">
                <b-row>
                    <b-col v-for="item in displayCharacters" :key="item.pic">
                      <b-img v-bind:src="dbURL + 'static/characters/' + item.pic" fluid alt="Responsive image" />
                    </b-col>
                </b-row>
            </b-card>
            </b-col>
        </b-row>
    </b-container>
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'profile',
  components: {
    Header
  },
  data () {
    return {
      id: 0,
      userData: {
        name: 'Loading...',
        description: 'Loading...',
        profile_pic: 'http://localhost:8420/static/default_pic.jpg',
        cover_pic: 'http://localhost:8420/static/default_cover.jpg',
        location: 'Neverland'
      },
      dbURL: 'http://localhost:8420/',
      followers: [],
      followings: [],
      characters: [],
      movies: []
    }
  },
  created () {
    let page = this
    let id = this.$route.query.id
    if (id === null || id === undefined) {
      id = require('../scripts/cookies').getCookie('userId')
    }
    this.id = id
    if (id !== null && id !== undefined) {
      this.$http.get(this.dbURL + 'getUser?id=' + id).then(
        function (res) {
          if (!res.body.success)window.location.replace(('/'))
          page.userData = res.body.content
          page.userData.profile_pic = (page.userData.profile_pic === null) ? page.dbURL + 'static/default_pic.jpg' : page.dbURL + 'static/users/profile/' + page.id + '/' + page.userData.profile_pic
          page.userData.cover_pic = (page.userData.cover_pic === null) ? page.dbURL + 'static/default_cover.jpg' : page.dbURL + 'static/users/cover/' + page.id + '/' + page.userData.cover_pic
        },
        function (res) {
          window.location.replace(('/'))
        }
      )
      this.$http.get(this.dbURL + 'getFollowers?id=' + id).then(
        function (res) {
          page.followers = res.body.content
        }
      )
      this.$http.get(this.dbURL + 'getFollowings?id=' + id).then(
        function (res) {
          page.followings = res.body.content
        }
      )
      this.$http.get(this.dbURL + 'getCharacters?id=' + id).then(
        function (res) {
          page.characters = res.body.content
        }
      )
      this.$http.get(this.dbURL + 'getMovies?id=' + id).then(
        function (res) {
          page.movies = res.body.content
        }
      )
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Tajawal');

.profile{
  background-color: #9AB7D3;
  font-family: 'Tajawal', sans-serif;
}
.profile_con{
    padding-top: 5%;
}
#cover{
  bottom: 0%;
}
#cover_pic{
  opacity: 0.5;
  height: 500px;
  width: 100%;
}
#location{
  padding-bottom:0px;
  background-color: transparent;
  border: none;
  left: 35%;
  top: 60%;
  position: absolute;
}
#location h4, h5 {
  font-weight: bold;
}
#personal_info{
   top: -20%;
   left: 7%;
   height: 600px;
   background-color:#F7E1D3;
}
#profile_pic{
    padding-bottom: 5%;
}
#button{
    text-align: center;
    padding-bottom: 8%;
}
#follow{
    padding-left: 8%;
    padding-right: 8%;
    color: black;
    background-color: white;
}
.main_text{
    padding-left: 6%;
    font-weight: bold;
}
#disney_info h4{
   padding-left: 8%;
   padding-top: 10%;
   font-weight: bold;
}
#film_info, #character_info{
    top: 4%;
    bottom: 20%;
    left: 6%;
    padding: 5%;
    background-color:#F7E1D3;
}
#character_info{
    margin-bottom:10%;
}
</style>
