import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportTimePage } from './report-time-page';

@NgModule({
  declarations: [
    ReportTimePage,
  ],
  imports: [
    IonicPageModule.forChild(ReportTimePage),
  ],
})
export class ReportTimePageModule {}
