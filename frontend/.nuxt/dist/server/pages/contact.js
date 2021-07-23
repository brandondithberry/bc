exports.ids = [3];
exports.modules = {

/***/ 31:
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMetaTags; });
/* harmony import */ var _medias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);

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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=bc179062&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"hero\""+(_vm._ssrStyle(null,{
      background: 'url(//admin.vetsbenefitsconsulting.com' + _vm.contact.bgImage.url + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }, null))+"><div class=\"overlay\"><div class=\"container\"><h1>"+_vm._ssrEscape(_vm._s(_vm.contact.title))+"</h1></div></div></section> "),_vm._ssrNode("<section class=\"contact\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid g-2\">","</div>",[_vm._ssrNode("<div><h3>\n            If you want to find out if there are VA Benefits you may be\n            entitled to, please feel free to contact us for a free\n            consultation.\n          </h3> <h4><b>Phone:</b> (800) 400-2591</h4> <h4><b>Email:</b> info@helpwithbenefits.com</h4> <h4><b>Fax:</b> (888) 201-0091</h4></div> "),_vm._ssrNode("<div class=\"form\">","</div>",[_c('ContactForm')],1)],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=bc179062&

// EXTERNAL MODULE: ./utils/seo.js
var utils_seo = __webpack_require__(32);

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactForm.vue?vue&type=template&id=100c675d&
var ContactFormvue_type_template_id_100c675d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.isBot)?("<div>\n    Great! You have proven to be a bot! I've destroyed the form from the page,\n    and acted like you successfully sent the form.\n  </div>"):("<div>"+((_vm.success)?("<div class=\"success\">\n      Your message has been sent successfully.\n    </div>"):("<form>"+((_vm.errored)?("<div>\n        Bummer, Something went wrong. Did you fill out all of the fields?\n      </div>"):"<!---->")+" <div><label for=\"full_name\">Full name*</label> <div class=\"relative rounded-md shadow-sm\"><input id=\"full_name\" required=\"required\" name=\"name\" placeholder=\"Full name*\""+(_vm._ssrAttr("value",(_vm.name)))+"></div></div> <div class=\"hidden\"><label>Don’t fill this out if you're human: </label> <input name=\"bot-field\" placeholder=\"This field is only for the robots.\""+(_vm._ssrAttr("value",(_vm.bot)))+"></div> <div><label for=\"email\">Email*</label> <div><input id=\"email\" required=\"required\" name=\"email\" type=\"email\" placeholder=\"Email*\""+(_vm._ssrAttr("value",(_vm.email)))+"></div></div> <div><label for=\"phone\">Phone</label> <div><input id=\"phone\" name=\"phone\" placeholder=\"Phone\""+(_vm._ssrAttr("value",(_vm.phone)))+"></div></div> <div><label for=\"message\">Message*</label> <div><textarea id=\"message\" required=\"required\" name=\"message\" rows=\"4\" placeholder=\"Message*\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</textarea></div></div> <div><span><button type=\"submit\" class=\"btn\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.loading ? "Sending Message..." : "Send")+"\n          ")+"</button></span></div></form>"))+"</div>")))])}
var ContactFormvue_type_template_id_100c675d_staticRenderFns = []


// CONCATENATED MODULE: ./components/ContactForm.vue?vue&type=template&id=100c675d&

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
//
//
//
//
//
//
//
/* harmony default export */ var ContactFormvue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      isBot: false,
      name: "",
      bot: null,
      email: "",
      phone: "",
      message: ""
    };
  },

  methods: {
    sendMessage() {
      this.loading = true;
      /* This is where I check if the bot field has a value. 
         Only bots will fill this out. */

      if (this.bot != null) {
        this.isBot = true;
      } // Otherwise the form will try to go through.
      else {
          this.$http.post("https://admin.vetsbenefitsconsulting.com/messages", {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message
          }).then(response => {
            this.success = true;
            this.errored = false;
          }).catch(error => {
            this.errored = true;
          }).finally(() => {
            this.loading = false;
          });
        }
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
  ContactFormvue_type_template_id_100c675d_render,
  ContactFormvue_type_template_id_100c675d_staticRenderFns,
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
    $strapi
  }) {
    return {
      contact: await $strapi.find("contact"),
      global: await $strapi.find("global")
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