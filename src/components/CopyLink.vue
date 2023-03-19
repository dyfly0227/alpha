<template>
  <div class="container">
    {{ title }}
    <div class="flex-middle">
      {{ address }}
      <div class="copy-btn" @click="copyText">
        <div class="tip" v-if="!copied">{{ tip }}</div>
        <div class="tip success" v-else>
          <svg
            t="1679232828756"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3721"
            width="16"
            height="16"
          >
            <path
              d="M512 832c-176.448 0-320-143.552-320-320S335.552 192 512 192s320 143.552 320 320-143.552 320-320 320m0-704C300.256 128 128 300.256 128 512s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128"
              p-id="3722"
              fill="rgb(41, 174, 96)"
            ></path>
            <path
              d="M619.072 429.088l-151.744 165.888-62.112-69.6a32 32 0 1 0-47.744 42.624l85.696 96a32 32 0 0 0 23.68 10.688h0.192c8.96 0 17.536-3.776 23.616-10.4l175.648-192a32 32 0 0 0-47.232-43.2"
              p-id="3723"
              fill="rgb(41, 174, 96)"
            ></path>
          </svg>
          {{ success }}
        </div>
        <svg
          t="1679231980586"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2563"
          width="16"
          height="16"
        >
          <path
            d="M928 256H768V96c0-17.066667-14.933333-32-32-32h-640C78.933333 64 64 78.933333 64 96v640c0 17.066667 14.933333 32 32 32H256v160c0 17.066667 14.933333 32 32 32h640c17.066667 0 32-14.933333 32-32v-640c0-17.066667-14.933333-32-32-32zM128 704V128h576v128H288c-17.066667 0-32 14.933333-32 32V704H128z m768 192H320V320h576v576z"
            fill="#ffffff"
            p-id="2564"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";
import useClipboard from "vue-clipboard3";
const { toClipboard } = useClipboard();
const route = useRoute();
const router = useRouter();
const props = defineProps({
  title: String,
  address: String,
  detail: String,
  tip: String,
  success: String,
});
const copyText = async () => {
  await toClipboard(props.detail);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 1000);
};
const copied = ref(false);
onMounted(() => {});
</script>
<style scoped>
.container {
  width: 100%;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  line-height: 50px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  box-sizing: border-box;
  padding: 0 10px;
}
.copy-btn {
  width: 30px;
  height: 30px;
  background: rgb(255, 29, 124);
  border-radius: 6px;
  line-height: 30px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 18px;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  position: relative;
}
.copy-btn:hover {
  transform: scale(1.2);
}
.copy-btn:hover .tip {
  display: flex;
}
.copy-btn .tip {
  position: absolute;
  left: 50%;
  top: -40px;
  line-height: 25px;
  font-size: 12px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  width: 140px;
  margin-left: -70px;
  display: none;
  align-items: center;
  justify-content: center;
}
.copy-btn .tip.success {
  color: rgb(41, 174, 96);
}
</style>
