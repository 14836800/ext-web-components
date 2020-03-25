import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_util_Sorter from '../../Ext/util/Sorter.js';

var Ext_util_Grouper = /*#__PURE__*/function (_Ext_util_Sorter) {
  _inheritsLoose(Ext_util_Grouper, _Ext_util_Sorter);

  var _super = _createSuper(Ext_util_Grouper);

  Ext_util_Grouper.PROPERTIES = function PROPERTIES() {
    return ['direction', 'groupFn', 'id', 'property', 'root', 'sorterFn', 'sortProperty', 'transform'];
  };

  Ext_util_Grouper.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_Grouper.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_Grouper.PROPERTIES());
    return Ext_util_Sorter.getProperties(properties);
  };

  Ext_util_Grouper.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_Grouper.EVENTS());
    return Ext_util_Sorter.getEvents(events);
  };

  _createClass(Ext_util_Grouper, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Sorter.observedAttributes;
      Ext_util_Grouper.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_Grouper.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_Grouper(properties, events) {
    return _Ext_util_Sorter.call(this, properties.concat(Ext_util_Grouper.PROPERTIES()), events.concat(Ext_util_Grouper.EVENTS())) || this;
  }

  var _proto = Ext_util_Grouper.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Sorter.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Sorter.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_Grouper;
}(Ext_util_Sorter);

export { Ext_util_Grouper as default };