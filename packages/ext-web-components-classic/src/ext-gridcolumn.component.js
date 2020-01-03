//import Ext_grid_Column from '@sencha/ext-runtime-base/dist/./Ext/grid/Column.js';
import Ext_grid_Column from './Ext/grid/Column.js';
import ElementParser from './ElementParser.js';

export default class EWCGridcolumn extends Ext_grid_Column {
    constructor() {
        super ([], []);
        this.xtype = 'gridcolumn';
    }

}
window.customElements.define('ext-gridcolumn', ElementParser.withParsedCallback(EWCGridcolumn));
