<script setup lang="ts">
import { ref, computed, watch, reactive } from 'vue'

let price = ref(0);

let person = reactive({
  height:168,
  name:"awang"
})

let m = computed<string>(()=>{
   return `$` + price.value
})

console.log(person)
console.log(person.height)
let height = computed<string>(()=>{
   return  person.height + `cm`
})

let person0 = computed<Object>(()=>{
   return  {
      height:person.height + `cm`,
      name:"awang"+"_computed"
   }
})

setTimeout(()=>{
    price.value=500
},500)

/* watch */
let message = ref({
    nav:{
        bar:{
            name:"hello"
        }
    }
})

watch(message, (newVal, oldVal) => {
    console.log('新的值----', newVal);
    console.log('旧的值----', oldVal);
},{
    immediate:true,
    deep:true
})
setTimeout(()=>{
    message.value.nav.bar.name="hello new"
},500)
/** watch 数组 */
watch([message,price], (newVal, oldVal) => {
    console.log('数组 新的值----', newVal);
    console.log('数组 旧的值----', oldVal);
},{
    immediate:true,
    deep:true
})
</script>

<template>
  <div>
    <span>Computed_Watch</span>
     <div style="text-align:center;padding-top:15rem;">
        <p>price:{{ price }}</p>
        <p>price-m:{{ m }}</p>
        <p>person-height :{{height}}</p>
        <p>person0 :{{person0}}</p>

       <p> watch message:{{message}} </p>
     </div>
  </div>
</template>

<style scoped>

</style>
