<template>
  <div>
    <section
      :style="{
        background: 'url(//localhost:1337' + contact.bgImage.url + ')',
        backgroundSize: '',
        backgroundPosition: '',
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
            <h4>
              If you want to find out if there are VA Benefits you may be
              entitled to, please feel free to contact us for a free
              consultation.
            </h4>
            <p><b>Phone:</b> (800) 400-2591</p>
            <p><b>Email:</b> info@helpwithbenefits.com</p>
            <p><b>Fax:</b> (888) 201-0091</p>
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
  async asyncData({ $strapi }) {
    return {
      contact: await $strapi.find("contact"),
      global: await $strapi.find("global"),
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
