import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Toggle from './Ext/slider/Toggle.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtToggleslider =
/*#__PURE__*/
function (_Ext_slider_Toggle) {
  _inheritsLoose(ExtToggleslider, _Ext_slider_Toggle);

  function ExtToggleslider() {
    var _this;

    _this = _Ext_slider_Toggle.call(this, [], []) || this;
    _this.xtype = 'toggleslider';
    return _this;
  }

  return ExtToggleslider;
}(Ext_slider_Toggle); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-toggleslider', ExtToggleslider);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtToggleslider as default };
window.customElements.define('ext-toggleslider', HTMLParsedElement.withParsedCallback(ExtToggleslider)); //export default reactify(ExtToggleslider);