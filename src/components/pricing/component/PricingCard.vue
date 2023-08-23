<template>
  <div class="pricing-card">
    <div class="pricing-card__prefix">
      <div class="pricing-card__prefix__type">{{ cardType }}</div>
      <div class="pricing-card__prefix__price">
        <div class="pricing-card__prefix__price__cost">{{ cardCost }}</div>
        <div class="pricing-card__prefix__price__for-brand">{{ forBrand }}</div>
      </div>
    </div>
    <passo-divider />
    <div class="pricing-card__suffix">
      <passo-text-with-icon-check
        v-for="(cardList, index) in cardListItems"
        :key="index"
        :icon-type="cardList.interest"
        :content="cardList.content"
      />
    </div>
  </div>
</template>

<script>
import PassoDivider from "@/components/base/common/PassoDivider.vue";
import PassoTextWithIconCheck from "@/components/base/common/PassoTextWithIconCheck.vue";

export default {
  components: { PassoTextWithIconCheck, PassoDivider },
  props: {
    cardType: {
      type: String,
      require: true,
    },
    cardCost: {
      type: String,
      require: true,
    },
    forBrand: {
      type: String,
      require: true,
    },
    cardListItems: {
      type: [Object, Array],
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
