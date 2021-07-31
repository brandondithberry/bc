const strapiBaseUri = process.env.API_URL || "https://admin.vetsbenefitsconsulting.com";

export default {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  poweredByHeader: false,
  target: "server",
  env: {
    strapiBaseUri,
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Arimo",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,600;1,400;1,600&display=swap",
        rel: "stylesheet",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ["@assets/css/main.css"],
  modules: ["@nuxtjs/markdownit", "@nuxtjs/strapi"],
  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: "articles",
        type: "collection",
      },
      {
        name: "categories",
        type: "collection",
      },
      {
        name: "homepage",
        type: "single",
      },
      {
        name: "global",
        type: "single",
      },
    ],
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },
  build: {
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: "empty",
      };
    },
  },
};
