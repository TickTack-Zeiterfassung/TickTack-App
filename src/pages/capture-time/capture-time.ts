import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProjectProvider} from "../../providers/project/project";
import {Project} from "../../model/project";

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

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public projectProvider: ProjectProvider) {
    }

    ionViewDidLoad() {

        this.testProject = this.projectProvider.getById('1');
        console.log(this.testProject);
    }

}
