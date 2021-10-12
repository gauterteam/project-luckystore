<template>
  <router-view></router-view>
</template>

<script>
import TheHeader from '@/components/Header.vue'
import TheNavbar from '@/components/Navbar.vue'
import TheCard from '@/components/Card.vue'
import TheFooter from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheNavbar,
    TheCard,
    TheFooter
  }
}
</script>

<style lang="scss">

</style>