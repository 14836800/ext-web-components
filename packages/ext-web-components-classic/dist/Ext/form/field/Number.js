import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_field_Spinner from '../../../Ext/form/field/Spinner.js';

var Ext_form_field_Number =
/*#__PURE__*/
function (_Ext_form_field_Spinn) {
  _inheritsLoose(Ext_form_field_Number, _Ext_form_field_Spinn);

  Ext_form_field_Number.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'allowBlank', 'allowDecimals', 'allowExponential', 'allowOnlyWhitespace', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoFitErrors', 'autoHideInputMask', 'autoRender', 'autoShow', 'autoStripChars', 'baseBodyCls', 'baseChars', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'blankText', 'border', 'checkChangeBuffer', 'checkChangeEvents', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'decimalPrecision', 'decimalSeparator', 'defaultAlign', 'defaultListenerScope', 'dirtyCls', 'disabled', 'disabledCls', 'disableKeyFilter', 'dock', 'draggable', 'editable', 'emptyCls', 'emptyText', 'enableKeyEvents', 'enforceMaxLength', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldLabel', 'fieldStyle', 'fieldSubTpl', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'formItemCls', 'frame', 'grow', 'growMax', 'growMin', 'height', 'hidden', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'hideTrigger', 'html', 'id', 'inputAttrTpl', 'inputId', 'inputMask', 'inputType', 'inputWrapCls', 'invalidCls', 'invalidText', 'isTextInput', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'keyNavEnabled', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maskRe', 'maxHeight', 'maxLength', 'maxLengthText', 'maxText', 'maxValue', 'maxWidth', 'minHeight', 'minLength', 'minLengthText', 'minText', 'minValue', 'minWidth', 'modal', 'modelValidation', 'mouseWheelEnabled', 'msgTarget', 'name', 'nameable', 'nanText', 'negativeText', 'overCls', 'padding', 'plugins', 'preventMark', 'publishes', 'readOnly', 'readOnlyCls', 'reference', 'regex', 'regexText', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'repeatTriggerClick', 'requiredCls', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectOnFocus', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'spinDownEnabled', 'spinUpEnabled', 'stateEvents', 'stateful', 'stateId', 'step', 'stripCharsRe', 'style', 'submitLocaleSeparator', 'submitValue', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'triggers', 'triggerWrapCls', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'validateBlank', 'validateOnBlur', 'validateOnChange', 'validateOnFocusLeave', 'validation', 'validationField', 'validator', 'value', 'valuePublishEvent', 'viewModel', 'vtype', 'vtypeText', 'weight', 'width', 'xtype'];
  };

  Ext_form_field_Number.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'sender'
    }, {
      name: 'added',
      parameters: 'sender,container,pos'
    }, {
      name: 'afterlayoutanimation',
      parameters: 'sender'
    }, {
      name: 'afterrender',
      parameters: 'sender'
    }, {
      name: 'autosize',
      parameters: 'sender,width'
    }, {
      name: 'beforeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedestroy',
      parameters: 'sender'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforerender',
      parameters: 'sender'
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
      name: 'change',
      parameters: 'sender,newValue,oldValue'
    }, {
      name: 'deactivate',
      parameters: 'sender'
    }, {
      name: 'destroy',
      parameters: 'sender'
    }, {
      name: 'dirtychange',
      parameters: 'sender,isDirty'
    }, {
      name: 'disable',
      parameters: 'sender'
    }, {
      name: 'enable',
      parameters: 'sender'
    }, {
      name: 'errorchange',
      parameters: 'sender,error'
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
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'keydown',
      parameters: 'sender,e'
    }, {
      name: 'keypress',
      parameters: 'sender,e'
    }, {
      name: 'keyup',
      parameters: 'sender,e'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'paste',
      parameters: 'sender,e'
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
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'specialkey',
      parameters: 'sender,e'
    }, {
      name: 'spin',
      parameters: 'sender,direction'
    }, {
      name: 'spindown',
      parameters: 'sender'
    }, {
      name: 'spinend',
      parameters: 'sender'
    }, {
      name: 'spinup',
      parameters: 'sender'
    }, {
      name: 'staterestore',
      parameters: 'sender,state'
    }, {
      name: 'statesave',
      parameters: 'sender,state'
    }, {
      name: 'validitychange',
      parameters: 'sender,isValid'
    }, {
      name: 'writeablechange',
      parameters: 'sender,Read'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_form_field_Number.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_field_Number.PROPERTIES());
    return Ext_form_field_Spinner.getProperties(properties);
  };

  Ext_form_field_Number.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_field_Number.EVENTS());
    return Ext_form_field_Spinner.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return ''}
  //static PROPERTIESOBJECT() { return {
  //}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_form_field_Number, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_field_Spinn.observedAttributes; //for (var property in Ext_form_field_Number.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_form_field_Number.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_field_Number.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_field_Number(properties, events) {
    return _Ext_form_field_Spinn.call(this, properties.concat(Ext_form_field_Number.PROPERTIES()), events.concat(Ext_form_field_Number.EVENTS())) || this;
  }

  var _proto = Ext_form_field_Number.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_field_Spinn.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_field_Spinn.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_field_Number;
}(Ext_form_field_Spinner);

export { Ext_form_field_Number as default };