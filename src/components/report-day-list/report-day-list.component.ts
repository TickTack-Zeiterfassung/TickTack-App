import { Component, Input, OnInit } from '@angular/core';
import { Project } from "../../models/project.interface";
import { NavController } from "ionic-angular";
import { CapturedTimeProvider } from '../../providers/captured-time-provider';
import { CapturedTime } from '../../models/captured-time.interface';
import { ReportDay } from '../../models/report-day-list.interface';

/**
 * Zeigt eine Liste aller gespeicherten Zeiten aus allen Projekten des Anwenders
 */
@Component({
    selector: 'report-day-list',
    templateUrl: 'report-day-list.component.html'
})
export class ReportDayListComponent implements OnInit {
    @Input('pageToPush') pageToPush: string;

    reportDayList: ReportDay[];

    constructor(private navCtrl: NavController,
                private capturedTimeProvider: CapturedTimeProvider
    ) {}

    ngOnInit(): void {
        this.getCapturedTimes();
    }

    onSelectProject(project: Project): void {
        this.navCtrl.push(this.pageToPush, {'project': project});
    }

    getCapturedTimes(): void {
        this.capturedTimeProvider.getAll().subscribe((capturedTimes: CapturedTime[]) => {
            console.log(capturedTimes);
            this.provideData(capturedTimes);
        });
    }

    /**
     * TODO Methode ist nur provisorisch implementiert und muss umgeschrieben werden
     * @param {CapturedTime[]} capturedTimes
     */
    provideData(capturedTimes: CapturedTime[]): void {
        this.reportDayList = [];

        let reportDay: ReportDay = {} as ReportDay;

        capturedTimes.forEach((capturedTime: CapturedTime) => {
            reportDay.capturedTimes = [];
            reportDay.capturedTimes.push(capturedTime);
            reportDay.day = capturedTime.from;
        })
    }

}
