<template>
  <div>
    <header>
      <div class="container">
        <div class="nav-logo">
          <nuxt-link to="/" tag="a"
            ><img
              :src="`//admin.vetsbenefitsconsulting.com${global.logo.url}`"
              width="200"
          /></nuxt-link>
        </div>
        <label for="show" class="open-menu">MENU</label
        ><input type="radio" id="show" name="group" />
        <nav class="desktop">
          <ul>
            <li v-for="link in global.HeaderMenu" :key="link.text">
              <nuxt-link :to="link.url" tag="a">{{ link.text }}</nuxt-link>
            </li>
          </ul>
        </nav>
        <nav class="mobile">
          <ul>
            <li v-for="link in global.HeaderMenu" :key="link.text">
              <nuxt-link :to="link.url" tag="a">{{ link.text }}</nuxt-link>
            </li>
            <li>
              <label for="hide" class="close-menu"
                ><span>CLOSE MENU</span></label
              ><input type="radio" id="hide" name="group" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <nuxt />
    <footer>
      <div class="container">
        <nuxt-link to="/" tag="a"
          ><img
            :src="`//admin.vetsbenefitsconsulting.com${global.altLogo.url}`"
            width="220"
        /></nuxt-link>
        <nav>
          <ul>
            <li v-for="link in global.HeaderMenu" :key="link.text">
              <nuxt-link :to="link.url" tag="a">{{ link.text }}</nuxt-link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </nav>
        <h6>Copyright © 2021 - Benefits Consulting</h6>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.global = await this.$strapi.find("global");
  },
  data: function () {
    return {
      global: [],
      showMobileMenu: false,
    };
  },
  watch: {
    $route() {
      this.showMobileMenu = false;
    },
  },
  methods: {
    showMenu() {
      this.$emit("showMobileMenu");
    },
    closeMenu() {
      this.$emit("closeMobileMenu");
    },
  },
};
</script>
