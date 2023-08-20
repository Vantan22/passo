<template>
  <div class="wrapper" :style="{ padding }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "passo-wrapper-basic",
  props: {
    padding: {
      type: String,
      default: "100px 112px",
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
