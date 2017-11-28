import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { CaptureTimePage } from './capture-time-page';

@NgModule({
    declarations: [
        CaptureTimePage,
    ],
    imports: [
        IonicPageModule.forChild(CaptureTimePage),
        TranslateModule.forChild()
    ],
})
export class CaptureTimePageModule {
}
