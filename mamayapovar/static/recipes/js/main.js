/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _components_menu_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/_menu-profile.js */ "./src/js/components/_menu-profile.js");
    /* harmony import */ var _components_menu_profile_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_menu_profile_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _components_short_ingredients_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_short-ingredients.js */ "./src/js/components/_short-ingredients.js");
    /* harmony import */ var _components_menu_more_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_menu-more.js */ "./src/js/components/_menu-more.js");
    /* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_modal.js */ "./src/js/components/_modal.js");
    /* harmony import */ var _components_scroll_active_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_scroll-active.js */ "./src/js/components/_scroll-active.js");
    /* harmony import */ var _components_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_smooth-scroll.js */ "./src/js/components/_smooth-scroll.js");
    /* harmony import */ var _components_new_recipe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_new-recipe.js */ "./src/js/components/_new-recipe.js");
    /* harmony import */ var _components_imageuploader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/_imageuploader.js */ "./src/js/components/_imageuploader.js");
    /* harmony import */ var _components_counter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/_counter.js */ "./src/js/components/_counter.js");
    /* harmony import */ var _components_counter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_counter_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var _components_input_validate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/_input-validate.js */ "./src/js/components/_input-validate.js");
    /* harmony import */ var _components_input_validate_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_input_validate_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var _components_textarea_resize_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/_textarea-resize.js */ "./src/js/components/_textarea-resize.js");
    /* harmony import */ var _components_info_avatar_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/_info-avatar.js */ "./src/js/components/_info-avatar.js");













                /***/
}),

    /***/ "./src/js/_functions.js":
    /*!******************************!*\
      !*** ./src/js/_functions.js ***!
      \******************************/
    /***/ (() => {

                // Данный файл - лишь собрание подключений готовых компонентов.
                // Рекомендуется создавать отдельный файл в папке components и подключать все там

                // Определение операционной системы на мобильных
                // import { mobileCheck } from "./functions/mobile-check";
                // console.log(mobileCheck())

                // Определение ширины экрана
                // import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
                // if (isDesktop()) {
                //   console.log('...')
                // }

                // Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
                // import { throttle } from './functions/throttle';
                // let yourFunc = () => { console.log('throttle') };
                // let func = throttle(yourFunc);
                // window.addEventListener('resize', func);

                // Фикс фулскрин-блоков
                // import './functions/fix-fullheight';

                // Реализация бургер-меню
                // import { burger } from './functions/burger';

                // Реализация остановки скролла (не забудьте вызвать функцию)
                // import { disableScroll } from './functions/disable-scroll';

                // Реализация включения скролла (не забудьте вызвать функцию)
                // import { enableScroll } from './functions/enable-scroll';

                // Реализация модального окна
                // import GraphModal from 'graph-modal';
                // const modal = new GraphModal();

                // Реализация табов
                // import GraphTabs from 'graph-tabs';
                // const tabs = new GraphTabs('tab');

                // Получение высоты шапки сайта (не забудьте вызвать функцию)
                // import { getHeaderHeight } from './functions/header-height';

                // Подключение плагина кастом-скролла
                // import 'simplebar';

                // Подключение плагина для позиционирования тултипов
                // import { createPopper, right} from '@popperjs/core';
                // createPopper(el, tooltip, {
                //   placement: 'right'
                // });

                // Подключение свайпера
                // import Swiper, { Navigation, Pagination } from 'swiper';
                // Swiper.use([Navigation, Pagination]);
                // const swiper = new Swiper(el, {
                //   slidesPerView: 'auto',
                // });

                // Подключение анимаций по скроллу
                // import AOS from 'aos';
                // AOS.init();

                // Подключение параллакса блоков при скролле
                // import Rellax from 'rellax';
                // const rellax = new Rellax('.rellax');

                // Подключение плавной прокрутки к якорям
                // import SmoothScroll from 'smooth-scroll';
                // const scroll = new SmoothScroll('a[href*="#"]');

                // Подключение событий свайпа на мобильных
                // import 'swiped-events';
                // document.addEventListener('swiped', function(e) {
                //   console.log(e.target);
                //   console.log(e.detail);
                //   console.log(e.detail.dir);
                // });

                // import { validateForms } from './functions/validate-forms';
                // const rules1 = [...];

                // const afterForm = () => {
                //   console.log('Произошла отправка, тут можно писать любые действия');
                // };

                // validateForms('.form-1', rules1, afterForm);

                /***/
}),

    /***/ "./src/js/_vars.js":
    /*!*************************!*\
      !*** ./src/js/_vars.js ***!
      \*************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
                var _document;
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
                    windowEl: window,
                    documentEl: document,
                    htmlEl: document.documentElement,
                    bodyEl: document.body,
                    sidebarTab: document.querySelector('.sidebar-tree__item--tab'),
                    headerHeight: (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('.header').offsetHeight
                });

                /***/
}),

    /***/ "./src/js/_vendor.js":
    /*!***************************!*\
      !*** ./src/js/_vendor.js ***!
      \***************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
    /* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);


                /***/
}),

    /***/ "./src/js/components/_counter.js":
    /*!***************************************!*\
      !*** ./src/js/components/_counter.js ***!
      \***************************************/
    /***/ (() => {

                (function(){
                    if (document.querySelector('.counter__input')) {
                        const counterInput = document.querySelector('.counter__input')
                        const counterPlus = document.querySelector('.counter__btn--plus')
                        const counterMinus = document.querySelector('.counter__btn--minus')
                        const counterMax = 20
                
                        function enableButton(btn) {
                            btn.classList.remove('disabled')
                            btn.removeAttribute('tabindex')
                        }
                
                        function disableButton(btn) {
                            btn.classList.add('disabled')
                            btn.setAttribute('tabindex', '-1')
                        }
                
                        function plusValidate() {
                            if (counterInput.value > counterMax - 1) {
                                counterInput.value = counterMax
                                disableButton(counterPlus)
                            } else {
                                enableButton(counterPlus)
                            }
                        }
                
                        function minusValidate() {
                            if (counterInput.value <= 1) {
                                counterInput.value = 1
                                disableButton(counterMinus)
                            } else {
                                enableButton(counterMinus)
                            }
                        }
                
                        document.addEventListener('DOMContentLoaded', () => {
                            plusValidate()
                            minusValidate()
                        })
                
                        counterInput.addEventListener('change', () => {
                            plusValidate()
                            minusValidate()
                        })
                
                        counterPlus.addEventListener('click', (e) => {
                            e.preventDefault()
                            let currentValue = parseInt(counterInput.value)
                
                            currentValue++
                            counterInput.value = currentValue
                            enableButton(counterMinus)
                            plusValidate()
                        })
                
                        counterMinus.addEventListener('click', (e) => {
                            e.preventDefault()
                            let currentValue = parseInt(counterInput.value)
                
                            currentValue--
                            counterInput.value = currentValue
                            enableButton(counterPlus)
                            minusValidate()
                        })
                    }
                })();

                /***/
}),

    /***/ "./src/js/components/_imageuploader.js":
    /*!*********************************************!*\
      !*** ./src/js/components/_imageuploader.js ***!
      \*********************************************/
    /***/ (() => {

                (function(){
                    if (document.querySelector('.imageuploader')) {
                        let uploadedImage = ""
                        document.addEventListener('click', (e) => {
                            const target = e.target
                            if (target.classList.contains('imageuploader__input')) {
                                const image = target
                                const input = image.querySelector('input[type="file"]')
                                const placeholder = image.querySelector('.imageuploader__placeholder')
                                const delBtn = target.parentNode.querySelector('.imageuploader__btn')
                
                                input.addEventListener('change', () => {
                                    if (!input.value == "") {
                                        const reader = new FileReader()
                                        file = input.files[0] || input.dataTransfer.files[0]
                
                                        reader.addEventListener('load', () => {
                                            uploadedImage = reader.result
                                            image.style.backgroundImage = `url(${uploadedImage})`
                                            placeholder.classList.add('hidden')
                                            delBtn.classList.remove('hidden')
                                        })
                                        reader.readAsDataURL(file)
                                        console.log(file);
                                    }
                                })
                            }
                
                            if (target.classList.contains('imageuploader__btn')) {
                                const image = target.parentNode.querySelector('.imageuploader__input')
                                const input = image.querySelector('input[type="file"]')
                                const placeholder = image.querySelector('.imageuploader__placeholder')
                                const delBtn = target
                
                                e.preventDefault()
                                input.value = "";
                                uploadedImage = ""
                                image.style.backgroundImage = 'none'
                                placeholder.classList.remove('hidden')
                                delBtn.classList.add('hidden')
                            }
                        })
                    }
                })();

                /***/
}),

    /***/ "./src/js/components/_info-avatar.js":
    /*!*******************************************!*\
      !*** ./src/js/components/_info-avatar.js ***!
      \*******************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

                (function () {
                    const infoAvatar = _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.querySelector('.info-avatar--change');
                    if (infoAvatar) {
                        const image = infoAvatar.querySelector('.info-avatar__input');
                        const input = infoAvatar.querySelector('input[type="file"]');
                        let uploadedImage = "";
                        input.addEventListener('change', () => {
                            if (!input.value == "") {
                                const reader = new FileReader();
                                reader.addEventListener('load', () => {
                                    uploadedImage = reader.result;
                                    image.style.backgroundImage = `url(${uploadedImage})`;
                                });
                                reader.readAsDataURL(input.files[0]);
                            }
                        });
                    }
                })();

                /***/
}),

    /***/ "./src/js/components/_input-validate.js":
    /*!**********************************************!*\
      !*** ./src/js/components/_input-validate.js ***!
      \**********************************************/
    /***/ (() => {

                (function () {
                if (document.querySelector('.new-recipe-section__field--time')) {
                    function getMeNumber(value) {
                    var pow = Math.pow(10, 0);
                    return (value * pow >> 0) / pow;
                    }
                    const field = document.querySelector('.new-recipe-section__field--time');
                    const inputMinutes = field.querySelector('.new-recipe-section__field--minutes input');
                    const inputHours = field.querySelector('.new-recipe-section__field--hours input');
                    const maxMinutes = 59;
                    const maxHours = 12;
                    inputMinutes.addEventListener('change', () => {
                    if (inputMinutes.value >= maxMinutes) {
                        inputMinutes.value = maxMinutes;
                    } else if (inputMinutes.value <= 0) {
                        inputMinutes.value = 0;
                    }
                    inputMinutes.value = getMeNumber(inputMinutes.value);
                    });
                    inputHours.addEventListener('change', () => {
                    if (inputHours.value >= maxHours) {
                        inputHours.value = maxHours;
                    } else if (inputHours.value <= 0) {
                        inputHours.value = 0;
                    }
                    if (inputMinutes.value <= 0) {
                        inputMinutes.value = 0;
                    }
                    inputHours.value = getMeNumber(inputHours.value);
                    });
                }
                })();
        

                /***/
}),

    /***/ "./src/js/components/_menu-more.js":
    /*!*****************************************!*\
      !*** ./src/js/components/_menu-more.js ***!
      \*****************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

                (function () {
                    if (document.querySelector('[data-more-menu]')) {
                        _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.addEventListener('click', e => {
                            const target = e.target;
                            if (target.closest('[data-more-menu-toggle]')) {
                                const moreToggle = target;
                                const moreMenu = target.nextElementSibling;
                                moreToggle.classList.toggle('active');
                                moreMenu.classList.toggle('active');
                                if (moreMenu.classList.contains('active')) {
                                    moreToggle.setAttribute('aria-expanded', 'true');
                                    moreToggle === null || moreToggle === void 0 ? void 0 : moreToggle.setAttribute('aria-label', 'Закрыть меню действий');
                                } else {
                                    moreToggle.setAttribute('aria-expanded', 'false');
                                    moreToggle.setAttribute('aria-label', 'Открыть меню действий');
                                }
                            }
                        });
                        _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.addEventListener('click', e => {
                            const target = e.target;
                            if (!target.closest('[data-more-menu-toggle]') && !target.closest('[data-more-menu]')) {
                                const moreToggle = document.querySelectorAll('[data-more-menu-toggle]');
                                const moreMenu = document.querySelectorAll('[data-more-menu]');
                                moreToggle.forEach(e => {
                                    e.setAttribute('aria-expanded', 'false');
                                    e.setAttribute('aria-label', 'Открыть меню действий');
                                    e.classList.remove('active');
                                });
                                moreMenu.forEach(e => {
                                    e.classList.remove('active');
                                });
                            }
                        });
                    }
                })();

                /***/
}),

    /***/ "./src/js/components/_menu-profile.js":
    /*!********************************************!*\
      !*** ./src/js/components/_menu-profile.js ***!
      \********************************************/
    /***/ (() => {

                (function () {
                    const menuProfileToggle = document.querySelector('[data-menu-profile-toggle]');
                    const menuProfile = document.querySelector('[data-menu-profile]');
                    const menuProfileLinks = document.querySelectorAll('[data-menu-profile-link]');
                    if (menuProfileToggle) {
                        menuProfileToggle.addEventListener('click', () => {
                            menuProfile.classList.toggle('active');
                            menuProfileToggle.classList.toggle('active');
                            if (menuProfile.classList.contains('active')) {
                                menuProfileToggle.setAttribute('aria-expanded', 'true');
                                menuProfileToggle.setAttribute('aria-label', 'Закрыть меню');
                            } else {
                                menuProfileToggle.setAttribute('aria-expanded', 'false');
                                menuProfileToggle.setAttribute('aria-label', 'Открыть меню');
                            }
                        });
                        window.addEventListener('click', e => {
                            const target = e.target;
                            if (!target.closest('[data-menu-profile-toggle]') && !target.closest('[data-menu-profile]')) {
                                menuProfileToggle.setAttribute('aria-expanded', 'false');
                                menuProfileToggle.setAttribute('aria-label', 'Открыть меню');
                                menuProfile.classList.remove('active');
                                menuProfileToggle.classList.remove('active');
                            }
                        });
                        menuProfileLinks.forEach(el => {
                            el.addEventListener('click', () => {
                                menuProfileToggle.setAttribute('aria-expanded', 'false');
                                menuProfileToggle.setAttribute('aria-label', 'Открыть меню');
                                menuProfile.classList.remove('active');
                                menuProfileToggle.classList.remove('active');
                            });
                        });
                    }
                })();

                /***/
}),

    /***/ "./src/js/components/_modal.js":
    /*!*************************************!*\
      !*** ./src/js/components/_modal.js ***!
      \*************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var graph_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graph-modal */ "./node_modules/graph-modal/src/graph-modal.js");

                const modal = new graph_modal__WEBPACK_IMPORTED_MODULE_0__["default"]({
                    isOpen: modal => {
                        const registerName = document.querySelector('#username-register');
                        const authEmail = document.querySelector('#email-auth');
                        if (registerName) {
                            setTimeout(function () {
                                registerName.focus();
                            }, 100);
                        }
                        if (authEmail) {
                            setTimeout(function () {
                                authEmail.focus();
                            }, 100);
                        }
                    }
                });

                /***/
}),

    /***/ "./src/js/components/_new-recipe.js":
    /*!******************************************!*\
      !*** ./src/js/components/_new-recipe.js ***!
      \******************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                // ИГРЕДИЕНТЫ
                (function () {
                if (document.querySelector('.ingredient')) {
                    const ingredientSection = document.querySelector('.ingredient');
                    const ingredientList = ingredientSection.querySelector('.ingredient__list');
                    const ingredientAdd = ingredientSection.querySelector('.ingredient__btn');
                    let countOfFields = 2;
                    let maxOfFields = 50;
                    function randomID() {
                    return Math.floor(Math.random() * Date.now());
                    }
                    function numberFixed(number, fixed) {
                    if ((typeof number === 'number' || typeof number === 'string') && !isNaN(number - parseFloat(number))) {
                        number = String(number);
                        var split = number.split('.');
                        if (split.length > 1) {
                        var left = split[0];
                        var right = split[1].substr(0, !fixed ? 1 : fixed);
                        return Number(left + (fixed !== 0 ? '.' + right : ''));
                        } else {
                        return Number(number);
                        }
                    }
                    }

                    // проверка кол-ва ингредиентов
                    document.addEventListener('click', () => {
                    let ingredientAmounts = ingredientSection.querySelectorAll('.ingredient-item__input--amount');
                    ingredientAmounts.forEach(input => {
                        const max = 999;
                        input.addEventListener('change', () => {
                        if (input.value > max - 1) {
                            input.value = max;
                        } else if (input.value <= 0.1) {
                            input.value = 0.1;
                        }
                        input.value = numberFixed(input.value);
                        });
                    });
                    });

                    // удаление ингредиента
                    ingredientList.addEventListener('click', e => {
                    e.preventDefault();
                    let target = e.target;
                    if (target.classList.contains('ingredient-item__delete') && countOfFields > 1) {
                        countOfFields--;
                        target.parentNode.remove();
                        if (countOfFields == 1) {
                        const item = ingredientList.querySelector('.ingredient-item');
                        const del = item.querySelector('.ingredient-item__delete');
                        del.classList.add('disabled');
                        del.setAttribute('tabindex', '-1');
                        }
                        if (countOfFields < maxOfFields) {
                        ingredientAdd.classList.remove('disabled');
                        }
                    }
                    });

                    // добавление ингредиента
                    ingredientAdd.addEventListener('click', e => {
                    e.preventDefault();
                    countOfFields++;
                    const fieldIndex = randomID();
                    if (countOfFields == maxOfFields) {
                        ingredientAdd.classList.add('disabled');
                    }
                    if (countOfFields > 1) {
                        const items = ingredientList.querySelectorAll('.ingredient-item');
                        items.forEach(e => {
                        const del = e.querySelector('.ingredient-item__delete');
                        del.classList.remove('disabled');
                        del.removeAttribute('tabindex');
                        });
                    }
                    let ingredientItem = document.createElement("div");
                    ingredientItem.classList.add('ingredient-item');
                    ingredientItem.setAttribute('id', `ingredient-${fieldIndex}`);
                    ingredientItem.innerHTML += `
                                <input type="text" name="ingredient-name-${fieldIndex}" class="input  ingredient-item__input  ingredient-item__input--name" placeholder="Название ингредиента" autocomplete="off">
                                <input type="number" name="ingredient-amount-${fieldIndex}" class="input  ingredient-item__input  ingredient-item__input--amount" value="1" min="0.1" max="999" step="0.1" autocomplete="off">
                                <div class="select  ingredient-item__select">
                                    <select name="ingredient-measure-${fieldIndex}" aria-label="Единица измерения">
                                        <option value="">Ед. измерения</option>
                                        <option>шт</option>
                                        <option>г</option>
                                        <option>кг</option>
                                        <option>мл</option>
                                        <option>л</option>
                                        <option>стакан</option>
                                        <option>чайная ложка</option>
                                        <option>столовая ложка</option>
                                        <option>щепотка</option>
                                        <option>зубчик</option>
                                    </select>
                                    <svg class="icon" aria-hidden="true" focusable="false">
                                        <use href="${svgChevron}"/>
                                    </svg>
                                </div>
                                <button type="button" class="btn-reset  ingredient-item__delete" aria-label="Удалить ингредиент">
                                    <svg class="icon  icon--16" aria-hidden="true" focusable="false">
                                        <use href="${svgCross}" />
                                    </svg>
                                </button>
                                <label class="form-field__error  hidden">
                                    <svg class="icon  icon--16" aria-hidden="true" focusable="false">
                                        <use href="${svgCircleCross}"/>
                                    </svg>
                                    <span class="form-field__text">Здесь будет текст ошибки</span>
                                </label>
                            `;
                    ingredientList.append(ingredientItem);
                    });
                }
                })();

                // ИНСТРУКЦИЯ ПРИГОТОВЛЕНИЯ
                (function () {
                if (document.querySelector('.step')) {
                    const stepSection = document.querySelector('.step');
                    const stepList = stepSection.querySelector('.step__list');
                    const stepAdd = stepSection.querySelector('.step__btn');
                    let countOfFields = 2;
                    let maxOfFields = 30;
                    function randomID() {
                    return Math.floor(Math.random() * Date.now());
                    }

                    // удаление шага
                    stepList.addEventListener('click', e => {
                    let target = e.target;
                    if (target.classList.contains('step-item__delete') && countOfFields > 1) {
                        e.preventDefault();
                        countOfFields--;
                        target.parentNode.remove();
                    }
                    if (countOfFields < maxOfFields) {
                        stepAdd.classList.remove('disabled');
                    }
                    if (countOfFields == 1) {
                        const item = stepList.querySelector('.step-item');
                        const del = item.querySelector('.step-item__delete');
                        del.classList.add('disabled');
                        del.setAttribute('tabindex', '-1');
                    }
                    });

                    // добавление шага
                    stepAdd.addEventListener('click', e => {
                    e.preventDefault();
                    countOfFields++;
                    const fieldIndex = randomID();
                    if (countOfFields == maxOfFields) {
                        stepAdd.classList.add('disabled');
                    }
                    if (countOfFields > 1) {
                        const items = stepList.querySelectorAll('.step-item');
                        items.forEach(e => {
                        const del = e.querySelector('.step-item__delete');
                        del.classList.remove('disabled');
                        del.removeAttribute('tabindex', '-1');
                        });
                    }
                    let stepItem = document.createElement("div");
                    stepItem.classList.add('step-item');
                    stepItem.setAttribute('id', `step-${fieldIndex}`);
                    stepItem.innerHTML += `
                                <label class="form-field__label  step-item__number" for="step-description-${fieldIndex}"></label>
                                <button type="button" class="btn-reset  step-item__delete" aria-label="Удалить шаг">
                                    <svg class="icon" aria-hidden="true" focusable="false">
                                        <use href="${svgCross}" />
                                    </svg>
                                </button>
                                <div class="step-item__body">
                                    <div class="imageuploader  imageuploader--small  step-item__imageuploader">
                                        <label class="input  input--photo  imageuploader__input">
                                            <input type="file" name="step-photo-${fieldIndex}" accept=".jpg, .jpeg, .png">
                                            <div class="imageuploader__placeholder">
                                                <svg class="icon" aria-hidden="true" focusable="false">
                                                    <use href="${svgImage}"/>
                                                </svg>
                                                Загрузите фото шага
                                            </div>
                                        </label>
                                        <button type="button" class="btn  btn--other  imageuploader__btn  hidden">
                                            <svg class="icon  icon--16" aria-hidden="true" focusable="false">
                                                <use href="${svgDelete}" />
                                            </svg>
                                        </button>
                                    </div>
                                    <textarea name="step-description-${fieldIndex}" id="step-description-${fieldIndex}" class="input  input--textarea  step-item__input" placeholder="Замешиваем тесто для блинов. В 1 литр теплого молока добавляем 4 яйца..." autocomplete="off" maxlength="5000"></textarea>
                                    <label class="form-field__error  hidden" for="step-description-${fieldIndex}">
                                        <svg class="icon  icon--16" aria-hidden="true" focusable="false">
                                            <use href="${svgCircleCross}"/>
                                        </svg>
                                        <span class="form-field__text">Здесь будет текст ошибки</span>
                                    </label>
                                </div>
                            `;
                    stepList.append(stepItem);
                    });
                }
                })();

                /***/
}),

    /***/ "./src/js/components/_scroll-active.js":
    /*!*********************************************!*\
      !*** ./src/js/components/_scroll-active.js ***!
      \*********************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

                (function () {
                    if (_vars__WEBPACK_IMPORTED_MODULE_0__["default"].sidebarTab) {
                        const fieldsets = document.querySelectorAll('fieldset[id]');
                        function scrollActive() {
                            const scrollY = window.pageYOffset;
                            fieldsets.forEach(current => {
                                const fieldsetHeight = current.offsetHeight + 40;
                                const fieldsetTop = current.offsetTop - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].headerHeight - 205;
                                const fieldsetId = current.getAttribute('id');
                                const fieldsetIdLast = fieldsets[fieldsets.length - 1].getAttribute('id');
                                const fieldsetItems = document.querySelectorAll('.sidebar-tree__list li');
                                if (window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
                                    fieldsetItems.forEach(e => {
                                        e.classList.remove('active');
                                    });
                                    document.querySelector('.sidebar-tree__list a[href*=' + fieldsetIdLast + ']').parentElement.classList.add('active');
                                } else {
                                    if (scrollY > fieldsetTop && scrollY <= fieldsetTop + fieldsetHeight) {
                                        document.querySelector('.sidebar-tree__list a[href*=' + fieldsetId + ']').parentElement.classList.add('active');
                                    } else {
                                        document.querySelector('.sidebar-tree__list a[href*=' + fieldsetId + ']').parentElement.classList.remove('active');
                                    }
                                }
                            });
                        }
                        window.addEventListener('scroll', scrollActive);
                    }
                })();

                /***/
}),

    /***/ "./src/js/components/_short-ingredients.js":
    /*!*************************************************!*\
      !*** ./src/js/components/_short-ingredients.js ***!
      \*************************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

                (function () {
                    if (document.querySelector('[data-short-ingredients]')) {
                        _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.addEventListener('click', e => {
                            const target = e.target;
                            if (target.closest('[data-short-ingredients-toggle]')) {
                                const shortIngredientsToggle = target;
                                const shortIngredients = target.nextElementSibling;
                                shortIngredientsToggle.classList.toggle('active');
                                shortIngredients.classList.toggle('active');
                                if (shortIngredients.classList.contains('active')) {
                                    shortIngredientsToggle.setAttribute('aria-expanded', 'true');
                                    shortIngredientsToggle.setAttribute('aria-label', 'Закрыть список ингредиентов');
                                } else {
                                    shortIngredientsToggle.setAttribute('aria-expanded', 'false');
                                    shortIngredientsToggle.setAttribute('aria-label', 'Открыть список ингредиентов');
                                }
                            }
                        });
                        _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.addEventListener('click', e => {
                            const target = e.target;
                            if (!target.closest('[data-short-ingredients-toggle]') && !target.closest('[data-short-ingredients]')) {
                                const shortIngredientsToggle = document.querySelectorAll('[data-short-ingredients-toggle]');
                                const shortIngredients = document.querySelectorAll('[data-short-ingredients]');
                                shortIngredientsToggle.forEach(e => {
                                    e.setAttribute('aria-expanded', 'false');
                                    e.setAttribute('aria-label', 'Открыть список ингредиентов');
                                    e.classList.remove('active');
                                });
                                shortIngredients.forEach(e => {
                                    e.classList.remove('active');
                                });
                            }
                        });
                    }
                })();

                /***/
}),

    /***/ "./src/js/components/_smooth-scroll.js":
    /*!*********************************************!*\
      !*** ./src/js/components/_smooth-scroll.js ***!
      \*********************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
    /* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_0__);

                const scroll = new (smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default())('a[href*="#"]', {
                    updateURL: false,
                    offset: 150
                });

                /***/
}),

    /***/ "./src/js/components/_textarea-resize.js":
    /*!***********************************************!*\
      !*** ./src/js/components/_textarea-resize.js ***!
      \***********************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

                if (_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.querySelector('.comments__input')) {
                    const textArea = _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.querySelector('.comments__input');
                    textArea.setAttribute('style', 'height:' + textArea.scrollHeight + 'px');
                    textArea.addEventListener("input", () => {
                        textArea.style.height = 'auto';
                        textArea.style.height = textArea.scrollHeight + 'px';
                    });
                }

                /***/
}),

    /***/ "./src/js/vendor/focus-visible.js":
    /*!****************************************!*\
      !*** ./src/js/vendor/focus-visible.js ***!
      \****************************************/
    /***/ (() => {

                /**
                 * Applies the :focus-visible polyfill at the given scope.
                 * A scope in this case is either the top-level Document or a Shadow Root.
                 *
                 * @param {(Document|ShadowRoot)} scope
                 * @see https://github.com/WICG/focus-visible
                 */
                function applyFocusVisiblePolyfill(scope) {
                    var hadKeyboardEvent = true;
                    var hadFocusVisibleRecently = false;
                    var hadFocusVisibleRecentlyTimeout = null;
                    var inputTypesAllowlist = {
                        text: true,
                        search: true,
                        url: true,
                        tel: true,
                        email: true,
                        password: true,
                        number: true,
                        date: true,
                        month: true,
                        week: true,
                        time: true,
                        datetime: true,
                        'datetime-local': true
                    };

                    /**
                     * Helper function for legacy browsers and iframes which sometimes focus
                     * elements like document, body, and non-interactive SVG.
                     * @param {Element} el
                     */
                    function isValidFocusTarget(el) {
                        if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
                            return true;
                        }
                        return false;
                    }

                    /**
                     * Computes whether the given element should automatically trigger the
                     * `focus-visible` class being added, i.e. whether it should always match
                     * `:focus-visible` when focused.
                     * @param {Element} el
                     * @return {boolean}
                     */
                    function focusTriggersKeyboardModality(el) {
                        var type = el.type;
                        var tagName = el.tagName;
                        if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
                            return true;
                        }
                        if (tagName === 'TEXTAREA' && !el.readOnly) {
                            return true;
                        }
                        if (el.isContentEditable) {
                            return true;
                        }
                        return false;
                    }

                    /**
                     * Add the `focus-visible` class to the given element if it was not added by
                     * the author.
                     * @param {Element} el
                     */
                    function addFocusVisibleClass(el) {
                        if (el.classList.contains('focus-visible')) {
                            return;
                        }
                        el.classList.add('focus-visible');
                        el.setAttribute('data-focus-visible-added', '');
                    }

                    /**
                     * Remove the `focus-visible` class from the given element if it was not
                     * originally added by the author.
                     * @param {Element} el
                     */
                    function removeFocusVisibleClass(el) {
                        if (!el.hasAttribute('data-focus-visible-added')) {
                            return;
                        }
                        el.classList.remove('focus-visible');
                        el.removeAttribute('data-focus-visible-added');
                    }

                    /**
                     * If the most recent user interaction was via the keyboard;
                     * and the key press did not include a meta, alt/option, or control key;
                     * then the modality is keyboard. Otherwise, the modality is not keyboard.
                     * Apply `focus-visible` to any current active element and keep track
                     * of our keyboard modality state with `hadKeyboardEvent`.
                     * @param {KeyboardEvent} e
                     */
                    function onKeyDown(e) {
                        if (e.metaKey || e.altKey || e.ctrlKey) {
                            return;
                        }
                        if (isValidFocusTarget(scope.activeElement)) {
                            addFocusVisibleClass(scope.activeElement);
                        }
                        hadKeyboardEvent = true;
                    }

                    /**
                     * If at any point a user clicks with a pointing device, ensure that we change
                     * the modality away from keyboard.
                     * This avoids the situation where a user presses a key on an already focused
                     * element, and then clicks on a different element, focusing it with a
                     * pointing device, while we still think we're in keyboard modality.
                     * @param {Event} e
                     */
                    function onPointerDown(e) {
                        hadKeyboardEvent = false;
                    }

                    /**
                     * On `focus`, add the `focus-visible` class to the target if:
                     * - the target received focus as a result of keyboard navigation, or
                     * - the event target is an element that will likely require interaction
                     *   via the keyboard (e.g. a text box)
                     * @param {Event} e
                     */
                    function onFocus(e) {
                        // Prevent IE from focusing the document or HTML element.
                        if (!isValidFocusTarget(e.target)) {
                            return;
                        }
                        if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
                            addFocusVisibleClass(e.target);
                        }
                    }

                    /**
                     * On `blur`, remove the `focus-visible` class from the target.
                     * @param {Event} e
                     */
                    function onBlur(e) {
                        if (!isValidFocusTarget(e.target)) {
                            return;
                        }
                        if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
                            // To detect a tab/window switch, we look for a blur event followed
                            // rapidly by a visibility change.
                            // If we don't see a visibility change within 100ms, it's probably a
                            // regular focus change.
                            hadFocusVisibleRecently = true;
                            window.clearTimeout(hadFocusVisibleRecentlyTimeout);
                            hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
                                hadFocusVisibleRecently = false;
                            }, 100);
                            removeFocusVisibleClass(e.target);
                        }
                    }

                    /**
                     * If the user changes tabs, keep track of whether or not the previously
                     * focused element had .focus-visible.
                     * @param {Event} e
                     */
                    function onVisibilityChange(e) {
                        if (document.visibilityState === 'hidden') {
                            // If the tab becomes active again, the browser will handle calling focus
                            // on the element (Safari actually calls it twice).
                            // If this tab change caused a blur on an element with focus-visible,
                            // re-apply the class when the user switches back to the tab.
                            if (hadFocusVisibleRecently) {
                                hadKeyboardEvent = true;
                            }
                            addInitialPointerMoveListeners();
                        }
                    }

                    /**
                     * Add a group of listeners to detect usage of any pointing devices.
                     * These listeners will be added when the polyfill first loads, and anytime
                     * the window is blurred, so that they are active when the window regains
                     * focus.
                     */
                    function addInitialPointerMoveListeners() {
                        document.addEventListener('mousemove', onInitialPointerMove);
                        document.addEventListener('mousedown', onInitialPointerMove);
                        document.addEventListener('mouseup', onInitialPointerMove);
                        document.addEventListener('pointermove', onInitialPointerMove);
                        document.addEventListener('pointerdown', onInitialPointerMove);
                        document.addEventListener('pointerup', onInitialPointerMove);
                        document.addEventListener('touchmove', onInitialPointerMove);
                        document.addEventListener('touchstart', onInitialPointerMove);
                        document.addEventListener('touchend', onInitialPointerMove);
                    }
                    function removeInitialPointerMoveListeners() {
                        document.removeEventListener('mousemove', onInitialPointerMove);
                        document.removeEventListener('mousedown', onInitialPointerMove);
                        document.removeEventListener('mouseup', onInitialPointerMove);
                        document.removeEventListener('pointermove', onInitialPointerMove);
                        document.removeEventListener('pointerdown', onInitialPointerMove);
                        document.removeEventListener('pointerup', onInitialPointerMove);
                        document.removeEventListener('touchmove', onInitialPointerMove);
                        document.removeEventListener('touchstart', onInitialPointerMove);
                        document.removeEventListener('touchend', onInitialPointerMove);
                    }

                    /**
                     * When the polfyill first loads, assume the user is in keyboard modality.
                     * If any event is received from a pointing device (e.g. mouse, pointer,
                     * touch), turn off keyboard modality.
                     * This accounts for situations where focus enters the page from the URL bar.
                     * @param {Event} e
                     */
                    function onInitialPointerMove(e) {
                        // Work around a Safari quirk that fires a mousemove on <html> whenever the
                        // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
                        if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
                            return;
                        }
                        hadKeyboardEvent = false;
                        removeInitialPointerMoveListeners();
                    }

                    // For some kinds of state, we are interested in changes at the global scope
                    // only. For example, global pointer input, global key presses and global
                    // visibility change should affect the state at every scope:
                    document.addEventListener('keydown', onKeyDown, true);
                    document.addEventListener('mousedown', onPointerDown, true);
                    document.addEventListener('pointerdown', onPointerDown, true);
                    document.addEventListener('touchstart', onPointerDown, true);
                    document.addEventListener('visibilitychange', onVisibilityChange, true);
                    addInitialPointerMoveListeners();

                    // For focus and blur, we specifically care about state changes in the local
                    // scope. This is because focus / blur events that originate from within a
                    // shadow root are not re-dispatched from the host element if it was already
                    // the active element in its own scope:
                    scope.addEventListener('focus', onFocus, true);
                    scope.addEventListener('blur', onBlur, true);

                    // We detect that a node is a ShadowRoot by ensuring that it is a
                    // DocumentFragment and also has a host property. This check covers native
                    // implementation and polyfill implementation transparently. If we only cared
                    // about the native implementation, we could just check if the scope was
                    // an instance of a ShadowRoot.
                    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
                        // Since a ShadowRoot is a special kind of DocumentFragment, it does not
                        // have a root element to add a class to. So, we add this attribute to the
                        // host element instead:
                        scope.host.setAttribute('data-js-focus-visible', '');
                    } else if (scope.nodeType === Node.DOCUMENT_NODE) {
                        document.documentElement.classList.add('js-focus-visible');
                        document.documentElement.setAttribute('data-js-focus-visible', '');
                    }
                }

                // It is important to wrap all references to global window and document in
                // these checks to support server-side rendering use cases
                // @see https://github.com/WICG/focus-visible/issues/199
                if (typeof window !== 'undefined' && typeof document !== 'undefined') {
                    // Make the polyfill helper globally available. This can be used as a signal
                    // to interested libraries that wish to coordinate with the polyfill for e.g.,
                    // applying the polyfill to a shadow root:
                    window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

                    // Notify interested libraries of the polyfill's presence, in case the
                    // polyfill was loaded lazily:
                    var event;
                    try {
                        event = new CustomEvent('focus-visible-polyfill-ready');
                    } catch (error) {
                        // IE11 does not support using CustomEvent as a constructor directly:
                        event = document.createEvent('CustomEvent');
                        event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
                    }
                    window.dispatchEvent(event);
                }
                if (typeof document !== 'undefined') {
                    // Apply the polyfill to the global document, so that no JavaScript
                    // coordination is required to use the polyfill in the top-level document:
                    applyFocusVisiblePolyfill(document);
                }

                /***/
}),

    /***/ "./node_modules/graph-modal/src/graph-modal.js":
    /*!*****************************************************!*\
      !*** ./node_modules/graph-modal/src/graph-modal.js ***!
      \*****************************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "default": () => (/* binding */ GraphModal)
                    /* harmony export */
});
                class GraphModal {
                    constructor(options) {
                        let defaultOptions = {
                            isOpen: () => { },
                            isClose: () => { },
                        }
                        this.options = Object.assign(defaultOptions, options);
                        this.modal = document.querySelector('.graph-modal');
                        this.speed = 300;
                        this.animation = 'fade';
                        this._reOpen = false;
                        this._nextContainer = false;
                        this._overlayChecker = false;
                        this.modalContainer = false;
                        this.isOpen = false;
                        this.previousActiveElement = false;
                        this._focusElements = [
                            'a[href]',
                            'input',
                            'select',
                            'textarea',
                            'button',
                            'iframe',
                            '[contenteditable]',
                            '[tabindex]:not([tabindex^="-"])'
                        ];
                        this._fixBlocks = document.querySelectorAll('.fix-block');
                        this.events();
                    }

                    events() {
                        if (this.modal) {
                            document.addEventListener('click', function (e) {
                                const clickedElement = e.target.closest(`[data-graph-path]`);
                                if (clickedElement) {
                                    let target = clickedElement.dataset.graphPath;
                                    let animation = clickedElement.dataset.graphAnimation;
                                    let speed = clickedElement.dataset.graphSpeed;
                                    this.animation = animation ? animation : 'fade';
                                    this.speed = speed ? parseInt(speed) : 300;
                                    this._nextContainer = document.querySelector(`[data-graph-target="${target}"]`);
                                    this.open();
                                    return;
                                }

                                if (e.target.closest('.js-modal-close')) {
                                    this.close();
                                    return;
                                }
                            }.bind(this));

                            window.addEventListener('keydown', function (e) {
                                if (e.keyCode == 27 && this.isOpen) {
                                    this.close();
                                }

                                if (e.which == 9 && this.isOpen) {
                                    this.focusCatch(e);
                                    return;
                                }
                            }.bind(this));

                            document.addEventListener('mousedown', function (e) {
                                if (!e.target.classList.contains('graph-modal')) return;
                                this._overlayChecker = true;
                            }.bind(this));

                            document.addEventListener('mouseup', function (e) {
                                if (e.target.classList.contains('graph-modal') && this._overlayChecker) {
                                    e.preventDefault();
                                    this._overlayChecker = !this._overlayChecker;
                                    this.close();
                                    return;
                                }
                                this._overlayChecker = false;
                            }.bind(this));
                        }
                    }

                    open(selector) {
                        this.previousActiveElement = document.activeElement;

                        if (this.isOpen) {
                            this.reOpen = true;
                            this.close();
                            return;
                        }

                        this.modalContainer = this._nextContainer;

                        if (selector) {
                            this.modalContainer = document.querySelector(`[data-graph-target="${selector}"]`);
                        }

                        this.modalContainer.scrollTo(0, 0)

                        this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
                        this.modal.classList.add('is-open');

                        document.body.style.scrollBehavior = 'auto';
                        document.documentElement.style.scrollBehavior = 'auto';

                        this.disableScroll();

                        this.modalContainer.classList.add('graph-modal-open');
                        this.modalContainer.classList.add(this.animation);

                        setTimeout(() => {
                            this.options.isOpen(this);
                            this.modalContainer.classList.add('animate-open');
                            this.isOpen = true;
                            this.focusTrap();
                        }, this.speed);
                    }

                    close() {
                        if (this.modalContainer) {
                            this.modalContainer.classList.remove('animate-open');
                            this.modalContainer.classList.remove(this.animation);
                            this.modal.classList.remove('is-open');
                            this.modalContainer.classList.remove('graph-modal-open');

                            this.enableScroll();

                            document.body.style.scrollBehavior = 'auto';
                            document.documentElement.style.scrollBehavior = 'auto';

                            this.options.isClose(this);
                            this.isOpen = false;
                            this.focusTrap();

                            if (this.reOpen) {
                                this.reOpen = false;
                                this.open();
                            }
                        }
                    }

                    focusCatch(e) {
                        const nodes = this.modalContainer.querySelectorAll(this._focusElements);
                        const nodesArray = Array.prototype.slice.call(nodes);
                        const focusedItemIndex = nodesArray.indexOf(document.activeElement)
                        if (e.shiftKey && focusedItemIndex === 0) {
                            nodesArray[nodesArray.length - 1].focus();
                            e.preventDefault();
                        }
                        if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {
                            nodesArray[0].focus();
                            e.preventDefault();
                        }
                    }

                    focusTrap() {
                        const nodes = this.modalContainer.querySelectorAll(this._focusElements);
                        if (this.isOpen) {
                            if (nodes.length) nodes[0].focus();
                        } else {
                            this.previousActiveElement.focus();
                        }
                    }

                    disableScroll() {
                        let pagePosition = window.scrollY;
                        this.lockPadding();
                        document.body.classList.add('disable-scroll');
                        document.body.dataset.position = pagePosition;
                        document.body.style.top = -pagePosition + 'px';
                    }

                    enableScroll() {
                        let pagePosition = parseInt(document.body.dataset.position, 10);
                        this.unlockPadding();
                        document.body.style.top = 'auto';
                        document.body.classList.remove('disable-scroll');
                        window.scrollTo({
                            top: pagePosition,
                            left: 0
                        });
                        document.body.removeAttribute('data-position');
                    }

                    lockPadding() {
                        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
                        this._fixBlocks.forEach((el) => {
                            el.style.paddingRight = paddingOffset;
                        });
                        document.body.style.paddingRight = paddingOffset;
                    }

                    unlockPadding() {
                        this._fixBlocks.forEach((el) => {
                            el.style.paddingRight = '0px';
                        });
                        document.body.style.paddingRight = '0px';
                    }
                }


                /***/
}),

    /***/ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js":
    /*!************************************************************************!*\
      !*** ./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js ***!
      \************************************************************************/
    /***/ (function (module, exports, __webpack_require__) {

                var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
                window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) { var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this; do { for (t = n.length; 0 <= --t && n.item(t) !== o;); } while (t < 0 && (o = o.parentElement)); return o }), (function () { if ("function" == typeof window.CustomEvent) return; function e(e, t) { t = t || { bubbles: !1, cancelable: !1, detail: void 0 }; var n = document.createEvent("CustomEvent"); return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n } e.prototype = window.Event.prototype, window.CustomEvent = e })(), (function () { for (var r = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t)window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"]; window.requestAnimationFrame || (window.requestAnimationFrame = function (e, t) { var n = (new Date).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout((function () { e(n + o) }), o); return r = n + o, a }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) { clearTimeout(e) }) })(), (function (e, t) {
                    true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () { return t(e) }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0
                })("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, (function (M) { "use strict"; var q = { ignore: "[data-scroll-ignore]", header: null, topOnEmptyHash: !0, speed: 500, speedAsDuration: !1, durationMax: null, durationMin: null, clip: !0, offset: 0, easing: "easeInOutCubic", customEasing: null, updateURL: !0, popstate: !0, emitEvents: !0 }, I = function () { var n = {}; return Array.prototype.forEach.call(arguments, (function (e) { for (var t in e) { if (!e.hasOwnProperty(t)) return; n[t] = e[t] } })), n }, r = function (e) { "#" === e.charAt(0) && (e = e.substr(1)); for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o;) { if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000."); 1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a) } return "#" + r }, F = function () { return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) }, L = function (e) { return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0; var t }, x = function (e, t, n) { 0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), e.focus(), e.style.outline = "none"), M.scrollTo(0, t)) }, H = function (e, t, n, o) { if (t.emitEvents && "function" == typeof M.CustomEvent) { var a = new CustomEvent(e, { bubbles: !0, detail: { anchor: n, toggle: o } }); document.dispatchEvent(a) } }; return function (o, e) { var b, a, A, O, C = {}; C.cancelScroll = function (e) { cancelAnimationFrame(O), O = null, e || H("scrollCancel", b) }, C.animateScroll = function (a, r, e) { C.cancelScroll(); var i = I(b || q, e || {}), c = "[object Number]" === Object.prototype.toString.call(a), t = c || !a.tagName ? null : a; if (c || t) { var s = M.pageYOffset; i.header && !A && (A = document.querySelector(i.header)); var n, o, u, l, m, d, f, h, p = L(A), g = c ? a : (function (e, t, n, o) { var a = 0; if (e.offsetParent) for (; a += e.offsetTop, e = e.offsetParent;); return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), a })(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip), y = g - s, v = F(), w = 0, S = (n = y, u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)), E = function (e) { var t, n, o; l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, "easeInQuad" === (t = i).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), (function (e, t) { var n = M.pageYOffset; if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), x(a, t, c), H("scrollStop", i, a, r), !(O = l = null) })(d, g) || (O = M.requestAnimationFrame(E), l = e) }; 0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({ smoothScroll: JSON.stringify(h), anchor: f.id }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), C.cancelScroll(!0), M.requestAnimationFrame(E)) } }; var t = function (e) { if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) { var t, n; try { t = r(decodeURIComponent(a.hash)) } catch (e) { t = r(a.hash) } if ("#" === t) { if (!b.topOnEmptyHash) return; n = document.documentElement } else n = document.querySelector(t); (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), (function (e) { if (history.replaceState && e.updateURL && !history.state) { var t = M.location.hash; t = t || "", history.replaceState({ smoothScroll: JSON.stringify(e), anchor: t || M.pageYOffset }, document.title, t || M.location.href) } })(b), C.animateScroll(n, a)) } }, n = function (e) { if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) { var t = history.state.anchor; "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, { updateURL: !1 }) } }; C.destroy = function () { b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), C.cancelScroll(), O = A = a = b = null) }; return (function () { if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs."; C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1) })(), C } }));

                /***/
})

        /******/
});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
    /******/ 		if (cachedModule !== undefined) {
    /******/ 			return cachedModule.exports;
            /******/
}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			// no module.id needed
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
            /******/
};
    /******/
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
        /******/
}
    /******/
    /************************************************************************/
    /******/ 	/* webpack/runtime/compat get default export */
    /******/ 	(() => {
    /******/ 		// getDefaultExport function for compatibility with non-harmony modules
    /******/ 		__webpack_require__.n = (module) => {
    /******/ 			var getter = module && module.__esModule ?
    /******/ 				() => (module['default']) :
    /******/ 				() => (module);
    /******/ 			__webpack_require__.d(getter, { a: getter });
    /******/ 			return getter;
            /******/
};
        /******/
})();
    /******/
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	(() => {
    /******/ 		// define getter functions for harmony exports
    /******/ 		__webpack_require__.d = (exports, definition) => {
    /******/ 			for (var key in definition) {
    /******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
}
                /******/
}
            /******/
};
        /******/
})();
    /******/
    /******/ 	/* webpack/runtime/global */
    /******/ 	(() => {
    /******/ 		__webpack_require__.g = (function () {
    /******/ 			if (typeof globalThis === 'object') return globalThis;
    /******/ 			try {
    /******/ 				return this || new Function('return this')();
                /******/
} catch (e) {
    /******/ 				if (typeof window === 'object') return window;
                /******/
}
            /******/
})();
        /******/
})();
    /******/
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	(() => {
    /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
})();
    /******/
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	(() => {
    /******/ 		// define __esModule on exports
    /******/ 		__webpack_require__.r = (exports) => {
    /******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
}
    /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
            /******/
};
        /******/
})();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
        "use strict";
        /*!************************!*\
          !*** ./src/js/main.js ***!
          \************************/
        __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
    /* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
    /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
    /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");




    })();

    /******/
})()
    ;