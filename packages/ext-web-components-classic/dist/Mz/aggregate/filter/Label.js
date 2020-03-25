import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_filter_Base from '../../../Ext/pivot/filter/Base.js';

var Mz_aggregate_filter_Label = /*#__PURE__*/function (_Ext_pivot_filter_Bas) {
  _inheritsLoose(Mz_aggregate_filter_Label, _Ext_pivot_filter_Bas);

  var _super = _createSuper(Mz_aggregate_filter_Label);

  Mz_aggregate_filter_Label.PROPERTIES = function PROPERTIES() {
    return ['caseSensitive', 'operator', 'type', 'value'];
  };

  Mz_aggregate_filter_Label.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Mz_aggregate_filter_Label.getProperties = function getProperties(properties) {
    properties = properties.concat(Mz_aggregate_filter_Label.PROPERTIES());
    return Ext_pivot_filter_Base.getProperties(properties);
  };

  Mz_aggregate_filter_Label.getEvents = function getEvents(events) {
    events = events.concat(Mz_aggregate_filter_Label.EVENTS());
    return Ext_pivot_filter_Base.getEvents(events);
  };

  _createClass(Mz_aggregate_filter_Label, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_pivot_filter_Bas.observedAttributes;
      Mz_aggregate_filter_Label.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Mz_aggregate_filter_Label.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Mz_aggregate_filter_Label(properties, events) {
    return _Ext_pivot_filter_Bas.call(this, properties.concat(Mz_aggregate_filter_Label.PROPERTIES()), events.concat(Mz_aggregate_filter_Label.EVENTS())) || this;
  }

  var _proto = Mz_aggregate_filter_Label.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_pivot_filter_Bas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_pivot_filter_Bas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Mz_aggregate_filter_Label;
}(Ext_pivot_filter_Base);

export { Mz_aggregate_filter_Label as default };