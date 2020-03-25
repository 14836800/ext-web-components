import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Video from './Ext/Video.js';
import ElementParser from './runtime/ElementParser.js';

var EWCVideo = /*#__PURE__*/function (_Ext_Video) {
  _inheritsLoose(EWCVideo, _Ext_Video);

  var _super = _createSuper(EWCVideo);

  function EWCVideo() {
    var _this;

    _this = _Ext_Video.call(this, [], []) || this;
    _this.xtype = 'video';
    return _this;
  }

  return EWCVideo;
}(Ext_Video);

export { EWCVideo as default };

try {
  window.customElements.define('ext-video', ElementParser.withParsedCallback(EWCVideo));
} catch (e) {
  window.customElements.define('ext-video', EWCVideo);
}