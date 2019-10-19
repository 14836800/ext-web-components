import Ext_calendar_view_Multi from './Ext/calendar/view/Multi.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCalendar_multiviewComponent extends Ext_calendar_view_Multi {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-multiview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-multiview', ExtCalendar_multiviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-multiview', HTMLParsedElement.withParsedCallback(ExtCalendar_multiviewComponent))