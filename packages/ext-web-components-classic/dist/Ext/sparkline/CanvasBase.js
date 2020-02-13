import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_sparkline_CanvasBase =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_sparkline_CanvasBase, _Ext_Base);

  Ext_sparkline_CanvasBase.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_sparkline_CanvasBase.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_sparkline_CanvasBase.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_sparkline_CanvasBase.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_sparkline_CanvasBase.getEvents = function getEvents(events) {
    events = events.concat(Ext_sparkline_CanvasBase.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_sparkline_CanvasBase, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_sparkline_CanvasBase.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_sparkline_CanvasBase.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_CanvasBase(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_sparkline_CanvasBase.PROPERTIES()), events.concat(Ext_sparkline_CanvasBase.EVENTS())) || this;
  }

  var _proto = Ext_sparkline_CanvasBase.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_CanvasBase;
}(Ext_Base);

export { Ext_sparkline_CanvasBase as default };