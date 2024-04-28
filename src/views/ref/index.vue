<script setup lang="ts">
//shallowRef 修改其属性是非响应式的这样是不会改变的
//triggerRef 强制更新页面DOM,这样也是可以改变值的
//reactive 用来绑定复杂的数据类型 例如 对象 数组
//toRaw 将响应式对象转化为普通对象
import { ref, Ref,isRef, shallowRef, triggerRef, reactive, toRef, toRaw, computed } from 'vue'

let message: string = "我是message"

let toRefMessage: Object = {a:1,b:"test"}

let messageRef: Ref<string | number> = ref("我是 ref message")

type Obj = {
  name: string
}

let messageShallowRef: Ref<Obj> = shallowRef({
  name: "小满"
})

let personReactive = reactive({
   name:"小满"
})

let arrayReactive = reactive<string[]>(["足球","篮球","羽毛球"])

const changeMsg = () => {
   message = "我是message change"
}

console.log(isRef(message)); //false
console.log(isRef(messageRef)); //true
console.log(messageRef)

arrayReactive.push("排球");
// arrayReactive  = ["冰球", "曲棍球", "网球"]

setTimeout(()=>{
    // 我们这样操作是无法改变message  的值 应为message 不是响应式的无法被vue 跟踪要改成ref
    changeMsg();
    // messageRef.value = "我是 ref message change"
    messageShallowRef.value.name="我是 shallowRef message change"
    triggerRef(messageShallowRef);
    personReactive.name="小满 Reactive"
    arrayReactive  = ["冰球", "曲棍球", "网球"]//数组异步赋值问题-这样赋值页面是不会变化的因为会脱离响应式
    const arr = ["冰球", "曲棍球", "网球"]
    arrayReactive =[]
    arrayReactive.push(...arr)//无效
},2000)

const toRefMessageAfter: Ref<number> = toRef(toRefMessage, 'a');

toRefMessageAfter.value++

console.log(toRefMessage, toRefMessageAfter);

const rawMessage = toRaw(personReactive)

console.log("rawMessage",rawMessage);

</script>

<template>
  <div>
    <span>Cart</span>
     <div style="text-align:center;padding-top:15rem;">
        <div>{{ message }}</div>
        <p>{{ messageRef }}</p>
        <p>shallowRef:{{ messageShallowRef }}</p>
        <p>Reactive:{{ personReactive }}</p>
        <p>arrayReactive:{{ arrayReactive }}</p>
        <p>toRaw_Message:{{ rawMessage }}</p>
     </div>
  </div>
</template>

<style scoped>

</style>
