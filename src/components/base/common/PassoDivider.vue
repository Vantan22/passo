<template>
  <div class="passo-divider" :style="padding"></div>
</template>

<script>
export default {
  props: {
    padding: {
      type: String,
      default: "0 32px",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/common/css/variables_color";
.passo-divider {
  width: 100%;
  height: 1px;
  background-color: $neutral-color-200;
}
</style>
