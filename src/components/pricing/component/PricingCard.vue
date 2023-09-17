<template>
  <div class="pricing-card">
    <div class="pricing-card__prefix">
      <div class="pricing-card__prefix__header">
        <div
          class="pricing-card__prefix__header__type"
          :class="{ 'pricing-card__prefix__header__type--active': active }"
        >
          <div
            v-if="id === 1 && active"
            class="pricing-card__prefix__header__type__icon--active"
          ></div>
          <div
            v-else-if="id === 1"
            class="pricing-card__prefix__header__type__icon"
          ></div>
          <div class="pricing-card__prefix__header__type__content">
            {{ cardType }}
          </div>
        </div>
        <div class="pricing-card__prefix__header__price">
          <div class="pricing-card__prefix__header__price__cost">
            {{ cardCost }} <span class="currency-unit">vnđ</span>
          </div>
          <div class="pricing-card__prefix__header__price__for-brand">
            {{ forBrand }}
          </div>
        </div>
      </div>
      <passo-divider margin="32px 0" />
      <div class="pricing-card__prefix__content">
        <passo-text-with-icon-check
          v-for="(cardList, index) in cardListItems"
          :key="index"
          :icon-type="cardList.interest"
          :content="cardList.content"
        />
      </div>
    </div>
    <div class="pricing-card__suffix">
      <button-white-full-width
        :is-active="active"
        buttonName="Liên hệ ngay"
        @clicked="onClickButton"
      />
      <button-text-with-arrow
        buttonName="Xem sản phẩm gói này"
        @clicked="onClickButton"
      />
    </div>
  </div>
</template>

<script>
import PassoDivider from "@/components/base/common/PassoDivider.vue";
import ButtonWhiteFullWidth from "@/components/base/common/button/ButtonWhiteFullWidth.vue";
import ButtonTextWithArrow from "@/components/base/common/button/ButtonTextWithArrow.vue";
import PassoTextWithIconCheck from "@/components/base/common/PassoTextWithIconCheck.vue";

export default {
  components: {
    ButtonTextWithArrow,
    ButtonWhiteFullWidth,
    PassoTextWithIconCheck,
    PassoDivider,
  },
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
    active: {
      type: Boolean,
      require: true,
    },
    id: {
      type: Number,
      require: true,
    },
  },
  methods: {
    onClickButton() {
      this.$emit("clicked", this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/common/css/variables_color";

.pricing-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 24px;
  border-radius: 24px;
  border: 2px solid $neutral-color-200;
  width: max-content;
  height: 624px;

  &__prefix {
    display: flex;
    flex-direction: column;

    &__header {
      @include flex-gap(0, 24px, column);

      &__type {
        padding: 4px 8px;
        width: max-content;
        background: $neutral-color-100;
        display: flex;
        column-gap: 4px;
        border-radius: 8px;

        &__icon {
          height: 20px;
          width: 20px;
          background: url("@/assets/icon/ic_live_area_grey.svg") no-repeat;
        }

        &__icon--active {
          height: 20px;
          width: 20px;
          background: url("@/assets/icon/ic_live_area.svg") no-repeat;
        }

        &__content {
          @include text-config(14px, 700, 20px, $neutral-color-600);
        }
      }

      &__type--active {
        background: $secondary-color-50;

        .pricing-card__prefix__header__type__content {
          color: $secondary-color-600;
        }
      }

      &__price {
        @include flex-gap(0, 12px, column);

        &__cost {
          @include text-config(36px, 600, 44px, $neutral-color-900);
          display: flex;
          align-items: flex-start;
          letter-spacing: -0.9px;

          .currency-unit {
            @include text-config(16px, 500, 16px, $neutral-color-600);
          }
        }

        &__for-brand {
          @include text-config(14px, 400, 20px, $neutral-color-600);
        }
      }
    }

    &__content {
      @include flex-gap(0, 12px, column);
      justify-items: flex-start;
    }
  }

  &__suffix {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }
}
</style>
