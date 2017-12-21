import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';
import { IAuthProvider } from '../../providers/i-auth-provider';
import { Project } from '../../models/project.interface';
import { UserInterfaceProvider } from '../../services/user-interface-service';
import { ProjectProvider } from '../../providers/project-provider';
import { Subject } from 'rxjs/Subject';

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

    activeProjects: Project[];

    private ngUnsubscribe: Subject<any> = new Subject();

    constructor(private auth: IAuthProvider,
                private navCtrl: NavController,
                private uiService: UserInterfaceProvider,
                private projectProvider: ProjectProvider
    ) {}

    ionViewWillLoad(): void {
        this.auth.isLoggedIn()
            .then(loggedIn => {
                    if (!loggedIn) {
                        this.navCtrl.setRoot('LoginPage');
                    }
                }
            );

        this.getActiveProjects();
    }

    ionViewWillUnload() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    /**
     * Holt alle Projekte und filtert alle inaktiven Projekte heraus
     */
    getActiveProjects(): void {
        this.projectProvider.getAll().takeUntil(this.ngUnsubscribe).subscribe((projects: Project[]) => {
            this.activeProjects = projects.filter((project: Project) => {
               return project.active;
            });
        });
    }

    /**
     * Eventlistener für die Slieds. Wird geworfen sobald sich ein Slide geändert hat.
     * @param event das übergebene Event
     */
    slideChanged(event): void {
        let project: Project = this.activeProjects[event.realIndex];
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
        this.uiService.presentToast('toast.project-time-recorded');
    }

    /**
     * Zählt jede Sekunde um 1 hoch
     */
    startInterval(): void {
        this.interval = setInterval(() => {
            this.recordedTime += 1;
        }, 1000)
    }

    /**
     * Beendet das Intervall
     */
    stopInterval(): void {
        clearInterval(this.interval);
    }
}
