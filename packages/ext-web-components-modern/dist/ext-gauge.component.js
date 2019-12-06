import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_ux_Gauge from '@sencha/ext-runtime-base/dist/./Ext/ux/Gauge.js';
import Ext_ux_Gauge from './Ext/ux/Gauge.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCGauge =
/*#__PURE__*/
function (_Ext_ux_Gauge) {
  _inheritsLoose(EWCGauge, _Ext_ux_Gauge);

  function EWCGauge() {
    var _this;

    _this = _Ext_ux_Gauge.call(this, [], []) || this;
    _this.xtype = 'gauge';
    return _this;
  }

  return EWCGauge;
}(Ext_ux_Gauge);

export { EWCGauge as default };
window.customElements.define('ext-gauge', HTMLParsedElement.withParsedCallback(EWCGauge));