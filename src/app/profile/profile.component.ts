/**
 * Created by anoop on 8/4/17.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'profile',
    template: require('./profile.component.html'),
    styles: [require('./profile.scss')],
    encapsulation: ViewEncapsulation.None,
    providers: []
})
export class ProfileComponent extends OnInit {
    photo: string;
    nameHeader: string;
    backGroundImage: any;
    position: string;

    ngOnInit() {
        this.nameHeader = 'Anoop Khandelwal';
        this.position = 'Software Development Engineer';
        this.photo = 'http://www.anishdua.com/wp-content/uploads/2016/07/Light-Grey-Background-Hd-5-1.jpg';
    }

}
