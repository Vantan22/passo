<template>
  <passo-wrapper-basic padding="40px 112px">
    <passo-divider margin="0" />
    <div class="our-clients">
      <div class="our-clients__heading">
        <div class="our-clients__heading__title">
          <h2 class="our-clients__heading__title__header">OUR CLIENTS</h2>
          <div class="our-clients__heading__title__text">Khách hàng</div>
        </div>
        <div class="our-clients__heading__description">
          Chúng tôi đã hợp tác với hơn 50 thương hiệu
        </div>
      </div>
      <div class="our-clients__logo__container">
        <div
          class="our-clients__logo__container__logo"
          v-for="logo in LOGO_CLIENTS"
          :key="logo.id"
        >
          <img
            class="our-clients__logo__container__logo__img"
            :src="logo.logo"
            alt=""
          />
        </div>
      </div>
    </div>
    <passo-divider margin="0" />
  </passo-wrapper-basic>
</template>

<script>
import PassoWrapperBasic from "@/components/base/common/PassoWapperBasic.vue";
import { LOGO_CLIENTS } from "@/components/modules/our_clients_logo.modules";
import PassoDivider from "@/components/base/common/PassoDivider.vue";

export default {
  components: { PassoDivider, PassoWrapperBasic },
  data() {
    return {
      LOGO_CLIENTS,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/common/css/variables_color";

.our-clients {
  width: 100%;
  @include flex-gap(32px);
  align-items: center;
  margin: 24px 0;

  &__heading {
    padding: 0 40px;
    flex: 1;
    width: 384px;
    @include flex-gap(32px, null, column);

    &__title {
      &__header {
        @include text-config(16px, 600, 24px, $primary-color-600);
      }
      &__text {
        @include text-config(48px, 700, 60px, $neutral-color-900);
      }
    }
    &__description {
      @include text-config(18px, 400, 28px, $neutral-color-600);
    }
  }
  &__logo__container {
    @include flex-gap(32px, 32px, row);
    flex-wrap: wrap;
    max-width: 800px;
    &__logo {
      width: 176px;
      height: 96px;
      display: flex;
      justify-content: center;
      align-items: center;
      &__img {
        @include img(103px, 32px, contain);
      }
    }
  }
}
</style>
