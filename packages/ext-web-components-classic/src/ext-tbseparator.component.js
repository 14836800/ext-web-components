//import Ext_toolbar_Separator from '@sencha/ext-runtime-base/dist/./Ext/toolbar/Separator.js';
import Ext_toolbar_Separator from './Ext/toolbar/Separator.js';
import ElementParser from './ElementParser.js';

export default class EWCTbseparator extends Ext_toolbar_Separator {
    constructor() {
        super ([], []);
        this.xtype = 'tbseparator';
    }

}
window.customElements.define('ext-tbseparator', ElementParser.withParsedCallback(EWCTbseparator));
