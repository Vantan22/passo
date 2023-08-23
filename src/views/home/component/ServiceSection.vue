<template>
  <passo-base-section id-section="service" col-gap="40px" class="service">
    <template v-slot:left>
      <div class="service__pic">
        <img :src="serviceImage" alt="service__pic" class="service__pic__img" />
      </div>
    </template>
    <template v-slot:right>
      <div class="service__info">
        <div class="service__info__section-title">
          <div class="service__info__section-title__text">SERVICES</div>
          <div class="service__info__section-title__content">Dịch vụ</div>
        </div>
        <pre class="service__info__description">
Chúng tôi cung cấp dịch vụ

• Thiết kế sàn thương mại điện tử Shopee, Lazada, Tiki, Sendo...
• Thiết kế website thương mại theo yêu cầu
        </pre>
        <passo-button-text-with-circle-icon
          content="Xem thêm"
          @clicked="() => $router.push('/service')"
        />
      </div>
    </template>
  </passo-base-section>
</template>

<script>
import PassoBaseSection from "@/views/home/component/PassoBaseSection.vue";
import serviceImage from "@/assets/pic_home/service.svg";
import PassoButtonTextWithCircleIcon from "@/components/base/common/button/PassoButtonTextWithCircleIcon.vue";
export default {
  components: { PassoButtonTextWithCircleIcon, PassoBaseSection },
  data() {
    return {
      serviceImage: serviceImage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/common/css/variables_color";
.service {
  &__pic {
  }
  .service__info {
    @include flex-gap(0, 32px, column);
    align-items: flex-start;
    &__section-title {
      &__text {
        @include text-config(16px, 600, 24px, $primary-color-600);

        &::selection {
          background-color: $secondary-color-600;
          color: $text-color-logo-white;
        }
      }

      &__content {
        @include text-config(48px, 700, 60px, $neutral-color-900);
        letter-spacing: -1.2px;

        &::selection {
          background-color: $secondary-color-600;
          color: $text-color-logo-white;
        }
      }
    }

    &__description {
      @include text-config(18px, 400, 28px, $neutral-color-600);

      &::selection {
        background-color: $secondary-color-600;
        color: $text-color-logo-white;
      }
    }
  }
}
</style>
