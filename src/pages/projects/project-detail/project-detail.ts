import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput } from 'ionic-angular';
import { Project } from '../../../models/project.model';
import { Color } from '../../../models/color.model';
import { COLOR_LIST } from '../../../mocks/color.mocks';

/**
 * Über diese Seite kann der Anwender ein Projekt neu anlegen oder ein vorhandenes bearbeiten
 */

@IonicPage()
@Component({
    selector: 'page-project-detail',
    templateUrl: 'project-detail.html',
})
export class ProjectDetailPage {
    project: Project = new Project();
    colors: Color[] = COLOR_LIST;

    isNewProject: boolean = true;

    textInputFocused: string;

    constructor(private navCtrl: NavController,
                private navParams: NavParams) {
    }

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
     * Speichert das Projekt, welches der ANwender neu angelegt hat
     */
    saveProject(): void {

    }

    /**
     * Speichert das Projekt, welches der Anwender bearbeitet hat
     */
    editProject(): void {

    }

    /**
     * Fordert den Anwender auf zu bestätigen, dass er das Projekt löschen möchte
     */
    confirmDeleteProject(): void {

    }

    /**
     * Löscht das Projekt
     */
    deleteProject(): void {

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
