<template>
  <div>
    <header>
      <div class="container">
        <div class="nav-logo">
          <nuxt-link to="/" tag="a"
            ><img :src="`//localhost:1337${global.logo.url}`" width="200"
          /></nuxt-link>
        </div>
        <nav>
          <ul>
            <li v-for="link in global.HeaderMenu" :key="link.text">
              <nuxt-link :to="link.url" tag="a">{{ link.text }}</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <nuxt />
    <footer>
      <div class="container">
        <nuxt-link to="/" tag="a"
          ><img :src="`//localhost:1337${global.logo.url}`" width="140"
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
    };
  },
};
</script>
