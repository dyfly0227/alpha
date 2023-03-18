<template>
  <div class="container">
    <ul>
      <li
        v-for="list of menuList"
        :key="list.name"
        :class="{ active: curPath === list.url }"
        @click="jump(list)"
      >
        {{ list.name }}
      </li>
    </ul>
    <div class="bottom-icons">
      <div>
        <img src="@/assets/icons/b1.png" alt="" />
      </div>
      <div>
        <img src="@/assets/icons/b2.png" alt="" />
      </div>
      <div>
        <img src="@/assets/icons/b3.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const menuList = [
  // {
  //   name: "Market Overview",
  //   url: "",
  // },
  // {
  //   name: "Margin Trade",
  //   url: "",
  // },
  // {
  //   name: "Lend to Earn",
  //   url: "",
  // },
  {
    name: "My Positions",
    url: "position",
  },
  {
    name: "Rewards",
    url: "rewards",
  },
  {
    name: "Staking",
    url: "staking",
  },
  // {
  //   name: "Clans Clash",
  //   url: "",
  // },
  {
    name: "Referral Program",
    url: "referral",
  },
];
const curPath = ref("position");
const jump = (list) => {
  if (list.url !== "") {
    router.push(list.url);
    curPath.value = list.url;
    sessionStorage.setItem("curPath", list.url);
  }
};
onMounted(() => {
  const path = sessionStorage.getItem("curPath");
  if (path) {
    curPath.value = path;
  }
});
onUpdated(() => {});
</script>
<style scoped>
.container {
  width: 280px;
  position: relative;
}
.container li {
  padding-left: 45px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  line-height: 45px;
}
.container li:hover,
.container li.active {
  color: rgb(255, 29, 124);
  cursor: pointer;
}

.bottom-icons {
  position: absolute;
  width: 132px;
  left: 20px;
  bottom: 20px;
  display: flex;
  justify-content: space-around;
}
.bottom-icons div img {
  cursor: pointer;
  width: 22px;
  height: 22px;
}
.bottom-icons div img:hover {
  transform: scale(1.5);
}
</style>
