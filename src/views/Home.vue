<template>
    <the-header></the-header>
    <main>
      <div class="container">
        <the-navbar></the-navbar>
        <div class="slidebar">
          <div class="slider" id="slider" :style="{transform: `translateX(${index}px)`, transition: `${transition}`}">
            <img src="../assets/2.jpg" class="img-slider">
            <img src="../assets/4.jpg" class="img-slider">
            <img src="../assets/3.jpg" class="img-slider">
          </div>
          <div class="right-arrow" @click="slideClickRight"><i class="fas fa-chevron-right"></i></div>
          <div class="left-arrow" @click="slideClickLeft"><i class="fas fa-chevron-left"></i></div>
          <div class="block-radio">
            <div class="radio-1" v-bind:class="{act: idx == 1}"></div>
            <div class="radio-2" v-bind:class="{act: idx == 2}"></div>
            <div class="radio-3" v-bind:class="{act: idx == 3}"></div>
          </div>
        </div>
        <div class="shop_cards">
          <the-card></the-card>
        </div>
        <div class="registration">
          <div class="commit">
            <div class="text-box">
              <div class="img-box"></div>
              <div class="sub-text">
                I wonder if I've been changed in the night. Let me think. Was I the same when I got up this morning? I almost think I can remember feeling a little different. But if I'm not the same, the next question is 'Who in the world am I?'
              </div>
            </div>
            <div class="user-box">
              <div class="img-text">
                <div class="user-img"></div>
                <div class="user-text">
                  <p>Jack Sparroe</p>
                  <p>New York, USA</p>
                </div>
              </div>
              <div class="etc">
                <router-link to="#">See all reviews</router-link>
              </div>
            </div>
          </div>
          <div class="form">

          </div>
        </div>
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
      index: 0,
      transition: "transform 0.2s ease",
      windowWidth: 0,
      idx: 1
    }
  },
  mounted () {
    this.$nextTick(function() {
      // window.addEventListener('slider', this.getWindowWidth);
      this.getWindowWidth()
    })
  },
  methods: {
    slideClickRight() {
      console.log(this.windowWidth);
      if (this.index === -(this.windowWidth*2) ) {
        this.transition = "none"
        this.index = 0
        this.idx = 1
      } else {
        this.transition = "transform 0.2s ease"
        this.index -= this.windowWidth
        this.idx += 1
      }
    },
    slideClickLeft() {
      if (this.index === 0) {
        this.transition = "none"
        this.index = -(this.windowWidth*2)
        this.idx = 3
      } else {
        this.transition = "transform 0.2s ease"
        this.index += this.windowWidth
        this.idx -= 1
      }
    },
    getWindowWidth() {
      // this.windowWidth = document.documentElement.clientWidth
      this.windowWidth = document.getElementById('slider').clientWidth
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
  border: 1px solid red;
}

main {
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  width: 100%;
  // height: 910px;

  .container {
    width: 940px;
    padding: 0 26px;
    box-sizing: content-box;
    // height: 910px;
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
      overflow: hidden;
      
      .block-radio {
        display: flex;
        width: 50px;
        height: 10px;
        position: absolute;
        bottom: 5%;
        transform: translateX(-50%);
        left: 50%;
        // border: 1px solid red;
        justify-content: space-between;
        align-items: center;

        .radio-1 {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ced3d7;
        }

        .radio-2 {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ced3d7;
        }

        .radio-3 {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ced3d7;
        }

        .act {
          background: #f6b63a;
        }
      }

      .slider {
        display: flex;
        width: 100%;
        height: 100%;

        .img-slider {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }

      .right-arrow {
        position: absolute;
        width: 50px;
        height: 50px;
        // border: 1px solid red;
        right: 5%;
        transform: translateY(-50%);
        top: 50%;
        color: white;
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;

        @media (max-width: 768px) {
          width: 40px;
          height: 40px;
          font-size: 40px;
        }

        @media (max-width: 576px) {
          width: 30px;
          height: 30px;
          font-size: 30px;
        }
      }

      .left-arrow {
        position: absolute;
        width: 50px;
        height: 50px;
        // border: 1px solid red;
        left: 5%;
        transform: translateY(-50%);
        top: 50%;
        color: white;
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;

        @media (max-width: 768px) {
          width: 40px;
          height: 40px;
          font-size: 40px;
        }

        @media (max-width: 576px) {
          width: 30px;
          height: 30px;
          font-size: 30px;
        }
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

    .registration {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .commit {
        .text-box {
          width: 620px;
          height: 120px;
          position: relative;

          .img-box {
            width: 620px;
            height: 143px;
            background: url(../assets/comma.png) no-repeat center / cover;
            // position: absolute;
            // top: 0;
            // left: 0;
          }

          .sub-text {
            width: 100%;
            height: 100%;
            padding: 30px;
            font-size: 15px;
            position: absolute;
            top: 0;
            left: 0;
            color: #aaaaaa;
          }
        }

        .user-box {
          width: 620px;
          // height: 120px;
          display: flex;
          justify-content: space-between;
          margin: 15px 0;

          .img-text {
            display: flex;
            align-items: center;

            .user-img {
              width: 100px;
              height: 100px;
              background: url(../assets/Camera.png);
              margin: 0 15px 0 30px;
            }

            .user-text {
              & p:nth-child(1) {
                font-size: 20px;
              }

              & p:nth-child(2) {
                font-size: 13px;
                color: #aaa;
              }
            }
          }

          .etc {
            a {
              text-decoration: none;
              color: #2799c9;
              font-size: 13px;
            }
          }
        }
      }

      .form {
        width: 300px;
        height: 245px;
      }
    }

  }
}

</style>
