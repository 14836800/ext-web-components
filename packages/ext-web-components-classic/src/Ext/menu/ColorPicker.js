import Ext_menu_Menu from '../../Ext/menu/Menu.js';

export default class Ext_menu_ColorPicker extends Ext_menu_Menu {
    static PROPERTIES() {return [
    'actions',
    'activeChildTabIndex',
    'activeCounter',
    'activeItem',
    'alignOnScroll',
    'alignTarget',
    'allowFocusingDisabledChildren',
    'allowOtherMenus',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animateShadow',
    'animCollapse',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'ariaRole',
    'autoDestroy',
    'autoEl',
    'autoRender',
    'autoShow',
    'baseCls',
    'bbar',
    'bind',
    'bodyBorder',
    'bodyCls',
    'bodyPadding',
    'bodyStyle',
    'border',
    'bubbleEvents',
    'buttonAlign',
    'buttons',
    'childEls',
    'closable',
    'closeAction',
    'closeToolText',
    'cls',
    'collapsed',
    'collapsedCls',
    'collapseDirection',
    'collapseFirst',
    'collapseMode',
    'collapseToolText',
    'collapsible',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constrainHeader',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultButton',
    'defaultButtonTarget',
    'defaultDockWeights',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'detachOnRemove',
    'disabled',
    'disabledCls',
    'dock',
    'dockedItems',
    'draggable',
    'expandToolText',
    'fbar',
    'fixed',
    'flex',
    'floatable',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'frameHeader',
    'glyph',
    'header',
    'headerOverCls',
    'headerPosition',
    'height',
    'hidden',
    'hideCollapseTool',
    'hideMode',
    'hideOnClick',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'ignoreParentClicks',
    'inactiveChildTabIndex',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'lbar',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'maintainTitlePosition',
    'manageHeight',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'minButtonWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'mouseLeaveDelay',
    'nameable',
    'nameHolder',
    'overCls',
    'overlapHeader',
    'padding',
    'pickerId',
    'placeholder',
    'placeholderCollapseHideMode',
    'plain',
    'plugins',
    'publishes',
    'rbar',
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
    'showSeparator',
    'shrinkWrap',
    'shrinkWrapDock',
    'simpleDrag',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'tbar',
    'title',
    'titleAlign',
    'titleCollapse',
    'titlePosition',
    'titleRotation',
    'toFrontOnShow',
    'tools',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
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
    {name:'beforeclose', parameters:'panel'},
    {name:'beforecollapse', parameters:'p,direction,animate'},
    {name:'beforedeactivate', parameters:'sender'},
    {name:'beforedestroy', parameters:'sender'},
    {name:'beforeexpand', parameters:'p,animate'},
    {name:'beforehide', parameters:'sender'},
    {name:'beforeremove', parameters:'sender,component'},
    {name:'beforerender', parameters:'sender'},
    {name:'beforeshow', parameters:'sender'},
    {name:'beforestaterestore', parameters:'sender,state'},
    {name:'beforestatesave', parameters:'sender,state'},
    {name:'blur', parameters:'sender,event'},
    {name:'boxready', parameters:'sender,width,height'},
    {name:'childmove', parameters:'sender,component,prevIndex,newIndex'},
    {name:'click', parameters:''},
    {name:'close', parameters:'panel'},
    {name:'collapse', parameters:'p'},
    {name:'deactivate', parameters:'sender'},
    {name:'destroy', parameters:'sender'},
    {name:'disable', parameters:'sender'},
    {name:'dockedadd', parameters:'sender,component,index'},
    {name:'dockedremove', parameters:'sender,component'},
    {name:'enable', parameters:'sender'},
    {name:'expand', parameters:'p'},
    {name:'float', parameters:''},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'glyphchange', parameters:'sender,newGlyph,oldGlyph'},
    {name:'hide', parameters:'sender'},
    {name:'iconalignchange', parameters:'sender,newIconAlign,oldIconAlign'},
    {name:'iconchange', parameters:'sender,newIcon,oldIcon'},
    {name:'iconclschange', parameters:'sender,newIconCls,oldIconCls'},
    {name:'mouseenter', parameters:'menu,e'},
    {name:'mouseleave', parameters:'menu,e'},
    {name:'mouseover', parameters:'menu,item,e'},
    {name:'move', parameters:'sender,x,y'},
    {name:'remove', parameters:'sender,component'},
    {name:'removed', parameters:'sender,ownerCt'},
    {name:'render', parameters:'sender'},
    {name:'resize', parameters:'sender,width,height,oldWidth,oldHeight'},
    {name:'select', parameters:'sender,color'},
    {name:'show', parameters:'sender'},
    {name:'staterestore', parameters:'sender,state'},
    {name:'statesave', parameters:'sender,state'},
    {name:'titlealignchange', parameters:'sender,newTitleAlign,oldTitleAlign'},
    {name:'titlechange', parameters:'sender,newTitle,oldTitle'},
    {name:'titlepositionchange', parameters:'sender,newTitlePosition,oldTitlePosition'},
    {name:'titlerotationchange', parameters:'sender,newTitleRotation,oldTitleRotation'},
    {name:'unfloat', parameters:''},
    {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_menu_ColorPicker.PROPERTIES());
        return Ext_menu_Menu.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_menu_ColorPicker.EVENTS());
        return Ext_menu_Menu.getEvents(events);
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
        //for (var property in Ext_menu_ColorPicker.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_menu_ColorPicker.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_menu_ColorPicker.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_menu_ColorPicker.PROPERTIES()),
            events.concat(Ext_menu_ColorPicker.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
