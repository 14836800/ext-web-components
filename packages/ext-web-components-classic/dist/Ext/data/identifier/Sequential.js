import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_data_identifier_Generator from '../../../Ext/data/identifier/Generator.js';

var Ext_data_identifier_Sequential = /*#__PURE__*/function (_Ext_data_identifier_) {
  _inheritsLoose(Ext_data_identifier_Sequential, _Ext_data_identifier_);

  var _super = _createSuper(Ext_data_identifier_Sequential);

  Ext_data_identifier_Sequential.PROPERTIES = function PROPERTIES() {
    return ['id', 'increment', 'prefix', 'seed'];
  };

  Ext_data_identifier_Sequential.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_identifier_Sequential.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_identifier_Sequential.PROPERTIES());
    return Ext_data_identifier_Generator.getProperties(properties);
  };

  Ext_data_identifier_Sequential.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_identifier_Sequential.EVENTS());
    return Ext_data_identifier_Generator.getEvents(events);
  };

  _createClass(Ext_data_identifier_Sequential, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_identifier_.observedAttributes;
      Ext_data_identifier_Sequential.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_identifier_Sequential.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_identifier_Sequential(properties, events) {
    return _Ext_data_identifier_.call(this, properties.concat(Ext_data_identifier_Sequential.PROPERTIES()), events.concat(Ext_data_identifier_Sequential.EVENTS())) || this;
  }

  var _proto = Ext_data_identifier_Sequential.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_identifier_.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_identifier_.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_identifier_Sequential;
}(Ext_data_identifier_Generator);

export { Ext_data_identifier_Sequential as default };