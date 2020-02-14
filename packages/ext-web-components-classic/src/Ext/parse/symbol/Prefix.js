import Ext_parse_Symbol from '../../../Ext/parse/Symbol.js';

export default class Ext_parse_symbol_Prefix extends Ext_parse_Symbol {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_parse_symbol_Prefix.PROPERTIES());
    return Ext_parse_Symbol.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_parse_symbol_Prefix.EVENTS());
    return Ext_parse_Symbol.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_parse_symbol_Prefix.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_parse_symbol_Prefix.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_parse_symbol_Prefix.PROPERTIES()),
      events.concat(Ext_parse_symbol_Prefix.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}