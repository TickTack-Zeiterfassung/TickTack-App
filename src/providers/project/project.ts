import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { IDataProvider } from "../i-data/i-data";
import { Project } from "../../model/project";

/**
 * @Author Matthias
 * @class ProjectProvider
 * Mithilfe dieser Klasse koennen Instanzen vom Typ Project aus dem Backend:
 *  - erzeugt/geladen
 *  - gespeichert
 *  - oder geloescht werden.
 */
@Injectable()
export class ProjectProvider {

    constructor(public dataProvider: IDataProvider) {
    }

    getById(id: string) {
        return <Project>this.dataProvider.get('Project', id);
    }

    /**
     * TODO
     * Loescht eine Instanz aus dem Backend.
     * @param {string} id
     */
    deleteById(id: string) {

    }

    /**
     * TODO
     * Speichert/Erstellt eine Instanz in dem Backend.
     * @param {Project} project
     */
    save(project: Project) {

    }

}
