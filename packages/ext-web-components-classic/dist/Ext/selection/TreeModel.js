import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_selection_RowModel from '../../Ext/selection/RowModel.js';

var Ext_selection_TreeModel = /*#__PURE__*/function (_Ext_selection_RowMod) {
  _inheritsLoose(Ext_selection_TreeModel, _Ext_selection_RowMod);

  var _super = _createSuper(Ext_selection_TreeModel);

  Ext_selection_TreeModel.PROPERTIES = function PROPERTIES() {
    return ['allowDeselect', 'deselectOnContainerClick', 'enableKeyNav', 'ignoreRightMouseSelection', 'listeners', 'mode', 'ordered', 'pruneRemoved', 'selected', 'selectOnExpanderClick', 'store', 'toggleOnClick'];
  };

  Ext_selection_TreeModel.EVENTS = function EVENTS() {
    return [{
      name: 'beforedeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'beforeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'deselect',
      parameters: 'sender,record,index'
    }, {
      name: 'focuschange',
      parameters: 'sender,oldFocused,newFocused'
    }, {
      name: 'select',
      parameters: 'sender,record,index'
    }, {
      name: 'selectionchange',
      parameters: 'sender,selected'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_selection_TreeModel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_selection_TreeModel.PROPERTIES());
    return Ext_selection_RowModel.getProperties(properties);
  };

  Ext_selection_TreeModel.getEvents = function getEvents(events) {
    events = events.concat(Ext_selection_TreeModel.EVENTS());
    return Ext_selection_RowModel.getEvents(events);
  };

  _createClass(Ext_selection_TreeModel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_selection_RowMod.observedAttributes;
      Ext_selection_TreeModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_selection_TreeModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_selection_TreeModel(properties, events) {
    return _Ext_selection_RowMod.call(this, properties.concat(Ext_selection_TreeModel.PROPERTIES()), events.concat(Ext_selection_TreeModel.EVENTS())) || this;
  }

  var _proto = Ext_selection_TreeModel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_selection_RowMod.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_selection_RowMod.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_selection_TreeModel;
}(Ext_selection_RowModel);

export { Ext_selection_TreeModel as default };