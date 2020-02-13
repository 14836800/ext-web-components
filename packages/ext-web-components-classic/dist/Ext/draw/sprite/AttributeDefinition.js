import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_draw_sprite_AttributeDefinition =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_draw_sprite_AttributeDefinition, _Ext_Base);

  Ext_draw_sprite_AttributeDefinition.PROPERTIES = function PROPERTIES() {
    return ['aliases', 'animationProcessors', 'defaults', 'processors', 'triggers', 'updaters'];
  };

  Ext_draw_sprite_AttributeDefinition.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_draw_sprite_AttributeDefinition.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_sprite_AttributeDefinition.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_draw_sprite_AttributeDefinition.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_sprite_AttributeDefinition.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_draw_sprite_AttributeDefinition, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_draw_sprite_AttributeDefinition.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_sprite_AttributeDefinition.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_sprite_AttributeDefinition(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_draw_sprite_AttributeDefinition.PROPERTIES()), events.concat(Ext_draw_sprite_AttributeDefinition.EVENTS())) || this;
  }

  var _proto = Ext_draw_sprite_AttributeDefinition.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_sprite_AttributeDefinition;
}(Ext_Base);

export { Ext_draw_sprite_AttributeDefinition as default };