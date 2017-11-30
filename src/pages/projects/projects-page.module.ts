import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsPage } from './projects-page';

@NgModule({
    declarations: [
        ProjectsPage,
    ],
    imports: [
        IonicPageModule.forChild(ProjectsPage),
        TranslateModule.forChild()
    ],
})
export class ProjectsPageModule {
}
