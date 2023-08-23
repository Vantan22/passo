<template>
  <div class="button-text-with-circle-icon" @click="$emit('clicked')">
    <div
      class="button-text-with-circle-icon__icon"
      :style="{
        padding: paddingIcon,
        borderRadius,
        height: iconSize,
        width: iconSize,
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M12.7444 5.58934C12.419 5.2639 12.419 4.73626 12.7444 4.41083C13.0699 4.08539 13.5975 4.08539 13.923 4.41083L18.923 9.41083C19.2484 9.73626 19.2484 10.2639 18.923 10.5893L13.923 15.5893C13.5975 15.9148 13.0699 15.9148 12.7444 15.5893C12.419 15.2639 12.419 14.7363 12.7444 14.4108L16.3219 10.8334H1.67602C1.21071 10.8334 0.833496 10.4603 0.833496 10.0001C0.833496 9.53983 1.21071 9.16674 1.67602 9.16674H16.3218L12.7444 5.58934Z"
          fill="white"
        />
      </svg>
    </div>
    <div
      class="button-text-with-circle-icon__content"
      :style="{ padding: paddingContent }"
    >
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      require: true,
    },
    paddingIcon: {
      type: String,
      default: "14px",
    },
    borderRadius: {
      type: String,
      default: "24px",
    },
    paddingContent: {
      type: String,
      default: "12px 20px",
    },
    iconSize: {
      type: String,
      default: "48px",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/common/css/variables_color";

.button-text-with-circle-icon {
  display: inline-flex;
  width: fit-content;
  cursor: pointer;

  &__icon {
    background-color: $secondary-color-600;
  }

  &__content {
    @include text-config(16px, 600, 24px, $neutral-color-900);
  }

  &:hover {
    .button-text-with-circle-icon__content {
      color: $secondary-color-600;
    }
  }
}
</style>
