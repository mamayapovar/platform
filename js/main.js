(()=>{var e={971:()=>{!function(){let e=1;const t=document.querySelector(".new-recipe-section--ingredients").querySelector(".new-recipe-section__list"),n=document.querySelector(".new-recipe-section__btn"),i=document.querySelectorAll(".new-recipe-ingredient__delete");n.addEventListener("click",(n=>{n.preventDefault(),e++,t.innerHTML+=`\n      <div class="new-recipe-ingredient" id="ingredient-${e}">\n        <input type="text" name="ingredient-name-${e}" class="input  new-recipe-ingredient__input" placeholder="Название ингредиента" autocomplete="off" required>\n        <input type="number" name="ingredient-amount-${e}" class="input  new-recipe-ingredient__input" value="1" min="1" max="5000" autocomplete="off" required>\n        <select name="ingredient-measure-${e}" class="select  new-recipe-ingredient__select" required>\n          <option>Ед. измерения</option>\n          <option>шт</option>\n          <option>г</option>\n          <option>кг</option>\n          <option>мл</option>\n          <option>л</option>\n          <option>столовая ложка</option>\n          <option>чайная ложка</option>\n          <option>стакан</option>\n        </select>\n        <a class="btn-reset  new-recipe-ingredient__delete" aria-label="Удалить ингредиент">\n          <svg class="icon  icon--16  new-recipe-ingredient__icon" aria-hidden="true" focusable="false">\n            <use href="img/sprite.svg#cross"/>\n          </svg>\n        </a>\n      </div>\n    `})),i.forEach((t=>{t.addEventListener("click",(n=>{let i=t.parentNode;return i.parentNode.removeChild(i),e--,!1}))}))}()},338:()=>{!function(){var e,t,n;const i=null===(e=document)||void 0===e?void 0:e.querySelector("[data-menu-profile-toggle]"),o=null===(t=document)||void 0===t?void 0:t.querySelector("[data-menu-profile]"),s=null===(n=document)||void 0===n?void 0:n.querySelectorAll("[data-menu-profile-link]");i&&(null==i||i.addEventListener("click",(e=>{null==o||o.classList.toggle("active"),null!=o&&o.classList.contains("active")?(null==i||i.setAttribute("aria-expanded","true"),null==i||i.setAttribute("aria-label","Закрыть меню")):(null==i||i.setAttribute("aria-expanded","false"),null==i||i.setAttribute("aria-label","Открыть меню"))})),window.addEventListener("click",(e=>{const t=e.target;t.closest("[data-menu-profile-toggle]")||t.closest("[data-menu-profile]")||(null==i||i.setAttribute("aria-expanded","false"),null==i||i.setAttribute("aria-label","Открыть меню"),o.classList.remove("active"))})),null==s||s.forEach((e=>{e.addEventListener("click",(()=>{null==i||i.setAttribute("aria-expanded","false"),null==i||i.setAttribute("aria-label","Открыть меню"),o.classList.remove("active")}))})))}()},598:()=>{function e(e){var t=!0,n=!1,i=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function d(e){t=!1}function r(){document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("mouseup",l),document.addEventListener("pointermove",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",l),document.addEventListener("touchend",l)}function l(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mousedown",l),document.removeEventListener("mouseup",l),document.removeEventListener("pointermove",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",l),document.removeEventListener("touchend",l))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(s(e.activeElement)&&a(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",d,!0),document.addEventListener("pointerdown",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),r())}),!0),r(),e.addEventListener("focus",(function(e){var n,i,d;s(e.target)&&(t||(i=(n=e.target).type,"INPUT"===(d=n.tagName)&&o[i]&&!n.readOnly||"TEXTAREA"===d&&!n.readOnly||n.isContentEditable))&&a(e.target)}),!0),e.addEventListener("blur",(function(e){var t;s(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(i),i=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}(()=>{"use strict";n(598),window,document,document.documentElement,document.body,n(338),new class{constructor(e){this.options=Object.assign({isOpen:()=>{},isClose:()=>{}},e),this.modal=document.querySelector(".graph-modal"),this.speed=300,this.animation="fade",this._reOpen=!1,this._nextContainer=!1,this.modalContainer=!1,this.isOpen=!1,this.previousActiveElement=!1,this._focusElements=["a[href]","input","select","textarea","button","iframe","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],this._fixBlocks=document.querySelectorAll(".fix-block"),this.events()}events(){this.modal&&(document.addEventListener("click",function(e){const t=e.target.closest("[data-graph-path]");if(t){let e=t.dataset.graphPath,n=t.dataset.graphAnimation,i=t.dataset.graphSpeed;return this.animation=n||"fade",this.speed=i?parseInt(i):300,this._nextContainer=document.querySelector(`[data-graph-target="${e}"]`),void this.open()}e.target.closest(".js-modal-close")&&this.close()}.bind(this)),window.addEventListener("keydown",function(e){27==e.keyCode&&this.isOpen&&this.close(),9==e.which&&this.isOpen&&this.focusCatch(e)}.bind(this)),document.addEventListener("click",function(e){e.target.classList.contains("graph-modal")&&e.target.classList.contains("is-open")&&this.close()}.bind(this)))}open(e){if(this.previousActiveElement=document.activeElement,this.isOpen)return this.reOpen=!0,void this.close();this.modalContainer=this._nextContainer,e&&(this.modalContainer=document.querySelector(`[data-graph-target="${e}"]`)),this.modalContainer.scrollTo(0,0),this.modal.style.setProperty("--transition-time",this.speed/1e3+"s"),this.modal.classList.add("is-open"),document.body.style.scrollBehavior="auto",document.documentElement.style.scrollBehavior="auto",this.disableScroll(),this.modalContainer.classList.add("graph-modal-open"),this.modalContainer.classList.add(this.animation),setTimeout((()=>{this.options.isOpen(this),this.modalContainer.classList.add("animate-open"),this.isOpen=!0,this.focusTrap()}),this.speed)}close(){this.modalContainer&&(this.modalContainer.classList.remove("animate-open"),this.modalContainer.classList.remove(this.animation),this.modal.classList.remove("is-open"),this.modalContainer.classList.remove("graph-modal-open"),this.enableScroll(),document.body.style.scrollBehavior="auto",document.documentElement.style.scrollBehavior="auto",this.options.isClose(this),this.isOpen=!1,this.focusTrap(),this.reOpen&&(this.reOpen=!1,this.open()))}focusCatch(e){const t=this.modalContainer.querySelectorAll(this._focusElements),n=Array.prototype.slice.call(t),i=n.indexOf(document.activeElement);e.shiftKey&&0===i&&(n[n.length-1].focus(),e.preventDefault()),e.shiftKey||i!==n.length-1||(n[0].focus(),e.preventDefault())}focusTrap(){const e=this.modalContainer.querySelectorAll(this._focusElements);this.isOpen?e.length&&e[0].focus():this.previousActiveElement.focus()}disableScroll(){let e=window.scrollY;this.lockPadding(),document.body.classList.add("disable-scroll"),document.body.dataset.position=e,document.body.style.top=-e+"px"}enableScroll(){let e=parseInt(document.body.dataset.position,10);this.unlockPadding(),document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scrollTo({top:e,left:0}),document.body.removeAttribute("data-position")}lockPadding(){let e=window.innerWidth-document.body.offsetWidth+"px";this._fixBlocks.forEach((t=>{t.style.paddingRight=e})),document.body.style.paddingRight=e}unlockPadding(){this._fixBlocks.forEach((e=>{e.style.paddingRight="0px"})),document.body.style.paddingRight="0px"}},n(971)})()})();