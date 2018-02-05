import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HelpPage } from './help-page';

@NgModule({
    declarations: [
        HelpPage,
    ],
    imports: [
        IonicPageModule.forChild(HelpPage),
        TranslateModule.forChild()
    ],
})
export class HelpPageModule {
}
