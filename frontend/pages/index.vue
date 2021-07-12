<template>
  <div>
    <section
      :style="{
        background: ' url(//localhost:1337' + homepage.hero.bgImage.url + ')',
        backgroundSize: '',
        backgroundPosition: '',
      }"
      class="banner"
    >
      <div class="overlay">
        <div class="container">
          <h1>{{ homepage.hero.title }}</h1>
          <nuxt-link
            v-for="btn in homepage.hero.buttons"
            :key="btn.text"
            :to="btn.url"
            class="btn"
            tag="a"
            >{{ btn.text }}
          </nuxt-link>
        </div>
      </div>
    </section>
    <section
      v-for="box in homepage.textBox"
      :key="box.id"
      class="text-box"
      :style="{
        background: '' + box.bgColor + '',
      }"
    >
      <div class="container">
        <div v-if="box.position === 'left'" class="left">
          <div class="text">
            <h2>{{ box.heading }}</h2>
            <p>{{ box.body }}</p>
          </div>
          <div class="image">
            <img :src="`//localhost:1337${box.image.url}`" width="100%" />
          </div>
        </div>
        <div v-else class="right">
          <div class="image">
            <img :src="`//localhost:1337${box.image.url}`" width="100%" />
          </div>
          <div class="text">
            <h2>{{ box.heading }}</h2>
            <p>{{ box.body }}</p>
          </div>
        </div>
      </div>
    </section>
    <section></section>
  </div>
</template>

<script>
import { getMetaTags } from "../utils/seo";
import { getStrapiMedia } from "../utils/medias";

export default {
  async asyncData({ $strapi }) {
    return {
      homepage: await $strapi.find("homepage"),
      global: await $strapi.find("global"),
    };
  },
  head() {
    const { seo } = this.homepage;
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      ...seo,
    };

    return {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
};
</script>
