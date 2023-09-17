<template>
  <passo-wrapper-basic>
    <div class="pricing">
      <pricing-card
        v-for="card in cards"
        :key="card.id"
        :id="card.id"
        :card-type="card.type"
        :card-cost="card.price"
        :for-brand="card.desc"
        :card-list-items="card.cardListItems"
        :active="card.active"
        @clicked="$emit('changeCard', $event)"
      />
    </div>
  </passo-wrapper-basic>
</template>

<script>
import PassoWrapperBasic from "@/components/base/common/PassoWapperBasic.vue";
import PricingCard from "@/components/pricing/component/PricingCard.vue";

export default {
  name: "pricing-section",
  components: { PricingCard, PassoWrapperBasic },
  props: {
    cards: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.pricing {
  display: flex;
  justify-content: space-between;
}
</style>
