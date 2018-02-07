import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IAuthProvider } from '../providers/i-auth-provider';
import { TranslateService } from '@ngx-translate/core';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = 'LoginPage';

    pages: Array<{ title: string, icon: string, component: any }>;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private auth: IAuthProvider,
                private translate: TranslateService
    ) {
        this.initializeApp();
        this.translate.setDefaultLang('de');
        this.setPages();
    }

    initializeApp(): void {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    setPages(): void {
        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'title.capture-time', icon: 'time', component: 'CaptureTimePage'},
            {title: 'title.projects', icon: 'clipboard', component: 'ProjectsPage'},
            {title: 'title.reports', icon: 'stats', component: 'ReportsPage'},
            {title: 'title.settings', icon: 'build', component: 'SettingsPage'},
            {title: 'title.help', icon: 'help-circle', component: 'HelpPage'}
        ];
    }

    openPage(page): void {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    /**
     * Logout-Funktion
     */
    logout(): void {
        this.auth.logout()
            .then(result => {
                    if (result) {
                        this.nav.setRoot('LoginPage');
                    }
                }
            );
    }
}

