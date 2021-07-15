<template>
  <div class="home">
    
<div class="back-login">


  <div class="login-form">


    <div class="login-content">


      <h3 class="text-center">Welcome to ICP Library</h3>
      <hr />
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" v-model="username" class="form-control" id="username" placeholder="Username">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" v-model="password" id="password" placeholder="Password">
        </div>
        <button type="submit" @click="setLogin" class="btn btn-primary">Login</button>

        


        

      </form>

    </div>


    
  </div>
  
      
     </div>
    
   
  </div>
</template>

<script>
// @ is an alias to /src
// import login from "@/components/login.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    
  },
  data(){
    return{
      username:'',
      password:'',
      token:''
    }
  },
  methods:{
    setLogin(event){
      event.preventDefault()
      
    axios.post('/users/login', 'username='+this.username+'&password='+this.password, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    .then((response) => {
      console.log(response.data)
      // this.token=response.data.data.token
       localStorage.setItem('name',response.data.data.token)
       this.token=localStorage.getItem('name')
    console.log(this.token)
       
      if(response.data.status_code==200) {
    // If not authenticated, add a path where to redirect after login.
    this.$router.push(this.$route.query.redirect || '/dashboard');
  }
    })

  }
    },

    
  }

;
</script>

<style>
.back-login {
  background: #e2e2e2;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}

.login-form {
  width: 400px;
  height: 400px;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  padding: 1em 2em;
  border-bottom: 2px solid #ccc;
  display: table;
}

.login-content {
  display: table-cell;
  vertical-align: middle;
}
</style>

