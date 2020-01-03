import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_Viewport from '@sencha/ext-runtime-base/dist/./Ext/Viewport.js';
import Ext_Viewport from './Ext/Viewport.js';
import ElementParser from './ElementParser.js';

var EWCViewport =
/*#__PURE__*/
function (_Ext_Viewport) {
  _inheritsLoose(EWCViewport, _Ext_Viewport);

  function EWCViewport() {
    var _this;

    _this = _Ext_Viewport.call(this, [], []) || this;
    _this.xtype = 'viewport';
    return _this;
  }

  return EWCViewport;
}(Ext_Viewport);

export { EWCViewport as default };
window.customElements.define('ext-viewport', ElementParser.withParsedCallback(EWCViewport));