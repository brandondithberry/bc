/* eslint-disable vue/no-v-html */
<template>
  <div>
    <section
      :style="{
        background: 'url(//localhost:1337' + page.hero.image.url + ')',
        backgroundSize: '',
        backgroundPosition: '',
      }"
      class="hero"
    >
      <div
        class="overlay"
        :style="{
          background:
            'linear-gradient(' +
            page.hero.ovTopColor +
            ', ' +
            page.hero.ovBottomColor +
            ')',
        }"
      >
        <div class="container">
          <h1>{{ page.title }}</h1>
        </div>
      </div>
    </section>
    <section class="body">
      <div class="container">
        <nuxt-content v-html="content"></nuxt-content>
      </div>
    </section>
    <section
      :style="{
        background: 'url(//localhost:1337' + global.cta.image.url + ')',
        backgroundSize: '',
        backgroundPosition: '',
      }"
      class="cta"
    >
      <div
        class="overlay"
        :style="{
          background:
            'linear-gradient(' +
            global.cta.ovTopColor +
            ', ' +
            global.cta.ovBottomColor +
            ')',
        }"
      >
        <div class="container">
          <h3>{{ global.cta.title }}</h3>
          <nuxt-link
            v-for="btn in global.cta.buttons"
            :key="btn.btnText"
            :to="btn.btnLink"
            class="btn"
            tag="a"
            >{{ btn.btnText }}
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, params, $md }) {
    const matchingpages = await $strapi.find("pages", {
      slug: params.slug,
    });
    return {
      page: matchingpages[0],
      global: await $strapi.find("global"),
      content: $md.render(matchingpages[0].content),
    };
  },
  data() {
    return {
      apiUrl: process.env.strapiBaseUri,
      content: "",
    };
  },
};
</script>
