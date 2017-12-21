import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { IAuthProvider } from '../../../providers/i-auth-provider';

/**
 * Diese Seite bietet dem Anwender die Möglichkeit ein Projekt auszuwählen, bzw. ein neues zu erstellen
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
                private navCtrl: NavController
    ) {}

    ionViewWillLoad() {
        if (!this.auth.isLoggedIn()) {
            this.navCtrl.setRoot('LoginPage');
        }
    }

    onClickCreateNewProject(): void {
        this.navCtrl.push('ProjectDetailPage');
    }


}
