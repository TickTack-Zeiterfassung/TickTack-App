import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserInfo } from "../../models/user-info";
import { UserInfoProvider } from "../../providers/user-info-provider";
import { IAuthProvider } from '../../providers/i-auth-provider';
import { ProjectProvider } from '../../providers/project-provider';
import { Project } from '../../models/project.interface';

/**
 * @Author Matthias
 * @Info TestPage
 * Testen der Datenbank-Funktionen
 */

@IonicPage({
    segment: 'test'
})
@Component({
    selector: 'page-test',
    templateUrl: 'test-page.html',
})
export class TestPage {

    public id: string;
    public desc: string;

    public userInfo: UserInfo = new UserInfo();
    public newUserInfo: UserInfo = new UserInfo();

    public projects: Project[] = [];

    constructor(private auth: IAuthProvider,
                public navCtrl: NavController,
                public projectProvider: ProjectProvider,
                public userInfoProvider: UserInfoProvider) {
    }

    ionViewWillLoad(): void {

        this.auth.isLoggedIn()
            .then(loggedIn => {
                    if (!loggedIn) {
                        this.navCtrl.setRoot('LoginPage');
                    }
                }
            );
    }

    ionViewDidEnter(): void {

        this.projectProvider.getById('0')
            .subscribe(project => {
                    console.log(project);
                }
            );

        this.projectProvider.getAll()
            .subscribe(projects => {
                    this.projects = projects;
                    console.log(projects);
                }
            );

        this.userInfoProvider.get()
            .subscribe(userInfo => {
                    this.userInfo = userInfo;
                    console.log(userInfo);
                }
            );
    }

    /**
     * Logout-Funktion
     */
    logout(): void {
        this.auth.logout()
            .then(result => {
                    if (result) {
                        this.navCtrl.setRoot('LoginPage');
                    }
                }
            );
    }

    createNewProject(): void {
        this.projectProvider.insert(({desc: this.desc} as Project))
            .then(success => {
                    console.log('Projekt angelegt');
                }
            );
    }

    updateProject(): void {
        this.projectProvider.update({id: this.id, desc: this.desc} as Project)
            .then(succes => {
                    console.log('Projekt geändert.');
                }
            );
    }

    deleteProject(project: Project): void {
        this.projectProvider.deleteById(project.id)
            .then(success => {
                    console.log('Projekt gelöscht.');
                }
            );
    }

    updateUserInfo(): void {
        this.userInfoProvider.update(this.newUserInfo)
            .then(success => {
                    console.log('Benutzerdaten aktualisiert.')
                }
            );
    }
}
