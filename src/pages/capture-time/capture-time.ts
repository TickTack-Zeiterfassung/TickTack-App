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

    public id: string;

    constructor(private auth: IAuthProvider,
                public navCtrl: NavController,
                public projectProvider: ProjectProvider) {
    }

    ionViewWillLoad(): void {

        this.auth.isLoggedIn().then(loggedIn => {
            if (!loggedIn) {
                this.navCtrl.setRoot('LoginPage');
            }
        });
    }

    ionViewDidEnter(): void {

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
    logout(): void {
        this.auth.logout().then(result => {
            if (result) {
                this.navCtrl.setRoot('LoginPage');
            }
        })
    }

    saveProject(): void {
        this.projectProvider.insert(({desc: 'Okay.'} as Project)).then(success => {
            console.log('Gespeichert');
        });
    }

    deleteProject(): void {
        this.projectProvider.deleteById(this.id).then(success => {
            console.log('Geloescht.');
        })
    }

}
