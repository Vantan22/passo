<template>
  <passo-wrapper-basic>
    <div class="how-to-make-it__wrapper">
      <div class="how-to-make-it-heading">
        <h2 class="how-to-make-it-heading__title">How to make it</h2>
        <h2 class="how-to-make-it-heading__description">Quy trình thực hiện</h2>
      </div>
      <div class="how-to-make-it-content">
        <div
          v-for="card in cards"
          class="how-to-make-it-content__card"
          :key="card.id"
        >
          <div class="how-to-make-it-content__card__step">{{ card.id }}</div>
          <div class="how-to-make-it-content__card__content">
            <div
              class="how-to-make-it-content__card__content__icon"
              :style="{ 'background-color': card.color_icon }"
            >
              <img :src="card.icon" alt="" />
            </div>
            <div class="how-to-make-it-content__card__content__text">
              <h3 class="how-to-make-it-content__card__content__text__title">
                {{ card.title }}
              </h3>
              <p class="how-to-make-it-content__card__content__text__desc">
                {{ card.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </passo-wrapper-basic>
</template>

<script>
import PassoWrapperBasic from "@/components/base/common/PassoWapperBasic.vue";
import { HOW_TO_MAKE_IT_CARD_DATA } from "@/components/modules/how_to_make_it_card.moduls";

export default {
  name: "HowToMakeIt",
  components: { PassoWrapperBasic },
  data() {
    return {
      cards: HOW_TO_MAKE_IT_CARD_DATA,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/common/css/variables_color";

.how-to-make-it__wrapper {
  padding: 60px 0;
  border-radius: 24px;
  border: 2px solid $primary-color-100;
  @include flex-gap(0, 80px, column);
  .how-to-make-it-heading {
    text-align: center;
    &__title {
      @include text-config(16px, 600, 24px, $primary-color-600);
    }
    &__description {
      @include text-config(48px, 700, 60px, $neutral-color-900);
    }
  }
  .how-to-make-it-content {
    @include flex-gap(30px, 30px, row);
    flex-wrap: wrap;
    justify-content: center;
    &__card {
      width: 488px;
      @include flex-gap(24px, 0, row);
      align-items: flex-start;
      &__step {
        width: 62px;
        @include text-config(96px, 400, 96px, $neutral-color-900);
        letter-spacing: -2.4px;
      }
      &__content {
        @include flex-gap(16px, 0, row);
        align-items: flex-start;
        width: 100%;
        &__icon {
          border-radius: 5.333px;
          width: 32px;
          height: 32px;
          padding: 6px;
        }
        &__text {
          @include flex-gap(0, 16px, column);
          &__title {
            @include text-config(24px, 700, 32px, $primary-color-900);
          }
          &__desc {
            @include text-config(18px, 400, 28px, $neutral-color-600);
          }
        }
      }
    }
  }
}
</style>
