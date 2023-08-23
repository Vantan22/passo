<template>
  <div class="passo-text-with-icon-check">
    <img :src="isIconShow" alt="" class="passo-text-with-icon-check__icon" />
    <div class="passo-text-with-icon-check__content">{{ content }}</div>
  </div>
</template>

<script>
import ic_check from "@/assets/icon/ic_check.svg";
import ic_close_red from "@/assets/icon/ic_close_red.svg";
export default {
  name: "passo-text-with-icon-check",
  data() {
    return {
      ic_check: ic_check,
      ic_close_red: ic_close_red,
    };
  },
  props: {
    iconType: {
      type: Boolean,
      require: true,
      default: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
  computed: {
    isIconShow() {
      return this.iconType ? this.ic_check : this.ic_close_red;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/common/css/variables_color";
.passo-text-with-icon-check {
  @include flex-gap(8px);
  align-items: flex-start;
  &__icon {
    width: 24px;
    height: 24px;
  }
  &__content {
    width: 304px;
    height: max-content;
    @include text-config(16px, 400, 24px, $neutral-color-900);
  }
}
</style>
