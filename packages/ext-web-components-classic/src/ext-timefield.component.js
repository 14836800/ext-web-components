//import Ext_form_Time from '@sencha/ext-runtime-base/dist/./Ext/form/Time.js';
import Ext_form_Time from './Ext/form/Time.js';
import ElementParser from './ElementParser.js';

export default class EWCTimefield extends Ext_form_Time {
    constructor() {
        super ([], []);
        this.xtype = 'timefield';
    }

}
window.customElements.define('ext-timefield', ElementParser.withParsedCallback(EWCTimefield));
