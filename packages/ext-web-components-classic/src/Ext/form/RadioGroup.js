import Ext_form_CheckboxGroup from '../../Ext/form/CheckboxGroup.js';

export default class Ext_form_RadioGroup extends Ext_form_CheckboxGroup {
    static PROPERTIES() {return [
    'actions',
    'activeChildTabIndex',
    'activeCounter',
    'activeError',
    'activeErrorsTpl',
    'activeItem',
    'afterBodyEl',
    'afterLabelTextTpl',
    'afterLabelTpl',
    'afterSubTpl',
    'alignOnScroll',
    'alignTarget',
    'allowBlank',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaErrorText',
    'ariaHelp',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoEl',
    'autoFitErrors',
    'autoRender',
    'autoShow',
    'baseBodyCls',
    'baseCls',
    'beforeBodyEl',
    'beforeLabelTextTpl',
    'beforeLabelTpl',
    'beforeSubTpl',
    'bind',
    'blankText',
    'border',
    'bubbleEvents',
    'childEls',
    'cls',
    'columns',
    'columnWidth',
    'combineErrors',
    'combineLabels',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'detachOnRemove',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'errorMsgCls',
    'fieldBodyCls',
    'fieldDefaults',
    'fieldLabel',
    'fixed',
    'flex',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'formItemCls',
    'frame',
    'height',
    'hidden',
    'hideEmptyLabel',
    'hideLabel',
    'hideMode',
    'html',
    'id',
    'inactiveChildTabIndex',
    'invalidCls',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'labelableRenderTpl',
    'labelAlign',
    'labelAttrTpl',
    'labelCls',
    'labelClsExtra',
    'labelConnector',
    'labelPad',
    'labelSeparator',
    'labelStyle',
    'labelWidth',
    'layout',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'local',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'msgTarget',
    'name',
    'nameable',
    'nameHolder',
    'overCls',
    'padding',
    'plugins',
    'preventMark',
    'publishes',
    'reference',
    'referenceHolder',
    'region',
    'renderConfig',
    'renderData',
    'renderTo',
    'renderTpl',
    'resetFocusPosition',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'simpleValue',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'submitValue',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'validateOnChange',
    'validation',
    'validationField',
    'value',
    'valuePublishEvent',
    'vertical',
    'viewModel',
    'weight',
    'width',
    'xtype',
    ]};
    static EVENTS() {return [
    {name:'activate', parameters:'sender'},
    {name:'add', parameters:'sender,component,index'},
    {name:'added', parameters:'sender,container,pos'},
    {name:'afterlayout', parameters:'sender,layout'},
    {name:'afterlayoutanimation', parameters:'sender'},
    {name:'afterrender', parameters:'sender'},
    {name:'beforeactivate', parameters:'sender'},
    {name:'beforeadd', parameters:'sender,component,index'},
    {name:'beforedeactivate', parameters:'sender'},
    {name:'beforedestroy', parameters:'sender'},
    {name:'beforehide', parameters:'sender'},
    {name:'beforeremove', parameters:'sender,component'},
    {name:'beforerender', parameters:'sender'},
    {name:'beforeshow', parameters:'sender'},
    {name:'beforestaterestore', parameters:'sender,state'},
    {name:'beforestatesave', parameters:'sender,state'},
    {name:'blur', parameters:'sender,event'},
    {name:'boxready', parameters:'sender,width,height'},
    {name:'change', parameters:'sender,newValue,oldValue'},
    {name:'childmove', parameters:'sender,component,prevIndex,newIndex'},
    {name:'deactivate', parameters:'sender'},
    {name:'destroy', parameters:'sender'},
    {name:'dirtychange', parameters:'sender,isDirty'},
    {name:'disable', parameters:'sender'},
    {name:'enable', parameters:'sender'},
    {name:'errorchange', parameters:'sender,error'},
    {name:'fielderrorchange', parameters:'sender,field,error'},
    {name:'fieldvaliditychange', parameters:'sender,field,isValid'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'hide', parameters:'sender'},
    {name:'move', parameters:'sender,x,y'},
    {name:'remove', parameters:'sender,component'},
    {name:'removed', parameters:'sender,ownerCt'},
    {name:'render', parameters:'sender'},
    {name:'resize', parameters:'sender,width,height,oldWidth,oldHeight'},
    {name:'show', parameters:'sender'},
    {name:'staterestore', parameters:'sender,state'},
    {name:'statesave', parameters:'sender,state'},
    {name:'validitychange', parameters:'sender,isValid'},
    {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_form_RadioGroup.PROPERTIES());
        return Ext_form_CheckboxGroup.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_form_RadioGroup.EVENTS());
        return Ext_form_CheckboxGroup.getEvents(events);
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
        //for (var property in Ext_form_RadioGroup.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_form_RadioGroup.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_form_RadioGroup.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_form_RadioGroup.PROPERTIES()),
            events.concat(Ext_form_RadioGroup.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}