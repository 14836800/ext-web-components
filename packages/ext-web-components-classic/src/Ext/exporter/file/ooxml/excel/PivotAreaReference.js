import Ext_exporter_file_ooxml_Base from '../../../../../Ext/exporter/file/ooxml/Base.js';

export default class Ext_exporter_file_ooxml_excel_PivotAreaReference extends Ext_exporter_file_ooxml_Base {
  static PROPERTIES() { return [
    'autoGenerateId',
    'autoGenerateKey',
    'avgSubtotal',
    'byPosition',
    'count',
    'countASubtotal',
    'countSubtotal',
    'defaultSubtotal',
    'field',
    'generateTplAttributes',
    'id',
    'idPrefix',
    'items',
    'maxSubtotal',
    'minSubtotal',
    'productSubtotal',
    'relative',
    'selected',
    'stdDevPSubtotal',
    'stdDevSubtotal',
    'sumSubtotal',
    'tplAttributes',
    'tplNonAttributes',
    'varPSubtotal',
    'varSubtotal',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_PivotAreaReference.PROPERTIES());
    return Ext_exporter_file_ooxml_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_PivotAreaReference.EVENTS());
    return Ext_exporter_file_ooxml_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_ooxml_excel_PivotAreaReference.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_ooxml_excel_PivotAreaReference.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_ooxml_excel_PivotAreaReference.PROPERTIES()),
      events.concat(Ext_exporter_file_ooxml_excel_PivotAreaReference.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
