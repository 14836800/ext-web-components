import Ext_BreadcrumbBar from './Ext/BreadcrumbBar.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtBreadcrumbbarComponent extends Ext_BreadcrumbBar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'breadcrumbbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-breadcrumbbar', ExtBreadcrumbbarComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-breadcrumbbar', HTMLParsedElement.withParsedCallback(ExtBreadcrumbbarComponent))