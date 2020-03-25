import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_chart_theme_series_Series from '../../../../Ext/chart/theme/series/Series.js';

var Ext_chart_theme_series_BoxPlot = /*#__PURE__*/function (_Ext_chart_theme_seri) {
  _inheritsLoose(Ext_chart_theme_series_BoxPlot, _Ext_chart_theme_seri);

  var _super = _createSuper(Ext_chart_theme_series_BoxPlot);

  Ext_chart_theme_series_BoxPlot.PROPERTIES = function PROPERTIES() {
    return ['fillOpacity', 'fillStyle', 'globalAlpha', 'labelOverflowPadding', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'maxBoxWidth', 'minBoxWidth', 'minGapWidth', 'miterLimit', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'strokeOpacity', 'strokeStyle'];
  };

  Ext_chart_theme_series_BoxPlot.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_theme_series_BoxPlot.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_theme_series_BoxPlot.PROPERTIES());
    return Ext_chart_theme_series_Series.getProperties(properties);
  };

  Ext_chart_theme_series_BoxPlot.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_theme_series_BoxPlot.EVENTS());
    return Ext_chart_theme_series_Series.getEvents(events);
  };

  _createClass(Ext_chart_theme_series_BoxPlot, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_theme_seri.observedAttributes;
      Ext_chart_theme_series_BoxPlot.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_theme_series_BoxPlot.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_theme_series_BoxPlot(properties, events) {
    return _Ext_chart_theme_seri.call(this, properties.concat(Ext_chart_theme_series_BoxPlot.PROPERTIES()), events.concat(Ext_chart_theme_series_BoxPlot.EVENTS())) || this;
  }

  var _proto = Ext_chart_theme_series_BoxPlot.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_theme_seri.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_theme_seri.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_theme_series_BoxPlot;
}(Ext_chart_theme_series_Series);

export { Ext_chart_theme_series_BoxPlot as default };