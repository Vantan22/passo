<template>
  <div class="header" :class="PrimaryColor ? 'primary-color' : ''">
    <nav class="navigation">
      <router-link to="/" class="logo">
        <img :src="LogoDefault" alt=""/>
        <span>Passo</span>
        <div>TM</div>
      </router-link>
      <div class="navigation-menu">
        <router-link
            to="/"
            @click="onChangeMenu(false)"
            :class="['menu-text', { 'primary-color': PrimaryColor }]"
        >{{ $t("home_page.menu.menu_home") }}
        </router-link>
        <router-link
            to="/about"
            @click="onChangeMenu(true)"
            :class="['menu-text', { 'primary-color': PrimaryColor }]"
        >{{ $t("home_page.menu.menu_about") }}
        </router-link>
        <router-link
            to="/service"
            @click="onChangeMenu(true)"
            :class="['menu-text', { 'primary-color': PrimaryColor }]"
        >{{ $t("home_page.menu.menu_service") }}
        </router-link>
        <router-link
            to="/product"
            @click="onChangeMenu(true)"
            :class="['menu-text', { 'primary-color': PrimaryColor }]"
        >{{ $t("home_page.menu.menu_product") }}
        </router-link>
        <router-link
            to="/contact"
            @click="onChangeMenu(false)"
            :class="['menu-text', { 'primary-color': PrimaryColor }]"
        >{{ $t("home_page.menu.menu_contact") }}
        </router-link>
      </div>
      <base-button-primary
          :buttonName="$t('home_page.menu.button_title_contact')"
      />
    </nav>
  </div>
</template>

<script>
import BaseButtonPrimary from "@/components/base/common/button/BaseButtonPrimary.vue";

export default {
  data() {
    return {
      LogoDefault: require("@/assets/logo/Color=Default.svg"),
      PrimaryColor: false,
    };
  },
  components: {
    BaseButtonPrimary,
  },
  methods: {
    onChangeMenu(menuTYPE) {
      this.PrimaryColor = menuTYPE;
    },
  },
};
</script>
<style scoped lang="scss">
.header.primary-color {
  background: #2d2382;
  width: 100vw;
  min-height: 128px;
  position: fixed;
}

.navigation {
  display: flex;
  justify-content: space-between;
  min-height: 128px;
  max-width: 1280px;
  align-items: center;
  backdrop-filter: blur(8px);
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 20px;

  .menu-text {
    font-weight: bold;
    color: #111827;
    text-decoration: none;
  }

  .menu-text.primary-color {
    color: white;
  }

  .logo {
    display: flex;
    text-decoration: none;
    //margin-right: 60px;

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
      text-decoration: none;
    }

    a.router-link-exact-active {
      color: #ff4c1e;
    }
  }
}


</style>
