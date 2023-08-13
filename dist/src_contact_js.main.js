"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["src_contact_js"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _components_chef_contact_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/chef-contact.jpg */ "./src/components/chef-contact.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function createContact() {
    const contactContainer = document.createElement('div');
    const personDetails = document.createElement('div');
    const contactUs = document.createElement('h1');

    contactContainer.classList.add('contact-container');
    personDetails.classList.add('person-container');

    const myImg = new Image();
    myImg.src = _components_chef_contact_jpg__WEBPACK_IMPORTED_MODULE_0__;
    personDetails.appendChild(myImg);
    contactUs.textContent = "Contact Us";

    for(let i = 0; i < 3; i++) {
        const contactItem = document.createElement('p');
        contactItem.setAttribute('contact-index',i);
        const getId = contactItem.getAttribute('contact-index');
        if(getId === '0') {
            contactItem.textContent = "Chef/Owner: Luca Bianchi";
            contactItem.classList.add('person');
            personDetails.appendChild(contactItem);
        };
        if(getId === '1') {
            contactItem.textContent = "Number: (555) 123-4567";
            contactItem.classList.add('number');
            personDetails.appendChild(contactItem);
        };
        if(getId === '2') {
            contactItem.textContent = "Email: luca.bianchi@example.com";
            contactItem.classList.add('email');
            personDetails.appendChild(contactItem);
        };
    }

    contactContainer.appendChild(contactUs);
    contactContainer.appendChild(personDetails);
    
    return contactContainer;
}

/***/ }),

/***/ "./src/components/chef-contact.jpg":
/*!*****************************************!*\
  !*** ./src/components/chef-contact.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "873e062b7229653ead56.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbnRhY3RfanMubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDL0I7O0FBRU47QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix5REFBTztBQUN2QjtBQUNBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoZWZJbWcgZnJvbSAnLi9jb21wb25lbnRzL2NoZWYtY29udGFjdC5qcGcnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBlcnNvbkRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpO1xuICAgIHBlcnNvbkRldGFpbHMuY2xhc3NMaXN0LmFkZCgncGVyc29uLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbXlJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBteUltZy5zcmMgPSBjaGVmSW1nO1xuICAgIHBlcnNvbkRldGFpbHMuYXBwZW5kQ2hpbGQobXlJbWcpO1xuICAgIGNvbnRhY3RVcy50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBjb250YWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29udGFjdEl0ZW0uc2V0QXR0cmlidXRlKCdjb250YWN0LWluZGV4JyxpKTtcbiAgICAgICAgY29uc3QgZ2V0SWQgPSBjb250YWN0SXRlbS5nZXRBdHRyaWJ1dGUoJ2NvbnRhY3QtaW5kZXgnKTtcbiAgICAgICAgaWYoZ2V0SWQgPT09ICcwJykge1xuICAgICAgICAgICAgY29udGFjdEl0ZW0udGV4dENvbnRlbnQgPSBcIkNoZWYvT3duZXI6IEx1Y2EgQmlhbmNoaVwiO1xuICAgICAgICAgICAgY29udGFjdEl0ZW0uY2xhc3NMaXN0LmFkZCgncGVyc29uJyk7XG4gICAgICAgICAgICBwZXJzb25EZXRhaWxzLmFwcGVuZENoaWxkKGNvbnRhY3RJdGVtKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYoZ2V0SWQgPT09ICcxJykge1xuICAgICAgICAgICAgY29udGFjdEl0ZW0udGV4dENvbnRlbnQgPSBcIk51bWJlcjogKDU1NSkgMTIzLTQ1NjdcIjtcbiAgICAgICAgICAgIGNvbnRhY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ251bWJlcicpO1xuICAgICAgICAgICAgcGVyc29uRGV0YWlscy5hcHBlbmRDaGlsZChjb250YWN0SXRlbSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmKGdldElkID09PSAnMicpIHtcbiAgICAgICAgICAgIGNvbnRhY3RJdGVtLnRleHRDb250ZW50ID0gXCJFbWFpbDogbHVjYS5iaWFuY2hpQGV4YW1wbGUuY29tXCI7XG4gICAgICAgICAgICBjb250YWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdlbWFpbCcpO1xuICAgICAgICAgICAgcGVyc29uRGV0YWlscy5hcHBlbmRDaGlsZChjb250YWN0SXRlbSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VXMpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocGVyc29uRGV0YWlscyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRhY3RDb250YWluZXI7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9