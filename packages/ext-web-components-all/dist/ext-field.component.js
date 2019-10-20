import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Field from './Ext/form/Field.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtField =
/*#__PURE__*/
function (_Ext_form_Field) {
  _inheritsLoose(ExtField, _Ext_form_Field);

  function ExtField() {
    var _this;

    _this = _Ext_form_Field.call(this, [], []) || this;
    _this.xtype = 'field';
    return _this;
  }

  return ExtField;
}(Ext_form_Field); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-field', ExtField);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtField as default };
window.customElements.define('ext-field', HTMLParsedElement.withParsedCallback(ExtField)); //export default reactify(ExtField);