import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';
import { IAuthProvider } from '../../providers/i-auth-provider';
import { TranslateService } from '@ngx-translate/core';
import { Project } from '../../models/project.model';
import { UserInterfaceProvider } from '../../services/user-interface-service';
import { PROJECT_LIST } from '../../mocks/project.mocks';

/**
 * @Author Marcel
 * @Info RootPage
 * Seite zum Aufnehmen der Zeit
 */

@IonicPage({
    segment: 'capture-time'
})
@Component({
    selector: 'page-capture-time',
    templateUrl: 'capture-time-page.html',
})
export class CaptureTimePage {
    @ViewChild(Slides) slides: Slides;

    title: string;
    navBarColor: string;

    interval: number;
    recordedTime: number = 0;

    isTimeRecording: boolean; // Wird eine Projektzeit aufgenommen?
    isTimePlaying: boolean; // Ist das Aufnehmen pausiert?

    projects: Project[] = PROJECT_LIST;

    constructor(private auth: IAuthProvider,
                public navCtrl: NavController,
                private uiService: UserInterfaceProvider,
                private translate: TranslateService
    ) {}

    ionViewWillLoad(): void {
        this.auth.isLoggedIn()
            .then(loggedIn => {
                    if (!loggedIn) {
                        this.navCtrl.setRoot('LoginPage');
                    }
                }
            );
    }

    /**
     * Eventlistener für die Slieds. Wird geworfen sobald sich ein Slide geändert hat.
     * @param event das übergebene Event
     */
    slideChanged(event): void {
        let project: Project = this.projects[event.realIndex];
        this.title = project.name;
        this.navBarColor = project.color;
    }

    /**
     * Startet, bzw. stoppt das Aufnehmen der Zeit. Dabei ändert sich auch das Icon des großen FABs.
     */
    onTogglePlayPauseFAB(): void {
        if (!this.isTimeRecording && !this.isTimePlaying) {
            this.isTimeRecording = true;
        }

        if (this.isTimePlaying) {
            this.isTimePlaying = false;
            this.stopInterval();
        } else {
            this.isTimePlaying = true;
            this.startInterval();
        }

        // Blockiert das Swipen
        this.slides.lockSwipes(this.isTimeRecording);
    }

    /**
     * Beendet das Aufnehmen der Zeit
     */
    onClickFinischRecording(): void {
        this.isTimeRecording = false;
        this.isTimePlaying = false;

        this.stopInterval();
        this.recordedTime = 0;

        this.slides.lockSwipes(false);
        this.uiService.presentToast(this.translate.instant('toast.project-time-recorded'));
    }

    startInterval(): void {
        this.recordedTime += 1;
        this.interval = setInterval(() => {
            this.recordedTime += 1;
        }, 1000)
    }

    stopInterval(): void {
        clearInterval(this.interval);
    }
}
