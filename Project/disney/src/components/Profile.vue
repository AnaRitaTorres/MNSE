<template>
<b-container class="profile">
    <b-row>
        <b-nav type="dark">
            <div>
                <b-img src="https://lorempixel.com/1024/400/" fluid alt="Responsive image" />
            </div>
        </b-nav>
    </b-row>
    <b-row>
        <b-col>
            <b-card id="personal_info">
                <div id="profile_pic">
                    <b-img src="https://lorempixel.com/1024/400/" fluid alt="Responsive image" />
                </div>
                <b-button  class="center" id="follow" href="#" variant="primary">+ Follow</b-button>
                <h6>About</h6>
                <p id="about">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <h6>Followers 100 </h6>
                <h6>Following 100 </h6>
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

#personal_info{
   top: -40%;
   height: 150%;
   width: 30%;
}

#profile_pic{
    padding-bottom: 5%;
    height: 250px;
}
</style>
