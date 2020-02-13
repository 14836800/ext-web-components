import Ext_util_Group from '../../Ext/util/Group.js';

export default class Ext_data_Group extends Ext_util_Group {
  static PROPERTIES() { return [
    'autoGroup',
    'autoSort',
    'decoder',
    'defaultSortDirection',
    'extraKeys',
    'filters',
    'groupConfig',
    'grouper',
    'groups',
    'keyFn',
    'listeners',
    'multiSortLimit',
    'rootProperty',
    'sorters',
    'source',
    'trackGroups',
  ]};
  static EVENTS() { return [
    {name:'add', parameters:'collection,details'},
    {name:'beforeitemchange', parameters:'collection,details'},
    {name:'beforesort', parameters:'collection,sorters'},
    {name:'beginupdate', parameters:'collection'},
    {name:'endupdate', parameters:'collection'},
    {name:'itemchange', parameters:'collection,details'},
    {name:'refresh', parameters:'collection'},
    {name:'remove', parameters:'collection,details'},
    {name:'sort', parameters:'collection'},
    {name:'updatekey', parameters:'collection,details'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_Group.PROPERTIES());
    return Ext_util_Group.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_Group.EVENTS());
    return Ext_util_Group.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_Group.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_Group.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_Group.PROPERTIES()),
      events.concat(Ext_data_Group.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
