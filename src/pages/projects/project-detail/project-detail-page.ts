import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput } from 'ionic-angular';
import { Project } from '../../../models/project.interface';
import { Color } from '../../../models/color.interface';
import { COLOR_LIST } from '../../../mocks/color.mocks';
import { ProjectProvider } from '../../../providers/project-provider';
import { UserInterfaceProvider } from '../../../services/user-interface-service';

/**
 * Über diese Seite kann der Anwender ein Projekt neu anlegen oder ein vorhandenes bearbeiten
 */

@IonicPage()
@Component({
    selector: 'page-project-detail',
    templateUrl: 'project-detail-page.html',
})
export class ProjectDetailPage {
    project = {} as Project;
    colors: Color[] = COLOR_LIST;

    isNewProject: boolean = true;

    textInputFocused: string;

    constructor(private navCtrl: NavController,
                private navParams: NavParams,
                private uiProvider: UserInterfaceProvider,
                private projectProvider: ProjectProvider
    ) {}

    ionViewWillLoad(): void {
        if (this.navParams.get('project')) {
            this.isNewProject = false;
            this.project = this.navParams.get('project') as Project;
        }

        this.getColors();
    }

    /**
     * Holt alle Farben die zur Verfügung stehen
     */
    getColors(): void {
        // TODO
    }

    /**
     * Speichert das Projekt, welches der Anwender neu angelegt hat
     */
    saveNewProject(): void {
        this.projectProvider.insert(this.project).then(() => {
            this.isNewProject = false;
            this.uiProvider.presentToast('toast.worked');
        })
    }

    /**
     * Speichert das Projekt, welches der Anwender bearbeitet hat
     */
    editProject(): void {
        this.projectProvider.update(this.project).then(() => {
            this.uiProvider.presentToast('toast.worked');
        })
    }

    /**
     * Fordert den Anwender auf zu bestätigen, dass er das Projekt löschen möchte
     */
    confirmDeleteProject(): void {
        this.uiProvider.showConfirm('alert.title.delete-project', 'alert.message.delete-project')
            .then((confirmed: boolean) => {
                if (confirmed) {
                    this.deleteProject();
                }
        })
    }

    /**
     * Löscht das Projekt anhand der Projekt ID
     */
    deleteProject(): void {
        this.projectProvider.deleteById(this.project.id).then(() => {
            this.navCtrl.pop();
            this.uiProvider.presentToast('toast.worked');
        })
    }



    /**
     * Speichert den Namen des Feldes, welches aktuell gefokust wird
     * @param {string} textInput
     */
    setFocus(textInput: string): void {
        this.textInputFocused = textInput;
    }

    /**
     * Löscht den Inhalt des Inputfeldes und setzt den Fokus auf dieses
     * @param {TextInput} textInput
     */
    clearTextInput(textInput: TextInput): void {
        textInput.value = '';
        textInput.setFocus();
    }

}
