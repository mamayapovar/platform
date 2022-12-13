/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={73:()=>{document.querySelector(".counter__input")&&function(){const t=document.querySelector(".counter__input"),e=document.querySelector(".counter__btn--plus"),n=document.querySelector(".counter__btn--minus"),i=t.getAttribute("max");t.addEventListener("change",(()=>{t.value>i-1?(t.value=i,e.classList.add("disabled")):e.classList.remove("disabled"),t.value<=1?(t.value=1,n.classList.add("disabled")):n.classList.remove("disabled")})),e.addEventListener("click",(o=>{o.preventDefault();let a=parseInt(t.value);a++,t.value=a,n.classList.remove("disabled"),t.value>i-1?(t.value=i,e.classList.add("disabled")):e.classList.remove("disabled")})),n.addEventListener("click",(i=>{i.preventDefault();let o=parseInt(t.value);o--,t.value=o,e.classList.remove("disabled"),t.value<=1?(t.value=1,n.classList.add("disabled")):n.classList.remove("disabled")}))}()},678:()=>{document.querySelector(".new-recipe-field--time")&&function(){const t=document.querySelector(".new-recipe-field--time"),e=t.querySelector(".new-recipe-field--minutes input"),n=t.querySelector(".new-recipe-field--hours input"),i=e.getAttribute("max"),o=n.getAttribute("max");e.addEventListener("change",(()=>{e.value>i-1?e.value=i:e.value<=0&&(e.value=0)})),n.addEventListener("change",(()=>{n.value>o-1?(n.value=o,e.removeAttribute("required"),e.setAttribute("min","")):n.value>=1?(e.removeAttribute("required"),e.setAttribute("min","")):n.value<=0&&(n.value=0,e.setAttribute("required",""),e.setAttribute("min","1"))}))}()},338:()=>{!function(){const t=document.querySelector("[data-menu-profile-toggle]"),e=document.querySelector("[data-menu-profile]"),n=document.querySelectorAll("[data-menu-profile-link]");t&&(t.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active"),e.classList.contains("active")?(t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","Закрыть меню")):(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Открыть меню"))})),window.addEventListener("click",(n=>{const i=n.target;i.closest("[data-menu-profile-toggle]")||i.closest("[data-menu-profile]")||(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Открыть меню"),e.classList.remove("active"),t.classList.remove("active"))})),n.forEach((n=>{n.addEventListener("click",(()=>{t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Открыть меню"),e.classList.remove("active"),t.classList.remove("active")}))})))}()},598:()=>{function t(t){var e=!0,n=!1,i=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function s(t){t.classList.contains("focus-visible")||(t.classList.add("focus-visible"),t.setAttribute("data-focus-visible-added",""))}function r(t){e=!1}function l(){document.addEventListener("mousemove",d),document.addEventListener("mousedown",d),document.addEventListener("mouseup",d),document.addEventListener("pointermove",d),document.addEventListener("pointerdown",d),document.addEventListener("pointerup",d),document.addEventListener("touchmove",d),document.addEventListener("touchstart",d),document.addEventListener("touchend",d)}function d(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,document.removeEventListener("mousemove",d),document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",d),document.removeEventListener("pointermove",d),document.removeEventListener("pointerdown",d),document.removeEventListener("pointerup",d),document.removeEventListener("touchmove",d),document.removeEventListener("touchstart",d),document.removeEventListener("touchend",d))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(a(t.activeElement)&&s(t.activeElement),e=!0)}),!0),document.addEventListener("mousedown",r,!0),document.addEventListener("pointerdown",r,!0),document.addEventListener("touchstart",r,!0),document.addEventListener("visibilitychange",(function(t){"hidden"===document.visibilityState&&(n&&(e=!0),l())}),!0),l(),t.addEventListener("focus",(function(t){var n,i,r;a(t.target)&&(e||(i=(n=t.target).type,"INPUT"===(r=n.tagName)&&o[i]&&!n.readOnly||"TEXTAREA"===r&&!n.readOnly||n.isContentEditable))&&s(t.target)}),!0),t.addEventListener("blur",(function(t){var e;a(t.target)&&(t.target.classList.contains("focus-visible")||t.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(i),i=window.setTimeout((function(){n=!1}),100),(e=t.target).hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added")))}),!0),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host?t.host.setAttribute("data-js-focus-visible",""):t.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=t;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&t(document)},2:function(t,e,n){var i,o;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,n=(this.document||this.ownerDocument).querySelectorAll(t),i=this;do{for(e=n.length;0<=--e&&n.item(e)!==i;);}while(e<0&&(i=i.parentElement));return i}),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}(),function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var i=(new Date).getTime(),o=Math.max(0,16-(i-t)),a=window.setTimeout((function(){e(i+o)}),o);return t=i+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),o=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,i=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t},i=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),i=n.length,o=-1,a="",s=n.charCodeAt(0);++o<i;){if(0===(e=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=e&&e<=31||127==e||0===o&&48<=e&&e<=57||1===o&&48<=e&&e<=57&&45===s?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+a},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(e,n,i){0===e&&document.body.focus(),i||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,n))},s=function(e,n,i,o){if(n.emitEvents&&"function"==typeof t.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:i,toggle:o}});document.dispatchEvent(a)}};return function(r,l){var d,c,u,m,p={cancelScroll:function(t){cancelAnimationFrame(m),m=null,t||s("scrollCancel",d)},animateScroll:function(i,r,l){p.cancelScroll();var c=n(d||e,l||{}),h="[object Number]"===Object.prototype.toString.call(i),v=h||!i.tagName?null:i;if(h||v){var f=t.pageYOffset;c.header&&!u&&(u=document.querySelector(c.header));var g,b,y,E,L,_,w,S,A=function(e){return e?(n=e,parseInt(t.getComputedStyle(n).height,10)+e.offsetTop):0;var n}(u),q=h?i:function(e,n,i,a){var s=0;if(e.offsetParent)for(;s+=e.offsetTop,e=e.offsetParent;);return s=Math.max(s-n-i,0),a&&(s=Math.min(s,o()-t.innerHeight)),s}(v,A,parseInt("function"==typeof c.offset?c.offset(i,r):c.offset,10),c.clip),x=q-f,C=o(),O=0,k=(g=x,y=(b=c).speedAsDuration?b.speed:Math.abs(g/1e3*b.speed),b.durationMax&&y>b.durationMax?b.durationMax:b.durationMin&&y<b.durationMin?b.durationMin:parseInt(y,10)),T=function(e){var n,o,l;E||(E=e),O+=e-E,_=f+x*(o=L=1<(L=0===k?0:O/k)?1:L,"easeInQuad"===(n=c).easing&&(l=o*o),"easeOutQuad"===n.easing&&(l=o*(2-o)),"easeInOutQuad"===n.easing&&(l=o<.5?2*o*o:(4-2*o)*o-1),"easeInCubic"===n.easing&&(l=o*o*o),"easeOutCubic"===n.easing&&(l=--o*o*o+1),"easeInOutCubic"===n.easing&&(l=o<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1),"easeInQuart"===n.easing&&(l=o*o*o*o),"easeOutQuart"===n.easing&&(l=1- --o*o*o*o),"easeInOutQuart"===n.easing&&(l=o<.5?8*o*o*o*o:1-8*--o*o*o*o),"easeInQuint"===n.easing&&(l=o*o*o*o*o),"easeOutQuint"===n.easing&&(l=1+--o*o*o*o*o),"easeInOutQuint"===n.easing&&(l=o<.5?16*o*o*o*o*o:1+16*--o*o*o*o*o),n.customEasing&&(l=n.customEasing(o)),l||o),t.scrollTo(0,Math.floor(_)),function(e,n){var o=t.pageYOffset;if(e==n||o==n||(f<n&&t.innerHeight+o)>=C)return p.cancelScroll(!0),a(i,n,h),s("scrollStop",c,i,r),!(m=E=null)}(_,q)||(m=t.requestAnimationFrame(T),E=e)};0===t.pageYOffset&&t.scrollTo(0,0),w=i,S=c,h||history.pushState&&S.updateURL&&history.pushState({smoothScroll:JSON.stringify(S),anchor:w.id},document.title,w===document.documentElement?"#top":"#"+w.id),"matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches?a(i,Math.floor(q),!1):(s("scrollStart",c,i,r),p.cancelScroll(!0),t.requestAnimationFrame(T))}}},h=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(c=e.target.closest(r))&&"a"===c.tagName.toLowerCase()&&!e.target.closest(d.ignore)&&c.hostname===t.location.hostname&&c.pathname===t.location.pathname&&/#/.test(c.href)){var n,o;try{n=i(decodeURIComponent(c.hash))}catch(e){n=i(c.hash)}if("#"===n){if(!d.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(n);(o=o||"#top"!==n?o:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var n=t.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:n||t.pageYOffset},document.title,n||t.location.href)}}(d),p.animateScroll(o,c))}},v=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(d)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(i(history.state.anchor)))||p.animateScroll(e,null,{updateURL:!1})}};return p.destroy=function(){d&&(document.removeEventListener("click",h,!1),t.removeEventListener("popstate",v,!1),p.cancelScroll(),m=u=c=d=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";p.destroy(),d=n(e,l||{}),u=d.header?document.querySelector(d.header):null,document.addEventListener("click",h,!1),d.updateURL&&d.popstate&&t.addEventListener("popstate",v,!1)}(),p}}(o)}.apply(e,[]),void 0===i||(t.exports=i)}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t;n(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body,sidebarTab:document.querySelector(".sidebar-tree__item--tab"),headerHeight:null===(t=document)||void 0===t?void 0:t.querySelector(".header").offsetHeight};n(338),document.querySelector("[data-short-ingredients]")&&(e.bodyEl.addEventListener("click",(t=>{const e=t.target;if(e.closest("[data-short-ingredients-toggle]")){const t=e,n=e.nextElementSibling;t.classList.toggle("active"),n.classList.toggle("active"),null!=n&&n.classList.contains("active")?(null==t||t.setAttribute("aria-expanded","true"),null==t||t.setAttribute("aria-label","Закрыть список ингредиентов")):(null==t||t.setAttribute("aria-expanded","false"),null==t||t.setAttribute("aria-label","Открыть список ингредиентов"))}})),e.bodyEl.addEventListener("click",(t=>{const e=t.target;if(!e.closest("[data-short-ingredients-toggle]")&&!e.closest("[data-short-ingredients]")){const t=document.querySelectorAll("[data-short-ingredients-toggle]"),e=document.querySelectorAll("[data-short-ingredients]");t.forEach((t=>{t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Открыть список ингредиентов"),t.classList.remove("active")})),e.forEach((t=>{t.classList.remove("active")}))}}))),document.querySelector("[data-more-menu]")&&(e.bodyEl.addEventListener("click",(t=>{const e=t.target;if(e.closest("[data-more-menu-toggle]")){const t=e,n=e.nextElementSibling;t.classList.toggle("active"),n.classList.toggle("active"),n.classList.contains("active")?(t.setAttribute("aria-expanded","true"),null==t||t.setAttribute("aria-label","Закрыть меню действий")):(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Открыть меню действий"))}})),e.bodyEl.addEventListener("click",(t=>{const e=t.target;if(!e.closest("[data-more-menu-toggle]")&&!e.closest("[data-more-menu]")){const t=document.querySelectorAll("[data-more-menu-toggle]"),e=document.querySelectorAll("[data-more-menu]");t.forEach((t=>{t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Открыть меню действий"),t.classList.remove("active")})),e.forEach((t=>{t.classList.remove("active")}))}}))),new class{constructor(t){this.options=Object.assign({isOpen:()=>{},isClose:()=>{}},t),this.modal=document.querySelector(".graph-modal"),this.speed=300,this.animation="fade",this._reOpen=!1,this._nextContainer=!1,this.modalContainer=!1,this.isOpen=!1,this.previousActiveElement=!1,this._focusElements=["a[href]","input","select","textarea","button","iframe","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],this._fixBlocks=document.querySelectorAll(".fix-block"),this.events()}events(){this.modal&&(document.addEventListener("click",function(t){const e=t.target.closest("[data-graph-path]");if(e){let t=e.dataset.graphPath,n=e.dataset.graphAnimation,i=e.dataset.graphSpeed;return this.animation=n||"fade",this.speed=i?parseInt(i):300,this._nextContainer=document.querySelector(`[data-graph-target="${t}"]`),void this.open()}t.target.closest(".js-modal-close")&&this.close()}.bind(this)),window.addEventListener("keydown",function(t){27==t.keyCode&&this.isOpen&&this.close(),9==t.which&&this.isOpen&&this.focusCatch(t)}.bind(this)),document.addEventListener("click",function(t){t.target.classList.contains("graph-modal")&&t.target.classList.contains("is-open")&&this.close()}.bind(this)))}open(t){if(this.previousActiveElement=document.activeElement,this.isOpen)return this.reOpen=!0,void this.close();this.modalContainer=this._nextContainer,t&&(this.modalContainer=document.querySelector(`[data-graph-target="${t}"]`)),this.modalContainer.scrollTo(0,0),this.modal.style.setProperty("--transition-time",this.speed/1e3+"s"),this.modal.classList.add("is-open"),document.body.style.scrollBehavior="auto",document.documentElement.style.scrollBehavior="auto",this.disableScroll(),this.modalContainer.classList.add("graph-modal-open"),this.modalContainer.classList.add(this.animation),setTimeout((()=>{this.options.isOpen(this),this.modalContainer.classList.add("animate-open"),this.isOpen=!0,this.focusTrap()}),this.speed)}close(){this.modalContainer&&(this.modalContainer.classList.remove("animate-open"),this.modalContainer.classList.remove(this.animation),this.modal.classList.remove("is-open"),this.modalContainer.classList.remove("graph-modal-open"),this.enableScroll(),document.body.style.scrollBehavior="auto",document.documentElement.style.scrollBehavior="auto",this.options.isClose(this),this.isOpen=!1,this.focusTrap(),this.reOpen&&(this.reOpen=!1,this.open()))}focusCatch(t){const e=this.modalContainer.querySelectorAll(this._focusElements),n=Array.prototype.slice.call(e),i=n.indexOf(document.activeElement);t.shiftKey&&0===i&&(n[n.length-1].focus(),t.preventDefault()),t.shiftKey||i!==n.length-1||(n[0].focus(),t.preventDefault())}focusTrap(){const t=this.modalContainer.querySelectorAll(this._focusElements);this.isOpen?t.length&&t[0].focus():this.previousActiveElement.focus()}disableScroll(){let t=window.scrollY;this.lockPadding(),document.body.classList.add("disable-scroll"),document.body.dataset.position=t,document.body.style.top=-t+"px"}enableScroll(){let t=parseInt(document.body.dataset.position,10);this.unlockPadding(),document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scrollTo({top:t,left:0}),document.body.removeAttribute("data-position")}lockPadding(){let t=window.innerWidth-document.body.offsetWidth+"px";this._fixBlocks.forEach((e=>{e.style.paddingRight=t})),document.body.style.paddingRight=t}unlockPadding(){this._fixBlocks.forEach((t=>{t.style.paddingRight="0px"})),document.body.style.paddingRight="0px"}},function(){if(e.sidebarTab){const t=document.querySelectorAll("fieldset[id]");function n(){const n=window.pageYOffset;t.forEach((i=>{const o=i.offsetHeight+40,a=i.offsetTop-e.headerHeight-205,s=i.getAttribute("id"),r=t[t.length-1].getAttribute("id"),l=document.querySelectorAll(".sidebar-tree__list li");window.scrollY+1>=document.documentElement.scrollHeight-document.documentElement.clientHeight?(l.forEach((t=>{t.classList.remove("active")})),document.querySelector(".sidebar-tree__list a[href*="+r+"]").parentElement.classList.add("active")):n>a&&n<=a+o?document.querySelector(".sidebar-tree__list a[href*="+s+"]").parentElement.classList.add("active"):document.querySelector(".sidebar-tree__list a[href*="+s+"]").parentElement.classList.remove("active")}))}window.addEventListener("scroll",n)}}();var i=n(2);if(new(n.n(i)())('a[href*="#"]',{updateURL:!1,offset:150}),e.bodyEl.querySelector(".ingredient")&&function(){const t=document.querySelector(".ingredient"),n=t.querySelector(".ingredient__list"),i=t.querySelector(".ingredient__btn");let o=2;e.bodyEl.addEventListener("click",(()=>{t.querySelectorAll(".ingredient-item__input--amount").forEach((t=>{const e=t.getAttribute("max");t.addEventListener("change",(()=>{let n=String(t.value);t.value>e-1?t.value=e:t.value>.1&&n.length>3?t.value=function(t,e,n){return void 0===n||0==+n?Math.round(e):(e=+e,n=+n,isNaN(e)||"number"!=typeof n||n%1!=0?NaN:(e=e.toString().split("e"),+((e=(e=Math.round(+(e[0]+"e"+(e[1]?+e[1]-n:-n)))).toString().split("e"))[0]+"e"+(e[1]?+e[1]+n:n))))}(0,t.value,-1):t.value<=.1&&(t.value=.1)}))}))})),n.addEventListener("click",(t=>{t.preventDefault();let e=t.target;e.classList.contains("ingredient-item__delete")&&o>1&&(o--,e.parentNode.remove(),1==o&&n.querySelector(".ingredient-item").querySelector(".ingredient-item__delete").classList.add("disabled"),o<50&&i.classList.remove("disabled"))})),i.addEventListener("click",(t=>{t.preventDefault(),o++;const e=Math.floor(Math.random()*Date.now());50==o&&i.classList.add("disabled"),o>1&&n.querySelectorAll(".ingredient-item").forEach((t=>{t.querySelector(".ingredient-item__delete").classList.remove("disabled")}));let a=document.createElement("div");a.classList.add("ingredient-item"),a.setAttribute("id",`ingredient-${e}`),a.innerHTML+=`\n\t\t\t\t<input type="text" name="ingredient-name-${e}" class="input  ingredient-item__input  ingredient-item__input--name" placeholder="Название ингредиента" autocomplete="off" required>\n\t\t\t\t<input type="number" name="ingredient-amount-${e}" class="input  ingredient-item__input  ingredient-item__input--amount" value="1" min="0.1" max="999" step="0.1" autocomplete="off" required>\n\t\t\t\t<div class="select  ingredient-item__select">\n\t\t\t\t\t<select name="ingredient-measure-${e}" aria-label="Единица измерения" required>\n\t\t\t\t\t\t<option value="">Ед. измерения</option>\n\t\t\t\t\t\t<option>шт</option>\n\t\t\t\t\t\t<option>г</option>\n\t\t\t\t\t\t<option>кг</option>\n\t\t\t\t\t\t<option>мл</option>\n\t\t\t\t\t\t<option>л</option>\n\t\t\t\t\t\t<option>стакан</option>\n\t\t\t\t\t\t<option>чайная ложка</option>\n\t\t\t\t\t\t<option>столовая ложка</option>\n\t\t\t\t\t\t<option>щепотка</option>\n\t\t\t\t\t\t<option>зубчик</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<svg class="icon" aria-hidden="true" focusable="false">\n\t\t\t\t\t\t<use href="${svgChevron}"/>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t\t<a href="#" class="btn-reset  ingredient-item__delete" aria-label="Удалить ингредиент"  role="button">\n\t\t\t\t\t<svg class="icon  icon--16" aria-hidden="true" focusable="false">\n\t\t\t\t\t\t<use href="${svgCross}" />\n\t\t\t\t\t</svg>\n\t\t\t\t</a>\n\t\t\t\t<label class="form-field__error  hidden">\n\t\t\t\t\t<svg class="icon  icon--16" aria-hidden="true" focusable="false">\n\t\t\t\t\t\t<use href="${svgCircleCross}"/>\n\t\t\t\t\t</svg>\n\t\t\t\t\t<span class="form-field__text">Здесь будет текст ошибки</span>\n\t\t\t\t</label>\n\t\t\t`,n.append(a)}))}(),e.bodyEl.querySelector(".step")&&function(){const t=document.querySelector(".step"),e=t.querySelector(".step__list"),n=t.querySelector(".step__btn");let i=2;e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("step-item__delete")&&i>1&&(i--,o.parentNode.remove()),i<30&&n.classList.remove("disabled"),1==i&&e.querySelector(".step-item").querySelector(".step-item__delete").classList.add("disabled")})),n.addEventListener("click",(t=>{t.preventDefault(),i++;const o=Math.floor(Math.random()*Date.now());30==i&&n.classList.add("disabled"),i>1&&e.querySelectorAll(".step-item").forEach((t=>{t.querySelector(".step-item__delete").classList.remove("disabled")}));let a=document.createElement("div");a.classList.add("step-item"),a.setAttribute("id",`step-${o}`),a.innerHTML+=`\n\t\t\t\t<label class="form-field__label  step-item__number" for="step-description-${o}"></label>\n\t\t\t\t<a class="btn-reset  step-item__delete" aria-label="Удалить шаг"  role="button">\n\t\t\t\t\t<svg class="icon" aria-hidden="true" focusable="false">\n\t\t\t\t\t\t<use href="${svgCross}" />\n\t\t\t\t\t</svg>\n\t\t\t\t</a>\n\t\t\t\t<div class="step-item__body">\n\t\t\t\t\t<div class="imageuploader  imageuploader--small  step-item__imageuploader">\n\t\t\t\t\t\t<label class="input  input--photo  imageuploader__input">\n\t\t\t\t\t\t\t<input type="file" name="step-photo-${o}" accept=".jpg, .jpeg, .png">\n\t\t\t\t\t\t\t<div class="imageuploader__placeholder">\n\t\t\t\t\t\t\t\t<svg class="icon" aria-hidden="true" focusable="false">\n\t\t\t\t\t\t\t\t\t<use href="${svgImage}"/>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\tЗагрузите фото шага\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<a class="btn  btn--other  imageuploader__btn  hidden">\n\t\t\t\t\t\t\t<svg class="icon  icon--16" aria-hidden="true" focusable="false">\n\t\t\t\t\t\t\t\t<use href="${svgDelete}" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<textarea name="step-description-${o}" id="step-description-${o}" class="input  input--textarea  step-item__input" placeholder="Замешиваем тесто для блинов. В 1 литр теплого молока добавляем 4 яйца..." autocomplete="off" maxlength="5000" required></textarea>\n\t\t\t\t\t<label class="form-field__error  hidden" for="step-description-${o}">\n\t\t\t\t\t\t<svg class="icon  icon--16" aria-hidden="true" focusable="false">\n\t\t\t\t\t\t\t<use href="${svgCircleCross}"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t<span class="form-field__text">Здесь будет текст ошибки</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t`,e.append(a)}))}(),e.bodyEl.querySelector(".imageuploader")&&e.bodyEl.addEventListener("click",(t=>{const e=t.target;if(e.classList.contains("imageuploader__input")){const t=e.querySelector('input[type="file"]'),n=e.parentNode.querySelector(".imageuploader__input"),i=e.parentNode.querySelector(".imageuploader__btn"),o=e.querySelector(".imageuploader__placeholder");let a="";t.addEventListener("change",(()=>{if(""==!t.value){const e=new FileReader;e.addEventListener("load",(()=>{a=e.result,n.style.backgroundImage=`url(${a})`,o.classList.add("hidden"),i.classList.remove("hidden")})),e.readAsDataURL(t.files[0])}})),i.addEventListener("click",(()=>{t.value="",a="",n.style.backgroundImage="none",o.classList.remove("hidden"),i.classList.add("hidden")}))}})),n(73),n(678),e.bodyEl.querySelector(".comments__input")){const t=e.bodyEl.querySelector(".comments__input");t.setAttribute("style","height:"+t.scrollHeight+"px"),t.addEventListener("input",(()=>{t.style.height="auto",t.style.height=t.scrollHeight+"px"}))}!function(){const t=e.bodyEl.querySelector(".info-avatar--change");if(t){const e=t.querySelector(".info-avatar__input"),n=t.querySelector('input[type="file"]');let i="";n.addEventListener("change",(()=>{if(""==!n.value){const t=new FileReader;t.addEventListener("load",(()=>{i=t.result,e.style.backgroundImage=`url(${i})`})),t.readAsDataURL(n.files[0])}}))}}()})()})();