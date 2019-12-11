import Ext_grid_column_Column from '../../Ext/grid/column/Column.js';

export default class Ext_grid_ActionColumn extends Ext_grid_column_Column {
    static PROPERTIES() {return [
    'actions',
    'activeChildTabIndex',
    'activeCounter',
    'activeItem',
    'align',
    'alignOnScroll',
    'alignTarget',
    'allowFocusingDisabledChildren',
    'altText',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoEl',
    'autoRender',
    'autoShow',
    'baseCls',
    'bind',
    'border',
    'bubbleEvents',
    'cellFocusable',
    'cellWrap',
    'childEls',
    'cls',
    'columns',
    'columnsText',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'dataIndex',
    'defaultAlign',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'defaultWidth',
    'detachOnRemove',
    'dirtyText',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'editor',
    'editRenderer',
    'emptyCellText',
    'enableColumnHide',
    'enableTextSelection',
    'exportRenderer',
    'exportStyle',
    'exportSummaryRenderer',
    'flex',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'formatter',
    'formBind',
    'frame',
    'getClass',
    'getTip',
    'glyph',
    'groupable',
    'handler',
    'headerWrap',
    'height',
    'hidden',
    'hideable',
    'hideMode',
    'html',
    'icon',
    'iconCls',
    'id',
    'ignoreExport',
    'inactiveChildTabIndex',
    'isActionDisabled',
    'itemAriaRole',
    'itemId',
    'items',
    'itemTabIndex',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'lockable',
    'locked',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'menuDisabled',
    'menuText',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'nameHolder',
    'overCls',
    'padding',
    'plugins',
    'producesHTML',
    'publishes',
    'reference',
    'referenceHolder',
    'region',
    'renderConfig',
    'renderData',
    'renderer',
    'renderTo',
    'renderTpl',
    'resetFocusPosition',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scope',
    'scrollable',
    'sealed',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'sortable',
    'sortAscText',
    'sortClearText',
    'sortDescText',
    'sorter',
    'stateEvents',
    'stateful',
    'stateId',
    'stopSelection',
    'style',
    'summaryRenderer',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'tdCls',
    'text',
    'toFrontOnShow',
    'tooltip',
    'tooltipType',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'updater',
    'userCls',
    'variableRowHeight',
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
    {name:'childmove', parameters:'sender,component,prevIndex,newIndex'},
    {name:'columnhide', parameters:'ct,column'},
    {name:'columnmove', parameters:'ct,column,fromIdx,toIdx'},
    {name:'columnresize', parameters:'ct,column,width'},
    {name:'columnschanged', parameters:'ct'},
    {name:'columnshow', parameters:'ct,column'},
    {name:'deactivate', parameters:'sender'},
    {name:'destroy', parameters:'sender'},
    {name:'disable', parameters:'sender'},
    {name:'enable', parameters:'sender'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'headerclick', parameters:'ct,column,e,t'},
    {name:'headercontextmenu', parameters:'ct,column,e,t'},
    {name:'headertriggerclick', parameters:'ct,column,e,t'},
    {name:'hide', parameters:'sender'},
    {name:'menucreate', parameters:'ct,menu'},
    {name:'move', parameters:'sender,x,y'},
    {name:'remove', parameters:'sender,component'},
    {name:'removed', parameters:'sender,ownerCt'},
    {name:'render', parameters:'sender'},
    {name:'resize', parameters:'sender,width,height,oldWidth,oldHeight'},
    {name:'show', parameters:'sender'},
    {name:'sortchange', parameters:'ct,column,direction'},
    {name:'staterestore', parameters:'sender,state'},
    {name:'statesave', parameters:'sender,state'},
    {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_ActionColumn.PROPERTIES());
        return Ext_grid_column_Column.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_ActionColumn.EVENTS());
        return Ext_grid_column_Column.getEvents(events);
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
        //for (var property in Ext_grid_ActionColumn.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_grid_ActionColumn.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_grid_ActionColumn.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_grid_ActionColumn.PROPERTIES()),
            events.concat(Ext_grid_ActionColumn.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
