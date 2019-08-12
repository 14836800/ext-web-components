import Ext_d3_hierarchy_TreeMap_Component from '../../../Ext/d3/hierarchy/TreeMap';

export default class Ext_pivot_d3_TreeMap_Component extends Ext_d3_hierarchy_TreeMap_Component {
//events
//configs

static XTYPE() {return 'pivottreemap'}
static PROPERTIESOBJECT() { return {
"autoExpand":["boolean"],
"matrix":["Ext.pivot.matrix.Base"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_pivot_d3_TreeMap_Component.METHODS(),
        Ext_pivot_d3_TreeMap_Component.XTYPE(),
        Ext_pivot_d3_TreeMap_Component.PROPERTIESOBJECT(),
        Ext_pivot_d3_TreeMap_Component.EVENTS()
    )
    this.XTYPE = Ext_pivot_d3_TreeMap_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_d3_TreeMap_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_pivot_d3_TreeMap_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_pivot_d3_TreeMap_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-pivottreemap', Ext_pivot_d3_TreeMap_Component);
  });
})();
