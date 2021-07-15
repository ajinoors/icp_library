<template>

  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="/dashboard"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <!-- <i class="fas fa-laugh-wink"></i> -->
        
      </div>
      <div class="sidebar-brand-text mx-3">ICP Library</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
        
      <a class="nav-link active" href="/dashboard">
        <b-icon icon="book" style="color: #ffffff"></b-icon>
        <span class="ml-3">Book List</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <li class="nav-item">
      <a class="nav-link" href="/profile">
        <b-icon icon="person" style="color: #ffffff"></b-icon>
        <span class="ml-3">Profile</span></a>
    </li>

    <!-- Heading -->
    <!-- <div class="sidebar-heading">
                Interface
            </div> -->

    <!-- Nav Item - Utilities Collapse Menu -->

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    

    <!-- Sidebar Message -->
  </ul>

</template>

<script>
export default {
  name: "sidebar",
};
</script>

<style>
</style>