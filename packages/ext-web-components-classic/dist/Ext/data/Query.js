import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_util_BasicFilter from '../../Ext/util/BasicFilter.js';

var Ext_data_Query = /*#__PURE__*/function (_Ext_util_BasicFilter) {
  _inheritsLoose(Ext_data_Query, _Ext_util_BasicFilter);

  var _super = _createSuper(Ext_data_Query);

  Ext_data_Query.PROPERTIES = function PROPERTIES() {
    return ['disabled', 'format', 'functions', 'id', 'serializer', 'source'];
  };

  Ext_data_Query.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_Query.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_Query.PROPERTIES());
    return Ext_util_BasicFilter.getProperties(properties);
  };

  Ext_data_Query.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_Query.EVENTS());
    return Ext_util_BasicFilter.getEvents(events);
  };

  _createClass(Ext_data_Query, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_BasicFilter.observedAttributes;
      Ext_data_Query.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_Query.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_Query(properties, events) {
    return _Ext_util_BasicFilter.call(this, properties.concat(Ext_data_Query.PROPERTIES()), events.concat(Ext_data_Query.EVENTS())) || this;
  }

  var _proto = Ext_data_Query.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_BasicFilter.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_BasicFilter.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_Query;
}(Ext_util_BasicFilter);

export { Ext_data_Query as default };