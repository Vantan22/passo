<template>
  <div class="footer">
    <passo-wrapper-basic padding="100px 112px 60px 112px">
      <div class="footer__wrapper">
        <div class="footer__content">
          <div class="footer__content__info">
            <router-link
              class="footer__content__info__logo"
              to="#"
              alt="Logo Passo"
            >
              <img
                :src="defaultLogo"
                alt=""
                class="footer__content__info__logo__image"
              />
              <div class="footer__content__info__logo__brand-name">
                <div class="footer__content__info__logo__brand-name__text">
                  Passo
                </div>
                <div
                  class="footer__content__info__logo__brand-name__trade-mark"
                >
                  TM
                </div>
              </div>
            </router-link>
            <div class="footer__content__info__contact">
              <div>Passo Design Studio</div>
              <div>Email: passo.designstudio@gmail.com</div>
              <div>Phone: +84 833 668 988</div>
            </div>
            <div class="footer__content__info__icon">
              <router-link
                to=""
                class="footer__content__info__icon__facebook"
              />
              <router-link
                to=""
                class="footer__content__info__icon__instagram"
              />
            </div>
          </div>
          <div class="footer__content__menu">
            <div class="footer__content__menu__left">
              <router-link to="/" class="footer__content__menu__left__link"
                >Trang chủ
              </router-link>
              <router-link to="/about" class="footer__content__menu__left__link"
                >Giới thiệu
              </router-link>
              <router-link
                to="/service"
                class="footer__content__menu__left__link"
                >Dịch vụ
              </router-link>
            </div>
            <div class="footer__content__menu__right">
              <router-link
                to="/product"
                class="footer__content__menu__right__link"
                >Dự án
              </router-link>
              <router-link
                to="/contact"
                class="footer__content__menu__right__link"
                >Liên hệ
              </router-link>
            </div>
          </div>
        </div>
        <div class="footer__with-divider">
          <div class="footer__with-divider__divider"></div>
          <div class="footer__with-divider__content">
            Copyright © 2020 Passo.
          </div>
        </div>
      </div>
    </passo-wrapper-basic>
  </div>
</template>

<script>
import PassoWrapperBasic from "@/components/base/common/PassoWapperBasic.vue";
import defaultLogo from "@/assets/logo/default_logo.svg";

export default {
  components: { PassoWrapperBasic },
  data() {
    return {
      defaultLogo: defaultLogo,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/common/css/variables_color";

.footer {
  width: 100%;
  background: $bg-black;
  color: white;

  &__wrapper {
    @include flex-gap(0, 100px, column);

    .footer__content {
      @include flex-gap(240px);
      justify-content: space-between;

      &__info {
        @include flex-gap(0, 32px, column);

        &__logo {
          @include flex-gap(4px);

          &__image {
            @include img(32px, 32px);
          }

          &__brand-name {
            display: flex;
            align-items: flex-start;

            &__text {
              @include text-config(24px, 700, 32px, $text-color-logo-white);
            }

            &__trade-mark {
              @include text-config(6px, 700, 12px, $text-color-logo-white);
            }
          }
        }

        &__contact {
          @include text-config(16px, 400, 24px);
        }

        &__icon {
          @include flex-gap(16px);

          &__facebook {
            @include img(20px, 20px);
            padding: 2px;
            background: url("@/assets/icon/ic_facebook.svg");
          }

          &__instagram {
            @include img(20px, 20px);
            padding: 2px;
            background: url("@/assets/icon/ic_instagram.svg");
          }
        }
      }

      &__menu {
        @include flex-gap(32px);
        align-items: flex-start;

        &__left {
          @include flex-gap(0, 12px, column);

          &__link {
            @include text-config(16px, 500, 24px);
            width: 176px;
            height: 24px;
          }
        }

        &__right {
          @include flex-gap(0, 12px, column);

          &__link {
            @include text-config(16px, 500, 24px);
            width: 176px;
            height: 24px;
          }
        }
      }
    }
    .footer__with-divider {
      @include flex-gap(0, 40px, column);
      &__divider {
        height: 1px;
        width: 100%;
        background: $neutral-color-800;
      }
      &__content {
        @include text-config(14px, 400, 20px);
      }
    }
  }
}
</style>
