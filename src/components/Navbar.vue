<template>
  <nav class="nav-bar">
    <div class="logo"><router-view to="#"><img src="../assets/Lo-go.png" alt="logo"></router-view></div>

    <ul>
      <li><router-link to="/men">Men</router-link></li>
      <li><router-link to="/women">Women</router-link></li>
      <li><router-link to="/sale">Sale!</router-link></li>
      <li><router-link to="/info">Info</router-link></li>
      <li><router-link to="/contact">Contacts</router-link></li>
    </ul>

    <div class="search"><img src="../assets/Search-Icon.png" alt="logo"></div>
    <div class="shopping"><img src="../assets/Shoppin-Cart-Icon.png" alt="logo"></div>
    <div class="profile"><img src="../assets/Profile-Icon.png" alt="logo"></div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style scoped lang="scss">

.nav-bar {
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3c5569;
  border-radius: 5px;
  height: 70px;

  .logo {

    img {
      width: 32px;
      height: 32px;
      margin: 14px 18px 14px 20px;
    }
  }

  ul {
    display: flex;
    align-items: center;
    li {
      list-style-type: none;
      text-transform: uppercase;
      padding: 0 35px;
      font-size: 16px;
      position: relative;

      a {
        color: #fff;
        text-decoration: none;
      }

      &::after {
        content: '';
        background: #324758;
        width: 1px;
        height: 70px;
        position: absolute;
        top: 0px;
        right: 0;
      }

      &::before {
        content: '';
        background: #546a7b;
        width: 1px;
        height: 70px;
        position: absolute;
        top: 0px;
        left: 0;
      }

      &:nth-child(1) {
        padding: 24px 52px 24px 34px;
      }
      &:nth-child(2) {
        padding: 24px 52px 24px 36px;
      }
      &:nth-child(3) {
        padding: 24px 44px 24px 42px;
      }
      &:nth-child(4) {
        padding: 24px 44px 24px 42px;
      }
      &:nth-child(5) {
        padding: 24px 40px 24px 40px;
      }
    }
  }

  .search,
  .shopping,
  .profile {
    padding: 18px;
  }
}

</style>
