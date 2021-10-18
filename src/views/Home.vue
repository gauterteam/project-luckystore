<template>
    <the-header></the-header>
    <main>
      <div class="container">
        <the-navbar></the-navbar>
        <div class="slidebar">
          <img src="../assets/2.jpg" v-if="index == 1">
          <img src="../assets/1.jpg" v-if="index == 2">
          <img src="../assets/3.jpg" v-if="index == 3">
          <div class="right-arrow" @click="slideClickRight"><i class="far fa-arrow-alt-circle-right"></i></div>
          <div class="left-arrow" @click="slideClickLeft"><i class="far fa-arrow-alt-circle-left"></i></div>
        </div>
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
  },
  data() {
    return {
      index: 1
    }
  },
  methods: {
    slideClickRight() {
      if (this.index < 3) {
        this.index++
      }
    },
    slideClickLeft() {
      if (this.index > 1) {
        this.index--
      }
    }
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

main {
  background: #d4d3da;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 910px;

  .container {
    width: 940px;
    padding: 0 26px;
    box-sizing: content-box;
    height: 910px;
    display: flex;
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
        height: 60%;
        padding: 0;
      }

    .slidebar {
      height: 440px;
      margin-bottom: 40px;
      width: 100%;
      position: relative;

      .right-arrow {
        position: absolute;
        width: 50px;
        height: 50px;
        // border: 1px solid red;
        right: 40px;
        top: 195px;
        color: white;
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      }

      .left-arrow {
        position: absolute;
        width: 50px;
        height: 50px;
        // border: 1px solid red;
        left: 50px;
        top: 195px;
        color: white;
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 1s ease-in-out;
      }

      @media (max-width: 992px) {
        width: 90%;
        margin-bottom: 30px;
      }

      @media (max-width: 768px) {
        width: 75%;
        margin-bottom: 20px;
      }

      @media (max-width: 576px) {
        width: 60%;
        margin-bottom: 10px;
      }
    }

    .shop_cards {
      width: 940px;
      height: 310px;

      @media (max-width: 992px) {
        height: 90%;
        width: 90%;
      }

      @media (max-width: 768px) {
        height: 75%;
        width: 75%;
      }

      @media (max-width: 576px) {
        height: 60%;
        width: 60%;
      }
    }

  }
}

</style>
