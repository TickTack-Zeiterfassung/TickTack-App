import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProjectProvider} from "../../providers/project/project";
import {Project} from "../../model/project";
import {IAuthProvider} from "../../providers/i-auth/i-auth";

/**
 * @Author Marcel
 * @Info RootPage
 * Über diese Klasse kann die Zeit aufgenommen werden.
 */

@IonicPage()
@Component({
    selector: 'page-capture-time',
    templateUrl: 'capture-time.html',
})
export class CaptureTimePage {

    private testProject: Project;

    constructor(private authProvider: IAuthProvider,
                public navCtrl: NavController,
                public navParams: NavParams,
                public projectProvider: ProjectProvider) {
    }

    ionViewWillLoad() {
        console.log('Check auth.');
        if(!this.authProvider.isLoggedIn()) {
            this.navCtrl.setRoot('LoginPage');
        }
    }

    ionViewDidLoad() {

        this.testProject = this.projectProvider.getById('1');
        console.log(this.testProject);
    }

}
