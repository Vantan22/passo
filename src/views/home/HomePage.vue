<template>
  <div class="home">
    <hero-banner />
    <about-us />
    <service-section />
  </div>
</template>

<script>
import HeroBanner from "@/views/home/component/HeroBanner.vue";
import AboutUs from "@/views/home/component/AboutUs.vue";
import ServiceSection from "@/views/home/component/ServiceSection.vue";

export default {
  components: { ServiceSection, AboutUs, HeroBanner },
};
</script>

<style lang="scss" scoped></style>
