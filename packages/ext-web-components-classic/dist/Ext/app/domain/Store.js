import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_app_EventDomain from '../../../Ext/app/EventDomain.js';

var Ext_app_domain_Store = /*#__PURE__*/function (_Ext_app_EventDomain) {
  _inheritsLoose(Ext_app_domain_Store, _Ext_app_EventDomain);

  var _super = _createSuper(Ext_app_domain_Store);

  Ext_app_domain_Store.PROPERTIES = function PROPERTIES() {
    return ['idProperty'];
  };

  Ext_app_domain_Store.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_domain_Store.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_domain_Store.PROPERTIES());
    return Ext_app_EventDomain.getProperties(properties);
  };

  Ext_app_domain_Store.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_domain_Store.EVENTS());
    return Ext_app_EventDomain.getEvents(events);
  };

  _createClass(Ext_app_domain_Store, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_EventDomain.observedAttributes;
      Ext_app_domain_Store.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_domain_Store.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_domain_Store(properties, events) {
    return _Ext_app_EventDomain.call(this, properties.concat(Ext_app_domain_Store.PROPERTIES()), events.concat(Ext_app_domain_Store.EVENTS())) || this;
  }

  var _proto = Ext_app_domain_Store.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_EventDomain.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_EventDomain.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_domain_Store;
}(Ext_app_EventDomain);

export { Ext_app_domain_Store as default };