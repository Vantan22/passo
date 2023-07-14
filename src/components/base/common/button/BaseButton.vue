<script>
export default {
  name: "BaseButton",
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
      this.$emit("button-clicked", this.id);
    },
  },
};
</script>

<template>
  <div class="base-button" @click="onClickButton">
    <div
        :class="['base-button-inner', { active: isActive }]"
        :style="{ fontWeight: fontWeight }"
    >
      {{ buttonName }}
    </div>
  </div>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 28px;
  cursor: pointer;

  .base-button-inner {
    color: #2c3e50;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
  }

  .base-button-inner.active {
    color: #ff0000;
  }
}

/* CSS cho màn hình tablet (>= 768px) */
@media screen and (max-width: 1279px) {
  .base-button {
    padding: 10px 16px;
    border-radius: 20px;

    div {
      font-size: 14px;
      line-height: 20px; /* 150% */
    }
  }
}

/* CSS cho màn hình mobile (<= 368px) */
@media screen and (max-width: 767px) {
  .base-button {
    padding: 8px 12px;
    border-radius: 16px;

    div {
      font-size: 12px;
      line-height: 16px; /* 150% */
    }
  }
}
</style>
