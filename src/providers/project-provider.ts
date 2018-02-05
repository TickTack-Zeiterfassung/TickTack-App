import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { IDataProvider } from './i-data-provider';
import { Project } from '../models/project.interface';

/**
 * ProjectProvider
 * Mithilfe dieser Klasse koennen Instanzen vom Typ Project aus dem Backend:
 *  - erzeugt/geladen
 *  - gespeichert
 *  - oder geloescht werden.
 */
@Injectable()
export class ProjectProvider {

    constructor(public dataProvider: IDataProvider) {
    }

    /**
     * Liefert asynchron das angeforderte Projekt.
     * @param {string} id
     * @returns {Observable<Project>}
     */
    getById(id: string): Observable<Project> {
        return this.dataProvider.get('projects', id).map(value => {
            return value as Project;
        });
    }

    /**
     * Liefert asynchon alle Projekte des Benutzers.
     * @returns {Observable<Project[]>}
     */
    getAll(): Observable<Project[]> {
        return this.dataProvider.get('projects', null).map(value => {
            return value ? value as Array<Project> : [];
        });
    }

    /**
     * Loescht eine Instanz aus dem Backend.
     * @param {string} id
     * @returns {Promise<boolean>}
     */
    deleteById(id: string): Promise<boolean> {
        return this.dataProvider.delete('projects', id);
    }

    /**
     * Erstellt eine Instanz in dem Backend.
     * @param {Project} project
     * @returns {Promise<boolean>}
     */
    insert(project: Project) {
        return this.dataProvider.insert('projects', project);
    }

    /**
     * Updatet das übergebende Projekt in dem Backend.
     * @param {Project} project
     * @returns {Promise<boolean>}
     */
    update(project: Project) {
        return this.dataProvider.update('projects', project, project.id);
    }

}
