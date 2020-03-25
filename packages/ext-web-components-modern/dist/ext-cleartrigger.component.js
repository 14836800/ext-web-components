import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_trigger_Clear from './Ext/field/trigger/Clear.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCleartrigger = /*#__PURE__*/function (_Ext_field_trigger_Cl) {
  _inheritsLoose(EWCCleartrigger, _Ext_field_trigger_Cl);

  var _super = _createSuper(EWCCleartrigger);

  function EWCCleartrigger() {
    var _this;

    _this = _Ext_field_trigger_Cl.call(this, [], []) || this;
    _this.xtype = 'cleartrigger';
    return _this;
  }

  return EWCCleartrigger;
}(Ext_field_trigger_Clear);

export { EWCCleartrigger as default };

try {
  window.customElements.define('ext-cleartrigger', ElementParser.withParsedCallback(EWCCleartrigger));
} catch (e) {
  window.customElements.define('ext-cleartrigger', EWCCleartrigger);
}