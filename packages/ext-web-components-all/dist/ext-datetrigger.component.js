import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Date from './Ext/field/trigger/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtDatetriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Da) {
  _inheritsLoose(ExtDatetriggerComponent, _Ext_field_trigger_Da);

  function ExtDatetriggerComponent() {
    var _this;

    _this = _Ext_field_trigger_Da.call(this, [], []) || this;
    _this.xtype = 'datetrigger';
    return _this;
  }

  return ExtDatetriggerComponent;
}(Ext_field_trigger_Date); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datetrigger', ExtDatetriggerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-datetrigger', HTMLParsedElement.withParsedCallback(ExtDatetriggerComponent));