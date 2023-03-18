<template>
  <div class="tabs">
    <div
      class="tabs-item"
      @click="tableIndex = 0"
      :class="{ active: tableIndex === 0 }"
    >
      My Trades
    </div>
    <div class="num">0</div>
    <div
      class="tabs-item"
      @click="tableIndex = 1"
      :class="{ active: tableIndex === 1 }"
    >
      Open Orders
    </div>
    <div class="num">0</div>
  </div>
  <div class="trade-info" v-show="tableIndex === 0">
    You don't have any transactions
    <a href="#">Trade Now</a>
  </div>
  <div class="open-order" v-show="tableIndex === 1">
    You don't have any orders
  </div>
  <div class="tabs-item my-lend">My Lending</div>
  <div class="trade-info">
    You don't have any transactions
    <a href="#">Trade Now</a>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const tableIndex = ref(0);
onMounted(() => {});
</script>
<style scoped>
.trade-info {
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  background: hsla(0, 0%, 100%, 0.05);
  border-radius: 8px;
  padding: 0 20px;
  margin-top: 20px;
}
.trade-info a {
  font-size: 16px;
  color: #2172e5;
}
.trade-info a:hover {
  color: #40a9ff;
}
.open-order {
  padding: 40px 0px;
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
}
.tabs {
  display: flex;
  position: relative;
  height: 51px;
  align-items: center;
}
.tabs-item {
  height: 40px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 22px;
  cursor: pointer;
  position: relative;
}
.tabs-item.active {
  color: rgba(255, 255, 255, 0.8);
}
.tabs-item.active::after {
  display: block;
  content: "";
  width: 30px;
  height: 3px;
  border-radius: 2px;
  background: rgb(255, 29, 124);
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -15px;
}
.tabs .num {
  margin: 0px 40px 4px 10px;
  background: hsla(0, 0%, 100%, 0.1);
  border-radius: 4px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  font-size: 14px;
  margin-left: 10px;
  width: 22px;
  height: 22px;
  text-align: center;
}
.tabs-item.my-lend {
  color: rgba(255, 255, 255, 0.8);
  margin-top: 60px;
}
</style>
