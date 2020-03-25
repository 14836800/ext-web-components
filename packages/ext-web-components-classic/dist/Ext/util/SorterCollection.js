import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_util_Collection from '../../Ext/util/Collection.js';

var Ext_util_SorterCollection = /*#__PURE__*/function (_Ext_util_Collection) {
  _inheritsLoose(Ext_util_SorterCollection, _Ext_util_Collection);

  var _super = _createSuper(Ext_util_SorterCollection);

  Ext_util_SorterCollection.PROPERTIES = function PROPERTIES() {
    return ['applySorterOptionsFn', 'applySorterOptionsScope', 'autoGroup', 'autoSort', 'decoder', 'defaultSortDirection', 'extraKeys', 'filters', 'groupConfig', 'grouper', 'groups', 'keyFn', 'listeners', 'multiSortLimit', 'rootProperty', 'sorters', 'source', 'trackGroups'];
  };

  Ext_util_SorterCollection.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'collection,details'
    }, {
      name: 'beforeitemchange',
      parameters: 'collection,details'
    }, {
      name: 'beforesort',
      parameters: 'collection,sorters'
    }, {
      name: 'beginupdate',
      parameters: 'collection'
    }, {
      name: 'endupdate',
      parameters: 'collection'
    }, {
      name: 'itemchange',
      parameters: 'collection,details'
    }, {
      name: 'refresh',
      parameters: 'collection'
    }, {
      name: 'remove',
      parameters: 'collection,details'
    }, {
      name: 'sort',
      parameters: 'collection'
    }, {
      name: 'updatekey',
      parameters: 'collection,details'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_SorterCollection.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_SorterCollection.PROPERTIES());
    return Ext_util_Collection.getProperties(properties);
  };

  Ext_util_SorterCollection.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_SorterCollection.EVENTS());
    return Ext_util_Collection.getEvents(events);
  };

  _createClass(Ext_util_SorterCollection, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Collection.observedAttributes;
      Ext_util_SorterCollection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_SorterCollection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_SorterCollection(properties, events) {
    return _Ext_util_Collection.call(this, properties.concat(Ext_util_SorterCollection.PROPERTIES()), events.concat(Ext_util_SorterCollection.EVENTS())) || this;
  }

  var _proto = Ext_util_SorterCollection.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Collection.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Collection.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_SorterCollection;
}(Ext_util_Collection);

export { Ext_util_SorterCollection as default };