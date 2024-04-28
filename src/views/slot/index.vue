
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Child from "./components/Child.vue";
// 还有动态name 动态插槽

</script>

<template>
  <div>
    <p>Father</p>
    <Child>
      <template v-slot>
        <div>This is From Father Message</div>
      </template>
       <template #middle>
           <div>This is From middle Message</div>
      </template>
      <template v-slot:footer>
           <div>This is From footer Message</div>
      </template>
    </Child>
  </div>
</template>

<style scoped>
</style>
