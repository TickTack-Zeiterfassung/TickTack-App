import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ProjectProvider } from "../../providers/project/project";
import { Project } from "../../models/project";
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
                public navCtrl: NavController,
                public projectProvider: ProjectProvider) {
    }

    ionViewWillLoad() {

        this.auth.isLoggedIn().then(loggedIn => {
            if (!loggedIn) {
                this.navCtrl.setRoot('LoginPage');
            }
        });
    }

    ionViewDidEnter() {

        this.projectProvider.getById('0').subscribe(project => {
            console.log(project);
        });

        this.projectProvider.getAll().subscribe(projects => {
            console.log(projects);
        });
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

    saveProject() {
        this.projectProvider.insert(({desc: 'Okay.'} as Project)).then(success => {
            console.log('Gespeichert');
        });
    }

}
