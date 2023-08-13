"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["src_menu_js"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _components_capellini_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/capellini.jpg */ "./src/components/capellini.jpg");
/* harmony import */ var _components_carbonara_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/carbonara.jpg */ "./src/components/carbonara.jpg");
/* harmony import */ var _components_penne_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/penne.jpg */ "./src/components/penne.jpg");
/* harmony import */ var _components_ravioli_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ravioli.jpg */ "./src/components/ravioli.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    const capellini = new Image();
    const carbonara = new Image();
    const penne = new Image();
    const ravioli = new Image();

    capellini.src = _components_capellini_jpg__WEBPACK_IMPORTED_MODULE_0__;
    carbonara.src = _components_carbonara_jpg__WEBPACK_IMPORTED_MODULE_1__;
    penne.src = _components_penne_jpg__WEBPACK_IMPORTED_MODULE_2__;
    ravioli.src = _components_ravioli_jpg__WEBPACK_IMPORTED_MODULE_3__;

    for(let i = 0; i < 4; i++) {
        const menuItem = document.createElement('div');
        const menuDescription = document.createElement('p');
        menuItem.classList.add('menu-item');
        menuItem.setAttribute('index',i);
        const getId = menuItem.getAttribute('index');

        if(getId === '0') {
            menuDescription.textContent = "Capellini in Exquisite Tomato Elegance: Delicate Angel Hair Pasta Draped in Luscious, Sun-Kissed Tomato Sauce.";
            menuItem.appendChild(menuDescription);
            // menuItem.appendChild(capellini);
        };
        if(getId === '1') {
            menuDescription.textContent = 
            "Decadent Indulgence: Traditional Carbonara Pasta Infused with Creamy Egg, Rich Guanciale, Pecorino Romano, and Freshly Cracked Black Pepper."
            menuItem.appendChild(menuDescription);
            // menuItem.appendChild(carbonara);
        };
        if(getId === '2') {
            menuDescription.textContent = 
            "Penne Rigate Embraced in Velvety Vodka Sauce: A Harmony of Tomatoes, Cream, and Vodka Weaved to Perfection."
            menuItem.appendChild(menuDescription);
            // menuItem.appendChild(penne);
        };
        if(getId === '3') {
            menuDescription.textContent = 
            "Pockets of Delight: Handcrafted Ravioli, Filled with Savory Medleys, Nestled Beneath a Blanket of Gourmet Sauce."
            menuItem.appendChild(menuDescription)
            // menuItem.appendChild(ravioli);
        };
        
        menuContainer.appendChild(menuItem);
    }
    
    return menuContainer;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX21lbnVfanMubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDQTtBQUNSO0FBQ0k7QUFDMUI7OztBQUdOO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixzREFBUztBQUM3QixvQkFBb0Isc0RBQVM7QUFDN0IsZ0JBQWdCLGtEQUFLO0FBQ3JCLGtCQUFrQixvREFBTzs7QUFFekIsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXBlbGxpbmkgZnJvbSAnLi9jb21wb25lbnRzL2NhcGVsbGluaS5qcGcnO1xuaW1wb3J0IENhcmJvbmFyYSBmcm9tICcuL2NvbXBvbmVudHMvY2FyYm9uYXJhLmpwZyc7XG5pbXBvcnQgUGVubmUgZnJvbSAnLi9jb21wb25lbnRzL3Blbm5lLmpwZyc7XG5pbXBvcnQgUmF2aW9saSBmcm9tICcuL2NvbXBvbmVudHMvcmF2aW9saS5qcGcnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNhcGVsbGluaSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGNhcmJvbmFyYSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHBlbm5lID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgcmF2aW9saSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgY2FwZWxsaW5pLnNyYyA9IENhcGVsbGluaTtcbiAgICBjYXJib25hcmEuc3JjID0gQ2FyYm9uYXJhO1xuICAgIHBlbm5lLnNyYyA9IFBlbm5lO1xuICAgIHJhdmlvbGkuc3JjID0gUmF2aW9saTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICAgICAgbWVudUl0ZW0uc2V0QXR0cmlidXRlKCdpbmRleCcsaSk7XG4gICAgICAgIGNvbnN0IGdldElkID0gbWVudUl0ZW0uZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xuXG4gICAgICAgIGlmKGdldElkID09PSAnMCcpIHtcbiAgICAgICAgICAgIG1lbnVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQ2FwZWxsaW5pIGluIEV4cXVpc2l0ZSBUb21hdG8gRWxlZ2FuY2U6IERlbGljYXRlIEFuZ2VsIEhhaXIgUGFzdGEgRHJhcGVkIGluIEx1c2Npb3VzLCBTdW4tS2lzc2VkIFRvbWF0byBTYXVjZS5cIjtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAvLyBtZW51SXRlbS5hcHBlbmRDaGlsZChjYXBlbGxpbmkpO1xuICAgICAgICB9O1xuICAgICAgICBpZihnZXRJZCA9PT0gJzEnKSB7XG4gICAgICAgICAgICBtZW51RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcbiAgICAgICAgICAgIFwiRGVjYWRlbnQgSW5kdWxnZW5jZTogVHJhZGl0aW9uYWwgQ2FyYm9uYXJhIFBhc3RhIEluZnVzZWQgd2l0aCBDcmVhbXkgRWdnLCBSaWNoIEd1YW5jaWFsZSwgUGVjb3Jpbm8gUm9tYW5vLCBhbmQgRnJlc2hseSBDcmFja2VkIEJsYWNrIFBlcHBlci5cIlxuICAgICAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudURlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIC8vIG1lbnVJdGVtLmFwcGVuZENoaWxkKGNhcmJvbmFyYSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmKGdldElkID09PSAnMicpIHtcbiAgICAgICAgICAgIG1lbnVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFxuICAgICAgICAgICAgXCJQZW5uZSBSaWdhdGUgRW1icmFjZWQgaW4gVmVsdmV0eSBWb2RrYSBTYXVjZTogQSBIYXJtb255IG9mIFRvbWF0b2VzLCBDcmVhbSwgYW5kIFZvZGthIFdlYXZlZCB0byBQZXJmZWN0aW9uLlwiXG4gICAgICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51RGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgLy8gbWVudUl0ZW0uYXBwZW5kQ2hpbGQocGVubmUpO1xuICAgICAgICB9O1xuICAgICAgICBpZihnZXRJZCA9PT0gJzMnKSB7XG4gICAgICAgICAgICBtZW51RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcbiAgICAgICAgICAgIFwiUG9ja2V0cyBvZiBEZWxpZ2h0OiBIYW5kY3JhZnRlZCBSYXZpb2xpLCBGaWxsZWQgd2l0aCBTYXZvcnkgTWVkbGV5cywgTmVzdGxlZCBCZW5lYXRoIGEgQmxhbmtldCBvZiBHb3VybWV0IFNhdWNlLlwiXG4gICAgICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51RGVzY3JpcHRpb24pXG4gICAgICAgICAgICAvLyBtZW51SXRlbS5hcHBlbmRDaGlsZChyYXZpb2xpKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbWVudUNvbnRhaW5lcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==