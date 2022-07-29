exports.ids = [4];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStrapiMedia; });
function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith("/")) {
    // Prepend Strapi address
    return `${"https://admin.vetsbenefitsconsulting.com"}${url}`;
  } // Otherwise return full URL


  return url;
}

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMetaTags; });
/* harmony import */ var _medias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);

function getMetaTags(seo) {
  const tags = [];

  if (seo.metaTitle) {
    tags.push({
      property: "og:title",
      content: seo.metaTitle
    }, {
      name: "twitter:title",
      content: seo.metaTitle
    });
  }

  if (seo.metaDescription) {
    tags.push({
      name: "description",
      content: seo.metaDescription
    }, {
      property: "og:description",
      content: seo.metaDescription
    }, {
      name: "twitter:description",
      content: seo.metaDescription
    });
  }

  if (seo.shareImage) {
    const imageUrl = Object(_medias__WEBPACK_IMPORTED_MODULE_0__[/* getStrapiMedia */ "a"])(seo.shareImage.url);
    tags.push({
      name: "image",
      content: imageUrl
    }, {
      property: "og:image",
      content: imageUrl
    }, {
      name: "twitter:image",
      content: imageUrl
    });
  }

  if (seo.article) {
    tags.push({
      property: "og:type",
      content: "article"
    });
  }

  tags.push({
    name: "twitter:card",
    content: "summary_large_image"
  });
  return tags;
}

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=1e94cdd4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"hero\""+(_vm._ssrStyle(null,{
      background:
        'url(//admin.vetsbenefitsconsulting.com' + _vm.contact.bgImage.url + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }, null))+"><div class=\"overlay\"><div class=\"container\"><h1>"+_vm._ssrEscape(_vm._s(_vm.contact.title))+"</h1></div></div></section> <section class=\"contact\"><div class=\"container\"><div class=\"grid g-2\"><div><div>"+(_vm._s(_vm.content))+"</div></div></div></div></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=1e94cdd4&

// EXTERNAL MODULE: ./utils/seo.js
var utils_seo = __webpack_require__(29);

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactForm.vue?vue&type=template&id=eb1234ca&
var ContactFormvue_type_template_id_eb1234ca_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',[_vm._ssrNode("<label for=\"email\">Your email address:</label> <input id=\"email\" type=\"email\""+(_vm._ssrAttr("value",(_vm.email)))+"> <label for=\"message\">Message:</label> <textarea id=\"message\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</textarea> <button type=\"submit\" class=\"btn\">\n    Send email\n  </button>")])}
var ContactFormvue_type_template_id_eb1234ca_staticRenderFns = []


// CONCATENATED MODULE: ./components/ContactForm.vue?vue&type=template&id=eb1234ca&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ContactFormvue_type_script_lang_js_ = ({
  data: () => ({
    email: '',
    message: ''
  }),
  methods: {
    send() {
      this.$mail.send({
        from: this.email,
        subject: 'Contact form message',
        text: this.message
      });
    }

  }
});
// CONCATENATED MODULE: ./components/ContactForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactFormvue_type_script_lang_js_ = (ContactFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ContactForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactFormvue_type_script_lang_js_,
  ContactFormvue_type_template_id_eb1234ca_render,
  ContactFormvue_type_template_id_eb1234ca_staticRenderFns,
  false,
  null,
  null,
  "7b863c52"
  
)

/* harmony default export */ var ContactForm = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  components: {
    ContactForm: ContactForm
  },

  async asyncData({
    $strapi,
    $md
  }) {
    const data = await $strapi.find("contact");
    return {
      contact: await $strapi.find("contact"),
      global: await $strapi.find("global"),
      content: $md.render(data.content)
    };
  },

  data() {
    return {
      content: ""
    };
  },

  head() {
    const {
      seo
    } = this.contact;
    const {
      defaultSeo,
      favicon,
      siteName
    } = this.global; // Merge default and article-specific SEO data

    const fullSeo = { ...defaultSeo,
      ...seo
    };
    return {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
      meta: Object(utils_seo["a" /* getMetaTags */])(fullSeo),
      link: [{
        rel: "favicon",
        href: Object(medias["a" /* getStrapiMedia */])(favicon.url)
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/contact.vue





/* normalize component */

var contact_component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "52182c3e"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (contact_component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map