/**
 * Created by anoop on 9/4/17.
 */
import {Component, ViewEncapsulation} from '@angular/core';
@Component({
    selector: 'summary-comp',
    template: require('./summary.component.html'),
    styles: [require('../profile/profile.scss')],
    encapsulation: ViewEncapsulation.None,
    providers: []
})
export class SummaryComponent {
}
