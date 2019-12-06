import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_d3_svg_Svg from '@sencha/ext-runtime-base/dist/./Ext/d3/svg/Svg.js';
import Ext_d3_svg_Svg from './Ext/d3/svg/Svg.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCD3_svg =
/*#__PURE__*/
function (_Ext_d3_svg_Svg) {
  _inheritsLoose(EWCD3_svg, _Ext_d3_svg_Svg);

  function EWCD3_svg() {
    var _this;

    _this = _Ext_d3_svg_Svg.call(this, [], []) || this;
    _this.xtype = 'd3-svg';
    return _this;
  }

  return EWCD3_svg;
}(Ext_d3_svg_Svg);

export { EWCD3_svg as default };
window.customElements.define('ext-d3-svg', HTMLParsedElement.withParsedCallback(EWCD3_svg));