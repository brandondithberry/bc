exports.ids = [6];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/resources/_slug.vue?vue&type=template&id=88bbe3a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"hero\""+(_vm._ssrStyle(null,{
      background: 'url(//admin.vetsbenefitsconsulting.com' + _vm.page.hero.image.url + ')',
      backgroundSize: '',
      backgroundPosition: '',
    }, null))+"><div class=\"overlay\""+(_vm._ssrStyle(null,{
        background:
          'linear-gradient(' +
          _vm.page.hero.ovTopColor +
          ', ' +
          _vm.page.hero.ovBottomColor +
          ')',
      }, null))+"><div class=\"container\"><h1>"+_vm._ssrEscape(_vm._s(_vm.page.title))+"</h1></div></div></section> "),_vm._ssrNode("<section class=\"body\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_c('nuxt-content',{domProps:{"innerHTML":_vm._s(_vm.content)}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/resources/_slug.vue?vue&type=template&id=88bbe3a4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/resources/_slug.vue?vue&type=script&lang=js&
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
    const matchingpages = await $strapi.find("resources", {
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
  }

});
// CONCATENATED MODULE: ./pages/resources/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var resources_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/resources/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resources_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "73244d84"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map