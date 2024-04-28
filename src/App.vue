<template>
  <div>
    <van-button @click="next">next</van-button>
  </div>
</template>
<script setup>
import { ref, readonly } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

function next() {
  router.push({ path: "home" });
}

</script>



<style scoped>

</style>
