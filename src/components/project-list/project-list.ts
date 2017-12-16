import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { NavController } from 'ionic-angular';
import { PROJECT_LIST } from '../../mocks/project.mocks';

/**
 * Zeigt eine Liste aller vorhandenen Projekte des ANwenders
 */

@Component({
    selector: 'project-list',
    templateUrl: 'project-list.html'
})
export class ProjectListComponent {
  @Input('pageToPush') pageToPush: string;

    projects: Project[] = PROJECT_LIST;

    constructor(private navCtrl: NavController) {}

    onSelectProject(project: Project): void {
        this.navCtrl.push(this.pageToPush, { 'project': project });
    }

}
