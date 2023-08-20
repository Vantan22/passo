<template>
  <section id="banner" class="banner">
    <passo-wrapper-basic padding="60px 112px">
      <div class="banner__content">
        <div class="banner__content__info">
          <div class="banner__content__info__content">
            <h2 class="banner__content__info__content__title">
              Thiết kế gian hàng cho sàn thương mại điện tử Shopee, Tiki,
              Lazada, ...
            </h2>
            <span class="banner__content__info__content__desc"
              >Không chỉ là ấn phẩm thiết kế, Passo mang đến sự sáng tạo, đột
              phá và đổi mới trong từng sản phẩm.</span
            >
            <base-button-primary button-name="Liên hệ ngay" />
          </div>
        </div>
        <div class="banner__content__pic">
          <img
            :src="heroBannerImage"
            alt=""
            class="banner__content__pic__banner"
          />
        </div>
      </div>
    </passo-wrapper-basic>
  </section>
</template>

<script>
import PassoWrapperBasic from "@/components/base/common/PassoWapperBasic.vue";
import heroBannerImage from "@/assets/pic_home/hero_banner.svg";
import BaseButtonPrimary from "@/components/base/common/button/BaseButtonPrimary.vue";
export default {
  components: { BaseButtonPrimary, PassoWrapperBasic },
  data() {
    return {
      heroBannerImage: heroBannerImage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/common/css/variables_color";
.banner {
  .banner__content {
    @include flex-gap(32px);
    align-items: center;
    &__info {
      width: calc(100% - 592px - 32px);
      &__content {
        @include flex-gap(0, 48px, column);
        align-items: flex-start;
        &__title {
          @include text-config(48px, 700, 60px, $neutral-color-800);
          letter-spacing: -1.2px;
        }
        &__desc {
          @include text-config(18px, 400, 28px, $neutral-color-600);
        }
      }
    }
    &__pic {
      width: 592px;
      height: 420px;
      padding: 21px 80px 60px 80px;
      &__banner {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
  }
}
</style>
