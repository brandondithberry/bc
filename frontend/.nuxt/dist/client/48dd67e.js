(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{346:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(69),n(68);function r(t){return t.startsWith("/")?"".concat("https://admin.vetsbenefitsconsulting.com").concat(t):t}},347:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(346);function o(t){var e=[];if(t.metaTitle&&e.push({property:"og:title",content:t.metaTitle},{name:"twitter:title",content:t.metaTitle}),t.metaDescription&&e.push({name:"description",content:t.metaDescription},{property:"og:description",content:t.metaDescription},{name:"twitter:description",content:t.metaDescription}),t.shareImage){var n=Object(r.a)(t.shareImage.url);e.push({name:"image",content:n},{property:"og:image",content:n},{name:"twitter:image",content:n})}return t.article&&e.push({property:"og:type",content:"article"}),e.push({name:"twitter:card",content:"summary_large_image"}),e}},348:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(3),c=(n(32),n(142),n(47),n(31),n(34),n(58),n(33),n(59),n(347)),l=n(346),m={data:function(){return{email:"",message:""}},methods:{send:function(){this.$mail.send({from:this.email,subject:"Contact form message",text:this.message})}}},d=n(60);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{ContactForm:Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("label",{attrs:{for:"email"}},[t._v("Your email address:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"message"}},[t._v("Message:")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{id:"message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.send.apply(null,arguments)}}},[t._v("\n    Send email\n  ")])])}),[],!1,null,null,null).exports},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$strapi,r=t.$md,e.next=3,n.find("contact");case 3:return data=e.sent,e.next=6,n.find("contact");case 6:return e.t0=e.sent,e.next=9,n.find("global");case 9:return e.t1=e.sent,e.t2=r.render(data.content),e.abrupt("return",{contact:e.t0,global:e.t1,content:e.t2});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{content:""}},head:function(){var t=this.contact.seo,e=this.global,n=e.defaultSeo,r=e.favicon,o=e.siteName,m=v(v({},n),t);return{titleTemplate:"%s | ".concat(o),title:m.metaTitle,meta:Object(c.a)(m),link:[{rel:"favicon",href:Object(l.a)(r.url)}]}}},O=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"hero",style:{background:"url(//admin.vetsbenefitsconsulting.com"+t.contact.bgImage.url+")",backgroundSize:"cover",backgroundPosition:"center"}},[n("div",{staticClass:"overlay"},[n("div",{staticClass:"container"},[n("h1",[t._v(t._s(t.contact.title))])])])]),t._v(" "),n("section",{staticClass:"contact"},[n("div",{staticClass:"container"},[n("div",{staticClass:"grid g-2"},[n("div",[n("div",{domProps:{innerHTML:t._s(t.content)}})])])])])])}),[],!1,null,null,null);e.default=O.exports}}]);