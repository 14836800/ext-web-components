import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_series_sprite_Series from '../../../../Ext/chart/series/sprite/Series.js';

var Ext_chart_series_sprite_Cartesian =
/*#__PURE__*/
function (_Ext_chart_series_spr) {
  _inheritsLoose(Ext_chart_series_sprite_Cartesian, _Ext_chart_series_spr);

  Ext_chart_series_sprite_Cartesian.PROPERTIES = function PROPERTIES() {
    return ['animation', 'dataMaxX', 'dataMaxY', 'dataMinX', 'dataMinY', 'dataX', 'dataY', 'dirty', 'field', 'fillOpacity', 'fillStyle', 'flipXY', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'labelOverflowPadding', 'labels', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'rangeX', 'rangeY', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'selectionTolerance', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'store', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_chart_series_sprite_Cartesian.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_chart_series_sprite_Cartesian.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_sprite_Cartesian.PROPERTIES());
    return Ext_chart_series_sprite_Series.getProperties(properties);
  };

  Ext_chart_series_sprite_Cartesian.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_Cartesian.EVENTS());
    return Ext_chart_series_sprite_Series.getEvents(events);
  };

  _createClass(Ext_chart_series_sprite_Cartesian, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_series_spr.observedAttributes;
      Ext_chart_series_sprite_Cartesian.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_sprite_Cartesian.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_series_sprite_Cartesian(properties, events) {
    return _Ext_chart_series_spr.call(this, properties.concat(Ext_chart_series_sprite_Cartesian.PROPERTIES()), events.concat(Ext_chart_series_sprite_Cartesian.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_sprite_Cartesian.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_series_spr.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_series_spr.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_series_sprite_Cartesian;
}(Ext_chart_series_sprite_Series);

export { Ext_chart_series_sprite_Cartesian as default };