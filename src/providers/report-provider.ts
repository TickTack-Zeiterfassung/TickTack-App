import { Injectable } from '@angular/core';
import { IDataProvider } from './i-data-provider';
import { Observable } from 'rxjs/Observable';
import { ReportDay } from '../models/report-day-list.interface';
import { CapturedTime } from '../models/captured-time.interface';

@Injectable()
export class ReportProvider {

    constructor(private dataProvider: IDataProvider) {

    }

    /**
     * Liefert alle Zeiten eines Projektes
     * @param {string} projectId
     * @returns {Observable<ReportDay[]>}
     */
    public getProjectTimes(projectId: string): Observable<ReportDay[]> {
        return this.dataProvider.get('times', null).map(arr => this.mapReportDays(arr, projectId));
    }

    /**
     * Wandelt das strukturlose Array in ReportDays um.
     * @param {any[]} times
     * @param {string} projectId
     * @returns {ReportDay[]}
     */
    private mapReportDays(times: any[], projectId: string = null): ReportDay[] {
        let reportDays = [] as ReportDay[];
        let currentDay = {capturedTimes: []} as ReportDay;

        times.forEach((time: CapturedTime) => {

            if(projectId === null || time.projectId === projectId) {

                if(!currentDay.day || !this.isSameDay(new Date(currentDay.day), new Date(time.from))) {

                    if(currentDay.day) {
                        reportDays.push(currentDay);
                        currentDay = {capturedTimes: []} as ReportDay;
                    }

                    let tmpDate = new Date(time.from);
                    currentDay.day = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate()).getTime();
                    currentDay.capturedTimes.push(time);

                } else {
                    currentDay.capturedTimes.push(time);
                }
            }
        });

        reportDays.push(currentDay);

        return reportDays;
    }

    /**
     * Überprüft ob zwei Daten den gleichen Tag darstellen.
     * @param d1
     * @param d2
     * @returns {boolean}
     */
    private isSameDay(d1: Date, d2: Date): boolean {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }
}