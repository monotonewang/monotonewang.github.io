<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import PageContent from '@/components/PageContent.vue'
import UrlContent from '@/components/UrlContent.vue'
import { copyText } from "@/utils/clipboard";

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const searchList = ref([]);
const weatherList = ref([]);
const learnList = ref([]);
const playList = ref([]);
const router = useRouter()

searchList.value.push({ url: "https://www.baidu.com/", value: "selfTest" });
searchList.value.push({ url: "https://cn.bing.com/", value: "Bookmark" });

weatherList.value.push({
  url:"https://search.cctv.com/m/search.php?type=video&qtext=%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5",
  value:"CCTV天气预报"
})
weatherList.value.push({
  url: "https://www.tianqi24.com/hangzhou",
  value: "杭州天气预报24小时",
});
weatherList.value.push({
  url: "https://www.tianqi24.com/shangrao",
  value: "上饶天气预报24小时",
});
weatherList.value.push({
  url: "https://zoom.earth/",
  value: "Zoom Earth",
});
weatherList.value.push({
  url: "http://www.wmc-bj.net/publish/Observation/Statellite-Image_2/20a.html",
  value: "Statellite Images",
});
weatherList.value.push({
  url: "http://www.wmc-bj.net/publish/CRA-Reanalysis/2m-Temperature/6-hour/index.html",
  value: "Temperature",
});
weatherList.value.push({
  url: "http://www.wmc-bj.net/publish/observations/asia/dm/weatherchart-h000/basic.html",
  value: "Weather Analysis",
});
weatherList.value.push({
  url: "http://www.wmc-bj.net/publish/observations/north/dm/weatherchart-h000/basic.html",
  value: "Northern Hemisphere",
});
weatherList.value.push({
  url: "http://rsapp.nsmc.org.cn/geofy/?i=0&isPlay=true&speed=5&sat=fy-4a&pro=geos&type=reg_china&band=1&overlay=&x=250000&y=3300000&z=2&area=1&ll=0&county=1&duration=30&interval=1&c=false&cp=0.5&st=&et=&ac=&hide=1&s=1",
  value: "风云四号",
});
weatherList.value.push({
  url: "http://www.nsmc.org.cn/nsmc/cn/home/index.html",
  value: "国家卫星中心",
});
weatherList.value.push({
  url: "http://zj.cma.gov.cn/",
  value: "浙江气象网",
});
weatherList.value.push({
  url:"https://earth.nullschool.net/zh-cn/#current/wind/surface/level/orthographic=-250.82,20.53,386",
  value:"earth地面"
})
weatherList.value.push({
  url:"https://earth.nullschool.net/zh-cn/#current/wind/isobaric/850hPa/orthographic=-250.82,20.53,1010",
  value:"earth850hPa"
})
weatherList.value.push({
  url:"https://earth.nullschool.net/zh-cn/#current/wind/isobaric/500hPa/orthographic=-250.82,20.53,386",
  value:"earth500hpa"
})

playList.value.push({ url: "https://cn.bing.com/search?q=%E6%97%A5%E5%8E%86", value: "日历" });
playList.value.push({ url: "https://m.bilibili.com/", value: "bilibili" });
playList.value.push({ url: "https://m.bilibili.com/search", value: "bilibili-search" });

learnList.value.push({ url: "https://www.wanandroid.com/", value: "WanAndroid" });
learnList.value.push({ url: "https://juejin.cn/", value: "掘金" });


onMounted(() => {
  console.log("onMounted");
});

const settingRef0 = ref(null);
const settingRef1 = ref(null);
const settingRef4 = ref(null);
const settingRef5 = ref(null);

function openAll(){
  settingRef0.value.openUrl();
  settingRef1.value.openUrl();
  settingRef4.value.openUrl();
  settingRef5.value.openUrl();
};
function toDebug(){
  router.push({path:"app"})
}
let getOption = (value)=>{
  console.log("getOption",value)
}
</script>

<template>
  <div class="home">
    <PageContent @option="getOption" :list="searchList" />
    <UrlContent ref="settingRef1"  :list="weatherList" />
    <UrlContent ref="settingRef5"  :list="playList" />
    <UrlContent ref="settingRef4"  :list="learnList" />
    <div class="option">
      <van-button style="color:#253445;" @click="openAll()" color="#65b587" type="success">一键开启所有</van-button>
    </div>
    <div class="option">
      <van-button style="color:#253445;" @click="toDebug()"   color="#65b587" type="success">Debug</van-button>
    </div>
  
  </div>
</template>

<style lang="scss" scoped>
// width: calc(100vw - 25px);
// 101 181 135

.home {
  height: 100vh;
  width: 100vw;
  background-color: #000000;
  .option{
    margin-top: 7px;
    display: flex;
    justify-content: center;
  }
}
// .home {
//   height: 100vh;
//   width: 100vw;
//   background-color: #cce8cf;
//   .option{
//     margin-top: 7px;
//     display: flex;
//     justify-content: center;
//   }
// }
</style>
