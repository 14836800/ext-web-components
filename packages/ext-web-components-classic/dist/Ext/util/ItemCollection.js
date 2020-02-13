import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_MixedCollection from '../../Ext/util/MixedCollection.js';

var Ext_util_ItemCollection =
/*#__PURE__*/
function (_Ext_util_MixedCollec) {
  _inheritsLoose(Ext_util_ItemCollection, _Ext_util_MixedCollec);

  Ext_util_ItemCollection.PROPERTIES = function PROPERTIES() {
    return ['allowFunctions', 'defaultSortDirection', 'listeners', 'multiSortLimit', 'sorters', 'sortRoot'];
  };

  Ext_util_ItemCollection.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'index,o,key'
    }, {
      name: 'beforesort',
      parameters: 'me,sorters'
    }, {
      name: 'clear',
      parameters: ''
    }, {
      name: 'remove',
      parameters: 'o,key'
    }, {
      name: 'replace',
      parameters: 'key,old,new'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_util_ItemCollection.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_ItemCollection.PROPERTIES());
    return Ext_util_MixedCollection.getProperties(properties);
  };

  Ext_util_ItemCollection.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_ItemCollection.EVENTS());
    return Ext_util_MixedCollection.getEvents(events);
  };

  _createClass(Ext_util_ItemCollection, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_MixedCollec.observedAttributes;
      Ext_util_ItemCollection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_ItemCollection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_ItemCollection(properties, events) {
    return _Ext_util_MixedCollec.call(this, properties.concat(Ext_util_ItemCollection.PROPERTIES()), events.concat(Ext_util_ItemCollection.EVENTS())) || this;
  }

  var _proto = Ext_util_ItemCollection.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_MixedCollec.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_MixedCollec.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_ItemCollection;
}(Ext_util_MixedCollection);

export { Ext_util_ItemCollection as default };