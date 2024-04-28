<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import * as echarts from "echarts";
const router = useRouter();

// https://echarts.apache.org/handbook/zh/basics/download
// http://localhost:5174/#/car2023

const total = ref(0);
const money = ref("");
const result = ref({
  parking: {
    text: "停车费",
    value: [4, 30, 8, 14, 1.5, 24, 120, 55, 25, 5, 15, 29, 8, 150 ,5, 11],
  },
  oil: {
    text: "油费",
    value: [235.26, 317.31, 298.52, 299.5, 304.5, 256.44, 200, 201.3, 181.3, 180.09, 130.20, 297.33, 90.58, 95,58, 148.97, 125.08, 285.34, 332.66, 137, 186.46],
  },
  insurance: { text: "保险费", value: [3059.98] },
  roadToll: { text: "过路费", value: [108.3, 108.3, 103.25, 97.53, 150, 150, 77.9, 23.61, 103.25, 111.15] },
  use: { text: "汽车用品", value: [36.8, 5.85] },
  fix: { text: "维修费", value: [280] },
});
//total:
const resultStr = ref("");

const option1 = [
  { text: "parking", value: 0 },
  { text: "use", value: 1 },
  { text: "oil", value: 2 },
  { text: "insurance", value: 3 },
  { text: "road", value: 4 },
  { text: "fix", value: 5 },
];
const value1 = ref(0);
let datas = ref([]);

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById("car"));
  var myChartV = echarts.init(document.getElementById("carV"));

  var option;
  var optionV;

  if (result) {
    Object.keys(result.value).forEach((element) => {
      if (element) {
        let value = result.value[element].value;
        let key = result.value[element].text;
        let newValue = 0;
        value.forEach((temp) => {
          newValue += Number(temp);
          console.log("onMounted temp" + temp + "newValue" + newValue);
        });
        datas.value.push({ name: key, value: newValue });
        console.log(
          "Object.keys onMounted element" + element + "value=" + value
        );
      }
    });
    console.log("onMounted newData" + datas);
  }

  console.log("onMounted newData" + datas);
  Object.values(result.value).forEach((element) => {
    if (element) {
      element.value.forEach((temp) => {
        total.value += Number(temp);
      });
    }
  });

  // let datas = [
  //   { value: 1048, name: "Search Engine" },
  //   { value: 735, name: "Direct" },
  //   { value: 580, name: "Email" },
  //   { value: 484, name: "Union Ads" },
  //   { value: 300, name: "Video Ads" },
  // ];

  option = {
    title: {
      text: "Car 2023 COST",
      subtext: "LAVIDA",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "right",
    },
    series: [
      {
        name: "Access x From",
        type: "pie",
        radius: "50%",
        data: datas.value,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  var newKey = datas.value.map((item, index) => {
    console.log(item)
	  return item.name
  })  
  var newValue = datas.value.map((item, index) => {
    console.log(item)
	  return item.value
  })  

  optionV = {
    xAxis: {
      data: newKey
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: newValue
      }
    ]
  };
  // 绘制图表
  myChart.setOption(option);
  myChartV.setOption(optionV);
});

function onSubmit() {
  switch (value1.value) {
    case 0:
      if (!result.value.parking) {
        result.value = Object.assign(result.value, { parking: [] });
      }
      if (Number(money.value) != 0)
        result.value.parking.push(Number(money.value));
      break;
    case 1:
      if (!result.value.use) {
        result.value = Object.assign(result.value, { use: [] });
      }
      if (Number(money.value) != 0) result.value.use.push(Number(money.value));
      break;
    case 2:
      if (!result.value.oil) {
        result.value = Object.assign(result.value, { oil: [] });
      }
      if (Number(money.value) != 0) result.value.oil.push(Number(money.value));
      break;
    case 3:
      if (!result.value.insurance) {
        result.value = Object.assign(result.value, { insurance: [] });
      }
      if (Number(money.value) != 0)
        result.value.insurance.push(Number(money.value));
      break;
    case 4:
      if (!result.value.road) {
        result.value = Object.assign(result.value, { road: [] });
      }
      if (Number(money.value) != 0) result.value.road.push(Number(money.value));
      break;
  }

  resultStr.value = JSON.stringify(result.value);
}

function toDebug() {
  router.push({ path: "app" });
}
</script>

<template>
  <div class="car2023">
    <van-button @click="toDebug">next</van-button>
    <div id="car" style="width:100%;height: 450px"></div>
    <div style="width:100%;overflow:scroll;">
      <div id="carV" style="width:500px;height: 450px"></div>
    </div>
    <p style="color: #65b587; margin: 10px">datas:{{ datas }}</p>
    <p style="color: #65b587; margin: 10px">{{ resultStr }}</p>
    <p style="color: #65b587; margin: 10px">total: {{ total }}</p>
    <van-form @submit="onSubmit">
      <van-cell-group inset class="what">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <van-field v-model="money" name="金额" placeholder="金额" />
        <!-- :rules="[{ required: true, message: '请填写金额' }]" -->
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          style="color: #253445"
          color="#65b587"
          round
          block
          type="success"
          native-type="submit"
        >
          添加
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style lang="scss" scoped>
// 101 181 135

.car2023 {
  height: 100vh;
  width: 100vw;
  // background-color: #000000;
  background-color: white;
  .what {
    display: flex;
    padding: 10px;
    margin: 10px;
    background-color: black;
  }
  .van-form-x {
  }
}
</style>
