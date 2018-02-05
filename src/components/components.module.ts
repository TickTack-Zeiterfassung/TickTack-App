import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {ProjectListComponent} from './project-list/project-list.component';
import {ReportDayListComponent} from './report-day-list/report-day-list.component';

@NgModule({
    declarations: [
        ProjectListComponent,
        ReportDayListComponent
    ],
    imports: [IonicModule],
    exports: [
        ProjectListComponent,
        ReportDayListComponent
    ]
})
export class ComponentsModule {
}