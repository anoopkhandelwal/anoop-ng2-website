/**
 * Created by anoop on 9/4/17.
 */
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'skills-comp',
    template: require('./skills.component.html'),
    styles: [require('../profile/profile.scss') , require('./skills.scss')],
    encapsulation: ViewEncapsulation.None,
    providers: []
})
export class SkillsComponent {
}
