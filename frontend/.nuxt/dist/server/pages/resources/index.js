exports.ids = [7];
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/resources/index.vue?vue&type=template&id=f1df5c74&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"blogs\"><div class=\"container\"><h1>Resources</h1> <div class=\"grid g-3\">"+(_vm._ssrList((_vm.resources),function(resource){return ("<a"+(_vm._ssrAttr("href",("/resources/" + (resource.slug))))+" class=\"card\""+(_vm._ssrStyle(null,{
            background:
              'url(//admin.vetsbenefitsconsulting.com' +
              resource.image.url +
              ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }, null))+"><div class=\"overlay\"><h3>"+_vm._ssrEscape(_vm._s(resource.title))+"</h3></div></a>")}))+"</div></div></section> "),_vm._ssrNode("<section class=\"cta\""+(_vm._ssrStyle(null,{
      background:
        'url(//admin.vetsbenefitsconsulting.com' + _vm.global.cta.image.url + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }, null))+">","</section>",[_vm._ssrNode("<div class=\"overlay\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h3>"+_vm._ssrEscape(_vm._s(_vm.global.cta.title))+"</h3> "),_vm._l((_vm.global.cta.buttons),function(btn){return _c('nuxt-link',{key:btn.btnText,staticClass:"btn",attrs:{"to":btn.btnLink,"tag":"a"}},[_vm._v(_vm._s(btn.btnText)+"\n        ")])})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/resources/index.vue?vue&type=template&id=f1df5c74&

// EXTERNAL MODULE: ./utils/seo.js
var seo = __webpack_require__(29);

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/resources/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var resourcesvue_type_script_lang_js_ = ({
  async asyncData({
    $strapi
  }) {
    return {
      resources: await $strapi.find("resources"),
      global: await $strapi.find("global")
    };
  },

  data() {
    return {
      apiUrl: "https://admin.vetsbenefitsconsulting.com",
      content: ""
    };
  },

  head() {
    const {
      defaultSeo,
      favicon,
      siteName
    } = this.global; // Merge default and resource-specific SEO data

    const fullSeo = { ...defaultSeo
    };
    return {
      titleTemplate: `Resources | ${siteName}`,
      title: "Resources",
      meta: Object(seo["a" /* getMetaTags */])(fullSeo),
      link: [{
        rel: "favicon",
        href: Object(medias["a" /* getStrapiMedia */])(favicon.url)
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/resources/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_resourcesvue_type_script_lang_js_ = (resourcesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/resources/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_resourcesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6fb70af4"
  
)

/* harmony default export */ var resources = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map