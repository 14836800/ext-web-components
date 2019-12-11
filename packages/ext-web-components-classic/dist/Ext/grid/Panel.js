import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Table from '../../Ext/panel/Table.js';

var Ext_grid_Panel =
/*#__PURE__*/
function (_Ext_panel_Table) {
  _inheritsLoose(Ext_grid_Panel, _Ext_panel_Table);

  Ext_grid_Panel.PROPERTIES = function PROPERTIES() {
    return ['actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignOnScroll', 'alignTarget', 'allowDeselect', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'animCollapse', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoLoad', 'autoRender', 'autoShow', 'baseCls', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bubbleEvents', 'bufferedRenderer', 'buttonAlign', 'buttons', 'childEls', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsedCls', 'collapseDirection', 'collapseFirst', 'collapseMode', 'collapseToolText', 'collapsible', 'columnLines', 'columns', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constrainHeader', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultButton', 'defaultButtonTarget', 'defaultDockWeights', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferRowRender', 'detachOnRemove', 'disabled', 'disabledCls', 'disableSelection', 'dock', 'dockedItems', 'draggable', 'emptyText', 'enableColumnHide', 'enableColumnMove', 'enableColumnResize', 'enableLocking', 'expandToolText', 'fbar', 'features', 'fixed', 'flex', 'floatable', 'floating', 'focusableContainer', 'focusCls', 'focused', 'focusOnToFront', 'forceFit', 'formBind', 'frame', 'frameHeader', 'glyph', 'header', 'headerBorders', 'headerOverCls', 'headerPosition', 'height', 'hidden', 'hideCollapseTool', 'hideHeaders', 'hideMode', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'leadingBufferZone', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'lockedGridConfig', 'lockedViewConfig', 'lockText', 'maintainTitlePosition', 'manageHeight', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'multiColumnSort', 'nameable', 'nameHolder', 'normalGridConfig', 'normalViewConfig', 'numFromEdge', 'overCls', 'overlapHeader', 'padding', 'placeholder', 'placeholderCollapseHideMode', 'plugins', 'preciseHeight', 'publishes', 'rbar', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'reserveScrollbar', 'resetFocusPosition', 'resizable', 'resizeHandles', 'rowLines', 'rowViewModel', 'saveDelay', 'scrollable', 'sealedColumns', 'selection', 'selModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'shrinkWrapDock', 'simpleDrag', 'sortableColumns', 'split', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'subGridXType', 'suspendLayout', 'syncRowHeight', 'tabGuard', 'tabIndex', 'tbar', 'title', 'titleAlign', 'titleCollapse', 'titlePosition', 'titleRotation', 'toFrontOnShow', 'tools', 'touchAction', 'tpl', 'tplWriteMode', 'trailingBufferZone', 'twoWayBindable', 'ui', 'uiCls', 'unlockText', 'userCls', 'view', 'viewConfig', 'viewModel', 'viewType', 'weight', 'width', 'xtype'];
  };

  Ext_grid_Panel.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'sender'
    }, {
      name: 'add',
      parameters: 'sender,component,index'
    }, {
      name: 'added',
      parameters: 'sender,container,pos'
    }, {
      name: 'afterlayout',
      parameters: 'sender,layout'
    }, {
      name: 'afterlayoutanimation',
      parameters: 'sender'
    }, {
      name: 'afterrender',
      parameters: 'sender'
    }, {
      name: 'beforeactivate',
      parameters: 'sender'
    }, {
      name: 'beforeadd',
      parameters: 'sender,component,index'
    }, {
      name: 'beforecellclick',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'beforecellcontextmenu',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'beforecelldblclick',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'beforecellkeydown',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'beforecellmousedown',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'beforecellmouseup',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'beforeclose',
      parameters: 'panel'
    }, {
      name: 'beforecollapse',
      parameters: 'p,direction,animate'
    }, {
      name: 'beforecontainerclick',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainercontextmenu',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainerdblclick',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainerkeydown',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainerkeypress',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainerkeyup',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainermousedown',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainermouseout',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainermouseover',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainermouseup',
      parameters: 'sender,e'
    }, {
      name: 'beforedeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'beforedestroy',
      parameters: 'sender'
    }, {
      name: 'beforeexpand',
      parameters: 'p,animate'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeitemclick',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemcontextmenu',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemdblclick',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemkeydown',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemkeypress',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemkeyup',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemlongpress',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemmousedown',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemmouseenter',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemmouseleave',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemmouseup',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeload',
      parameters: 'store,operation'
    }, {
      name: 'beforereconfigure',
      parameters: 'sender,store,columns,oldStore,oldColumns'
    }, {
      name: 'beforeremove',
      parameters: 'sender,component'
    }, {
      name: 'beforerender',
      parameters: 'sender'
    }, {
      name: 'beforerowbodyclick',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodycontextmenu',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodydblclick',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodykeydown',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodykeypress',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodykeyup',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodylongpress',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodymousedown',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodymouseup',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowexit',
      parameters: 'sender,keyEvent,prevRow,nextRow,forward'
    }, {
      name: 'beforeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'beforeselectionextend',
      parameters: 'grid,An,extension'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforestaterestore',
      parameters: 'sender,state'
    }, {
      name: 'beforestatesave',
      parameters: 'sender,state'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'boxready',
      parameters: 'sender,width,height'
    }, {
      name: 'cellclick',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'cellcontextmenu',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'celldblclick',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'cellkeydown',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'cellmousedown',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'cellmouseup',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'childmove',
      parameters: 'sender,component,prevIndex,newIndex'
    }, {
      name: 'close',
      parameters: 'panel'
    }, {
      name: 'collapse',
      parameters: 'p'
    }, {
      name: 'columnhide',
      parameters: 'ct,column'
    }, {
      name: 'columnmove',
      parameters: 'ct,column,fromIdx,toIdx'
    }, {
      name: 'columnresize',
      parameters: 'ct,column,width'
    }, {
      name: 'columnschanged',
      parameters: 'ct'
    }, {
      name: 'columnshow',
      parameters: 'ct,column'
    }, {
      name: 'containerclick',
      parameters: 'sender,e'
    }, {
      name: 'containercontextmenu',
      parameters: 'sender,e'
    }, {
      name: 'containerdblclick',
      parameters: 'sender,e'
    }, {
      name: 'containerkeydown',
      parameters: 'sender,e'
    }, {
      name: 'containerkeypress',
      parameters: 'sender,e'
    }, {
      name: 'containerkeyup',
      parameters: 'sender,e'
    }, {
      name: 'containermousedown',
      parameters: 'sender,e'
    }, {
      name: 'containermouseout',
      parameters: 'sender,e'
    }, {
      name: 'containermouseover',
      parameters: 'sender,e'
    }, {
      name: 'containermouseup',
      parameters: 'sender,e'
    }, {
      name: 'deactivate',
      parameters: 'sender'
    }, {
      name: 'deselect',
      parameters: 'sender,record,index'
    }, {
      name: 'destroy',
      parameters: 'sender'
    }, {
      name: 'disable',
      parameters: 'sender'
    }, {
      name: 'dockedadd',
      parameters: 'sender,component,index'
    }, {
      name: 'dockedremove',
      parameters: 'sender,component'
    }, {
      name: 'enable',
      parameters: 'sender'
    }, {
      name: 'expand',
      parameters: 'p'
    }, {
      name: 'filteractivate',
      parameters: 'sender,column'
    }, {
      name: 'filterchange',
      parameters: 'store,filters'
    }, {
      name: 'filterdeactivate',
      parameters: 'sender,column'
    }, {
      name: 'float',
      parameters: ''
    }, {
      name: 'focus',
      parameters: 'sender,event'
    }, {
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'glyphchange',
      parameters: 'sender,newGlyph,oldGlyph'
    }, {
      name: 'groupchange',
      parameters: 'store,grouper'
    }, {
      name: 'headerclick',
      parameters: 'ct,column,e,t'
    }, {
      name: 'headercontextmenu',
      parameters: 'ct,column,e,t'
    }, {
      name: 'headermenucreate',
      parameters: 'grid,menu,headerCt'
    }, {
      name: 'headertriggerclick',
      parameters: 'ct,column,e,t'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'iconalignchange',
      parameters: 'sender,newIconAlign,oldIconAlign'
    }, {
      name: 'iconchange',
      parameters: 'sender,newIcon,oldIcon'
    }, {
      name: 'iconclschange',
      parameters: 'sender,newIconCls,oldIconCls'
    }, {
      name: 'itemclick',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemcontextmenu',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemdblclick',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemkeydown',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemkeypress',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemkeyup',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemlongpress',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemmousedown',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemmouseup',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'load',
      parameters: 'sender,records,successful,operation'
    }, {
      name: 'lockcolumn',
      parameters: 'sender,column'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'processcolumns',
      parameters: 'lockedColumns,normalColumns'
    }, {
      name: 'reconfigure',
      parameters: 'sender,store,columns,oldStore,oldColumns'
    }, {
      name: 'remove',
      parameters: 'sender,component'
    }, {
      name: 'removed',
      parameters: 'sender,ownerCt'
    }, {
      name: 'render',
      parameters: 'sender'
    }, {
      name: 'resize',
      parameters: 'sender,width,height,oldWidth,oldHeight'
    }, {
      name: 'rowbodyclick',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodycontextmenu',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodydblclick',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodykeydown',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodykeypress',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodykeyup',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodylongpress',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodymousedown',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodymouseup',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowclick',
      parameters: 'sender,record,element,rowIndex,e'
    }, {
      name: 'rowcontextmenu',
      parameters: 'sender,record,tr,rowIndex,e'
    }, {
      name: 'rowdblclick',
      parameters: 'sender,record,element,rowIndex,e'
    }, {
      name: 'rowkeydown',
      parameters: 'sender,record,element,rowIndex,e'
    }, {
      name: 'rowmousedown',
      parameters: 'sender,record,tr,rowIndex,e'
    }, {
      name: 'rowmouseup',
      parameters: 'sender,record,element,rowIndex,e'
    }, {
      name: 'select',
      parameters: 'sender,record,index'
    }, {
      name: 'selectionchange',
      parameters: 'sender,selected'
    }, {
      name: 'selectionextenderdrag',
      parameters: 'grid,An,extension'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'sortchange',
      parameters: 'ct,column,direction'
    }, {
      name: 'staterestore',
      parameters: 'sender,state'
    }, {
      name: 'statesave',
      parameters: 'sender,state'
    }, {
      name: 'titlealignchange',
      parameters: 'sender,newTitleAlign,oldTitleAlign'
    }, {
      name: 'titlechange',
      parameters: 'sender,newTitle,oldTitle'
    }, {
      name: 'titlepositionchange',
      parameters: 'sender,newTitlePosition,oldTitlePosition'
    }, {
      name: 'titlerotationchange',
      parameters: 'sender,newTitleRotation,oldTitleRotation'
    }, {
      name: 'unfloat',
      parameters: ''
    }, {
      name: 'unlockcolumn',
      parameters: 'sender,column'
    }, {
      name: 'viewready',
      parameters: 'sender'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_grid_Panel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_Panel.PROPERTIES());
    return Ext_panel_Table.getProperties(properties);
  };

  Ext_grid_Panel.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_Panel.EVENTS());
    return Ext_panel_Table.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return ''}
  //static PROPERTIESOBJECT() { return {
  //}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_grid_Panel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_panel_Table.observedAttributes; //for (var property in Ext_grid_Panel.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_grid_Panel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_Panel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_Panel(properties, events) {
    return _Ext_panel_Table.call(this, properties.concat(Ext_grid_Panel.PROPERTIES()), events.concat(Ext_grid_Panel.EVENTS())) || this;
  }

  var _proto = Ext_grid_Panel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_panel_Table.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_panel_Table.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_Panel;
}(Ext_panel_Table);

export { Ext_grid_Panel as default };