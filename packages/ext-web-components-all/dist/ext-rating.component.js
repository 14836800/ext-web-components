import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_rating_Picker from './Ext/ux/rating/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtRatingComponent =
/*#__PURE__*/
function (_Ext_ux_rating_Picker) {
  _inheritsLoose(ExtRatingComponent, _Ext_ux_rating_Picker);

  function ExtRatingComponent() {
    var _this;

    _this = _Ext_ux_rating_Picker.call(this, [], []) || this;
    _this.xtype = 'rating';
    return _this;
  }

  return ExtRatingComponent;
}(Ext_ux_rating_Picker); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-rating', ExtRatingComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-rating', HTMLParsedElement.withParsedCallback(ExtRatingComponent));