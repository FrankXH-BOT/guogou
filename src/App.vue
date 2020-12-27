<template>
  <div id="app">

    
    <!-- <router-view/> -->
    <router-view></router-view>
    <Footer ></Footer>

  </div>
</template>
<script>
    import Footer from "@/components/Navigation/Footer";

export default {
  components: {
        Footer,
        
    },
    created() {
      let jwt = localStorage.getItem('jwt');
      if(jwt) {
        this.$store.commit('setJwt',jwt);
      }
    },
}
</script>
<style lang="scss">

</style>
