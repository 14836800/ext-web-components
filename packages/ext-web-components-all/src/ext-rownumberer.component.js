import Ext_grid_column_RowNumberer from './Ext/grid/column/RowNumberer.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtRownumberer extends Ext_grid_column_RowNumberer {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'rownumberer'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-rownumberer', ExtRownumberer);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-rownumberer', HTMLParsedElement.withParsedCallback(ExtRownumberer))
//export default reactify(ExtRownumberer);