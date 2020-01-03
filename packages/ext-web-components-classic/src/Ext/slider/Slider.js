import Ext_slider_Multi from '../../Ext/slider/Multi.js';

export default class Ext_slider_Slider extends Ext_slider_Multi {
    static PROPERTIES() {return [
    'activeCounter',
    'activeError',
    'activeErrorsTpl',
    'afterBodyEl',
    'afterLabelTextTpl',
    'afterLabelTpl',
    'afterSubTpl',
    'alignOnScroll',
    'alignTarget',
    'alwaysOnTop',
    'anchor',
    'animate',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaErrorText',
    'ariaHelp',
    'ariaLabel',
    'ariaLabelledBy',
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
    'border',
    'checkChangeBuffer',
    'checkChangeEvents',
    'childEls',
    'clickToChange',
    'cls',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constrainThumbs',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'decimalPrecision',
    'defaultAlign',
    'defaultListenerScope',
    'dirtyCls',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'errorMsgCls',
    'fieldBodyCls',
    'fieldCls',
    'fieldLabel',
    'fieldStyle',
    'fieldSubTpl',
    'fixed',
    'flex',
    'floating',
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
    'increment',
    'inputAttrTpl',
    'inputId',
    'inputType',
    'invalidCls',
    'invalidText',
    'isTextInput',
    'itemId',
    'keyIncrement',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'labelableRenderTpl',
    'labelAlign',
    'labelAttrTpl',
    'labelCls',
    'labelClsExtra',
    'labelPad',
    'labelSeparator',
    'labelStyle',
    'labelWidth',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxValue',
    'maxWidth',
    'minHeight',
    'minValue',
    'minWidth',
    'modal',
    'modelValidation',
    'msgTarget',
    'name',
    'nameable',
    'overCls',
    'padding',
    'pageSize',
    'plugins',
    'preventMark',
    'publishes',
    'publishOnComplete',
    'readOnly',
    'readOnlyCls',
    'reference',
    'region',
    'renderConfig',
    'renderData',
    'renderTo',
    'renderTpl',
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
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'submitValue',
    'tabIndex',
    'thumbPerValue',
    'tipText',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'useTips',
    'validateOnBlur',
    'validateOnChange',
    'validateOnFocusLeave',
    'validation',
    'validationField',
    'value',
    'valuePublishEvent',
    'values',
    'vertical',
    'viewModel',
    'weight',
    'width',
    'xtype',
    'zeroBasedSnapping',
    ]};
    static EVENTS() {return [
    {name:'activate', parameters:'sender'},
    {name:'added', parameters:'sender,container,pos'},
    {name:'afterlayoutanimation', parameters:'sender'},
    {name:'afterrender', parameters:'sender'},
    {name:'beforeactivate', parameters:'sender'},
    {name:'beforechange', parameters:'slider,newValue,oldValue,thumb,type'},
    {name:'beforedeactivate', parameters:'sender'},
    {name:'beforedestroy', parameters:'sender'},
    {name:'beforehide', parameters:'sender'},
    {name:'beforerender', parameters:'sender'},
    {name:'beforeshow', parameters:'sender'},
    {name:'beforestaterestore', parameters:'sender,state'},
    {name:'beforestatesave', parameters:'sender,state'},
    {name:'blur', parameters:'sender,event'},
    {name:'boxready', parameters:'sender,width,height'},
    {name:'change', parameters:'slider,newValue,thumb,type'},
    {name:'changecomplete', parameters:'slider,newValue,thumb'},
    {name:'deactivate', parameters:'sender'},
    {name:'destroy', parameters:'sender'},
    {name:'dirtychange', parameters:'sender,isDirty'},
    {name:'disable', parameters:'sender'},
    {name:'drag', parameters:'slider,e'},
    {name:'dragend', parameters:'slider,e'},
    {name:'dragstart', parameters:'slider,e'},
    {name:'enable', parameters:'sender'},
    {name:'errorchange', parameters:'sender,error'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'hide', parameters:'sender'},
    {name:'move', parameters:'sender,x,y'},
    {name:'removed', parameters:'sender,ownerCt'},
    {name:'render', parameters:'sender'},
    {name:'resize', parameters:'sender,width,height,oldWidth,oldHeight'},
    {name:'show', parameters:'sender'},
    {name:'specialkey', parameters:'sender,e'},
    {name:'staterestore', parameters:'sender,state'},
    {name:'statesave', parameters:'sender,state'},
    {name:'validitychange', parameters:'sender,isValid'},
    {name:'writeablechange', parameters:'sender,Read'},
    {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_slider_Slider.PROPERTIES());
        return Ext_slider_Multi.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_slider_Slider.EVENTS());
        return Ext_slider_Multi.getEvents(events);
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
        //for (var property in Ext_slider_Slider.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_slider_Slider.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_slider_Slider.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_slider_Slider.PROPERTIES()),
            events.concat(Ext_slider_Slider.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}