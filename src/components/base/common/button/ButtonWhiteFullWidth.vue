<template>
  <div
    class="button-white-full-width"
    :class="{ 'is-active': isActive }"
    @click="$emit('clicked')"
  >
    {{ buttonName }}
  </div>
</template>

<script>
export default {
  name: "button-white-full-width",
  props: {
    buttonName: {
      type: String,
      require: true,
    },
    isActive: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/common/css/variables_color";

.button-white-full-width {
  width: 100%;
  border: 1px solid $neutral-color-200;
  background: $neutral-color-50;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  @include text-config(16px, 600, 24px, $neutral-color-900);
  cursor: pointer;
  &:hover {
    background: $neutral-color-100;
  }
}

.is-active {
  background-color: $secondary-color-600;
  @include text-config(16px, 600, 24px, $text-color-logo-white);
  &:hover {
    background: $secondary-color-700;
  }
}
</style>
