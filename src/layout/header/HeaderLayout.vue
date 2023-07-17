<script>
import BaseButtonPrimary from "@/components/base/common/button/BaseButtonPrimary.vue";

export default {
  setup: function () {
    return {
      LogoDefault: require("@/assets/logo/Color=Default.svg"),
      isMenuActive: null,
      buttonMenuName: "Giới Thiệu Ngay",
    };
  },
  components: {
    BaseButtonPrimary,
  },
  methods: {},
};
</script>

<template>
  <nav class="header-menu">
    <router-link to="/" class="logo">
      <img :src="LogoDefault" alt="" />
      <span>Passo</span>
      <div>TM</div>
    </router-link>
    <div class="navigation-menu">
      <router-link to="/">Trang Chủ</router-link>
      <router-link to="/gioi-thieu">Giới Thiệu</router-link>
      <router-link to="/dich-vu">Dịch Vụ</router-link>
      <router-link to="/san-pham">Sản Phẩm</router-link>
      <router-link to="/lien-he">Liên Hệ</router-link>
    </div>
    <base-button-primary :buttonName="$t('message')" />
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  min-height: 128px;
  width: 1280px;
  margin: 0 auto;
  align-items: center;
  backdrop-filter: blur(8px);
  position: sticky;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }

  .logo {
    display: flex;
    margin-right: 60px;

    img {
      margin-right: 4px;
    }

    span {
      // Passo
      color: black;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      word-wrap: break-word;
    }

    div {
      color: black;
      font-size: 6px;
      font-weight: 700;
      line-height: 12px;
      word-wrap: break-word;
    }
  }

  .navigation-menu {
    display: flex;
    gap: 8px;

    a {
      display: flex;
      padding: 12px 20px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
    }

    a.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
