import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_rowedit_Bar from '@sencha/ext-runtime-base/dist/./Ext/grid/rowedit/Bar.js';
import Ext_grid_rowedit_Bar from './Ext/grid/rowedit/Bar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCRoweditorbar =
/*#__PURE__*/
function (_Ext_grid_rowedit_Bar) {
  _inheritsLoose(EWCRoweditorbar, _Ext_grid_rowedit_Bar);

  function EWCRoweditorbar() {
    var _this;

    _this = _Ext_grid_rowedit_Bar.call(this, [], []) || this;
    _this.xtype = 'roweditorbar';
    return _this;
  }

  return EWCRoweditorbar;
}(Ext_grid_rowedit_Bar);

export { EWCRoweditorbar as default };
window.customElements.define('ext-roweditorbar', HTMLParsedElement.withParsedCallback(EWCRoweditorbar));