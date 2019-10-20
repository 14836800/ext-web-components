import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_list_Tree from './Ext/list/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtTreelist =
/*#__PURE__*/
function (_Ext_list_Tree) {
  _inheritsLoose(ExtTreelist, _Ext_list_Tree);

  function ExtTreelist() {
    var _this;

    _this = _Ext_list_Tree.call(this, [], []) || this;
    _this.xtype = 'treelist';
    return _this;
  }

  return ExtTreelist;
}(Ext_list_Tree); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treelist', ExtTreelist);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtTreelist as default };
window.customElements.define('ext-treelist', HTMLParsedElement.withParsedCallback(ExtTreelist)); //export default reactify(ExtTreelist);