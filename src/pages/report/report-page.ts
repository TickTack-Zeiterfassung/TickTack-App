import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { IAuthProvider } from '../../providers/i-auth-provider';

/**
 * @Author Marcel
 * Liefert eine Auswertung über alle erfassten zeiten
 */

@IonicPage()
@Component({
    selector: 'page-report',
    templateUrl: 'report-page.html',
})
export class ReportPage {

    constructor(private auth: IAuthProvider,
                public navCtrl: NavController
    ) {}

    ionViewWillLoad() {
        if (!this.auth.isLoggedIn()) {
            this.navCtrl.setRoot('LoginPage');
        }
    }

}
