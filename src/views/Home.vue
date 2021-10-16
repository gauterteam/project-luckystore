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
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,regular,500,600,700,800,300italic,italic,500italic,600italic,700italic,800italic);

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // border: 1px solid red;
  font-family: 'Open Sans', sans-serif;
  user-select: none;
  font-weight: 400;
}

main {
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  width: 100%;

  .container {
    width: 940px;
    padding: 26px;
    box-sizing: content-box;

    // @media (max-width: 992px) {
    //   transform: scale(0.76);
    // }

    // @media (max-width: 768px) {
    //   transform: scale(0.56);
    // }
  }
}

.slidebar {
  height: 440px;
  margin-bottom: 40px;
}

</style>
