<template>
  <passo-wrapper-basic>
    <div class="featured-project">
      <div class="featured-project__header">
        <div class="featured-project__header__title">FEATURED PROJECTS</div>
        <div class="featured-project__header__subtitle">Sản phẩm nổi bật</div>
      </div>
      <div class="featured-project__images">
        <img
          v-for="project in PROJECT_FEATURES.slice(0, 4)"
          :key="project.id"
          class="featured-project__images__item"
          :alt="project.description"
          :src="project.image"
        />
      </div>
      <button-text-with-arrow button-name="Xem thêm sản phẩm khác" />
    </div>
  </passo-wrapper-basic>
</template>

<script>
import PassoWrapperBasic from "@/components/base/common/PassoWapperBasic.vue";
import ButtonTextWithArrow from "@/components/base/common/button/ButtonTextWithArrow.vue";
import { PROJECT_FEATURES } from "@/components/modules/project_featured.modules";

export default {
  components: { ButtonTextWithArrow, PassoWrapperBasic },
  data() {
    return {
      PROJECT_FEATURES,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/common/css/variables_color";

.featured-project {
  @include flex-gap(null, 80px, column);

  &__header {
    text-align: center;
    &__title {
      @include text-config(16px, 600, 24px, $primary-color-600);
    }
    &__subtitle {
      @include text-config(48px, 700, 60px, $neutral-color-900);
      letter-spacing: -1.2px;
    }
  }
  &__images {
    width: 100%;
    @include flex-gap(32px, 32px, row);
    flex-wrap: wrap;
    &__item {
      width: 592px;
      height: 444px;
      object-fit: cover;
    }
  }
}
</style>
