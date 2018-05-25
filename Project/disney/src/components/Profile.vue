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
              <b-button id="follow" v-if="canFollow && !isFollower" v-on:click="followUser">+ Follow</b-button>
              <b-button id="follow" v-if="canFollow && isFollower" v-on:click="followUser">- Unfollow</b-button>
            </div>
            <h6 class="main_text">About</h6>
            <p>
              {{ userData.description }}
            </p>
            <h6 class="main_text" @click="showModal">Followers {{ followers.length }} </h6>
            <h6 class="main_text" @click="showModal2">Following {{ followings.length }} </h6>
            <b-modal ref="myModalRef" hide-footer title="Followers">
              <div class="d-block text-center">
                <div v-if="followers.length > 0">
                    <h6>{{followers[curFollower].name}}</h6>
                    <a v-bind:href="'/#/profile?id=' + followers[curFollower].id" v-on:click="closeModal2">
                      <b-img class="banan" v-bind:src="followers[curFollower].profile_pic" fluid alt="Responsive image" />
                    </a>
                  <div>
                    <a class="left" v-on:click="curFollower -= (curFollower === 0) ? 0 : 1">
                      before
                    </a>
                    <a class="right" v-on:click="curFollower += (curFollower === (followers.length - 1)) ? 0 : 1">
                      next
                    </a>
                  </div>
                </div>
              </div>
            </b-modal>
            <b-modal ref="myModalRef2" hide-footer title="Followings">
              <div class="d-block text-center">
                <div v-if="followings.length > 0">
                  <h6>{{followings[curFollowing].name}}</h6>
                  <a v-bind:href="'/#/profile?id=' + followings[curFollowing].id" v-on:click="closeModal2">
                    <b-img class="banan" v-bind:src="followings[curFollowing].profile_pic" fluid alt="Responsive image" />
                  </a>
                  <div>
                    <a class="left" v-on:click="curFollowing -= (curFollowing === 0) ? 0 : 1">
                      before
                    </a>
                    <a class="right" v-on:click="curFollowing += (curFollowing === (followings.length - 1)) ? 0 : 1">
                      next
                    </a>
                  </div>
                </div>
              </div>
            </b-modal>
          </b-card>
        </b-col>
        <b-col id="disney_info" md="8">
          <h4>Favourite Films</h4>
          <b-card id="film_info">
            <b-row>
              <b-col v-for="item in displayMovies" :key="item.pic + '' + 'mov'" >
                <b-img class="imagem1" v-bind:src="dbURL + 'static/movies/' + item.pic" @click="showModal3(item.name, item.description)" fluid alt="Responsive image" />
              </b-col>
              <b-modal ref="myModalRef3" hide-footer v-bind:title="coiso.name">
                <div class="d-block text-md-justify">
                  {{ coiso.description }}
                </div>
              </b-modal>
            </b-row>
            <div>
              <a class="left" v-on:click="movPage -= (movPage === 0) ? 0 : 1; displayMovies = movies[movPage]">
                before
              </a>
              <a class="righti" v-on:click="movPage += (movPage === (movies.length - 1)) ? 0 : 1; displayMovies = movies[movPage]">
                next
              </a>
            </div>
          </b-card>
          <h4>Favourite Characters</h4>
          <b-card id="character_info">
            <b-row>
              <b-col v-for="item in displayCharacters" :key="item.pic + '' + 'char'">
                <b-img class="imagem2" v-bind:src="dbURL + 'static/characters/' + item.pic" @click="showModal3(item.name, item.description)" fluid alt="Responsive image" />
              </b-col>
            </b-row>
            <div>
              <a class="left" v-on:click="charPage -= (charPage === 0) ? 0 : 1; displayCharacters = characters[charPage]">
                before
              </a>
              <a class="righti" v-on:click="charPage += (charPage === (charPage.length - 1)) ? 0 : 1; displayCharacters = characters[charPage]">
                next
              </a>
            </div>
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
      movies: [],
      charPage: 0,
      movPage: 0,
      displayCharacters: [],
      displayMovies: [],
      canFollow: true,
      isFollower: false,
      curFollower: 0,
      curFollowing: 0,
      coiso: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    followUser () {
      if (!this.canFollow || this.id === 0) {
        return
      }
      let token = require('../scripts/cookies').getCookie('token')
      if (token === undefined || token.length < 1) {
        return
      }
      let obj = {
        id: this.id,
        token: token
      }
      let page = this
      this.$http.post(this.dbURL + 'auth/followUser', obj).then(
        function (res) {
          if (!res.body.success) {
            console.log('Already following, lets unfollow!')
            this.$http.post(this.dbURL + 'auth/unfollowUser', obj).then(
              function (res) {
                if (!res.body.success) {
                  console.log('oops')
                  return
                }
                page.isFollower = false
              }
            )
            return
          }
          page.isFollower = true
        }
      )
    },
    showModal () {
      this.$refs.myModalRef.show()
    },
    showModal2 () {
      this.$refs.myModalRef2.show()
    },
    showModal3 (name, description) {
      this.coiso.name = name
      this.coiso.description = description
      this.$refs.myModalRef3.show()
    },
    closeModal2 () {
      window.location.reload(true)
    }
  },
  created () {
    let page = this
    let id = this.$route.query.id
    if (id === null || id === undefined) {
      id = require('../scripts/cookies').getCookie('id')
    }
    this.id = id
    if (id !== null && id !== undefined) {
      this.$http.get(this.dbURL + 'getUser?id=' + id).then(
        function (res) {
          if (!res.body.success)window.location.replace(('/'))
          page.userData = res.body.content
          page.userData.profile_pic = (page.userData.profile_pic === null) ? page.dbURL + 'static/default_pic.jpg' : page.dbURL + 'static/users/profile/' + page.id + '/' + page.userData.profile_pic
          page.userData.cover_pic = (page.userData.cover_pic === null) ? page.dbURL + 'static/default_cover.jpg' : page.dbURL + 'static/users/cover/' + page.id + '/' + page.userData.cover_pic
          if (page.userData.description === null) page.userData.description = 'No description provided'
          if (page.userData.location === null) page.userData.location = 'Neverland'
        },
        function (res) {
          window.location.replace(('/'))
        }
      )
      this.$http.get(this.dbURL + 'getFollowers?id=' + id).then(
        function (res) {
          page.followers = res.body.content
          let ownId = require('../scripts/cookies').getCookie('id')
          if (page.id === ownId || ownId === undefined) {
            page.canFollow = false
          }
          for (let i = 0; i < page.followers.length; i++) {
            let fo = page.followers[i]
            page.followers[i].profile_pic = (fo.profile_pic === null) ? page.dbURL + 'static/default_pic.jpg' : page.dbURL + 'static/users/profile/' + fo.id + '/' + fo.profile_pic
            if (parseInt(fo.id) === parseInt(ownId)) {
              page.isFollower = true
            }
          }
        }
      )
      this.$http.get(this.dbURL + 'getFollowings?id=' + id).then(
        function (res) {
          page.followings = res.body.content
          for (let i = 0; i < page.followings.length; i++) {
            let fo = page.followings[i]
            page.followings[i].profile_pic = (fo.profile_pic === null) ? page.dbURL + 'static/default_pic.jpg' : page.dbURL + 'static/users/profile/' + fo.id + '/' + fo.profile_pic
          }
        }
      )
      this.$http.get(this.dbURL + 'getFavouriteCharacters?id=' + id).then(
        function (res) {
          page.characters = []
          page.charPage = 0
          let content = res.body.content
          // divide into x projects to appear in different tabs
          for (let i = 0; i < content.length; i += 4) {
            if (content.length >= 4) {
              page.characters.push(content.slice(i, i + 4))
            } else {
              page.characters.push(content)
            }
          }
          page.displayCharacters = page.characters[page.charPage]
        }
      )
      this.$http.get(this.dbURL + 'getFavouriteMovies?id=' + id).then(
        function (res) {
          page.movies = []
          page.movPage = 0
          let content = res.body.content
          // divide into x projects to appear in different tabs
          for (let i = 0; i < content.length; i += 4) {
            if (content.length >= 4) {
              page.movies.push(content.slice(i, i + 4))
            } else {
              page.movies.push(content)
            }
          }
          page.displayMovies = page.movies[page.movPage]
        }
      )
    } else this.canFollow = false
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Tajawal');
.banan{
  max-width: 25%;
  max-height: 25%;
}
.imagem1{
  max-width: 60%;
  max-height: 60%;
}
.imagem2{
  max-width: 75%;
  max-height: 75%;
}
.righti{
  float: right;
}
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
  background-color:#e1f7d5;
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
  background-color:#e1f7d5;
}
#character_info{
  margin-bottom:10%;
}
</style>
