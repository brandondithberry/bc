(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{346:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(69),n(68);function r(t){return t.startsWith("/")?"".concat("https://admin.vetsbenefitsconsulting.com").concat(t):t}},347:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(346);function o(t){var e=[];if(t.metaTitle&&e.push({property:"og:title",content:t.metaTitle},{name:"twitter:title",content:t.metaTitle}),t.metaDescription&&e.push({name:"description",content:t.metaDescription},{property:"og:description",content:t.metaDescription},{name:"twitter:description",content:t.metaDescription}),t.shareImage){var n=Object(r.a)(t.shareImage.url);e.push({name:"image",content:n},{property:"og:image",content:n},{name:"twitter:image",content:n})}return t.article&&e.push({property:"og:type",content:"article"}),e.push({name:"twitter:card",content:"summary_large_image"}),e}},353:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(3),c=(n(32),n(142),n(47),n(31),n(34),n(58),n(33),n(59),n(347)),l=n(346);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$strapi,e.next=3,n.find("homepage");case 3:return e.t0=e.sent,e.next=6,n.find("global");case 6:return e.t1=e.sent,e.abrupt("return",{homepage:e.t0,global:e.t1});case 8:case"end":return e.stop()}}),e)})))()},head:function(){var t=this.homepage.seo,e=this.global,n=e.defaultSeo,r=e.favicon,o=e.siteName,m=v(v({},n),t);return{titleTemplate:"%s | ".concat(o),title:m.metaTitle,meta:Object(c.a)(m),link:[{rel:"favicon",href:Object(l.a)(r.url)}]}}},h=n(60),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"banner",style:{background:"url(//admin.vetsbenefitsconsulting.com"+t.homepage.hero.image.url+")",backgroundSize:"cover",backgroundPosition:"center"}},[n("div",{staticClass:"overlay"},[n("div",{staticClass:"container"},[n("h1",[n("b",[t._v(t._s(t.homepage.hero.title))])]),t._v(" "),t._l(t.homepage.hero.buttons,(function(e){return n("nuxt-link",{key:e.btnText,staticClass:"btn",attrs:{to:e.btnLink,tag:"a"}},[t._v(t._s(e.btnText)+"\n        ")])}))],2)])]),t._v(" "),n("section",{staticClass:"text-box",style:{background:""+t.homepage.textBox.bgColor}},[n("div",{staticClass:"grid g-2"},[n("div",{staticClass:"text"},[n("h2",[t._v(t._s(t.homepage.textBox.heading))]),t._v(" "),n("h4",[t._v(t._s(t.homepage.textBox.body))])]),t._v(" "),n("div",{staticClass:"image",style:{background:"url(//admin.vetsbenefitsconsulting.com"+t.homepage.textBox.image.url+")",backgroundSize:"cover",backgroundPosition:"center"}})])]),t._v(" "),n("section",{staticClass:"grid g-3"},t._l(t.homepage.grid,(function(e){return n("div",{key:e.id,staticClass:"grid-item",style:{color:""+e.textColor,background:""+e.bgColor}},[n("div",{staticClass:"grid-text"},[n("img",{attrs:{src:"//admin.vetsbenefitsconsulting.com"+e.icon.url,width:"25%"}}),t._v(" "),n("h2",[t._v(t._s(e.title))]),t._v(" "),n("h4",[t._v(t._s(e.paragraph))])])])})),0),t._v(" "),n("section",{staticClass:"cta",style:{background:"url(//admin.vetsbenefitsconsulting.com"+t.global.cta.image.url+")",backgroundSize:"cover",backgroundPosition:"center"}},[n("div",{staticClass:"overlay"},[n("div",{staticClass:"container"},[n("h3",[t._v(t._s(t.global.cta.title))]),t._v(" "),t._l(t.global.cta.buttons,(function(e){return n("nuxt-link",{key:e.btnText,staticClass:"btn",attrs:{to:e.btnLink,tag:"a"}},[t._v(t._s(e.btnText)+"\n        ")])}))],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);