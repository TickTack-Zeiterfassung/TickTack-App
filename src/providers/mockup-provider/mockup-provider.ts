import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {IDataProvider} from "../i-data-provider/i-data-provider";
import {Project} from "../../model/project";

/**
 * @Author Matthias
 *
 * MockupProvider
 * Mithilfe dieser Klasse koennen die Funktionen ohne ein existierendes Backend geladen werden.
 */

@Injectable()
export class MockupProvider implements IDataProvider {

    constructor() {
    }

    /**
     * Liefert Daten vom Backend.
     * @params itemName Name des Objektes
     * @params id ID fuer die Selektion eines bestimmten Objektes
     * @returns {any}
     */
    public get(itemName: string, id: string): any {

        if (itemName === 'Project') {
            switch (id) {
                case '1':
                    return <Project>{id: '1', desc: 'Test'};
            }
        }

        return null;
    }

    /**
     * Erstellt Daten im Backend.
     * @params itemName Name des Objektes
     * @params item Objekt das abgespeichert werden soll
     * @returns {boolean}
     */
    public insert(itemName: string, item: any): boolean {
        return null;
    }

    /**
     * Aktualisiert Daten im Backend.
     * @param itemName Name des Objektes
     * @param item Objekt mit neuen Daten
     * @param id ID des zu aendernden Objektes
     * @returns {boolean}
     */
    public update(itemName: string, item: any, id: string): boolean {
        return null;
    }

    /**
     * Löscht Daten aus dem Backend.
     * @param itemName Name des Objektes
     * @param id ID des zu loeschenden Objektes
     * @returns {boolean}
     */
    public delete(itemName: string, id: string): boolean {
        return null;
    }
}
