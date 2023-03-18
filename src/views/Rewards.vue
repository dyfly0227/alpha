<template>
  <div class="coming">Coming soon...</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
onMounted(() => {});
</script>
<style scoped>
.coming {
  font-size: 16px;
  line-height: 50px;
  color: #fff;
}
</style>
