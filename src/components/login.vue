<template>
  <div>
    
     <div class="back-login">


  <div class="login-form">


    <div class="login-content">


      <h3 class="text-center">Welcome to ICP Library</h3>
      <hr />
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Username">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        

      </form>

    </div>


    
  </div>
  
      
     </div>
  </div>
</template>

<script>
export default {
  name: "login",
};
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