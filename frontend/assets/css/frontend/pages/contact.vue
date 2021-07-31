<template>
  <div>
    <section
      :style="{
        background:
          'url(//admin.vetsbenefitsconsulting.com' + contact.bgImage.url + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
      class="hero"
    >
      <div class="overlay">
        <div class="container">
          <h1>{{ contact.title }}</h1>
        </div>
      </div>
    </section>
    <section class="contact">
      <div class="container">
        <div class="grid g-2">
          <div>
            <div v-html="content"></div>
          </div>
          <div class="form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getMetaTags } from "../utils/seo";
import { getStrapiMedia } from "../utils/medias";
import ContactForm from "../components/ContactForm";

export default {
  components: {
    ContactForm,
  },
  async asyncData({ $strapi, $md }) {
    const data = await $strapi.find("contact");
    return {
      contact: await $strapi.find("contact"),
      global: await $strapi.find("global"),
      content: $md.render(data.content),
    };
  },
  data() {
    return {
      content: "",
    };
  },
  head() {
    const { seo } = this.contact;
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
