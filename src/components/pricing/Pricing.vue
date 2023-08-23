<template>
  <passo-wrapper-basic>
    <pricing-card
      v-for="card in card"
      :key="card.type"
      :card-type="card.type"
      :card-cost="card.price"
      :for-brand="card.desc"
      :card-list-items="card.cardListItems"
    />
  </passo-wrapper-basic>
</template>

<script>
import PricingCard from "@/components/pricing/component/PricingCard.vue";
import PassoWrapperBasic from "@/components/base/common/PassoWapperBasic.vue";

export default {
  name: "pricing-section",
  components: { PassoWrapperBasic, PricingCard },
  props: {
    cards: {
      type: [Object, Array],
    },
  },
};
</script>

<style lang="scss" scoped></style>
