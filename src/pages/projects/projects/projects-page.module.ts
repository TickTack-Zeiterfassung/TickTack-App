import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsPage } from './projects-page';
import { ProjectListComponent } from '../../../components/project-list/project-list';

@NgModule({
    declarations: [
        ProjectsPage,

        ProjectListComponent
    ],
    imports: [
        IonicPageModule.forChild(ProjectsPage),
        TranslateModule.forChild(),
    ]
})
export class ProjectsPageModule {
}
