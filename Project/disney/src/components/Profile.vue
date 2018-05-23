<template>
<div class="profile">
    <Header></Header>
    <b-container class="profile_con">
        <div id="cover">
            <b-img id="cover_pic" src="https://lorempixel.com/1024/400/" fluid alt="Responsive image" />
            <b-card id="location">
                <h4>Username</h4>
                <h5>
                    <i class="fa fa-location-arrow"></i>
                    City, Country
                </h5>
            </b-card>
        </div>
        <b-row>
            <b-col md="3">
                <b-card id="personal_info">
                    <div id="profile_pic">
                        <b-img src="/static/images/profile_pic.jpg" fluid alt="Responsive image" />
                    </div>
                    <div id="button">
                        <b-button id="follow" href="#" >+ Follow</b-button>
                    </div>
                    <h6 class="main_text">About</h6>
                    <p>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <h6 class="main_text">Followers 100 </h6>
                    <h6 class="main_text">Following 100 </h6>
                </b-card>
            </b-col>
            <b-col id="disney_info" md="8">
            <h4>Favourite Films</h4>
            <b-card id="film_info">
                <b-row>
                    <b-col>
                            <b-img src="/static/images/film.jpeg" fluid alt="Responsive image" />
                    </b-col>
                    <b-col>
                            <b-img src="/static/images/film.jpeg" fluid alt="Responsive image" />
                    </b-col>
                    <b-col>
                            <b-img src="/static/images/film.jpeg" fluid alt="Responsive image" />
                    </b-col>
                    <b-col>
                            <b-img src="/static/images/film.jpeg" fluid alt="Responsive image" />
                    </b-col>
                </b-row>
            </b-card>
            <h4>Favourite Characters</h4>
            <b-card id="character_info">
                <b-row>
                    <b-col>
                            <b-img src="/static/images/film.jpeg" fluid alt="Responsive image" />
                    </b-col>
                    <b-col>
                            <b-img src="/static/images/film.jpeg" fluid alt="Responsive image" />
                    </b-col>
                    <b-col>
                            <b-img src="/static/images/film.jpeg" fluid alt="Responsive image" />
                    </b-col>
                    <b-col>
                            <b-img src="/static/images/film.jpeg" fluid alt="Responsive image" />
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
}
#location{
  padding-bottom:0px;
  background-color: transparent;
  border: none;
  left: 35%;
  top: 35%;
  position: absolute;
}
#location h4, h5 {
  font-weight: bold;
}
#personal_info{
   top: -20%;
   left: 7%;
   height: 70%;
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
