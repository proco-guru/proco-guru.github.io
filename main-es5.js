function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./modules/articleseries/articleseries.module": ["./src/app/modules/articleseries/articleseries.module.ts", "common", "modules-articleseries-articleseries-module"],
      "./modules/course/course.module": ["./src/app/modules/course/course.module.ts", "common", "modules-course-course-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"navbar-left\">\r\n      <button (click)=\"toggle()\" class=\"navbar-toggler\" type=\"button\">&#9776;</button>\r\n      <a class=\"navbar-brand\" href=\"/\">\r\n        <img class=\"logo-dark\" src=\"./assets/img/logo-dark.png\" alt=\"logo\">\r\n      </a>\r\n    </div>\r\n\r\n    <section [style.left.px]=\"mobileNavLeft\" class=\"navbar-mobile\">\r\n      <nav class=\"nav nav-navbar nav-transform-none ml-auto\">\r\n        <a class=\"nav-link\" routerLink=\"/courses/list\">Courses</a>\r\n        <a class=\"nav-link\" routerLink=\"/series/list\">Blogs</a>\r\n        <a *ngIf=\"auth.isLoggedIn\" class=\"nav-link\" routerLink=\"/writer-profile\">{{auth.personName}}</a>\r\n        <a *ngIf=\"!auth.isLoggedIn\" class=\"nav-link\" routerLink=\"/login\">{{auth.personName || 'My Account'}}</a>\r\n        <a *ngIf=\"auth.isLoggedIn\" class=\"nav-link\" (click)=\"auth.logout()\" routerLink=\"/\">Logout</a>\r\n        <a (click)=\"toggle()\" class=\"d-lg-none nav-link\">Close</a>\r\n      </nav>\r\n    </section>\r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n<!-- Main Content -->\r\n<main class=\"main-content\">\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</main>\r\n\r\n<div class=\"popup text-white bg-dark col-10 py-4\" [ngClass]=\"{'show' : msgObj?.msg && msgObj?.msg.length}\"\r\n  data-position=\"bottom-center\" data-animation=\"slide-up\">\r\n  <div class=\"row gap-y align-items-center\">\r\n    <div class=\"col-md\">\r\n      {{msgObj?.msg}}\r\n    </div>\r\n\r\n    <div class=\"col-md-auto\">\r\n      <button class=\"btn btn-sm btn-warning\" (click)=\"msgObj={}\">Got it</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"popup bg-img text-white border-0 col-10 col-md-4 p-6\"\r\n  [ngClass]=\"{'show' : promoObj?.promo && promoObj?.promo?.title}\" data-position=\"bottom-center\"\r\n  data-animation=\"slide-up\" [style.background-image]=\"'url(' + promoObj?.promo?.img +  ')'\" data-overlay=\"1\">\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"popup\" aria-label=\"Close\">\r\n    <span (click)=\"promoObj={}\" aria-hidden=\"true\">×</span>\r\n  </button>\r\n\r\n  <div class=\"text-center position-relative\">\r\n    <h4 [innerHTML]=\"promoObj?.promo?.title\"></h4>\r\n    <p class=\"lead-1\" [innerHTML]=\"promoObj?.promo?.description\"></p>\r\n    <br>\r\n    <a class=\"btn btn-lg btn-round btn-info px-7\"\r\n      [routerLink]=\"promoObj?.promo?.routerLink\">{{promoObj?.promo?.button}}</a>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n<app-paypal-buy [showBuyModal]=\"showBuyModal\" [amount]=\"paypalTransaction.amount\"\r\n  [courseCount]=\"paypalTransaction.courseCount\"></app-paypal-buy>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkout/checkout.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkout/checkout.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCheckoutCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section\">\n    <div class=\"container\">\n      <header class=\"section-header\">\n        <small>Pricing</small>\n        <h2>Checkout to buy</h2>\n        <hr>\n        <p class=\"lead\">Won't said night above you're she'd behold moveth said one fowl. Beast forth. Man creepeth. She'd above bring blessed.</p>\n      </header>\n\n\n      <div class=\"row gap-y\">\n\n        <div class=\"col-lg-4\">\n          <div class=\"pricing-3\">\n            <h6 class=\"plan-name\">Personal</h6>\n            <h2 class=\"price\">$9</h2>\n            <ul>\n              <li>Single Website</li>\n              <li>Manual Import</li>\n              <li>No Support</li>\n            </ul>\n            <br>\n            <a class=\"btn btn-round btn-outline-primary w-200\" href=\"#\">Get started</a>\n          </div>\n        </div>\n\n\n        <div class=\"col-lg-4\">\n          <div class=\"pricing-3 popular\">\n            <span class=\"popular-tag\">Best choice</span>\n            <h6 class=\"plan-name\">Team</h6>\n            <h2 class=\"price\">$59</h2>\n            <ul>\n              <li>7 Websites</li>\n              <li>Auto Import</li>\n              <li>10 Hour Support</li>\n            </ul>\n            <br>\n            <a class=\"btn btn-round btn-primary w-200\" href=\"#\">Get started</a>\n          </div>\n        </div>\n\n\n        <div class=\"col-lg-4\">\n          <div class=\"pricing-3\">\n            <h6 class=\"plan-name\">Business</h6>\n            <h2 class=\"price\">$149</h2>\n            <ul>\n              <li>Unlimited Websites</li>\n              <li>Auto Import</li>\n              <li>24/7 Support</li>\n            </ul>\n            <br>\n            <a class=\"btn btn-round btn-outline-primary w-200\" href=\"#\">Get started</a>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/editor/editor.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/editor/editor.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEditorEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section mt-40\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n\r\n      <div id=\"codex-editor\"></div>\r\n      <div class=\"btn-group pull-right\" role=\"group\" aria-label=\"Basic example\">\r\n        <!-- <button type=\"button\" (click)=\"makeEditable()\" class=\"btn btn-secondary\">Editable</button>\r\n        <button type=\"button\" (click)=\"makeNonEditable()\" class=\"btn btn-secondary\">Non Editable</button> -->\r\n\r\n\r\n        <button type=\"button\" (click)=\"makeEditable()\" class=\"btn btn-secondary\">Edit Article</button>\r\n\r\n        <button type=\"button\" data-toggle=\"modal\" data-target=\"#modal-analysis\" (click)=\"analyzeDoc()\"\r\n          class=\"btn btn-secondary\">\r\n          <span *ngIf=\"isAnalyzing\" class=\"spinner-grow spinner-grow-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n          Analyze</button>\r\n        <button type=\"button\" (click)=\"save()\" class=\"btn btn-secondary\">Save</button>\r\n        <button type=\"button\" (click)=\"publish()\" class=\"btn btn-secondary\">Publish</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n\r\n\r\n<div class=\"container\">\r\n  <!-- Modal - analysis content -->\r\n  <div class=\"modal\" id=\"modal-analysis\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-long\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Article analysis</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">×</span>\r\n          </button>\r\n        </div>\r\n        <div *ngIf=\"analysisResult\" class=\"modal-body\">\r\n          <div class=\"row\" style=\"margin:1rem;\">\r\n            <div class=\"col-md-6\">\r\n\r\n\r\n\r\n              <div class=\"card text-white bg-img justify-content-center\"\r\n                style=\"background-image: url(https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80); min-height: 200px\"\r\n                data-overlay=\"6\">\r\n                <div class=\"card-body text-center flex-grow-0\">\r\n                  <h5 class=\"card-title mb-0\">Sentiment analysis</h5>\r\n\r\n                  <small>Polarity : {{analysisResult?.sentiment.polarity}}</small>\r\n                  <br>\r\n                  <small>Impact : {{analysisResult?.sentiment.valence}}</small>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n\r\n\r\n              <div class=\"card text-white bg-img justify-content-center\"\r\n                style=\"background-image: url(https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80); min-height: 200px\"\r\n                data-overlay=\"6\">\r\n                <div class=\"card-body text-center flex-grow-0\">\r\n                  <h5 class=\"card-title mb-0\">Readability analysis</h5>\r\n\r\n                  <small>Confidence : {{analysisResult?.readability.confidence}}</small>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <h3 class=\"divider\">Key Phrases</h3>\r\n\r\n          <div class=\"text-center\">\r\n            <span *ngFor=\"let a of analysisResult?.keyPhrases\" class=\"badge badge-pale badge-secondary\">{{a}}</span>\r\n          </div>\r\n\r\n          <h3 class=\"divider\">Key words</h3>\r\n          <div class=\"text-center\">\r\n            <span *ngFor=\"let a of analysisResult?.keywords\" class=\"badge badge-pale badge-primary\">{{a}}</span>\r\n          </div>\r\n\r\n\r\n          <h3 class=\"divider\">Readability analysis : </h3>\r\n          <ol>\r\n            <li>Confidence : {{analysisResult?.readability.confidence}} </li>\r\n            <li>messages :\r\n              <ol type=\"i\">\r\n                <li *ngFor=\"let one of analysisResult?.readability.messages\">{{one.message}} <br>\r\n                  {{processReadability(one)}} </li>\r\n              </ol>\r\n            </li>\r\n          </ol>\r\n\r\n\r\n          <h3 class=\"divider\">Spelling analysis : </h3>\r\n          <ol>\r\n            <!-- <li>messages :\r\n              <ul>\r\n                <li *ngFor=\"let one of analysisResult?.spell.messages\">{{one.message}}</li>\r\n              </ul>\r\n            </li> -->\r\n            <li>Spelling Mistakes :\r\n              <ol type=\"i\">\r\n                <li *ngFor=\"let x of analysisResult?.spell.spellMistakes\">{{x}}</li>\r\n              </ol>\r\n            </li>\r\n          </ol>\r\n\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" (click)=\"makeEditable()\" data-dismiss=\"modal\" class=\"btn btn-primary\">Edit\r\n            article</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer bg-gray py-7\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-12\">\r\n        <p><a href=\"#\"><img src=\"./assets/img/logo-dark.png\" alt=\"logo\"></a></p>\r\n      </div>\r\n\r\n      <div class=\"col-xl-5\">\r\n        <p>\r\n          We believe in optimal software designs, architectures,\r\n          full stack roles, enterpreneurial skills, decision making,\r\n          digital marketing, server managements and much more\r\n        </p>\r\n\r\n        <hr class=\"d-xl-none\">\r\n      </div>\r\n\r\n      <div class=\"col-4 col-xl-2 offset-xl-1\">\r\n        <div class=\"nav flex-column\">\r\n          <a class=\"nav-link\" href=\"#\">For Coaches</a>\r\n          <a class=\"nav-link\" href=\"#\">Coaching for Careers</a>\r\n          <a class=\"nav-link\" href=\"#\">Contact</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-4 col-xl-2\">\r\n        <div class=\"nav flex-column\">\r\n          <a class=\"nav-link\" href=\"#\">Features</a>\r\n          <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n          <a class=\"nav-link\" href=\"#\">Security</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-4 col-xl-2\">\r\n        <div class=\"nav flex-column\">\r\n          <a class=\"nav-link\" href=\"#\">Help Center</a>\r\n          <a class=\"nav-link\" href=\"#\">For Student</a>\r\n          <a class=\"nav-link\" href=\"#\">FAQ</a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"header bg-size-contain bg-img-right\" style=\"background-image: url(./assets/img/vector/home.png)\">\r\n  <div class=\"overlay opacity-95\" style=\"background-image: linear-gradient(90deg, #fff 30%, transparent 100%);\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center py-9\">\r\n      <div class=\"col-md-6\">\r\n\r\n        <h1 class=\"display-4\" data-font=\"Inconsolata:700\">Hack future with ProCo</h1>\r\n        <br>\r\n        <p class=\"lead-3\">Understand future technology, improve skillsets, architecture designs, decision makings,\r\n          coaching skills and\r\n          enterpreneural skills</p>\r\n        <br>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<section class=\"section bg-gray\">\r\n  <div class=\"container\">\r\n    <div class=\"row gap-y align-items-center\">\r\n\r\n      <div class=\"col-md-6\">\r\n        <img src=\"./assets/img/vector/18.png\" alt=\"...\">\r\n      </div>\r\n\r\n      <div class=\"col-md-5 ml-auto text-center text-md-left\">\r\n        <h2>Researched and Crafted with expert levels</h2>\r\n        <p>We consider and respect the growth path of stundents, try to be narrative and descriptive along with\r\n          practicles to make things clear.</p>\r\n        <p>You can take courses as per your expert levels and keep going. We try to craft\r\n          courses in steps for better and in depth knowledge.\r\n        </p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"header h-fullscreen\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center h-100\">\r\n\r\n      <div class=\"col-md-5 mr-auto\">\r\n        <h1 class=\"fw-600\">We believe in coaching than teaching</h1>\r\n        <br>\r\n        <p class=\"lead-2\">\r\n          We help you find paths in many courses like <span class=\"text-warning\">Coaching skills for careers</span>\r\n          which helps you undestand your own potential.\r\n          Teaching on other hand is required in streamlining the processes/subjects and then you can find destinations.\r\n        </p>\r\n        <br>\r\n        <!-- <a class=\"btn btn-xl btn-round btn-info\" href=\"#\">Join ProCo</a> -->\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-6\">\r\n        <img src=\"./assets/img/vector/22.png\" alt=\"...\">\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"section\">\r\n  <div class=\"container\">\r\n    <div class=\"row gap-y align-items-center\">\r\n      <div class=\"col-md-6 text-center\">\r\n        <img src=\"./assets/img/vector/13.png\" alt=\"...\">\r\n      </div>\r\n\r\n      <div class=\"col-md-6 text-center text-md-left\">\r\n        <h2>Are you looking for native language courses?</h2>\r\n        <p class=\"lead mb-6\">Yes, we undestand that language is just medium to deliver knowledge. Here on ProCo you can\r\n          find native language courses as well. Like English, Hindi, Marathi.</p>\r\n        <!-- <p><a class=\"btn btn-lg btn-round btn-primary\" href=\"#\">Start your journey</a></p> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"section bg-gray\">\r\n  <div class=\"container\">\r\n    <div class=\"row gap-y align-items-center\">\r\n\r\n      <div class=\"col-md-4\">\r\n        <p class=\"lead-7 text-dark fw-600 lh-2\">The most fare pricing plans ever.</p>\r\n        <p class=\"lead\">Our prices are very easy to understand. There's not any extra or hidden fee. You just pay what\r\n          is listed here.</p>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-7 ml-auto\">\r\n        <div class=\"row gap-y\">\r\n\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card text-center shadow-1 hover-shadow-9\">\r\n              <div class=\"card-img-top text-white bg-img h-200 d-flex align-items-center\"\r\n                style=\"background-image: url(./assets/img/thumb/3.jpg)\" data-overlay=\"1\">\r\n                <div class=\"position-relative w-100\">\r\n                  <p class=\"lead-4 text-uppercase fw-600 ls-1 mb-0\">Starter</p>\r\n                  <p>One time package</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-body py-6\">\r\n                <p class=\"lead-7 fw-600 text-dark\">\r\n                  <span data-monthly=\"$11.\" data-yearly=\"$129.\">$20.</span><span class=\"lead-4 align-text-top\">00</span>\r\n                </p>\r\n                <p>\r\n                  Single person<br>\r\n                  any 2 courses <br>\r\n\r\n                  Include codebases (as per contents)<br>\r\n                </p>\r\n                <br>\r\n                <div (click)=\"startPaypal(20, 2)\"><a class=\"btn btn-round btn-outline-secondary w-200\">Sign up</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n            <div class=\"card text-center shadow-1 hover-shadow-9\">\r\n              <div class=\"card-img-top text-white bg-img h-200 d-flex align-items-center\"\r\n                style=\"background-image: url(./assets/img/thumb/11.jpg)\" data-overlay=\"2\">\r\n                <div class=\"position-relative w-100\">\r\n                  <p class=\"lead-4 text-uppercase fw-600 ls-1 mb-0\">Learner</p>\r\n                  <p><span data-monthly=\"Monthly\" data-yearly=\"Yearly\">Lifetime benefit</span> package\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-body py-6\">\r\n                <p class=\"lead-7 fw-600 text-dark\">\r\n                  <span data-monthly=\"$11.\" data-yearly=\"$129.\">$30.</span><span class=\"lead-4 align-text-top\">00</span>\r\n                </p>\r\n                <p>\r\n                  Lifetime 20% off on every course<br>\r\n\r\n                  +Personal Plan <br>\r\n                  Messages/Chat support<br>\r\n\r\n                </p>\r\n                <br>\r\n                <div (click)=\"startPaypal(30, 2)\"><a class=\"btn btn-round btn-outline-secondary w-200\">Sign up</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/learn/learn-personalized/learn-personalized.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/learn/learn-personalized/learn-personalized.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLearnLearnPersonalizedLearnPersonalizedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header mb-9\">\n    <div class=\"overlay opacity-95\"\n      style=\"background-image: linear-gradient(135deg, #ffe2c8 0%, #fff 40%, transparent 100%);\">\n    </div>\n    <div class=\"container\">\n      <div class=\"c-video\">\n        <div *ngIf=\"!state.isPlaying\" class=\"c-video-overlay\">\n          <div class=\"row\">\n            <div class=\"col-lg-3\"></div>\n            <div class=\"col-lg-6 text-center middle\">\n  \n              <h1 class=\"fw-600\">{{ state.progress < 1? 'Start' : 'Resume'}} learning\n                <br><span [innerHTML]=\"state.videoDetails.title\" class=\"text-info\">\n  \n  \n                </span>\n              </h1>\n              <p class=\"lead mt-5 mb-8\">\n                {{state.videoDetails.details}}\n              </p>\n  \n            </div>\n          </div>\n        </div>\n        <!-- <video width=\"100%\" (click)=\"playPauseVideo()\" #videoPlayer controls crossorigin playsinline\n          [src]=\"state.videoLink\"></video> -->\n          <!-- <iframe [src]=\"videoLink\"  width=\"640\" height=\"640\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe> -->\n        <div class=\"controls\">\n\n           \n            <div class=\"mcnVideoBlock\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box !important;\">\n                <div class=\"mcnVideoBlockInner\" style=\"padding: 9px 18px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box !important;\">\n                    <div class=\"mcnImageCardBottomContent mcnVideoContainer\" style=\"display: flex;flex-direction: column;margin: 0px auto;width: 100%;background-color: #404040;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box !important;\">\n                        <div style=\"display: flex;flex: 0 0 auto;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box !important;\">\n\n                            <table width=\"100%\" height=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box !important;\">\n                                <tbody style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box !important;\">\n                                    <tr style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box !important;\">\n                                        <td style=\"-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box !important;\">\n                                            <div class=\"cardVideoContainer\" style=\"position: relative;height: 0;overflow: hidden;padding-bottom: 100%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box !important;\">\n                                                <!-- <iframe [src]=\"state.link\" webkitallowfullscreen=\"1\" mozallowfullscreen=\"1\" allowfullscreen=\"1\" frameborder=\"0\" style=\"position: absolute;top: 0;left: 0;width: 100%;height: 100%;\"></iframe> -->\n                                                <!-- <iframe src=\"https://vimeo.com/407508873/98ccdc2c13\" width=\"640\" height=\"359\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe> -->\n                                                <iframe [src]=\"state.link\" webkitallowfullscreen=\"1\" mozallowfullscreen=\"1\" allowfullscreen=\"1\" frameborder=\"0\" style=\"position: absolute;top: 0;left: 0;width: 100%;height: 100%;\"></iframe>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n          <!-- <div (click)=\"seekVideo($event)\" class=\"progress-bar\">\n            <div (click)=\"seekVideo($event)\" [style.width.%]=\"state.progress\" class=\"progress-line\"></div>\n          </div>\n          <div class=\"buttons\">\n            <button (click)=\"playPauseVideo()\" [ngClass]=\"{'pause':!state.isPlaying, 'play':state.isPlaying}\"\n              class=\"play-pause\"></button>\n          </div> -->\n        </div>\n      </div>\n  \n    </div>\n    <div class=\"container\">\n      <div class=\"row gap-y\">\n        <div *ngFor=\"let l of lectures; let ind = index;\" class=\"col-md-6 mx-auto\">\n          <div [ngClass]=\"{'active':l.videoId == state.videoDetails.videoId}\" (click)=\"changeVideoLink(l.videoId, l)\"\n            class=\"card card-body shadow-3 hover-shadow-6 text-default\">\n            <div class=\"media align-items-center\">\n              <div class=\"mr-5\"><span class=\"iconbox iconbox-xxl bg-pale-primary\"><i\n                    class=\"icon-layers text-primary\"></i></span></div>\n              <div class=\"media-body\">\n                <h5 [innerHTML]=\"(ind+1) + '. ' + l.title\"></h5>\n                <p class=\"mb-0\" [innerHTML]=\"l.details\">\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n  \n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/learn/video-player/video-player.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/learn/video-player/video-player.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLearnVideoPlayerVideoPlayerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header mb-9\">\r\n  <div class=\"overlay opacity-95\"\r\n    style=\"background-image: linear-gradient(135deg, #ffe2c8 0%, #fff 40%, transparent 100%);\">\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"c-video\">\r\n      <div *ngIf=\"!state.isPlaying\" class=\"c-video-overlay\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3\"></div>\r\n          <div class=\"col-lg-6 middle\">\r\n\r\n            <h1 class=\"fw-600\">{{ state.progress < 1? 'Start' : 'Resume'}} learning\r\n              <br><span [innerHTML]=\"state.videoDetails.title\" class=\"text-info\">\r\n\r\n\r\n              </span>\r\n            </h1>\r\n            <p class=\"lead mt-5 mb-8\">\r\n              {{state.videoDetails.details}}\r\n            </p>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <video width=\"100%\" (click)=\"playPauseVideo()\" #videoPlayer controls crossorigin playsinline\r\n        [src]=\"state.videoLink\"></video>\r\n      <div class=\"controls\">\r\n        <!-- <div (click)=\"seekVideo($event)\" class=\"progress-bar\">\r\n          <div (click)=\"seekVideo($event)\" [style.width.%]=\"state.progress\" class=\"progress-line\"></div>\r\n        </div>\r\n        <div class=\"buttons\">\r\n          <button (click)=\"playPauseVideo()\" [ngClass]=\"{'pause':!state.isPlaying, 'play':state.isPlaying}\"\r\n            class=\"play-pause\"></button>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row gap-y\">\r\n      <div *ngFor=\"let l of lectures; let ind = index;\" class=\"col-md-6 mx-auto\">\r\n        <div [ngClass]=\"{'active':l.videoId == state.videoDetails.videoId}\" (click)=\"changeVideoLink(l.videoId, l)\"\r\n          class=\"card card-body shadow-3 hover-shadow-6 text-default\">\r\n          <div class=\"media align-items-center\">\r\n            <div class=\"mr-5\"><span class=\"iconbox iconbox-xxl bg-pale-primary\"><i\r\n                  class=\"icon-layers text-primary\"></i></span></div>\r\n            <div class=\"media-body\">\r\n              <h5 [innerHTML]=\"(ind+1) + '. ' + l.title\"></h5>\r\n              <p class=\"mb-0\" [innerHTML]=\"l.details\">\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"banner\">\r\n  <div class=\"rounded shadow-7 w-400 mw-100 pt-10 p-6\">\r\n    <h5 class=\"mb-7\">\r\n      {{isLoginMode ? 'Sign In to your account' : 'Create an account'}}\r\n    </h5>\r\n\r\n    <div *ngIf=\"!isLoginMode\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"register.name\" name=\"name\" placeholder=\"Your Name\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"register.userId\" name=\"email\" placeholder=\"Email Address\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"register.password\" name=\"password\"\r\n          placeholder=\"Password\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"register.confirm\" name=\"password-confirm\"\r\n          placeholder=\"Password (confirm)\">\r\n      </div>\r\n\r\n      <div class=\"form-group py-3\">\r\n        <div class=\"custom-control custom-checkbox\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\">\r\n          <label class=\"custom-control-label\">I agree to the <a class=\"ml-1\" href=\"terms.html\">terms of\r\n              service</a></label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button (click)=\"attemptRegister()\" class=\"btn btn-block btn-primary\" type=\"submit\">Register</button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isLoginMode\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" [(ngModel)]=\"login.userId\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"password\" [(ngModel)]=\"login.password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-block btn-primary\" (click)=\"attemptLogin()\" type=\"button\">Login</button>\r\n      </div>\r\n    </div>\r\n\r\n    <hr class=\"w-30\">\r\n    <a class=\"text-muted small-2\" routerLink=\"/login\">Forgot password?</a> |\r\n    <a (click)=\"isLoginMode = true\" *ngIf=\"!isLoginMode\" class=\"text-muted small-2\" routerLink=\"/login\">Login</a>\r\n    <a (click)=\"isLoginMode = false\" *ngIf=\"isLoginMode\" class=\"text-muted small-2\" routerLink=\"/login\">Sign up</a>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/md-writter/md-writter.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/md-writter/md-writter.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMdWritterMdWritterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section mt-40\">\r\n  <div class=\"\">\r\n    <section class=\"section py-4 bg-gradient-dark\">\r\n      <div class=\"container\">\r\n        <div class=\"row gap-y align-items-center\">\r\n          <div class=\"col-md-4\">\r\n            <h4 class=\"mb-0 text-white text-center text-md-left\">Lets write a new article <small>\r\n                <small>{{draftStatus}}</small> </small></h4>\r\n          </div>\r\n\r\n          <div class=\"col-md-8 text-center text-md-right\">\r\n\r\n            <span (click)=\"mode='editor'\" class=\"btn btn-xs btn-light\">Editor</span>\r\n            <span (click)=\"mode='preview'\" class=\"btn btn-xs btn-light\">Full page preview</span>\r\n            <span (click)=\"mode='seo'\" class=\"btn btn-xs btn-light\">Setup SEO</span>\r\n\r\n            <span (click)=\"saveArticle()\" class=\"btn btn-xs btn-success\">Submit</span>\r\n            <span (click)=\"publishArticle()\" class=\"btn btn-xs btn-success\">Publish</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <div class=\"tab-content p-4\">\r\n      <div class=\"tab-pane fade \" [ngClass]=\"{'active show': mode==='editor'}\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-7\"></div>\r\n          <div class=\"col-md-5\">\r\n            <select (change)=\"changeLanguage($event.target.value)\">\r\n              <option value=\"en-IN\">English India</option>\r\n              <option value=\"mr-IN\">Marathi India</option>\r\n              <option value=\"hi-IN\">Hindi India</option>\r\n            </select>\r\n            <span (click)=\"toggleSpeech()\" class=\"btn btn-xs btn-primary\">{{recognitionState}}</span>\r\n            <span (click)=\"togglePreview()\" class=\"btn btn-xs btn-primary\">Toggle Preview</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n          <div [class]=\"editorClass\">\r\n            <textarea (keyup.enter)=\"saveDraft()\" [(ngModel)]=\"articleModel.blogData\" class=\"md-editor\"></textarea>\r\n          </div>\r\n          <div *ngIf=\"editorClass === 'col-md-6'\" class=\"col-md-6\">\r\n\r\n            <div style=\"    max-height: 600px; overflow: auto;\" class=\"markdown\" markdown\r\n              [data]=\"articleModel.blogData\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <div class=\"tab-pane fade\" [ngClass]=\"{'active show': mode==='seo'}\">\r\n\r\n        <section class=\"section\">\r\n          <div class=\"container\">\r\n            <header class=\"section-header\">\r\n              <p class=\"lead\">This information is used as meta information of your article\r\n                and processed during SEO, URL optimization and Google Search Console later.\r\n                Please try to be very specific and choosing the accurate keywords\r\n                mentioned in your articles\r\n              </p>\r\n            </header>\r\n\r\n\r\n            <div class=\"row gap-y\">\r\n\r\n\r\n              <div class=\"col-md-12\">\r\n                <h5 class=\"mb-5\">Article Information</h5>\r\n\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">T</span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"articleModel.title\" placeholder=\"Article Title\">\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\">{{articleModel?.title?.length || 0}}</span>\r\n                  </div>\r\n                </div>\r\n\r\n                <br>\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">D</span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"articleModel.description\"\r\n                    placeholder=\"Article Description\">\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\">{{articleModel?.description?.length || 0}}</span>\r\n                  </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Image</span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"articleModel.image\"\r\n                    placeholder=\"Image Link (Width min 1000px)\">\r\n\r\n                </div>\r\n\r\n                <br>\r\n\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">Keywords</span>\r\n                  </div>\r\n                  <input type=\"text\" [(ngModel)]=\"articleModel.keywords\" class=\"form-control\" aria-label=\"\">\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\">{{articleModel?.keywords?.length || 0}}</span>\r\n                  </div>\r\n                </div>\r\n\r\n                <br>\r\n                <div class=\"dropdown show\">\r\n                  <span class=\"dropdown-toggle\" (click)=\"isSeriesOpened=true\" aria-expanded=\"true\">\r\n                    {{articleModel.seriesType || 'This article goes under Series'}} </span>\r\n                  <div *ngIf=\"isSeriesOpened\" class=\"dropdown-menu show\" x-placement=\"bottom-start\"\r\n                    style=\"position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 24px, 0px);\">\r\n                    <h6 class=\"dropdown-header\">Select a Series</h6>\r\n                    <span *ngFor=\"let s of seriesList\" class=\"dropdown-item\"\r\n                      (click)=\"isSeriesOpened=false;articleModel.seriesType=s.id; \">{{s.title}}</span>\r\n\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <span class=\"dropdown-item\" href=\"#\">Create new</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n        </section>\r\n      </div>\r\n      <div [ngClass]=\"{'active show': mode==='preview'}\" class=\"tab-pane fade\">\r\n        <div style=\"    max-height: 600px; overflow: auto;\" class=\"markdown\" markdown [data]=\"articleModel.blogData\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n<div class=\"modal fade\" [ngClass]=\"{'show' : preview}\">\r\n  <div class=\"modal-dialog modal-lg\" style=\"width: 90%!important;\" role=\"document\">\r\n    <div class=\"modal-content bg-img\" style=\"background-image: url(../assets/img/bg/8.jpg)\">\r\n\r\n      <div class=\"modal-body text-white1 py-8\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span (click)=\"preview=false\" aria-hidden=\"true\">×</span>\r\n        </button>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div style=\"    max-height: 600px; overflow: auto;\" class=\"markdown\" markdown\r\n              [data]=\"articleModel.blogData\">\r\n            </div>\r\n            <a class=\"btn btn-lg1 btn-danger\" href=\"#\">Shop Now</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/paypal-buy/paypal-buy.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/paypal-buy/paypal-buy.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPaypalBuyPaypalBuyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal fade\" [ngClass]=\"{'show' : showBuyModal}\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content bg-img\" style=\"background-image: url(../assets/img/bg/5.jpg)\">\r\n\r\n      <div class=\"modal-body text-white1 py-8\">\r\n        <button (click)=\"showBuyModal=false\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n        <div class=\"row\" style=\"color:white\">\r\n          <div class=\"col-md-8 col-xl-6\">\r\n            <h3 style=\"color:white\">Limited Time Offer</h3>\r\n            <p class=\"lead mb-5\">\r\n              You will be redirected to PayPal site where you need to pay {{currency}} {{amount}},\r\n              once the transaction is successful we will show you any {{courseCount}} courses to choose from list\r\n            </p>\r\n            <!-- <div class=\"btn btn-lg1 btn-danger\" (click)=\"startPaypal()\">Shop Now</div> -->\r\n            <div id=\"paypal-checkout-btn\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profiles/writer-profile/writer-profile.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profiles/writer-profile/writer-profile.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfilesWriterProfileWriterProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"features\" class=\"section bg-gray\">\r\n  <div class=\"container\">\r\n    <header class=\"section-header\">\r\n      <small>Guru's Dashboard</small>\r\n      <h2>Glad to see you {{authorDetails.name}}</h2>\r\n      <hr>\r\n      <p class=\"lead\">\r\n        We are pleased to see you joining our writer community.\r\n        Let's build your profile so that you can write article at Proco like Guru.\r\n      </p>\r\n    </header>\r\n    <div class=\"container\">\r\n      <header class=\"section-header\">\r\n        <small>Guru's Dashboard</small>\r\n      </header>\r\n      <div class=\"row gap-y text-center\">\r\n\r\n        <div class=\"col-md-6 col-lg-3\">\r\n          <h4 class=\"lead-6\">\r\n            <i class=\"icon-document text-lighter mr-3\"></i>\r\n            <span class=\"d-inline-block w-60px counted\" data-provide=\"countup\" data-from=\"0\"\r\n              data-to=\"100\">{{performance?.articles}}</span>\r\n          </h4>\r\n          <p class=\"text-lighter\">Articles</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-lg-3\">\r\n          <h4 class=\"lead-6\">\r\n            <i class=\"icon-layers text-lighter mr-3\"></i>\r\n            <span class=\"d-inline-block w-60px counted\" data-provide=\"countup\" data-from=\"0\"\r\n              data-to=\"250\">{{performance?.articleSeries}}</span>\r\n          </h4>\r\n          <p class=\"text-lighter\">Article Series</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-lg-3\">\r\n          <h4 class=\"lead-6\">\r\n            <i class=\"icon-tools text-lighter mr-3\"></i>\r\n            <span class=\"d-inline-block w-60px counted\" data-provide=\"countup\" data-from=\"0\"\r\n              data-to=\"330\">{{performance?.comments}}</span>\r\n          </h4>\r\n          <p class=\"text-lighter\">Comments</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-lg-3\">\r\n          <h4 class=\"lead-6\">\r\n            <i class=\"icon-genius text-lighter mr-3\"></i>\r\n            <span class=\"d-inline-block w-60px counted\" data-provide=\"countup\" data-from=\"0\"\r\n              data-to=\"430\">{{performance?.views}}</span>\r\n          </h4>\r\n          <p class=\"text-lighter\">Total Views</p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"container\">\r\n      <header class=\"section-header\">\r\n        <small>Analytical Evaluations</small>\r\n      </header>\r\n      <div class=\"row gap-y text-center\">\r\n\r\n        <div class=\"col-md-6 col-xl-4 feature-1\">\r\n          <p class=\"feature-icon\"><img src=\"../assets/img/icon/taxi.png\" alt=\"...\"></p>\r\n          <h5>Fast and reliable reviews</h5>\r\n          <p class=\"text-muted\">\r\n            Well crafted analysis services of text, keywords,\r\n            sentiments, meaning, crawler referenced platform.\r\n            Almost all the systems are automated, we jump in for reviews if you are not happy with it.\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-xl-4 feature-1\">\r\n          <p class=\"feature-icon\"><img src=\"../assets/img/icon/home.png\" alt=\"...\"></p>\r\n          <h5>Neat, clean and upto the mark</h5>\r\n          <p class=\"text-muted\">We want you to write clean,\r\n            neat and upto the mark blogs with our analysis services. We score the blog with analytics services so that\r\n            you produce good !</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-xl-4 feature-1\">\r\n          <p class=\"feature-icon\"><img src=\"../assets/img/icon/pc.png\" alt=\"...\"></p>\r\n          <h5>We may buy a coffee for you</h5>\r\n          <p class=\"text-muted\">We respect the study and knowledge of you in your field which keeps readers motivated to\r\n            learn.\r\n            So for this contribution we may buy a coffee for you at right time. :)</p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n\r\n      <header class=\"section-header\">\r\n        <small>Guru's Dashboard</small>\r\n      </header>\r\n\r\n      <div class=\"row gap-y\">\r\n\r\n\r\n        <div class=\"col-md-6\">\r\n          <h5 class=\"mb-5\">Personal Information</h5>\r\n\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Name</span>\r\n            </div>\r\n            <input type=\"text\" [(ngModel)]=\"profile.name\" class=\"form-control\" placeholder=\"Full Name\">\r\n          </div>\r\n\r\n          <br>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">LinkedIn</span>\r\n            </div>\r\n            <input type=\"text\" [(ngModel)]=\"profile.linkedin\" class=\"form-control\" placeholder=\"Linked In profile link\">\r\n          </div>\r\n\r\n\r\n          <br>\r\n\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Short Bio</span>\r\n            </div>\r\n            <input type=\"text\" [(ngModel)]=\"profile.shortBio\" class=\"form-control\"\r\n              placeholder=\"Enter 2 lines of bio which will be added at bottom of every blog \">\r\n\r\n          </div>\r\n\r\n          <br>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Twitter Account</span>\r\n            </div>\r\n            <input type=\"text\" [(ngModel)]=\"profile.twitter\" class=\"form-control\" placeholder=\"Optional\">\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-6\">\r\n          <h5 class=\"mb-5\">Profile addon</h5>\r\n\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Github Account</span>\r\n            </div>\r\n            <input [(ngModel)]=\"profile.github\" type=\"text\" class=\"form-control\"\r\n              placeholder=\"This may send traffic to your github\">\r\n          </div>\r\n\r\n          <br>\r\n\r\n\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Profile Image</span>\r\n            </div>\r\n            <input [(ngModel)]=\"profile.profileImage\" type=\"text\" class=\"form-control\"\r\n              placeholder=\"This may send traffic to your github\">\r\n          </div>\r\n\r\n          <br>\r\n\r\n          <div class=\"input-group\">\r\n            <textarea [(ngModel)]=\"profile.bio\" rows=\"6\" style=\"width:100%\" class=\"form-control\"\r\n              placeholder=\"Please enter your long bio as profile\"></textarea>\r\n          </div>\r\n          <br>\r\n          <button (click)=\"updateProfile()\" type=\"button\" class=\"btn btn-sm btn-primary\">Update profile</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div *ngFor=\"let a of articles\" class=\" col-md-4 col-xs-12 col-sm-12\">\r\n          <div class=\"mt-2 card text-white bg-img\" [style.background-image]=\"'url(' + a.image + ')'\" data-overlay=\"5\">\r\n            <div class=\"card-body min-238\">\r\n              <h5 class=\"card-title\">{{a.title.substring(0,60)}}...</h5>\r\n              <p>{{a.description.substring(0,100)}}...</p>\r\n              <a class=\"fs-12 fw-600\" [routerLink]=\"'/writer/'+a._id\">Resume editing </a> |\r\n              <a *ngIf=\"a._id !== ''\" href=\"javascript:void();\" (click)=\"deleteArticle(a._id)\"\r\n                class=\"text-danger fs-12 fw-600\">Delete </a> |\r\n              <a *ngIf=\"a._id !== ''\" class=\"fs-12 fw-600 text-success\" [routerLink]=\"'/writer/'+a._id\">Publish</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_learn_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/learn/video-player/video-player.component */
    "./src/app/components/learn/video-player/video-player.component.ts");
    /* harmony import */


    var _guards_learning_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./guards/learning.guard */
    "./src/app/guards/learning.guard.ts");
    /* harmony import */


    var _components_md_writter_md_writter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/md-writter/md-writter.component */
    "./src/app/components/md-writter/md-writter.component.ts");
    /* harmony import */


    var _components_profiles_writer_profile_writer_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/profiles/writer-profile/writer-profile.component */
    "./src/app/components/profiles/writer-profile/writer-profile.component.ts");
    /* harmony import */


    var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/editor/editor.component */
    "./src/app/components/editor/editor.component.ts");
    /* harmony import */


    var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/checkout/checkout.component */
    "./src/app/components/checkout/checkout.component.ts");
    /* harmony import */


    var _components_learn_learn_personalized_learn_personalized_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/learn/learn-personalized/learn-personalized.component */
    "./src/app/components/learn/learn-personalized/learn-personalized.component.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'null',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'checkout',
      component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"]
    }, {
      path: 'courses',
      loadChildren: './modules/course/course.module#CourseModule'
    }, {
      path: 'series',
      loadChildren: './modules/articleseries/articleseries.module#ArticleseriesModule'
    }, {
      path: 'writer',
      component: _components_md_writter_md_writter_component__WEBPACK_IMPORTED_MODULE_7__["MdWritterComponent"]
    }, {
      path: 'editor',
      component: _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_9__["EditorComponent"]
    }, {
      path: 'writer/:articleId',
      component: _components_md_writter_md_writter_component__WEBPACK_IMPORTED_MODULE_7__["MdWritterComponent"]
    }, {
      path: 'writer-profile',
      component: _components_profiles_writer_profile_writer_profile_component__WEBPACK_IMPORTED_MODULE_8__["WriterProfileComponent"]
    }, {
      canActivate: [_guards_learning_guard__WEBPACK_IMPORTED_MODULE_6__["LearningGuard"]],
      path: 'learn/:title',
      component: _components_learn_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_5__["VideoPlayerComponent"]
    }, {
      canActivate: [_guards_learning_guard__WEBPACK_IMPORTED_MODULE_6__["LearningGuard"]],
      path: 'learn-personalized/:title',
      component: _components_learn_learn_personalized_learn_personalized_component__WEBPACK_IMPORTED_MODULE_11__["LearnPersonalizedComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_im_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/im.service */
    "./src/app/services/im.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/seo.service */
    "./src/app/services/seo.service.ts"); // declare ga as a function to set and sent the events


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(im, router, seo, auth, platformId) {
        _classCallCheck(this, AppComponent);

        this.im = im;
        this.router = router;
        this.seo = seo;
        this.auth = auth;
        this.platformId = platformId;
        this.msgObj = {
          msg: ''
        };
        this.showBuyModal = false;
        this.paypalTransaction = {
          amount: 10,
          currency: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].paypal.currency,
          courseCount: 2
        };
        this.promoObj = {};
        this.mobileNavLeft = -300;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.events.subscribe(function (x) {
            if (x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"] && (x.url || '').indexOf('article') === -1) {
              console.log(x);

              _this.seo.setMetaTags(_this.seo.getDefaultSEO());
            }

            if (x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
              _this.currRoute = x.urlAfterRedirects;
              ga('set', 'page', x.urlAfterRedirects);
              ga('send', 'pageview');
            }
          });
          this.im.subs(_services_im_service__WEBPACK_IMPORTED_MODULE_2__["IMEventTypes"].NOTIFICATION).subscribe(function (x) {
            _this.msgObj = x;
            setTimeout(function () {
              _this.msgObj = {};
            }, 5000);
          });
          this.im.subs(_services_im_service__WEBPACK_IMPORTED_MODULE_2__["IMEventTypes"].BUY).subscribe(function (x) {
            if (x.currency && x.courseCount && x.amount) _this.startBuying(x);
          });
          this.im.subs(_services_im_service__WEBPACK_IMPORTED_MODULE_2__["IMEventTypes"].PROMO).subscribe(function (x) {
            _this.promoObj = x;
          }); // if (isPlatformBrowser(this.platformId)) {
          //   const localDB = JSON.parse(localStorage.getItem('db'));
          //   this.dal.getFromJSON().subscribe(x => {
          //     if (!localDB || localDB.version !== x.version) {
          //       localStorage.setItem('db', JSON.stringify(x));
          //       localStorage.removeItem('fetchDb')
          //       console.warn('version mismatched, DB updated at local')
          //       window.location.reload();
          //     }
          //   })
          // }
        }
      }, {
        key: "startBuying",
        value: function startBuying(x) {
          this.showBuyModal = true;
          this.paypalTransaction = x;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (this.mobileNavLeft === 0) {
            this.mobileNavLeft = -300;
          } else {
            this.mobileNavLeft = 0;
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_im_service__WEBPACK_IMPORTED_MODULE_2__["IMService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_learn_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/learn/video-player/video-player.component */
    "./src/app/components/learn/video-player/video-player.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_cHttp_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/cHttp.interceptor */
    "./src/app/services/cHttp.interceptor.ts");
    /* harmony import */


    var _components_paypal_buy_paypal_buy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/paypal-buy/paypal-buy.component */
    "./src/app/components/paypal-buy/paypal-buy.component.ts");
    /* harmony import */


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-markdown */
    "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
    /* harmony import */


    var _components_md_writter_md_writter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/md-writter/md-writter.component */
    "./src/app/components/md-writter/md-writter.component.ts");
    /* harmony import */


    var _components_profiles_writer_profile_writer_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/profiles/writer-profile/writer-profile.component */
    "./src/app/components/profiles/writer-profile/writer-profile.component.ts");
    /* harmony import */


    var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/editor/editor.component */
    "./src/app/components/editor/editor.component.ts");
    /* harmony import */


    var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/checkout/checkout.component */
    "./src/app/components/checkout/checkout.component.ts");
    /* harmony import */


    var _components_learn_learn_personalized_learn_personalized_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/learn/learn-personalized/learn-personalized.component */
    "./src/app/components/learn/learn-personalized/learn-personalized.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__["CheckoutComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_learn_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_9__["VideoPlayerComponent"], _components_paypal_buy_paypal_buy_component__WEBPACK_IMPORTED_MODULE_14__["PaypalBuyComponent"], _components_md_writter_md_writter_component__WEBPACK_IMPORTED_MODULE_16__["MdWritterComponent"], _components_profiles_writer_profile_writer_profile_component__WEBPACK_IMPORTED_MODULE_17__["WriterProfileComponent"], _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_18__["EditorComponent"], _components_learn_learn_personalized_learn_personalized_component__WEBPACK_IMPORTED_MODULE_20__["LearnPersonalizedComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
        appId: 'serverApp'
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production
      }), ngx_markdown__WEBPACK_IMPORTED_MODULE_15__["MarkdownModule"].forRoot({
        loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      })],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _services_cHttp_interceptor__WEBPACK_IMPORTED_MODULE_13__["CustomHTTPInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/checkout/checkout.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/checkout/checkout.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCheckoutCheckoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/checkout/checkout.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/checkout/checkout.component.ts ***!
    \***********************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function srcAppComponentsCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CheckoutComponent = /*#__PURE__*/function () {
      function CheckoutComponent() {
        _classCallCheck(this, CheckoutComponent);
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkout/checkout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.component.scss */
      "./src/app/components/checkout/checkout.component.scss"))["default"]]
    })], CheckoutComponent);
    /***/
  },

  /***/
  "./src/app/components/editor/editor.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/editor/editor.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEditorEditorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".badge{\r\n    margin: 0.25rem;\r\n}\r\n\r\n.show{\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdle1xyXG4gICAgbWFyZ2luOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uc2hvd3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/editor/editor.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/editor/editor.component.ts ***!
    \*******************************************************/

  /*! exports provided: EditorComponent */

  /***/
  function srcAppComponentsEditorEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
      return EditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @editorjs/editorjs */
    "./node_modules/@editorjs/editorjs/dist/editor.js");
    /* harmony import */


    var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _editorjs_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @editorjs/header */
    "./node_modules/@editorjs/header/dist/bundle.js");
    /* harmony import */


    var _editorjs_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editorjs_header__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _editorjs_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @editorjs/list */
    "./node_modules/@editorjs/list/dist/bundle.js");
    /* harmony import */


    var _editorjs_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editorjs_list__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _editorjs_marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @editorjs/marker */
    "./node_modules/@editorjs/marker/dist/bundle.js");
    /* harmony import */


    var _editorjs_marker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editorjs_marker__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _editorjs_paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @editorjs/paragraph */
    "./node_modules/@editorjs/paragraph/dist/bundle.js");
    /* harmony import */


    var _editorjs_paragraph__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_editorjs_paragraph__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _editorjs_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @editorjs/image */
    "./node_modules/@editorjs/image/dist/bundle.js");
    /* harmony import */


    var _editorjs_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editorjs_image__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _editorjs_quote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @editorjs/quote */
    "./node_modules/@editorjs/quote/dist/bundle.js");
    /* harmony import */


    var _editorjs_quote__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_editorjs_quote__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _editorjs_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @editorjs/link */
    "./node_modules/@editorjs/link/dist/bundle.js");
    /* harmony import */


    var _editorjs_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_editorjs_link__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _editorjs_inline_code__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @editorjs/inline-code */
    "./node_modules/@editorjs/inline-code/dist/bundle.js");
    /* harmony import */


    var _editorjs_inline_code__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_editorjs_inline_code__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _editorjs_code__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @editorjs/code */
    "./node_modules/@editorjs/code/dist/bundle.js");
    /* harmony import */


    var _editorjs_code__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_editorjs_code__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_dal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../services/dal.service */
    "./src/app/services/dal.service.ts");

    var EditorComponent = /*#__PURE__*/function () {
      function EditorComponent(auth, dal) {
        _classCallCheck(this, EditorComponent);

        this.auth = auth;
        this.dal = dal;
        this.serverHost = 'http://localhost:8440';
        this.editorInstance = null;
        this.isAnalyzing = false;
        this.articleModel = {
          blocks: [],
          time: Date,
          description: '',
          version: '',
          source: 'editorJs'
        };
        this.openModal = false;
      }

      _createClass(EditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var data = JSON.parse(localStorage.getItem('blog') || null);
          this.editorInstance = new _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_2___default.a({
            placeholder: 'Let`s write an awesome story!',
            holderId: 'codex-editor',
            tools: {
              header: {
                "class": _editorjs_header__WEBPACK_IMPORTED_MODULE_3___default.a,
                shortcut: 'CMD+SHIFT+H'
              },
              paragraph: {
                "class": _editorjs_paragraph__WEBPACK_IMPORTED_MODULE_6___default.a
              },
              Marker: {
                "class": _editorjs_marker__WEBPACK_IMPORTED_MODULE_5___default.a,
                shortcut: 'CMD+SHIFT+M'
              },
              inlineCode: {
                "class": _editorjs_inline_code__WEBPACK_IMPORTED_MODULE_10___default.a,
                shortcut: 'CMD+SHIFT+C'
              },
              code: _editorjs_code__WEBPACK_IMPORTED_MODULE_11___default.a,
              list: {
                "class": _editorjs_list__WEBPACK_IMPORTED_MODULE_4___default.a
              },
              image: {
                "class": _editorjs_image__WEBPACK_IMPORTED_MODULE_7___default.a,
                config: {
                  endpoints: {
                    byFile: "".concat(this.serverHost, "/upload?t=").concat(this.auth.userToken),
                    byUrl: "".concat(this.serverHost, "/upload?t=").concat(this.auth.userToken)
                  }
                }
              },
              quote: {
                "class": _editorjs_quote__WEBPACK_IMPORTED_MODULE_8___default.a,
                inlineToolbar: true,
                shortcut: 'CMD+SHIFT+O',
                config: {
                  quotePlaceholder: 'Enter a quote',
                  captionPlaceholder: 'Quote\'s author'
                }
              },
              linkTool: {
                "class": _editorjs_link__WEBPACK_IMPORTED_MODULE_9___default.a,
                config: {
                  endpoint: "".concat(this.serverHost, "/editor/fetchUrl")
                }
              }
            }
          });
          this.editorInstance.isReady.then(function () {
            console.log('ready', _this2.editorInstance);

            _this2.editorInstance.render(data);

            setTimeout(function () {
              _this2.makeNonEditable();
            }, 100);
          });
        }
      }, {
        key: "makeNonEditable",
        value: function makeNonEditable() {
          var _this3 = this;

          document.querySelectorAll('[contenteditable=true]').forEach(function (x) {
            x.setAttribute('contenteditable', 'false');

            try {
              _this3.editorInstance.off(x, 'click', function () {
                console.log('off event click on ', x);
              }, false);
            } catch (error) {}
          });
        }
      }, {
        key: "makeEditable",
        value: function makeEditable() {
          var _this4 = this;

          document.querySelectorAll('[contenteditable=false]').forEach(function (x) {
            x.setAttribute('contenteditable', 'true');

            try {
              _this4.editorInstance.off(x, 'click', function () {
                console.log('off event click on ', x);
              }, false);
            } catch (error) {}
          });
        }
      }, {
        key: "editorToText",
        value: function editorToText(cbFun) {
          this.editorInstance.saver.save().then(function (savedData) {
            var blocks = savedData.blocks;
            console.log(savedData, blocks);
            var docText = blocks.map(function (x) {
              if (x.type !== 'code' && x.type !== 'table') return x.data.text || x.data.items && x.data.items.join('\n') || null;
            }).filter(function (y) {
              return y !== null;
            }).join('\n').replace(/&nbsp;/g, ' ');
            cbFun(docText);
          }); // const { blocks } = { "time": 1577008131791, "blocks": [{ "type": "paragraph", "data": { "text": "Hey" } }, { "type": "header", "data": { "text": "Hello", "level": 2 } }, { "type": "list", "data": { "style": "ordered", "items": ["He", "sdfwes", "sdfSdf", "we"] } }, { "type": "image", "data": { "file": { "url": "http://localhost:8440/uploads/er_mr_bhushan_gmail_com/1577008095119_Screenshot_from_2019-12-21_14-47-47.png" }, "caption": "", "withBorder": false, "stretched": false, "withBackground": false } }, { "type": "quote", "data": { "text": "Hey there", "caption": "", "alignment": "left" } }, { "type": "linkTool", "data": { "link": "https://facebook.com", "meta": { "title": "Facebook - &#x932;&#x949;&#x917; &#x907;&#x928; &#x915;&#x93F;&#x902;&#x935;&#x93E; &#x938;&#x93E;&#x907;&#x928; &#x905;&#x92A;", "site_name": "Facebook", "description": "खाते तयार करा किंवा  Facebook वर  लॉग इन करा.  मित्र, कुटूंब अाणि आपण ओळखत असलेल्‍या अन्‍य लोकांशी कनेक्‍ट व्‍हा. छायाचित्रे आणि व्हिडिओ सामायिक करा,...", "image": { "url": "https://www.facebook.com/images/fb_icon_325x325.png" } } } }], "version": "2.16.1" };
        }
      }, {
        key: "processReadability",
        value: function processReadability(a) {
          return '<b>' + a.actual.replace(/\n/g, '').substring(a.location.start.column - 1, a.location.end.column - 1) + '</b>';
        }
      }, {
        key: "save",
        value: function save() {
          var _this5 = this;

          this.editorInstance.saver.save().then(function (savedData) {
            _this5.articleModel.blocks = savedData.blocks;
            _this5.articleModel.time = savedData.time;
            _this5.articleModel.version = savedData.version;
            console.log("article model to save", _this5.articleModel);

            _this5.dal.saveArticleForEditor(_this5.articleModel).subscribe(function (x) {
              alert('article saved');
              console.log("saved data", x);
            });

            localStorage.setItem('blog', JSON.stringify(_this5.articleModel.blocks));
          });
        }
      }, {
        key: "analyzeDoc",
        value: function analyzeDoc() {
          var _this6 = this;

          this.isAnalyzing = true;
          this.editorToText(function (docText) {
            console.log(docText);

            _this6.dal.getDocumentAnalysis(docText).subscribe(function (x) {
              console.log("analyzed text", x);
              _this6.analysisResult = x;
              _this6.isAnalyzing = false;
              _this6.openModal = true;
            }, function (e) {
              _this6.isAnalyzing = false;
              alert('Unable to analyze the document, please try again');
            });
          });
        }
      }, {
        key: "publishArticle",
        value: function publishArticle() {
          if (confirm('Are you sure to publish it ?')) this.articleModel.status = 'PUBLISHED';
          this.dal.saveArticle(this.articleModel).subscribe(function (x) {
            alert('Published');
          });
        }
      }]);

      return EditorComponent;
    }();

    EditorComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]
      }, {
        type: _services_dal_service__WEBPACK_IMPORTED_MODULE_13__["DalService"]
      }];
    };

    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/editor/editor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editor.component.css */
      "./src/app/components/editor/editor.component.css"))["default"]]
    })], EditorComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_im_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/im.service */
    "./src/app/services/im.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_dal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/dal.service */
    "./src/app/services/dal.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(im, auth, dal, router) {
        _classCallCheck(this, HomeComponent);

        this.im = im;
        this.auth = auth;
        this.dal = dal;
        this.router = router;
        this.isAlreadySignedUp = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.dal.checkPaypalPayment().subscribe(x => {
          //   this.isAlreadySignedUp = x && x[0] && x[0]._id
          // })
        }
      }, {
        key: "startPaypal",
        value: function startPaypal(amount, courseCount) {
          if (!this.auth.isLoggedIn) {
            this.router.navigateByUrl('/login');
            this.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_2__["IMEventTypes"].NOTIFICATION, {
              msg: 'Please login/create account first, then you can make payments',
              type: _services_im_service__WEBPACK_IMPORTED_MODULE_2__["NotifTypes"].ERROR
            });
            return;
          }

          if (this.isAlreadySignedUp) {
            this.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_2__["IMEventTypes"].NOTIFICATION, {
              msg: 'You are already signed up with us, you can go to courses section',
              type: _services_im_service__WEBPACK_IMPORTED_MODULE_2__["NotifTypes"].ERROR
            });
            return;
          }

          console.log(amount, courseCount);
          this.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_2__["IMEventTypes"].BUY, {
            amount: amount,
            currency: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].paypal.currency,
            courseCount: courseCount
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_im_service__WEBPACK_IMPORTED_MODULE_2__["IMService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_dal_service__WEBPACK_IMPORTED_MODULE_5__["DalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/learn/learn-personalized/learn-personalized.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/learn/learn-personalized/learn-personalized.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLearnLearnPersonalizedLearnPersonalizedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVhcm4vbGVhcm4tcGVyc29uYWxpemVkL2xlYXJuLXBlcnNvbmFsaXplZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/learn/learn-personalized/learn-personalized.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/learn/learn-personalized/learn-personalized.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: LearnPersonalizedComponent */

  /***/
  function srcAppComponentsLearnLearnPersonalizedLearnPersonalizedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LearnPersonalizedComponent", function () {
      return LearnPersonalizedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_dal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/dal.service */
    "./src/app/services/dal.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_im_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/im.service */
    "./src/app/services/im.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var LearnPersonalizedComponent = /*#__PURE__*/function () {
      function LearnPersonalizedComponent(sanitizer, route, dal, auth, im) {
        _classCallCheck(this, LearnPersonalizedComponent);

        this.sanitizer = sanitizer;
        this.route = route;
        this.dal = dal;
        this.auth = auth;
        this.im = im;
        this.state = {
          isPlaying: false,
          progress: 0,
          courseId: 1,
          videoLink: '',
          shouldWait: true,
          videoDetails: {
            title: '',
            details: '',
            videoId: ''
          }
        };
        this.lectures = [];
      }

      _createClass(LearnPersonalizedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.params.subscribe(function (x) {
            _this7.dal.getCourses("/courses/details-personalized/".concat(x.title)).subscribe(function (y) {
              var course = y.length ? y[0] : y;
              _this7.state.courseId = course._id;

              _this7.dal.getCourseContents(_this7.state.courseId).subscribe(function (contents) {
                console.log("video content", contents);

                if (!contents) {
                  alert('No course details found');
                  return;
                }

                contents = contents[0] || contents;
                _this7.lectures = contents.videos;

                if (contents.videos && contents.videos.length) {
                  _this7.state['link'] = _this7.transform(contents.videos[0].videoUrl);
                  _this7.state.shouldWait = false;
                  _this7.state.videoDetails = contents.videos[0]; // this.playPauseVideo();
                }
              });
            });
          });
        }
      }, {
        key: "transform",
        value: function transform(url) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }]);

      return LearnPersonalizedComponent;
    }();

    LearnPersonalizedComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_dal_service__WEBPACK_IMPORTED_MODULE_2__["DalService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_im_service__WEBPACK_IMPORTED_MODULE_5__["IMService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoPlayer', {
      "static": true
    })], LearnPersonalizedComponent.prototype, "videoplayer", void 0);
    LearnPersonalizedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-learn-personalized',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./learn-personalized.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/learn/learn-personalized/learn-personalized.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./learn-personalized.component.scss */
      "./src/app/components/learn/learn-personalized/learn-personalized.component.scss"))["default"]]
    })], LearnPersonalizedComponent);
    /***/
  },

  /***/
  "./src/app/components/learn/video-player/video-player.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/learn/video-player/video-player.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLearnVideoPlayerVideoPlayerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\r\n    position: relative;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    padding-top: 70px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.container{\r\n    display: flex;\r\n    \r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.video{\r\n    width: 100%;\r\n}\r\n\r\n.c-video{\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    min-height: 650px;\r\n}\r\n\r\n.active {\r\n    border: #e6c7c7 solid 1px !important;\r\n    box-shadow:         inset 0 0 10px #e6c7c7;\r\n}\r\n\r\n.middle{\r\n    margin: 20%;\r\n}\r\n\r\n.c-video-overlay {\r\n  \r\n  position: absolute;\r\n  background-image: linear-gradient(135deg, #fde5ce 0%, #fff 50%, transparent 100%);\r\n  border-radius: 5px;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.c-video:hover .controls{\r\n    transform:  translateY(0);\r\n    background:rgba(0, 0, 0);\r\n}\r\n\r\n.controls{\r\n    display: flex;\r\n    position: absolute;\r\n    bottom :0;\r\n    width:100%;\r\n    flex-wrap: wrap;\r\n    background:rgba(0, 0, 0, 0);\r\n    transform: translateY(100%) translateY(-9px);\r\n    transition: all 0.2s;\r\n}\r\n\r\n.buttons {\r\n    padding: 5px;\r\n}\r\n\r\n.buttons button{\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.buttons button:before{\r\n    content: '\\f144';\r\n    font-family: 'Font Awesome 5 Free';\r\n    width: 30px;\r\n    height: 30px;\r\n    display: inline-block;\r\n\r\n    font-size: 20px;\r\n    color: white;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.buttons button.play:before{\r\n    content: '\\f144';\r\n}\r\n\r\n.buttons button.play:before{\r\n    content: '\\f28b';\r\n}\r\n\r\n.progress-bar{\r\n    height: 3px;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    background: rgba(0, 0, 0, 0.486);\r\n}\r\n\r\n.progress-bar:hover{\r\n    height: 7px;\r\n    background: gray; \r\n}\r\n\r\n.progress-line {\r\n    overflow:hidden;\r\n    height: 3px;\r\n  \r\n    background-image:linear-gradient(135deg, #fcfcfc 0%,#8f86c2 25%, #3d65f8 100%);\r\n    animation: hue 11s linear 0s infinite reverse;\r\n}\r\n\r\n.progress-line::before {\r\n  background: linear-gradient(105deg, rgba(255, 190, 0, 0), #ffbe00);\r\n  -webkit-animation: hue 12s linear 1s infinite;\r\n          animation: hue 12s linear 1s infinite;\r\n}\r\n\r\n@-webkit-keyframes hue {\r\n  to {\r\n    -webkit-filter: hue-rotate(2turn);\r\n            filter: hue-rotate(2turn);\r\n  }\r\n}\r\n\r\n@keyframes hue {\r\n  to {\r\n    -webkit-filter: hue-rotate(2turn);\r\n            filter: hue-rotate(2turn);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWFybi92aWRlby1wbGF5ZXIvdmlkZW8tcGxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7O0lBRWIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksb0NBQW9DO0lBR3BDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsaUZBQWlGO0VBQ2pGLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsNENBQTRDO0lBQzVDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjs7SUFFckIsZUFBZTtJQUNmLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXOztJQUVYLDhFQUE4RTtJQUM5RSw2Q0FBNkM7QUFDakQ7O0FBQ0E7RUFDRSxrRUFBa0U7RUFDbEUsNkNBQXFDO1VBQXJDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjtBQUNGOztBQUpBO0VBQ0U7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xlYXJuL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi52aWRlb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYy12aWRlb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiAjZTZjN2M3IHNvbGlkIDFweCAhaW1wb3J0YW50O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTBweCAjZTZjN2M3O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAjZTZjN2M3O1xyXG4gICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCAwIDAgMTBweCAjZTZjN2M3O1xyXG59XHJcblxyXG4ubWlkZGxle1xyXG4gICAgbWFyZ2luOiAyMCU7XHJcbn1cclxuLmMtdmlkZW8tb3ZlcmxheSB7XHJcbiAgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZGU1Y2UgMCUsICNmZmYgNTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5jLXZpZGVvOmhvdmVyIC5jb250cm9sc3tcclxuICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5jb250cm9sc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b20gOjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHRyYW5zbGF0ZVkoLTlweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5idXR0b25zIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5idXR0b25zIGJ1dHRvbjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnXFxmMTQ0JztcclxuICAgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuLmJ1dHRvbnMgYnV0dG9uLnBsYXk6YmVmb3Jle1xyXG4gICAgY29udGVudDogJ1xcZjE0NCc7XHJcbn1cclxuXHJcbi5idXR0b25zIGJ1dHRvbi5wbGF5OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICdcXGYyOGInO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFye1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDg2KTtcclxufVxyXG5cclxuLnByb2dyZXNzLWJhcjpob3ZlcntcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JheTsgXHJcbn1cclxuXHJcbi5wcm9ncmVzcy1saW5lIHtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmNmY2ZjIDAlLCM4Zjg2YzIgMjUlLCAjM2Q2NWY4IDEwMCUpO1xyXG4gICAgYW5pbWF0aW9uOiBodWUgMTFzIGxpbmVhciAwcyBpbmZpbml0ZSByZXZlcnNlO1xyXG59XHJcbi5wcm9ncmVzcy1saW5lOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMDVkZWcsIHJnYmEoMjU1LCAxOTAsIDAsIDApLCAjZmZiZTAwKTtcclxuICBhbmltYXRpb246IGh1ZSAxMnMgbGluZWFyIDFzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGh1ZSB7XHJcbiAgdG8ge1xyXG4gICAgZmlsdGVyOiBodWUtcm90YXRlKDJ0dXJuKTtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/learn/video-player/video-player.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/learn/video-player/video-player.component.ts ***!
    \*************************************************************************/

  /*! exports provided: VideoPlayerComponent */

  /***/
  function srcAppComponentsLearnVideoPlayerVideoPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function () {
      return VideoPlayerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_dal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/dal.service */
    "./src/app/services/dal.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_im_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/im.service */
    "./src/app/services/im.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var VideoPlayerComponent = /*#__PURE__*/function () {
      function VideoPlayerComponent(route, dal, auth, im) {
        _classCallCheck(this, VideoPlayerComponent);

        this.route = route;
        this.dal = dal;
        this.auth = auth;
        this.im = im;
        this.state = {
          isPlaying: false,
          progress: 0,
          courseId: 1,
          videoLink: '',
          shouldWait: true,
          videoDetails: {
            title: '',
            details: '',
            videoId: ''
          }
        };
        this.lectures = [];
      }

      _createClass(VideoPlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.route.params.subscribe(function (x) {
            _this8.dal.getCourses("/courses/details/".concat(x.title)).subscribe(function (y) {
              var course = y.length ? y[0] : y;
              _this8.state.courseId = course._id;

              _this8.dal.getCourseContents(_this8.state.courseId).subscribe(function (contents) {
                if (!contents) {
                  alert('No course details found');
                  return;
                }

                contents = contents[0] || contents;
                _this8.lectures = contents.videos;

                if (contents.videos && contents.videos.length) {
                  _this8.state.videoLink = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].videoLink, "/").concat(_this8.state.courseId, "/").concat(contents.videos[0].videoId, "?t=").concat(_this8.auth.userToken);
                  _this8.state.shouldWait = false;
                  _this8.state.videoDetails = contents.videos[0];

                  _this8.playPauseVideo();
                }
              });
            });
          });
        }
      }, {
        key: "changeVideoLink",
        value: function changeVideoLink(videoId, l) {
          this.state.isPlaying = false;
          if (this.nativePlayer) this.nativePlayer.pause();
          this.state.videoLink = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].videoLink, "/").concat(this.state.courseId, "/").concat(videoId, "?t=").concat(this.auth.userToken);
          this.state.videoDetails = l;
          console.log(this.state, this.nativePlayer);
        }
      }, {
        key: "playPauseVideo",
        value: function playPauseVideo() {
          var _this9 = this;

          if (!this.nativePlayer) {
            this.nativePlayer = this.videoplayer.nativeElement;
          }

          if (!this.state.isPlaying) {
            this.nativePlayer.play();
            this.state.isPlaying = true;
          } else {
            this.nativePlayer.pause();
            this.state.isPlaying = false;
          }

          console.log('>>>>>', this.state, this.nativePlayer);
          this.nativePlayer.addEventListener('timeupdate', function ($event) {
            _this9.state.progress = _this9.nativePlayer.currentTime / _this9.nativePlayer.duration * 100;
          });
          this.nativePlayer.addEventListener('error', function ($event) {
            console.log("Error while playing", $event);

            _this9.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_5__["IMEventTypes"].NOTIFICATION, {
              msg: 'Unable to play video, please login first',
              type: _services_im_service__WEBPACK_IMPORTED_MODULE_5__["NotifTypes"].SUCCESS
            });
          }, true);
          this.nativePlayer.addEventListener('waiting', function ($event) {// alert('ok')
          });
        }
      }, {
        key: "seekVideo",
        value: function seekVideo($event) {
          var bar = document.getElementsByClassName('.progress-bar')[0];

          if (bar) {
            var total = bar.offsetWidth;
            this.state.progress = total / $event.offsetX;
            console.log(this.state, bar, total);
          }
        }
      }]);

      return VideoPlayerComponent;
    }();

    VideoPlayerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _services_dal_service__WEBPACK_IMPORTED_MODULE_2__["DalService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_im_service__WEBPACK_IMPORTED_MODULE_5__["IMService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoPlayer', {
      "static": true
    })], VideoPlayerComponent.prototype, "videoplayer", void 0);
    VideoPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-video-player',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-player.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/learn/video-player/video-player.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-player.component.css */
      "./src/app/components/learn/video-player/video-player.component.css"))["default"]]
    })], VideoPlayerComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".banner{\r\n    height: 100%;\r\n    \r\n    background-image: url(\"/assets/img/bg/4.jpg\");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.rounded{\r\n    background: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTs7SUFFWiw2Q0FBNkM7SUFDN0MsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2JnLzQuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnJvdW5kZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_dal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/dal.service */
    "./src/app/services/dal.service.ts");
    /* harmony import */


    var _services_im_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/im.service */
    "./src/app/services/im.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(dal, im, auth, router) {
        _classCallCheck(this, LoginComponent);

        this.dal = dal;
        this.im = im;
        this.auth = auth;
        this.router = router;
        this.isLoginMode = true;
        this.register = {
          name: '',
          userId: '',
          password: '',
          confirm: ''
        };
        this.login = {
          userId: '',
          password: ''
        };
        this.msg = null;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.auth.userToken, this.auth.isLoggedIn);
        }
      }, {
        key: "toggle",
        value: function toggle(x) {
          this.isLoginMode = !this.isLoginMode;
        }
      }, {
        key: "attemptLogin",
        value: function attemptLogin() {
          var _this10 = this;

          this.dal.loginUser(this.login).subscribe(function (x) {
            if (x.token) {
              _this10.auth.userToken = x.token;
              _this10.auth.personName = x.name;

              _this10.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMEventTypes"].NOTIFICATION, {
                msg: 'Login successful',
                type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["NotifTypes"].SUCCESS
              });

              _this10.router.navigateByUrl('/courses/list');
            } else {
              _this10.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMEventTypes"].NOTIFICATION, {
                msg: 'Login failed',
                type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["NotifTypes"].ERROR
              });
            }
          });
        }
      }, {
        key: "attemptRegister",
        value: function attemptRegister() {
          var _this11 = this;

          this.dal.registerUser(this.register).subscribe(function (x) {
            console.log(x);

            if (x._id) {
              _this11.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMEventTypes"].NOTIFICATION, {
                msg: ' Registration Successful, please login with these details',
                type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["NotifTypes"].SUCCESS
              });
            } else {
              if (x.code === 11000) {
                _this11.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMEventTypes"].NOTIFICATION, {
                  msg: ' This email id is already registered, please login',
                  type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["NotifTypes"].ERROR
                });
              } else {
                _this11.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMEventTypes"].NOTIFICATION, {
                  msg: ' Registration failed',
                  type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["NotifTypes"].ERROR
                });
              }
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_dal_service__WEBPACK_IMPORTED_MODULE_2__["DalService"]
      }, {
        type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/md-writter/md-writter.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/md-writter/md-writter.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMdWritterMdWritterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".md-editor{\r\n    border: 0;\r\n    background: #1e1e1e;\r\n    resize: none;\r\n    width: 100%;\r\n    min-height: 800px;\r\n    color: whitesmoke;\r\n    font-size: 18px;\r\n}\r\n.btn{\r\n    margin: 5px;\r\n}\r\n.tab-content>.active {\r\n    display: block;\r\n    background: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZC13cml0dGVyL21kLXdyaXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWQtd3JpdHRlci9tZC13cml0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQtZWRpdG9ye1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogIzFlMWUxZTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYnRue1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLnRhYi1jb250ZW50Pi5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/md-writter/md-writter.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/md-writter/md-writter.component.ts ***!
    \***************************************************************/

  /*! exports provided: MdWritterComponent */

  /***/
  function srcAppComponentsMdWritterMdWritterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MdWritterComponent", function () {
      return MdWritterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_dal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/dal.service */
    "./src/app/services/dal.service.ts");
    /* harmony import */


    var _services_im_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/im.service */
    "./src/app/services/im.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MdWritterComponent = /*#__PURE__*/function () {
      function MdWritterComponent(dal, auth, im, platformId, route) {
        _classCallCheck(this, MdWritterComponent);

        this.dal = dal;
        this.auth = auth;
        this.im = im;
        this.platformId = platformId;
        this.route = route;
        this.articleModel = {
          blogData: '',
          title: '',
          description: '',
          image: '',
          keywords: 'ProCo',
          seriesType: '',
          authorId: '',
          author: '',
          status: 'DRAFT'
        };
        this.blogHelp = "# Tips\n  \n #### Speech to text\n   - Use speech to text for speeding up your blog writting\n   - you can change language any time once speech recognition is done\n   - button will show you current state of recognitions\n\n  #### Use of draft facility\n   - recover your blogs even if browser reloads\n   - blog will be auto saved to your local when you hit 'enter' while writing the blogs\n   - if you want to save any SEO contents as well you should come back to editor and hit enter\n   - to clear blog contents empty the contents and hit enter, you will see help again \n\n  #### toggle preview\n   - you can toggle preview in editor mode to work without hassle\n   - you can see full page preview as well from header men";
        this.preview = false;
        this.isSubmitted = false;
        this.mode = 'editor';
        this.seriesList = [];
        this.isSeriesOpened = false;
        this.editorClass = "col-md-6";
        this.draftStatus = '';
        this.recognitionState = 'Start Speech to Text';
        this.configureSpeechToText();
      }

      _createClass(MdWritterComponent, [{
        key: "toggleSpeech",
        value: function toggleSpeech() {
          try {
            this.recognizer.start();
          } catch (error) {
            this.recognizer.stop();
          }

          console.log(this.recognizer);
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(lang) {
          this.recognizer.lang = lang;
          console.log('changed', this.recognizer.lang);
        }
      }, {
        key: "configureSpeechToText",
        value: function configureSpeechToText() {
          var _this12 = this;

          this.winRef = window;
          this.winRef.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
          this.recognizer = new window.SpeechRecognition();
          this.recognizer.interimResults = false;
          this.recognizer.maxAlternatives = 10;
          this.recognizer.continuous = true;
          this.recognizer.lang = 'en-IN';

          this.recognizer.onstart = function ($event) {
            _this12.recognitionState = 'Speak now';
          };

          this.recognizer.onnomatch = function ($event) {
            _this12.recognitionState = 'Sorry, try again';
            setTimeout(function () {
              _this12.recognitionState = 'Start Speech to Text';
            }, 3000);
          };

          this.recognizer.onerror = function ($event) {
            _this12.recognitionState = 'Sorry, try again';
            setTimeout(function () {
              _this12.recognitionState = 'Start Speech to Text';
            }, 3000);
          };

          this.recognizer.onend = function ($event) {
            _this12.recognitionState = 'Start Speech to Text';
          };

          this.recognizer.onaudiostart = function ($event) {
            _this12.recognitionState = 'Listening';
          };

          this.recognizer.onspeechend = function ($event) {
            _this12.recognitionState = 'Recognizing';
          };

          this.recognizer.onresult = function (event) {
            var interimTranscript = '';

            for (var i = event.resultIndex, len = event.results.length; i < len; i++) {
              var transcript = event.results[i][0].transcript;

              if (event.results[i].isFinal) {
                _this12.articleModel.blogData += transcript;
                _this12.recognitionState = 'Start Speech to Text';

                if (transcript.trim().length == 0) {
                  _this12.recognitionState = 'Sorry, try again';
                  setTimeout(function () {
                    _this12.recognitionState = 'Start Speech to Text';
                  }, 3000);
                } // this.recognizer.stop();

              } else {
                interimTranscript += transcript;
                console.log(interimTranscript);
              }
            }
          };
        }
      }, {
        key: "saveDraft",
        value: function saveDraft() {
          var _this13 = this;

          this.draftStatus = 'saving draft...';
          this.saveArticle(function () {
            _this13.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMEventTypes"].NOTIFICATION, {
              msg: 'Saved as draft',
              type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["NotifTypes"].MESSAGE
            });

            setTimeout(function () {
              _this13.draftStatus = '';
            }, 5000);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.route.params.subscribe(function (params) {
            var articleId = params.articleId;

            if (articleId && articleId.length) {
              _this14.dal.getArticles({
                _id: articleId
              }).subscribe(function (x) {
                if (x) {
                  _this14.articleModel = x[0] || {};
                  _this14.articleModel.author = _this14.auth.personName;
                }
              });
            } else {
              _this14.dal.getUserDetails().subscribe(function (x) {
                x = x && x[0];
                _this14.articleModel.authorId = x._id;
                console.log(x, _this14.articleModel);
              });
            }
          });
          this.dal.getSeriesList().subscribe(function (x) {
            _this14.seriesList = x;
          }); // this.getSingleMdFile()
        }
      }, {
        key: "publishArticle",
        value: function publishArticle() {
          if (confirm('Are you sure to publish it ?')) this.articleModel.status = 'PUBLISHED';
          this.dal.saveArticle(this.articleModel).subscribe(function (x) {
            alert('Published');
          });
        }
      }, {
        key: "togglePreview",
        value: function togglePreview() {
          if (this.editorClass == 'col-md-6') {
            this.editorClass = 'col-md-12';
          } else {
            this.editorClass = "col-md-6";
          }
        }
      }, {
        key: "saveArticle",
        value: function saveArticle(cb) {
          var _this15 = this;

          if (this.articleModel.blogData.trim().length < 100 || this.articleModel.title.trim().length < 20 || this.articleModel.title.trim().length > 70 || this.articleModel.description.trim().length < 20 || this.articleModel.description.trim().length > 370 || this.articleModel.image.trim().length < 20 || this.articleModel.keywords.trim().length < 10) {
            this.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMEventTypes"].NOTIFICATION, {
              msg: 'Please fill title (min 20-70 char), blog (min 100), desc (min 20-370), valid image and keyword (min 10 char)',
              type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["NotifTypes"].ERROR
            });
          } else {
            if (this.articleModel._id) {
              this.articleModel.__v++;
            }

            this.dal.saveArticle(this.articleModel).subscribe(function (x) {
              console.log(x);

              if (x._id) {
                if (cb) {
                  cb();
                } else {
                  _this15.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMEventTypes"].NOTIFICATION, {
                    msg: 'Please check your article in blogs ',
                    type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["NotifTypes"].SUCCESS
                  });
                }
              }
            });
          }
        }
      }]);

      return MdWritterComponent;
    }();

    MdWritterComponent.ctorParameters = function () {
      return [{
        type: _services_dal_service__WEBPACK_IMPORTED_MODULE_2__["DalService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMService"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    MdWritterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-md-writter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./md-writter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/md-writter/md-writter.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./md-writter.component.css */
      "./src/app/components/md-writter/md-writter.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))], MdWritterComponent);
    /***/
  },

  /***/
  "./src/app/components/paypal-buy/paypal-buy.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/paypal-buy/paypal-buy.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPaypalBuyPaypalBuyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fade{\r\n    background: #000000a3;\r\n}\r\n.show{\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXlwYWwtYnV5L3BheXBhbC1idXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5cGFsLWJ1eS9wYXlwYWwtYnV5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFkZXtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDBhMztcclxufVxyXG4uc2hvd3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/paypal-buy/paypal-buy.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/paypal-buy/paypal-buy.component.ts ***!
    \***************************************************************/

  /*! exports provided: PaypalBuyComponent */

  /***/
  function srcAppComponentsPaypalBuyPaypalBuyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaypalBuyComponent", function () {
      return PaypalBuyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_im_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/im.service */
    "./src/app/services/im.service.ts");
    /* harmony import */


    var _services_dal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/dal.service */
    "./src/app/services/dal.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var PaypalBuyComponent = /*#__PURE__*/function () {
      function PaypalBuyComponent(im, dal, platformId) {
        _classCallCheck(this, PaypalBuyComponent);

        this.im = im;
        this.dal = dal;
        this.platformId = platformId;
        this.showBuyModal = false;
        this.courseCount = 2;
        this.amount = 0;
        this.currency = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].paypal.currency;
      }

      _createClass(PaypalBuyComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.amount = 1;

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            paypal.Button.render(this.initConfig(), '#paypal-checkout-btn');
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initConfig",
        value: function initConfig() {
          var _this16 = this;

          var currency = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].paypal.currency;
          this.payPalConfig = {
            currency: currency,
            env: 'production',
            client: {
              sandbox: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].paypal.sandboxClientId,
              production: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].paypal.prodClientId
            },
            commit: true,
            payment: function payment(data, actions) {
              return actions.payment.create({
                payment: {
                  transactions: [{
                    amount: {
                      total: _this16.amount,
                      currency: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].paypal.currency
                    }
                  }]
                }
              });
            },
            onApprove: function onApprove(data, actions) {
              console.log('onApprove - transaction was approved, but not authorized', data, actions);
              actions.order.get().then(function (details) {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
                var success = Object.assign({
                  courseCount: _this16.courseCount,
                  currency: _this16.currency,
                  amount: _this16.amount
                }, details, {
                  createdOn: new Date().getTime()
                });
                console.log(success);
                _this16.showBuyModal = false;

                _this16.dal.postPaypalSuccess(success).subscribe(function (x) {
                  _this16.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMEventTypes"].NOTIFICATION, {
                    msg: 'Thank you for purchasing, please choose courses you want in next page',
                    type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["NotifTypes"].SUCCESS
                  });
                });
              });
            },
            onClientAuthorization: function onClientAuthorization(data) {
              console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
              _this16.showSuccess = true;
            },
            onCancel: function onCancel(data, actions) {
              console.log('OnCancel', data, actions);
            },
            onError: function onError(err) {
              console.log('OnError', err);
            },
            onClick: function onClick(data, actions) {
              console.log('onClick', data, actions);
            }
          }; // console.log(this.payPalConfig)

          return this.payPalConfig;
        }
      }]);

      return PaypalBuyComponent;
    }();

    PaypalBuyComponent.ctorParameters = function () {
      return [{
        type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMService"]
      }, {
        type: _services_dal_service__WEBPACK_IMPORTED_MODULE_4__["DalService"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PaypalBuyComponent.prototype, "showBuyModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PaypalBuyComponent.prototype, "courseCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PaypalBuyComponent.prototype, "amount", void 0);
    PaypalBuyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-paypal-buy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./paypal-buy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/paypal-buy/paypal-buy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./paypal-buy.component.css */
      "./src/app/components/paypal-buy/paypal-buy.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))], PaypalBuyComponent);
    /***/
  },

  /***/
  "./src/app/components/profiles/writer-profile/writer-profile.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/profiles/writer-profile/writer-profile.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfilesWriterProfileWriterProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".min-238 {\r\n    min-height: 238px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlcy93cml0ZXItcHJvZmlsZS93cml0ZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlcy93cml0ZXItcHJvZmlsZS93cml0ZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbi0yMzgge1xyXG4gICAgbWluLWhlaWdodDogMjM4cHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/profiles/writer-profile/writer-profile.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/profiles/writer-profile/writer-profile.component.ts ***!
    \********************************************************************************/

  /*! exports provided: WriterProfileComponent */

  /***/
  function srcAppComponentsProfilesWriterProfileWriterProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WriterProfileComponent", function () {
      return WriterProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_dal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/dal.service */
    "./src/app/services/dal.service.ts");

    var WriterProfileComponent = /*#__PURE__*/function () {
      function WriterProfileComponent(dal) {
        _classCallCheck(this, WriterProfileComponent);

        this.dal = dal;
        this.authorDetails = {};
        this.performance = {
          comments: 152,
          articles: 10,
          articleSeries: 2,
          views: 500
        };
        this.profile = {};
        this.articles = [];
      }

      _createClass(WriterProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.refreshPage();
        }
      }, {
        key: "refreshPage",
        value: function refreshPage() {
          var _this17 = this;

          this.dal.getUserDetails().subscribe(function (x) {
            _this17.authorDetails = x && x[0] || {};

            if (_this17.authorDetails && _this17.authorDetails.profile) {
              _this17.profile = _this17.authorDetails.profile;
            }

            console.log(_this17.authorDetails);

            _this17.dal.getArticles({
              status: 'DRAFT',
              authorId: _this17.authorDetails._id
            }).subscribe(function (x) {
              _this17.articles = x;

              _this17.articles.push({
                _id: '',
                title: 'Write New blog',
                image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                description: 'Lets write your first blog'
              });
            });

            _this17.dal.getArticles({
              status: 'PUBLISHED',
              skipFields: 'image,blogData,description,title,author,routerLink',
              authorId: _this17.authorDetails._id
            }).subscribe(function (x) {
              console.log(x);
              var views = 0;
              x.forEach(function (y) {
                return views += y.views;
              });
              _this17.performance = {
                articles: x.length,
                articleSeries: Array.from(new Set(x.map(function (y) {
                  return y.seriesType;
                }))).length,
                comments: 6,
                views: views
              };
            });
          });
        }
      }, {
        key: "updateProfile",
        value: function updateProfile() {
          this.dal.updateUserProfile({
            profile: this.profile
          }).subscribe(function (x) {
            alert('updated');
          });
        }
      }, {
        key: "deleteArticle",
        value: function deleteArticle(articleId) {
          var _this18 = this;

          if (confirm('Are you sure to delete this article?')) {
            this.dal.deleteArticle(articleId).subscribe(function (x) {
              alert('removed');

              _this18.refreshPage();
            });
          }
        }
      }]);

      return WriterProfileComponent;
    }();

    WriterProfileComponent.ctorParameters = function () {
      return [{
        type: _services_dal_service__WEBPACK_IMPORTED_MODULE_2__["DalService"]
      }];
    };

    WriterProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-writer-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./writer-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profiles/writer-profile/writer-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./writer-profile.component.css */
      "./src/app/components/profiles/writer-profile/writer-profile.component.css"))["default"]]
    })], WriterProfileComponent);
    /***/
  },

  /***/
  "./src/app/guards/learning.guard.ts":
  /*!******************************************!*\
    !*** ./src/app/guards/learning.guard.ts ***!
    \******************************************/

  /*! exports provided: LearningGuard */

  /***/
  function srcAppGuardsLearningGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LearningGuard", function () {
      return LearningGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_im_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/im.service */
    "./src/app/services/im.service.ts");

    var LearningGuard = /*#__PURE__*/function () {
      function LearningGuard(auth, im) {
        _classCallCheck(this, LearningGuard);

        this.auth = auth;
        this.im = im;
      }

      _createClass(LearningGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var isLoggedIn = this.auth.isLoggedIn;

          if (!isLoggedIn) {
            this.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMEventTypes"].NOTIFICATION, {
              msg: 'Please login to learn',
              type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["NotifTypes"].ERROR
            });
          }

          return isLoggedIn;
        }
      }]);

      return LearningGuard;
    }();

    LearningGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_im_service__WEBPACK_IMPORTED_MODULE_3__["IMService"]
      }];
    };

    LearningGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LearningGuard);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(platformId) {
        _classCallCheck(this, AuthService);

        this.platformId = platformId;
        this.token = null;

        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
          this.token = localStorage.getItem('t');
          this.name = localStorage.getItem('n');
        }
      }

      _createClass(AuthService, [{
        key: "getAuthorDetails",
        value: function getAuthorDetails() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            return localStorage.getItem('a') || {};
          }
        }
      }, {
        key: "saveBlogDraft",
        value: function saveBlogDraft(draft) {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            localStorage.setItem('blog', JSON.stringify(draft));
          }
        }
      }, {
        key: "getBlogDraft",
        value: function getBlogDraft() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            try {
              return JSON.parse(localStorage.getItem('blog'));
            } catch (e) {
              return null;
            }
          }
        }
      }, {
        key: "saveToken",
        value: function saveToken() {
          this.setCookie('x-access-token', this.userToken, 1);

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            localStorage.setItem('t', this.userToken);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            localStorage.removeItem('t');
            localStorage.removeItem('n');
          }

          this.personName = null;
          this.userToken = null;
        }
      }, {
        key: "setCookie",
        value: function setCookie(cname, cvalue, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
          var expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
      }, {
        key: "userToken",
        get: function get() {
          return this.token;
        },
        set: function set(token) {
          this.token = token;
          if (this.token) this.saveToken();
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          return this.userToken ? true : false;
        }
      }, {
        key: "personName",
        get: function get() {
          return this.name;
        },
        set: function set(name) {
          this.name = name;
          if (name) if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            localStorage.setItem('n', name);
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))], AuthService);
    /***/
  },

  /***/
  "./src/app/services/cHttp.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/cHttp.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: CustomHTTPInterceptor */

  /***/
  function srcAppServicesCHttpInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomHTTPInterceptor", function () {
      return CustomHTTPInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _im_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./im.service */
    "./src/app/services/im.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/add/operator/do */
    "./node_modules/rxjs-compat/_esm2015/add/operator/do.js");

    var CustomHTTPInterceptor = /*#__PURE__*/function () {
      function CustomHTTPInterceptor(auth, router, im) {
        _classCallCheck(this, CustomHTTPInterceptor);

        this.auth = auth;
        this.router = router;
        this.im = im;
      }

      _createClass(CustomHTTPInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this19 = this;

          var authReq = req.clone({
            setHeaders: {
              'x-access-token': this.auth.userToken || 'no-token'
            }
          });
          console.log('Intercepted HTTP call', authReq);
          return next.handle(authReq)["do"](function (event) {//end loading
          }, function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
              if (error.status == 403) {
                _this19.router.navigateByUrl("/login"); // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.


                _this19.im.publish(_im_service__WEBPACK_IMPORTED_MODULE_5__["IMEventTypes"].NOTIFICATION, {
                  msg: 'Please login to continue',
                  type: _im_service__WEBPACK_IMPORTED_MODULE_5__["NotifTypes"].ERROR
                });

                _this19.auth.logout();
              }
            } //end loading

          });
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          //handle your auth error or rethrow
          if (err.status === 401 || err.status === 403) {
            //navigate /delete cookies or whatever
            this.router.navigateByUrl("/login"); // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.

            this.im.publish(_im_service__WEBPACK_IMPORTED_MODULE_5__["IMEventTypes"].NOTIFICATION, {
              msg: 'Please login to continue',
              type: _im_service__WEBPACK_IMPORTED_MODULE_5__["NotifTypes"].ERROR
            });
            this.auth.logout();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err.message); // or EMPTY may be appropriate here
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
        }
      }]);

      return CustomHTTPInterceptor;
    }();

    CustomHTTPInterceptor.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _im_service__WEBPACK_IMPORTED_MODULE_5__["IMService"]
      }];
    };

    CustomHTTPInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CustomHTTPInterceptor);
    /***/
  },

  /***/
  "./src/app/services/custom-http.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/custom-http.service.ts ***!
    \*************************************************/

  /*! exports provided: CustomHttpService */

  /***/
  function srcAppServicesCustomHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomHttpService", function () {
      return CustomHttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CustomHttpService = /*#__PURE__*/function () {
      function CustomHttpService(httpClient) {
        _classCallCheck(this, CustomHttpService);

        this.httpClient = httpClient;
      }

      _createClass(CustomHttpService, [{
        key: "getReq",
        value: function getReq(url, query) {
          return this.httpClient.get("".concat(url).concat(this.buildQuery(query)), {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
        }
      }, {
        key: "openWin",
        value: function openWin(url, query) {
          window.open("".concat(url).concat(this.buildQuery(query)), "__blank");
        }
      }, {
        key: "getReqNonJSON",
        value: function getReqNonJSON(url, query) {
          return this.httpClient.get("".concat(url).concat(this.buildQuery(query)), {
            responseType: 'text'
          });
        }
      }, {
        key: "postReq",
        value: function postReq(url, payload, query) {
          return this.httpClient.post("".concat(url).concat(this.buildQuery(query)), payload);
        }
      }, {
        key: "putReq",
        value: function putReq(url, payload, query) {
          return this.httpClient.put("".concat(url).concat(this.buildQuery(query)), payload);
        }
      }, {
        key: "deleteReq",
        value: function deleteReq(url, query) {
          return this.httpClient["delete"]("".concat(url).concat(this.buildQuery(query)));
        }
      }, {
        key: "buildQuery",
        value: function buildQuery(query) {
          if (!query) return "";
          return "?" + Object.keys(query).map(function (key) {
            return key + '=' + query[key];
          }).join('&');
        }
      }]);

      return CustomHttpService;
    }();

    CustomHttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CustomHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CustomHttpService);
    /***/
  },

  /***/
  "./src/app/services/dal.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/dal.service.ts ***!
    \*****************************************/

  /*! exports provided: DalService */

  /***/
  function srcAppServicesDalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DalService", function () {
      return DalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _custom_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./custom-http.service */
    "./src/app/services/custom-http.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var DalService = /*#__PURE__*/function () {
      function DalService(cHTTP, auth) {
        _classCallCheck(this, DalService);

        this.cHTTP = cHTTP;
        this.auth = auth;
      }

      _createClass(DalService, [{
        key: "getFromJSON",
        value: function getFromJSON() {
          return this.cHTTP.getReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].jsonBlobPath);
        }
      }, {
        key: "getCoursePaymentVerification",
        value: function getCoursePaymentVerification(courseId) {
          return this.cHTTP.getReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].coursePaymentVerificationURL, {
            courseId: courseId
          });
        }
      }, {
        key: "processPayment",
        value: function processPayment(courseId, courseAmount, courseLink) {
          this.cHTTP.openWin(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].processPaymentURL, {
            courseId: btoa(courseId),
            courseAmount: btoa(courseAmount),
            t: this.auth.userToken || 'no-token',
            courseLink: btoa(courseLink)
          });
        }
      }, {
        key: "saveJSONBlob",
        value: function saveJSONBlob(completeJSON) {
          return this.cHTTP.postReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].jsonBlobPath, completeJSON);
        }
      }, {
        key: "getBanner",
        value: function getBanner() {
          return this.cHTTP.getReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].bannerURL);
        }
      }, {
        key: "getAbout",
        value: function getAbout() {
          return this.cHTTP.getReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].aboutURL);
        }
      }, {
        key: "getCourseContents",
        value: function getCourseContents(courseId) {
          return this.cHTTP.getReq("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].courseContentsURL, "/").concat(courseId));
        }
      }, {
        key: "getPosts",
        value: function getPosts(routerLink) {
          var q = null;

          if (routerLink) {
            q = {
              routerLink: routerLink
            };
          }

          return this.cHTTP.getReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].postsURL, q);
        }
      }, {
        key: "searchArticle",
        value: function searchArticle(searchQuery) {
          return this.cHTTP.getReq("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].searchArticles), {
            searchQuery: searchQuery
          });
        }
      }, {
        key: "getCourses",
        value: function getCourses(routerLink) {
          var q = null;

          if (routerLink) {
            q = {
              routerLink: routerLink
            };
          }

          return this.cHTTP.getReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].coursesURL, q);
        }
      }, {
        key: "getPersonalizedCourse",
        value: function getPersonalizedCourse(query) {
          return this.cHTTP.getReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].coursesURL, query);
        }
      }, {
        key: "postComment",
        value: function postComment(comment) {
          return this.cHTTP.postReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commentsURL + '/save', comment);
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return this.cHTTP.postReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].usersURL + '/list', filter);
        }
      }, {
        key: "updateUserProfile",
        value: function updateUserProfile(payload) {
          return this.cHTTP.putReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].usersURL + '/update', payload, null);
        }
      }, {
        key: "getComments",
        value: function getComments(query) {
          return this.cHTTP.getReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].commentsURL + '/list', query);
        }
      }, {
        key: "registerUser",
        value: function registerUser(o) {
          return this.cHTTP.postReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].registerURL, o);
        }
      }, {
        key: "loginUser",
        value: function loginUser(o) {
          return this.cHTTP.postReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].loginURL, o);
        }
      }, {
        key: "postPaypalSuccess",
        value: function postPaypalSuccess(payload) {
          return this.cHTTP.postReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].paypalURL + '/add', payload);
        }
      }, {
        key: "checkPaypalPayment",
        value: function checkPaypalPayment() {
          // auto header check
          return this.cHTTP.postReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].paypalURL + '/list', {});
        }
      }, {
        key: "getArticles",
        value: function getArticles(query) {
          return this.cHTTP.getReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].articlesURL + '/list', query);
        }
      }, {
        key: "getSeriesList",
        value: function getSeriesList() {
          return this.cHTTP.getReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].seriesListURL);
        }
      }, {
        key: "getDocumentAnalysis",
        value: function getDocumentAnalysis(blogData) {
          return this.cHTTP.postReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].analysisURL, {
            blogData: blogData
          });
        }
      }, {
        key: "saveArticle",
        value: function saveArticle(payload) {
          console.log('upsert ?', payload);

          if (payload._id) {
            var query = {
              articleId: payload._id
            };
            var updatePayload = {};
            Object.keys(payload).forEach(function (k) {
              if (k !== '_id') {
                updatePayload[k] = payload[k];
              }
            });
            return this.cHTTP.putReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].articlesURL + '/update', payload, query);
          } else {
            return this.cHTTP.postReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].articlesURL + '/save', payload);
          }
        }
      }, {
        key: "saveArticleForEditor",
        value: function saveArticleForEditor(payload) {
          console.log('payload for save on editor', payload);

          if (payload._id) {
            var query = {
              articleId: payload._id
            };
            var updatePayload = {};
            Object.keys(payload).forEach(function (k) {
              if (k !== '_id') {
                updatePayload[k] = payload[k];
              }
            });
            return this.cHTTP.putReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].articlesURL + '/update', payload, query);
          } else {
            return this.cHTTP.postReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].articlesURL + '/saveForEditor', payload);
          }
        }
      }, {
        key: "deleteArticle",
        value: function deleteArticle(articleId) {
          return this.cHTTP.deleteReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].articlesURL + '/remove', {
            articleId: articleId
          });
        }
      }, {
        key: "articleStats",
        value: function articleStats(articleId, key) {
          return this.cHTTP.getReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].articlesURL + '/stats', {
            articleId: articleId,
            key: key
          });
        }
      }, {
        key: "getMdFile",
        value: function getMdFile(routerLink) {
          return this.cHTTP.getReq(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].articlesURL + '/list', {
            routerLink: routerLink
          });
        }
      }]);

      return DalService;
    }();

    DalService.ctorParameters = function () {
      return [{
        type: _custom_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomHttpService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    DalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DalService);
    /***/
  },

  /***/
  "./src/app/services/im.service.ts":
  /*!****************************************!*\
    !*** ./src/app/services/im.service.ts ***!
    \****************************************/

  /*! exports provided: IMService, IMEventTypes, NotifTypes */

  /***/
  function srcAppServicesImServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMService", function () {
      return IMService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMEventTypes", function () {
      return IMEventTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifTypes", function () {
      return NotifTypes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var IMService = /*#__PURE__*/function () {
      function IMService() {
        _classCallCheck(this, IMService);

        this.eventBuses = new Map();
      }

      _createClass(IMService, [{
        key: "get",
        value: function get(type) {
          var bs = this.eventBuses.get(type);

          if (!bs) {
            this.eventBuses.set(type, new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({}));
          }

          return this.eventBuses.get(type);
        }
      }, {
        key: "publish",
        value: function publish(type, dataToPublish) {
          this.get(type).next(dataToPublish);
        }
      }, {
        key: "subs",
        value: function subs(type) {
          return this.get(type);
        }
      }]);

      return IMService;
    }();

    IMService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], IMService);
    var IMEventTypes;

    (function (IMEventTypes) {
      IMEventTypes["NOTIFICATION"] = "NOTIFICATION";
      IMEventTypes["BUY"] = "BUY";
      IMEventTypes["PROMO"] = "PROMO";
    })(IMEventTypes || (IMEventTypes = {}));

    var NotifTypes;

    (function (NotifTypes) {
      NotifTypes["MESSAGE"] = "MESSAGE";
      NotifTypes["ERROR"] = "ERROR";
      NotifTypes["WARNING"] = "WARNING";
      NotifTypes["SUCCESS"] = "SUCCESS";
    })(NotifTypes || (NotifTypes = {}));
    /***/

  },

  /***/
  "./src/app/services/seo.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/seo.service.ts ***!
    \*****************************************/

  /*! exports provided: SeoService */

  /***/
  function srcAppServicesSeoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeoService", function () {
      return SeoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _social_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./social-share.service */
    "./src/app/services/social-share.service.ts");

    var SeoService = /*#__PURE__*/function () {
      function SeoService(title, meta, socialShareService) {
        _classCallCheck(this, SeoService);

        this.title = title;
        this.meta = meta;
        this.socialShareService = socialShareService;
      }

      _createClass(SeoService, [{
        key: "setMDFileSEO",
        value: function setMDFileSEO(mdFileContents) {
          this.setMetaTags(Object.assign({}, mdFileContents, {
            blogData: null
          }));
        }
      }, {
        key: "setMetaTags",
        value: function setMetaTags(o) {
          var _this20 = this;

          var shouldDerive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var skipProps = ['blogData', '_id', '__v', 'routerLink'];

          if (shouldDerive) {
            var _loop = function _loop(key) {
              if (skipProps.indexOf(key) !== -1) {} else {
                ['og', 'twitter'].forEach(function (x) {
                  o[x + ':' + key] = ('' + o[key]).trim();
                });
              }
            };

            for (var key in o) {
              _loop(key);
            }
          }

          Object.keys(o).forEach(function (x) {
            try {
              _this20.meta.removeTag(x);
            } catch (error) {}
          });
          this.title.setTitle(o.title);
          this.meta.addTags(Object.keys(o).map(function (y) {
            if (skipProps.indexOf(y) !== -1) {} else {
              return {
                name: y,
                content: o[y]
              };
            }
          }));
        } // Parser dont touch later

      }, {
        key: "parse",
        value: function parse(mdFileContents) {
          var o = Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].seo);
          var metaData = mdFileContents.match(/<!--(.*?)-->/g);

          if (metaData && metaData.length) {
            metaData = metaData.map(function (x) {
              x = x.replace('<!--', '').replace('-->', '').trim();
              var splitted = x.split(':::');
              o[splitted[0]] = splitted[1].trim();
              ['og', 'twitter'].forEach(function (x) {
                o[x + ':' + splitted[0]] = splitted[1].trim();
              });
              return x;
            });
          } else {
            var dseo = this.getDefaultSEO();
            o = Object.assign({}, o, dseo);
          }

          console.log(o);
          return o;
        }
      }, {
        key: "getDefaultSEO",
        value: function getDefaultSEO() {
          var dseo = {
            title: 'ProCo | The professional courses platform and article series for your deep learning',
            description: 'ProCo believes in deep concept learning and architecture explorations in different technologies, with article series and courses.',
            image: 'https://proco.guru/assets/img/vector/22.png',
            url: 'https://proco.guru',
            keywords: 'ProCo, courses, deep learning articles, technology blogs'
          };
          return dseo;
        }
      }]);

      return SeoService;
    }();

    SeoService.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]
      }, {
        type: _social_share_service__WEBPACK_IMPORTED_MODULE_4__["SocialShareService"]
      }];
    };

    SeoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SeoService);
    /***/
  },

  /***/
  "./src/app/services/social-share.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/social-share.service.ts ***!
    \**************************************************/

  /*! exports provided: SocialShareService, SharingProvider */

  /***/
  function srcAppServicesSocialShareServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialShareService", function () {
      return SocialShareService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharingProvider", function () {
      return SharingProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SocialShareService = /*#__PURE__*/function () {
      function SocialShareService() {
        _classCallCheck(this, SocialShareService);
      }

      _createClass(SocialShareService, [{
        key: "share",
        value: function share(provider) {
          var configOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var config = this.sharingConfigDefault.find(function (x) {
            return x.provider === provider;
          });
          configOverride.text = configOverride.description;
          configOverride.summary = configOverride.description;
          configOverride.redirect_uri = this.domain + configOverride.routerLink;
          configOverride.link = this.domain + configOverride.routerLink;
          configOverride.url = this.domain + configOverride.routerLink;
          if (provider == SharingProvider.TWITTER) configOverride.text = configOverride.title;

          if (provider == SharingProvider.WHATSAPP) {
            if (this.isMobile == true) {
              config.baseUrl = "whatsapp://send";
              console.log(config);
            }

            configOverride.text = "Hello, I would like to share ".concat(configOverride.title, " with you *on ProCo* ").concat(this.domain + configOverride.routerLink);
          }

          if (configOverride) Object.keys(configOverride).map(function (k) {
            console.log(k, config.conf.hasOwnProperty(k), config.conf[k]);

            if (config.conf.hasOwnProperty(k)) {
              config.conf[k] = configOverride[k];
            }
          });

          if (provider == SharingProvider.TWITTER) {
            config.conf.hashtags = configOverride.keywords.split(',').map(function (x) {
              return "#".concat((x || '').trim().replace(/ /g, '_'));
            }).join(',');
            console.log(config.conf.hashtags);
          }

          if (config.appId) {
            config.conf = Object.assign({}, config.conf, {
              app_id: config.appId
            });
          }

          console.log(config, configOverride, provider);
          window.open(config.baseUrl + this.buildQuery(config.conf), 'Share Article', this.popupConfig);
        }
      }, {
        key: "buildQuery",
        value: function buildQuery(query) {
          if (!query) return "";
          return "?" + Object.keys(query).map(function (key) {
            return key + '=' + query[key];
          }).join('&');
        }
      }, {
        key: "domain",
        get: function get() {
          return 'https://proco.guru/';
        }
      }, {
        key: "popupConfig",
        get: function get() {
          return 'toolbar=0,status=0,resizable=yes,width=500,height=600,top=50,left=50';
        }
      }, {
        key: "isMobile",
        get: function get() {
          if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "sharingConfigDefault",
        get: function get() {
          return [{
            "provider": SharingProvider.EMAIL,
            "conf": {
              "subject": "",
              "body": "",
              "to": "",
              "cc": "",
              "bcc": "",
              "trigger": "click"
            }
          }, {
            "provider": SharingProvider.FACEBOOK,
            "appId": '752349348510908',
            "baseUrl": 'https://www.facebook.com/dialog/feed',
            "conf": {
              "link": "",
              "title": "",
              "href": "",
              "quote": "",
              "hashtags": "",
              "text": "",
              "media": "",
              "mobile_iframe": "",
              "type": "",
              "via": "",
              "to": "",
              "from": "",
              "ref": "",
              "display": "popup",
              "source": "",
              "caption": "",
              "redirect_uri": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.FACEBOOK_MESSENGER,
            "conf": {
              "url": ""
            }
          }, {
            "provider": SharingProvider.TWITTER,
            baseUrl: 'https://www.twitter.com/intent/tweet',
            "conf": {
              "url": "",
              "text": "",
              "via": "",
              "hashtags": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.LINKEDIN,
            "baseUrl": 'https://www.linkedin.com/shareArticle',
            "conf": {
              "url": "",
              "title": "",
              "summary": "",
              "mini": true,
              "trigger": "click"
            }
          }, {
            "provider": SharingProvider.REDDIT,
            "conf": {
              "url": "",
              "text": "",
              "subreddit": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.VK,
            "conf": {
              "url": "",
              "text": "",
              "media": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.OK,
            "conf": {
              "url": "",
              "text": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.DIGG,
            "conf": {
              "url": "",
              "text": "",
              "media": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.DELICIOUS,
            "conf": {
              "url": "",
              "text": "",
              "media": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.STUMBLEUPON,
            "conf": {
              "url": "",
              "text": "",
              "media": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.PINTEREST,
            "conf": {
              "url": "",
              "text": "",
              "media": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.GOOGLE,
            "conf": {
              "url": "",
              "text": "",
              "media": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.TUMBLR,
            "conf": {
              "url": "",
              "text": "",
              "media": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.BUFFER,
            "conf": {
              "url": "",
              "text": "",
              "via": "",
              "media": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.POCKET,
            "conf": {
              "url": "",
              "text": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.FLIPBOARD,
            "conf": {
              "url": "",
              "text": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.HACKERNEWS,
            "conf": {
              "url": "",
              "text": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.WORDPRESS,
            "conf": {
              "url": "",
              "text": "",
              "media": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.XING,
            "conf": {
              "url": "",
              "text": "",
              "media": "",
              "follow": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.EVERNOTE,
            "conf": {
              "url": "",
              "text": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.WHATSAPP,
            baseUrl: 'https://web.whatsapp.com/send',
            "conf": {
              "url": "",
              "text": ""
            }
          }, {
            "provider": SharingProvider.SMS,
            "conf": {
              "url": "",
              "text": "",
              "to": "",
              "trigger": "click"
            }
          }, {
            "provider": SharingProvider.TELEGRAM,
            "conf": {
              "url": "",
              "text": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.VIBER,
            "conf": {
              "url": "",
              "text": ""
            }
          }, {
            "provider": SharingProvider.SKYPE,
            "conf": {
              "url": "",
              "text": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }, {
            "provider": SharingProvider.WEIBO,
            "conf": {
              "url": "",
              "text": "",
              "trigger": "click",
              "popupHeight": 600,
              "popupWidth": 500
            }
          }];
        }
      }]);

      return SocialShareService;
    }();

    SocialShareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SocialShareService);
    var SharingProvider;

    (function (SharingProvider) {
      SharingProvider["FACEBOOK"] = "FACEBOOK";
      SharingProvider["FACEBOOK_MESSENGER"] = "FACEBOOK_MESSENGER";
      SharingProvider["SMS"] = "SMS";
      SharingProvider["TWITTER"] = "TWITTER";
      SharingProvider["LINKEDIN"] = "LINKEDIN";
      SharingProvider["GOOGLE"] = "GOOGLE";
      SharingProvider["PINTEREST"] = "PINTEREST";
      SharingProvider["TUMBLR"] = "TUMBLR";
      SharingProvider["REDDIT"] = "REDDIT";
      SharingProvider["STUMBLEUPON"] = "STUMBLEUPON";
      SharingProvider["BUFFER"] = "BUFFER";
      SharingProvider["DIGG"] = "DIGG";
      SharingProvider["DELICIOUS"] = "DELICIOUS";
      SharingProvider["VK"] = "VK";
      SharingProvider["POCKET"] = "POCKET";
      SharingProvider["WORDPRESS"] = "WORDPRESS";
      SharingProvider["FLIPBOARD"] = "FLIPBOARD";
      SharingProvider["XING"] = "XING";
      SharingProvider["HACKERNEWS"] = "HACKERNEWS";
      SharingProvider["EVERNOTE"] = "EVERNOTE";
      SharingProvider["WHATSAPP"] = "WHATSAPP";
      SharingProvider["TELEGRAM"] = "TELEGRAM";
      SharingProvider["VIBER"] = "VIBER";
      SharingProvider["SKYPE"] = "SKYPE";
      SharingProvider["EMAIL"] = "EMAIL";
      SharingProvider["OK"] = "OK";
      SharingProvider["WEIBO"] = "WEIBO";
    })(SharingProvider || (SharingProvider = {}));
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      paypal: {
        currency: 'INR',
        sandboxClientId: 'AYngZEV11N8e6bzFQ3V-JHjXil2yI_5pn3Fbcx0WeuwTuPPhxfqDFQTcvQMLJgcMH5DrWfyjFVHP4-vn',
        prodClientId: 'AZs_Gwfz3E_GlxTS2nwWH7KUk9QCMzQ0wjAOBWH16ppn3ie3LWR9muorGOXDoGwddq6VsDobYY5v6P5Y'
      },
      seo: {
        'og:type': 'website',
        'twitter:card': 'summary_large_image'
      },
      postsURL: 'http://localhost:8440/d/posts',
      analysisURL: 'http://localhost:8440/editor/analysis',
      seriesListURL: 'http://localhost:8440/d/series',
      articlesURL: 'http://localhost:8440/article',
      coursesURL: 'http://localhost:8440/courses/list',
      commentsURL: 'http://localhost:8440/comments',
      searchArticles: 'http://localhost:8440/article/search',
      courseContentsURL: 'http://localhost:8440/courses/details',
      videoLink: 'http://localhost:8440/courses/video',
      usersURL: 'http://localhost:8440/users',
      registerURL: 'http://localhost:8440/register',
      paypalURL: 'http://localhost:8440/paypal',
      loginURL: 'http://localhost:8440/login',
      mdFilePath: 'http://localhost:8440/articles',
      serverURL: 'https://json-server.bhushan.now.sh/api/contents.js',
      jsonBlobPath: 'https://jsonblob.com/api/jsonBlob/16fb883d-da2c-11e9-82f9-4f4283261324',
      hostName: '',
      bannerURL: '',
      aboutURL: '',
      coursePaymentVerificationURL: 'http://localhost:8440/users/is-paid-by-user',
      processPaymentURL: 'http://localhost:8440/paytm/process-payment'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\personalProjects\proco-ui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map