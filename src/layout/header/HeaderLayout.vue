<template>
  <div class="header" :class="['header', { 'primary-color': PrimaryColor }]">
    <passo-wrapper-basic padding="40px 112px">
      <div class="header__wrapper">
        <div class="header__menu">
          <router-link class="header__menu__logo" to="#" alt="Logo Passo">
            <img :src="defaultLogo" alt="" class="header__menu__logo__image" />
            <div class="header__menu__logo__brand-name">
              <div
                class="header__menu__logo__brand-name__text"
                :style="{ color: isChangeWithPrimaryColor }"
              >
                Passo
              </div>
              <div
                class="header__menu__logo__brand-name__trade-mark"
                :style="{ color: isChangeWithPrimaryColor }"
              >
                TM
              </div>
            </div>
          </router-link>
          <nav
            class="header__menu__navigation"
            :class="{ 'primary-color': PrimaryColor }"
          >
            <router-link
              @click="onChangeMenu(false)"
              class="header__menu__navigation__item"
              to="/"
              >Trang chủ
            </router-link>
            <router-link
              @click="onChangeMenu(true)"
              class="header__menu__navigation__item"
              to="/about"
              >Giới thiệu
            </router-link>
            <router-link
              @click="onChangeMenu(true)"
              class="header__menu__navigation__item"
              to="/service"
              >Dịch vụ
            </router-link>
            <router-link
              @click="onChangeMenu(true)"
              class="header__menu__navigation__item"
              to="/product"
              >Sản phẩm
            </router-link>
            <router-link
              @click="onChangeMenu(false)"
              class="header__menu__navigation__item"
              to="/contact"
              >Liên hệ
            </router-link>
          </nav>
        </div>
        <base-button-primary
          button-name="Liên hệ ngay"
          @clicked="() => $router.push('/about')"
        />
      </div>
    </passo-wrapper-basic>
  </div>
</template>

<script>
import PassoWrapperBasic from "@/components/base/common/PassoWapperBasic.vue";
import defaultLogo from "@/assets/logo/default_logo.svg";
import BaseButtonPrimary from "@/components/base/common/button/BaseButtonPrimary.vue";

export default {
  data() {
    return {
      PrimaryColor: false,
      defaultLogo: defaultLogo,
    };
  },
  components: {
    BaseButtonPrimary,
    PassoWrapperBasic,
  },
  computed: {
    isChangeWithPrimaryColor() {
      return !this.PrimaryColor ? "#000000" : "#FFFFFF";
    },
  },
  methods: {
    onChangeMenu(menuTYPE) {
      this.PrimaryColor = menuTYPE;
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/common/css/variables_color";

.header {
  width: 100%;
  backdrop-filter: blur(8px);

  &.primary-color {
    background: $primary-color-900;
  }

  .header__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header__menu {
      @include flex-gap-col(60px);

      &__logo {
        @include flex-gap-col(4px);
        &__image {
          width: 32px;
          height: 32px;
          object-fit: cover;
        }

        &__brand-name {
          display: flex;
          align-items: flex-start;

          &__text {
            @include text-config(24px, 700, 32px);
          }

          &__trade-mark {
            @include text-config(6px, 700, 12px);
          }
          &.primary-color {
          }
        }
      }

      &__navigation {
        @include flex-gap-col(8px);

        &__item {
          @include text-config(16px, 600, 24px);
          padding: 12px 20px;
          color: $neutral-color-900;

          &.router-link-exact-active {
            color: $secondary-color-600;
          }
        }

        &.primary-color {
          .header__menu__navigation__item {
            color: $text-color-logo-white;

            &.router-link-exact-active {
              color: $secondary-color-600;
            }
          }
        }
      }
    }
  }
}
</style>
