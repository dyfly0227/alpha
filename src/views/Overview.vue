<template>
  <div class="container">
    <iframe
      src="../../static/index.html"
      frameborder="0"
      width="100%"
      height="2600"
      allowTransparency="true"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
onMounted(() => {});
</script>
<style scoped>
.container {
  padding-right: 15px;
  min-width: 1000px;
}
</style>
