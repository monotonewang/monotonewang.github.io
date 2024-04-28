<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { copyText } from "@/utils/clipboard";

const router = useRouter();

const list = ref([
  'npm config get registry',
  'C:\Users\fuqingwang\SoftWare\node-v14.21.3-win-x64',
  'C:\Users\fuqingwang\SoftWare\node-v16.20.2-win-x64',
  'npm config set registry https://registry.npmjs.org/',
  'npm config get registry',
])
onMounted(() => {
  console.log("onMounted");
});

function handleCopyText(val) {
  copyText(val).then(() => {});
}
</script>

<template>
  <div class="page_self-test">
    <van-button @click="handleCopyText(item)" size="medium" v-for="(item,index) in list" :key="index" 
      >{{item}}</van-button
    >
  </div>
</template>

<style lang="scss" scoped>
.page_self-test {
  height: 100vh;
  width: 100vw;
  padding: 10px;
  background-color: #000000;
  .van-button{
    margin-left: 10px;
    min-width: 110px;
    margin-bottom: 5px;
  }
}

</style>
