import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_plugin_Editing from '../../../Ext/grid/plugin/Editing.js';

var Ext_grid_plugin_CellEditing = /*#__PURE__*/function (_Ext_grid_plugin_Edit) {
  _inheritsLoose(Ext_grid_plugin_CellEditing, _Ext_grid_plugin_Edit);

  var _super = _createSuper(Ext_grid_plugin_CellEditing);

  Ext_grid_plugin_CellEditing.PROPERTIES = function PROPERTIES() {
    return ['clicksToEdit', 'default', 'id', 'listeners', 'stateEvents', 'triggerEvent'];
  };

  Ext_grid_plugin_CellEditing.EVENTS = function EVENTS() {
    return [{
      name: 'beforeedit',
      parameters: 'editor,context'
    }, {
      name: 'canceledit',
      parameters: 'editor,context'
    }, {
      name: 'edit',
      parameters: 'editor,context'
    }, {
      name: 'validateedit',
      parameters: 'editor,context'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_CellEditing.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_CellEditing.PROPERTIES());
    return Ext_grid_plugin_Editing.getProperties(properties);
  };

  Ext_grid_plugin_CellEditing.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_CellEditing.EVENTS());
    return Ext_grid_plugin_Editing.getEvents(events);
  };

  _createClass(Ext_grid_plugin_CellEditing, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_plugin_Edit.observedAttributes;
      Ext_grid_plugin_CellEditing.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_CellEditing.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_plugin_CellEditing(properties, events) {
    return _Ext_grid_plugin_Edit.call(this, properties.concat(Ext_grid_plugin_CellEditing.PROPERTIES()), events.concat(Ext_grid_plugin_CellEditing.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_CellEditing.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_plugin_Edit.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_plugin_Edit.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_plugin_CellEditing;
}(Ext_grid_plugin_Editing);

export { Ext_grid_plugin_CellEditing as default };