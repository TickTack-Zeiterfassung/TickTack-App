import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/**
 * IDataProvider
 *
 * Interface für die standartisierte Kommunikation zwischen der App und dem Backend-Server.
 */
@Injectable()
export class IDataProvider {

    /**
     * Liefert Daten vom Backend.
     * @returns {any}
     */
    public get(): any { return null; }

    /**
     * Erstellt Daten im Backend.
     * @param data
     * @returns {boolean}
     */
    public set(data: any): boolean { return null; }

    /**
     * Aktualisiert Daten im Backend.
     * @param data
     * @param where
     * @returns {boolean}
     */
    public update(data: any, where: any): boolean { return null; }

    /**
     * Löscht Daten aus dem Backend.
     * @param where
     * @returns {boolean}
     */
    public delete(where: any): boolean { return null }

}
