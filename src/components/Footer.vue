<template>
  <div class="footer">
    <div class="footer__title">
      <a href="#"><img src="../assets/LogoGreen.png" alt="LogoGreen"></a>
      <h4>You can buy full version here:</h4>
      <a href="https://luckystore.netlify.app/">Lucky Store</a>
    </div>
  </div>
  <div class="web__team">
      <h3>Created by Gauter Team</h3>
    </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}

.footer {
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .footer__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    color: #3c5569;

    a {
      color: #3c5569;
    }

    h4 {
      padding: 10px 0;
    }
  }
}

.web__team {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  background: #3c5569;
  color: #fff;
}
</style>
