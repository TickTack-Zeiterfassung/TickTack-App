import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { TestPage } from './test-page';

@NgModule({
    declarations: [
        TestPage,
    ],
    imports: [
        IonicPageModule.forChild(TestPage),
        TranslateModule.forChild()
    ],
})
export class TestPageModule {
}
