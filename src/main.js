import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import App2 from './App2.vue'
import router from './router'
import uni from '@dcloudio/uni-webview-js';
import { Toast } from 'vant';
import VConsole from 'vconsole';
import { createPinia } from 'pinia'
import BaiduMap from 'vue-baidu-map-3x';

// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const vConsole = new VConsole();
// 或者使用配置参数来初始化，详情见文档
// const vConsole = new VConsole({ theme: 'dark' });

const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)


const app = createApp(App2)
app.config.globalProperties.$uni = uni;
app.use(Toast);
app.use(router)
app.use(pinia)
app.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'hGQ3zqi2QE3FfuaMAtZNqkJtLfQRxJqH',
    // v:'2.0',  // 默认使用3.0
    // type: 'WebGL' // ||API 默认API  (使用此模式 BMap=BMapGL)
  });
  
app.mount('#app')
// createApp(Test).mount('#app')
