import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Video from './Ext/Video.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtVideo =
/*#__PURE__*/
function (_Ext_Video) {
  _inheritsLoose(ExtVideo, _Ext_Video);

  function ExtVideo() {
    var _this;

    _this = _Ext_Video.call(this, [], []) || this;
    _this.xtype = 'video';
    return _this;
  }

  return ExtVideo;
}(Ext_Video); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-video', ExtVideo);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtVideo as default };
window.customElements.define('ext-video', HTMLParsedElement.withParsedCallback(ExtVideo)); //export default reactify(ExtVideo);