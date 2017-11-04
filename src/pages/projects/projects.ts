import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProjectProvider} from '../../providers/project/project';
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
                public navCtrl: NavController,
                public projectProvider: ProjectProvider) {
    }

    ionViewWillLoad() {
        if (!this.auth.isLoggedIn()) {
            this.navCtrl.setRoot('LoginPage');
        }
    }

}
