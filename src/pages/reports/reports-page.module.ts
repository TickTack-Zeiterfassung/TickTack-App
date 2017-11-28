import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ReportsPage } from './reports-page';

@NgModule({
    declarations: [
        ReportsPage,
    ],
    imports: [
        IonicPageModule.forChild(ReportsPage),
        TranslateModule.forChild()
    ],
})
export class ReportPageModule {
}
