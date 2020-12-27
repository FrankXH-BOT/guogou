<template>
  <div>
    <CH></CH>
    <router-view></router-view>
  </div>
</template>

<script>
  import CH from "@/components/CenterHeader";
  export default {
    components: {
      CH,
    },
  };
</script>
