<template>
  <div>
      <div id="wrapper">
      <!-- Sidebar -->
      <sidebar />
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <navbar />
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">

              <div class="card shadow mb-4">
              
              <div class="card-body">


                  <div class="row justify-content-center mb-4">
                      <div class="col-sm-3 justify-content-center ">
                  <b-img thumbnail width="200" class="mx-auto" src="https://www.freeiconspng.com/uploads/profile-icon-9.png" rounded="circle" alt="Circle image"></b-img>
                      </div></div>
                  <b-row class="mt-2" >
                  <b-col sm="4">
                    <span> Username : </span>
                  </b-col>
                  <b-col sm="8">
                    <span>{{userProfile.username}}</span>
                  </b-col>
                </b-row>

                <b-row class="mt-2" >
                  <b-col sm="4">
                    <span> Full Name : </span>
                  </b-col>
                  <b-col sm="8">
                    <span>{{userProfile.fullname}}</span>
                  </b-col>
                </b-row>


              </div>
              </div>


          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import sidebar from "@/components/sidebar.vue";
import axios from "axios";
export default {
    name:'profile',
    components:{
        navbar,
        sidebar

    },
    data(){
        return{
            userProfile:[]
        }
    },
  mounted(){
 axios.get('/users/me?token=fc3c199dfcd6c8473b327efd93e00371519999be91017c4e8e0cea4c',{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    .then((response) => {
        this.userProfile=response.data.data
      console.log(response.data.data)
      // this.token=response.data.data.token
      })


      if (!localStorage.getItem('name')) {
          this.$router.push(this.$route.query.redirect || '/');
      }
  }


}
</script>

<style>

</style>