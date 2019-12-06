import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_form_TextArea from '@sencha/ext-runtime-base/dist/./Ext/form/TextArea.js';
import Ext_form_TextArea from './Ext/form/TextArea.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCTextareafield =
/*#__PURE__*/
function (_Ext_form_TextArea) {
  _inheritsLoose(EWCTextareafield, _Ext_form_TextArea);

  function EWCTextareafield() {
    var _this;

    _this = _Ext_form_TextArea.call(this, [], []) || this;
    _this.xtype = 'textareafield';
    return _this;
  }

  return EWCTextareafield;
}(Ext_form_TextArea);

export { EWCTextareafield as default };
window.customElements.define('ext-textareafield', HTMLParsedElement.withParsedCallback(EWCTextareafield));