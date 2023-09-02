<template>
  <div class="home">
    <hero-banner />
    <about-us />
    <service-section />
    <pricing-section :cards="dataCard" />
  </div>
</template>

<script>
import HeroBanner from "@/views/home/component/HeroBanner.vue";
import AboutUs from "@/views/home/component/AboutUs.vue";
import ServiceSection from "@/views/home/component/ServiceSection.vue";
import PricingSection from "@/components/pricing/Pricing.vue";

export default {
  components: { PricingSection, ServiceSection, AboutUs, HeroBanner },
  computed: {
    dataCard() {
      return this.$store.state.cards;
    },
  },
};
</script>

<style lang="scss" scoped></style>
