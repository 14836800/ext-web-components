import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Radio from './Ext/form/Radio.js';
import ElementParser from './runtime/ElementParser.js';

var EWCRadio = /*#__PURE__*/function (_Ext_form_Radio) {
  _inheritsLoose(EWCRadio, _Ext_form_Radio);

  var _super = _createSuper(EWCRadio);

  function EWCRadio() {
    var _this;

    _this = _Ext_form_Radio.call(this, [], []) || this;
    _this.xtype = 'radio';
    return _this;
  }

  return EWCRadio;
}(Ext_form_Radio);

export { EWCRadio as default };

try {
  window.customElements.define('ext-radio', ElementParser.withParsedCallback(EWCRadio));
} catch (e) {
  window.customElements.define('ext-radio', EWCRadio);
}