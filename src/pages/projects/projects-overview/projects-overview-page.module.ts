import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsPage } from './projects-overview-page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
    declarations: [
        ProjectsPage
    ],
    imports: [
        IonicPageModule.forChild(ProjectsPage),
        TranslateModule.forChild(),
        ComponentsModule
    ]
})
export class ProjectsPageModule {
}
