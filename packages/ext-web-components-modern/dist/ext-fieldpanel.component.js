import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_Panel from './Ext/field/Panel.js';
import ElementParser from './runtime/ElementParser.js';

var EWCFieldpanel = /*#__PURE__*/function (_Ext_field_Panel) {
  _inheritsLoose(EWCFieldpanel, _Ext_field_Panel);

  var _super = _createSuper(EWCFieldpanel);

  function EWCFieldpanel() {
    var _this;

    _this = _Ext_field_Panel.call(this, [], []) || this;
    _this.xtype = 'fieldpanel';
    return _this;
  }

  return EWCFieldpanel;
}(Ext_field_Panel);

export { EWCFieldpanel as default };

try {
  window.customElements.define('ext-fieldpanel', ElementParser.withParsedCallback(EWCFieldpanel));
} catch (e) {
  window.customElements.define('ext-fieldpanel', EWCFieldpanel);
}