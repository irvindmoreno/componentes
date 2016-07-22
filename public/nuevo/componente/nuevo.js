"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NuevoComponente = function () {
    function NuevoComponente() {
        _classCallCheck(this, NuevoComponente);

        this.miMetodo();
    }

    _createClass(NuevoComponente, [{
        key: "miMetodo",
        value: function miMetodo() {
            console.log("hola");
        }
    }]);

    return NuevoComponente;
}();

var obj = new NuevoComponente();