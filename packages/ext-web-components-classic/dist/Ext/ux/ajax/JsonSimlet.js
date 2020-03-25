import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_ajax_DataSimlet from '../../../Ext/ux/ajax/DataSimlet.js';

var Ext_ux_ajax_JsonSimlet = /*#__PURE__*/function (_Ext_ux_ajax_DataSiml) {
  _inheritsLoose(Ext_ux_ajax_JsonSimlet, _Ext_ux_ajax_DataSiml);

  var _super = _createSuper(Ext_ux_ajax_JsonSimlet);

  Ext_ux_ajax_JsonSimlet.PROPERTIES = function PROPERTIES() {
    return ['responseHeaders', 'responseText', 'responseXML', 'status', 'statusText'];
  };

  Ext_ux_ajax_JsonSimlet.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_ajax_JsonSimlet.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_ajax_JsonSimlet.PROPERTIES());
    return Ext_ux_ajax_DataSimlet.getProperties(properties);
  };

  Ext_ux_ajax_JsonSimlet.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_ajax_JsonSimlet.EVENTS());
    return Ext_ux_ajax_DataSimlet.getEvents(events);
  };

  _createClass(Ext_ux_ajax_JsonSimlet, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_ux_ajax_DataSiml.observedAttributes;
      Ext_ux_ajax_JsonSimlet.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_ajax_JsonSimlet.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_ajax_JsonSimlet(properties, events) {
    return _Ext_ux_ajax_DataSiml.call(this, properties.concat(Ext_ux_ajax_JsonSimlet.PROPERTIES()), events.concat(Ext_ux_ajax_JsonSimlet.EVENTS())) || this;
  }

  var _proto = Ext_ux_ajax_JsonSimlet.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_ux_ajax_DataSiml.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_ux_ajax_DataSiml.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_ajax_JsonSimlet;
}(Ext_ux_ajax_DataSimlet);

export { Ext_ux_ajax_JsonSimlet as default };