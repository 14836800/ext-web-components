import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_d3_hierarchy_partition_Sunburst from '@sencha/ext-runtime-base/dist/./Ext/d3/hierarchy/partition/Sunburst.js';
import Ext_d3_hierarchy_partition_Sunburst from './Ext/d3/hierarchy/partition/Sunburst.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCD3_sunburst =
/*#__PURE__*/
function (_Ext_d3_hierarchy_par) {
  _inheritsLoose(EWCD3_sunburst, _Ext_d3_hierarchy_par);

  function EWCD3_sunburst() {
    var _this;

    _this = _Ext_d3_hierarchy_par.call(this, [], []) || this;
    _this.xtype = 'd3-sunburst';
    return _this;
  }

  return EWCD3_sunburst;
}(Ext_d3_hierarchy_partition_Sunburst);

export { EWCD3_sunburst as default };
window.customElements.define('ext-d3-sunburst', HTMLParsedElement.withParsedCallback(EWCD3_sunburst));