import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ProjectProvider} from "../../providers/project/project";
import {Project} from "../../model/project";
import {IAuthProvider} from "../../providers/i-auth/i-auth";

/**
 * @Author Marcel
 *
 * RootPage
 * Über diese Klasse kann die Zeit aufgenommen werden.
 */

@IonicPage()
@Component({
    selector: 'page-capture-time',
    templateUrl: 'capture-time.html',
})
export class CaptureTimePage {

    private testProject: Project;

    constructor(private auth: IAuthProvider,
                public navCtrl: NavController,
                public projectProvider: ProjectProvider) {
    }

    ionViewWillLoad() {
        console.log('Check auth.');
        if (!this.auth.isLoggedIn()) {
            this.navCtrl.setRoot('LoginPage');
        }
    }

    ionViewDidLoad() {

        this.testProject = this.projectProvider.getById('1');
        console.log(this.testProject);
    }

    /**
     * Logout-Funktion
     */
    logout() {
        this.auth.logout().then(result => {
            if (result) {
                this.navCtrl.setRoot('LoginPage');
            }
        })
    }

}
