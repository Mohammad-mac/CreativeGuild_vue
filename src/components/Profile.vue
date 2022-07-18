<template>
  <b-container class="containers">
    <div class="header">
      <span>
        <b-img
          id = rounded
          :src="profileDetails.profile_picture"
          class="profile-Img"
          alt="Image 1"
        ></b-img>
        <span>
          <b-row class="profile-info">
            <b-col>
              <h4><strong>{{profileDetails.name}} </strong></h4>
              <h6>Bio</h6>
              <p>
                {{profileDetails.bio}}
              </p>
            </b-col>
            <b-col class="personal-info">
              <div id="detail">
                <p>Phone</p> 
                <p class="record1">{{profileDetails.phone}}</p>
                <p>Email</p> 
                <p class="record2">{{profileDetails.email}}</p>
              </div>
            </b-col>
          </b-row>
        </span>
      </span>
    </div>
    <div class="album">
      <b-row>
        <b-col sm="4" v-for="data in profileDetails.album" :key="data.id">
          <b-card
            :title="data.title"
            :img-src="data.img"
            img-alt="Image"
            img-top
            tag="album"
            style="max-width: 40rem"
            class="mb-4"
          >
            <b-card-text>
              {{data.description}}
            </b-card-text>

            <p class="date">{{data.date}} 
              <span class="heart" v-if = 'data.featured' >&#x2764;&#xfe0f;</span>
              <span class="heart" v-else >&#x1f90d;</span>
            </p>
          </b-card>
        </b-col>
        
      </b-row>
    </div>
  </b-container>
</template>

<script>

import {getProfileDetails} from "../services/user.service"
export default {
  name: "Profile",
  props: {
    msg: String,
  },
  data(){
    return{
    profileDetails: []
    }
  },
  created(){
    getProfileDetails().then(res=>{
      this.profileDetails = res
    }).catch(ex=>{
      this.profileDetails = [];
       console.log(ex);
    })
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: relative;
  display: flex;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.50rem;
  margin-top: 70px !important;
  margin-right:40px;
  margin-left: -15px;
  width: 94rem;
}
#rounded {
  border-radius: 9.25rem !important;
  margin-left: 40px;
  margin-top: 40px;
  max-width: fit-content;
}
.album {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 125px;
  width : 110%;
}
.profile-info {
  display: flex;
  float: right;
  margin-top: 10px;
  margin-left: 10px;
  border-right:500px;
}
.date {
  margin-left: 300px;
  display: inline;
}
.heart {
  display: inline;
  margin-right: 185px;
  margin-top: 10px;
}
.personal-info{
  width: 50rem;
  margin-left: 550px;
  margin-right: 50px;
}
.record1{
  padding-top: 2px;
  /* padding-bottom: 1px; */
  color:red;
}
.record2{
  /* padding-top: 2px; */
  padding-bottom: 1px;
  color:red;
}
.profile-Img{ width: 200px; height: 200px;}
.containers{
  margin-left:1350px;
}
#detail{
  border:40px;
  margin-left: 13rem;
  margin-top: auto;
}
</style>
