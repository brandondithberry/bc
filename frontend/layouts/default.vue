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
