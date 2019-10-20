import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Hidden from './Ext/form/Hidden.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtHiddenfield =
/*#__PURE__*/
function (_Ext_form_Hidden) {
  _inheritsLoose(ExtHiddenfield, _Ext_form_Hidden);

  function ExtHiddenfield() {
    var _this;

    _this = _Ext_form_Hidden.call(this, [], []) || this;
    _this.xtype = 'hiddenfield';
    return _this;
  }

  return ExtHiddenfield;
}(Ext_form_Hidden); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-hiddenfield', ExtHiddenfield);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtHiddenfield as default };
window.customElements.define('ext-hiddenfield', HTMLParsedElement.withParsedCallback(ExtHiddenfield)); //export default reactify(ExtHiddenfield);