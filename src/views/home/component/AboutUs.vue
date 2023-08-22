<template>
  <passo-base-section id-section="about" col-gap="40px" class="about">
    <template v-slot:left>
      <div class="about__info">
        <div class="about__info__section-title">
          <div class="about__info__section-title__text">ABOUT US</div>
          <div class="about__info__section-title__content">
            Chúng tôi là ai?
          </div>
        </div>
        <div class="about__info__description">
          Passo được thành lập năm 2020 với đội ngũ nhân sự nhiều năm kinh
          nghiệm trong lĩnh vực thiết kế. Chúng tôi tin rằng sự sáng tạo trong
          thiết kế sẽ góp phần quan trọng trong việc thu hút khách hàng của bạn
          từ những ấn tượng đầu tiên.
        </div>
        <passo-button-text-with-circle-icon content="Xem thêm" />
      </div>
    </template>
    <template v-slot:right>
      <div class="about__pic">
        <img :src="aboutUsImage" alt="about__pic" class="about__pic__img" />
      </div>
    </template>
  </passo-base-section>
</template>

<script>
import PassoBaseSection from "@/views/home/component/PassoBaseSection.vue";
import aboutUsImage from "@/assets/pic_home/about_us.svg";
import PassoButtonTextWithCircleIcon from "@/components/base/common/button/PassoButtonTextWithCircleIcon.vue";

export default {
  components: { PassoButtonTextWithCircleIcon, PassoBaseSection },
  data() {
    return {
      aboutUsImage: aboutUsImage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/common/css/variables_color";

.about {
  .about__info {
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
