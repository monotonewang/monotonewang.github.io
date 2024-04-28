<script setup>
import { ref,readonly } from 'vue'

const props = defineProps({
  list: {
    type: Array,
    default: null,
  },
})

const showEmit = readonly(false)

const emit = defineEmits(['option'])

defineExpose({
  openUrl,
})

function openUrl() {
  const temp = props.list;
  console.log("openUrl",temp);

  for(let item of temp){
    console.log("openUrl item.url",item.url);
    setTimeout(res=>{
        // let tempWindow = window.open('', '_blank', ''); //打开一个新的空白窗口
        window.open(item.url ,uuid());
        // tempWindow.location.href = item.url;  //对新打开的页面进行重定向
    },500)
    // newWin(item.url,uuid())
    // window.open(item.url);
  }
}

function uuid() {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString(); // blob:https://xxx.com/b250d159-e1b6-4a87-9002-885d90033be3
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf("/") + 1);
}

function newWin(url, id) {
  var a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  a.setAttribute('id', id);
  // 防止反复添加
  if(!document.getElementById(id)) document.body.appendChild(a);
  a.click();
}

</script>

<template>
    <div class="list">
      <a
        v-for="(item, index) in list"
        :key="index"
        class="item"
        :href="item.url"
        target="_blank"
        >{{ item.value }}</a
      >
      <p  v-if="showEmit" @click="emit('option','hello')" style="color:white">test</p>
    </div>
    <div class="line"> </div>
</template>

<style lang="scss" scoped>
.line{
    margin: 0px 10px;
    width: calc(100vw - 20px);
    height: 1px;
    background-color: #c4baba;
}
.list {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    
    padding-right: 0px;
    .item {
      color: #ebebeb;
      padding: 5px;
      // height: 20px;
      display: block;
      margin-top: 3px;
      margin-bottom: 8px;
      justify-content: space-between;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
</style>
