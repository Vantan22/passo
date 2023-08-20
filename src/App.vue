<template>
  <header-layout></header-layout>
</template>
<script>
import HeaderLayout from "@/layout/header/HeaderLayout.vue";

export default {
  components: {
    HeaderLayout,
  },
  setup() {},
  created() {
    console.log(navigator.language);
  },
  methods: {},
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #2c3e50;
  font-family: "Inter", sans-serif;
}
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
a {
  text-decoration: none;
}
</style>
