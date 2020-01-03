import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_pivot_plugin_configurator_Container from '@sencha/ext-runtime-base/dist/./Ext/pivot/plugin/configurator/Container.js';
import Ext_pivot_plugin_configurator_Container from './Ext/pivot/plugin/configurator/Container.js';
import ElementParser from './ElementParser.js';

var EWCPivotconfigcontainer =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(EWCPivotconfigcontainer, _Ext_pivot_plugin_con);

  function EWCPivotconfigcontainer() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigcontainer';
    return _this;
  }

  return EWCPivotconfigcontainer;
}(Ext_pivot_plugin_configurator_Container);

export { EWCPivotconfigcontainer as default };
window.customElements.define('ext-pivotconfigcontainer', ElementParser.withParsedCallback(EWCPivotconfigcontainer));