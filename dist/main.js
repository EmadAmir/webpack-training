/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* HEADER */
.header-nav--nav {
  border: 0;
  border-bottom: 1px solid #a0a0a0;
  margin-bottom: 0;
}

.header-nav--nav .header-nav--main ul {
  margin: 10px 0 10px;
}

.header-nav--nav .header-nav--main ul li.nav-item {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.2px;
  padding-bottom: 10px;
}

.header-nav--nav .header-nav--main ul li.nav-item:after {
  content: "";
  display: inline-block;
  width: 15px;
}

.header-nav--nav .header-nav--main ul li.nav-item:last-child:after {
  width: 0;
}

.header-nav--nav .header-nav--main ul li.nav-item a {
  padding: 0;
}

.header-nav--nav .header-nav--main .form-inline input.form-control {
  width: 330px;
  height: 30px;
  margin: 0;
  box-shadow: none;
}

.header-nav--nav .header-nav--main .form-inline .btn-default {
  background: #a0a0a0;
  position: relative;
  border: 0;
  border-radius: 0;
  font-weight: 300;
  width: 100px;
  height: 30px;
  min-width: auto;
  top: 0;
  left: -3px;
}

.header-nav--nav .navbar-brand {
  padding: 0;
  width: 100%;
}

.header-nav--nav .navbar-brand a {
  display: block;
  width: 170px;
}

.header-nav--nav .navbar-collapse {
  padding-right: 0;
}

.header-nav--nav .header-nav--utilities {
  margin-bottom: 15px;
}

.header-nav--nav .header-nav--utilities .account {
  text-align: left;
  font-size: 14px;
}

.header-nav--nav .header-nav--utilities .account a {
  font-size: 14px;
}

.header-nav--nav .header-nav--utilities .image {
  width: 60px;
  height: 60px;
  margin-right: 15px;
}

.header-nav--nav .header-nav--utilities .image img {
  border-radius: 100px;
}

.header-nav--search {
  background: #a0a0a0;
  padding: 5px 20px;
}

.header-nav--search input.form-control {
  margin-bottom: 0;
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .header-nav--nav .navbar-collapse.collapse {
    flex: 1;
    display: flex !important;
  }
  .header-nav--nav .navbar-brand {
    padding: 0;
    width: auto;
    margin-right: 0;
  }
  .header-nav--nav .navbar-brand a {
    display: block;
    width: 120px;
  }
  .header-nav--nav .header-nav--main ul {
    margin-bottom: 0;
  }
  .header-nav--nav .header-nav--main ul li.nav-item {
    font-size: 13px;
    padding-bottom: 0;
  }
  .header-nav--nav .header-nav--main ul li.nav-item:after {
    width: 8px;
  }
  .header-nav--nav .header-nav--utilities {
    margin-left: auto;
    margin-bottom: 0;
  }
  .header-nav--nav .header-nav--utilities .account {
    font-size: 14px;
    text-align: right;
  }
  .header-nav--nav .header-nav--utilities .image {
    margin-left: 15px;
  }
}
@media only screen and (min-width: 992px) {
  .header-nav--nav .header-nav--main ul li.nav-item {
    font-size: 16px;
  }
  .header-nav--nav .navbar-brand {
    margin-right: 40px;
  }
  .header-nav--nav .navbar-brand a {
    display: block;
    width: 170px;
  }
  .header-nav--nav .header-nav--main ul li.nav-item:after {
    width: 15px;
  }
  .header-nav--nav .header-nav--utilities .account {
    font-size: 18px;
  }
}
/* HERO */
.crf-hero {
  background-image: url("https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/hero_bkgd_v1.jpg");
  background-repeat: no-repeat;
  height: 400px;
  background-size: cover;
  background-position: center center;
  text-align: center;
}

.crf-hero h1, .crf-hero h2 {
  font-size: 63px;
  font-weight: 700;
  margin: 0;
  flex: inherit;
  line-height: 0.9;
}

.crf-hero h1 {
  left: -30px;
}

.crf-hero h2 {
  color: #faa541;
}

.crf-hero p.lead {
  letter-spacing: 2px;
  font-weight: 700;
}

@media only screen and (min-width: 1200px) {
  .crf-hero .container {
    max-width: 1170px;
  }
}
@media only screen and (max-width: 768px) {
  .crf-hero {
    margin-bottom: 0;
    padding-bottom: 0;
    background-position: 70% 0;
    background-size: 180%;
  }
  .crf-hero .container {
    margin-top: auto;
    background-color: #faa541;
    padding: 15px;
  }
  .crf-hero h1 {
    left: 0;
  }
  .crf-hero h2, .crf-hero p.lead {
    color: white;
  }
  .crf-hero p.lead {
    margin-top: 5px;
    margin-bottom: 0;
  }
}
@media only screen and (max-width: 480px) {
  .crf-hero h1, .crf-hero h2 {
    font-size: 55px;
  }
}
/* CIGAR BANNER */
.crf-cigar-banner {
  margin-top: 55px;
  margin-bottom: 55px;
}

.crf-cigar-banner--container {
  width: 100%;
  border-top: 1px solid #a0a0a0;
  border-bottom: 1px solid #a0a0a0;
  padding: 25px 0;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.crf-cigar-banner--container img {
  width: 250px;
}

.crf-cigar-banner--text > div {
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
}

.crf-cigar-banner--text > div:last-child {
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
}

@media only screen and (max-width: 1024px) {
  .crf-cigar-banner--text > div {
    font-size: 24px;
  }
  .crf-cigar-banner--container img {
    width: 220px;
  }
}
@media only screen and (max-width: 768px) {
  .crf-cigar-banner {
    margin-top: 0;
  }
  .crf-cigar-banner--container {
    flex-wrap: wrap;
    margin-left: 0;
    margin-right: 0;
    border-bottom-color: transparent;
  }
  .crf-cigar-banner--text > div:last-child {
    margin-top: 15px;
  }
  .crf-cigar-banner--container img:nth-of-type(1) {
    left: 0;
    top: 0;
  }
  .crf-cigar-banner--container img:nth-of-type(2) {
    top: 0;
    right: 0;
  }
  .crf-cigar-banner--container img {
    width: 350px;
    position: absolute;
    mix-blend-mode: multiply;
  }
  .crf-cigar-banner--text {
    flex: 0 0 100%;
    margin-top: 250px;
  }
}
@media only screen and (max-width: 640px) {
  .crf-cigar-banner--container img:nth-of-type(1) {
    left: -15%;
  }
  .crf-cigar-banner--container img:nth-of-type(2) {
    right: -15%;
  }
}
@media only screen and (max-width: 480px) {
  .order-sm-0 {
    order: 0;
  }
  .order-sm-1 {
    order: 1;
  }
  .order-sm-2 {
    order: 2;
  }
  .crf-cigar-banner--container img {
    width: 270px;
  }
  .crf-cigar-banner--text {
    margin-top: 180px;
  }
}
/* STORIES */
.crf-story a > div {
  color: #364147;
}

.crf-story .crf-story--text {
  padding: 30px 0;
  text-transform: uppercase;
  text-align: center;
}

.crf-story .crf-story--text > div {
  font-size: 16px;
  font-weight: 200;
  color: #faa541;
}

.crf-story .crf-story--text h3 {
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
  margin: 0;
}

.crf-story .crf-story--image img {
  width: 100%;
}

@media only screen and (max-width: 991px) {
  .crf-story .crf-story--image {
    height: 180px;
    overflow: hidden;
    position: relative;
  }
  .crf-story .crf-story--image img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}
/* FULL BANNER */
.crf-full-banner {
  margin-top: 50px;
  margin-bottom: 50px;
}

.crf-full-banner .row {
  position: relative;
}

.crf-full-banner .row:before {
  content: "";
  position: absolute;
  border: 1px solid white;
  display: block;
  top: 30px;
  bottom: 30px;
  left: 50px;
  right: 50px;
  z-index: 1;
}

.crf-full-banner .crf-full-banner--image {
  flex: 0 0 58.333333%;
  background-image: url("https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/img-vistas.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  min-height: 400px;
}

.crf-full-banner .crf-full-banner--text {
  flex: 0 0 41.666667%;
  background: #364147;
  text-transform: uppercase;
  padding: 30px;
  position: relative;
}

.crf-full-banner .crf-full-banner--text h4 {
  font-size: 40px;
  font-weight: 700;
  color: #637f94;
  font-style: italic;
  line-height: 1;
  margin: 0;
}

.crf-full-banner .crf-full-banner--text h4:after {
  content: "";
  width: 100px;
  height: 1px;
  background: #faa541;
  margin: 20px auto;
  display: block;
}

.crf-full-banner .crf-full-banner--text > div {
  color: white;
}

.crf-full-banner .crf-full-banner--text > div:nth-of-type(1) {
  font-size: 60px;
  font-weight: 700;
  line-height: 1;
}

.crf-full-banner .crf-full-banner--text > div:nth-of-type(2) {
  font-size: 25px;
  font-weight: 200;
  letter-spacing: 3px;
}

.crf-full-banner .crf-full-banner--text .btn.btn-default {
  text-transform: none;
  margin-top: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
}

@media only screen and (max-width: 991px) {
  .crf-full-banner .col {
    position: relative;
    flex-direction: column;
  }
  .crf-full-banner .crf-full-banner--text {
    padding: 30px 30px 50px;
  }
  .crf-full-banner .crf-full-banner--text h4 {
    display: none;
  }
  .crf-full-banner .crf-full-banner--text .btn.btn-default {
    margin-top: 20px;
  }
  .crf-full-banner .crf-full-banner--image {
    min-height: 300px;
  }
  .crf-full-banner .crf-full-banner--image h4 {
    font-size: 40px;
    font-weight: 700;
    color: #637f94;
    font-style: italic;
    line-height: 1;
    margin: 0;
    text-align: center;
    top: 50px;
    position: relative;
    text-transform: uppercase;
  }
}
@media only screen and (max-width: 768px) {
  .crf-full-banner .col {
    padding-left: 0;
    padding-right: 0;
  }
  .crf-full-banner .row:before {
    left: 30px;
    right: 30px;
  }
}
/* FOOTER */
footer {
  background: black;
  position: relative;
  z-index: 0;
  min-height: 330px;
}

footer:after {
  content: "";
  background: #a0a0a0;
  width: 75%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

footer .crf-footer--category {
  flex: 0 0 75%;
  padding: 40px 15px;
}

footer .crf-footer--header {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 15px;
}

footer .crf-footer--links a {
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  display: block;
  padding: 0 0 4px;
}

footer .crf-footer--links a:hover {
  text-decoration: underline;
}

footer .crf-footer--links.active .crf-footer--header {
  margin-bottom: 15px;
}

footer .crf-footer--links.active ul {
  display: block;
}

footer .crf-footer--newsletter .crf-footer--header {
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 5px;
}

footer .crf-footer--newsletter .crf-footer--subheader {
  font-style: italic;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 15px;
}

footer .crf-footer--newsletter input {
  border: 1px solid #364147;
  width: 200px;
  margin-bottom: 10px;
}

footer .crf-footer--newsletter button {
  width: 150px;
  min-width: auto;
  text-transform: uppercase;
  letter-spacing: 1px;
}

footer .crf-footer-m--social {
  order: 4;
  position: relative;
}

footer .crf-footer--social ul li, footer .crf-footer-m--social ul li {
  display: inline-block;
}

footer .crf-footer--social ul li a, footer .crf-footer-m--social ul li a {
  display: block;
  width: 23px;
  height: 23px;
  background-size: 23px 23px;
  background-position: center;
}

footer .crf-footer--social .twitter, footer .crf-footer-m--social .twitter {
  background-image: url("https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/social_icons/Twitter_Icon.svg");
}

footer .crf-footer--social .facebook, footer .crf-footer-m--social .facebook {
  background-image: url("https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/social_icons/Facebook_Icon.svg");
}

footer .crf-footer--social .instagram, footer .crf-footer-m--social .instagram {
  background-image: url("https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/social_icons/Instagram_Icon.svg");
}

footer .crf-footer--social .pinterest, footer .crf-footer-m--social .pinterest {
  background-image: url("https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/social_icons/Pinterest_Icon.svg");
}

footer .crf-footer--social .googleplus, footer .crf-footer-m--social .googleplus {
  background-image: url("https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/social_icons/GooglePlus_Icon.svg");
}

footer .crf-footer--logo {
  color: #e5e5e5;
  font-size: 16px;
  flex: 0 0 25%;
}

footer .crf-footer--logo img {
  max-width: 230px;
}

footer .crf-footer--logo .container {
  padding: 40px 0;
}

footer .crf-footer--logo .container > div {
  padding: 0 30px;
}

footer .crf-footer--logo .container > div:before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  margin: 30px 0;
  background: linear-gradient(to right, #f05a28 0, #e80a89 100%);
}

footer .crf-footer--copyright {
  text-align: center;
  font-size: 12px;
  flex: 0 0 75%;
  padding: 10px 0;
}

@media only screen and (min-width: 992px) {
  footer {
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 991px) and (min-width: 320px) {
  footer {
    flex-direction: column;
    background: transparent;
  }
  footer:after {
    width: 100%;
    background: transparent;
  }
  footer .crf-footer--category {
    background: #a0a0a0;
    padding-bottom: 0;
  }
  footer .crf-footer--logo {
    background: black;
    margin: 50px 20px;
  }
  footer .crf-footer--links:after {
    content: "";
    display: block;
    height: 2px;
    background: white;
    margin: 10px -15px 10px;
  }
  footer .crf-footer--links:nth-of-type(1) {
    order: 1;
  }
  footer .crf-footer--links:nth-of-type(2) {
    order: 2;
  }
  footer .crf-footer--links:nth-of-type(3) {
    order: 3;
  }
  footer .crf-footer--links ul {
    display: none;
  }
  footer .crf-footer--header {
    margin-bottom: 10px;
    cursor: pointer;
    position: relative;
  }
  footer .crf-footer--header:after {
    content: "+";
    display: block;
    font-weight: 200;
    font-size: 30px;
    line-height: 1;
    color: white;
    width: 30px;
    height: 30px;
    text-align: center;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border: 1px solid white;
    border-radius: 100px;
  }
  footer .crf-footer--links.active .crf-footer--header:after {
    content: "";
  }
  footer .crf-footer--links.active .crf-footer--header:before {
    content: "";
    width: 15px;
    height: 2px;
    background: white;
    transform: translate(-50%);
    position: absolute;
    top: 50%;
    right: 0;
  }
  footer .crf-footer--newsletter .crf-footer--header {
    cursor: default;
  }
  footer .crf-footer--newsletter .crf-footer--header:before,
  footer .crf-footer--newsletter .crf-footer--header:after,
  footer .crf-footer-m--social .crf-footer--header:before,
  footer .crf-footer-m--social .crf-footer--header:after {
    display: none;
  }
  footer .crf-footer-m--social .crf-footer--header {
    cursor: default;
  }
  footer .crf-footer-m--social ul {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
  }
  footer .crf-footer-m--social:after {
    display: none;
  }
  footer .crf-footer--social {
    order: 0;
    padding-bottom: 10px;
  }
  footer .crf-footer--social:after {
    content: "";
    display: block;
    height: 15px;
    background: white;
    margin: 40px -15px 0;
  }
  footer .crf-footer--logo .container {
    padding: 40px 10px;
  }
}
@media only screen and (max-width: 768px) {
  footer .crf-footer--category .row {
    flex-direction: column;
  }
}
/* MOBILE VIEW ORDER */
@media only screen and (max-width: 768px) {
  .crf {
    display: flex;
    flex-direction: column;
  }
  .crf-story {
    order: 6;
    margin-bottom: 50px;
  }
  .crf-full-banner {
    order: 5;
    margin-top: 0;
  }
  footer {
    order: 7;
  }
}`, "",{"version":3,"sources":["webpack://./src/css/main.scss"],"names":[],"mappings":"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","sourcesContent":["/* HEADER */\r\n\r\n$lightGray: #a0a0a0;\r\n\r\n.header-nav--nav {border: 0; border-bottom: 1px solid $lightGray; margin-bottom: 0;}\r\n\r\n.header-nav--nav .header-nav--main ul {margin: 10px 0 10px;}\r\n.header-nav--nav .header-nav--main ul li.nav-item {font-size: 14px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.2px; padding-bottom: 10px;}\r\n.header-nav--nav .header-nav--main ul li.nav-item:after {content: \"\"; display: inline-block; width: 15px;}\r\n.header-nav--nav .header-nav--main ul li.nav-item:last-child:after {width: 0;}\r\n.header-nav--nav .header-nav--main ul li.nav-item a {padding: 0;}\r\n\r\n.header-nav--nav .header-nav--main .form-inline input.form-control {width: 330px; height: 30px; margin: 0; box-shadow: none;}\r\n.header-nav--nav .header-nav--main .form-inline .btn-default {background: $lightGray; position: relative; border: 0; border-radius: 0; font-weight: 300; width: 100px; height: 30px; min-width: auto; top: 0; left: -3px;}\r\n\r\n.header-nav--nav .navbar-brand {padding: 0; width: 100%;}\r\n.header-nav--nav .navbar-brand a {display: block; width: 170px;}\r\n\r\n.header-nav--nav .navbar-collapse {padding-right: 0;}\r\n\r\n.header-nav--nav .header-nav--utilities {margin-bottom: 15px;}\r\n.header-nav--nav .header-nav--utilities .account {text-align: left; font-size: 14px;}\r\n.header-nav--nav .header-nav--utilities .account a {font-size: 14px;}\r\n.header-nav--nav .header-nav--utilities .image {width: 60px; height: 60px; margin-right: 15px;}\r\n.header-nav--nav .header-nav--utilities .image img {border-radius: 100px;}\r\n\r\n.header-nav--search {background: #a0a0a0; padding: 5px 20px;}\r\n.header-nav--search input.form-control {margin-bottom: 0; width: 100%;}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .header-nav--nav .navbar-collapse.collapse {flex: 1; display: flex !important;}\r\n    .header-nav--nav .navbar-brand {padding: 0; width: auto; margin-right: 0;}\r\n    .header-nav--nav .navbar-brand a {display: block; width: 120px;}\r\n    .header-nav--nav .header-nav--main ul {margin-bottom: 0;}\r\n    .header-nav--nav .header-nav--main ul li.nav-item {font-size: 13px; padding-bottom: 0;}\r\n    .header-nav--nav .header-nav--main ul li.nav-item:after {width: 8px;}\r\n    .header-nav--nav .header-nav--utilities {margin-left: auto; margin-bottom: 0;}\r\n    .header-nav--nav .header-nav--utilities .account {font-size: 14px; text-align: right;}\r\n    .header-nav--nav .header-nav--utilities .image {margin-left: 15px;}\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n    .header-nav--nav .header-nav--main ul li.nav-item {font-size: 16px;}\r\n    .header-nav--nav .navbar-brand {margin-right: 40px;}\r\n    .header-nav--nav .navbar-brand a {display: block; width: 170px;}\r\n    .header-nav--nav .header-nav--main ul li.nav-item:after {width: 15px;}\r\n    .header-nav--nav .header-nav--utilities .account {font-size: 18px;}\r\n}\r\n\r\n/* HERO */\r\n.crf-hero {background-image: url('https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/hero_bkgd_v1.jpg'); background-repeat: no-repeat; height: 400px; background-size: cover; background-position: center center; text-align: center;}\r\n.crf-hero h1, .crf-hero h2 {font-size: 63px; font-weight: 700; margin: 0; flex: inherit; line-height: 0.9;}\r\n.crf-hero h1 {left: -30px;}\r\n.crf-hero h2 {color: #faa541;}\r\n.crf-hero p.lead {letter-spacing: 2px; font-weight: 700;}\r\n\r\n@media only screen and  (min-width: 1200px) {\r\n    .crf-hero .container {max-width: 1170px;}\r\n}\r\n@media only screen and (max-width: 768px) {\r\n    .crf-hero {margin-bottom: 0; padding-bottom: 0; background-position: 70% 0; background-size: 180%;}\r\n    .crf-hero .container {margin-top: auto; background-color: #faa541; padding: 15px;}\r\n    .crf-hero h1 {left: 0;}\r\n    .crf-hero h2 ,  .crf-hero p.lead {color: white;}\r\n    .crf-hero p.lead {margin-top: 5px; margin-bottom: 0;}\r\n}\r\n@media only screen and (max-width: 480px) {\r\n    .crf-hero h1, .crf-hero h2 {font-size: 55px;}\r\n}\r\n\r\n/* CIGAR BANNER */\r\n.crf-cigar-banner {margin-top: 55px; margin-bottom: 55px;}\r\n.crf-cigar-banner--container {width: 100%; border-top: 1px solid #a0a0a0; border-bottom: 1px solid #a0a0a0; padding: 25px 0; margin-left: 15px; margin-right: 15px; text-align: center; position: relative; overflow: hidden;}\r\n.crf-cigar-banner--container img {width: 250px;}\r\n.crf-cigar-banner--text > div {font-size: 30px; font-weight: 700; text-transform: uppercase; line-height: 1;}\r\n.crf-cigar-banner--text > div:last-child {font-size: 16px; font-weight: 400; margin-top: 5px;}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n    .crf-cigar-banner--text > div {font-size: 24px;}\r\n    .crf-cigar-banner--container img {width: 220px;}\r\n}\r\n@media only screen and (max-width: 768px) {\r\n    .crf-cigar-banner {margin-top: 0;}\r\n    .crf-cigar-banner--container {flex-wrap: wrap; margin-left: 0; margin-right: 0; border-bottom-color: transparent;}\r\n    .crf-cigar-banner--text > div:last-child {margin-top: 15px;}\r\n    .crf-cigar-banner--container img:nth-of-type(1) {left:0; top: 0;}\r\n    .crf-cigar-banner--container img:nth-of-type(2) {top: 0; right:  0;}\r\n    .crf-cigar-banner--container img {width: 350px; position: absolute; mix-blend-mode: multiply;}\r\n    .crf-cigar-banner--text {flex: 0 0 100%; margin-top: 250px;}\r\n}\r\n@media only screen and (max-width: 640px) {\r\n    .crf-cigar-banner--container img:nth-of-type(1) {left: -15%;}\r\n    .crf-cigar-banner--container img:nth-of-type(2) {right:  -15%;}\r\n}\r\n@media only screen and (max-width: 480px) {\r\n    .order-sm-0 {order: 0;}\r\n    .order-sm-1 {order: 1;}\r\n    .order-sm-2 {order: 2;}\r\n    .crf-cigar-banner--container img {width: 270px;}\r\n    .crf-cigar-banner--text {margin-top: 180px;}\r\n}\r\n\r\n/* STORIES */\r\n.crf-story  a > div {color: #364147;}\r\n.crf-story .crf-story--text {padding: 30px 0; text-transform: uppercase; text-align: center;}\r\n.crf-story .crf-story--text > div {font-size: 16px; font-weight: 200; color: #faa541;}\r\n.crf-story .crf-story--text h3 {font-size: 30px; font-weight: 700; line-height: 1; margin: 0;}\r\n.crf-story .crf-story--image img {width: 100%;}\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .crf-story  .crf-story--image {height: 180px; overflow: hidden; position: relative;}\r\n    .crf-story .crf-story--image img {position: relative; top: 50%; transform: translateY(-50%);}\r\n}\r\n\r\n/* FULL BANNER */\r\n.crf-full-banner {margin-top: 50px; margin-bottom: 50px;}\r\n.crf-full-banner .row {position: relative;}\r\n.crf-full-banner .row:before {content: \"\"; position: absolute; border: 1px solid white; display: block; top: 30px; bottom: 30px; left: 50px; right: 50px; z-index: 1;}\r\n.crf-full-banner .crf-full-banner--image {\r\n    flex: 0 0 58.333333%;\r\n    background-image: url('https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/img-vistas.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: top center;\r\n    min-height: 400px;\r\n}\r\n.crf-full-banner .crf-full-banner--text {flex: 0 0 41.666667%; background: #364147; text-transform: uppercase; padding: 30px; position: relative;}\r\n.crf-full-banner .crf-full-banner--text h4 {font-size: 40px; font-weight: 700; color: #637f94; font-style: italic; line-height: 1; margin: 0;}\r\n.crf-full-banner .crf-full-banner--text h4:after {content: \"\"; width: 100px; height: 1px; background: #faa541; margin: 20px auto; display: block;}\r\n.crf-full-banner .crf-full-banner--text  > div {color: white;}\r\n.crf-full-banner .crf-full-banner--text  > div:nth-of-type(1) {font-size: 60px; font-weight: 700; line-height: 1;}\r\n.crf-full-banner .crf-full-banner--text  > div:nth-of-type(2) {font-size: 25px; font-weight: 200; letter-spacing: 3px;}\r\n.crf-full-banner .crf-full-banner--text .btn.btn-default {text-transform: none; margin-top: 50px; text-transform: uppercase; letter-spacing: 1px; z-index: 1;}\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .crf-full-banner .col {position: relative; flex-direction: column;}\r\n    .crf-full-banner .crf-full-banner--text  {padding: 30px 30px 50px;}\r\n    .crf-full-banner .crf-full-banner--text h4 {display: none;}\r\n    .crf-full-banner .crf-full-banner--text .btn.btn-default {margin-top: 20px;}\r\n    .crf-full-banner .crf-full-banner--image {min-height: 300px;}\r\n    .crf-full-banner .crf-full-banner--image h4 {font-size: 40px; font-weight: 700; color: #637f94; font-style: italic; line-height: 1; margin: 0; text-align: center; top: 50px; position: relative; text-transform: uppercase;}\r\n}\r\n@media only screen and (max-width: 768px) {\r\n    .crf-full-banner .col {padding-left: 0; padding-right: 0;}\r\n    .crf-full-banner .row:before {left: 30px; right: 30px;}\r\n}\r\n\r\n/* FOOTER */\r\nfooter {background: black; position: relative; z-index: 0; min-height: 330px;}\r\nfooter:after {content: \"\"; background: #a0a0a0; width: 75%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: -1;}\r\n\r\nfooter .crf-footer--category {flex: 0 0 75%; padding: 40px 15px;}\r\nfooter .crf-footer--header {text-transform: uppercase; font-weight: 700; font-size: 16px; margin-bottom: 15px;}\r\n\r\nfooter .crf-footer--links a {color: white; text-transform: uppercase; font-size: 12px; display: block; padding: 0 0 4px;}\r\nfooter .crf-footer--links a:hover {text-decoration: underline;}\r\nfooter .crf-footer--links.active .crf-footer--header {margin-bottom: 15px;}\r\nfooter .crf-footer--links.active ul {display: block;}\r\n\r\nfooter .crf-footer--newsletter .crf-footer--header {font-size: 12px; font-weight: 400; margin-bottom: 5px;}\r\nfooter .crf-footer--newsletter .crf-footer--subheader {font-style: italic; font-size: 12px; font-weight: 400; margin-bottom: 15px;}\r\nfooter .crf-footer--newsletter input {border: 1px solid #364147; width: 200px; margin-bottom: 10px;}\r\nfooter .crf-footer--newsletter button {width: 150px; min-width: auto; text-transform: uppercase; letter-spacing: 1px;}\r\n\r\nfooter .crf-footer-m--social {order: 4; position: relative;}\r\nfooter .crf-footer--social ul li, footer .crf-footer-m--social ul li {display: inline-block;}\r\nfooter .crf-footer--social ul li a, footer .crf-footer-m--social ul li a {display: block; width: 23px; height: 23px; background-size: 23px 23px; background-position: center;}\r\nfooter .crf-footer--social .twitter, footer .crf-footer-m--social .twitter {background-image: url('https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/social_icons/Twitter_Icon.svg');}\r\nfooter .crf-footer--social .facebook, footer .crf-footer-m--social .facebook {background-image: url('https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/social_icons/Facebook_Icon.svg');}\r\nfooter .crf-footer--social .instagram, footer .crf-footer-m--social .instagram {background-image: url('https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/social_icons/Instagram_Icon.svg');}\r\nfooter .crf-footer--social .pinterest, footer .crf-footer-m--social .pinterest {background-image: url('https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/social_icons/Pinterest_Icon.svg');}\r\nfooter .crf-footer--social .googleplus, footer .crf-footer-m--social .googleplus {background-image: url('https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/social_icons/GooglePlus_Icon.svg');}\r\n\r\nfooter .crf-footer--logo {color: #e5e5e5; font-size: 16px; flex: 0 0 25%;}\r\nfooter .crf-footer--logo img {max-width: 230px;}\r\nfooter .crf-footer--logo .container {padding: 40px 0;}\r\nfooter .crf-footer--logo .container > div {padding: 0 30px;}\r\nfooter .crf-footer--logo .container > div:before {content: \"\"; display: block; width: 100%; height: 1px; margin: 30px 0; background: linear-gradient(to right,#f05a28 0,#e80a89 100%);}\r\nfooter .crf-footer--copyright {text-align: center; font-size: 12px; flex: 0 0 75%; padding: 10px 0;}\r\n\r\n@media only screen and (min-width: 992px) {\r\n    footer {flex-wrap: wrap;}\r\n}\r\n@media only screen and (max-width: 991px) and (min-width: 320px) {\r\n    footer {flex-direction: column; background: transparent;}\r\n    footer:after {width: 100%; background: transparent;}\r\n\r\n    footer .crf-footer--category {background: #a0a0a0; padding-bottom: 0;}\r\n    footer .crf-footer--logo {background: black; margin: 50px 20px;}\r\n\r\n    footer .crf-footer--links:after {content: \"\"; display: block; height: 2px; background: white; margin: 10px -15px 10px;}\r\n    footer .crf-footer--links:nth-of-type(1) {order: 1;}\r\n    footer .crf-footer--links:nth-of-type(2) {order: 2;}\r\n    footer .crf-footer--links:nth-of-type(3) {order: 3;}\r\n    footer .crf-footer--links ul {display: none;}\r\n\r\n    footer .crf-footer--header {margin-bottom: 10px; cursor: pointer; position: relative;}\r\n    footer .crf-footer--header:after {\r\n        content: \"+\";\r\n        display: block;\r\n        font-weight: 200;\r\n        font-size: 30px;\r\n        line-height: 1;\r\n        color: white;\r\n        width: 30px;\r\n        height: 30px;\r\n        text-align: center;\r\n        position: absolute;\r\n        top: 50%;\r\n        right: 0;\r\n        transform: translateY(-50%);\r\n        border: 1px solid white;\r\n        border-radius: 100px;\r\n    }\r\n\r\n    footer .crf-footer--links.active .crf-footer--header:after {content: \"\";}\r\n    footer .crf-footer--links.active .crf-footer--header:before {content: \"\"; width: 15px; height: 2px; background: white; transform: translate(-50%); position: absolute; top: 50%; right: 0;}\r\n\r\n    footer .crf-footer--newsletter .crf-footer--header {cursor: default;}\r\n    footer .crf-footer--newsletter .crf-footer--header:before,\r\n    footer .crf-footer--newsletter .crf-footer--header:after,\r\n    footer .crf-footer-m--social .crf-footer--header:before,\r\n    footer .crf-footer-m--social .crf-footer--header:after {display: none;}\r\n\r\n    footer .crf-footer-m--social .crf-footer--header {cursor: default;}\r\n    footer .crf-footer-m--social ul {display: block; position: absolute; top: 0; right: 0;}\r\n    footer .crf-footer-m--social:after {display: none;}\r\n\r\n    footer .crf-footer--social {order: 0; padding-bottom: 10px;}\r\n    footer .crf-footer--social:after {content: \"\"; display: block; height: 15px; background: white; margin: 40px -15px 0;}\r\n\r\n    footer .crf-footer--logo .container {padding: 40px 10px;}\r\n}\r\n@media only screen and (max-width: 768px) {\r\n    footer .crf-footer--category .row {flex-direction: column;}\r\n}\r\n\r\n/* MOBILE VIEW ORDER */\r\n@media only screen and (max-width: 768px) {\r\n    .crf {display: flex; flex-direction: column;}\r\n    .crf-story {order: 6; margin-bottom: 50px;}\r\n    .crf-full-banner {order: 5; margin-top: 0;}\r\n    footer {order: 7;}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    log: (message) => {
        console.log(message);
    },
});


/***/ })

/******/ 	});
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
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.ts");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./src/css/main.scss");


const cart = [];
function addToCart(item) {
    cart.push(item);
    _util__WEBPACK_IMPORTED_MODULE_0__["default"].log("added item : " + item);
}
function removeFromCart(idx) {
    cart.splice(idx, 1); //slice method creates a copy of the cart idx => start 1 => end
    _util__WEBPACK_IMPORTED_MODULE_0__["default"].log("removed: " + idx);
}
addToCart("waterproof boots");

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************!*\
  !*** ./src/home.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.ts");

// import "./css/main.css";
function notificationRegister(email) {
    _util__WEBPACK_IMPORTED_MODULE_0__["default"].log("registering " + email);
}
notificationRegister("test@test.com");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlGQUF5RixLQUFLLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLE9BQU8sS0FBSyxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFFBQVEsTUFBTSxhQUFhLFlBQVksV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFFBQVEsTUFBTSxXQUFXLFVBQVUsUUFBUSxNQUFNLFdBQVcsV0FBVyxRQUFRLE1BQU0sWUFBWSxRQUFRLE1BQU0sWUFBWSxRQUFRLE1BQU0sWUFBWSxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFVBQVUsV0FBVyxRQUFRLE1BQU0sWUFBWSxRQUFRLE1BQU0sWUFBWSxZQUFZLFFBQVEsTUFBTSxZQUFZLFdBQVcsUUFBUSxNQUFNLEtBQUssV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxXQUFXLEtBQUssV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFlBQVksUUFBUSxNQUFNLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxZQUFZLFFBQVEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxXQUFXLFlBQVksWUFBWSxZQUFZLE9BQU8sTUFBTSxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssWUFBWSxLQUFLLFlBQVksWUFBWSxRQUFRLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsUUFBUSxNQUFNLFdBQVcsWUFBWSxXQUFXLFFBQVEsTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxXQUFXLEtBQUssV0FBVyxRQUFRLE1BQU0sV0FBVyxZQUFZLFlBQVksUUFBUSxNQUFNLFdBQVcsWUFBWSxXQUFXLFFBQVEsTUFBTSxXQUFXLFlBQVksV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxLQUFLLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxPQUFPLEtBQUssWUFBWSxLQUFLLFlBQVksWUFBWSxRQUFRLE1BQU0sWUFBWSxRQUFRLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsUUFBUSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksWUFBWSxXQUFXLFdBQVcsUUFBUSxNQUFNLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxZQUFZLFdBQVcsUUFBUSxNQUFNLFdBQVcsWUFBWSxZQUFZLFFBQVEsTUFBTSxZQUFZLFlBQVksWUFBWSxZQUFZLFdBQVcsUUFBUSxNQUFNLEtBQUssWUFBWSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssV0FBVyxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxLQUFLLFdBQVcsS0FBSyxXQUFXLFlBQVksV0FBVyxXQUFXLFFBQVEsTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxRQUFRLE1BQU0sV0FBVyxXQUFXLFFBQVEsTUFBTSxZQUFZLFlBQVksV0FBVyxZQUFZLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsWUFBWSxZQUFZLFFBQVEsTUFBTSxZQUFZLFdBQVcsWUFBWSxZQUFZLFFBQVEsTUFBTSxZQUFZLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxVQUFVLFlBQVksWUFBWSxRQUFRLE1BQU0sV0FBVyxXQUFXLFFBQVEsTUFBTSxZQUFZLFFBQVEsTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFlBQVksUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksUUFBUSxNQUFNLFlBQVksUUFB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Q0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUM7Ozs7Ozs7VUNKRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDRDtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZDQUFJO0FBQ1I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixJQUFJLDZDQUFJO0FBQ1I7QUFDQTs7Ozs7Ozs7Ozs7QUNYMEI7QUFDMUI7QUFDQTtBQUNBLElBQUksNkNBQUk7QUFDUjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9jc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2Nzcy9tYWluLnNjc3M/ZTlkYyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvaG9tZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogSEVBREVSICovXG4uaGVhZGVyLW5hdi0tbmF2IHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2EwYTBhMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tbWFpbiB1bCB7XG4gIG1hcmdpbjogMTBweCAwIDEwcHg7XG59XG5cbi5oZWFkZXItbmF2LS1uYXYgLmhlYWRlci1uYXYtLW1haW4gdWwgbGkubmF2LWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5oZWFkZXItbmF2LS1uYXYgLmhlYWRlci1uYXYtLW1haW4gdWwgbGkubmF2LWl0ZW06YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG4uaGVhZGVyLW5hdi0tbmF2IC5oZWFkZXItbmF2LS1tYWluIHVsIGxpLm5hdi1pdGVtOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICB3aWR0aDogMDtcbn1cblxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tbWFpbiB1bCBsaS5uYXYtaXRlbSBhIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tbWFpbiAuZm9ybS1pbmxpbmUgaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tbWFpbiAuZm9ybS1pbmxpbmUgLmJ0bi1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZDogI2EwYTBhMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtaW4td2lkdGg6IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogLTNweDtcbn1cblxuLmhlYWRlci1uYXYtLW5hdiAubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXItbmF2LS1uYXYgLm5hdmJhci1icmFuZCBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuLmhlYWRlci1uYXYtLW5hdiAubmF2YmFyLWNvbGxhcHNlIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tdXRpbGl0aWVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tdXRpbGl0aWVzIC5hY2NvdW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyLW5hdi0tbmF2IC5oZWFkZXItbmF2LS11dGlsaXRpZXMgLmFjY291bnQgYSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tdXRpbGl0aWVzIC5pbWFnZSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tdXRpbGl0aWVzIC5pbWFnZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLmhlYWRlci1uYXYtLXNlYXJjaCB7XG4gIGJhY2tncm91bmQ6ICNhMGEwYTA7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4uaGVhZGVyLW5hdi0tc2VhcmNoIGlucHV0LmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXItbmF2LS1uYXYgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZSB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhlYWRlci1uYXYtLW5hdiAubmF2YmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuaGVhZGVyLW5hdi0tbmF2IC5uYXZiYXItYnJhbmQgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEyMHB4O1xuICB9XG4gIC5oZWFkZXItbmF2LS1uYXYgLmhlYWRlci1uYXYtLW1haW4gdWwge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tbWFpbiB1bCBsaS5uYXYtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG4gIC5oZWFkZXItbmF2LS1uYXYgLmhlYWRlci1uYXYtLW1haW4gdWwgbGkubmF2LWl0ZW06YWZ0ZXIge1xuICAgIHdpZHRoOiA4cHg7XG4gIH1cbiAgLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tdXRpbGl0aWVzIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5oZWFkZXItbmF2LS1uYXYgLmhlYWRlci1uYXYtLXV0aWxpdGllcyAuYWNjb3VudCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIC5oZWFkZXItbmF2LS1uYXYgLmhlYWRlci1uYXYtLXV0aWxpdGllcyAuaW1hZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXItbmF2LS1uYXYgLmhlYWRlci1uYXYtLW1haW4gdWwgbGkubmF2LWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuaGVhZGVyLW5hdi0tbmF2IC5uYXZiYXItYnJhbmQge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgfVxuICAuaGVhZGVyLW5hdi0tbmF2IC5uYXZiYXItYnJhbmQgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE3MHB4O1xuICB9XG4gIC5oZWFkZXItbmF2LS1uYXYgLmhlYWRlci1uYXYtLW1haW4gdWwgbGkubmF2LWl0ZW06YWZ0ZXIge1xuICAgIHdpZHRoOiAxNXB4O1xuICB9XG4gIC5oZWFkZXItbmF2LS1uYXYgLmhlYWRlci1uYXYtLXV0aWxpdGllcyAuYWNjb3VudCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4vKiBIRVJPICovXG4uY3JmLWhlcm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5wbHVyYWxzaWdodC5jb20vY29udGVudC9kYW0vcGx1cmFsc2lnaHQyL3RlYWNoL2F1dGhvci10b29scy9jYXJ2ZWQtcm9jay1maXRuZXNzL2hlcm9fYmtnZF92MS5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNyZi1oZXJvIGgxLCAuY3JmLWhlcm8gaDIge1xuICBmb250LXNpemU6IDYzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMDtcbiAgZmxleDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDAuOTtcbn1cblxuLmNyZi1oZXJvIGgxIHtcbiAgbGVmdDogLTMwcHg7XG59XG5cbi5jcmYtaGVybyBoMiB7XG4gIGNvbG9yOiAjZmFhNTQxO1xufVxuXG4uY3JmLWhlcm8gcC5sZWFkIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNyZi1oZXJvIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTE3MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jcmYtaGVybyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3MCUgMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE4MCU7XG4gIH1cbiAgLmNyZi1oZXJvIC5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYTU0MTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5jcmYtaGVybyBoMSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICAuY3JmLWhlcm8gaDIsIC5jcmYtaGVybyBwLmxlYWQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY3JmLWhlcm8gcC5sZWFkIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY3JmLWhlcm8gaDEsIC5jcmYtaGVybyBoMiB7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICB9XG59XG4vKiBDSUdBUiBCQU5ORVIgKi9cbi5jcmYtY2lnYXItYmFubmVyIHtcbiAgbWFyZ2luLXRvcDogNTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTVweDtcbn1cblxuLmNyZi1jaWdhci1iYW5uZXItLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2EwYTBhMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhMGEwYTA7XG4gIHBhZGRpbmc6IDI1cHggMDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jcmYtY2lnYXItYmFubmVyLS1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY3JmLWNpZ2FyLWJhbm5lci0tdGV4dCA+IGRpdiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5jcmYtY2lnYXItYmFubmVyLS10ZXh0ID4gZGl2Omxhc3QtY2hpbGQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmNyZi1jaWdhci1iYW5uZXItLXRleHQgPiBkaXYge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuY3JmLWNpZ2FyLWJhbm5lci0tY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDIyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jcmYtY2lnYXItYmFubmVyIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5jcmYtY2lnYXItYmFubmVyLS1jb250YWluZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLmNyZi1jaWdhci1iYW5uZXItLXRleHQgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICAuY3JmLWNpZ2FyLWJhbm5lci0tY29udGFpbmVyIGltZzpudGgtb2YtdHlwZSgxKSB7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLmNyZi1jaWdhci1iYW5uZXItLWNvbnRhaW5lciBpbWc6bnRoLW9mLXR5cGUoMikge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICAuY3JmLWNpZ2FyLWJhbm5lci0tY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gIH1cbiAgLmNyZi1jaWdhci1iYW5uZXItLXRleHQge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDI1MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jcmYtY2lnYXItYmFubmVyLS1jb250YWluZXIgaW1nOm50aC1vZi10eXBlKDEpIHtcbiAgICBsZWZ0OiAtMTUlO1xuICB9XG4gIC5jcmYtY2lnYXItYmFubmVyLS1jb250YWluZXIgaW1nOm50aC1vZi10eXBlKDIpIHtcbiAgICByaWdodDogLTE1JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAub3JkZXItc20tMCB7XG4gICAgb3JkZXI6IDA7XG4gIH1cbiAgLm9yZGVyLXNtLTEge1xuICAgIG9yZGVyOiAxO1xuICB9XG4gIC5vcmRlci1zbS0yIHtcbiAgICBvcmRlcjogMjtcbiAgfVxuICAuY3JmLWNpZ2FyLWJhbm5lci0tY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDI3MHB4O1xuICB9XG4gIC5jcmYtY2lnYXItYmFubmVyLS10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxODBweDtcbiAgfVxufVxuLyogU1RPUklFUyAqL1xuLmNyZi1zdG9yeSBhID4gZGl2IHtcbiAgY29sb3I6ICMzNjQxNDc7XG59XG5cbi5jcmYtc3RvcnkgLmNyZi1zdG9yeS0tdGV4dCB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3JmLXN0b3J5IC5jcmYtc3RvcnktLXRleHQgPiBkaXYge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGNvbG9yOiAjZmFhNTQxO1xufVxuXG4uY3JmLXN0b3J5IC5jcmYtc3RvcnktLXRleHQgaDMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW46IDA7XG59XG5cbi5jcmYtc3RvcnkgLmNyZi1zdG9yeS0taW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNyZi1zdG9yeSAuY3JmLXN0b3J5LS1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuY3JmLXN0b3J5IC5jcmYtc3RvcnktLWltYWdlIGltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxufVxuLyogRlVMTCBCQU5ORVIgKi9cbi5jcmYtZnVsbC1iYW5uZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uY3JmLWZ1bGwtYmFubmVyIC5yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jcmYtZnVsbC1iYW5uZXIgLnJvdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAzMHB4O1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDUwcHg7XG4gIHJpZ2h0OiA1MHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLWltYWdlIHtcbiAgZmxleDogMCAwIDU4LjMzMzMzMyU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LnBsdXJhbHNpZ2h0LmNvbS9jb250ZW50L2RhbS9wbHVyYWxzaWdodDIvdGVhY2gvYXV0aG9yLXRvb2xzL2NhcnZlZC1yb2NrLWZpdG5lc3MvaW1nLXZpc3Rhcy5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG4uY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLXRleHQge1xuICBmbGV4OiAwIDAgNDEuNjY2NjY3JTtcbiAgYmFja2dyb3VuZDogIzM2NDE0NztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLXRleHQgaDQge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNjM3Zjk0O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW46IDA7XG59XG5cbi5jcmYtZnVsbC1iYW5uZXIgLmNyZi1mdWxsLWJhbm5lci0tdGV4dCBoNDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNmYWE1NDE7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNyZi1mdWxsLWJhbm5lciAuY3JmLWZ1bGwtYmFubmVyLS10ZXh0ID4gZGl2IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLXRleHQgPiBkaXY6bnRoLW9mLXR5cGUoMSkge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLXRleHQgPiBkaXY6bnRoLW9mLXR5cGUoMikge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG5cbi5jcmYtZnVsbC1iYW5uZXIgLmNyZi1mdWxsLWJhbm5lci0tdGV4dCAuYnRuLmJ0bi1kZWZhdWx0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNyZi1mdWxsLWJhbm5lciAuY29sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLXRleHQge1xuICAgIHBhZGRpbmc6IDMwcHggMzBweCA1MHB4O1xuICB9XG4gIC5jcmYtZnVsbC1iYW5uZXIgLmNyZi1mdWxsLWJhbm5lci0tdGV4dCBoNCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLXRleHQgLmJ0bi5idG4tZGVmYXVsdCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAuY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLWltYWdlIHtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgfVxuICAuY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLWltYWdlIGg0IHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzYzN2Y5NDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNyZi1mdWxsLWJhbm5lciAuY29sIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuICAuY3JmLWZ1bGwtYmFubmVyIC5yb3c6YmVmb3JlIHtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICB9XG59XG4vKiBGT09URVIgKi9cbmZvb3RlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xufVxuXG5mb290ZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjYTBhMGEwO1xuICB3aWR0aDogNzUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbmZvb3RlciAuY3JmLWZvb3Rlci0tY2F0ZWdvcnkge1xuICBmbGV4OiAwIDAgNzUlO1xuICBwYWRkaW5nOiA0MHB4IDE1cHg7XG59XG5cbmZvb3RlciAuY3JmLWZvb3Rlci0taGVhZGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5mb290ZXIgLmNyZi1mb290ZXItLWxpbmtzIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMCA0cHg7XG59XG5cbmZvb3RlciAuY3JmLWZvb3Rlci0tbGlua3MgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5mb290ZXIgLmNyZi1mb290ZXItLWxpbmtzLmFjdGl2ZSAuY3JmLWZvb3Rlci0taGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuZm9vdGVyIC5jcmYtZm9vdGVyLS1saW5rcy5hY3RpdmUgdWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZm9vdGVyIC5jcmYtZm9vdGVyLS1uZXdzbGV0dGVyIC5jcmYtZm9vdGVyLS1oZWFkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuZm9vdGVyIC5jcmYtZm9vdGVyLS1uZXdzbGV0dGVyIC5jcmYtZm9vdGVyLS1zdWJoZWFkZXIge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuZm9vdGVyIC5jcmYtZm9vdGVyLS1uZXdzbGV0dGVyIGlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM2NDE0NztcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5mb290ZXIgLmNyZi1mb290ZXItLW5ld3NsZXR0ZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtaW4td2lkdGg6IGF1dG87XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmZvb3RlciAuY3JmLWZvb3Rlci1tLS1zb2NpYWwge1xuICBvcmRlcjogNDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5mb290ZXIgLmNyZi1mb290ZXItLXNvY2lhbCB1bCBsaSwgZm9vdGVyIC5jcmYtZm9vdGVyLW0tLXNvY2lhbCB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuZm9vdGVyIC5jcmYtZm9vdGVyLS1zb2NpYWwgdWwgbGkgYSwgZm9vdGVyIC5jcmYtZm9vdGVyLW0tLXNvY2lhbCB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMjNweCAyM3B4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbmZvb3RlciAuY3JmLWZvb3Rlci0tc29jaWFsIC50d2l0dGVyLCBmb290ZXIgLmNyZi1mb290ZXItbS0tc29jaWFsIC50d2l0dGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cucGx1cmFsc2lnaHQuY29tL2NvbnRlbnQvZGFtL3BsdXJhbHNpZ2h0Mi90ZWFjaC9hdXRob3ItdG9vbHMvY2FydmVkLXJvY2stZml0bmVzcy9zb2NpYWxfaWNvbnMvVHdpdHRlcl9JY29uLnN2Z1wiKTtcbn1cblxuZm9vdGVyIC5jcmYtZm9vdGVyLS1zb2NpYWwgLmZhY2Vib29rLCBmb290ZXIgLmNyZi1mb290ZXItbS0tc29jaWFsIC5mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LnBsdXJhbHNpZ2h0LmNvbS9jb250ZW50L2RhbS9wbHVyYWxzaWdodDIvdGVhY2gvYXV0aG9yLXRvb2xzL2NhcnZlZC1yb2NrLWZpdG5lc3Mvc29jaWFsX2ljb25zL0ZhY2Vib29rX0ljb24uc3ZnXCIpO1xufVxuXG5mb290ZXIgLmNyZi1mb290ZXItLXNvY2lhbCAuaW5zdGFncmFtLCBmb290ZXIgLmNyZi1mb290ZXItbS0tc29jaWFsIC5pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5wbHVyYWxzaWdodC5jb20vY29udGVudC9kYW0vcGx1cmFsc2lnaHQyL3RlYWNoL2F1dGhvci10b29scy9jYXJ2ZWQtcm9jay1maXRuZXNzL3NvY2lhbF9pY29ucy9JbnN0YWdyYW1fSWNvbi5zdmdcIik7XG59XG5cbmZvb3RlciAuY3JmLWZvb3Rlci0tc29jaWFsIC5waW50ZXJlc3QsIGZvb3RlciAuY3JmLWZvb3Rlci1tLS1zb2NpYWwgLnBpbnRlcmVzdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LnBsdXJhbHNpZ2h0LmNvbS9jb250ZW50L2RhbS9wbHVyYWxzaWdodDIvdGVhY2gvYXV0aG9yLXRvb2xzL2NhcnZlZC1yb2NrLWZpdG5lc3Mvc29jaWFsX2ljb25zL1BpbnRlcmVzdF9JY29uLnN2Z1wiKTtcbn1cblxuZm9vdGVyIC5jcmYtZm9vdGVyLS1zb2NpYWwgLmdvb2dsZXBsdXMsIGZvb3RlciAuY3JmLWZvb3Rlci1tLS1zb2NpYWwgLmdvb2dsZXBsdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5wbHVyYWxzaWdodC5jb20vY29udGVudC9kYW0vcGx1cmFsc2lnaHQyL3RlYWNoL2F1dGhvci10b29scy9jYXJ2ZWQtcm9jay1maXRuZXNzL3NvY2lhbF9pY29ucy9Hb29nbGVQbHVzX0ljb24uc3ZnXCIpO1xufVxuXG5mb290ZXIgLmNyZi1mb290ZXItLWxvZ28ge1xuICBjb2xvcjogI2U1ZTVlNTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbGV4OiAwIDAgMjUlO1xufVxuXG5mb290ZXIgLmNyZi1mb290ZXItLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAyMzBweDtcbn1cblxuZm9vdGVyIC5jcmYtZm9vdGVyLS1sb2dvIC5jb250YWluZXIge1xuICBwYWRkaW5nOiA0MHB4IDA7XG59XG5cbmZvb3RlciAuY3JmLWZvb3Rlci0tbG9nbyAuY29udGFpbmVyID4gZGl2IHtcbiAgcGFkZGluZzogMCAzMHB4O1xufVxuXG5mb290ZXIgLmNyZi1mb290ZXItLWxvZ28gLmNvbnRhaW5lciA+IGRpdjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IDMwcHggMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjA1YTI4IDAsICNlODBhODkgMTAwJSk7XG59XG5cbmZvb3RlciAuY3JmLWZvb3Rlci0tY29weXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsZXg6IDAgMCA3NSU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICBmb290ZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIGZvb3RlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICBmb290ZXI6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIGZvb3RlciAuY3JmLWZvb3Rlci0tY2F0ZWdvcnkge1xuICAgIGJhY2tncm91bmQ6ICNhMGEwYTA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbiAgZm9vdGVyIC5jcmYtZm9vdGVyLS1sb2dvIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBtYXJnaW46IDUwcHggMjBweDtcbiAgfVxuICBmb290ZXIgLmNyZi1mb290ZXItLWxpbmtzOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbjogMTBweCAtMTVweCAxMHB4O1xuICB9XG4gIGZvb3RlciAuY3JmLWZvb3Rlci0tbGlua3M6bnRoLW9mLXR5cGUoMSkge1xuICAgIG9yZGVyOiAxO1xuICB9XG4gIGZvb3RlciAuY3JmLWZvb3Rlci0tbGlua3M6bnRoLW9mLXR5cGUoMikge1xuICAgIG9yZGVyOiAyO1xuICB9XG4gIGZvb3RlciAuY3JmLWZvb3Rlci0tbGlua3M6bnRoLW9mLXR5cGUoMykge1xuICAgIG9yZGVyOiAzO1xuICB9XG4gIGZvb3RlciAuY3JmLWZvb3Rlci0tbGlua3MgdWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgZm9vdGVyIC5jcmYtZm9vdGVyLS1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBmb290ZXIgLmNyZi1mb290ZXItLWhlYWRlcjphZnRlciB7XG4gICAgY29udGVudDogXCIrXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgfVxuICBmb290ZXIgLmNyZi1mb290ZXItLWxpbmtzLmFjdGl2ZSAuY3JmLWZvb3Rlci0taGVhZGVyOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICB9XG4gIGZvb3RlciAuY3JmLWZvb3Rlci0tbGlua3MuYWN0aXZlIC5jcmYtZm9vdGVyLS1oZWFkZXI6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMDtcbiAgfVxuICBmb290ZXIgLmNyZi1mb290ZXItLW5ld3NsZXR0ZXIgLmNyZi1mb290ZXItLWhlYWRlciB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG4gIGZvb3RlciAuY3JmLWZvb3Rlci0tbmV3c2xldHRlciAuY3JmLWZvb3Rlci0taGVhZGVyOmJlZm9yZSxcbiAgZm9vdGVyIC5jcmYtZm9vdGVyLS1uZXdzbGV0dGVyIC5jcmYtZm9vdGVyLS1oZWFkZXI6YWZ0ZXIsXG4gIGZvb3RlciAuY3JmLWZvb3Rlci1tLS1zb2NpYWwgLmNyZi1mb290ZXItLWhlYWRlcjpiZWZvcmUsXG4gIGZvb3RlciAuY3JmLWZvb3Rlci1tLS1zb2NpYWwgLmNyZi1mb290ZXItLWhlYWRlcjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBmb290ZXIgLmNyZi1mb290ZXItbS0tc29jaWFsIC5jcmYtZm9vdGVyLS1oZWFkZXIge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuICBmb290ZXIgLmNyZi1mb290ZXItbS0tc29jaWFsIHVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIGZvb3RlciAuY3JmLWZvb3Rlci1tLS1zb2NpYWw6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgZm9vdGVyIC5jcmYtZm9vdGVyLS1zb2NpYWwge1xuICAgIG9yZGVyOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIGZvb3RlciAuY3JmLWZvb3Rlci0tc29jaWFsOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW46IDQwcHggLTE1cHggMDtcbiAgfVxuICBmb290ZXIgLmNyZi1mb290ZXItLWxvZ28gLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNDBweCAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGZvb3RlciAuY3JmLWZvb3Rlci0tY2F0ZWdvcnkgLnJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLyogTU9CSUxFIFZJRVcgT1JERVIgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNyZiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jcmYtc3Rvcnkge1xuICAgIG9yZGVyOiA2O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbiAgLmNyZi1mdWxsLWJhbm5lciB7XG4gICAgb3JkZXI6IDU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBmb290ZXIge1xuICAgIG9yZGVyOiA3O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFBO0FBSUE7RUFBa0IsU0FBQTtFQUFXLGdDQUFBO0VBQXFDLGdCQUFBO0FBQ2xFOztBQUNBO0VBQXVDLG1CQUFBO0FB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QUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLHVCQUFBO0lBQ0Esb0JBQUE7RUE2ZE47RUExZEU7SUFBNEQsV0FBQTtFQTZkOUQ7RUE1ZEU7SUFBNkQsV0FBQTtJQUFhLFdBQUE7SUFBYSxXQUFBO0lBQWEsaUJBQUE7SUFBbUIsMEJBQUE7SUFBNEIsa0JBQUE7SUFBb0IsUUFBQTtJQUFVLFFBQUE7RUFzZW5MO0VBcGVFO0lBQW9ELGVBQUE7RUF1ZXREO0VBdGVFOzs7O0lBR3dELGFBQUE7RUF5ZTFEO0VBdmVFO0lBQWtELGVBQUE7RUEwZXBEO0VBemVFO0lBQWlDLGNBQUE7SUFBZ0Isa0JBQUE7SUFBb0IsTUFBQTtJQUFRLFFBQUE7RUErZS9FO0VBOWVFO0lBQW9DLGFBQUE7RUFpZnRDO0VBL2VFO0lBQTRCLFFBQUE7SUFBVSxvQkFBQTtFQW1meEM7RUFsZkU7SUFBa0MsV0FBQTtJQUFhLGNBQUE7SUFBZ0IsWUFBQTtJQUFjLGlCQUFBO0lBQW1CLG9CQUFBO0VBeWZsRztFQXZmRTtJQUFxQyxrQkFBQTtFQTBmdkM7QUFDRjtBQXpmQTtFQUNJO0lBQW1DLHNCQUFBO0VBNGZyQztBQUNGO0FBMWZBLHNCQUFBO0FBQ0E7RUFDSTtJQUFNLGFBQUE7SUFBZSxzQkFBQTtFQThmdkI7RUE3ZkU7SUFBWSxRQUFBO0lBQVUsbUJBQUE7RUFpZ0J4QjtFQWhnQkU7SUFBa0IsUUFBQTtJQUFVLGFBQUE7RUFvZ0I5QjtFQW5nQkU7SUFBUSxRQUFBO0VBc2dCVjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEhFQURFUiAqL1xcclxcblxcclxcbiRsaWdodEdyYXk6ICNhMGEwYTA7XFxyXFxuXFxyXFxuLmhlYWRlci1uYXYtLW5hdiB7Ym9yZGVyOiAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0R3JheTsgbWFyZ2luLWJvdHRvbTogMDt9XFxyXFxuXFxyXFxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tbWFpbiB1bCB7bWFyZ2luOiAxMHB4IDAgMTBweDt9XFxyXFxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tbWFpbiB1bCBsaS5uYXYtaXRlbSB7Zm9udC1zaXplOiAxNHB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogMC4ycHg7IHBhZGRpbmctYm90dG9tOiAxMHB4O31cXHJcXG4uaGVhZGVyLW5hdi0tbmF2IC5oZWFkZXItbmF2LS1tYWluIHVsIGxpLm5hdi1pdGVtOmFmdGVyIHtjb250ZW50OiBcXFwiXFxcIjsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMTVweDt9XFxyXFxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tbWFpbiB1bCBsaS5uYXYtaXRlbTpsYXN0LWNoaWxkOmFmdGVyIHt3aWR0aDogMDt9XFxyXFxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tbWFpbiB1bCBsaS5uYXYtaXRlbSBhIHtwYWRkaW5nOiAwO31cXHJcXG5cXHJcXG4uaGVhZGVyLW5hdi0tbmF2IC5oZWFkZXItbmF2LS1tYWluIC5mb3JtLWlubGluZSBpbnB1dC5mb3JtLWNvbnRyb2wge3dpZHRoOiAzMzBweDsgaGVpZ2h0OiAzMHB4OyBtYXJnaW46IDA7IGJveC1zaGFkb3c6IG5vbmU7fVxcclxcbi5oZWFkZXItbmF2LS1uYXYgLmhlYWRlci1uYXYtLW1haW4gLmZvcm0taW5saW5lIC5idG4tZGVmYXVsdCB7YmFja2dyb3VuZDogJGxpZ2h0R3JheTsgcG9zaXRpb246IHJlbGF0aXZlOyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDA7IGZvbnQtd2VpZ2h0OiAzMDA7IHdpZHRoOiAxMDBweDsgaGVpZ2h0OiAzMHB4OyBtaW4td2lkdGg6IGF1dG87IHRvcDogMDsgbGVmdDogLTNweDt9XFxyXFxuXFxyXFxuLmhlYWRlci1uYXYtLW5hdiAubmF2YmFyLWJyYW5kIHtwYWRkaW5nOiAwOyB3aWR0aDogMTAwJTt9XFxyXFxuLmhlYWRlci1uYXYtLW5hdiAubmF2YmFyLWJyYW5kIGEge2Rpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTcwcHg7fVxcclxcblxcclxcbi5oZWFkZXItbmF2LS1uYXYgLm5hdmJhci1jb2xsYXBzZSB7cGFkZGluZy1yaWdodDogMDt9XFxyXFxuXFxyXFxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tdXRpbGl0aWVzIHttYXJnaW4tYm90dG9tOiAxNXB4O31cXHJcXG4uaGVhZGVyLW5hdi0tbmF2IC5oZWFkZXItbmF2LS11dGlsaXRpZXMgLmFjY291bnQge3RleHQtYWxpZ246IGxlZnQ7IGZvbnQtc2l6ZTogMTRweDt9XFxyXFxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tdXRpbGl0aWVzIC5hY2NvdW50IGEge2ZvbnQtc2l6ZTogMTRweDt9XFxyXFxuLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tdXRpbGl0aWVzIC5pbWFnZSB7d2lkdGg6IDYwcHg7IGhlaWdodDogNjBweDsgbWFyZ2luLXJpZ2h0OiAxNXB4O31cXHJcXG4uaGVhZGVyLW5hdi0tbmF2IC5oZWFkZXItbmF2LS11dGlsaXRpZXMgLmltYWdlIGltZyB7Ym9yZGVyLXJhZGl1czogMTAwcHg7fVxcclxcblxcclxcbi5oZWFkZXItbmF2LS1zZWFyY2gge2JhY2tncm91bmQ6ICNhMGEwYTA7IHBhZGRpbmc6IDVweCAyMHB4O31cXHJcXG4uaGVhZGVyLW5hdi0tc2VhcmNoIGlucHV0LmZvcm0tY29udHJvbCB7bWFyZ2luLWJvdHRvbTogMDsgd2lkdGg6IDEwMCU7fVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLmhlYWRlci1uYXYtLW5hdiAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlIHtmbGV4OiAxOyBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7fVxcclxcbiAgICAuaGVhZGVyLW5hdi0tbmF2IC5uYXZiYXItYnJhbmQge3BhZGRpbmc6IDA7IHdpZHRoOiBhdXRvOyBtYXJnaW4tcmlnaHQ6IDA7fVxcclxcbiAgICAuaGVhZGVyLW5hdi0tbmF2IC5uYXZiYXItYnJhbmQgYSB7ZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDt9XFxyXFxuICAgIC5oZWFkZXItbmF2LS1uYXYgLmhlYWRlci1uYXYtLW1haW4gdWwge21hcmdpbi1ib3R0b206IDA7fVxcclxcbiAgICAuaGVhZGVyLW5hdi0tbmF2IC5oZWFkZXItbmF2LS1tYWluIHVsIGxpLm5hdi1pdGVtIHtmb250LXNpemU6IDEzcHg7IHBhZGRpbmctYm90dG9tOiAwO31cXHJcXG4gICAgLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tbWFpbiB1bCBsaS5uYXYtaXRlbTphZnRlciB7d2lkdGg6IDhweDt9XFxyXFxuICAgIC5oZWFkZXItbmF2LS1uYXYgLmhlYWRlci1uYXYtLXV0aWxpdGllcyB7bWFyZ2luLWxlZnQ6IGF1dG87IG1hcmdpbi1ib3R0b206IDA7fVxcclxcbiAgICAuaGVhZGVyLW5hdi0tbmF2IC5oZWFkZXItbmF2LS11dGlsaXRpZXMgLmFjY291bnQge2ZvbnQtc2l6ZTogMTRweDsgdGV4dC1hbGlnbjogcmlnaHQ7fVxcclxcbiAgICAuaGVhZGVyLW5hdi0tbmF2IC5oZWFkZXItbmF2LS11dGlsaXRpZXMgLmltYWdlIHttYXJnaW4tbGVmdDogMTVweDt9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXHJcXG4gICAgLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tbWFpbiB1bCBsaS5uYXYtaXRlbSB7Zm9udC1zaXplOiAxNnB4O31cXHJcXG4gICAgLmhlYWRlci1uYXYtLW5hdiAubmF2YmFyLWJyYW5kIHttYXJnaW4tcmlnaHQ6IDQwcHg7fVxcclxcbiAgICAuaGVhZGVyLW5hdi0tbmF2IC5uYXZiYXItYnJhbmQgYSB7ZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxNzBweDt9XFxyXFxuICAgIC5oZWFkZXItbmF2LS1uYXYgLmhlYWRlci1uYXYtLW1haW4gdWwgbGkubmF2LWl0ZW06YWZ0ZXIge3dpZHRoOiAxNXB4O31cXHJcXG4gICAgLmhlYWRlci1uYXYtLW5hdiAuaGVhZGVyLW5hdi0tdXRpbGl0aWVzIC5hY2NvdW50IHtmb250LXNpemU6IDE4cHg7fVxcclxcbn1cXHJcXG5cXHJcXG4vKiBIRVJPICovXFxyXFxuLmNyZi1oZXJvIHtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vd3d3LnBsdXJhbHNpZ2h0LmNvbS9jb250ZW50L2RhbS9wbHVyYWxzaWdodDIvdGVhY2gvYXV0aG9yLXRvb2xzL2NhcnZlZC1yb2NrLWZpdG5lc3MvaGVyb19ia2dkX3YxLmpwZycpOyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBoZWlnaHQ6IDQwMHB4OyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxcclxcbi5jcmYtaGVybyBoMSwgLmNyZi1oZXJvIGgyIHtmb250LXNpemU6IDYzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbjogMDsgZmxleDogaW5oZXJpdDsgbGluZS1oZWlnaHQ6IDAuOTt9XFxyXFxuLmNyZi1oZXJvIGgxIHtsZWZ0OiAtMzBweDt9XFxyXFxuLmNyZi1oZXJvIGgyIHtjb2xvcjogI2ZhYTU0MTt9XFxyXFxuLmNyZi1oZXJvIHAubGVhZCB7bGV0dGVyLXNwYWNpbmc6IDJweDsgZm9udC13ZWlnaHQ6IDcwMDt9XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIC5jcmYtaGVybyAuY29udGFpbmVyIHttYXgtd2lkdGg6IDExNzBweDt9XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLmNyZi1oZXJvIHttYXJnaW4tYm90dG9tOiAwOyBwYWRkaW5nLWJvdHRvbTogMDsgYmFja2dyb3VuZC1wb3NpdGlvbjogNzAlIDA7IGJhY2tncm91bmQtc2l6ZTogMTgwJTt9XFxyXFxuICAgIC5jcmYtaGVybyAuY29udGFpbmVyIHttYXJnaW4tdG9wOiBhdXRvOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFhNTQxOyBwYWRkaW5nOiAxNXB4O31cXHJcXG4gICAgLmNyZi1oZXJvIGgxIHtsZWZ0OiAwO31cXHJcXG4gICAgLmNyZi1oZXJvIGgyICwgIC5jcmYtaGVybyBwLmxlYWQge2NvbG9yOiB3aGl0ZTt9XFxyXFxuICAgIC5jcmYtaGVybyBwLmxlYWQge21hcmdpbi10b3A6IDVweDsgbWFyZ2luLWJvdHRvbTogMDt9XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgLmNyZi1oZXJvIGgxLCAuY3JmLWhlcm8gaDIge2ZvbnQtc2l6ZTogNTVweDt9XFxyXFxufVxcclxcblxcclxcbi8qIENJR0FSIEJBTk5FUiAqL1xcclxcbi5jcmYtY2lnYXItYmFubmVyIHttYXJnaW4tdG9wOiA1NXB4OyBtYXJnaW4tYm90dG9tOiA1NXB4O31cXHJcXG4uY3JmLWNpZ2FyLWJhbm5lci0tY29udGFpbmVyIHt3aWR0aDogMTAwJTsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhMGEwYTA7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTBhMGEwOyBwYWRkaW5nOiAyNXB4IDA7IG1hcmdpbi1sZWZ0OiAxNXB4OyBtYXJnaW4tcmlnaHQ6IDE1cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgcG9zaXRpb246IHJlbGF0aXZlOyBvdmVyZmxvdzogaGlkZGVuO31cXHJcXG4uY3JmLWNpZ2FyLWJhbm5lci0tY29udGFpbmVyIGltZyB7d2lkdGg6IDI1MHB4O31cXHJcXG4uY3JmLWNpZ2FyLWJhbm5lci0tdGV4dCA+IGRpdiB7Zm9udC1zaXplOiAzMHB4OyBmb250LXdlaWdodDogNzAwOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsaW5lLWhlaWdodDogMTt9XFxyXFxuLmNyZi1jaWdhci1iYW5uZXItLXRleHQgPiBkaXY6bGFzdC1jaGlsZCB7Zm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNDAwOyBtYXJnaW4tdG9wOiA1cHg7fVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgIC5jcmYtY2lnYXItYmFubmVyLS10ZXh0ID4gZGl2IHtmb250LXNpemU6IDI0cHg7fVxcclxcbiAgICAuY3JmLWNpZ2FyLWJhbm5lci0tY29udGFpbmVyIGltZyB7d2lkdGg6IDIyMHB4O31cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAuY3JmLWNpZ2FyLWJhbm5lciB7bWFyZ2luLXRvcDogMDt9XFxyXFxuICAgIC5jcmYtY2lnYXItYmFubmVyLS1jb250YWluZXIge2ZsZXgtd3JhcDogd3JhcDsgbWFyZ2luLWxlZnQ6IDA7IG1hcmdpbi1yaWdodDogMDsgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7fVxcclxcbiAgICAuY3JmLWNpZ2FyLWJhbm5lci0tdGV4dCA+IGRpdjpsYXN0LWNoaWxkIHttYXJnaW4tdG9wOiAxNXB4O31cXHJcXG4gICAgLmNyZi1jaWdhci1iYW5uZXItLWNvbnRhaW5lciBpbWc6bnRoLW9mLXR5cGUoMSkge2xlZnQ6MDsgdG9wOiAwO31cXHJcXG4gICAgLmNyZi1jaWdhci1iYW5uZXItLWNvbnRhaW5lciBpbWc6bnRoLW9mLXR5cGUoMikge3RvcDogMDsgcmlnaHQ6ICAwO31cXHJcXG4gICAgLmNyZi1jaWdhci1iYW5uZXItLWNvbnRhaW5lciBpbWcge3dpZHRoOiAzNTBweDsgcG9zaXRpb246IGFic29sdXRlOyBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7fVxcclxcbiAgICAuY3JmLWNpZ2FyLWJhbm5lci0tdGV4dCB7ZmxleDogMCAwIDEwMCU7IG1hcmdpbi10b3A6IDI1MHB4O31cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xcclxcbiAgICAuY3JmLWNpZ2FyLWJhbm5lci0tY29udGFpbmVyIGltZzpudGgtb2YtdHlwZSgxKSB7bGVmdDogLTE1JTt9XFxyXFxuICAgIC5jcmYtY2lnYXItYmFubmVyLS1jb250YWluZXIgaW1nOm50aC1vZi10eXBlKDIpIHtyaWdodDogIC0xNSU7fVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgIC5vcmRlci1zbS0wIHtvcmRlcjogMDt9XFxyXFxuICAgIC5vcmRlci1zbS0xIHtvcmRlcjogMTt9XFxyXFxuICAgIC5vcmRlci1zbS0yIHtvcmRlcjogMjt9XFxyXFxuICAgIC5jcmYtY2lnYXItYmFubmVyLS1jb250YWluZXIgaW1nIHt3aWR0aDogMjcwcHg7fVxcclxcbiAgICAuY3JmLWNpZ2FyLWJhbm5lci0tdGV4dCB7bWFyZ2luLXRvcDogMTgwcHg7fVxcclxcbn1cXHJcXG5cXHJcXG4vKiBTVE9SSUVTICovXFxyXFxuLmNyZi1zdG9yeSAgYSA+IGRpdiB7Y29sb3I6ICMzNjQxNDc7fVxcclxcbi5jcmYtc3RvcnkgLmNyZi1zdG9yeS0tdGV4dCB7cGFkZGluZzogMzBweCAwOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxcclxcbi5jcmYtc3RvcnkgLmNyZi1zdG9yeS0tdGV4dCA+IGRpdiB7Zm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogMjAwOyBjb2xvcjogI2ZhYTU0MTt9XFxyXFxuLmNyZi1zdG9yeSAuY3JmLXN0b3J5LS10ZXh0IGgzIHtmb250LXNpemU6IDMwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGxpbmUtaGVpZ2h0OiAxOyBtYXJnaW46IDA7fVxcclxcbi5jcmYtc3RvcnkgLmNyZi1zdG9yeS0taW1hZ2UgaW1nIHt3aWR0aDogMTAwJTt9XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcclxcbiAgICAuY3JmLXN0b3J5ICAuY3JmLXN0b3J5LS1pbWFnZSB7aGVpZ2h0OiAxODBweDsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9zaXRpb246IHJlbGF0aXZlO31cXHJcXG4gICAgLmNyZi1zdG9yeSAuY3JmLXN0b3J5LS1pbWFnZSBpbWcge3Bvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTt9XFxyXFxufVxcclxcblxcclxcbi8qIEZVTEwgQkFOTkVSICovXFxyXFxuLmNyZi1mdWxsLWJhbm5lciB7bWFyZ2luLXRvcDogNTBweDsgbWFyZ2luLWJvdHRvbTogNTBweDt9XFxyXFxuLmNyZi1mdWxsLWJhbm5lciAucm93IHtwb3NpdGlvbjogcmVsYXRpdmU7fVxcclxcbi5jcmYtZnVsbC1iYW5uZXIgLnJvdzpiZWZvcmUge2NvbnRlbnQ6IFxcXCJcXFwiOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyBkaXNwbGF5OiBibG9jazsgdG9wOiAzMHB4OyBib3R0b206IDMwcHg7IGxlZnQ6IDUwcHg7IHJpZ2h0OiA1MHB4OyB6LWluZGV4OiAxO31cXHJcXG4uY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLWltYWdlIHtcXHJcXG4gICAgZmxleDogMCAwIDU4LjMzMzMzMyU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly93d3cucGx1cmFsc2lnaHQuY29tL2NvbnRlbnQvZGFtL3BsdXJhbHNpZ2h0Mi90ZWFjaC9hdXRob3ItdG9vbHMvY2FydmVkLXJvY2stZml0bmVzcy9pbWctdmlzdGFzLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcXHJcXG59XFxyXFxuLmNyZi1mdWxsLWJhbm5lciAuY3JmLWZ1bGwtYmFubmVyLS10ZXh0IHtmbGV4OiAwIDAgNDEuNjY2NjY3JTsgYmFja2dyb3VuZDogIzM2NDE0NzsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgcGFkZGluZzogMzBweDsgcG9zaXRpb246IHJlbGF0aXZlO31cXHJcXG4uY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLXRleHQgaDQge2ZvbnQtc2l6ZTogNDBweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICM2MzdmOTQ7IGZvbnQtc3R5bGU6IGl0YWxpYzsgbGluZS1oZWlnaHQ6IDE7IG1hcmdpbjogMDt9XFxyXFxuLmNyZi1mdWxsLWJhbm5lciAuY3JmLWZ1bGwtYmFubmVyLS10ZXh0IGg0OmFmdGVyIHtjb250ZW50OiBcXFwiXFxcIjsgd2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDFweDsgYmFja2dyb3VuZDogI2ZhYTU0MTsgbWFyZ2luOiAyMHB4IGF1dG87IGRpc3BsYXk6IGJsb2NrO31cXHJcXG4uY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLXRleHQgID4gZGl2IHtjb2xvcjogd2hpdGU7fVxcclxcbi5jcmYtZnVsbC1iYW5uZXIgLmNyZi1mdWxsLWJhbm5lci0tdGV4dCAgPiBkaXY6bnRoLW9mLXR5cGUoMSkge2ZvbnQtc2l6ZTogNjBweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGluZS1oZWlnaHQ6IDE7fVxcclxcbi5jcmYtZnVsbC1iYW5uZXIgLmNyZi1mdWxsLWJhbm5lci0tdGV4dCAgPiBkaXY6bnRoLW9mLXR5cGUoMikge2ZvbnQtc2l6ZTogMjVweDsgZm9udC13ZWlnaHQ6IDIwMDsgbGV0dGVyLXNwYWNpbmc6IDNweDt9XFxyXFxuLmNyZi1mdWxsLWJhbm5lciAuY3JmLWZ1bGwtYmFubmVyLS10ZXh0IC5idG4uYnRuLWRlZmF1bHQge3RleHQtdHJhbnNmb3JtOiBub25lOyBtYXJnaW4tdG9wOiA1MHB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMXB4OyB6LWluZGV4OiAxO31cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxyXFxuICAgIC5jcmYtZnVsbC1iYW5uZXIgLmNvbCB7cG9zaXRpb246IHJlbGF0aXZlOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO31cXHJcXG4gICAgLmNyZi1mdWxsLWJhbm5lciAuY3JmLWZ1bGwtYmFubmVyLS10ZXh0ICB7cGFkZGluZzogMzBweCAzMHB4IDUwcHg7fVxcclxcbiAgICAuY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLXRleHQgaDQge2Rpc3BsYXk6IG5vbmU7fVxcclxcbiAgICAuY3JmLWZ1bGwtYmFubmVyIC5jcmYtZnVsbC1iYW5uZXItLXRleHQgLmJ0bi5idG4tZGVmYXVsdCB7bWFyZ2luLXRvcDogMjBweDt9XFxyXFxuICAgIC5jcmYtZnVsbC1iYW5uZXIgLmNyZi1mdWxsLWJhbm5lci0taW1hZ2Uge21pbi1oZWlnaHQ6IDMwMHB4O31cXHJcXG4gICAgLmNyZi1mdWxsLWJhbm5lciAuY3JmLWZ1bGwtYmFubmVyLS1pbWFnZSBoNCB7Zm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzYzN2Y5NDsgZm9udC1zdHlsZTogaXRhbGljOyBsaW5lLWhlaWdodDogMTsgbWFyZ2luOiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHRvcDogNTBweDsgcG9zaXRpb246IHJlbGF0aXZlOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO31cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAuY3JmLWZ1bGwtYmFubmVyIC5jb2wge3BhZGRpbmctbGVmdDogMDsgcGFkZGluZy1yaWdodDogMDt9XFxyXFxuICAgIC5jcmYtZnVsbC1iYW5uZXIgLnJvdzpiZWZvcmUge2xlZnQ6IDMwcHg7IHJpZ2h0OiAzMHB4O31cXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuZm9vdGVyIHtiYWNrZ3JvdW5kOiBibGFjazsgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAwOyBtaW4taGVpZ2h0OiAzMzBweDt9XFxyXFxuZm9vdGVyOmFmdGVyIHtjb250ZW50OiBcXFwiXFxcIjsgYmFja2dyb3VuZDogI2EwYTBhMDsgd2lkdGg6IDc1JTsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IHotaW5kZXg6IC0xO31cXHJcXG5cXHJcXG5mb290ZXIgLmNyZi1mb290ZXItLWNhdGVnb3J5IHtmbGV4OiAwIDAgNzUlOyBwYWRkaW5nOiA0MHB4IDE1cHg7fVxcclxcbmZvb3RlciAuY3JmLWZvb3Rlci0taGVhZGVyIHt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDE2cHg7IG1hcmdpbi1ib3R0b206IDE1cHg7fVxcclxcblxcclxcbmZvb3RlciAuY3JmLWZvb3Rlci0tbGlua3MgYSB7Y29sb3I6IHdoaXRlOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBmb250LXNpemU6IDEycHg7IGRpc3BsYXk6IGJsb2NrOyBwYWRkaW5nOiAwIDAgNHB4O31cXHJcXG5mb290ZXIgLmNyZi1mb290ZXItLWxpbmtzIGE6aG92ZXIge3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO31cXHJcXG5mb290ZXIgLmNyZi1mb290ZXItLWxpbmtzLmFjdGl2ZSAuY3JmLWZvb3Rlci0taGVhZGVyIHttYXJnaW4tYm90dG9tOiAxNXB4O31cXHJcXG5mb290ZXIgLmNyZi1mb290ZXItLWxpbmtzLmFjdGl2ZSB1bCB7ZGlzcGxheTogYmxvY2s7fVxcclxcblxcclxcbmZvb3RlciAuY3JmLWZvb3Rlci0tbmV3c2xldHRlciAuY3JmLWZvb3Rlci0taGVhZGVyIHtmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA0MDA7IG1hcmdpbi1ib3R0b206IDVweDt9XFxyXFxuZm9vdGVyIC5jcmYtZm9vdGVyLS1uZXdzbGV0dGVyIC5jcmYtZm9vdGVyLS1zdWJoZWFkZXIge2ZvbnQtc3R5bGU6IGl0YWxpYzsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNDAwOyBtYXJnaW4tYm90dG9tOiAxNXB4O31cXHJcXG5mb290ZXIgLmNyZi1mb290ZXItLW5ld3NsZXR0ZXIgaW5wdXQge2JvcmRlcjogMXB4IHNvbGlkICMzNjQxNDc7IHdpZHRoOiAyMDBweDsgbWFyZ2luLWJvdHRvbTogMTBweDt9XFxyXFxuZm9vdGVyIC5jcmYtZm9vdGVyLS1uZXdzbGV0dGVyIGJ1dHRvbiB7d2lkdGg6IDE1MHB4OyBtaW4td2lkdGg6IGF1dG87IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAxcHg7fVxcclxcblxcclxcbmZvb3RlciAuY3JmLWZvb3Rlci1tLS1zb2NpYWwge29yZGVyOiA0OyBwb3NpdGlvbjogcmVsYXRpdmU7fVxcclxcbmZvb3RlciAuY3JmLWZvb3Rlci0tc29jaWFsIHVsIGxpLCBmb290ZXIgLmNyZi1mb290ZXItbS0tc29jaWFsIHVsIGxpIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxcclxcbmZvb3RlciAuY3JmLWZvb3Rlci0tc29jaWFsIHVsIGxpIGEsIGZvb3RlciAuY3JmLWZvb3Rlci1tLS1zb2NpYWwgdWwgbGkgYSB7ZGlzcGxheTogYmxvY2s7IHdpZHRoOiAyM3B4OyBoZWlnaHQ6IDIzcHg7IGJhY2tncm91bmQtc2l6ZTogMjNweCAyM3B4OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7fVxcclxcbmZvb3RlciAuY3JmLWZvb3Rlci0tc29jaWFsIC50d2l0dGVyLCBmb290ZXIgLmNyZi1mb290ZXItbS0tc29jaWFsIC50d2l0dGVyIHtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vd3d3LnBsdXJhbHNpZ2h0LmNvbS9jb250ZW50L2RhbS9wbHVyYWxzaWdodDIvdGVhY2gvYXV0aG9yLXRvb2xzL2NhcnZlZC1yb2NrLWZpdG5lc3Mvc29jaWFsX2ljb25zL1R3aXR0ZXJfSWNvbi5zdmcnKTt9XFxyXFxuZm9vdGVyIC5jcmYtZm9vdGVyLS1zb2NpYWwgLmZhY2Vib29rLCBmb290ZXIgLmNyZi1mb290ZXItbS0tc29jaWFsIC5mYWNlYm9vayB7YmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3d3dy5wbHVyYWxzaWdodC5jb20vY29udGVudC9kYW0vcGx1cmFsc2lnaHQyL3RlYWNoL2F1dGhvci10b29scy9jYXJ2ZWQtcm9jay1maXRuZXNzL3NvY2lhbF9pY29ucy9GYWNlYm9va19JY29uLnN2ZycpO31cXHJcXG5mb290ZXIgLmNyZi1mb290ZXItLXNvY2lhbCAuaW5zdGFncmFtLCBmb290ZXIgLmNyZi1mb290ZXItbS0tc29jaWFsIC5pbnN0YWdyYW0ge2JhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly93d3cucGx1cmFsc2lnaHQuY29tL2NvbnRlbnQvZGFtL3BsdXJhbHNpZ2h0Mi90ZWFjaC9hdXRob3ItdG9vbHMvY2FydmVkLXJvY2stZml0bmVzcy9zb2NpYWxfaWNvbnMvSW5zdGFncmFtX0ljb24uc3ZnJyk7fVxcclxcbmZvb3RlciAuY3JmLWZvb3Rlci0tc29jaWFsIC5waW50ZXJlc3QsIGZvb3RlciAuY3JmLWZvb3Rlci1tLS1zb2NpYWwgLnBpbnRlcmVzdCB7YmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3d3dy5wbHVyYWxzaWdodC5jb20vY29udGVudC9kYW0vcGx1cmFsc2lnaHQyL3RlYWNoL2F1dGhvci10b29scy9jYXJ2ZWQtcm9jay1maXRuZXNzL3NvY2lhbF9pY29ucy9QaW50ZXJlc3RfSWNvbi5zdmcnKTt9XFxyXFxuZm9vdGVyIC5jcmYtZm9vdGVyLS1zb2NpYWwgLmdvb2dsZXBsdXMsIGZvb3RlciAuY3JmLWZvb3Rlci1tLS1zb2NpYWwgLmdvb2dsZXBsdXMge2JhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly93d3cucGx1cmFsc2lnaHQuY29tL2NvbnRlbnQvZGFtL3BsdXJhbHNpZ2h0Mi90ZWFjaC9hdXRob3ItdG9vbHMvY2FydmVkLXJvY2stZml0bmVzcy9zb2NpYWxfaWNvbnMvR29vZ2xlUGx1c19JY29uLnN2ZycpO31cXHJcXG5cXHJcXG5mb290ZXIgLmNyZi1mb290ZXItLWxvZ28ge2NvbG9yOiAjZTVlNWU1OyBmb250LXNpemU6IDE2cHg7IGZsZXg6IDAgMCAyNSU7fVxcclxcbmZvb3RlciAuY3JmLWZvb3Rlci0tbG9nbyBpbWcge21heC13aWR0aDogMjMwcHg7fVxcclxcbmZvb3RlciAuY3JmLWZvb3Rlci0tbG9nbyAuY29udGFpbmVyIHtwYWRkaW5nOiA0MHB4IDA7fVxcclxcbmZvb3RlciAuY3JmLWZvb3Rlci0tbG9nbyAuY29udGFpbmVyID4gZGl2IHtwYWRkaW5nOiAwIDMwcHg7fVxcclxcbmZvb3RlciAuY3JmLWZvb3Rlci0tbG9nbyAuY29udGFpbmVyID4gZGl2OmJlZm9yZSB7Y29udGVudDogXFxcIlxcXCI7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxcHg7IG1hcmdpbjogMzBweCAwOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2YwNWEyOCAwLCNlODBhODkgMTAwJSk7fVxcclxcbmZvb3RlciAuY3JmLWZvb3Rlci0tY29weXJpZ2h0IHt0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMTJweDsgZmxleDogMCAwIDc1JTsgcGFkZGluZzogMTBweCAwO31cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAgIGZvb3RlciB7ZmxleC13cmFwOiB3cmFwO31cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XFxyXFxuICAgIGZvb3RlciB7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxcclxcbiAgICBmb290ZXI6YWZ0ZXIge3dpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XFxyXFxuXFxyXFxuICAgIGZvb3RlciAuY3JmLWZvb3Rlci0tY2F0ZWdvcnkge2JhY2tncm91bmQ6ICNhMGEwYTA7IHBhZGRpbmctYm90dG9tOiAwO31cXHJcXG4gICAgZm9vdGVyIC5jcmYtZm9vdGVyLS1sb2dvIHtiYWNrZ3JvdW5kOiBibGFjazsgbWFyZ2luOiA1MHB4IDIwcHg7fVxcclxcblxcclxcbiAgICBmb290ZXIgLmNyZi1mb290ZXItLWxpbmtzOmFmdGVyIHtjb250ZW50OiBcXFwiXFxcIjsgZGlzcGxheTogYmxvY2s7IGhlaWdodDogMnB4OyBiYWNrZ3JvdW5kOiB3aGl0ZTsgbWFyZ2luOiAxMHB4IC0xNXB4IDEwcHg7fVxcclxcbiAgICBmb290ZXIgLmNyZi1mb290ZXItLWxpbmtzOm50aC1vZi10eXBlKDEpIHtvcmRlcjogMTt9XFxyXFxuICAgIGZvb3RlciAuY3JmLWZvb3Rlci0tbGlua3M6bnRoLW9mLXR5cGUoMikge29yZGVyOiAyO31cXHJcXG4gICAgZm9vdGVyIC5jcmYtZm9vdGVyLS1saW5rczpudGgtb2YtdHlwZSgzKSB7b3JkZXI6IDM7fVxcclxcbiAgICBmb290ZXIgLmNyZi1mb290ZXItLWxpbmtzIHVsIHtkaXNwbGF5OiBub25lO31cXHJcXG5cXHJcXG4gICAgZm9vdGVyIC5jcmYtZm9vdGVyLS1oZWFkZXIge21hcmdpbi1ib3R0b206IDEwcHg7IGN1cnNvcjogcG9pbnRlcjsgcG9zaXRpb246IHJlbGF0aXZlO31cXHJcXG4gICAgZm9vdGVyIC5jcmYtZm9vdGVyLS1oZWFkZXI6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogXFxcIitcXFwiO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGZvb3RlciAuY3JmLWZvb3Rlci0tbGlua3MuYWN0aXZlIC5jcmYtZm9vdGVyLS1oZWFkZXI6YWZ0ZXIge2NvbnRlbnQ6IFxcXCJcXFwiO31cXHJcXG4gICAgZm9vdGVyIC5jcmYtZm9vdGVyLS1saW5rcy5hY3RpdmUgLmNyZi1mb290ZXItLWhlYWRlcjpiZWZvcmUge2NvbnRlbnQ6IFxcXCJcXFwiOyB3aWR0aDogMTVweDsgaGVpZ2h0OiAycHg7IGJhY2tncm91bmQ6IHdoaXRlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDUwJTsgcmlnaHQ6IDA7fVxcclxcblxcclxcbiAgICBmb290ZXIgLmNyZi1mb290ZXItLW5ld3NsZXR0ZXIgLmNyZi1mb290ZXItLWhlYWRlciB7Y3Vyc29yOiBkZWZhdWx0O31cXHJcXG4gICAgZm9vdGVyIC5jcmYtZm9vdGVyLS1uZXdzbGV0dGVyIC5jcmYtZm9vdGVyLS1oZWFkZXI6YmVmb3JlLFxcclxcbiAgICBmb290ZXIgLmNyZi1mb290ZXItLW5ld3NsZXR0ZXIgLmNyZi1mb290ZXItLWhlYWRlcjphZnRlcixcXHJcXG4gICAgZm9vdGVyIC5jcmYtZm9vdGVyLW0tLXNvY2lhbCAuY3JmLWZvb3Rlci0taGVhZGVyOmJlZm9yZSxcXHJcXG4gICAgZm9vdGVyIC5jcmYtZm9vdGVyLW0tLXNvY2lhbCAuY3JmLWZvb3Rlci0taGVhZGVyOmFmdGVyIHtkaXNwbGF5OiBub25lO31cXHJcXG5cXHJcXG4gICAgZm9vdGVyIC5jcmYtZm9vdGVyLW0tLXNvY2lhbCAuY3JmLWZvb3Rlci0taGVhZGVyIHtjdXJzb3I6IGRlZmF1bHQ7fVxcclxcbiAgICBmb290ZXIgLmNyZi1mb290ZXItbS0tc29jaWFsIHVsIHtkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IHJpZ2h0OiAwO31cXHJcXG4gICAgZm9vdGVyIC5jcmYtZm9vdGVyLW0tLXNvY2lhbDphZnRlciB7ZGlzcGxheTogbm9uZTt9XFxyXFxuXFxyXFxuICAgIGZvb3RlciAuY3JmLWZvb3Rlci0tc29jaWFsIHtvcmRlcjogMDsgcGFkZGluZy1ib3R0b206IDEwcHg7fVxcclxcbiAgICBmb290ZXIgLmNyZi1mb290ZXItLXNvY2lhbDphZnRlciB7Y29udGVudDogXFxcIlxcXCI7IGRpc3BsYXk6IGJsb2NrOyBoZWlnaHQ6IDE1cHg7IGJhY2tncm91bmQ6IHdoaXRlOyBtYXJnaW46IDQwcHggLTE1cHggMDt9XFxyXFxuXFxyXFxuICAgIGZvb3RlciAuY3JmLWZvb3Rlci0tbG9nbyAuY29udGFpbmVyIHtwYWRkaW5nOiA0MHB4IDEwcHg7fVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIGZvb3RlciAuY3JmLWZvb3Rlci0tY2F0ZWdvcnkgLnJvdyB7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjt9XFxyXFxufVxcclxcblxcclxcbi8qIE1PQklMRSBWSUVXIE9SREVSICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAuY3JmIHtkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO31cXHJcXG4gICAgLmNyZi1zdG9yeSB7b3JkZXI6IDY7IG1hcmdpbi1ib3R0b206IDUwcHg7fVxcclxcbiAgICAuY3JmLWZ1bGwtYmFubmVyIHtvcmRlcjogNTsgbWFyZ2luLXRvcDogMDt9XFxyXFxuICAgIGZvb3RlciB7b3JkZXI6IDc7fVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgbG9nOiAobWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB1dGlsIGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBcIi4vY3NzL21haW4uc2Nzc1wiO1xuY29uc3QgY2FydCA9IFtdO1xuZnVuY3Rpb24gYWRkVG9DYXJ0KGl0ZW0pIHtcbiAgICBjYXJ0LnB1c2goaXRlbSk7XG4gICAgdXRpbC5sb2coXCJhZGRlZCBpdGVtIDogXCIgKyBpdGVtKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUZyb21DYXJ0KGlkeCkge1xuICAgIGNhcnQuc3BsaWNlKGlkeCwgMSk7IC8vc2xpY2UgbWV0aG9kIGNyZWF0ZXMgYSBjb3B5IG9mIHRoZSBjYXJ0IGlkeCA9PiBzdGFydCAxID0+IGVuZFxuICAgIHV0aWwubG9nKFwicmVtb3ZlZDogXCIgKyBpZHgpO1xufVxuYWRkVG9DYXJ0KFwid2F0ZXJwcm9vZiBib290c1wiKTtcbiIsImltcG9ydCB1dGlsIGZyb20gXCIuL3V0aWxcIjtcbi8vIGltcG9ydCBcIi4vY3NzL21haW4uY3NzXCI7XG5mdW5jdGlvbiBub3RpZmljYXRpb25SZWdpc3RlcihlbWFpbCkge1xuICAgIHV0aWwubG9nKFwicmVnaXN0ZXJpbmcgXCIgKyBlbWFpbCk7XG59XG5ub3RpZmljYXRpb25SZWdpc3RlcihcInRlc3RAdGVzdC5jb21cIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=