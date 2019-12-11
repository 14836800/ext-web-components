import Ext_button_Button from '../../Ext/button/Button.js';

export default class Ext_tab_Tab extends Ext_button_Button {
    static PROPERTIES() {return [
    'activeCounter',
    'alignOnScroll',
    'alignTarget',
    'allowDepress',
    'alwaysOnTop',
    'anchor',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'arrowAlign',
    'arrowCls',
    'arrowVisible',
    'autoEl',
    'autoRender',
    'autoShow',
    'baseCls',
    'baseParams',
    'bind',
    'border',
    'childEls',
    'clickEvent',
    'closable',
    'closeText',
    'cls',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultListenerScope',
    'destroyMenu',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'enableToggle',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'glyph',
    'handleMouseEvents',
    'handler',
    'height',
    'hidden',
    'hideMode',
    'href',
    'hrefTarget',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'menu',
    'menuAlign',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'overCls',
    'overflowText',
    'padding',
    'params',
    'plugins',
    'pressed',
    'preventDefault',
    'publishes',
    'reference',
    'region',
    'renderConfig',
    'renderData',
    'renderTo',
    'renderTpl',
    'repeat',
    'resizable',
    'resizeHandles',
    'rotation',
    'saveDelay',
    'scale',
    'scope',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'showEmptyMenu',
    'shrinkWrap',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'tabIndex',
    'tabPosition',
    'text',
    'textAlign',
    'toFrontOnShow',
    'toggleGroup',
    'toggleHandler',
    'tooltip',
    'tooltipType',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'value',
    'viewModel',
    'weight',
    'width',
    'xtype',
    ]};
    static EVENTS() {return [
    {name:'activate', parameters:'sender'},
    {name:'added', parameters:'sender,container,pos'},
    {name:'afterlayoutanimation', parameters:'sender'},
    {name:'afterrender', parameters:'sender'},
    {name:'beforeactivate', parameters:'sender'},
    {name:'beforeclose', parameters:'tab'},
    {name:'beforedeactivate', parameters:'sender'},
    {name:'beforedestroy', parameters:'sender'},
    {name:'beforehide', parameters:'sender'},
    {name:'beforerender', parameters:'sender'},
    {name:'beforeshow', parameters:'sender'},
    {name:'beforestaterestore', parameters:'sender,state'},
    {name:'beforestatesave', parameters:'sender,state'},
    {name:'beforetoggle', parameters:'sender,pressed'},
    {name:'blur', parameters:'sender,event'},
    {name:'boxready', parameters:'sender,width,height'},
    {name:'click', parameters:'sender,e'},
    {name:'close', parameters:'tab'},
    {name:'deactivate', parameters:'sender'},
    {name:'destroy', parameters:'sender'},
    {name:'disable', parameters:'sender'},
    {name:'enable', parameters:'sender'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'glyphchange', parameters:'sender,newGlyph,oldGlyph'},
    {name:'hide', parameters:'sender'},
    {name:'iconchange', parameters:'sender,oldIcon,newIcon'},
    {name:'menuhide', parameters:'sender,menu'},
    {name:'menushow', parameters:'sender,menu'},
    {name:'menutriggerout', parameters:'sender,menu,e'},
    {name:'menutriggerover', parameters:'sender,menu,e'},
    {name:'mouseout', parameters:'sender,e'},
    {name:'mouseover', parameters:'sender,e'},
    {name:'move', parameters:'sender,x,y'},
    {name:'removed', parameters:'sender,ownerCt'},
    {name:'render', parameters:'sender'},
    {name:'resize', parameters:'sender,width,height,oldWidth,oldHeight'},
    {name:'show', parameters:'sender'},
    {name:'staterestore', parameters:'sender,state'},
    {name:'statesave', parameters:'sender,state'},
    {name:'textchange', parameters:'sender,oldText,newText'},
    {name:'toggle', parameters:'sender,pressed'},
    {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_tab_Tab.PROPERTIES());
        return Ext_button_Button.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_tab_Tab.EVENTS());
        return Ext_button_Button.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return ''}
//static PROPERTIESOBJECT() { return {
//}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_tab_Tab.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_tab_Tab.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_tab_Tab.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_tab_Tab.PROPERTIES()),
            events.concat(Ext_tab_Tab.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
