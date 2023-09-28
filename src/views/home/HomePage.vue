<template>
  <div class="home">
    <hero-banner />
    <about-us />
    <service-section />
    <pricing-section :cards="dataCard" @changeCard="changeCard" />
    <our-clients />
    <feature-project />
    <how-to-make-it />
  </div>
</template>

<script>
import HeroBanner from "@/views/home/component/HeroBanner.vue";
import AboutUs from "@/views/home/component/AboutUs.vue";
import ServiceSection from "@/views/home/component/ServiceSection.vue";
import PricingSection from "@/components/pricing/Pricing.vue";
import OurClients from "@/components/our_clients/OurClients.vue";
import FeatureProject from "@/components/featured_project/FeatureProject.vue";
import HowToMakeIt from "@/views/home/component/HowToMakeIt.vue";

export default {
  components: {
    HowToMakeIt,
    FeatureProject,
    OurClients,
    PricingSection,
    ServiceSection,
    AboutUs,
    HeroBanner,
  },
  computed: {
    dataCard() {
      return this.$store.state.cards;
    },
  },
  methods: {
    changeCard(payload) {
      this.$store.commit("changeCard", payload);
    },
  },
};
</script>

<style lang="scss" scoped></style>
