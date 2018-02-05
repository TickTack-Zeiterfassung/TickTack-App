import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ReportsPage } from './reports-overview-page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    declarations: [
        ReportsPage,
    ],
    imports: [
        IonicPageModule.forChild(ReportsPage),
        TranslateModule.forChild(),
        ComponentsModule
    ],
})
export class ReportPageModule {
}
