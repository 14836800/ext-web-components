import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import ExtBase from './base';
export var ExtComboboxfieldComponent =
/*#__PURE__*/
function (_ExtBase) {
  _inheritsLoose(ExtComboboxfieldComponent, _ExtBase);

  ExtComboboxfieldComponent.XTYPE = function XTYPE() {
    return 'comboboxfield';
  };

  ExtComboboxfieldComponent.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "alignTarget": "String",
      "allQuery": "String",
      "alwaysOnTop": "Boolean/Number",
      "animateUnderline": "Boolean",
      "anyMatch": "Boolean",
      "ariaAttributes": "Object",
      "ariaDescribedBy": "String",
      "ariaLabel": "String",
      "ariaLabelledBy": "String",
      "autoCapitalize": "Boolean",
      "autoComplete": "Boolean",
      "autoCorrect": "Boolean",
      "autoFitErrors": "Boolean",
      "autoFocus": "Boolean",
      "autoFocusLast": "Boolean",
      "autoHideInputMask": "Boolean",
      "autoLoadOnValue": "Boolean",
      "autoSelect": "Boolean",
      "axisLock": "Boolean",
      "badFormatMessage": "String",
      "bind": "Object/String",
      "bodyAlign": "any",
      "border": "Boolean",
      "bottom": "Number/String",
      "caseSensitive": "Boolean",
      "centered": "Boolean",
      "chipView": "any",
      "clearable": "Boolean",
      "cls": "String/String[]",
      "collapseOnSelect": "Boolean",
      "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
      "contentEl": "Ext.dom.Element/HTMLElement/String",
      "controller": "String/Object/Ext.app.ViewController",
      "data": "Object",
      "defaultListenerScope": "Boolean",
      "delimiter": "String",
      "disabled": "Boolean",
      "displayed": "Boolean",
      "displayField": "String/Number",
      "displayTpl": "String/String[]/Ext.XTemplate",
      "docked": "String",
      "draggable": "Boolean/Object/Ext.drag.Source",
      "edgePicker": "Object",
      "editable": "Boolean",
      "enableRegEx": "Boolean",
      "error": "String/String[]",
      "errorMessage": "String",
      "errorTarget": "String",
      "errorTip": "Object",
      "errorTpl": "String/String[]/Ext.XTemplate",
      "flex": "Number/String/Object",
      "floated": "Boolean",
      "floatedPicker": "Object",
      "floatedPickerAlign": "String",
      "focusCls": "String",
      "focusTrap": "any",
      "forceSelection": "Boolean",
      "fullscreen": "Boolean",
      "height": "Number/String",
      "hidden": "Boolean",
      "hiddenName": "String",
      "hideAnimation": "String/Mixed",
      "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
      "hideOnMaskTap": "Boolean",
      "hideTrigger": "Boolean",
      "html": "String/Ext.dom.Element/HTMLElement",
      "id": "String",
      "inline": "Boolean",
      "inputMask": "String/Ext.field.InputMask",
      "inputType": "String",
      "inputValue": "any",
      "instanceCls": "String/String[]",
      "itemCls": "String",
      "itemId": "String",
      "itemTpl": "String/Ext.XTemplate",
      "keyMap": "Object",
      "keyMapEnabled": "Boolean",
      "keyMapTarget": "String",
      "label": "String",
      "labelAlign": "'top'/'left'/'bottom'/'right'",
      "labelCls": "String",
      "labelInPlaceholder": "any",
      "labelMinWidth": "Number/String",
      "labelTextAlign": "'top'/'right'/'bottom'/'left'",
      "labelWidth": "Number/String",
      "labelWrap": "Boolean",
      "left": "Number/String",
      "listeners": "Object",
      "margin": "Number/String",
      "matchFieldWidth": "Boolean",
      "maxHeight": "Number/String",
      "maxLength": "Number",
      "maxWidth": "Number/String",
      "minChars": "Number",
      "minHeight": "Number/String",
      "minWidth": "Number/String",
      "modal": "Boolean",
      "modelValidation": "Boolean",
      "multiSelect": "Boolean",
      "name": "String",
      "nameable": "Boolean",
      "options": "Array",
      "padding": "Number/String",
      "parseValidator": "Ext.data.validator.Validator",
      "pattern": "String",
      "picker": "String/Object",
      "pickerSlotAlign": "String",
      "placeholder": "String",
      "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
      "primaryFilter": "Function/String/Object/Ext.util.Filter",
      "publishes": "String/String[]/Object",
      "queryCaching": "Boolean",
      "queryDelay": "Number",
      "queryMode": "String",
      "queryParam": "String",
      "readOnly": "Boolean",
      "record": "Ext.data.Model",
      "recordCreator": "Function/String",
      "recordCreatorScope": "Object",
      "reference": "String",
      "relative": "Boolean",
      "renderTo": "Ext.dom.Element",
      "required": "Boolean",
      "requiredMessage": "String",
      "right": "Number/String",
      "ripple": "Boolean/Object/String",
      "scrollable": "Boolean/String/Object",
      "selection": "Ext.data.Model",
      "selectOnTab": "Boolean",
      "selfAlign": "String",
      "session": "Boolean/Object/Ext.data.Session",
      "shadow": "Boolean",
      "shareableName": "Boolean",
      "shim": "Boolean",
      "showAnimation": "String/Mixed",
      "sideError": "String",
      "stateful": "Boolean/Object/String[]",
      "statefulDefaults": "Object/String[]",
      "stateId": "String",
      "store": "Ext.data.Store/Object/String",
      "style": "String/Object",
      "tabIndex": "Number",
      "textAlign": "'left'/'center'/'right'",
      "tipError": "String",
      "titleError": "String",
      "toFrontOnShow": "Boolean",
      "tooltip": "String/Object",
      "top": "Number/String",
      "touchAction": "Object",
      "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
      "tplWriteMode": "String",
      "translatable": "Object",
      "triggerAction": "String",
      "triggers": "Object",
      "twoWayBindable": "String/String[]/Object",
      "typeAhead": "Boolean",
      "typeAheadDelay": "Number",
      "ui": "String/String[]",
      "underError": "String",
      "userCls": "String/String[]",
      "userSelectable": "Boolean/String/Object",
      "validateDisabled": "Boolean",
      "validationMessage": "String",
      "validators": "Mixed",
      "value": "Mixed",
      "valueCollection": "Object/Ext.util.Collection",
      "valueField": "String/Number",
      "valueNotFoundText": "String",
      "viewModel": "String/Object/Ext.app.ViewModel",
      "weight": "Number",
      "width": "Number/String",
      "x": "Number",
      "xtype": "String",
      "y": "Number",
      "zIndex": "Number",
      "platformConfig": "Object",
      "responsiveConfig": "Object",
      "align": "Obyect",
      "fitToParent": "Boolean",
      "config": "Object"
    };
  };

  ExtComboboxfieldComponent.EVENTS = function EVENTS() {
    return [{
      name: 'action',
      parameters: 'combobox,e'
    }, {
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeleftchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeorientationchange',
      parameters: ''
    }, {
      name: 'beforepickercreate',
      parameters: 'combobox,newValue'
    }, {
      name: 'beforequery',
      parameters: 'queryPlan'
    }, {
      name: 'beforerightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforescrollablechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforetofront',
      parameters: 'combobox'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'combobox,e'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'change',
      parameters: 'combobox,newValue,oldValue'
    }, {
      name: 'clearicontap',
      parameters: 'combobox,input,e'
    }, {
      name: 'click',
      parameters: 'e'
    }, {
      name: 'collapse',
      parameters: 'field'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'errorchange',
      parameters: 'combobox,error'
    }, {
      name: 'expand',
      parameters: 'field'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'combobox,e'
    }, {
      name: 'focusenter',
      parameters: 'combobox,event'
    }, {
      name: 'focusleave',
      parameters: 'combobox,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'initialize',
      parameters: 'sender'
    }, {
      name: 'keyup',
      parameters: 'combobox,e'
    }, {
      name: 'leftchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'mousedown',
      parameters: 'combobox,e'
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'orientationchange',
      parameters: ''
    }, {
      name: 'painted',
      parameters: 'sender,element'
    }, {
      name: 'paste',
      parameters: 'combobox,e'
    }, {
      name: 'pickercreate',
      parameters: 'combobox,picker'
    }, {
      name: 'positionedchange',
      parameters: 'sender,positioned'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'select',
      parameters: 'combobox,newValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'tofront',
      parameters: 'combobox'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  ExtComboboxfieldComponent.METHODS = function METHODS() {
    return [{
      name: '_addDeclaredListeners',
      "function": function _function(listeners) {
        return this.ext._addDeclaredListeners(listeners);
      }
    }, {
      name: '_fixReference',
      "function": function _function() {
        return this.ext._fixReference();
      }
    }, {
      name: '_flushStateful',
      "function": function _function() {
        return this.ext._flushStateful();
      }
    }, {
      name: '_getStateId',
      "function": function _function() {
        return this.ext._getStateId();
      }
    }, {
      name: 'activatePlugin',
      "function": function _function(type) {
        return this.ext.activatePlugin(type);
      }
    }, {
      name: 'addAfterListener',
      "function": function _function() {
        return this.ext.addAfterListener();
      }
    }, {
      name: 'addBeforeListener',
      "function": function _function() {
        return this.ext.addBeforeListener();
      }
    }, {
      name: 'addCls',
      "function": function _function(cls, prefix, suffix) {
        return this.ext.addCls(cls, prefix, suffix);
      }
    }, {
      name: 'addDelegatedListener',
      "function": function _function(eventName, fn, scope, options, order, caller, manager) {
        return this.ext.addDelegatedListener(eventName, fn, scope, options, order, caller, manager);
      }
    }, {
      name: 'addDeprecations',
      "function": function _function(deprecations) {
        return this.ext.addDeprecations(deprecations);
      }
    }, {
      name: 'addElementReference',
      "function": function _function(name, domNode) {
        return this.ext.addElementReference(name, domNode);
      }
    }, {
      name: 'addElementReferenceOnDemand',
      "function": function _function(name, domNode) {
        return this.ext.addElementReferenceOnDemand(name, domNode);
      }
    }, {
      name: 'addListener',
      "function": function _function(eventName, fn, scope, options, order, caller) {
        return this.ext.addListener(eventName, fn, scope, options, order, caller);
      }
    }, {
      name: 'addManagedListener',
      "function": function _function(item, ename, fn, scope, options, noDestroy) {
        return this.ext.addManagedListener(item, ename, fn, scope, options, noDestroy);
      }
    }, {
      name: 'addPlugin',
      "function": function _function(plugin) {
        return this.ext.addPlugin(plugin);
      }
    }, {
      name: 'addTrigger',
      "function": function _function(name, trigger) {
        return this.ext.addTrigger(name, trigger);
      }
    }, {
      name: 'afterEdit',
      "function": function _function() {
        return this.ext.afterEdit();
      }
    }, {
      name: 'afterErase',
      "function": function _function() {
        return this.ext.afterErase();
      }
    }, {
      name: 'afterRender',
      "function": function _function() {
        return this.ext.afterRender();
      }
    }, {
      name: 'alignTo',
      "function": function _function(component, alignment, options) {
        return this.ext.alignTo(component, alignment, options);
      }
    }, {
      name: 'applyBind',
      "function": function _function(binds, currentBindings) {
        return this.ext.applyBind(binds, currentBindings);
      }
    }, {
      name: 'applyCentered',
      "function": function _function(centered) {
        return this.ext.applyCentered(centered);
      }
    }, {
      name: 'applyPlugins',
      "function": function _function(plugins, oldPlugins) {
        return this.ext.applyPlugins(plugins, oldPlugins);
      }
    }, {
      name: 'applySession',
      "function": function _function(session) {
        return this.ext.applySession(session);
      }
    }, {
      name: 'applyStyle',
      "function": function _function(style, oldStyle) {
        return this.ext.applyStyle(style, oldStyle);
      }
    }, {
      name: 'applyTpl',
      "function": function _function(tpl) {
        return this.ext.applyTpl(tpl);
      }
    }, {
      name: 'applyValidators',
      "function": function _function(validators) {
        return this.ext.applyValidators(validators);
      }
    }, {
      name: 'applyViewModel',
      "function": function _function(viewModel) {
        return this.ext.applyViewModel(viewModel);
      }
    }, {
      name: 'beforeFilter',
      "function": function _function(queryPlan) {
        return this.ext.beforeFilter(queryPlan);
      }
    }, {
      name: 'beforeInitialize',
      "function": function _function() {
        return this.ext.beforeInitialize();
      }
    }, {
      name: 'blur',
      "function": function _function() {
        return this.ext.blur();
      }
    }, {
      name: 'bubble',
      "function": function _function(fn, scope, args) {
        return this.ext.bubble(fn, scope, args);
      }
    }, {
      name: 'callOverridden',
      "function": function _function(args) {
        return this.ext.callOverridden(args);
      }
    }, {
      name: 'callParent',
      "function": function _function(args) {
        return this.ext.callParent(args);
      }
    }, {
      name: 'callSuper',
      "function": function _function(args) {
        return this.ext.callSuper(args);
      }
    }, {
      name: 'center',
      "function": function _function() {
        return this.ext.center();
      }
    }, {
      name: 'clearDelegatedListeners',
      "function": function _function() {
        return this.ext.clearDelegatedListeners();
      }
    }, {
      name: 'clearInvalid',
      "function": function _function() {
        return this.ext.clearInvalid();
      }
    }, {
      name: 'clearListeners',
      "function": function _function() {
        return this.ext.clearListeners();
      }
    }, {
      name: 'clearManagedListeners',
      "function": function _function() {
        return this.ext.clearManagedListeners();
      }
    }, {
      name: 'clearValue',
      "function": function _function() {
        return this.ext.clearValue();
      }
    }, {
      name: 'collapseIf',
      "function": function _function(e) {
        return this.ext.collapseIf(e);
      }
    }, {
      name: 'completeEdit',
      "function": function _function() {
        return this.ext.completeEdit();
      }
    }, {
      name: 'constructor',
      "function": function _function(config) {
        return this.ext.constructor(config);
      }
    }, {
      name: 'createEnteredRecord',
      "function": function _function(value) {
        return this.ext.createEnteredRecord(value);
      }
    }, {
      name: 'createPlugin',
      "function": function _function(config) {
        return this.ext.createPlugin(config);
      }
    }, {
      name: 'createRelayer',
      "function": function _function(newName, beginEnd) {
        return this.ext.createRelayer(newName, beginEnd);
      }
    }, {
      name: 'createSelectionRecord',
      "function": function _function(data) {
        return this.ext.createSelectionRecord(data);
      }
    }, {
      name: 'createTrigger',
      "function": function _function(name, trigger) {
        return this.ext.createTrigger(name, trigger);
      }
    }, {
      name: 'destroy',
      "function": function _function() {
        return this.ext.destroy();
      }
    }, {
      name: 'destroyMembers',
      "function": function _function(args) {
        return this.ext.destroyMembers(args);
      }
    }, {
      name: 'destroyPlugin',
      "function": function _function(plugin) {
        return this.ext.destroyPlugin(plugin);
      }
    }, {
      name: 'didValueChange',
      "function": function _function(newVal, oldVal) {
        return this.ext.didValueChange(newVal, oldVal);
      }
    }, {
      name: 'disable',
      "function": function _function() {
        return this.ext.disable();
      }
    }, {
      name: 'doAddListener',
      "function": function _function(name, fn, scope, options, order, caller, manager) {
        return this.ext.doAddListener(name, fn, scope, options, order, caller, manager);
      }
    }, {
      name: 'doClearIconTap',
      "function": function _function() {
        return this.ext.doClearIconTap();
      }
    }, {
      name: 'doDestroy',
      "function": function _function() {
        return this.ext.doDestroy();
      }
    }, {
      name: 'doFilter',
      "function": function _function(query) {
        return this.ext.doFilter(query);
      }
    }, {
      name: 'doFireDelegatedEvent',
      "function": function _function(eventName, args) {
        return this.ext.doFireDelegatedEvent(eventName, args);
      }
    }, {
      name: 'doFireEvent',
      "function": function _function(eventName, args, bubbles) {
        return this.ext.doFireEvent(eventName, args, bubbles);
      }
    }, {
      name: 'doInheritUi',
      "function": function _function() {
        return this.ext.doInheritUi();
      }
    }, {
      name: 'doKeyUp',
      "function": function _function(me, e) {
        return this.ext.doKeyUp(me, e);
      }
    }, {
      name: 'doRawFilter',
      "function": function _function() {
        return this.ext.doRawFilter();
      }
    }, {
      name: 'doUninheritUi',
      "function": function _function() {
        return this.ext.doUninheritUi();
      }
    }, {
      name: 'doValidate',
      "function": function _function(value, errors, skipLazy) {
        return this.ext.doValidate(value, errors, skipLazy);
      }
    }, {
      name: 'enable',
      "function": function _function() {
        return this.ext.enable();
      }
    }, {
      name: 'enableBubble',
      "function": function _function(eventNames) {
        return this.ext.enableBubble(eventNames);
      }
    }, {
      name: 'filterPicked',
      "function": function _function(record) {
        return this.ext.filterPicked(record);
      }
    }, {
      name: 'findFloatParent',
      "function": function _function(needsShow) {
        return this.ext.findFloatParent(needsShow);
      }
    }, {
      name: 'findFocusTarget',
      "function": function _function() {
        return this.ext.findFocusTarget();
      }
    }, {
      name: 'findPlugin',
      "function": function _function(type) {
        return this.ext.findPlugin(type);
      }
    }, {
      name: 'findRecordByDisplay',
      "function": function _function(value) {
        return this.ext.findRecordByDisplay(value);
      }
    }, {
      name: 'findRecordByValue',
      "function": function _function(value) {
        return this.ext.findRecordByValue(value);
      }
    }, {
      name: 'fireAction',
      "function": function _function(eventName, args, fn, scope, options, order) {
        return this.ext.fireAction(eventName, args, fn, scope, options, order);
      }
    }, {
      name: 'fireEvent',
      "function": function _function(eventName, args) {
        return this.ext.fireEvent(eventName, args);
      }
    }, {
      name: 'fireEventArgs',
      "function": function _function(eventName, args) {
        return this.ext.fireEventArgs(eventName, args);
      }
    }, {
      name: 'fireEventedAction',
      "function": function _function(eventName, args, fn, scope, fnArgs) {
        return this.ext.fireEventedAction(eventName, args, fn, scope, fnArgs);
      }
    }, {
      name: 'fireKey',
      "function": function _function(e) {
        return this.ext.fireKey(e);
      }
    }, {
      name: 'focus',
      "function": function _function(selectText) {
        return this.ext.focus(selectText);
      }
    }, {
      name: 'formatErrors',
      "function": function _function(errors) {
        return this.ext.formatErrors(errors);
      }
    }, {
      name: 'getAlignmentInfo',
      "function": function _function(component, alignment) {
        return this.ext.getAlignmentInfo(component, alignment);
      }
    }, {
      name: 'getAlignRegion',
      "function": function _function(component, alignment, options) {
        return this.ext.getAlignRegion(component, alignment, options);
      }
    }, {
      name: 'getAriaLabelEl',
      "function": function _function(reference) {
        return this.ext.getAriaLabelEl(reference);
      }
    }, {
      name: 'getBubbleParent',
      "function": function _function() {
        return this.ext.getBubbleParent();
      }
    }, {
      name: 'getClassCls',
      "function": function _function() {
        return this.ext.getClassCls();
      }
    }, {
      name: 'getConfig',
      "function": function _function(name, peek, ifInitialized) {
        return this.ext.getConfig(name, peek, ifInitialized);
      }
    }, {
      name: 'getController',
      "function": function _function() {
        return this.ext.getController();
      }
    }, {
      name: 'getCurrentAlignmentInfo',
      "function": function _function() {
        return this.ext.getCurrentAlignmentInfo();
      }
    }, {
      name: 'getCurrentConfig',
      "function": function _function() {
        return this.ext.getCurrentConfig();
      }
    }, {
      name: 'getElementConfig',
      "function": function _function() {
        return this.ext.getElementConfig();
      }
    }, {
      name: 'getFloatParent',
      "function": function _function() {
        return this.ext.getFloatParent();
      }
    }, {
      name: 'getFloatWrap',
      "function": function _function() {
        return this.ext.getFloatWrap();
      }
    }, {
      name: 'getFocusClsEl',
      "function": function _function(focusEl) {
        return this.ext.getFocusClsEl(focusEl);
      }
    }, {
      name: 'getFocusEl',
      "function": function _function() {
        return this.ext.getFocusEl();
      }
    }, {
      name: 'getId',
      "function": function _function() {
        return this.ext.getId();
      }
    }, {
      name: 'getInherited',
      "function": function _function(inner) {
        return this.ext.getInherited(inner);
      }
    }, {
      name: 'getInheritedConfig',
      "function": function _function(property, skipThis) {
        return this.ext.getInheritedConfig(property, skipThis);
      }
    }, {
      name: 'getInitialConfig',
      "function": function _function(name) {
        return this.ext.getInitialConfig(name);
      }
    }, {
      name: 'getModalSibling',
      "function": function _function() {
        return this.ext.getModalSibling();
      }
    }, {
      name: 'getPlugin',
      "function": function _function(id) {
        return this.ext.getPlugin(id);
      }
    }, {
      name: 'getRecordDisplayData',
      "function": function _function(record) {
        return this.ext.getRecordDisplayData(record);
      }
    }, {
      name: 'getRefOwner',
      "function": function _function() {
        return this.ext.getRefOwner();
      }
    }, {
      name: 'getRenderTarget',
      "function": function _function() {
        return this.ext.getRenderTarget();
      }
    }, {
      name: 'getScrollableClientRegion',
      "function": function _function() {
        return this.ext.getScrollableClientRegion();
      }
    }, {
      name: 'getSize',
      "function": function _function() {
        return this.ext.getSize();
      }
    }, {
      name: 'getStateBuilder',
      "function": function _function(cache) {
        return this.ext.getStateBuilder(cache);
      }
    }, {
      name: 'getStatefulOwner',
      "function": function _function() {
        return this.ext.getStatefulOwner();
      }
    }, {
      name: 'getTabIndex',
      "function": function _function() {
        return this.ext.getTabIndex();
      }
    }, {
      name: 'getTextSelection',
      "function": function _function() {
        return this.ext.getTextSelection();
      }
    }, {
      name: 'getXTypes',
      "function": function _function() {
        return this.ext.getXTypes();
      }
    }, {
      name: 'handleBlurEvent',
      "function": function _function(info) {
        return this.ext.handleBlurEvent(info);
      }
    }, {
      name: 'handleFocusEvent',
      "function": function _function(info) {
        return this.ext.handleFocusEvent(info);
      }
    }, {
      name: 'hasCls',
      "function": function _function(className) {
        return this.ext.hasCls(className);
      }
    }, {
      name: 'hasConfig',
      "function": function _function(name) {
        return this.ext.hasConfig(name);
      }
    }, {
      name: 'hasListener',
      "function": function _function(eventName) {
        return this.ext.hasListener(eventName);
      }
    }, {
      name: 'hide',
      "function": function _function(animation) {
        return this.ext.hide(animation);
      }
    }, {
      name: 'initBindable',
      "function": function _function() {
        return this.ext.initBindable();
      }
    }, {
      name: 'initConfig',
      "function": function _function(instanceConfig) {
        return this.ext.initConfig(instanceConfig);
      }
    }, {
      name: 'initDragConstraints',
      "function": function _function(draggable) {
        return this.ext.initDragConstraints(draggable);
      }
    }, {
      name: 'initElement',
      "function": function _function() {
        return this.ext.initElement();
      }
    }, {
      name: 'initElementListeners',
      "function": function _function(elementConfig) {
        return this.ext.initElementListeners(elementConfig);
      }
    }, {
      name: 'initFocusableElement',
      "function": function _function(force) {
        return this.ext.initFocusableElement(force);
      }
    }, {
      name: 'initFocusableEvents',
      "function": function _function(force) {
        return this.ext.initFocusableEvents(force);
      }
    }, {
      name: 'initialize',
      "function": function _function() {
        return this.ext.initialize();
      }
    }, {
      name: 'initInheritedState',
      "function": function _function(inheritedState) {
        return this.ext.initInheritedState(inheritedState);
      }
    }, {
      name: 'initKeyMap',
      "function": function _function() {
        return this.ext.initKeyMap();
      }
    }, {
      name: 'initUiReference',
      "function": function _function(referenceName, uiCls, isInstance) {
        return this.ext.initUiReference(referenceName, uiCls, isInstance);
      }
    }, {
      name: 'insertFloatedDom',
      "function": function _function(needsShow) {
        return this.ext.insertFloatedDom(needsShow);
      }
    }, {
      name: 'invalidateInheritedState',
      "function": function _function() {
        return this.ext.invalidateInheritedState();
      }
    }, {
      name: 'is',
      "function": function _function(selector) {
        return this.ext.is(selector);
      }
    }, {
      name: 'isAncestor',
      "function": function _function(possibleDescendant) {
        return this.ext.isAncestor(possibleDescendant);
      }
    }, {
      name: 'isBlurring',
      "function": function _function(e) {
        return this.ext.isBlurring(e);
      }
    }, {
      name: 'isBound',
      "function": function _function(name) {
        return this.ext.isBound(name);
      }
    }, {
      name: 'isCentered',
      "function": function _function() {
        return this.ext.isCentered();
      }
    }, {
      name: 'isDescendantOf',
      "function": function _function(ancestor) {
        return this.ext.isDescendantOf(ancestor);
      }
    }, {
      name: 'isDestructing',
      "function": function _function() {
        return this.ext.isDestructing();
      }
    }, {
      name: 'isDirty',
      "function": function _function() {
        return this.ext.isDirty();
      }
    }, {
      name: 'isDisabled',
      "function": function _function() {
        return this.ext.isDisabled();
      }
    }, {
      name: 'isEnabled',
      "function": function _function() {
        return this.ext.isEnabled();
      }
    }, {
      name: 'isEqual',
      "function": function _function(value1, value2) {
        return this.ext.isEqual(value1, value2);
      }
    }, {
      name: 'isFocusable',
      "function": function _function(deep) {
        return this.ext.isFocusable(deep);
      }
    }, {
      name: 'isFocusing',
      "function": function _function(e) {
        return this.ext.isFocusing(e);
      }
    }, {
      name: 'isHeighted',
      "function": function _function() {
        return this.ext.isHeighted();
      }
    }, {
      name: 'isHidden',
      "function": function _function(deep) {
        return this.ext.isHidden(deep);
      }
    }, {
      name: 'isPainted',
      "function": function _function() {
        return this.ext.isPainted();
      }
    }, {
      name: 'isRendered',
      "function": function _function() {
        return this.ext.isRendered();
      }
    }, {
      name: 'isSuspended',
      "function": function _function() {
        return this.ext.isSuspended;
      }
    }, {
      name: 'isSyncing',
      "function": function _function(name) {
        return this.ext.isSyncing(name);
      }
    }, {
      name: 'isValid',
      "function": function _function() {
        return this.ext.isValid();
      }
    }, {
      name: 'isVisible',
      "function": function _function(deep) {
        return this.ext.isVisible(deep);
      }
    }, {
      name: 'isWidthed',
      "function": function _function() {
        return this.ext.isWidthed();
      }
    }, {
      name: 'isXType',
      "function": function _function(xtype, shallow) {
        return this.ext.isXType(xtype, shallow);
      }
    }, {
      name: 'link',
      "function": function _function(name, value) {
        return this.ext.link(name, value);
      }
    }, {
      name: 'loadState',
      "function": function _function(state, stateful) {
        return this.ext.loadState(state, stateful);
      }
    }, {
      name: 'lookupController',
      "function": function _function(skipThis) {
        return this.ext.lookupController(skipThis);
      }
    }, {
      name: 'lookupNameHolder',
      "function": function _function(skipThis) {
        return this.ext.lookupNameHolder(skipThis);
      }
    }, {
      name: 'lookupReferenceHolder',
      "function": function _function(skipThis) {
        return this.ext.lookupReferenceHolder(skipThis);
      }
    }, {
      name: 'lookupSession',
      "function": function _function(skipThis) {
        return this.ext.lookupSession(skipThis);
      }
    }, {
      name: 'lookupTpl',
      "function": function _function(name) {
        return this.ext.lookupTpl(name);
      }
    }, {
      name: 'lookupViewModel',
      "function": function _function(skipThis) {
        return this.ext.lookupViewModel(skipThis);
      }
    }, {
      name: 'markInvalid',
      "function": function _function(messages) {
        return this.ext.markInvalid(messages);
      }
    }, {
      name: 'maybeCollapse',
      "function": function _function() {
        return this.ext.maybeCollapse;
      }
    }, {
      name: 'mon',
      "function": function _function(item, ename, fn, scope, options, noDestroy) {
        return this.ext.mon(item, ename, fn, scope, options, noDestroy);
      }
    }, {
      name: 'mun',
      "function": function _function(item, ename, fn, scope) {
        return this.ext.mun(item, ename, fn, scope);
      }
    }, {
      name: 'on',
      "function": function _function(eventName, fn, scope, options, order, caller) {
        return this.ext.on(eventName, fn, scope, options, order, caller);
      }
    }, {
      name: 'onAdded',
      "function": function _function(parent, instanced) {
        return this.ext.onAdded(parent, instanced);
      }
    }, {
      name: 'onAfter',
      "function": function _function(eventName, fn, scope, options) {
        return this.ext.onAfter(eventName, fn, scope, options);
      }
    }, {
      name: 'onBefore',
      "function": function _function(eventName, fn, scope, options) {
        return this.ext.onBefore(eventName, fn, scope, options);
      }
    }, {
      name: 'onBlur',
      "function": function _function(e) {
        return this.ext.onBlur(e);
      }
    }, {
      name: 'onCollectionAdd',
      "function": function _function(valueCollection, adds) {
        return this.ext.onCollectionAdd(valueCollection, adds);
      }
    }, {
      name: 'onCollectionEndUpdate',
      "function": function _function() {
        return this.ext.onCollectionEndUpdate();
      }
    }, {
      name: 'onCollectionRemove',
      "function": function _function(valueCollection, chunk) {
        return this.ext.onCollectionRemove(valueCollection, chunk);
      }
    }, {
      name: 'onEsc',
      "function": function _function(e) {
        return this.ext.onEsc(e);
      }
    }, {
      name: 'onExpandTap',
      "function": function _function() {
        return this.ext.onExpandTap();
      }
    }, {
      name: 'onFocus',
      "function": function _function(e) {
        return this.ext.onFocus(e);
      }
    }, {
      name: 'onFocusEnter',
      "function": function _function(e) {
        return this.ext.onFocusEnter(e);
      }
    }, {
      name: 'onFocusLeave',
      "function": function _function(e) {
        return this.ext.onFocusLeave(e);
      }
    }, {
      name: 'onFocusMove',
      "function": function _function(info) {
        return this.ext.onFocusMove(info);
      }
    }, {
      name: 'onInheritedAdd',
      "function": function _function(parent, instanced) {
        return this.ext.onInheritedAdd(parent, instanced);
      }
    }, {
      name: 'onInheritedRemove',
      "function": function _function(destroying) {
        return this.ext.onInheritedRemove(destroying);
      }
    }, {
      name: 'onInitialized',
      "function": function _function(fn, scope, args) {
        return this.ext.onInitialized(fn, scope, args);
      }
    }, {
      name: 'onRender',
      "function": function _function() {
        return this.ext.onRender();
      }
    }, {
      name: 'onResize',
      "function": function _function(width, height, oldWidth, oldHeight) {
        return this.ext.onResize(width, height, oldWidth, oldHeight);
      }
    }, {
      name: 'onScrollEnd',
      "function": function _function(x, y) {
        return this.ext.onScrollEnd(x, y);
      }
    }, {
      name: 'onScrollMove',
      "function": function _function(x, y) {
        return this.ext.onScrollMove(x, y);
      }
    }, {
      name: 'onScrollStart',
      "function": function _function(x, y) {
        return this.ext.onScrollStart(x, y);
      }
    }, {
      name: 'onStatefulChange',
      "function": function _function() {
        return this.ext.onStatefulChange();
      }
    }, {
      name: 'onStoreDataChanged',
      "function": function _function() {
        return this.ext.onStoreDataChanged();
      }
    }, {
      name: 'onStoreFilterChange',
      "function": function _function() {
        return this.ext.onStoreFilterChange();
      }
    }, {
      name: 'onStoreLoad',
      "function": function _function(store, records, success) {
        return this.ext.onStoreLoad(store, records, success);
      }
    }, {
      name: 'onStoreRecordUpdated',
      "function": function _function(store, record) {
        return this.ext.onStoreRecordUpdated(store, record);
      }
    }, {
      name: 'onStoreRefresh',
      "function": function _function(store) {
        return this.ext.onStoreRefresh(store);
      }
    }, {
      name: 'owns',
      "function": function _function(element) {
        return this.ext.owns(element);
      }
    }, {
      name: 'parseValue',
      "function": function _function(value, errors) {
        return this.ext.parseValue(value, errors);
      }
    }, {
      name: 'persistState',
      "function": function _function() {
        return this.ext.persistState();
      }
    }, {
      name: 'preprocessShow',
      "function": function _function(component, alignment, options) {
        return this.ext.preprocessShow(component, alignment, options);
      }
    }, {
      name: 'processElementConfig',
      "function": function _function() {
        return this.ext.processElementConfig();
      }
    }, {
      name: 'publishState',
      "function": function _function(property, value) {
        return this.ext.publishState(property, value);
      }
    }, {
      name: 'readStateObject',
      "function": function _function() {
        return this.ext.readStateObject();
      }
    }, {
      name: 'realign',
      "function": function _function(component, alignment, options) {
        return this.ext.realign(component, alignment, options);
      }
    }, {
      name: 'realignFloatedPicker',
      "function": function _function(picker) {
        return this.ext.realignFloatedPicker(picker);
      }
    }, {
      name: 'relayEvents',
      "function": function _function(origin, events, prefix) {
        return this.ext.relayEvents(origin, events, prefix);
      }
    }, {
      name: 'removeAfterListener',
      "function": function _function() {
        return this.ext.removeAfterListener();
      }
    }, {
      name: 'removeBeforeListener',
      "function": function _function() {
        return this.ext.removeBeforeListener();
      }
    }, {
      name: 'removeCls',
      "function": function _function(cls, prefix, suffix) {
        return this.ext.removeCls(cls, prefix, suffix);
      }
    }, {
      name: 'removeDelegatedListener',
      "function": function _function(eventName, fn, scope) {
        return this.ext.removeDelegatedListener(eventName, fn, scope);
      }
    }, {
      name: 'removeListener',
      "function": function _function(eventName, fn, scope, eventOptions) {
        return this.ext.removeListener(eventName, fn, scope, eventOptions);
      }
    }, {
      name: 'removeManagedListener',
      "function": function _function(item, ename, fn, scope) {
        return this.ext.removeManagedListener(item, ename, fn, scope);
      }
    }, {
      name: 'removeManagedListenerItem',
      "function": function _function(isClear, managedListener, item, ename, fn, scope) {
        return this.ext.removeManagedListenerItem(isClear, managedListener, item, ename, fn, scope);
      }
    }, {
      name: 'removePlugin',
      "function": function _function(plugin, destroy) {
        return this.ext.removePlugin(plugin, destroy);
      }
    }, {
      name: 'removeTrigger',
      "function": function _function(trigger, destroy) {
        return this.ext.removeTrigger(trigger, destroy);
      }
    }, {
      name: 'replaceCls',
      "function": function _function(oldCls, newCls, prefix, suffix) {
        return this.ext.replaceCls(oldCls, newCls, prefix, suffix);
      }
    }, {
      name: 'reset',
      "function": function _function() {
        return this.ext.reset();
      }
    }, {
      name: 'resetFloating',
      "function": function _function() {
        return this.ext.resetFloating();
      }
    }, {
      name: 'resetOriginalValue',
      "function": function _function() {
        return this.ext.resetOriginalValue();
      }
    }, {
      name: 'resetPositioned',
      "function": function _function() {
        return this.ext.resetPositioned();
      }
    }, {
      name: 'resolveListenerScope',
      "function": function _function(defaultScope) {
        return this.ext.resolveListenerScope(defaultScope);
      }
    }, {
      name: 'resolveSatelliteListenerScope',
      "function": function _function(satellite, defaultScope) {
        return this.ext.resolveSatelliteListenerScope(satellite, defaultScope);
      }
    }, {
      name: 'resumeEvent',
      "function": function _function(eventName) {
        return this.ext.resumeEvent(eventName);
      }
    }, {
      name: 'resumeEvents',
      "function": function _function(discardQueue) {
        return this.ext.resumeEvents(discardQueue);
      }
    }, {
      name: 'revertFocus',
      "function": function _function() {
        return this.ext.revertFocus();
      }
    }, {
      name: 'revertFocusTo',
      "function": function _function(target) {
        return this.ext.revertFocusTo(target);
      }
    }, {
      name: 'saveState',
      "function": function _function(state, stateful) {
        return this.ext.saveState(state, stateful);
      }
    }, {
      name: 'select',
      "function": function _function(start, end, direction) {
        return this.ext.select(start, end, direction);
      }
    }, {
      name: 'serializePrimaryFilter',
      "function": function _function(filter) {
        return this.ext.serializePrimaryFilter(filter);
      }
    }, {
      name: 'setConfig',
      "function": function _function(name, value, options) {
        return this.ext.setConfig(name, value, options);
      }
    }, {
      name: 'setCurrentAlignmentInfo',
      "function": function _function(alignmentInfo) {
        return this.ext.setCurrentAlignmentInfo(alignmentInfo);
      }
    }, {
      name: 'setFieldDisplay',
      "function": function _function() {
        return this.ext.setFieldDisplay();
      }
    }, {
      name: 'setInputAttribute',
      "function": function _function(attribute, newValue) {
        return this.ext.setInputAttribute(attribute, newValue);
      }
    }, {
      name: 'setListeners',
      "function": function _function(listeners) {
        return this.ext.setListeners(listeners);
      }
    }, {
      name: 'setPickerLocation',
      "function": function _function(fromKeyboard) {
        return this.ext.setPickerLocation(fromKeyboard);
      }
    }, {
      name: 'setRendered',
      "function": function _function(rendered, root) {
        return this.ext.setRendered(rendered, root);
      }
    }, {
      name: 'setSize',
      "function": function _function(width, height) {
        return this.ext.setSize(width, height);
      }
    }, {
      name: 'setTabIndex',
      "function": function _function(newTabIndex, focusEl) {
        return this.ext.setTabIndex(newTabIndex, focusEl);
      }
    }, {
      name: 'setVisibility',
      "function": function _function(isVisible) {
        return this.ext.setVisibility(isVisible);
      }
    }, {
      name: 'setXY',
      "function": function _function(x, y, animation) {
        return this.ext.setXY(x, y, animation);
      }
    }, {
      name: 'show',
      "function": function _function(animation, options) {
        return this.ext.show(animation, options);
      }
    }, {
      name: 'showAt',
      "function": function _function(x, y) {
        return this.ext.showAt(x, y);
      }
    }, {
      name: 'showBy',
      "function": function _function(component, alignment, options) {
        return this.ext.showBy(component, alignment, options);
      }
    }, {
      name: 'statics',
      "function": function _function() {
        return this.ext.statics();
      }
    }, {
      name: 'suspendEvent',
      "function": function _function(eventName) {
        return this.ext.suspendEvent(eventName);
      }
    }, {
      name: 'suspendEvents',
      "function": function _function(queueSuspended) {
        return this.ext.suspendEvents(queueSuspended);
      }
    }, {
      name: 'syncAlwaysOnTop',
      "function": function _function(fromMousedown) {
        return this.ext.syncAlwaysOnTop(fromMousedown);
      }
    }, {
      name: 'syncFloatWrap',
      "function": function _function() {
        return this.ext.syncFloatWrap();
      }
    }, {
      name: 'syncTriggers',
      "function": function _function() {
        return this.ext.syncTriggers();
      }
    }, {
      name: 'toFront',
      "function": function _function(fromMousedown) {
        return this.ext.toFront(fromMousedown);
      }
    }, {
      name: 'toggleCls',
      "function": function _function(className, state) {
        return this.ext.toggleCls(className, state);
      }
    }, {
      name: 'toggleInvalidCls',
      "function": function _function(hasError) {
        return this.ext.toggleInvalidCls(hasError);
      }
    }, {
      name: 'transformStatefulConfig',
      "function": function _function(instanceConfig, configurator) {
        return this.ext.transformStatefulConfig(instanceConfig, configurator);
      }
    }, {
      name: 'triggerInitialized',
      "function": function _function() {
        return this.ext.triggerInitialized();
      }
    }, {
      name: 'un',
      "function": function _function(eventName, fn, scope, eventOptions) {
        return this.ext.un(eventName, fn, scope, eventOptions);
      }
    }, {
      name: 'unAfter',
      "function": function _function(eventName, fn, scope, options) {
        return this.ext.unAfter(eventName, fn, scope, options);
      }
    }, {
      name: 'unBefore',
      "function": function _function(eventName, fn, scope, options) {
        return this.ext.unBefore(eventName, fn, scope, options);
      }
    }, {
      name: 'unlink',
      "function": function _function(names) {
        return this.ext.unlink(names);
      }
    }, {
      name: 'up',
      "function": function _function(selector, limit) {
        return this.ext.up(selector, limit);
      }
    }, {
      name: 'updateCls',
      "function": function _function(newCls, oldCls) {
        return this.ext.updateCls(newCls, oldCls);
      }
    }, {
      name: 'updateData',
      "function": function _function(newData) {
        return this.ext.updateData(newData);
      }
    }, {
      name: 'updateHeight',
      "function": function _function(height) {
        return this.ext.updateHeight(height);
      }
    }, {
      name: 'updatePickerStore',
      "function": function _function() {
        return this.ext.updatePickerStore();
      }
    }, {
      name: 'updateSelection',
      "function": function _function(selection, oldSelection) {
        return this.ext.updateSelection(selection, oldSelection);
      }
    }, {
      name: 'updateSession',
      "function": function _function(session) {
        return this.ext.updateSession(session);
      }
    }, {
      name: 'updateViewModel',
      "function": function _function(viewModel, oldViewModel) {
        return this.ext.updateViewModel(viewModel, oldViewModel);
      }
    }, {
      name: 'updateWidth',
      "function": function _function(width) {
        return this.ext.updateWidth(width);
      }
    }, {
      name: 'validate',
      "function": function _function(skipLazy) {
        return this.ext.validate(skipLazy);
      }
    }, {
      name: 'watchConfig',
      "function": function _function(name, fn, scope) {
        return this.ext.watchConfig(name, fn, scope);
      }
    }, {
      name: 'whenVisible',
      "function": function _function(fn, args) {
        return this.ext.whenVisible(fn, args);
      }
    }];
  };

  _createClass(ExtComboboxfieldComponent, [{
    key: "alignTarget",
    get: function get() {
      return this.getAttribute('alignTarget');
    },
    set: function set(alignTarget) {
      this.setAttribute('alignTarget', alignTarget);
    }
  }, {
    key: "allQuery",
    get: function get() {
      return this.getAttribute('allQuery');
    },
    set: function set(allQuery) {
      this.setAttribute('allQuery', allQuery);
    }
  }, {
    key: "alwaysOnTop",
    get: function get() {
      return this.getAttribute('alwaysOnTop');
    },
    set: function set(alwaysOnTop) {
      this.setAttribute('alwaysOnTop', alwaysOnTop);
    }
  }, {
    key: "animateUnderline",
    get: function get() {
      return this.getAttribute('animateUnderline');
    },
    set: function set(animateUnderline) {
      this.setAttribute('animateUnderline', animateUnderline);
    }
  }, {
    key: "anyMatch",
    get: function get() {
      return this.getAttribute('anyMatch');
    },
    set: function set(anyMatch) {
      this.setAttribute('anyMatch', anyMatch);
    }
  }, {
    key: "ariaAttributes",
    get: function get() {
      return this.getAttribute('ariaAttributes');
    },
    set: function set(ariaAttributes) {
      this.setAttribute('ariaAttributes', ariaAttributes);
    }
  }, {
    key: "ariaDescribedBy",
    get: function get() {
      return this.getAttribute('ariaDescribedBy');
    },
    set: function set(ariaDescribedBy) {
      this.setAttribute('ariaDescribedBy', ariaDescribedBy);
    }
  }, {
    key: "ariaLabel",
    get: function get() {
      return this.getAttribute('ariaLabel');
    },
    set: function set(ariaLabel) {
      this.setAttribute('ariaLabel', ariaLabel);
    }
  }, {
    key: "ariaLabelledBy",
    get: function get() {
      return this.getAttribute('ariaLabelledBy');
    },
    set: function set(ariaLabelledBy) {
      this.setAttribute('ariaLabelledBy', ariaLabelledBy);
    }
  }, {
    key: "autoCapitalize",
    get: function get() {
      return this.getAttribute('autoCapitalize');
    },
    set: function set(autoCapitalize) {
      this.setAttribute('autoCapitalize', autoCapitalize);
    }
  }, {
    key: "autoComplete",
    get: function get() {
      return this.getAttribute('autoComplete');
    },
    set: function set(autoComplete) {
      this.setAttribute('autoComplete', autoComplete);
    }
  }, {
    key: "autoCorrect",
    get: function get() {
      return this.getAttribute('autoCorrect');
    },
    set: function set(autoCorrect) {
      this.setAttribute('autoCorrect', autoCorrect);
    }
  }, {
    key: "autoFitErrors",
    get: function get() {
      return this.getAttribute('autoFitErrors');
    },
    set: function set(autoFitErrors) {
      this.setAttribute('autoFitErrors', autoFitErrors);
    }
  }, {
    key: "autoFocus",
    get: function get() {
      return this.getAttribute('autoFocus');
    },
    set: function set(autoFocus) {
      this.setAttribute('autoFocus', autoFocus);
    }
  }, {
    key: "autoFocusLast",
    get: function get() {
      return this.getAttribute('autoFocusLast');
    },
    set: function set(autoFocusLast) {
      this.setAttribute('autoFocusLast', autoFocusLast);
    }
  }, {
    key: "autoHideInputMask",
    get: function get() {
      return this.getAttribute('autoHideInputMask');
    },
    set: function set(autoHideInputMask) {
      this.setAttribute('autoHideInputMask', autoHideInputMask);
    }
  }, {
    key: "autoLoadOnValue",
    get: function get() {
      return this.getAttribute('autoLoadOnValue');
    },
    set: function set(autoLoadOnValue) {
      this.setAttribute('autoLoadOnValue', autoLoadOnValue);
    }
  }, {
    key: "autoSelect",
    get: function get() {
      return this.getAttribute('autoSelect');
    },
    set: function set(autoSelect) {
      this.setAttribute('autoSelect', autoSelect);
    }
  }, {
    key: "axisLock",
    get: function get() {
      return this.getAttribute('axisLock');
    },
    set: function set(axisLock) {
      this.setAttribute('axisLock', axisLock);
    }
  }, {
    key: "badFormatMessage",
    get: function get() {
      return this.getAttribute('badFormatMessage');
    },
    set: function set(badFormatMessage) {
      this.setAttribute('badFormatMessage', badFormatMessage);
    }
  }, {
    key: "bind",
    get: function get() {
      return this.getAttribute('bind');
    },
    set: function set(bind) {
      this.setAttribute('bind', bind);
    }
  }, {
    key: "bodyAlign",
    get: function get() {
      return this.getAttribute('bodyAlign');
    },
    set: function set(bodyAlign) {
      this.setAttribute('bodyAlign', bodyAlign);
    }
  }, {
    key: "border",
    get: function get() {
      return this.getAttribute('border');
    },
    set: function set(border) {
      this.setAttribute('border', border);
    }
  }, {
    key: "bottom",
    get: function get() {
      return this.getAttribute('bottom');
    },
    set: function set(bottom) {
      this.setAttribute('bottom', bottom);
    }
  }, {
    key: "caseSensitive",
    get: function get() {
      return this.getAttribute('caseSensitive');
    },
    set: function set(caseSensitive) {
      this.setAttribute('caseSensitive', caseSensitive);
    }
  }, {
    key: "centered",
    get: function get() {
      return this.getAttribute('centered');
    },
    set: function set(centered) {
      this.setAttribute('centered', centered);
    }
  }, {
    key: "chipView",
    get: function get() {
      return this.getAttribute('chipView');
    },
    set: function set(chipView) {
      this.setAttribute('chipView', chipView);
    }
  }, {
    key: "clearable",
    get: function get() {
      return this.getAttribute('clearable');
    },
    set: function set(clearable) {
      this.setAttribute('clearable', clearable);
    }
  }, {
    key: "cls",
    get: function get() {
      return this.getAttribute('cls');
    },
    set: function set(cls) {
      this.setAttribute('cls', cls);
    }
  }, {
    key: "collapseOnSelect",
    get: function get() {
      return this.getAttribute('collapseOnSelect');
    },
    set: function set(collapseOnSelect) {
      this.setAttribute('collapseOnSelect', collapseOnSelect);
    }
  }, {
    key: "constrainAlign",
    get: function get() {
      return this.getAttribute('constrainAlign');
    },
    set: function set(constrainAlign) {
      this.setAttribute('constrainAlign', constrainAlign);
    }
  }, {
    key: "contentEl",
    get: function get() {
      return this.getAttribute('contentEl');
    },
    set: function set(contentEl) {
      this.setAttribute('contentEl', contentEl);
    }
  }, {
    key: "controller",
    get: function get() {
      return this.getAttribute('controller');
    },
    set: function set(controller) {
      this.setAttribute('controller', controller);
    }
  }, {
    key: "data",
    get: function get() {
      return this.getAttribute('data');
    },
    set: function set(data) {
      this.setAttribute('data', data);
    }
  }, {
    key: "defaultListenerScope",
    get: function get() {
      return this.getAttribute('defaultListenerScope');
    },
    set: function set(defaultListenerScope) {
      this.setAttribute('defaultListenerScope', defaultListenerScope);
    }
  }, {
    key: "delimiter",
    get: function get() {
      return this.getAttribute('delimiter');
    },
    set: function set(delimiter) {
      this.setAttribute('delimiter', delimiter);
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.getAttribute('disabled');
    },
    set: function set(disabled) {
      this.setAttribute('disabled', disabled);
    }
  }, {
    key: "displayed",
    get: function get() {
      return this.getAttribute('displayed');
    },
    set: function set(displayed) {
      this.setAttribute('displayed', displayed);
    }
  }, {
    key: "displayField",
    get: function get() {
      return this.getAttribute('displayField');
    },
    set: function set(displayField) {
      this.setAttribute('displayField', displayField);
    }
  }, {
    key: "displayTpl",
    get: function get() {
      return this.getAttribute('displayTpl');
    },
    set: function set(displayTpl) {
      this.setAttribute('displayTpl', displayTpl);
    }
  }, {
    key: "docked",
    get: function get() {
      return this.getAttribute('docked');
    },
    set: function set(docked) {
      this.setAttribute('docked', docked);
    }
  }, {
    key: "draggable",
    get: function get() {
      return this.getAttribute('draggable');
    },
    set: function set(draggable) {
      this.setAttribute('draggable', draggable);
    }
  }, {
    key: "edgePicker",
    get: function get() {
      return this.getAttribute('edgePicker');
    },
    set: function set(edgePicker) {
      this.setAttribute('edgePicker', edgePicker);
    }
  }, {
    key: "editable",
    get: function get() {
      return this.getAttribute('editable');
    },
    set: function set(editable) {
      this.setAttribute('editable', editable);
    }
  }, {
    key: "enableRegEx",
    get: function get() {
      return this.getAttribute('enableRegEx');
    },
    set: function set(enableRegEx) {
      this.setAttribute('enableRegEx', enableRegEx);
    }
  }, {
    key: "error",
    get: function get() {
      return this.getAttribute('error');
    },
    set: function set(error) {
      this.setAttribute('error', error);
    }
  }, {
    key: "errorMessage",
    get: function get() {
      return this.getAttribute('errorMessage');
    },
    set: function set(errorMessage) {
      this.setAttribute('errorMessage', errorMessage);
    }
  }, {
    key: "errorTarget",
    get: function get() {
      return this.getAttribute('errorTarget');
    },
    set: function set(errorTarget) {
      this.setAttribute('errorTarget', errorTarget);
    }
  }, {
    key: "errorTip",
    get: function get() {
      return this.getAttribute('errorTip');
    },
    set: function set(errorTip) {
      this.setAttribute('errorTip', errorTip);
    }
  }, {
    key: "errorTpl",
    get: function get() {
      return this.getAttribute('errorTpl');
    },
    set: function set(errorTpl) {
      this.setAttribute('errorTpl', errorTpl);
    }
  }, {
    key: "flex",
    get: function get() {
      return this.getAttribute('flex');
    },
    set: function set(flex) {
      this.setAttribute('flex', flex);
    }
  }, {
    key: "floated",
    get: function get() {
      return this.getAttribute('floated');
    },
    set: function set(floated) {
      this.setAttribute('floated', floated);
    }
  }, {
    key: "floatedPicker",
    get: function get() {
      return this.getAttribute('floatedPicker');
    },
    set: function set(floatedPicker) {
      this.setAttribute('floatedPicker', floatedPicker);
    }
  }, {
    key: "floatedPickerAlign",
    get: function get() {
      return this.getAttribute('floatedPickerAlign');
    },
    set: function set(floatedPickerAlign) {
      this.setAttribute('floatedPickerAlign', floatedPickerAlign);
    }
  }, {
    key: "focusCls",
    get: function get() {
      return this.getAttribute('focusCls');
    },
    set: function set(focusCls) {
      this.setAttribute('focusCls', focusCls);
    }
  }, {
    key: "focusTrap",
    get: function get() {
      return this.getAttribute('focusTrap');
    },
    set: function set(focusTrap) {
      this.setAttribute('focusTrap', focusTrap);
    }
  }, {
    key: "forceSelection",
    get: function get() {
      return this.getAttribute('forceSelection');
    },
    set: function set(forceSelection) {
      this.setAttribute('forceSelection', forceSelection);
    }
  }, {
    key: "fullscreen",
    get: function get() {
      return this.getAttribute('fullscreen');
    },
    set: function set(fullscreen) {
      this.setAttribute('fullscreen', fullscreen);
    }
  }, {
    key: "height",
    get: function get() {
      return this.getAttribute('height');
    },
    set: function set(height) {
      this.setAttribute('height', height);
    }
  }, {
    key: "hidden",
    get: function get() {
      return this.getAttribute('hidden');
    },
    set: function set(hidden) {
      this.setAttribute('hidden', hidden);
    }
  }, {
    key: "hiddenName",
    get: function get() {
      return this.getAttribute('hiddenName');
    },
    set: function set(hiddenName) {
      this.setAttribute('hiddenName', hiddenName);
    }
  }, {
    key: "hideAnimation",
    get: function get() {
      return this.getAttribute('hideAnimation');
    },
    set: function set(hideAnimation) {
      this.setAttribute('hideAnimation', hideAnimation);
    }
  }, {
    key: "hideMode",
    get: function get() {
      return this.getAttribute('hideMode');
    },
    set: function set(hideMode) {
      this.setAttribute('hideMode', hideMode);
    }
  }, {
    key: "hideOnMaskTap",
    get: function get() {
      return this.getAttribute('hideOnMaskTap');
    },
    set: function set(hideOnMaskTap) {
      this.setAttribute('hideOnMaskTap', hideOnMaskTap);
    }
  }, {
    key: "hideTrigger",
    get: function get() {
      return this.getAttribute('hideTrigger');
    },
    set: function set(hideTrigger) {
      this.setAttribute('hideTrigger', hideTrigger);
    }
  }, {
    key: "html",
    get: function get() {
      return this.getAttribute('html');
    },
    set: function set(html) {
      this.setAttribute('html', html);
    }
  }, {
    key: "id",
    get: function get() {
      return this.getAttribute('id');
    },
    set: function set(id) {
      this.setAttribute('id', id);
    }
  }, {
    key: "inline",
    get: function get() {
      return this.getAttribute('inline');
    },
    set: function set(inline) {
      this.setAttribute('inline', inline);
    }
  }, {
    key: "inputMask",
    get: function get() {
      return this.getAttribute('inputMask');
    },
    set: function set(inputMask) {
      this.setAttribute('inputMask', inputMask);
    }
  }, {
    key: "inputType",
    get: function get() {
      return this.getAttribute('inputType');
    },
    set: function set(inputType) {
      this.setAttribute('inputType', inputType);
    }
  }, {
    key: "inputValue",
    get: function get() {
      return this.getAttribute('inputValue');
    },
    set: function set(inputValue) {
      this.setAttribute('inputValue', inputValue);
    }
  }, {
    key: "instanceCls",
    get: function get() {
      return this.getAttribute('instanceCls');
    },
    set: function set(instanceCls) {
      this.setAttribute('instanceCls', instanceCls);
    }
  }, {
    key: "itemCls",
    get: function get() {
      return this.getAttribute('itemCls');
    },
    set: function set(itemCls) {
      this.setAttribute('itemCls', itemCls);
    }
  }, {
    key: "itemId",
    get: function get() {
      return this.getAttribute('itemId');
    },
    set: function set(itemId) {
      this.setAttribute('itemId', itemId);
    }
  }, {
    key: "itemTpl",
    get: function get() {
      return this.getAttribute('itemTpl');
    },
    set: function set(itemTpl) {
      this.setAttribute('itemTpl', itemTpl);
    }
  }, {
    key: "keyMap",
    get: function get() {
      return this.getAttribute('keyMap');
    },
    set: function set(keyMap) {
      this.setAttribute('keyMap', keyMap);
    }
  }, {
    key: "keyMapEnabled",
    get: function get() {
      return this.getAttribute('keyMapEnabled');
    },
    set: function set(keyMapEnabled) {
      this.setAttribute('keyMapEnabled', keyMapEnabled);
    }
  }, {
    key: "keyMapTarget",
    get: function get() {
      return this.getAttribute('keyMapTarget');
    },
    set: function set(keyMapTarget) {
      this.setAttribute('keyMapTarget', keyMapTarget);
    }
  }, {
    key: "label",
    get: function get() {
      return this.getAttribute('label');
    },
    set: function set(label) {
      this.setAttribute('label', label);
    }
  }, {
    key: "labelAlign",
    get: function get() {
      return this.getAttribute('labelAlign');
    },
    set: function set(labelAlign) {
      this.setAttribute('labelAlign', labelAlign);
    }
  }, {
    key: "labelCls",
    get: function get() {
      return this.getAttribute('labelCls');
    },
    set: function set(labelCls) {
      this.setAttribute('labelCls', labelCls);
    }
  }, {
    key: "labelInPlaceholder",
    get: function get() {
      return this.getAttribute('labelInPlaceholder');
    },
    set: function set(labelInPlaceholder) {
      this.setAttribute('labelInPlaceholder', labelInPlaceholder);
    }
  }, {
    key: "labelMinWidth",
    get: function get() {
      return this.getAttribute('labelMinWidth');
    },
    set: function set(labelMinWidth) {
      this.setAttribute('labelMinWidth', labelMinWidth);
    }
  }, {
    key: "labelTextAlign",
    get: function get() {
      return this.getAttribute('labelTextAlign');
    },
    set: function set(labelTextAlign) {
      this.setAttribute('labelTextAlign', labelTextAlign);
    }
  }, {
    key: "labelWidth",
    get: function get() {
      return this.getAttribute('labelWidth');
    },
    set: function set(labelWidth) {
      this.setAttribute('labelWidth', labelWidth);
    }
  }, {
    key: "labelWrap",
    get: function get() {
      return this.getAttribute('labelWrap');
    },
    set: function set(labelWrap) {
      this.setAttribute('labelWrap', labelWrap);
    }
  }, {
    key: "left",
    get: function get() {
      return this.getAttribute('left');
    },
    set: function set(left) {
      this.setAttribute('left', left);
    }
  }, {
    key: "listeners",
    get: function get() {
      return this.getAttribute('listeners');
    },
    set: function set(listeners) {
      this.setAttribute('listeners', listeners);
    }
  }, {
    key: "margin",
    get: function get() {
      return this.getAttribute('margin');
    },
    set: function set(margin) {
      this.setAttribute('margin', margin);
    }
  }, {
    key: "matchFieldWidth",
    get: function get() {
      return this.getAttribute('matchFieldWidth');
    },
    set: function set(matchFieldWidth) {
      this.setAttribute('matchFieldWidth', matchFieldWidth);
    }
  }, {
    key: "maxHeight",
    get: function get() {
      return this.getAttribute('maxHeight');
    },
    set: function set(maxHeight) {
      this.setAttribute('maxHeight', maxHeight);
    }
  }, {
    key: "maxLength",
    get: function get() {
      return this.getAttribute('maxLength');
    },
    set: function set(maxLength) {
      this.setAttribute('maxLength', maxLength);
    }
  }, {
    key: "maxWidth",
    get: function get() {
      return this.getAttribute('maxWidth');
    },
    set: function set(maxWidth) {
      this.setAttribute('maxWidth', maxWidth);
    }
  }, {
    key: "minChars",
    get: function get() {
      return this.getAttribute('minChars');
    },
    set: function set(minChars) {
      this.setAttribute('minChars', minChars);
    }
  }, {
    key: "minHeight",
    get: function get() {
      return this.getAttribute('minHeight');
    },
    set: function set(minHeight) {
      this.setAttribute('minHeight', minHeight);
    }
  }, {
    key: "minWidth",
    get: function get() {
      return this.getAttribute('minWidth');
    },
    set: function set(minWidth) {
      this.setAttribute('minWidth', minWidth);
    }
  }, {
    key: "modal",
    get: function get() {
      return this.getAttribute('modal');
    },
    set: function set(modal) {
      this.setAttribute('modal', modal);
    }
  }, {
    key: "modelValidation",
    get: function get() {
      return this.getAttribute('modelValidation');
    },
    set: function set(modelValidation) {
      this.setAttribute('modelValidation', modelValidation);
    }
  }, {
    key: "multiSelect",
    get: function get() {
      return this.getAttribute('multiSelect');
    },
    set: function set(multiSelect) {
      this.setAttribute('multiSelect', multiSelect);
    }
  }, {
    key: "name",
    get: function get() {
      return this.getAttribute('name');
    },
    set: function set(name) {
      this.setAttribute('name', name);
    }
  }, {
    key: "nameable",
    get: function get() {
      return this.getAttribute('nameable');
    },
    set: function set(nameable) {
      this.setAttribute('nameable', nameable);
    }
  }, {
    key: "options",
    get: function get() {
      return this.getAttribute('options');
    },
    set: function set(options) {
      this.setAttribute('options', options);
    }
  }, {
    key: "padding",
    get: function get() {
      return this.getAttribute('padding');
    },
    set: function set(padding) {
      this.setAttribute('padding', padding);
    }
  }, {
    key: "parseValidator",
    get: function get() {
      return this.getAttribute('parseValidator');
    },
    set: function set(parseValidator) {
      this.setAttribute('parseValidator', parseValidator);
    }
  }, {
    key: "pattern",
    get: function get() {
      return this.getAttribute('pattern');
    },
    set: function set(pattern) {
      this.setAttribute('pattern', pattern);
    }
  }, {
    key: "picker",
    get: function get() {
      return this.getAttribute('picker');
    },
    set: function set(picker) {
      this.setAttribute('picker', picker);
    }
  }, {
    key: "pickerSlotAlign",
    get: function get() {
      return this.getAttribute('pickerSlotAlign');
    },
    set: function set(pickerSlotAlign) {
      this.setAttribute('pickerSlotAlign', pickerSlotAlign);
    }
  }, {
    key: "placeholder",
    get: function get() {
      return this.getAttribute('placeholder');
    },
    set: function set(placeholder) {
      this.setAttribute('placeholder', placeholder);
    }
  }, {
    key: "plugins",
    get: function get() {
      return this.getAttribute('plugins');
    },
    set: function set(plugins) {
      this.setAttribute('plugins', plugins);
    }
  }, {
    key: "primaryFilter",
    get: function get() {
      return this.getAttribute('primaryFilter');
    },
    set: function set(primaryFilter) {
      this.setAttribute('primaryFilter', primaryFilter);
    }
  }, {
    key: "publishes",
    get: function get() {
      return this.getAttribute('publishes');
    },
    set: function set(publishes) {
      this.setAttribute('publishes', publishes);
    }
  }, {
    key: "queryCaching",
    get: function get() {
      return this.getAttribute('queryCaching');
    },
    set: function set(queryCaching) {
      this.setAttribute('queryCaching', queryCaching);
    }
  }, {
    key: "queryDelay",
    get: function get() {
      return this.getAttribute('queryDelay');
    },
    set: function set(queryDelay) {
      this.setAttribute('queryDelay', queryDelay);
    }
  }, {
    key: "queryMode",
    get: function get() {
      return this.getAttribute('queryMode');
    },
    set: function set(queryMode) {
      this.setAttribute('queryMode', queryMode);
    }
  }, {
    key: "queryParam",
    get: function get() {
      return this.getAttribute('queryParam');
    },
    set: function set(queryParam) {
      this.setAttribute('queryParam', queryParam);
    }
  }, {
    key: "readOnly",
    get: function get() {
      return this.getAttribute('readOnly');
    },
    set: function set(readOnly) {
      this.setAttribute('readOnly', readOnly);
    }
  }, {
    key: "record",
    get: function get() {
      return this.getAttribute('record');
    },
    set: function set(record) {
      this.setAttribute('record', record);
    }
  }, {
    key: "recordCreator",
    get: function get() {
      return this.getAttribute('recordCreator');
    },
    set: function set(recordCreator) {
      this.setAttribute('recordCreator', recordCreator);
    }
  }, {
    key: "recordCreatorScope",
    get: function get() {
      return this.getAttribute('recordCreatorScope');
    },
    set: function set(recordCreatorScope) {
      this.setAttribute('recordCreatorScope', recordCreatorScope);
    }
  }, {
    key: "reference",
    get: function get() {
      return this.getAttribute('reference');
    },
    set: function set(reference) {
      this.setAttribute('reference', reference);
    }
  }, {
    key: "relative",
    get: function get() {
      return this.getAttribute('relative');
    },
    set: function set(relative) {
      this.setAttribute('relative', relative);
    }
  }, {
    key: "renderTo",
    get: function get() {
      return this.getAttribute('renderTo');
    },
    set: function set(renderTo) {
      this.setAttribute('renderTo', renderTo);
    }
  }, {
    key: "required",
    get: function get() {
      return this.getAttribute('required');
    },
    set: function set(required) {
      this.setAttribute('required', required);
    }
  }, {
    key: "requiredMessage",
    get: function get() {
      return this.getAttribute('requiredMessage');
    },
    set: function set(requiredMessage) {
      this.setAttribute('requiredMessage', requiredMessage);
    }
  }, {
    key: "right",
    get: function get() {
      return this.getAttribute('right');
    },
    set: function set(right) {
      this.setAttribute('right', right);
    }
  }, {
    key: "ripple",
    get: function get() {
      return this.getAttribute('ripple');
    },
    set: function set(ripple) {
      this.setAttribute('ripple', ripple);
    }
  }, {
    key: "scrollable",
    get: function get() {
      return this.getAttribute('scrollable');
    },
    set: function set(scrollable) {
      this.setAttribute('scrollable', scrollable);
    }
  }, {
    key: "selection",
    get: function get() {
      return this.getAttribute('selection');
    },
    set: function set(selection) {
      this.setAttribute('selection', selection);
    }
  }, {
    key: "selectOnTab",
    get: function get() {
      return this.getAttribute('selectOnTab');
    },
    set: function set(selectOnTab) {
      this.setAttribute('selectOnTab', selectOnTab);
    }
  }, {
    key: "selfAlign",
    get: function get() {
      return this.getAttribute('selfAlign');
    },
    set: function set(selfAlign) {
      this.setAttribute('selfAlign', selfAlign);
    }
  }, {
    key: "session",
    get: function get() {
      return this.getAttribute('session');
    },
    set: function set(session) {
      this.setAttribute('session', session);
    }
  }, {
    key: "shadow",
    get: function get() {
      return this.getAttribute('shadow');
    },
    set: function set(shadow) {
      this.setAttribute('shadow', shadow);
    }
  }, {
    key: "shareableName",
    get: function get() {
      return this.getAttribute('shareableName');
    },
    set: function set(shareableName) {
      this.setAttribute('shareableName', shareableName);
    }
  }, {
    key: "shim",
    get: function get() {
      return this.getAttribute('shim');
    },
    set: function set(shim) {
      this.setAttribute('shim', shim);
    }
  }, {
    key: "showAnimation",
    get: function get() {
      return this.getAttribute('showAnimation');
    },
    set: function set(showAnimation) {
      this.setAttribute('showAnimation', showAnimation);
    }
  }, {
    key: "sideError",
    get: function get() {
      return this.getAttribute('sideError');
    },
    set: function set(sideError) {
      this.setAttribute('sideError', sideError);
    }
  }, {
    key: "stateful",
    get: function get() {
      return this.getAttribute('stateful');
    },
    set: function set(stateful) {
      this.setAttribute('stateful', stateful);
    }
  }, {
    key: "statefulDefaults",
    get: function get() {
      return this.getAttribute('statefulDefaults');
    },
    set: function set(statefulDefaults) {
      this.setAttribute('statefulDefaults', statefulDefaults);
    }
  }, {
    key: "stateId",
    get: function get() {
      return this.getAttribute('stateId');
    },
    set: function set(stateId) {
      this.setAttribute('stateId', stateId);
    }
  }, {
    key: "store",
    get: function get() {
      return this.getAttribute('store');
    },
    set: function set(store) {
      this.setAttribute('store', store);
    }
  }, {
    key: "style",
    get: function get() {
      return this.getAttribute('style');
    },
    set: function set(style) {
      this.setAttribute('style', style);
    }
  }, {
    key: "tabIndex",
    get: function get() {
      return this.getAttribute('tabIndex');
    },
    set: function set(tabIndex) {
      this.setAttribute('tabIndex', tabIndex);
    }
  }, {
    key: "textAlign",
    get: function get() {
      return this.getAttribute('textAlign');
    },
    set: function set(textAlign) {
      this.setAttribute('textAlign', textAlign);
    }
  }, {
    key: "tipError",
    get: function get() {
      return this.getAttribute('tipError');
    },
    set: function set(tipError) {
      this.setAttribute('tipError', tipError);
    }
  }, {
    key: "titleError",
    get: function get() {
      return this.getAttribute('titleError');
    },
    set: function set(titleError) {
      this.setAttribute('titleError', titleError);
    }
  }, {
    key: "toFrontOnShow",
    get: function get() {
      return this.getAttribute('toFrontOnShow');
    },
    set: function set(toFrontOnShow) {
      this.setAttribute('toFrontOnShow', toFrontOnShow);
    }
  }, {
    key: "tooltip",
    get: function get() {
      return this.getAttribute('tooltip');
    },
    set: function set(tooltip) {
      this.setAttribute('tooltip', tooltip);
    }
  }, {
    key: "top",
    get: function get() {
      return this.getAttribute('top');
    },
    set: function set(top) {
      this.setAttribute('top', top);
    }
  }, {
    key: "touchAction",
    get: function get() {
      return this.getAttribute('touchAction');
    },
    set: function set(touchAction) {
      this.setAttribute('touchAction', touchAction);
    }
  }, {
    key: "tpl",
    get: function get() {
      return this.getAttribute('tpl');
    },
    set: function set(tpl) {
      this.setAttribute('tpl', tpl);
    }
  }, {
    key: "tplWriteMode",
    get: function get() {
      return this.getAttribute('tplWriteMode');
    },
    set: function set(tplWriteMode) {
      this.setAttribute('tplWriteMode', tplWriteMode);
    }
  }, {
    key: "translatable",
    get: function get() {
      return this.getAttribute('translatable');
    },
    set: function set(translatable) {
      this.setAttribute('translatable', translatable);
    }
  }, {
    key: "triggerAction",
    get: function get() {
      return this.getAttribute('triggerAction');
    },
    set: function set(triggerAction) {
      this.setAttribute('triggerAction', triggerAction);
    }
  }, {
    key: "triggers",
    get: function get() {
      return this.getAttribute('triggers');
    },
    set: function set(triggers) {
      this.setAttribute('triggers', triggers);
    }
  }, {
    key: "twoWayBindable",
    get: function get() {
      return this.getAttribute('twoWayBindable');
    },
    set: function set(twoWayBindable) {
      this.setAttribute('twoWayBindable', twoWayBindable);
    }
  }, {
    key: "typeAhead",
    get: function get() {
      return this.getAttribute('typeAhead');
    },
    set: function set(typeAhead) {
      this.setAttribute('typeAhead', typeAhead);
    }
  }, {
    key: "typeAheadDelay",
    get: function get() {
      return this.getAttribute('typeAheadDelay');
    },
    set: function set(typeAheadDelay) {
      this.setAttribute('typeAheadDelay', typeAheadDelay);
    }
  }, {
    key: "ui",
    get: function get() {
      return this.getAttribute('ui');
    },
    set: function set(ui) {
      this.setAttribute('ui', ui);
    }
  }, {
    key: "underError",
    get: function get() {
      return this.getAttribute('underError');
    },
    set: function set(underError) {
      this.setAttribute('underError', underError);
    }
  }, {
    key: "userCls",
    get: function get() {
      return this.getAttribute('userCls');
    },
    set: function set(userCls) {
      this.setAttribute('userCls', userCls);
    }
  }, {
    key: "userSelectable",
    get: function get() {
      return this.getAttribute('userSelectable');
    },
    set: function set(userSelectable) {
      this.setAttribute('userSelectable', userSelectable);
    }
  }, {
    key: "validateDisabled",
    get: function get() {
      return this.getAttribute('validateDisabled');
    },
    set: function set(validateDisabled) {
      this.setAttribute('validateDisabled', validateDisabled);
    }
  }, {
    key: "validationMessage",
    get: function get() {
      return this.getAttribute('validationMessage');
    },
    set: function set(validationMessage) {
      this.setAttribute('validationMessage', validationMessage);
    }
  }, {
    key: "validators",
    get: function get() {
      return this.getAttribute('validators');
    },
    set: function set(validators) {
      this.setAttribute('validators', validators);
    }
  }, {
    key: "value",
    get: function get() {
      return this.getAttribute('value');
    },
    set: function set(value) {
      this.setAttribute('value', value);
    }
  }, {
    key: "valueCollection",
    get: function get() {
      return this.getAttribute('valueCollection');
    },
    set: function set(valueCollection) {
      this.setAttribute('valueCollection', valueCollection);
    }
  }, {
    key: "valueField",
    get: function get() {
      return this.getAttribute('valueField');
    },
    set: function set(valueField) {
      this.setAttribute('valueField', valueField);
    }
  }, {
    key: "valueNotFoundText",
    get: function get() {
      return this.getAttribute('valueNotFoundText');
    },
    set: function set(valueNotFoundText) {
      this.setAttribute('valueNotFoundText', valueNotFoundText);
    }
  }, {
    key: "viewModel",
    get: function get() {
      return this.getAttribute('viewModel');
    },
    set: function set(viewModel) {
      this.setAttribute('viewModel', viewModel);
    }
  }, {
    key: "weight",
    get: function get() {
      return this.getAttribute('weight');
    },
    set: function set(weight) {
      this.setAttribute('weight', weight);
    }
  }, {
    key: "width",
    get: function get() {
      return this.getAttribute('width');
    },
    set: function set(width) {
      this.setAttribute('width', width);
    }
  }, {
    key: "x",
    get: function get() {
      return this.getAttribute('x');
    },
    set: function set(x) {
      this.setAttribute('x', x);
    }
  }, {
    key: "xtype",
    get: function get() {
      return this.getAttribute('xtype');
    },
    set: function set(xtype) {
      this.setAttribute('xtype', xtype);
    }
  }, {
    key: "y",
    get: function get() {
      return this.getAttribute('y');
    },
    set: function set(y) {
      this.setAttribute('y', y);
    }
  }, {
    key: "zIndex",
    get: function get() {
      return this.getAttribute('zIndex');
    },
    set: function set(zIndex) {
      this.setAttribute('zIndex', zIndex);
    }
  }, {
    key: "platformConfig",
    get: function get() {
      return this.getAttribute('platformConfig');
    },
    set: function set(platformConfig) {
      this.setAttribute('platformConfig', platformConfig);
    }
  }, {
    key: "responsiveConfig",
    get: function get() {
      return this.getAttribute('responsiveConfig');
    },
    set: function set(responsiveConfig) {
      this.setAttribute('responsiveConfig', responsiveConfig);
    }
  }, {
    key: "align",
    get: function get() {
      return this.getAttribute('align');
    },
    set: function set(align) {
      this.setAttribute('align', align);
    }
  }, {
    key: "fitToParent",
    get: function get() {
      return this.getAttribute('fitToParent');
    },
    set: function set(fitToParent) {
      this.setAttribute('fitToParent', fitToParent);
    }
  }, {
    key: "config",
    get: function get() {
      return this.getAttribute('config');
    },
    set: function set(config) {
      this.setAttribute('config', config);
    }
  }, {
    key: "onaction",
    get: function get() {
      return this.getAttribute('onaction');
    },
    set: function set(onaction) {
      this.setAttribute('onaction', onaction);
    }
  }, {
    key: "onadded",
    get: function get() {
      return this.getAttribute('onadded');
    },
    set: function set(onadded) {
      this.setAttribute('onadded', onadded);
    }
  }, {
    key: "onbeforebottomchange",
    get: function get() {
      return this.getAttribute('onbeforebottomchange');
    },
    set: function set(onbeforebottomchange) {
      this.setAttribute('onbeforebottomchange', onbeforebottomchange);
    }
  }, {
    key: "onbeforecenteredchange",
    get: function get() {
      return this.getAttribute('onbeforecenteredchange');
    },
    set: function set(onbeforecenteredchange) {
      this.setAttribute('onbeforecenteredchange', onbeforecenteredchange);
    }
  }, {
    key: "onbeforedisabledchange",
    get: function get() {
      return this.getAttribute('onbeforedisabledchange');
    },
    set: function set(onbeforedisabledchange) {
      this.setAttribute('onbeforedisabledchange', onbeforedisabledchange);
    }
  }, {
    key: "onbeforedockedchange",
    get: function get() {
      return this.getAttribute('onbeforedockedchange');
    },
    set: function set(onbeforedockedchange) {
      this.setAttribute('onbeforedockedchange', onbeforedockedchange);
    }
  }, {
    key: "onbeforeheightchange",
    get: function get() {
      return this.getAttribute('onbeforeheightchange');
    },
    set: function set(onbeforeheightchange) {
      this.setAttribute('onbeforeheightchange', onbeforeheightchange);
    }
  }, {
    key: "onbeforehiddenchange",
    get: function get() {
      return this.getAttribute('onbeforehiddenchange');
    },
    set: function set(onbeforehiddenchange) {
      this.setAttribute('onbeforehiddenchange', onbeforehiddenchange);
    }
  }, {
    key: "onbeforehide",
    get: function get() {
      return this.getAttribute('onbeforehide');
    },
    set: function set(onbeforehide) {
      this.setAttribute('onbeforehide', onbeforehide);
    }
  }, {
    key: "onbeforeleftchange",
    get: function get() {
      return this.getAttribute('onbeforeleftchange');
    },
    set: function set(onbeforeleftchange) {
      this.setAttribute('onbeforeleftchange', onbeforeleftchange);
    }
  }, {
    key: "onbeforemaxHeightchange",
    get: function get() {
      return this.getAttribute('onbeforemaxHeightchange');
    },
    set: function set(onbeforemaxHeightchange) {
      this.setAttribute('onbeforemaxHeightchange', onbeforemaxHeightchange);
    }
  }, {
    key: "onbeforemaxWidthchange",
    get: function get() {
      return this.getAttribute('onbeforemaxWidthchange');
    },
    set: function set(onbeforemaxWidthchange) {
      this.setAttribute('onbeforemaxWidthchange', onbeforemaxWidthchange);
    }
  }, {
    key: "onbeforeminHeightchange",
    get: function get() {
      return this.getAttribute('onbeforeminHeightchange');
    },
    set: function set(onbeforeminHeightchange) {
      this.setAttribute('onbeforeminHeightchange', onbeforeminHeightchange);
    }
  }, {
    key: "onbeforeminWidthchange",
    get: function get() {
      return this.getAttribute('onbeforeminWidthchange');
    },
    set: function set(onbeforeminWidthchange) {
      this.setAttribute('onbeforeminWidthchange', onbeforeminWidthchange);
    }
  }, {
    key: "onbeforeorientationchange",
    get: function get() {
      return this.getAttribute('onbeforeorientationchange');
    },
    set: function set(onbeforeorientationchange) {
      this.setAttribute('onbeforeorientationchange', onbeforeorientationchange);
    }
  }, {
    key: "onbeforepickercreate",
    get: function get() {
      return this.getAttribute('onbeforepickercreate');
    },
    set: function set(onbeforepickercreate) {
      this.setAttribute('onbeforepickercreate', onbeforepickercreate);
    }
  }, {
    key: "onbeforequery",
    get: function get() {
      return this.getAttribute('onbeforequery');
    },
    set: function set(onbeforequery) {
      this.setAttribute('onbeforequery', onbeforequery);
    }
  }, {
    key: "onbeforerightchange",
    get: function get() {
      return this.getAttribute('onbeforerightchange');
    },
    set: function set(onbeforerightchange) {
      this.setAttribute('onbeforerightchange', onbeforerightchange);
    }
  }, {
    key: "onbeforescrollablechange",
    get: function get() {
      return this.getAttribute('onbeforescrollablechange');
    },
    set: function set(onbeforescrollablechange) {
      this.setAttribute('onbeforescrollablechange', onbeforescrollablechange);
    }
  }, {
    key: "onbeforeshow",
    get: function get() {
      return this.getAttribute('onbeforeshow');
    },
    set: function set(onbeforeshow) {
      this.setAttribute('onbeforeshow', onbeforeshow);
    }
  }, {
    key: "onbeforetofront",
    get: function get() {
      return this.getAttribute('onbeforetofront');
    },
    set: function set(onbeforetofront) {
      this.setAttribute('onbeforetofront', onbeforetofront);
    }
  }, {
    key: "onbeforetopchange",
    get: function get() {
      return this.getAttribute('onbeforetopchange');
    },
    set: function set(onbeforetopchange) {
      this.setAttribute('onbeforetopchange', onbeforetopchange);
    }
  }, {
    key: "onbeforewidthchange",
    get: function get() {
      return this.getAttribute('onbeforewidthchange');
    },
    set: function set(onbeforewidthchange) {
      this.setAttribute('onbeforewidthchange', onbeforewidthchange);
    }
  }, {
    key: "onblur",
    get: function get() {
      return this.getAttribute('onblur');
    },
    set: function set(onblur) {
      this.setAttribute('onblur', onblur);
    }
  }, {
    key: "onbottomchange",
    get: function get() {
      return this.getAttribute('onbottomchange');
    },
    set: function set(onbottomchange) {
      this.setAttribute('onbottomchange', onbottomchange);
    }
  }, {
    key: "oncenteredchange",
    get: function get() {
      return this.getAttribute('oncenteredchange');
    },
    set: function set(oncenteredchange) {
      this.setAttribute('oncenteredchange', oncenteredchange);
    }
  }, {
    key: "onchange",
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }, {
    key: "onclearicontap",
    get: function get() {
      return this.getAttribute('onclearicontap');
    },
    set: function set(onclearicontap) {
      this.setAttribute('onclearicontap', onclearicontap);
    }
  }, {
    key: "onclick",
    get: function get() {
      return this.getAttribute('onclick');
    },
    set: function set(onclick) {
      this.setAttribute('onclick', onclick);
    }
  }, {
    key: "oncollapse",
    get: function get() {
      return this.getAttribute('oncollapse');
    },
    set: function set(oncollapse) {
      this.setAttribute('oncollapse', oncollapse);
    }
  }, {
    key: "ondestroy",
    get: function get() {
      return this.getAttribute('ondestroy');
    },
    set: function set(ondestroy) {
      this.setAttribute('ondestroy', ondestroy);
    }
  }, {
    key: "ondisabledchange",
    get: function get() {
      return this.getAttribute('ondisabledchange');
    },
    set: function set(ondisabledchange) {
      this.setAttribute('ondisabledchange', ondisabledchange);
    }
  }, {
    key: "ondockedchange",
    get: function get() {
      return this.getAttribute('ondockedchange');
    },
    set: function set(ondockedchange) {
      this.setAttribute('ondockedchange', ondockedchange);
    }
  }, {
    key: "onerased",
    get: function get() {
      return this.getAttribute('onerased');
    },
    set: function set(onerased) {
      this.setAttribute('onerased', onerased);
    }
  }, {
    key: "onerrorchange",
    get: function get() {
      return this.getAttribute('onerrorchange');
    },
    set: function set(onerrorchange) {
      this.setAttribute('onerrorchange', onerrorchange);
    }
  }, {
    key: "onexpand",
    get: function get() {
      return this.getAttribute('onexpand');
    },
    set: function set(onexpand) {
      this.setAttribute('onexpand', onexpand);
    }
  }, {
    key: "onfloatingchange",
    get: function get() {
      return this.getAttribute('onfloatingchange');
    },
    set: function set(onfloatingchange) {
      this.setAttribute('onfloatingchange', onfloatingchange);
    }
  }, {
    key: "onfocus",
    get: function get() {
      return this.getAttribute('onfocus');
    },
    set: function set(onfocus) {
      this.setAttribute('onfocus', onfocus);
    }
  }, {
    key: "onfocusenter",
    get: function get() {
      return this.getAttribute('onfocusenter');
    },
    set: function set(onfocusenter) {
      this.setAttribute('onfocusenter', onfocusenter);
    }
  }, {
    key: "onfocusleave",
    get: function get() {
      return this.getAttribute('onfocusleave');
    },
    set: function set(onfocusleave) {
      this.setAttribute('onfocusleave', onfocusleave);
    }
  }, {
    key: "onfullscreen",
    get: function get() {
      return this.getAttribute('onfullscreen');
    },
    set: function set(onfullscreen) {
      this.setAttribute('onfullscreen', onfullscreen);
    }
  }, {
    key: "onheightchange",
    get: function get() {
      return this.getAttribute('onheightchange');
    },
    set: function set(onheightchange) {
      this.setAttribute('onheightchange', onheightchange);
    }
  }, {
    key: "onhiddenchange",
    get: function get() {
      return this.getAttribute('onhiddenchange');
    },
    set: function set(onhiddenchange) {
      this.setAttribute('onhiddenchange', onhiddenchange);
    }
  }, {
    key: "onhide",
    get: function get() {
      return this.getAttribute('onhide');
    },
    set: function set(onhide) {
      this.setAttribute('onhide', onhide);
    }
  }, {
    key: "oninitialize",
    get: function get() {
      return this.getAttribute('oninitialize');
    },
    set: function set(oninitialize) {
      this.setAttribute('oninitialize', oninitialize);
    }
  }, {
    key: "onkeyup",
    get: function get() {
      return this.getAttribute('onkeyup');
    },
    set: function set(onkeyup) {
      this.setAttribute('onkeyup', onkeyup);
    }
  }, {
    key: "onleftchange",
    get: function get() {
      return this.getAttribute('onleftchange');
    },
    set: function set(onleftchange) {
      this.setAttribute('onleftchange', onleftchange);
    }
  }, {
    key: "onmaxHeightchange",
    get: function get() {
      return this.getAttribute('onmaxHeightchange');
    },
    set: function set(onmaxHeightchange) {
      this.setAttribute('onmaxHeightchange', onmaxHeightchange);
    }
  }, {
    key: "onmaxWidthchange",
    get: function get() {
      return this.getAttribute('onmaxWidthchange');
    },
    set: function set(onmaxWidthchange) {
      this.setAttribute('onmaxWidthchange', onmaxWidthchange);
    }
  }, {
    key: "onminHeightchange",
    get: function get() {
      return this.getAttribute('onminHeightchange');
    },
    set: function set(onminHeightchange) {
      this.setAttribute('onminHeightchange', onminHeightchange);
    }
  }, {
    key: "onminWidthchange",
    get: function get() {
      return this.getAttribute('onminWidthchange');
    },
    set: function set(onminWidthchange) {
      this.setAttribute('onminWidthchange', onminWidthchange);
    }
  }, {
    key: "onmousedown",
    get: function get() {
      return this.getAttribute('onmousedown');
    },
    set: function set(onmousedown) {
      this.setAttribute('onmousedown', onmousedown);
    }
  }, {
    key: "onmoved",
    get: function get() {
      return this.getAttribute('onmoved');
    },
    set: function set(onmoved) {
      this.setAttribute('onmoved', onmoved);
    }
  }, {
    key: "onorientationchange",
    get: function get() {
      return this.getAttribute('onorientationchange');
    },
    set: function set(onorientationchange) {
      this.setAttribute('onorientationchange', onorientationchange);
    }
  }, {
    key: "onpainted",
    get: function get() {
      return this.getAttribute('onpainted');
    },
    set: function set(onpainted) {
      this.setAttribute('onpainted', onpainted);
    }
  }, {
    key: "onpaste",
    get: function get() {
      return this.getAttribute('onpaste');
    },
    set: function set(onpaste) {
      this.setAttribute('onpaste', onpaste);
    }
  }, {
    key: "onpickercreate",
    get: function get() {
      return this.getAttribute('onpickercreate');
    },
    set: function set(onpickercreate) {
      this.setAttribute('onpickercreate', onpickercreate);
    }
  }, {
    key: "onpositionedchange",
    get: function get() {
      return this.getAttribute('onpositionedchange');
    },
    set: function set(onpositionedchange) {
      this.setAttribute('onpositionedchange', onpositionedchange);
    }
  }, {
    key: "onremoved",
    get: function get() {
      return this.getAttribute('onremoved');
    },
    set: function set(onremoved) {
      this.setAttribute('onremoved', onremoved);
    }
  }, {
    key: "onresize",
    get: function get() {
      return this.getAttribute('onresize');
    },
    set: function set(onresize) {
      this.setAttribute('onresize', onresize);
    }
  }, {
    key: "onrightchange",
    get: function get() {
      return this.getAttribute('onrightchange');
    },
    set: function set(onrightchange) {
      this.setAttribute('onrightchange', onrightchange);
    }
  }, {
    key: "onscrollablechange",
    get: function get() {
      return this.getAttribute('onscrollablechange');
    },
    set: function set(onscrollablechange) {
      this.setAttribute('onscrollablechange', onscrollablechange);
    }
  }, {
    key: "onselect",
    get: function get() {
      return this.getAttribute('onselect');
    },
    set: function set(onselect) {
      this.setAttribute('onselect', onselect);
    }
  }, {
    key: "onshow",
    get: function get() {
      return this.getAttribute('onshow');
    },
    set: function set(onshow) {
      this.setAttribute('onshow', onshow);
    }
  }, {
    key: "ontofront",
    get: function get() {
      return this.getAttribute('ontofront');
    },
    set: function set(ontofront) {
      this.setAttribute('ontofront', ontofront);
    }
  }, {
    key: "ontopchange",
    get: function get() {
      return this.getAttribute('ontopchange');
    },
    set: function set(ontopchange) {
      this.setAttribute('ontopchange', ontopchange);
    }
  }, {
    key: "onupdatedata",
    get: function get() {
      return this.getAttribute('onupdatedata');
    },
    set: function set(onupdatedata) {
      this.setAttribute('onupdatedata', onupdatedata);
    }
  }, {
    key: "onwidthchange",
    get: function get() {
      return this.getAttribute('onwidthchange');
    },
    set: function set(onwidthchange) {
      this.setAttribute('onwidthchange', onwidthchange);
    }
  }]);

  function ExtComboboxfieldComponent() {
    var _this;

    _this = _ExtBase.call(this) || this;
    _this.METHODS = ExtComboboxfieldComponent.METHODS();
    _this.XTYPE = ExtComboboxfieldComponent.XTYPE(); //this.PROPERTIES = ExtComboboxfieldComponent.PROPERTIES()

    _this.PROPERTIESOBJECT = ExtComboboxfieldComponent.PROPERTIESOBJECT();
    _this.EVENTS = ExtComboboxfieldComponent.EVENTS();
    return _this;
  }

  var _proto = ExtComboboxfieldComponent.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _ExtBase.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _ExtBase.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return ExtComboboxfieldComponent;
}(ExtBase);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-comboboxfield', ExtComboboxfieldComponent);
  });
})();