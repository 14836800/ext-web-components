import Ext_d3_hierarchy_partition_Partition from './Ext/d3/hierarchy/partition/Partition.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtD3_partition extends Ext_d3_hierarchy_partition_Partition {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'd3-partition'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-partition', ExtD3_partition);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-partition', HTMLParsedElement.withParsedCallback(ExtD3_partition))
//export default reactify(ExtD3_partition);