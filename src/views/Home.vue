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
  font-family: 'Open Sans', sans-serif;
  user-select: none;
  font-weight: 400;
  // border: 1px solid red;
}

// the-navbar {
//   height: 100%;
// }

main {
  background: #d4d3da;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 800px;

  // @media (max-width: 768px) {
  //   transform: scale(0.9);
  // }

  .container {
    width: 940px;
    padding: 0 26px;
    box-sizing: content-box;
    height: 700px;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #f3f3f3;

    @media (max-width: 992px) {
        height: 90%;
        padding: 0;
      }

      @media (max-width: 768px) {
        padding: 0;
        height: 75%;
      }

      @media (max-width: 576px) {
        height: 50%;
        padding: 0;
      }

    // @media (max-width: 992px) {
    //   transform: scale(0.76);
    // }

    .slidebar {
      height: 440px;
      margin-bottom: 40px;
      width: 100%;

      @media (max-width: 992px) {
        // transform: scale(0.9);
        // height: 396px;
        width: 90%;
        margin-bottom: 30px;
      }

      @media (max-width: 768px) {
        // transform: scale(0.8);
        // height: 352px;
        width: 80%;
        margin-bottom: 20px;
      }

      @media (max-width: 576px) {
        // transform: scale(0.7);
        // height: 308px;
        width: 70%;
        margin-bottom: 10px;
      }
    }

    .shop_cards {
      width: 100%;
      height: 310px;

      @media (max-width: 992px) {
        // transform: scale(0.9);
        // height: 279px;
        width: 90%;
      }

      @media (max-width: 768px) {
        // transform: scale(0.8);
        // height: 248px;
        width: 80%;
      }

      @media (max-width: 576px) {
        // transform: scale(0.7);
        // height: 217px;
        width: 70%;
      }
    }

  }
}

</style>
