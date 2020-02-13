import Ext_data_request_Base from '../../../Ext/data/request/Base.js';

export default class Ext_data_request_Ajax extends Ext_data_request_Base {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_request_Ajax.PROPERTIES());
    return Ext_data_request_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_request_Ajax.EVENTS());
    return Ext_data_request_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_request_Ajax.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_request_Ajax.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_request_Ajax.PROPERTIES()),
      events.concat(Ext_data_request_Ajax.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
