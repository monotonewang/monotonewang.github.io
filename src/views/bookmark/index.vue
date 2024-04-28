<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import UrlContent from "@/components/UrlContent.vue";
import { copyText } from "@/utils/clipboard";
// import BookMark from "./beans.js"
import { data } from "./data.json"
const router = useRouter();

const list = ref(data)
const checked = ref(false)

onMounted(() => {
    console.log("onMounted");
});

function handleCopyText(val) {
    if (checked.value) {
        window.open(val,'_blank')
    } else {
        copyText(val).then(() => { });
    }
}
</script>

<template>
    <div class="page_self-test">
        <div class="d_top" active-color="white" inactive-color="white" size="17px">
            <van-switch v-model="checked" />
        </div>
        <span v-for="(item, index) in list" :key="index" class="item">
            <span>{{ item.label }}</span>
            <a @click="handleCopyText(item.url)" size="medium">{{ item.url }}</a>
        </span>
    </div>
</template>

<style lang="scss" scoped>
.page_self-test {
    min-height: 100vh;
    width: 100vw;
    padding: 10px;
    background-color: #000000;

    .item {
        display: flex;
        align-items: center;
        // justify-content: flex-start;
        // flex-direction: column;

        span {
            font-size: 12px;
            color: #ebebeb;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            border: 1px solid #ebebeb;
            -webkit-box-orient: vertical;
        }

        a {
            border-radius: 5px;
            border: 1px solid #ebebeb;
            margin-top: 3px;
            margin-bottom: 8px;
            color: #ebebeb;
            padding: 5px;
            // height: 20px;
            display: inline-block;
            margin-left: 10px;
            min-width: 110px;
            margin-bottom: 5px;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            white-space: nowrap;
        }
    }

}
</style>


