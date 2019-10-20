import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Panel from './Ext/panel/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtPanel =
/*#__PURE__*/
function (_Ext_panel_Panel) {
  _inheritsLoose(ExtPanel, _Ext_panel_Panel);

  function ExtPanel() {
    var _this;

    _this = _Ext_panel_Panel.call(this, [], []) || this;
    _this.xtype = 'panel';
    return _this;
  }

  return ExtPanel;
}(Ext_panel_Panel); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-panel', ExtPanel);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtPanel as default };
window.customElements.define('ext-panel', HTMLParsedElement.withParsedCallback(ExtPanel)); //export default reactify(ExtPanel);