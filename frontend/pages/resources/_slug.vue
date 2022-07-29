<template>
  <div>
    <section
      :style="{
        background:
          'url(//admin.vetsbenefitsconsulting.com' + page.image.url + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
      class="hero"
    >
      <div
        class="overlay"
        style="
           {
            background: #000000bb;
          }
        "
      >
        <div class="container">
          <h1>{{ page.title }}</h1>
        </div>
      </div>
    </section>
    <section class="body">
      <div class="container">
        <div class="content">
          <div v-html="content"></div>
        </div>
        <div
          class="download"
          v-for="down in page.downloads"
          :key="down.id"
        >
          <h4><b>{{ down.filename }}</b></h4>
          <a
            class="btn"
            :href="`${down.download}`"
            target="_blank"
          >
            View Resource
          </a>
        </div>
      </div>
    </section>
    <section
      :style="{
        background:
          'url(//admin.vetsbenefitsconsulting.com' + global.cta.image.url + ')',
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
import { getMetaTags } from "~/utils/seo";
import { getStrapiMedia } from "~/utils/medias";

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
  head() {
    const { seo } = this.page;
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
