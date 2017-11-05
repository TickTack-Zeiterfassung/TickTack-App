import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {IAuthProvider} from '../../providers/i-auth/i-auth';

/**
 * @Author Marcel
 * Seite zum Verwalten aller Projekte
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

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
