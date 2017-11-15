import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
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
    slides = [
        { color: 'green' },
        { color: 'red' },
        { color: 'yellow' },
        { color: 'pink' },
    ];

    constructor(private auth: IAuthProvider,
                public navCtrl: NavController,) {
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


}
