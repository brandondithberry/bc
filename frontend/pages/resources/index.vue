<template>
  <div>
    <section class="blogs">
      <div class="container">
        <h1>Resources</h1>
        <div class="grid g-3">
          <a
            class="card"
            v-for="resource in resources"
            :key="resource.id"
            :style="{
              background:
                'url(//admin.vetsbenefitsconsulting.com' +
                resource.image.url +
                ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
            :href="`/resources/${resource.slug}`"
          >
            <div class="overlay">
              <h3>{{ resource.title }}</h3>
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
      resources: await $strapi.find("resources"),
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

    // Merge default and resource-specific SEO data
    const fullSeo = {
      ...defaultSeo,
    };

    return {
      titleTemplate: `Resources | ${siteName}`,
      title: "Resources",
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