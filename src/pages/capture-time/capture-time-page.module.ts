import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { CaptureTimePage } from './capture-time-page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    declarations: [
        CaptureTimePage,
    ],
    imports: [
        IonicPageModule.forChild(CaptureTimePage),
        TranslateModule.forChild(),
        PipesModule
    ],
})
export class CaptureTimePageModule {
}
