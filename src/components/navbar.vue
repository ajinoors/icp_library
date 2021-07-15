<template>
  <!-- <nav class="bg-light navbar-light">
    <b-navbar toggleable="md">
      <b-navbar-brand href="#">ICP Library</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/dashboard">Home</b-nav-item>
          <b-nav-item to="/dashboard">Profile</b-nav-item>
        </b-navbar-nav>

        
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Sign Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav> -->


                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <!-- <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button> -->

                   

                    <!-- Topbar Search -->
                    <!-- <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form> -->

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">

                        <!-- Nav Item - Messages -->
                        

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          
          <template #button-content>
            <em><b-icon
                                icon="person"
                                style="color: #7952b3"
                              ></b-icon
                            ></em>
          </template>
          <b-dropdown-item href="/profile">Profile</b-dropdown-item>
          <b-dropdown-item @click="setLogOut" >Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>    
                         </li>

                    </ul>

                </nav>
                <!-- End of Topbar -->

               
</template>

<script>
export default {
  name: "navbar",

  methods:{
      setLogOut(){
          localStorage.removeItem('name');
          this.$router.push(this.$route.query.redirect || '/');
      }
  },
  mounted(){
      if (!localStorage.getItem('name')) {
          this.$router.push(this.$route.query.redirect || '/');
      }
  }
};
</script>

<style>
</style>