import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { IAuthProvider } from "../../providers/i-auth/i-auth";

/**
 * @Author Marcel
 * @Info RootPage
 * Seite zum Aufnehmen der Zeit
 */

@IonicPage()
@Component({
    selector: 'page-capture-time',
    templateUrl: 'capture-time.html',
})
export class CaptureTimePage {

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

    /**
     * Logout-Funktion
     */
    logout(): void {
        this.auth.logout()
            .then(result => {
                    if (result) {
                        this.navCtrl.setRoot('LoginPage');
                    }
                }
            );
    }
}
