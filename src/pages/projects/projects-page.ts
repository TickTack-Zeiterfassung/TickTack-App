import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { IAuthProvider } from '../../providers/i-auth-provider';

/**
 * @Author Marcel
 * Seite zum Verwalten aller Projekte
 */

@IonicPage({
    segment: 'projects'
})
@Component({
  selector: 'page-projects',
  templateUrl: 'projects-page.html',
})
export class ProjectsPage {

    constructor(private auth: IAuthProvider,
                public navCtrl: NavController
    ) {}

    ionViewWillLoad() {
        if (!this.auth.isLoggedIn()) {
            this.navCtrl.setRoot('LoginPage');
        }
    }

}
