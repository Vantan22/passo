<script>
export default {
  name: "BaseButtonPrimary",
  data() {
    return {};
  },
  props: {
    buttonName: {
      require: true,
      type: String,
    },
    fontWeight: {
      type: [String, Number],
      default: 600,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
      require: false,
    },
  },
  methods: {
    onClickButton() {
      this.$emit("clicked", this.id);
    },
  },
};
</script>

<template>
  <div class="base-button-primary" @click="onClickButton">
    <div class="base-button-primary-inner" :style="{ fontWeight: fontWeight }">
      {{ buttonName }}
    </div>
  </div>
</template>

<style scoped>
.base-button-primary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .base-button-primary-inner {
    color: #fff;
    gap: 24px;
    cursor: pointer;
    border-radius: 20px;
    background: #ff4c1e;
    /* Body sm/Semibold */
    padding: 10px 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
    user-select: none;
  }
}
</style>
