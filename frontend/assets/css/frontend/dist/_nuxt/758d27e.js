(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{340:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(69),n(68);function o(e){return e.startsWith("/")?"".concat("https://admin.vetsbenefitsconsulting.com").concat(e):e}},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(340);function r(e){var t=[];if(e.metaTitle&&t.push({property:"og:title",content:e.metaTitle},{name:"twitter:title",content:e.metaTitle}),e.metaDescription&&t.push({name:"description",content:e.metaDescription},{property:"og:description",content:e.metaDescription},{name:"twitter:description",content:e.metaDescription}),e.shareImage){var n=Object(o.a)(e.shareImage.url);t.push({name:"image",content:n},{property:"og:image",content:n},{name:"twitter:image",content:n})}return e.article&&t.push({property:"og:type",content:"article"}),t.push({name:"twitter:card",content:"summary_large_image"}),t}},343:function(e,t,n){"use strict";n.r(t);var o=n(21),r=n(2),c=(n(29),n(140),n(46),n(30),n(32),n(59),n(31),n(60),n(341)),l=n(340),m=(n(22),n(33),{data:function(){return{loading:!1,success:!1,errored:!1,isBot:!1,name:"",bot:null,email:"",phone:"",message:""}},methods:{sendMessage:function(){var e=this;this.loading=!0,null!=this.bot?this.isBot=!0:this.$http.post("https://admin.vetsbenefitsconsulting.com/messages",{name:this.name,email:this.email,phone:this.phone,message:this.message}).then((function(t){e.success=!0,e.errored=!1})).catch((function(t){e.errored=!0})).finally((function(){e.loading=!1}))}}}),v=n(58);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={components:{ContactForm:Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isBot?n("div",[e._v("\n    Great! You have proven to be a bot! I've destroyed the form from the page,\n    and acted like you successfully sent the form.\n  ")]):n("div",[e.success?n("div",{staticClass:"success"},[e._v("\n      Your message has been sent successfully.\n    ")]):n("form",{on:{submit:function(t){return t.preventDefault(),e.sendMessage.apply(null,arguments)}}},[e.errored?n("div",[e._v("\n        Bummer, Something went wrong. Did you fill out all of the fields?\n      ")]):e._e(),e._v(" "),n("div",[n("label",{attrs:{for:"full_name"}},[e._v("Full name*")]),e._v(" "),n("div",{staticClass:"relative rounded-md shadow-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"full_name",required:"",name:"name",placeholder:"Full name*"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"hidden"},[n("label",[e._v("Don’t fill this out if you're human: ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.bot,expression:"bot"}],attrs:{name:"bot-field",placeholder:"This field is only for the robots."},domProps:{value:e.bot},on:{input:function(t){t.target.composing||(e.bot=t.target.value)}}})]),e._v(" "),n("div",[n("label",{attrs:{for:"email"}},[e._v("Email*")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",required:"",name:"email",type:"email",placeholder:"Email*"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),n("div",[n("label",{attrs:{for:"phone"}},[e._v("Phone")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{id:"phone",name:"phone",placeholder:"Phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})])]),e._v(" "),n("div",[n("label",{attrs:{for:"message"}},[e._v("Message*")]),e._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{id:"message",required:"",name:"message",rows:"4",placeholder:"Message*"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})])]),e._v(" "),n("div",[n("span",[n("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("\n            "+e._s(e.loading?"Sending Message...":"Send")+"\n          ")])])])])])])}),[],!1,null,null,null).exports},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$strapi,t.next=3,n.find("contact");case 3:return t.t0=t.sent,t.next=6,n.find("global");case 6:return t.t1=t.sent,t.abrupt("return",{contact:t.t0,global:t.t1});case 8:case"end":return t.stop()}}),t)})))()},head:function(){var e=this.contact.seo,t=this.global,n=t.defaultSeo,o=t.favicon,r=t.siteName,m=f(f({},n),e);return{titleTemplate:"%s | ".concat(r),title:m.metaTitle,meta:Object(c.a)(m),link:[{rel:"favicon",href:Object(l.a)(o.url)}]}}},_=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"hero",style:{background:"url(//admin.vetsbenefitsconsulting.com"+e.contact.bgImage.url+")",backgroundSize:"cover",backgroundPosition:"center"}},[n("div",{staticClass:"overlay"},[n("div",{staticClass:"container"},[n("h1",[e._v(e._s(e.contact.title))])])])]),e._v(" "),n("section",{staticClass:"contact"},[n("div",{staticClass:"container"},[n("div",{staticClass:"grid g-2"},[e._m(0),e._v(" "),n("div",{staticClass:"form"},[n("ContactForm")],1)])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("\n            If you want to find out if there are VA Benefits you may be\n            entitled to, please feel free to contact us for a free\n            consultation.\n          ")]),e._v(" "),n("h4",[n("b",[e._v("Phone:")]),e._v(" (800) 400-2591")]),e._v(" "),n("h4",[n("b",[e._v("Email:")]),e._v(" info@helpwithbenefits.com")]),e._v(" "),n("h4",[n("b",[e._v("Fax:")]),e._v(" (888) 201-0091")])])}],!1,null,null,null);t.default=_.exports}}]);