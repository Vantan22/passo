<template>
  <section :id="idSection">
    <passo-wrapper-basic :padding="paddingWrapper">
      <div class="section__wrapper" :style="{ 'column-gap': colGap }">
        <slot name="left" />
        <slot name="right" />
      </div>
    </passo-wrapper-basic>
  </section>
</template>

<script>
import PassoWrapperBasic from "@/components/base/common/PassoWapperBasic.vue";

export default {
  components: { PassoWrapperBasic },
  props: {
    idSection: {
      type: String,
    },
    paddingWrapper: {
      type: String,
    },
    colGap: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.section__wrapper {
  display: flex;
  align-items: center;
}
</style>
