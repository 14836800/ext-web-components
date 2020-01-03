import Ext_dataview_listswiper_Stepper from './Ext/dataview/listswiper/Stepper.js';
import ElementParser from './ElementParser.js';

export default class EWCListswiperstepper extends Ext_dataview_listswiper_Stepper {
  constructor() {
    super ([], []);
    this.xtype = 'listswiperstepper';
  }
}
window.customElements.define('ext-listswiperstepper', ElementParser.withParsedCallback(EWCListswiperstepper));