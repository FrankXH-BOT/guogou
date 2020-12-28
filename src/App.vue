<template>
  <div id="app">

    
    <!-- <router-view/> -->
    <router-view></router-view>
    <Footer  v-show="$store.state.isShowFooter" ></Footer>

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
      let city = JSON.parse(localStorage.getItem("city"))
      if(city){
        this.$store.commit("setonecity",city.onecity)
        this.$store.commit("settwocity",city.twocity)
      }else{
        this.$store.commit("setonecity","安徽省")
        this.$store.commit("settwocity","安庆市")
      }
    },
}
</script>
<style lang="scss">

</style>
