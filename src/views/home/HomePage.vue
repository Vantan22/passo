<template>
  <div class="home">
    <hero-banner />
    <about-us />
  </div>
</template>

<script>
import HeroBanner from "@/views/home/component/HeroBanner.vue";
import AboutUs from "@/views/home/component/AboutUs.vue";

export default {
  components: { AboutUs, HeroBanner },
};
</script>

<style lang="scss" scoped></style>
