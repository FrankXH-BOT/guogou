<template>
  <div></div>
</template>

<script>
import uri from "@/config/uri"
  export default {
      created() {
          this.$http.post(uri.getdetail, "goods_id=615370&common_id=336517").then(ret=>{
              console.log(ret);
          })
      }
  };
</script>
