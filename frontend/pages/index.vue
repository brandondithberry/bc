<template>
  <div>
    <section
      :style="{
        background: 'url(//localhost:1337' + homepage.hero.image.url + ')',
        backgroundSize: '',
        backgroundPosition: '',
      }"
      class="banner"
    >
      <div
        class="overlay"
        :style="{
          background:
            'linear-gradient(' +
            homepage.hero.ovTopColor +
            ', ' +
            homepage.hero.ovBottomColor +
            ')',
        }"
      >
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
      <div v-if="homepage.textBox.position === 'left'" class="left">
        <div class="text">
          <h2>{{ homepage.textBox.heading }}</h2>
          <h4>{{ homepage.textBox.body }}</h4>
        </div>
        <div
          :style="{
            background:
              'url(//localhost:1337' + homepage.textBox.image.url + ')',
            backgroundSize: '',
            backgroundPosition: '',
          }"
          class="image"
        ></div>
      </div>
      <div v-else class="right">
        <div
          :style="{
            background:
              'url(//localhost:1337' + homepage.textBox.image.url + ')',
            backgroundSize: '',
            backgroundPosition: '',
          }"
          class="image"
        ></div>
        <div class="text">
          <h2>{{ homepage.textBox.heading }}</h2>
          <h4>{{ homepage.textBox.body }}</h4>
        </div>
      </div>
    </section>
    <section class="grid">
      <div
        v-for="gr in homepage.grid"
        :key="gr.id"
        class="grid-item"
        :style="{
          color: '' + gr.textColor + '',
          background: '' + gr.textBgColor + '',
        }"
      >
        <div class="grid-text">
          <img :src="`//localhost:1337${gr.icon.url}`" width="30%" />
          <h2>{{ gr.title }}</h2>
          <h4>{{ gr.paragraph }}</h4>
        </div>
      </div>
    </section>
    <section
      :style="{
        background: 'url(//localhost:1337' + homepage.cta.image.url + ')',
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
            homepage.cta.ovTopColor +
            ', ' +
            homepage.cta.ovBottomColor +
            ')',
        }"
      >
        <div class="container">
          <h2>{{ homepage.cta.title }}</h2>
          <nuxt-link
            v-for="btn in homepage.cta.buttons"
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
