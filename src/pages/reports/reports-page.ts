import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { IAuthProvider } from '../../providers/i-auth-provider';

/**
 * @Author Marcel
 * Liefert eine Auswertung über alle erfassten zeiten
 */

@IonicPage({
    segment: 'report'
})
@Component({
    selector: 'page-report',
    templateUrl: 'reports-page.html',
})
export class ReportsPage {

    constructor(private auth: IAuthProvider,
                public navCtrl: NavController
    ) {}

    ionViewWillLoad() {
        if (!this.auth.isLoggedIn()) {
            this.navCtrl.setRoot('LoginPage');
        }
    }

}
