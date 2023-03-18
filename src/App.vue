<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderView from "./components/HeaderView.vue";
import LeftMenu from "./components/LeftMenu.vue";
</script>

<template>
  <div class="container-wrap">
    <Header-view></Header-view>
    <div class="content-wrap">
      <LeftMenu></LeftMenu>
      <div class="flex-1">
        <RouterView></RouterView>
      </div>
    </div>
  </div>

  <!-- <RouterView /> -->
</template>

<style>
html,
body,
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
.container-wrap {
  max-width: 100vw;
  min-width: 1300px;
  min-height: 100vh;
  background: url(./assets/bg.jpg) 0% 0% / 100% 100% no-repeat;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.content-wrap {
  display: flex;
  flex-grow: 1;
}
.flex-1 {
  flex: 1;
}
</style>
