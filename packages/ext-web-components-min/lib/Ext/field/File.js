import Ext_field_Text_Component from '../../Ext/field/Text';

export default class Ext_field_File_Component extends Ext_field_Text_Component {
//events
//configs

static XTYPE() {return 'filefield'}
static PROPERTIESOBJECT() { return {
"accept":["string"],
"capture":["string"],
"multiple":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getFiles',function: function() { return this.ext.getFiles() } },
{ name:'reset',function: function() { return this.ext.reset() } },
]}

constructor() {
    super (
        Ext_field_File_Component.METHODS(),
        Ext_field_File_Component.XTYPE(),
        Ext_field_File_Component.PROPERTIESOBJECT(),
        Ext_field_File_Component.EVENTS()
    )
    this.XTYPE = Ext_field_File_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_File_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_field_File_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_field_File_Component.EVENTS());
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
    window.customElements.define('ext-filefield', Ext_field_File_Component);
  });
})();
