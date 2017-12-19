import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { NavController } from 'ionic-angular';
import { ProjectProvider } from '../../providers/project-provider';

/**
 * Zeigt eine Liste aller vorhandenen Projekte des ANwenders
 */

@Component({
    selector: 'project-list',
    templateUrl: 'project-list.html'
})
export class ProjectListComponent implements OnInit{
  @Input('pageToPush') pageToPush: string;

    projects: Project[];

    constructor(private navCtrl: NavController,
                private projectProvider: ProjectProvider
    ) {}

    ngOnInit(): void {
        this.getProjects();
    }

    onSelectProject(project: Project): void {
        this.navCtrl.push(this.pageToPush, { 'project': project });
    }

    getProjects(): void {
        this.projectProvider.getAll().subscribe((projects: Project[]) => {
            this.projects = projects;
            console.log(projects);
        });
    }

}
