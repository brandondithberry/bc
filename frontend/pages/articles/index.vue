<template>
  <div>
    <section class="blogs">
      <div class="container">
        <h1>Articles</h1>
        <div class="grid g-3">
          <a
            class="card"
            v-for="article in articles"
            :key="article.id"
            :style="{
              background:
                'url(//admin.vetsbenefitsconsulting.com' +
                article.image.url +
                ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
            :href="`/articles/${article.slug}`"
          >
            <div class="overlay">
              <h3>{{ article.title }}</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section
      :style="{
        background:
          'url(//admin.vetsbenefitsconsulting.com' + global.cta.image.url + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
      class="cta"
    >
      <div class="overlay">
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
import { getMetaTags } from "~/utils/seo";
import { getStrapiMedia } from "~/utils/medias";

export default {
  async asyncData({ $strapi }) {
    return {
      articles: await $strapi.find("articles"),
      global: await $strapi.find("global"),
    };
  },
  data() {
    return {
      apiUrl: process.env.strapiBaseUri,
      content: "",
    };
  },
  head() {
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
    };

    return {
      titleTemplate: `Articles | ${siteName}`,
      title: "Articles",
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