import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_PagingToolbar from './Ext/grid/PagingToolbar.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtPagingtoolbar =
/*#__PURE__*/
function (_Ext_grid_PagingToolb) {
  _inheritsLoose(ExtPagingtoolbar, _Ext_grid_PagingToolb);

  function ExtPagingtoolbar() {
    var _this;

    _this = _Ext_grid_PagingToolb.call(this, [], []) || this;
    _this.xtype = 'pagingtoolbar';
    return _this;
  }

  return ExtPagingtoolbar;
}(Ext_grid_PagingToolbar); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pagingtoolbar', ExtPagingtoolbar);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtPagingtoolbar as default };
window.customElements.define('ext-pagingtoolbar', HTMLParsedElement.withParsedCallback(ExtPagingtoolbar)); //export default reactify(ExtPagingtoolbar);