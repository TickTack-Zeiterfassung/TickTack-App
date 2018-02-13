import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportProjectPage } from './report-project-page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
      ReportProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportProjectPage),
      TranslateModule.forChild()
  ],
})
export class ReportDetailPageModule {}
