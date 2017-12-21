import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProjectListComponent } from './project-list/project-list';

@NgModule({
    declarations: [
        ProjectListComponent
    ],
    imports: [IonicModule],
    exports: [
        ProjectListComponent
    ]
})
export class ComponentsModule{}