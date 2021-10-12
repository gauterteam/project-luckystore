<template>
    <the-header></the-header>
    <main>
      <div class="container">
        <the-navbar></the-navbar>
        <div class="slidebar"></div>
        <div class="shop_cards">
          <the-card></the-card>
        </div>
        <div class="registration"></div>
      </div>
    </main>
    <the-footer></the-footer>
</template>

<script>
import TheHeader from '@/components/Header.vue'
import TheNavbar from '@/components/Navbar.vue'
import TheCard from '@/components/Card.vue'
import TheFooter from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheNavbar,
    TheCard,
    TheFooter
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // border: 1px solid red;
  font-family: 'Open Sans', sans-serif;
}

main {
  background: #f3f3f3;
  display: flex;
  justify-content: center;


  .container {
    width: 940px;
  }
}

</style>