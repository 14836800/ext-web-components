import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_froala_EditorField from './Ext/froala/EditorField.js';
import ElementParser from './runtime/ElementParser.js';

var EWCFroalaeditorfield = /*#__PURE__*/function (_Ext_froala_EditorFie) {
  _inheritsLoose(EWCFroalaeditorfield, _Ext_froala_EditorFie);

  var _super = _createSuper(EWCFroalaeditorfield);

  function EWCFroalaeditorfield() {
    var _this;

    _this = _Ext_froala_EditorFie.call(this, [], []) || this;
    _this.xtype = 'froalaeditorfield';
    return _this;
  }

  return EWCFroalaeditorfield;
}(Ext_froala_EditorField);

export { EWCFroalaeditorfield as default };

try {
  window.customElements.define('ext-froalaeditorfield', ElementParser.withParsedCallback(EWCFroalaeditorfield));
} catch (e) {
  window.customElements.define('ext-froalaeditorfield', EWCFroalaeditorfield);
}