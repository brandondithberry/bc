exports.ids = [2];
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_slug.vue?vue&type=template&id=a8779e8c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"hero\""+(_vm._ssrStyle(null,{
      background:
        'url(//admin.vetsbenefitsconsulting.com' + _vm.page.image.url + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }, null))+"><div class=\"overlay\" style=\"\\n         {\\n          background: #000000bb;\\n        }\\n      \"><div class=\"container\"><h1>"+_vm._ssrEscape(_vm._s(_vm.page.title))+"</h1></div></div></section> <section class=\"body\"><div class=\"container\"><div class=\"content\"><div>"+(_vm._s(_vm.content))+"</div></div></div></section> "),_vm._ssrNode("<section class=\"cta\""+(_vm._ssrStyle(null,{
      background:
        'url(//admin.vetsbenefitsconsulting.com' + _vm.global.cta.image.url + ')',
      backgroundSize: '',
      backgroundPosition: '',
    }, null))+">","</section>",[_vm._ssrNode("<div class=\"overlay\""+(_vm._ssrStyle(null,{
        background:
          'linear-gradient(' +
          _vm.global.cta.ovTopColor +
          ', ' +
          _vm.global.cta.ovBottomColor +
          ')',
      }, null))+">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h3>"+_vm._ssrEscape(_vm._s(_vm.global.cta.title))+"</h3> "),_vm._l((_vm.global.cta.buttons),function(btn){return _c('nuxt-link',{key:btn.btnText,staticClass:"btn",attrs:{"to":btn.btnLink,"tag":"a"}},[_vm._v(_vm._s(btn.btnText)+"\n        ")])})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/articles/_slug.vue?vue&type=template&id=a8779e8c&

// EXTERNAL MODULE: ./utils/seo.js
var utils_seo = __webpack_require__(29);

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_slug.vue?vue&type=script&lang=js&
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


/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $strapi,
    params,
    $md
  }) {
    const matchingpages = await $strapi.find("articles", {
      slug: params.slug
    });
    return {
      page: matchingpages[0],
      global: await $strapi.find("global"),
      content: $md.render(matchingpages[0].content)
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
      seo
    } = this.page;
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
      title: "fullSeo.metaTitle",
      meta: Object(utils_seo["a" /* getMetaTags */])(fullSeo),
      link: [{
        rel: "favicon",
        href: Object(medias["a" /* getStrapiMedia */])(favicon.url)
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/articles/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var articles_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/articles/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  articles_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "782ba78a"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map