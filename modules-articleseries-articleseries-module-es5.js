function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-articleseries-articleseries-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-series-details/article-series-details.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-series-details/article-series-details.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsArticleSeriesDetailsArticleSeriesDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"main-content mt-9 text-center mb-10\" *ngIf=\"!article\">\r\n  <div class=\"container\">\r\n\r\n    <h1 class=\"display-1 text-muted mb-7\">Article Not Found</h1>\r\n    <p class=\"lead\">Seems you're looking for something that doesn't exist, moved, renamed or removed.\r\n      Please check articles where you can find other interesting articles.\r\n    </p>\r\n    <br>\r\n    <button class=\"btn btn-secondary w-150 mr-2\" type=\"button\" routerLink=\"/series/list\">Go back</button>\r\n\r\n\r\n  </div>\r\n</main>\r\n\r\n<main *ngIf=\"article\" class=\"main-content\">\r\n\r\n\r\n  <!--\r\n      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒\r\n      | Blog content\r\n      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒\r\n      !-->\r\n  <div class=\"section\">\r\n    <div class=\"container\">\r\n      <div class=\"markdown\" markdown [data]=\"article?.blogData\"></div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-1\">\r\n\r\n        </div>\r\n        <div class=\"col-md-10 card shadow-3\" style=\"padding: 20px;\">\r\n          <div class=\" team-3\">\r\n            <a class=\"team-img\" href=\"#\">\r\n              <img [src]=\"article?.authorDetails?.profile || article?.authorDetails?.profileImage\" alt=\"...\">\r\n            </a>\r\n\r\n            <div class=\"team-body\">\r\n              <h5>{{article?.authorDetails?.name}}</h5>\r\n\r\n              <p class=\"d-none d-lg-block\">\r\n                {{article?.authorDetails?.summary || article?.authorDetails?.shortBio || 'Writter at ProCo'}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--\r\n      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒\r\n      | Comments\r\n      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒\r\n      !-->\r\n  <div class=\"section bg-gray\">\r\n    <div class=\"container\">\r\n      <h5 *ngIf=\"comments && comments.length\">Comments ( {{comments?.length}} )</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 mx-auto\">\r\n\r\n          <div *ngFor=\"let c of comments\" class=\"media-list\">\r\n\r\n            <div class=\"media\">\r\n              <img class=\"avatar avatar-sm mr-4\" src=\"../../assets/img/avatar/12.jpg\" alt=\"...\">\r\n\r\n              <div class=\"media-body\">\r\n                <div class=\"small-1\">\r\n                  <strong>{{c.name}}</strong>\r\n                  <time class=\"ml-4 opacity-70 small-3\">{{c.postedOn|date:'dd/MM/yyyy hh:mm'}}</time>\r\n                </div>\r\n                <p class=\"small-2 mb-0\">{{c.comment}}</p>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <hr>\r\n\r\n          <h5>Write a Comment </h5>\r\n          <div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"form-group col-12 col-md-6\">\r\n                <input [(ngModel)]=\"commentModel.name\" class=\"form-control\" type=\"text\" placeholder=\"Name\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-12 col-md-6\">\r\n                <input [(ngModel)]=\"commentModel.email\" class=\"form-control\" type=\"text\" placeholder=\"Email\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <textarea [(ngModel)]=\"commentModel.comment\" class=\"form-control\" placeholder=\"Comment\"\r\n                rows=\"4\"></textarea>\r\n            </div>\r\n\r\n            <button class=\"btn btn-primary btn-block\" type=\"button\" (click)=\"saveComment()\">Submit your comment</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"popup text-white bg-dark col-sm-5 col-md-2 col-xl-2 py-4 show\" data-position=\"bottom-center\"\r\n    data-animation=\"slide-up\">\r\n    <div class=\"row gap-y align-items-center\">\r\n      <!-- <div class=\"col-md\">\r\n      Would you like to search article?\r\n    </div> -->\r\n\r\n      <div class=\"col-md-auto align-items-center\">\r\n\r\n        <span>\r\n\r\n          <i (click)=\"shareArticle('FACEBOOK')\" class=\"icon icon-facebook rem2\" aria-hidden=\"true\"></i>\r\n          <i (click)=\"shareArticle('LINKEDIN')\" class=\"icon icon-linkedin rem2\" aria-hidden=\"true\"></i>\r\n          <i (click)=\"shareArticle('TWITTER')\" class=\"icon icon-twitter rem2\" aria-hidden=\"true\"></i>\r\n          <img (click)=\"shareArticle('WHATSAPP')\" style=\"    position: absolute; top: 21px;\"\r\n            src=\"https://img.icons8.com/office/30/000000/whatsapp.png\"></span>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-series-list/article-series-list.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-series-list/article-series-list.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsArticleSeriesListArticleSeriesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-common-header [header]=\"header\"></app-common-header>\r\n\r\n<main class=\"main-content\">\r\n  <section [routerLink]=\"'/series/list/' + sl.id\" *ngFor=\"let sl of seriesList\" [class]=\"sl.class\">\r\n    <div class=\"container\">\r\n      <div class=\"row gap-y align-items-center\">\r\n\r\n        <div class=\"col-md-6 text-md-right\">\r\n          <p class=\"small-2 text-uppercase text-lightest fw-500 ls-1\" [innerHTML]=\"sl.type\"> </p>\r\n          <h3 class=\"fw-500\" [innerHTML]=\"sl.title\"> </h3>\r\n          <br>\r\n          <p [innerHTML]=\"sl.details\">\r\n            Write your node js server using express ranging from basic CRUD operation server,\r\n            file upload servers, realtime server, json mock servers, static deployment server,\r\n            https and http server, middleware servers and much more.\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"col-md-5 mx-auto\">\r\n          <img class=\"rounded-md\" [src]=\"sl.image\" alt=\"...\">\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"container\">\r\n        <header class=\"section-header\">\r\n          <h3>Articles</h3>\r\n\r\n        </header>\r\n        <div class=\"row gap-y\">\r\n\r\n          <ng-container *ngFor=\"let a of filteredArticles || articles\">\r\n            <div *ngIf=\"a.seriesType === sl.id\" class=\"col-md-6 col-xl-4\">\r\n              <div [routerLink]=\"a.routerLink\" class=\"card text-white justify-content-end bg-img h-400\"\r\n                [style.background-image]=\"'url(' + a.image + ')'\" data-scrim-bottom=\"5\">\r\n                <div class=\"card-body flex-grow-0\">\r\n\r\n                  <h3 class=\"card-title fw-200\"> <a [routerLink]=\"a.routerLink\">{{a.title}}</a></h3>\r\n                  <div class=\"media align-items-center\">\r\n                    <img *ngIf=\"a?.authorDetails?.profile || a?.authorDetails?.profileImage\"\r\n                      class=\"avatar avatar-lg mr-3\" [src]=\"a?.authorDetails?.profile || a?.authorDetails?.profileImage\"\r\n                      alt=\"...\">\r\n                    <div class=\"media-body\">{{a?.author}} | {{a?.views||65}} views | {{a?.shares||8}} shares </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"false && a.seriesType === sl.id\" class=\"col-md-6 col-xl-4\">\r\n              <div class=\"card text-white bg-img justify-content-center h-400\"\r\n                [style.background-image]=\"'url(' + a.image + ')'\" data-scrim-top=\"7\">\r\n                <div class=\"card-body p-6 text-center flex-grow-0\">\r\n                  <h3 class=\"card-title fw-200\">{{a.title}}</h3>\r\n                  <p class=\"opacity-90\">{{a.description}}</p>\r\n                  <br>\r\n                  <a class=\"btn btn-sm btn-primary\" href=\"#\">Read more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"false && a.seriesType === sl.id\" class=\"col-md-6 col-xl-4\">\r\n              <div class=\"card text-white bg-img\" [style.background-image]=\"'url(' + a.image + ')'\" data-overlay=\"5\">\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">{{a.title}}</h5>\r\n                  <p>Some quick example text to build on the card title and make up the bulk of the card's content. Some\r\n                    quick example\r\n                    text to build on the card title.</p>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"false && a.seriesType === sl.id\" class=\"col-md-6 col-xl-4\">\r\n              <a [routerLink]=\"a.routerLink\" class=\"product-1\">\r\n                <img [src]=\"a.image\" alt=\"product\">\r\n\r\n                <div class=\"product-detail\">\r\n                  <div>\r\n                    <h6>{{a.title}}</h6>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </a>\r\n            </div>\r\n\r\n          </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <!-- <div class=\"row\">\r\n        <div class=\"col-md-10 col-xl-9 mx-auto\">\r\n\r\n          <div *ngFor=\"let a of articles\" class=\"card hover-shadow-7 my-8\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <a [routerLink]=\"a.routerLink\"><img class=\"fit-cover position-absolute h-100\" [src]=\"a.image\"\r\n                    alt=\"...\"></a>\r\n              </div>\r\n\r\n              <div class=\"col-md-8\">\r\n                <div class=\"p-7\">\r\n                  <h4 [innerHTML]=\"a.title\"></h4>\r\n                  <p [innerHTML]=\"a.description\"></p>\r\n                  <a class=\"small ls-1\" [routerLink]=\"a.routerLink\">Read More <span class=\"pl-1\">⟶</span></a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <nav class=\"flexbox my-8\">\r\n            <a class=\"btn btn-white disabled\"><i class=\"ti-arrow-left fs-9 mr-2\"></i> Newer</a>\r\n            <a class=\"btn btn-white\" href=\"#\">Older <i class=\"ti-arrow-right fs-9 ml-2\"></i></a>\r\n          </nav>\r\n\r\n        </div>\r\n      </div> -->\r\n\r\n    </div>\r\n  </section>\r\n\r\n\r\n</main>\r\n\r\n<div *ngIf=\"searchVisible\" class=\"offcanvas text-white show\" data-animation=\"fade\"\r\n  style=\"background-color: rgba(58, 10, 13, 0.938)\">\r\n  <button (click)=\"searchVisible=false;\" type=\"button\" class=\"close\" data-dismiss=\"offcanvas\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">×</span>\r\n  </button>\r\n  <div class=\"row  h-90\">\r\n    <div class=\"col-10 col-md-6 mx-auto\">\r\n      <div class=\"input-transparent\">\r\n        <input (keyup.enter)=\"searchArticle($event.target.value)\" (keyup.escape)=\"searchVisible=false;\"\r\n          class=\"form-control form-control-lg border-0 lead-5\" type=\"text\" name=\"search\"\r\n          placeholder=\"What are you looking for today...\">\r\n        <h4 style=\"    padding-left: 1rem;\">\r\n          {{filteredArticles ? 'Found ' + filteredArticles.length + ' articles' : 'Please type search keywords and hit enter'}}\r\n          <br> <small>Press Esc to\r\n            close</small> </h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"popup text-white bg-dark col-sm-5 col-md-2 col-xl-2  py-4\" [ngClass]=\"{'show' : !searchVisible}\"\r\n  data-position=\"bottom-center\" data-animation=\"slide-up\">\r\n  <div class=\"row gap-y align-items-center\">\r\n    <!-- <div class=\"col-md\">\r\n      Would you like to search article?\r\n    </div> -->\r\n\r\n    <div class=\"col-md-auto align-items-center\">\r\n      <button class=\"btn btn-sm btn-warning\" (click)=\"searchVisible=true\">Filter</button>\r\n\r\n      <button class=\"btn btn-sm btn-default\" *ngIf=\"filteredArticles\" (click)=\"filteredArticles=null\">Clear</button>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/components/article-series-details/article-series-details.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/article-series-details/article-series-details.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsArticleSeriesDetailsArticleSeriesDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS1zZXJpZXMtZGV0YWlscy9hcnRpY2xlLXNlcmllcy1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/article-series-details/article-series-details.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/article-series-details/article-series-details.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ArticleSeriesDetailsComponent */

  /***/
  function srcAppComponentsArticleSeriesDetailsArticleSeriesDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleSeriesDetailsComponent", function () {
      return ArticleSeriesDetailsComponent;
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


    var _services_dal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/dal.service */
    "./src/app/services/dal.service.ts");
    /* harmony import */


    var _services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/seo.service */
    "./src/app/services/seo.service.ts");
    /* harmony import */


    var _services_im_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/im.service */
    "./src/app/services/im.service.ts");

    var ArticleSeriesDetailsComponent = /*#__PURE__*/function () {
      function ArticleSeriesDetailsComponent(route, seo, dal, im) {
        _classCallCheck(this, ArticleSeriesDetailsComponent);

        this.route = route;
        this.seo = seo;
        this.dal = dal;
        this.im = im;
        this.blogLink = null;
        this.blogData = "";
        this.article = {};
        this.commentModel = {
          name: '',
          email: '',
          comment: ''
        };
        this.comments = [];
      }

      _createClass(ArticleSeriesDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (params) {
            var id = params.id,
                seriesName = params.seriesName,
                articleName = params.articleName;
            _this.blogLink = '/series/article/' + seriesName + '/' + articleName + '/' + id;

            _this.dal.getMdFile(_this.blogLink).subscribe(function (x) {
              x = x[0];
              _this.article = x; // this.article.authorDetails.profile = 'https://res.cloudinary.com/brainethic/image/upload/c_scale,w_245/v1571636313/IMG_1022_aamuxq.jpg'

              _this.seo.setMDFileSEO(x);

              _this.commentModel.articleId = x._id;

              _this.fetchComments();

              if (_this.article.authorId) {
                _this.dal.getUserDetails({
                  userId: _this.article.authorId
                }).subscribe(function (x) {
                  x = x && x[0];
                  _this.article.authorDetails = x.profile;
                });
              }
            }, function (e) {
              console.log(e);
            });
          });
        }
      }, {
        key: "shareArticle",
        value: function shareArticle(type) {
          this.dal.articleStats(this.article._id, 'shares').subscribe(function (x) {
            console.log('Share incremented', x);
          });
          this.seo.socialShareService.share(type, this.article);
        }
      }, {
        key: "fetchComments",
        value: function fetchComments() {
          var _this2 = this;

          this.dal.getComments({
            articleId: this.commentModel.articleId
          }).subscribe(function (y) {
            _this2.comments = y;
          });
        }
      }, {
        key: "saveComment",
        value: function saveComment() {
          var _this3 = this;

          this.commentModel.postedOn = new Date().getTime();

          if (this.commentModel.name.trim().length < 3 || this.commentModel.email.trim().length < 10 || this.commentModel.comment.trim().length < 20) {
            this.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_5__["IMEventTypes"].NOTIFICATION, {
              msg: 'Please fill name (min 3 char), email (valid) and comment (min 20 char) properly',
              type: _services_im_service__WEBPACK_IMPORTED_MODULE_5__["NotifTypes"].ERROR
            });
          } else {
            this.dal.postComment(this.commentModel).subscribe(function (x) {
              console.log(x);

              if (x._id) {
                _this3.commentModel.name = '';
                _this3.commentModel.email = '';
                _this3.commentModel.comment = '';

                _this3.im.publish(_services_im_service__WEBPACK_IMPORTED_MODULE_5__["IMEventTypes"].NOTIFICATION, {
                  msg: 'Thank you for your comment',
                  type: _services_im_service__WEBPACK_IMPORTED_MODULE_5__["NotifTypes"].SUCCESS
                });
              }

              _this3.fetchComments();
            });
          }
        }
      }]);

      return ArticleSeriesDetailsComponent;
    }();

    ArticleSeriesDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SeoService"]
      }, {
        type: _services_dal_service__WEBPACK_IMPORTED_MODULE_3__["DalService"]
      }, {
        type: _services_im_service__WEBPACK_IMPORTED_MODULE_5__["IMService"]
      }];
    };

    ArticleSeriesDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article-series-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article-series-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-series-details/article-series-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article-series-details.component.css */
      "./src/app/components/article-series-details/article-series-details.component.css"))["default"]]
    })], ArticleSeriesDetailsComponent);
    /***/
  },

  /***/
  "./src/app/components/article-series-list/article-series-list.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/article-series-list/article-series-list.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsArticleSeriesListArticleSeriesListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-header{\r\n    margin: 20px auto 20px;\r\n}\r\n\r\n.form-control {\r\n    color:whitesmoke !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLXNlcmllcy1saXN0L2FydGljbGUtc2VyaWVzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS1zZXJpZXMtbGlzdC9hcnRpY2xlLXNlcmllcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1oZWFkZXJ7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGNvbG9yOndoaXRlc21va2UgIWltcG9ydGFudDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/article-series-list/article-series-list.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/article-series-list/article-series-list.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ArticleSeriesListComponent */

  /***/
  function srcAppComponentsArticleSeriesListArticleSeriesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleSeriesListComponent", function () {
      return ArticleSeriesListComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ArticleSeriesListComponent = /*#__PURE__*/function () {
      function ArticleSeriesListComponent(dal, route) {
        _classCallCheck(this, ArticleSeriesListComponent);

        this.dal = dal;
        this.route = route;
        this.header = {
          title: 'Blogs and Article Series',
          details: 'Learn technology in step by step with Article Series',
          imageUrl: 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          overlay: true,
          playBtn: false,
          courseLink: null
        };
        this.activeId = null;
        this.articles = [];
        this.seriesList = [];
        this.matchedArticleCount = -1;
        this.searchVisible = false;
        this.filteredArticles = null;
      }

      _createClass(ArticleSeriesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.dal.getSeriesList().subscribe(function (x) {
            _this4.seriesList = x;
          });
          this.dal.getArticles({
            "status": "PUBLISHED",
            skipFields: 'blogData,authorDetails'
          }).subscribe(function (x) {
            _this4.articles = x;

            _this4.route.params.subscribe(function (params) {
              var seriesName = params.seriesName;
              _this4.activeId = seriesName;
              _this4.matchedArticleCount = _this4.articles.filter(function (x) {
                return x.seriesType === seriesName;
              }).length;
            });
          });
        }
      }, {
        key: "searchArticle",
        value: function searchArticle(searchQuery) {
          var _this5 = this;

          this.dal.searchArticle(searchQuery).subscribe(function (x) {
            _this5.filteredArticles = x;
            console.log(x);
          });
        }
      }]);

      return ArticleSeriesListComponent;
    }();

    ArticleSeriesListComponent.ctorParameters = function () {
      return [{
        type: _services_dal_service__WEBPACK_IMPORTED_MODULE_2__["DalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ArticleSeriesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article-series-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article-series-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-series-list/article-series-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article-series-list.component.css */
      "./src/app/components/article-series-list/article-series-list.component.css"))["default"]]
    })], ArticleSeriesListComponent);
    /***/
  },

  /***/
  "./src/app/modules/articleseries/articleseries-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/articleseries/articleseries-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ArticleseriesRoutingModule */

  /***/
  function srcAppModulesArticleseriesArticleseriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleseriesRoutingModule", function () {
      return ArticleseriesRoutingModule;
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


    var _components_article_series_list_article_series_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/article-series-list/article-series-list.component */
    "./src/app/components/article-series-list/article-series-list.component.ts");
    /* harmony import */


    var _components_article_series_details_article_series_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/article-series-details/article-series-details.component */
    "./src/app/components/article-series-details/article-series-details.component.ts");

    var routes = [{
      path: "list",
      component: _components_article_series_list_article_series_list_component__WEBPACK_IMPORTED_MODULE_3__["ArticleSeriesListComponent"]
    }, {
      path: "list/:seriesName",
      component: _components_article_series_list_article_series_list_component__WEBPACK_IMPORTED_MODULE_3__["ArticleSeriesListComponent"]
    }, {
      path: "article/:seriesName/:articleName/:id",
      component: _components_article_series_details_article_series_details_component__WEBPACK_IMPORTED_MODULE_4__["ArticleSeriesDetailsComponent"]
    }];

    var ArticleseriesRoutingModule = function ArticleseriesRoutingModule() {
      _classCallCheck(this, ArticleseriesRoutingModule);
    };

    ArticleseriesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ArticleseriesRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/articleseries/articleseries.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/articleseries/articleseries.module.ts ***!
    \***************************************************************/

  /*! exports provided: ArticleseriesModule */

  /***/
  function srcAppModulesArticleseriesArticleseriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleseriesModule", function () {
      return ArticleseriesModule;
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
    /* harmony import */


    var _articleseries_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./articleseries-routing.module */
    "./src/app/modules/articleseries/articleseries-routing.module.ts");
    /* harmony import */


    var _components_article_series_list_article_series_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/article-series-list/article-series-list.component */
    "./src/app/components/article-series-list/article-series-list.component.ts");
    /* harmony import */


    var _components_article_series_details_article_series_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/article-series-details/article-series-details.component */
    "./src/app/components/article-series-details/article-series-details.component.ts");
    /* harmony import */


    var _course_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../course/shared.module */
    "./src/app/modules/course/shared.module.ts");
    /* harmony import */


    var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-markdown */
    "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArticleseriesModule = function ArticleseriesModule() {
      _classCallCheck(this, ArticleseriesModule);
    };

    ArticleseriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_article_series_details_article_series_details_component__WEBPACK_IMPORTED_MODULE_5__["ArticleSeriesDetailsComponent"], _components_article_series_list_article_series_list_component__WEBPACK_IMPORTED_MODULE_4__["ArticleSeriesListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _course_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _articleseries_routing_module__WEBPACK_IMPORTED_MODULE_3__["ArticleseriesRoutingModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"].forChild(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]]
    })], ArticleseriesModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-articleseries-articleseries-module-es5.js.map