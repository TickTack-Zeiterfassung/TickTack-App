import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {IAuthProvider} from '../../providers/i-auth/i-auth';

/**
 * @Author Marcel
 * Liefert eine Auswertung über alle erfassten zeiten
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

    constructor(private auth: IAuthProvider,
                public navCtrl: NavController) {
    }

    ionViewWillLoad() {

        this.auth.isLoggedIn().then(loggedIn => {
            if(!loggedIn) {
                this.navCtrl.setRoot('LoginPage');
            }
        });
    }

}
