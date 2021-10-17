<template>
  <div class="header">
      <!-- MultiColor Line  -->
    <div class="multiColor">
      <div class="colorline line-1"></div>
      <div class="colorline line-2"></div>
      <div class="colorline line-3"></div>
      <div class="colorline line-4"></div>
      <div class="colorline line-5"></div>
      <div class="colorline line-6"></div>
      <div class="colorline line-7"></div>
      <div class="colorline line-8"></div>
      <div class="colorline line-9"></div>
      <div class="colorline line-10"></div>
      <div class="colorline line-11"></div>
      <div class="colorline line-12"></div>
      <div class="colorline line-13"></div>
      <div class="colorline line-14"></div>
      <div class="colorline line-15"></div>
      <div class="colorline line-16"></div>
    </div>
      <!-- Header Title -->
    <div class="headerTitle">
      <div class="titleBox">
        <img src="../assets/logo.png" alt="BigLogo">
        <h2>Lucky Store</h2>
        <div class="titleLine"></div>
        <h4>E–commerce ui Kit</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped lang="scss">

  $bg-line-1:  #ef8742;
  $bg-line-2:  #e05543;
  $bg-line-3:  #bf4f79;
  $bg-line-4:  #8869ca;
  $bg-line-5:  #2799c9;
  $bg-line-6:  #1bb869;
  $bg-line-7:  #9cbf3e;
  $bg-line-8:  #f6b63a;
  $bg-line-9:  #ef8742;
  $bg-line-10: #e05543;
  $bg-line-11: #bf4f79;
  $bg-line-12: #8869ca;
  $bg-line-13: #2799c9;
  $bg-line-14: #1bb869;
  $bg-line-15: #9cbf3e;
  $bg-line-16: #f6b63a;

.header {
  height: 270px;
  background: #31485b;

  .multiColor {
    display: flex ;
  }

  .colorline {
    height: 4px;
    width: 7%;
  }

  .line-1 {
    width: 1%;
    background: $bg-line-1;
  }

  .line-2 {
    background: $bg-line-2;
  }

  .line-3 {
    background: $bg-line-3;
  }

  .line-4 {
    background: $bg-line-4;
  }

  .line-5 {
    background: $bg-line-5;
  }

  .line-6 {
    background: $bg-line-6;
  }

  .line-7 {
    background: $bg-line-7;
  }

  .line-8 {
    background: $bg-line-8;
  }

  .line-9 {
    background: $bg-line-1;
  }

  .line-10 {
    background: $bg-line-2;
  }

  .line-11 {
    background: $bg-line-3;
  }

  .line-12 {
    background: $bg-line-4;
  }

  .line-13 {
    background: $bg-line-5;
  }

  .line-14 {
    background: $bg-line-6;
  }

  .line-15 {
    background: $bg-line-7;
  }

  .line-16 {
    width: 1%;
    background: $bg-line-8;
  }
}

.headerTitle {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    transform: scale(0.8);
  }

  .titleBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 245px;

    h2 {
      padding: 15px 0 5px;
      text-transform: capitalize;
      font-size: 45px;
      color: #fff;
    }

    .titleLine {
      height: 2px;
      background: #758694;
      width: 245px;
    }

    h4 {
      padding: 10px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 3px;
      color: #fff;
    }
  }

}
</style>
