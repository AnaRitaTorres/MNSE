<template>
<b-container class="profile">
    <b-row>
        <b-nav id="cover_pic">
            <div>
                <b-img src="https://lorempixel.com/1024/400/" fluid alt="Responsive image" />
            </div>
        </b-nav>
    </b-row>
    <b-row>
        <b-col>
            <b-card id="personal_info">
                <div id="profile_pic">
                    <b-img src="/static/images/profile_pic.jpg" fluid alt="Responsive image" />
                </div>
                <div id="button">
                    <b-button id="follow" href="#" >+ Follow</b-button>
                </div>
                <h6 id="about">About</h6>
                <p>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <h6 id="about">Followers 100 </h6>
                <h6 id="about">Following 100 </h6>
            </b-card>
        </b-col>
        
    </b-row>
</b-container>
</template>

<script>
export default {
}
</script>

<style scoped>
.profile{
    padding: 5%;
}
#cover_pic{
    opacity: 0.5;
}
#personal_info{
   top: -40%;
   left: 5%;
   height: 150%;
   width: 30%;
   background-color:aquamarine;
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
#about{
    padding-left: 6%;
}
</style>
