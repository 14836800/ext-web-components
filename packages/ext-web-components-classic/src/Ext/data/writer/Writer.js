import Ext_Base from '../../../Ext/Base.js';

export default class Ext_data_writer_Writer extends Ext_Base {
  static PROPERTIES() { return [
    'allDataOptions',
    'clientIdProperty',
    'dateFormat',
    'nameProperty',
    'partialDataOptions',
    'transform',
    'writeAllFields',
    'writeRecordId',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_writer_Writer.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_writer_Writer.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_writer_Writer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_writer_Writer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_writer_Writer.PROPERTIES()),
      events.concat(Ext_data_writer_Writer.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
