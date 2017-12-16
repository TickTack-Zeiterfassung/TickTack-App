import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectDetailPage } from './project-detail';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        ProjectDetailPage,
    ],
    imports: [
        IonicPageModule.forChild(ProjectDetailPage),
        TranslateModule.forChild()
    ],
})
export class ProjectDetailPageModule {
}
