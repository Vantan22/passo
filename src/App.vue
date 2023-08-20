<template>
  <header-layout />
  <content-view />
  <footer-layout />
</template>
<script>
import HeaderLayout from "@/layout/header/HeaderLayout.vue";
import FooterLayout from "@/layout/footer/FooterLayout.vue";
import ContentView from "@/layout/content/ContentView.vue";

export default {
  components: {
    ContentView,
    FooterLayout,
    HeaderLayout,
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

a {
  text-decoration: none;
}
</style>
