import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';
import { IAuthProvider } from '../../providers/i-auth-provider';

/**
 * @Author Marcel
 * @Info RootPage
 * Seite zum Aufnehmen der Zeit
 */

@IonicPage({
    segment: 'capture-time'
})
@Component({
    selector: 'page-capture-time',
    templateUrl: 'capture-time-page.html',
})
export class CaptureTimePage {
    @ViewChild(Slides) slides: Slides;

    projects = [
        { color: 'green' },
        { color: 'red' },
        { color: 'yellow' },
        { color: 'pink' },
        { color: 'blue' },
    ];

    constructor(private auth: IAuthProvider,
                public navCtrl: NavController,) {
        document.addEventListener('scroll', function (e) { e.preventDefault(); }, false);
    }

    ionViewWillLoad(): void {
        this.auth.isLoggedIn()
            .then(loggedIn => {
                    if (!loggedIn) {
                        this.navCtrl.setRoot('LoginPage');
                    }
                }
            );
    }

    slideChanged(): void {
        console.log(this.slides.getActiveIndex());
    }

}
