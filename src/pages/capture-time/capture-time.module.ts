import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaptureTimePage } from './capture-time';

@NgModule({
  declarations: [
    CaptureTimePage,
  ],
  imports: [
    IonicPageModule.forChild(CaptureTimePage),
  ],
})
export class CaptureTimePageModule {}
