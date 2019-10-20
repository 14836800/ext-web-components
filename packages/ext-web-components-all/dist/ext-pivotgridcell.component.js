import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_cell_Cell from './Ext/pivot/cell/Cell.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtPivotgridcell =
/*#__PURE__*/
function (_Ext_pivot_cell_Cell) {
  _inheritsLoose(ExtPivotgridcell, _Ext_pivot_cell_Cell);

  function ExtPivotgridcell() {
    var _this;

    _this = _Ext_pivot_cell_Cell.call(this, [], []) || this;
    _this.xtype = 'pivotgridcell';
    return _this;
  }

  return ExtPivotgridcell;
}(Ext_pivot_cell_Cell); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgridcell', ExtPivotgridcell);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtPivotgridcell as default };
window.customElements.define('ext-pivotgridcell', HTMLParsedElement.withParsedCallback(ExtPivotgridcell)); //export default reactify(ExtPivotgridcell);