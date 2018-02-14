import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Project } from '../../../models/project.interface';
import { ReportProvider } from '../../../providers/report-provider';
import { ReportDay } from '../../../models/report-day-list.interface';

@IonicPage()
@Component({
    selector: 'page-report-detail',
    templateUrl: 'report-project-page.html',
})
export class ReportProjectPage {
    project = {} as Project;
    reports = [] as ReportDay[];
    totalTime: number = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams, public reportProvider: ReportProvider) {}

    ionViewWillLoad(): void {
        if (this.navParams.get('project')) {
            this.project = this.navParams.get('project') as Project;
            this.reportProvider.getProjectTimes(this.project.id)
                .subscribe(reports => {
                    this.reports = reports;
                    this.totalTime = this.calcTotalTime(reports);
            })
        }
    }

    /**
     * Ermittelt die gesamte Zeit in Millisekunden von mehreren Tagen.
     * @param {ReportDay[]} reports
     * @returns {number}
     */
    private calcTotalTime(reports: ReportDay[]): number {
        let time = 0;

        reports.forEach(report => {
            report.capturedTimes.forEach(_time => {
                time += _time.to - _time.from;
            });
        });

        return time;
    }

}
