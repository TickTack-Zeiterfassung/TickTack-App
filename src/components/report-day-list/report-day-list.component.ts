import {Component, Input} from '@angular/core';
import {Project} from "../../models/project.interface";
import {NavController} from "ionic-angular";
import {ProjectProvider} from "../../providers/project-provider";

/**
 * Zeigt eine Liste aller gespeicherten Zeiten aus allen Projekten des Anwenders
 */
@Component({
    selector: 'report-day-list',
    templateUrl: 'report-day-list.component.html'
})
export class ReportDayListComponent {
    @Input('pageToPush') pageToPush: string;


    constructor(private navCtrl: NavController,
                private projectProvider: ProjectProvider) {
    }

    onSelectProject(project: Project): void {
        this.navCtrl.push(this.pageToPush, {'project': project});
    }

}
