<template>
  <div>
    <section
      :style="{
        background: 'url(//admin.vetsbenefitsconsulting.com' + homepage.hero.image.url + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
      class="banner"
    >
      <div class="overlay">
        <div class="container">
          <h1>
            <b>{{ homepage.hero.title }}</b>
          </h1>
          <nuxt-link
            v-for="btn in homepage.hero.buttons"
            :key="btn.btnText"
            :to="btn.btnLink"
            class="btn"
            tag="a"
            >{{ btn.btnText }}
          </nuxt-link>
        </div>
      </div>
    </section>
    <section
      class="text-box"
      :style="{
        background: '' + homepage.textBox.bgColor + '',
      }"
    >
      <div class="grid g-2">
        <div class="text">
          <h2>{{ homepage.textBox.heading }}</h2>
          <h4>{{ homepage.textBox.body }}</h4>
        </div>
        <div
          :style="{
            background:
              'url(//admin.vetsbenefitsconsulting.com' + homepage.textBox.image.url + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          class="image"
        ></div>
      </div>
    </section>
    <section class="grid g-3">
      <div
        v-for="gr in homepage.grid"
        :key="gr.id"
        class="grid-item"
        :style="{
          color: '' + gr.textColor + '',
          background: '' + gr.bgColor + '',
        }"
      >
        <div class="grid-text">
          <img :src="`//admin.vetsbenefitsconsulting.com${gr.icon.url}`" width="25%" />
          <h2>{{ gr.title }}</h2>
          <h4>{{ gr.paragraph }}</h4>
        </div>
      </div>
    </section>
    <section
      :style="{
        background: 'url(//admin.vetsbenefitsconsulting.com' + global.cta.image.url + ')',
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
