import Ext_d3_hierarchy_tree_HorizontalTree_Component from './Ext/d3/hierarchy/tree/HorizontalTree'

export class ExtD3_treeComponent extends Ext_d3_hierarchy_tree_HorizontalTree_Component {

    constructor() {
        super ('','',{},'')
    }

}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-d3-tree', ExtD3_treeComponent);
    });
})();