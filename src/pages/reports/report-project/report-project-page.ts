import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Project } from '../../../models/project.interface';

@IonicPage()
@Component({
    selector: 'page-report-detail',
    templateUrl: 'report-project-page.html',
})
export class ReportProjectPage {
    project = {} as Project;
    totalTime: string = '86 Stunden 3 Minuten 5 Sekunden';

    mockProjects = [
        {
            day: 'Montag, 20.11.2018',
            stoppedTimes: [
                { period: '08:00 Uhr - 09:34 Uhr', activity: 'Bild gemalt' },
                { period: '10:00 Uhr - 11:20 Uhr' , activity: 'Projektmanagement' }
            ]
        },
        {
            day: 'Dienstag, 21.11.2018',
            stoppedTimes: [
                { period: '08:00 Uhr - 09:34 Uhr', activity: 'Bild gemalt' },
                { period: '10:00 Uhr - 11:20 Uhr' , activity: 'Projektmanagement' }
            ]
        }
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewWillLoad(): void {
        if (this.navParams.get('project')) {
            this.project = this.navParams.get('project') as Project;
        }
    }

}
