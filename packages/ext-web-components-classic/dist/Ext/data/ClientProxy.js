import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_data_proxy_Proxy from '../../Ext/data/proxy/Proxy.js';

var Ext_data_ClientProxy = /*#__PURE__*/function (_Ext_data_proxy_Proxy) {
  _inheritsLoose(Ext_data_ClientProxy, _Ext_data_proxy_Proxy);

  var _super = _createSuper(Ext_data_ClientProxy);

  Ext_data_ClientProxy.PROPERTIES = function PROPERTIES() {
    return ['batchActions', 'batchOrder', 'listeners', 'model', 'reader', 'writer'];
  };

  Ext_data_ClientProxy.EVENTS = function EVENTS() {
    return [{
      name: 'metachange',
      parameters: 'sender,meta'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_ClientProxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_ClientProxy.PROPERTIES());
    return Ext_data_proxy_Proxy.getProperties(properties);
  };

  Ext_data_ClientProxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_ClientProxy.EVENTS());
    return Ext_data_proxy_Proxy.getEvents(events);
  };

  _createClass(Ext_data_ClientProxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_proxy_Proxy.observedAttributes;
      Ext_data_ClientProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_ClientProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_ClientProxy(properties, events) {
    return _Ext_data_proxy_Proxy.call(this, properties.concat(Ext_data_ClientProxy.PROPERTIES()), events.concat(Ext_data_ClientProxy.EVENTS())) || this;
  }

  var _proto = Ext_data_ClientProxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_proxy_Proxy.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_proxy_Proxy.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_ClientProxy;
}(Ext_data_proxy_Proxy);

export { Ext_data_ClientProxy as default };