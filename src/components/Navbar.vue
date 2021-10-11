<template>
  <nav class="nav-bar">
    <div class="logo"><router-view to="#"><img src="../assets/Lo-go.png" alt="logo"></router-view></div>

    <ul>
      <li><router-view to="/men"></router-view></li>
      <li><router-view to="/women"></router-view></li>
      <li><router-view to="/sale"></router-view></li>
      <li><router-view to="/info"></router-view></li>
      <li><router-view to="/contact"></router-view></li>
    </ul>

    <div class="search"></div>
    <div class="shopping"></div>
    <div class="profile"></div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style scoped lang="scss">

.nav-bar {
  .logo {
    width: 70px;
    height: 60px;
  }
}

</style>
