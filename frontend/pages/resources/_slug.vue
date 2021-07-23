/* eslint-disable vue/no-v-html */
<template>
  <div>
    <section
      :style="{
        background: 'url(//admin.vetsbenefitsconsulting.com' + page.hero.image.url + ')',
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
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, params, $md }) {
    const matchingpages = await $strapi.find("resources", {
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
