<template>
  <div class="button-text-with-arrow">
    <div class="button-text-with-arrow__text">{{ buttonName }}</div>
    <div class="button-text-with-arrow__arrow"></div>
  </div>
</template>

<script>
export default {
  name: "button-text-with-arrow",
  props: {
    buttonName: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/common/css/variables_color";

.button-text-with-arrow {
  height: 20px;
  width: 100%;
  @include flex-gap(8px);
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s linear;

  &__text {
    @include text-config(14px, 600, 20px, null);
    color: $neutral-color-600;
  }

  &__arrow {
    width: 20px;
    height: 20px;
    background: url("@/assets/icon/ic_arrow_right_grey.svg") no-repeat;
    background-size: 20px;
  }

  &:hover {
    .button-text-with-arrow__text {
      color: $secondary-color-600;
    }

    .button-text-with-arrow__arrow {
      width: 20px;
      height: 20px;
      background: url("@/assets/icon/ic_arrow_right_orange.svg") no-repeat;
      background-size: 20px;
    }
  }
}
</style>
