<template>
  <div class="home">
    <hero-banner />
    <about-us />
    <service-section />
    <pricing-card :cards="cards" />
  </div>
</template>

<script>
import HeroBanner from "@/views/home/component/HeroBanner.vue";
import AboutUs from "@/views/home/component/AboutUs.vue";
import ServiceSection from "@/views/home/component/ServiceSection.vue";
import PricingCard from "@/components/pricing/component/PricingCard.vue";
import cards from "@/components/pricing/containts";
export default {
  components: { PricingCard, ServiceSection, AboutUs, HeroBanner },
  data() {
    return {
      cards: cards,
    };
  },
};
</script>

<style lang="scss" scoped></style>
